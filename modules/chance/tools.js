function toolHTML(t){
 if(t==="couldit") return '<div class="tool"><div class="tt">Diagnostic</div><h4>Will it, might it or won’t it?</h4><p class="note">Look at what is in the bag. If one cube is taken out without looking, will it be, might it be, or won’t it be the colour asked? This uses NESA’s ‘Could it be …?’ and ‘Why couldn’t it be …?’ starters.</p><div class="cbag" id="cqBag"></div><p class="cq" id="cqQ"></p><div class="ctrl"><button class="btn small" data-c="will">It will be</button><button class="btn small" data-c="might">It might be</button><button class="btn small" data-c="wont">It won’t be</button></div><div class="fbline" id="cqFb"></div><div class="ctrl"><button class="btn ghost small" id="cqTake" disabled>Take one out</button><button class="btn ghost small" id="cqNew" disabled>Next bag</button><span class="score" id="cqScore"></span></div></div>';
 if(t==="bag") return '<div class="tool"><div class="tt">Model</div><h4>Unlikely isn’t impossible</h4><p class="note">Set the cubes in the bag, describe the chance of taking red, then take cubes out (putting each one back) to see what happens.</p><div class="ctrl" style="margin-top:0"><label for="bgR">Red</label><input type="range" id="bgR" min="0" max="10" value="1"><span class="bgv" id="bgRv">1</span><label for="bgB">Blue</label><input type="range" id="bgB" min="0" max="10" value="9"><span class="bgv" id="bgBv">9</span></div><div class="cbag" id="bgBag"></div><div class="readout" id="bgRead"></div><div class="ctrl"><button class="btn small" id="bg1">Take one</button><button class="btn small" id="bg20">Take 20</button><button class="btn ghost small" id="bgClear">Clear results</button></div><div class="bgres" id="bgRes"></div></div>';
 if(t==="spinner") return '<div class="tool"><div class="tt">Model</div><h4>Predicted and actual results</h4><p class="note">The syllabus example: a spinner with red, blue, green and yellow quarters. Predict how many times it will land on red, spin, compare, then repeat and compare again.</p><div class="spwrap"><div class="sppic" id="spPic"></div><div class="spside"><div class="ctrl" style="margin-top:0"><label for="spN">Spins</label><select id="spN"><option>12</option><option selected>20</option><option>40</option></select></div><div class="ctrl"><label for="spP">My prediction for red</label><input type="number" id="spP" min="0" max="40" style="width:70px"></div><div class="ctrl"><button class="btn small" id="spGo">Spin</button><button class="btn ghost small" id="spReset">Reset</button></div></div></div><div class="readout" id="spRead"></div><div class="sphist" id="spHist"></div></div>';
 if(t==="trials") return '<div class="tool"><div class="tt">Model</div><h4>Small and large numbers of trials</h4><p class="note">Choose a random generator, then add trials. The bars show observed probabilities; the marks show expected probabilities. Watch how far apart they are after 10 trials and after 1000.</p><div class="ctrl" style="margin-top:0"><label for="trG">Generator</label><select id="trG"><option value="syl">Spinner: half green, red, grey, blue sixths</option><option value="q">Spinner: equal quarters</option><option value="bag">Bag: 2 red for every 1 blue</option><option value="die">Die: 1 to 6</option></select></div><div class="spwrap"><div class="sppic" id="trPic"></div><div class="trchart" id="trChart"></div></div><div class="ctrl"><button class="btn small" data-n="10">Add 10</button><button class="btn small" data-n="100">Add 100</button><button class="btn small" data-n="1000">Add 1000</button><button class="btn ghost small" id="trReset">Reset</button></div><div class="readout" id="trRead"></div></div>';
 return "";
}

