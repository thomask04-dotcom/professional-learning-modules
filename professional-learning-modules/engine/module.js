/* Professional learning module engine.
   Shared by every module. Each module page loads, in order:
   content.js (M config + data), tools.js (toolHTML + wireTool), then this file. */
"use strict";
/* ---------------- storage (safe) ---------------- */
var KEY = M.key;
var mem = {done:{}, notes:{}, todo:{}, chk:{}};
try { var raw = window.localStorage.getItem(KEY); if (raw) { var p = JSON.parse(raw); mem.done = p.done||{}; mem.notes = p.notes||{}; mem.todo = p.todo||{}; mem.chk = p.chk||{}; } } catch(e) {}
function save(){ try { window.localStorage.setItem(KEY, JSON.stringify(mem)); } catch(e) {} }

/* ---------------- sections ---------------- */
var SECTIONS = [
 {id:"welcome",label:"Welcome",grp:"Start here",r:renderWelcome},
 {id:"ideas",label:"The big ideas",grp:"Start here",r:renderIdeas},
 {id:"prog",label:"Progression explorer",grp:"Start here",r:renderProg},
 {id:"wm",label:"Working mathematically",grp:"Start here",r:renderWM},
 {id:"es1",label:"Early Stage 1",grp:"Stage by stage",r:function(){return renderStage("es1");},stage:"es1"},
 {id:"s1",label:"Stage 1",grp:"Stage by stage",r:function(){return renderStage("s1");},stage:"s1"},
 {id:"s2",label:"Stage 2",grp:"Stage by stage",r:function(){return renderStage("s2");},stage:"s2"},
 {id:"s3",label:"Stage 3",grp:"Stage by stage",r:function(){return renderStage("s3");},stage:"s3"},
 {id:"models",label:"Models across K–6",grp:"Pull it together",r:renderModels},
 {id:"sorter",label:"Misconception sorter",grp:"Pull it together",r:renderSorter},
 {id:"reflect",label:"Reflect and plan",grp:"Pull it together",r:renderReflect}
];
var current = 0;