/* ---------- shared ---------- */
var CC={red:"#c8553d",blue:"#3b5bbf",green:"#2f7f6f",yellow:"#e0a33a",grey:"#8a8f9c"};
function cubesHTML(list){
 return list.map(function(c){return '<span class="cube" style="background:'+CC[c]+'" title="'+c+'"></span>';}).join("");
}
function spinnerSVG(sec,ang){
 var cx=100, cy=100, R=90, a0=-Math.PI/2, s='<svg viewBox="0 0 200 200" role="img" aria-label="Spinner">';
 sec.forEach(function(q){
  var a1=a0+q.p*2*Math.PI, large=q.p>0.5?1:0;
  s+='<path d="M'+cx+' '+cy+' L'+(cx+R*Math.cos(a0)).toFixed(1)+' '+(cy+R*Math.sin(a0)).toFixed(1)+' A'+R+' '+R+' 0 '+large+' 1 '+(cx+R*Math.cos(a1)).toFixed(1)+' '+(cy+R*Math.sin(a1)).toFixed(1)+'Z" fill="'+CC[q.c]+'" stroke="#fff" stroke-width="2"/>';
  var am=(a0+a1)/2; s+='<text x="'+(cx+R*.62*Math.cos(am)).toFixed(1)+'" y="'+(cy+R*.62*Math.sin(am)+4).toFixed(1)+'" text-anchor="middle" font-size="12" font-weight="700" fill="#fff">'+q.c+'</text>';
  a0=a1;
 });
 if(ang!=null){ var t=-Math.PI/2+ang*2*Math.PI; s+='<line x1="'+cx+'" y1="'+cy+'" x2="'+(cx+(R-14)*Math.cos(t)).toFixed(1)+'" y2="'+(cy+(R-14)*Math.sin(t)).toFixed(1)+'" stroke="var(--ink)" stroke-width="5" stroke-linecap="round"/>'; }
 s+='<circle cx="'+cx+'" cy="'+cy+'" r="7" fill="var(--ink)"/>';
 return s+'</svg>';
}
function pickSector(sec){ var r=Math.random(), acc=0; for(var i=0;i<sec.length;i++){ acc+=sec[i].p; if(r<acc) return {i:i,ang:acc-sec[i].p+Math.random()*sec[i].p}; } return {i:sec.length-1,ang:.999}; }

/* ---------- ES1 could it be ---------- */
function wireCouldit(){
 var bag, ask, right, score=0, round=0, lastKind="";
 function newQ(){
  var cols=["red","blue","yellow","green"].sort(function(){return Math.random()-.5;}), kinds=["will","might","wont"], kind;
  do{ kind=kinds[Math.floor(Math.random()*3)]; }while(kind===lastKind); lastKind=kind;
  if(kind==="will"){ bag=[]; for(var i=0;i<4+Math.floor(Math.random()*4);i++) bag.push(cols[0]); ask=cols[0]; }
  else { var n1=2+Math.floor(Math.random()*4), n2=1+Math.floor(Math.random()*4); bag=[]; for(var j=0;j<n1;j++) bag.push(cols[0]); for(var k=0;k<n2;k++) bag.push(cols[1]); bag.sort(function(){return Math.random()-.5;}); ask=kind==="might"?(Math.random()<.5?cols[0]:cols[1]):cols[2]; }
  right=kind; round++;
  $("#cqBag").innerHTML='<div class="baglab">In the bag</div>'+cubesHTML(bag);
  $("#cqQ").innerHTML='If I take one cube out without looking, will it be <b style="color:'+CC[ask]+'">'+ask+'</b>?';
  $("#cqFb").className="fbline"; $$(".tool [data-c]").forEach(function(x){x.disabled=false;}); $("#cqNew").disabled=true; $("#cqTake").disabled=true;
 }
 $$(".tool [data-c]").forEach(function(btn){btn.onclick=function(){
  var ok=btn.dataset.c===right; if(ok) score++;
  var n=bag.filter(function(c){return c===ask;}).length, why={
   will:"Every cube in the bag is "+ask+", so it will be "+ask+". It couldn’t be anything else.",
   might:"There "+(n===1?"is 1 "+ask+" cube":"are "+n+" "+ask+" cubes")+" and some other cubes, so it might be "+ask+", or it might not.",
   wont:"There are no "+ask+" cubes in the bag, so it won’t be "+ask+". Why couldn’t it be "+ask+"? Because there aren’t any."}[right];
  $("#cqFb").className="fbline show "+(ok?"ok":"no");
  $("#cqFb").innerHTML=(ok?"<b>Yes.</b> ":"<b>Not this time.</b> ")+why;
  $$(".tool [data-c]").forEach(function(x){x.disabled=true;}); $("#cqNew").disabled=false; $("#cqTake").disabled=false;
  $("#cqScore").textContent=score+" of "+round+" correct";
 };});
 $("#cqTake").onclick=function(){ var c=bag[Math.floor(Math.random()*bag.length)]; $("#cqFb").innerHTML+='<br>Taken out: <span class="cube" style="background:'+CC[c]+';vertical-align:middle"></span> '+c+'.'; $("#cqTake").disabled=true; };
 $("#cqNew").onclick=newQ;
 newQ();
}

/* ---------- S1 bag ---------- */
function wireBag(){
 var res=[];
 function words(r,b){
  if(r===0) return ["Taking red is impossible","There are no red cubes, so it won’t happen."];
  if(b===0) return ["Taking red is certain","Every cube is red, so it will happen."];
  if(r===b) return ["Red and blue are equally likely","There are the same number of each."];
  if(r<b) return ["Taking red is "+(r*3<=b?"unlikely":"less likely than blue")+", but possible","There "+(r===1?"is 1 red cube":"are "+r+" red cubes")+" and "+b+" blue. Unlikely isn’t impossible: red can still come out."];
  return ["Taking red is "+(b*3<=r?"likely":"more likely than blue")+", but not certain","There are "+r+" red and "+(b===1?"1 blue cube":b+" blue cubes")+", so blue can still come out."];
 }
 function draw(){
  var r=+$("#bgR").value, b=+$("#bgB").value; $("#bgRv").textContent=r; $("#bgBv").textContent=b;
  var list=[]; for(var i=0;i<r;i++) list.push("red"); for(var j=0;j<b;j++) list.push("blue");
  $("#bgBag").innerHTML='<div class="baglab">In the bag</div>'+(list.length?cubesHTML(list):'<i>empty</i>');
  var w=r+b?words(r,b):["The bag is empty","Add some cubes."];
  var rc=res.filter(function(c){return c==="red";}).length;
  $("#bgRead").innerHTML=w[0]+'<small>'+w[1]+'</small>';
  $("#bgRes").innerHTML=res.length?'<div class="baglab">Taken out (each put back): red '+rc+', blue '+(res.length-rc)+'</div>'+cubesHTML(res)+(r>0&&r<b&&rc>0?'<p class="note" style="margin-top:8px">Red came out '+rc+' time'+(rc>1?'s':'')+'. It was unlikely, not impossible.</p>':''):'';
  $("#bg1").disabled=$("#bg20").disabled=!(r+b);
 }
 function take(n){ var r=+$("#bgR").value, b=+$("#bgB").value; for(var i=0;i<n;i++) res.push(Math.random()*(r+b)<r?"red":"blue"); if(res.length>80) res=res.slice(-80); draw(); }
 $("#bgR").oninput=function(){res=[];draw();}; $("#bgB").oninput=function(){res=[];draw();};
 $("#bg1").onclick=function(){take(1);}; $("#bg20").onclick=function(){take(20);}; $("#bgClear").onclick=function(){res=[];draw();};
 draw();
}

/* ---------- S2 spinner ---------- */
var SP_Q=[{c:"red",p:.25},{c:"blue",p:.25},{c:"green",p:.25},{c:"yellow",p:.25}];
function wireSpinner(){
 var runs=[];
 function hist(){
  if(!runs.length){ $("#spHist").innerHTML=""; return; }
  var tot=0, red=0; runs.forEach(function(r){tot+=r.n; red+=r.red;});
  $("#spHist").innerHTML='<div class="baglab">Reds in each run</div><div class="sprow">'+runs.map(function(r,i){return '<span class="sprun">Run '+(i+1)+': <b>'+r.red+'</b> of '+r.n+(r.pred!=null?' (predicted '+r.pred+')':'')+'</span>';}).join("")+'</div>'+(runs.length>1?'<p class="note" style="margin-top:8px">All runs combined: '+red+' reds in '+tot+' spins, which is '+(red/tot*100).toFixed(0)+'%. A quarter is 25%.</p>':'');
 }
 function go(){
  var n=+$("#spN").value, p=$("#spP").value===""?null:Math.round(+$("#spP").value), counts={red:0,blue:0,green:0,yellow:0}, last;
  for(var i=0;i<n;i++){ last=pickSector(SP_Q); counts[SP_Q[last.i].c]++; }
  $("#spPic").innerHTML=spinnerSVG(SP_Q,last.ang);
  runs.push({n:n,red:counts.red,pred:p});
  var exp=n/4, msg='Red came up '+counts.red+' time'+(counts.red===1?'':'s')+' in '+n+' spins';
  var sm='Blue '+counts.blue+', green '+counts.green+', yellow '+counts.yellow+'. Each colour is a quarter of the spinner, so about '+exp+' of each is expected. ';
  if(p!=null) sm+=(p===counts.red?'Your prediction matched exactly this time. Spin again: it may not next time. ':'Your prediction was '+p+'. ')+'';
  sm+='Randomness means the actual result usually differs a little from the expected result, and changes from run to run.';
  $("#spRead").innerHTML=msg+'<small>'+sm+'</small>';
  hist();
 }
 $("#spGo").onclick=go; $("#spReset").onclick=function(){runs=[];$("#spRead").innerHTML="";hist();$("#spPic").innerHTML=spinnerSVG(SP_Q,null);};
 $("#spPic").innerHTML=spinnerSVG(SP_Q,null);
}