function $(s,el){return (el||document).querySelector(s);}
function $$(s,el){return Array.prototype.slice.call((el||document).querySelectorAll(s));}
function esc(t){return String(t).replace(/[&<>"]/g,function(c){return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c];});}

function buildNav(){
 var side=$("#side"), h="", g="";
 SECTIONS.forEach(function(s,i){
  if(s.grp!==g){g=s.grp;h+='<div class="grp">'+g+'</div>';}
  var dotStyle = s.stage && !mem.done[s.id] ? ' style="border-color:'+STAGES[s.stage].col+'"' : '';
  h+='<button data-i="'+i+'" class="'+(i===current?"on":"")+'" aria-current="'+(i===current?"page":"false")+'"><span class="dot'+(mem.done[s.id]?" done":"")+'"'+dotStyle+'></span>'+s.label+'</button>';
 });
 side.innerHTML=h;
 $$("button",side).forEach(function(b){b.onclick=function(){go(+b.dataset.i);};});
 var sel=$("#mobSel");
 sel.innerHTML=SECTIONS.map(function(s,i){return '<option value="'+i+'"'+(i===current?" selected":"")+'>'+(mem.done[s.id]?"✓ ":"")+s.label+'</option>';}).join("");
 sel.onchange=function(){go(+sel.value);};
 var n=SECTIONS.filter(function(s){return mem.done[s.id];}).length;
 $("#progTxt").textContent=n+" of "+SECTIONS.length+" sections";
 $("#progFill").style.width=(100*n/SECTIONS.length)+"%";
}

function go(i){
 current=i; buildNav();
 var s=SECTIONS[i], pg=$("#page");
 pg.innerHTML=s.r()+doneBar(s,i);
 wire(s.id);
 var db=$("#doneBtn"); if(db) db.onclick=function(){mem.done[s.id]=!mem.done[s.id];save();go(i);};
 var nx=$("#nextBtn"); if(nx) nx.onclick=function(){if(!mem.done[s.id]){mem.done[s.id]=true;save();} go(i+1);};
 var pv=$("#prevBtn"); if(pv) pv.onclick=function(){go(i-1);};
 try{window.scrollTo(0,0);}catch(e){}
 var m=document.querySelector("main"); if(m) m.scrollTop=0;
}

function doneBar(s,i){
 var d=!!mem.done[s.id];
 return '<div class="done-bar'+(d?" is-done":"")+'"><div><b>'+(d?"Section complete ✓":"Finished this section?")+'</b><div class="note">'+(d?"You can come back at any time.":"Mark it complete to track your progress.")+'</div></div><div class="nextprev">'+
 (i>0?'<button class="btn ghost" id="prevBtn">← Back</button>':'')+
 '<button class="btn ghost" id="doneBtn">'+(d?"Mark as not done":"Mark complete")+'</button>'+
 (i<SECTIONS.length-1?'<button class="btn" id="nextBtn">Next: '+SECTIONS[i+1].label+' →</button>':'')+'</div></div>';
}

/* ---------------- renderers ---------------- */
function renderWelcome(){
 var rows=ORDER.map(function(k){var S=STAGES[k],C=STAGE_CONTENT[k];return '<tr><td><span class="pill" style="background:'+S.col+';color:#fff;border-color:'+S.col+'">'+S.name+'</span><div class="note" style="margin-top:4px">'+S.years+'</div></td><td>'+S.fa+'</td><td>'+C.outcomes.map(function(o){return o[0];}).join(", ")+'</td></tr>';}).join("");
 return '<div class="hero" style="border-left-color:var(--accent)"><span class="tag" style="background:var(--accent-soft);color:var(--accent)">Welcome</span><h2>'+M.welcomeH2+'</h2><p>'+M.welcomeP+'</p></div>'+
 '<section class="blk"><h3>What you’ll do</h3><div class="grid3">'+
 card("Explore","the six big ideas and how each one grows from Kindergarten to Year 6.")+
 card("Diagnose","misconceptions with flip cards, short quizzes and a misconception sorter.")+
 card("Rework","closed tasks into rich ones that embed Working mathematically, with one makeover for each stage.")+
 card("Try",M.tryText)+
 card("Reflect","on your own students and plan next steps. Your notes save in this browser.")+
 '</div></section>'+
 '<section class="blk"><h3>'+M.namesH3+'</h3><p class="lead">'+M.namesP+'</p><table class="simple"><thead><tr><th>Stage</th><th>Focus area name</th><th>Outcomes</th></tr></thead><tbody>'+rows+'</tbody></table></section>'+
 '<section class="blk"><h3>Suggested pathways</h3><div class="grid2"><div class="card"><h4 style="margin-bottom:6px">On your own (about 45 minutes)</h4><ul class="tight"><li>Big ideas and the progression explorer</li><li>Your stage, plus the stage before it</li><li>The misconception sorter</li><li>Reflect and plan</li></ul></div><div class="card"><h4 style="margin-bottom:6px">As a staff or PLC session (about 60 minutes)</h4><ul class="tight"><li>Whole staff: big ideas and progression (15 min)</li><li>Stage teams: their stage section and tool (25 min)</li><li>Whole staff: misconception sorter (10 min)</li><li>Reflection prompts and next steps (10 min)</li></ul></div></div><p class="note" style="margin-top:12px">Tip: most difficulties in a stage begin in the stage before it, so look one stage back as well as at your own.</p></section>'+
 checkHTML("pre");
}
function card(t,d){return '<div class="card"><b>'+t+'</b> <span style="color:var(--ink2)">'+d+'</span></div>';}

function renderIdeas(){
 return '<div class="hero"><span class="tag" style="background:var(--accent-soft);color:var(--accent)">Big ideas</span><h2>Six ideas run from K to 6</h2><p>'+M.ideasP+'</p></div>'+
 '<div class="ideas">'+IDEAS.map(function(d,i){return '<button class="idea" data-i="'+i+'"><div class="num">'+(i+1)+'</div><h4>'+d.t+'</h4><p>'+d.d+'</p></button>';}).join("")+'</div>'+
 '<div class="ideadetail card" id="ideaDetail"><p class="note" style="margin:0">Select an idea above to see what it looks like at each stage.</p></div>'+
 '<p class="note" style="margin-top:14px">'+M.ideasNote+'</p>';
}
function showIdea(i){
 var d=IDEAS[i];
 $$(".idea").forEach(function(b){b.classList.toggle("on",+b.dataset.i===i);});
 $("#ideaDetail").innerHTML='<h4 style="font-size:18px;margin-bottom:10px">'+(i+1)+'. '+d.t+' — at each stage</h4>'+ORDER.map(function(k){return '<div class="srow"><span class="sl" style="background:'+STAGES[k].col+'">'+STAGES[k].name+'</span><span>'+d.s[k]+'</span></div>';}).join("");
}

function renderProg(){
 return '<div class="hero"><span class="tag" style="background:var(--accent-soft);color:var(--accent)">Progression</span><h2>How the focus area grows</h2><p>'+M.progP+'</p></div>'+
 '<div class="aspects" role="tablist">'+ASPECTS.map(function(a,i){return '<button role="tab" data-k="'+i+'" class="'+(i===0?"on":"")+'">'+a.l+'</button>';}).join("")+'</div>'+
 '<div class="pcols" id="pcols"></div>'+
 '<section class="blk"><h3>What changes between stages</h3><div class="shifts">'+
 M.shifts.map(function(x){return '<div class="shift"><div class="arr" style="color:'+STAGES[x[0]].col+'">'+x[1]+'</div>'+x[2]+'</div>';}).join("")+
 '</div></section>';
}
function showAspect(i){
 var a=ASPECTS[i];
 $$(".aspects button").forEach(function(b){b.classList.toggle("on",+b.dataset.k===i);});
 $("#pcols").innerHTML=ORDER.map(function(k){var S=STAGES[k];return '<div class="pcol"><div class="ph" style="background:'+S.col+'">'+S.name+'<small>'+S.years+'</small></div><div class="pb">'+a.v[k]+'</div></div>';}).join("");
}

function renderStage(k){
 var S=STAGES[k], C=STAGE_CONTENT[k];
 var h='<div class="hero" style="border-left-color:'+S.col+'"><span class="tag" style="background:'+S.soft+';color:'+S.col+'">'+S.name+' · '+S.years+'</span><h2>'+S.fa+'</h2><p>'+C.lead+'</p></div>';
 h+='<section class="blk"><h3><span class="n">1</span>Outcomes</h3>'+C.outcomes.map(function(o){return '<div class="outc"><code style="background:'+S.col+'">'+o[0]+'</code><span>'+o[1]+'</span></div>';}).join("")+'</section>';
 h+='<section class="blk"><h3><span class="n">2</span>Content at a glance</h3><p class="lead">Select a content heading to see its content points.</p>'+C.content.map(function(c){return '<div class="acc"><button aria-expanded="false"><span>'+(c[0]?'<span class="part" style="background:'+S.col+'">'+c[0]+'</span>':'')+c[1]+'</span><span class="ch">›</span></button><div class="body"><ul class="tight">'+c[2].map(function(p){return '<li>'+p+'</li>';}).join("")+'</ul></div></div>';}).join("")+'</section>';
 h+='<section class="blk"><h3><span class="n">3</span>What teachers need to know</h3><div class="grid2">'+C.know.map(function(x){return '<div class="kcard" style="border-top-color:'+S.col+'"><h4>'+x[0]+'</h4><p>'+x[1]+'</p></div>';}).join("")+'</div></section>';
 h+='<section class="blk"><h3><span class="n">4</span>Misconceptions: what you might see</h3><p class="lead">Read what the student does, think about what’s behind it, then select the card to check.</p><div class="flips">'+C.misc.map(function(m){return '<button class="flip" aria-pressed="false"><div class="in"><div class="f"><div class="k">What you might see</div><div class="say">'+m.see+'</div><div class="hint">What’s behind this? Select to reveal ↻</div></div><div class="b"><div class="k">Misconception</div><h4>'+m.name+'</h4><p><b>Respond:</b> '+m.resp+'</p><span class="pill '+({n:"src-nesa",d:"src-dio",a:"src-add"})[m.src]+'">'+({n:"NESA",d:"Diocesan PL slides",a:"Additional commentary"})[m.src]+'</span></div></div></button>';}).join("")+'</div></section>';
 h+='<section class="blk"><h3><span class="n">5</span>Try it</h3>'+toolHTML(C.tool)+'</section>';
 h+='<section class="blk"><h3><span class="n">6</span>Working mathematically: task makeover</h3>'+makeoverHTML(k)+'</section>';
 h+='<section class="blk"><h3><span class="n">7</span>Teaching advice</h3><div class="card"><ul class="tight">'+C.advice.map(function(a){return '<li>'+a+'</li>';}).join("")+'</ul></div></section>';
 h+='<section class="blk"><h3><span class="n">8</span>Vocabulary</h3><div class="chips">'+C.vocab.map(function(v){return '<span>'+v+'</span>';}).join("")+'</div></section>';
 h+='<section class="blk"><h3><span class="n">9</span>'+C.check.title+'</h3><div class="qc" style="border-left:5px solid '+S.col+'"><ol>'+C.check.steps.map(function(s){return '<li>'+s+'</li>';}).join("")+'</ol></div></section>';
 h+='<section class="blk quiz"><h3><span class="n">10</span>Check your understanding</h3>'+C.quiz.map(function(q,qi){return '<div class="q" data-q="'+qi+'"><h4>'+(qi+1)+'. '+q.q+'</h4>'+q.o.map(function(o,oi){return '<button class="opt" data-o="'+oi+'">'+o+'</button>';}).join("")+'<div class="fb"></div></div>';}).join("")+'</section>';
 return h;
}


function makeoverHTML(k){
 var W=WM[k], S=STAGES[k];
 var h='<p class="lead">'+(W.tagsLead||'Every content point addresses MAO-WM-01. In this stage, the syllabus tags these points as reasoning:')+'</p>';
 if(W.tags.length) h+='<div class="card" style="padding:4px 0;margin-bottom:16px">'+W.tags.map(function(t){return '<div class="tagrow" style="grid-template-columns:1fr auto"><span>'+t[0]+'</span><span class="wtag">'+t[1]+'</span></div>';}).join("")+'</div>';
 h+='<p class="lead"><b>Try it yourself.</b> Read the closed task. How would you change it so students reason and communicate? Jot your idea, then reveal the makeover.</p>';
 h+='<div class="mk"><div class="side before"><div class="lbl">Before: closed task</div><div class="task closed">'+W.before.task+'</div><b style="font-size:14px">Limitations</b><ul>'+W.before.lim.map(function(l){return '<li>'+l+'</li>';}).join("")+'</ul></div>';
 h+='<div class="side after" id="mkAfter"><div class="hidden-after"><div class="think">How would you rework this task?<textarea id="mkIdea" placeholder="My idea…"></textarea></div><button class="btn" id="mkReveal" style="background:var(--good)">Reveal the makeover</button></div></div></div>';
 h+='<p class="note" style="margin-top:10px">Example tasks are additional commentary, built on the syllabus content points and examples. They are not NESA tasks.</p>';
 return h;
}
function afterHTML(k){
 var A=WM[k].after;
 return '<div class="lbl">After: rich task</div><div class="task">'+A.task+'</div><div class="wmchips">'+A.el.map(function(e){return '<span>'+e+'</span>';}).join("")+'</div>'+
 '<div class="diff"><div><b>Enabling prompt</b>'+A.enable+'</div><div><b>Extending prompt</b>'+A.extend+'</div><div><b>Listen for</b>'+A.listen+'</div></div>'+
 '<button class="btn ghost small" id="mkHide" style="margin-top:12px">Hide again</button>';
}

function renderWM(){
 var h='<div class="hero" style="border-left-color:var(--good)"><span class="tag" style="background:var(--good-soft);color:var(--good)">Working mathematically</span><h2>Working mathematically is built into every content point</h2><p>The Working mathematically outcome, MAO-WM-01, applies to all content in every stage. It isn’t a separate strand to teach on its own. It shapes how students learn the content in this focus area.</p></div>';
 h+='<section class="blk"><h3>The outcome</h3><div class="outc"><code style="background:var(--good)">MAO-WM-01</code><span>develops understanding and fluency in mathematics through exploring and connecting mathematical concepts, choosing and applying mathematical techniques to solve problems, and communicating their thinking and reasoning coherently and clearly</span></div><p class="lead" style="margin-top:12px">The outcome names five things students do. This module uses them to describe what a task asks of students.</p><div class="wmel">'+WM_ELEMENTS.map(function(e){return '<div><b>'+e[0]+'</b>'+e[1]+'</div>';}).join("")+'</div></section>';
 var rows="";
 ORDER.forEach(function(k){WM[k].tags.forEach(function(t){rows+='<div class="tagrow"><span class="sl" style="background:'+STAGES[k].col+'">'+STAGES[k].name+'</span><span>'+t[0]+'</span><span class="wtag">'+t[1]+'</span></div>';});});
 h+='<section class="blk"><h3>Where the syllabus flags reasoning</h3><p class="lead">In the content, some points are tagged with a type of reasoning. These are good places to plan for discussion, justification and multiple representations.</p><div class="card" style="padding:4px 0">'+rows+'</div></section>';
 h+='<section class="blk"><h3>Makeover practice</h3><p class="lead">Choose a closed task, then try each move. Each move turns the same content into a task that asks students to reason and communicate.</p><div class="tool"><div class="ctrl" style="margin-top:0"><label for="ctSel">Closed task</label><select id="ctSel">'+CLOSED.map(function(c,i){return '<option value="'+i+'">'+STAGES[c.st].name+': '+c.task+'</option>';}).join("")+'</select></div><div class="mk" style="grid-template-columns:1fr"><div class="side before"><div class="lbl">Closed task</div><div class="task closed" id="ctTask"></div></div></div><div class="moves" id="ctMoves"></div><div id="ctOut"></div></div><p class="note" style="margin-top:10px">These moves and example tasks are additional commentary, not NESA material.</p></section>';
 h+='<section class="blk"><h3>Questions that invite reasoning</h3><div class="grid2">'+
  card("“How do you know?”","Ask after correct answers too, not only after errors.")+
  card("“Is there another way?”","Ask for a second representation: materials, a number line, words.")+
  card("“Convince me.”","Ask students to persuade a sceptical partner, using a model as evidence.")+
  card("“What would change if…?”","Change one number or condition and ask students to predict before they calculate.")+
 '</div></section>';
 return h;
}
function showClosed(i){
 var c=CLOSED[i];
 $("#ctTask").textContent=c.task;
 $("#ctMoves").innerHTML=c.moves.map(function(m,j){return '<button data-j="'+j+'">'+m.m+'</button>';}).join("");
 $("#ctOut").innerHTML='<p class="note">Select a move above.</p>';
 $$("#ctMoves button").forEach(function(b){b.onclick=function(){
  var m=c.moves[+b.dataset.j];
  $$("#ctMoves button").forEach(function(x){x.classList.toggle("on",x===b);});
  $("#ctOut").innerHTML='<div class="mk" style="grid-template-columns:1fr"><div class="side after"><div class="lbl">After: '+m.m+'</div><div class="task">'+m.t+'</div><div class="wmchips">'+m.el.map(function(e){return '<span>'+e+'</span>';}).join("")+'</div></div></div>';
 };});
}

function renderModels(){
 var h='<div class="hero"><span class="tag" style="background:var(--accent-soft);color:var(--accent)">Models</span><h2>'+M.modelsH2+'</h2><p>'+M.modelsP+'</p></div>';
 h+='<div class="mgrid" role="table"><div class="mh first" style="grid-row:1;grid-column:1">Model</div>'+ORDER.map(function(k,ki){return '<div class="mh" style="grid-row:1;grid-column:'+(ki+2)+';background:'+STAGES[k].col+'">'+STAGES[k].name+'</div>';}).join("");
 MODELS.forEach(function(m,i){
  h+='<div class="mrow" data-i="'+i+'"><button class="mn" data-i="'+i+'" style="grid-row:'+(i+2)+'">'+m.n+'<small>'+m.w+'</small></button>';
  var cells="";
  for(var c=0;c<4;c++) cells+='<div class="mc" style="grid-column:'+(c+2)+';grid-row:'+(i+2)+'"></div>';
  var g1=m.s+2, g2=m.e+3;
  var col = m.hi ? "var(--navy)" : STAGES[ORDER[m.s]].col;
  cells+='<div class="mbar" data-i="'+i+'" style="grid-column:'+g1+'/'+g2+';grid-row:'+(i+2)+';background:'+col+';opacity:'+(m.hi?1:.75)+'" title="'+esc(m.n)+'"></div>';
  h+=cells+'</div>';
 });
 h+='</div><div class="mdetail card" id="mDetail"><p class="note" style="margin:0">Select a model to read how it’s used.</p></div>';
 h+='<section class="blk"><h3>Using models well</h3><div class="grid2">'+
  M.modelTips.map(function(x){return card(x[0],x[1]);}).join("")+
 '</div></section>';
 return h;
}
function showModel(i){
 var m=MODELS[i];
 $$(".mrow").forEach(function(r){r.classList.toggle("sel",+r.dataset.i===i);});
 var st=ORDER.slice(m.s,m.e+1).map(function(k){return STAGES[k].name;}).join(", ");
 $("#mDetail").innerHTML='<h4 style="font-size:18px;margin-bottom:4px">'+m.n+'</h4><div class="note" style="margin-bottom:8px">'+st+'</div><p style="margin:0;color:var(--ink2)">'+m.d+'</p>';
}

function renderSorter(){
 return '<div class="hero"><span class="tag" style="background:var(--accent-soft);color:var(--accent)">Misconception sorter</span><h2>Find the root</h2><p>'+M.sorterP+'</p></div>'+
 '<div class="sorter"><div class="scn" id="scn"></div></div>'+
 '<section class="blk"><h3>The four roots across the stages</h3><div style="overflow-x:auto"><table class="simple" style="min-width:640px"><thead><tr><th>Root</th>'+ORDER.map(function(k){return '<th style="color:'+STAGES[k].col+'">'+STAGES[k].name+'</th>';}).join("")+'</tr></thead><tbody>'+
 M.rootRows.map(function(r){return '<tr><td><b>'+r[0]+'</b></td><td>'+r[1]+'</td><td>'+r[2]+'</td><td>'+r[3]+'</td><td>'+r[4]+'</td></tr>';}).join("")+
 '</tbody></table></div><p class="note" style="margin-top:10px">'+M.sorterNote+'</p></section>';
}
var sortIdx=0, sortScore=0, sortDone=0;
function showScenario(){
 var el=$("#scn");
 if(sortIdx>=SCENARIOS.length){
  el.innerHTML='<h4 style="font-size:20px;margin-bottom:8px">You matched '+sortScore+' of '+SCENARIOS.length+' on the first try.</h4><p class="lead">For discussion: which root do you see most in your classroom? Which stage do you think it starts in?</p><button class="btn" id="sortAgain">Start again</button>';
  $("#sortAgain").onclick=function(){sortIdx=0;sortScore=0;sortDone=0;showScenario();};
  return;
 }
 var s=SCENARIOS[sortIdx], S=STAGES[s.st], tried=false;
 el.innerHTML='<div class="score">Scenario '+(sortIdx+1)+' of '+SCENARIOS.length+' · <span style="color:'+S.col+';font-weight:700">'+S.name+'</span></div><div class="quote">'+s.q+'</div><div class="roots">'+ROOTS.map(function(r,i){return '<button data-r="'+i+'">'+r+'</button>';}).join("")+'</div><div class="fbline" id="sortFb"></div><div class="ctrl"><button class="btn" id="sortNext" style="display:none">Next scenario →</button></div>';
 $$(".roots button",el).forEach(function(b){b.onclick=function(){
  var r=+b.dataset.r, fb=$("#sortFb");
  if(r===s.a){
   if(!tried) sortScore++;
   b.classList.add("right");
   $$(".roots button",el).forEach(function(x){x.disabled=true;});
   fb.className="fbline show ok"; fb.innerHTML="<b>Yes, "+ROOTS[s.a].toLowerCase()+".</b> "+s.why;
   $("#sortNext").style.display="inline-block";
  } else {
   tried=true; b.classList.add("wrong"); b.disabled=true;
   fb.className="fbline show no"; fb.innerHTML="Not quite. Think about what the student is paying attention to. Try another root.";
  }
 };});
 $("#sortNext").onclick=function(){sortIdx++;showScenario();};
}

function renderReflect(){
 var h='<div class="hero"><span class="tag" style="background:var(--accent-soft);color:var(--accent)">Reflect and plan</span><h2>Connect the progression to your students</h2><p>Write your thinking below. Notes save automatically in this browser. Use <b>Copy my notes</b> to paste them into a document or email.</p></div>';
 var g="";
 PROMPTS.forEach(function(p,i){
  if(p[0]!==g){g=p[0];h+='<h3 style="font-size:17px;margin:22px 0 10px">'+g+'</h3>';}
  h+='<div class="rq"><label for="rq'+i+'">'+(i+1)+'. '+p[1]+'</label><textarea id="rq'+i+'" data-i="'+i+'" placeholder="Your thoughts…">'+esc(mem.notes[i]||"")+'</textarea></div>';
 });
 h+='<h3 style="font-size:17px;margin:22px 0 10px">Next steps</h3><div class="card todo">'+TODOS.map(function(t,i){return '<label><input type="checkbox" data-t="'+i+'"'+(mem.todo[i]?" checked":"")+'><span>'+t+'</span></label>';}).join("")+'</div>';
 h+=checkHTML("post");
 h+='<div class="ctrl" style="display:flex;gap:10px;flex-wrap:wrap;margin-top:16px;align-items:center"><button class="btn" id="copyNotes">Copy my notes</button><button class="btn ghost" id="dlNotes">Download as text</button><span class="saved" id="savedMsg"></span></div><textarea id="copyBuf" aria-hidden="true" style="position:absolute;left:-9999px;top:0"></textarea>';
 return h;
}
function notesText(){
 var t=M.notesTitle+"\n\n";
 PROMPTS.forEach(function(p,i){t+=(i+1)+". "+p[1]+"\n"+(mem.notes[i]||"(no response)")+"\n\n";});
 var mk=ORDER.filter(function(k){return mem.notes["mk-"+k];});
 if(mk.length){ t+="My task makeover ideas\n"; mk.forEach(function(k){t+=STAGES[k].name+": "+mem.notes["mk-"+k]+"\n";}); t+="\n"; }
 t+=chkText();
 t+="Next steps\n"; TODOS.forEach(function(x,i){t+=(mem.todo[i]?"[x] ":"[ ] ")+x+"\n";});
 return t;
}


/* ---------------- knowledge and confidence self-check (private, saved in this browser) ---------------- */
var FA_NAME = M.title.replace(/\s*K–6\s*$/,"");
var CHK_CONF = [
 "I understand how "+FA_NAME+" develops from Kindergarten to Year 6.",
 "I can identify common misconceptions in "+FA_NAME+" and respond to them.",
 "I can plan "+FA_NAME+" lessons that embed Working mathematically."
];
var CHK_SHORT = ["The K–6 progression","Misconceptions","Working mathematically"];
function chkItems(){
 var a=SCENARIOS.filter(function(s){return s.st==="s2";})[0]||SCENARIOS[0], b=SCENARIOS.filter(function(s){return s.st==="s3";})[0]||SCENARIOS[SCENARIOS.length-1];
 return [a,b];
}
function chkAnsText(v){ return v>=0?ROOTS[v]:"Not sure"; }
function chkOk(x){ return x&&x.conf&&x.ans?x:null; }
function chkCompare(){
 var pre=chkOk(mem.chk.pre), post=mem.chk.post, items=chkItems();
 var h='<div class="chkres"><h4>'+(pre?"Before and after":"Your answers")+'</h4><table class="simple"><thead><tr><th>Confidence (1–5)</th>'+(pre?'<th>Before</th>':'')+'<th>'+(pre?'After':'Now')+'</th></tr></thead><tbody>';
 CHK_SHORT.forEach(function(t,i){ var d=pre?post.conf[i]-pre.conf[i]:0; h+='<tr><td>'+t+'</td>'+(pre?'<td>'+pre.conf[i]+'</td>':'')+'<td>'+post.conf[i]+(pre&&d?' <span class="chkd '+(d>0?'up':'down')+'">'+(d>0?'+':'')+d+'</span>':'')+'</td></tr>'; });
 h+='</tbody></table>';
 items.forEach(function(s,i){
  var pa=pre?pre.ans[i]:null, qa=post.ans[i];
  h+='<div class="chkscn"><b>Scenario '+(i+1)+'.</b> '+s.q+'<ul class="tight">'+(pre?'<li>Before: '+chkAnsText(pa)+' '+(pa===s.a?'✓':'✗')+'</li>':'')+'<li>'+(pre?'After':'Your answer')+': '+chkAnsText(qa)+' '+(qa===s.a?'✓':'✗')+'</li></ul><div class="note"><b>Most likely root:</b> '+ROOTS[s.a]+'. '+s.why+'</div></div>';
 });
 return h+'</div>';
}
function checkHTML(ph){
 var pre=ph==="pre", done=chkOk(mem.chk[ph]);
 var h='<section class="blk chk" id="chk-'+ph+'"><div class="chkhead"><span class="tag" style="background:var(--accent-soft);color:var(--accent)">'+(pre?"Before you start":"After the module")+'</span><h3>'+(pre?"Quick self-check: before":"Quick self-check: after")+' <span class="chktime">about 2 minutes · optional · private</span></h3>'+
  '<p class="note">'+(pre?"Answer before you work through the module, then again at the end in <b>Reflect and plan</b> to see what has changed.":"The same questions as at the start. Compare your answers to see what has changed.")+' Your answers are saved only in this browser, like your notes. Nothing is sent anywhere.</p></div>';
 if(done){
  if(pre) return h+'<div class="fbline show ok">Saved'+(done.t?' on '+done.t:'')+'. You’ll see the answers and compare them with your after check at the end, in <b>Reflect and plan</b>. <button class="linkbtn" id="chkRedo-'+ph+'">Answer again</button></div></section>';
  return h+chkCompare()+'<div class="ctrl"><button class="linkbtn" id="chkRedo-'+ph+'">Answer the after check again</button></div></section>';
 }
 h+='<div class="chkq"><b>How confident are you?</b> <span class="note">1 = not confident, 5 = very confident</span>';
 CHK_CONF.forEach(function(c,i){
  h+='<div class="chkrate" role="radiogroup" aria-label="'+esc(c)+'"><span>'+c+'</span><span class="chkopts">'+[1,2,3,4,5].map(function(v){return '<label><input type="radio" name="chkc'+ph+i+'" value="'+v+'"><span>'+v+'</span></label>';}).join("")+'</span></div>';
 });
 h+='</div>';
 chkItems().forEach(function(s,i){
  h+='<div class="chkq"><b>Scenario '+(i+1)+' ('+STAGES[s.st].name+').</b> '+s.q+' <span class="note">Which is the most likely root of this response?</span><div class="chkmc">'+ROOTS.map(function(r,j){return '<label><input type="radio" name="chkk'+ph+i+'" value="'+j+'"><span>'+r+'</span></label>';}).join("")+'<label><input type="radio" name="chkk'+ph+i+'" value="-1"><span>I’m not sure</span></label></div></div>';
 });
 h+='<div class="ctrl"><button class="btn" id="chkSave-'+ph+'">'+(pre?"Save my answers":"Save and compare")+'</button><span class="note" id="chkMsg-'+ph+'"></span></div></section>';
 return h;
}
function wireCheck(ph){
 var redo=$("#chkRedo-"+ph); if(redo){ redo.onclick=function(){ delete mem.chk[ph]; save(); var el=$("#chk-"+ph); el.outerHTML=checkHTML(ph); wireCheck(ph); }; }
 var btn=$("#chkSave-"+ph); if(!btn) return;
 btn.onclick=function(){
  var msg=$("#chkMsg-"+ph), val=function(n){var x=$('input[name="'+n+'"]:checked');return x?+x.value:null;};
  var conf=CHK_CONF.map(function(c,i){return val("chkc"+ph+i);}), ans=chkItems().map(function(s,i){return val("chkk"+ph+i);});
  if(conf.some(function(v){return v===null;})||ans.some(function(v){return v===null;})){ msg.textContent="Please answer the confidence ratings and both scenarios (“I’m not sure” is fine)."; return; }
  mem.chk[ph]={conf:conf,ans:ans,t:new Date().toLocaleDateString("en-AU")}; save();
  var el=$("#chk-"+ph); el.outerHTML=checkHTML(ph); wireCheck(ph);
 };
}
function chkText(){
 var pre=chkOk(mem.chk.pre), post=chkOk(mem.chk.post); if(!pre&&!post) return "";
 var t="Quick self-check\n", items=chkItems();
 CHK_SHORT.forEach(function(x,i){ t+=x+" (confidence 1-5): "+(pre?"before "+pre.conf[i]:"before -")+", "+(post?"after "+post.conf[i]:"after -")+"\n"; });
 items.forEach(function(s,i){ t+="Scenario "+(i+1)+": "+(pre?"before "+(pre.ans[i]===s.a?"correct":"not yet"):"before -")+", "+(post?"after "+(post.ans[i]===s.a?"correct":"not yet"):"after -")+"\n"; });
 return t+"\n";
}

/* ---------------- wiring ---------------- */
function wire(id){
 if(id==="welcome") wireCheck("pre");
 if(id==="reflect") wireCheck("post");
 if(id==="ideas"){ $$(".idea").forEach(function(b){b.onclick=function(){showIdea(+b.dataset.i);};}); }
 if(id==="prog"){ $$(".aspects button").forEach(function(b){b.onclick=function(){showAspect(+b.dataset.k);};}); showAspect(0); }
 if(id==="models"){ $$(".mn,.mbar").forEach(function(b){b.onclick=function(){showModel(+b.dataset.i);};}); }
 if(id==="sorter"){ sortIdx=0; sortScore=0; showScenario(); }
 if(id==="wm"){ $("#ctSel").onchange=function(){showClosed(+this.value);}; showClosed(0); }
 if(id==="reflect"){
  var msg=$("#savedMsg"), tmr;
  $$(".rq textarea").forEach(function(ta){ta.oninput=function(){mem.notes[ta.dataset.i]=ta.value;save();msg.textContent="Saved";clearTimeout(tmr);tmr=setTimeout(function(){msg.textContent="";},1500);};});
  $$(".todo input").forEach(function(cb){cb.onchange=function(){mem.todo[cb.dataset.t]=cb.checked;save();};});
  $("#copyNotes").onclick=function(){
   var txt=notesText(), ok=false;
   var buf=$("#copyBuf"); buf.value=txt; buf.select();
   try{ok=document.execCommand("copy");}catch(e){}
   if(!ok && navigator.clipboard){ navigator.clipboard.writeText(txt).then(function(){msg.textContent="Copied";},function(){msg.textContent="Copy blocked: select the text in each box instead";}); return; }
   msg.textContent=ok?"Copied to clipboard":"Copy blocked: select the text in each box instead";
  };
  $("#dlNotes").onclick=function(){
   try{ var a=document.createElement("a"); a.href=URL.createObjectURL(new Blob([notesText()],{type:"text/plain"})); a.download=M.dlName; document.body.appendChild(a); a.click(); a.remove(); }
   catch(e){ msg.textContent="Download blocked here: use Copy my notes instead"; }
  };
 }
 var st=SECTIONS.filter(function(s){return s.id===id;})[0];
 if(st && st.stage){
  var C=STAGE_CONTENT[st.stage];
  $$(".acc>button").forEach(function(b){b.onclick=function(){var a=b.parentNode;a.classList.toggle("open");b.setAttribute("aria-expanded",a.classList.contains("open"));};});
  $$(".flip").forEach(function(f){f.onclick=function(){f.classList.toggle("on");f.setAttribute("aria-pressed",f.classList.contains("on"));};});
  $$(".quiz .q").forEach(function(qd){
   var q=C.quiz[+qd.dataset.q], fb=$(".fb",qd);
   $$(".opt",qd).forEach(function(b){b.onclick=function(){
    var o=+b.dataset.o;
    if(o===q.a){ b.classList.add("right"); $$(".opt",qd).forEach(function(x){x.disabled=true;}); fb.className="fb show ok"; fb.innerHTML="<b>Correct.</b> "+q.why; }
    else { b.classList.add("wrong"); b.disabled=true; fb.className="fb show no"; fb.innerHTML="Not quite. Have another go."; }
   };});
  });
  wireMakeover(st.stage);
  if(typeof wireTool==="function") wireTool(C.tool);
 }
}

/* makeover reveal */
function wireMakeover(k){
 var box=$("#mkAfter"), key="mk-"+k;
 function closed(){
  box.innerHTML='<div class="hidden-after"><div class="think">How would you rework this task?<textarea id="mkIdea" placeholder="My idea…"></textarea></div><button class="btn" id="mkReveal" style="background:var(--good)">Reveal the makeover</button></div>';
  var ta=$("#mkIdea"); ta.value=mem.notes[key]||""; ta.oninput=function(){mem.notes[key]=ta.value;save();};
  $("#mkReveal").onclick=open;
 }
 function open(){ box.innerHTML=afterHTML(k)+(mem.notes[key]?'<div class="note" style="margin-top:10px"><b>Your idea:</b> '+esc(mem.notes[key])+'</div>':''); $("#mkHide").onclick=closed; }
 closed();
}

/* ---------------- start ---------------- */
document.getElementById("foot").innerHTML=M.footer;
go(0);