/* ---------- S3 trials ---------- */
var TR_GEN={
 syl:{sp:true,sec:[{c:"green",p:3/6,f:"3/6"},{c:"red",p:1/6,f:"1/6"},{c:"grey",p:1/6,f:"1/6"},{c:"blue",p:1/6,f:"1/6"}]},
 q:{sp:true,sec:[{c:"red",p:.25,f:"1/4"},{c:"blue",p:.25,f:"1/4"},{c:"green",p:.25,f:"1/4"},{c:"yellow",p:.25,f:"1/4"}]},
 bag:{sp:false,sec:[{c:"red",p:2/3,f:"2/3"},{c:"blue",p:1/3,f:"1/3"}]},
 die:{sp:false,die:true,sec:[1,2,3,4,5,6].map(function(n){return {c:String(n),p:1/6,f:"1/6",col:"#4b5bbf"};})}
};
function wireTrials(){
 var g, counts, N, lastAng=null;
 function reset(){ g=TR_GEN[$("#trG").value]; counts=g.sec.map(function(){return 0;}); N=0; lastAng=null; draw(); }
 function draw(){
  if(g.sp) $("#trPic").innerHTML=spinnerSVG(g.sec,lastAng);
  else if(g.die) $("#trPic").innerHTML='<div class="diebox">⚀ ⚁ ⚂<br>⚃ ⚄ ⚅</div>';
  else $("#trPic").innerHTML='<div class="cbag" style="margin:0"><div class="baglab">In the bag</div>'+cubesHTML(["red","red","blue","red","red","blue"])+'</div>';
  var W=g.sec.length*70+40, H=200, base=170, sc=140, s='<svg viewBox="0 0 '+W+' '+H+'" style="max-width:'+W+'px">';
  [0,.25,.5,.75,1].forEach(function(v){ var y=base-v*sc; s+='<line x1="34" y1="'+y+'" x2="'+(W-4)+'" y2="'+y+'" stroke="#eef0f4"/><text x="30" y="'+(y+4)+'" text-anchor="end" font-size="10" fill="var(--ink2)">'+v+'</text>'; });
  g.sec.forEach(function(q,i){ var x=48+i*70, ob=N?counts[i]/N:0, col=q.col||CC[q.c];
   s+='<rect x="'+x+'" y="'+(base-ob*sc)+'" width="40" height="'+(ob*sc)+'" fill="'+col+'" fill-opacity=".85"/>';
   s+='<line x1="'+(x-6)+'" y1="'+(base-q.p*sc)+'" x2="'+(x+46)+'" y2="'+(base-q.p*sc)+'" stroke="var(--ink)" stroke-width="2.5" stroke-dasharray="5 3"/>';
   s+='<text x="'+(x+20)+'" y="'+(base+16)+'" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink)">'+q.c+'</text>';
  });
  s+='<line x1="34" y1="'+base+'" x2="'+(W-4)+'" y2="'+base+'" stroke="var(--ink)" stroke-width="2"/></svg>';
  $("#trChart").innerHTML=s;
  if(!N){ $("#trRead").innerHTML='No trials yet<small>Expected probabilities: '+g.sec.map(function(q){return q.c+' '+q.f;}).join(", ")+'. They add to 1.</small>'; return; }
  var maxd=0; g.sec.forEach(function(q,i){ maxd=Math.max(maxd,Math.abs(counts[i]/N-q.p)); });
  $("#trRead").innerHTML=N+' trials: the biggest gap between observed and expected is '+maxd.toFixed(2)+'<small>'+g.sec.map(function(q,i){return q.c+': frequency '+counts[i]+', observed '+counts[i]+'/'+N+' ≈ '+(counts[i]/N).toFixed(2)+', expected '+q.f+' ≈ '+q.p.toFixed(2);}).join('; ')+'. '+(N<100?'With few trials, observed probabilities can be far from expected.':'As the number of trials increases, observed probabilities tend to get closer to expected probabilities.')+'</small>';
 }
 $$(".tool [data-n]").forEach(function(b){b.onclick=function(){ var n=+b.dataset.n, pk; for(var i=0;i<n;i++){ pk=pickSector(g.sec); counts[pk.i]++; } N+=n; lastAng=pk.ang; draw(); };});
 $("#trReset").onclick=reset; $("#trG").onchange=reset;
 reset();
}

function wireTool(t){
 if(t==="couldit") wireCouldit();
 if(t==="bag") wireBag();
 if(t==="spinner") wireSpinner();
 if(t==="trials") wireTrials();
}
