function toolHTML(t){
 if(t==="parts") return '<div class="tool"><div class="tt">Model</div><h4>Part-part-whole ten frame</h4><p class="note">Choose a whole, then move counters from one part to the other. The whole stays the same while the parts change.</p><div class="ctrl"><label for="ppW">Whole</label><select id="ppW"></select><button class="btn ghost small" id="ppL">◀ Move one</button><button class="btn ghost small" id="ppR">Move one ▶</button><button class="btn ghost small" id="ppAll">Show all the combinations</button></div><div class="tf" id="ppFrame"></div><div class="readout" id="ppRead"></div><div id="ppList"></div></div>';
 if(t==="line") return '<div class="tool"><div class="tt">Model</div><h4>Empty number line</h4><p class="note">Choose a calculation and a strategy to see how the jumps are recorded. Try 28 + 7, 38 + 25, 79 − 33 and $100 − $38.</p><div class="ctrl"><input type="number" id="nlA" value="38" min="0" max="200"><select id="nlOp"><option value="+">+</option><option value="-">−</option></select><input type="number" id="nlB" value="25" min="0" max="200"><select id="nlS"></select><button class="btn small" id="nlGo">Show</button></div><div id="nlPic" class="nlpic"></div><div class="readout" id="nlRead"></div></div>';
 if(t==="strategies") return '<div class="tool"><div class="tt">Strategy chooser</div><h4>Which strategy fits these numbers?</h4><p class="note">Choose a calculation, then try each strategy. Notice which is most efficient for those particular numbers: the fewest steps, used with ease.</p><div class="ctrl"><label for="stP">Calculation</label><select id="stP"></select></div><div class="moves" id="stM" style="margin-top:0"></div><div id="stOut"></div><div class="fbline show info" id="stTip"></div></div>';
 if(t==="errors") return '<div class="tool"><div class="tt">Diagnostic</div><h4>Spot the error</h4><p class="note">Each piece of student work has an error that NESA or the syllabus describes. Estimate first, then diagnose what went wrong.</p><div class="score" id="erScore"></div><div class="work" id="erWork"></div><div class="roots" id="erOpts" style="margin-top:12px"></div><div class="fbline" id="erFb"></div><div class="ctrl"><button class="btn ghost small" id="erNext" disabled>Next piece of work →</button></div></div>';
 return "";
}

/* ES1 part-part-whole */
function wirePartsTool(){
 var W=7,a=5;
 $("#ppW").innerHTML=[3,4,5,6,7,8,9,10].map(function(x){return '<option'+(x===7?" selected":"")+'>'+x+'</option>';}).join("");
 function draw(){
  var h="";
  for(var i=0;i<10;i++){ var c=i<a?"var(--es1)":(i<W?"var(--s2)":""); h+='<div class="cell">'+(c?'<span class="cn" style="background:'+c+'"></span>':'')+'</div>'; }
  $("#ppFrame").innerHTML=h;
  var b=W-a, extra="";
  if(a===5&&b>0) extra="Five and "+b+" more."; else if(b===5&&a>0) extra="Five and "+a+" more.";
  else if(a===b) extra="Double "+a+".";
  else if(Math.abs(a-b)===1) extra="Near double: double "+Math.min(a,b)+" and one more.";
  $("#ppRead").innerHTML=W+' is '+a+' and '+b+'<small>'+a+' + '+b+' = '+W+'. '+(extra?extra+' ':'')+'If we take '+b+' away, '+a+' are left.</small>';
  $("#ppL").disabled=a<=0; $("#ppR").disabled=a>=W;
 }
 $("#ppW").onchange=function(){W=+this.value;a=Math.min(a,W);$("#ppList").innerHTML="";draw();};
 $("#ppL").onclick=function(){if(a>0){a--;draw();}};
 $("#ppR").onclick=function(){if(a<W){a++;draw();}};
 $("#ppAll").onclick=function(){
  var rows=[];for(var i=W;i>=0;i--) rows.push(i+' + '+(W-i)+' = '+W);
  $("#ppList").innerHTML='<div class="combos">'+rows.map(function(r){return '<span>'+r+'</span>';}).join("")+'</div><p class="note">The pattern: as one part goes down by one, the other goes up by one. In Stage 1, students record all the combinations like this.</p>';
 };
 draw();
}

/* S1 empty number line */
function wireLine(){
 var S={"+":[["jump","Jump: tens, then ones"],["bridge","Bridge to the next ten"]],"-":[["back","Jump back: tens, then ones"],["up","Add up (shopkeeper’s method)"]]};
 function opts(){var op=$("#nlOp").value;$("#nlS").innerHTML=S[op].map(function(x){return '<option value="'+x[0]+'">'+x[1]+'</option>';}).join("");}
 function jumps(a,b,op,st){
  var j=[],cur,t,o;
  if(op==="+"&&st==="jump"){ cur=a; t=Math.floor(b/10)*10; o=b%10; if(t){j.push([cur,cur+t]);cur+=t;} if(o){j.push([cur,cur+o]);} }
  if(op==="+"&&st==="bridge"){ cur=a; var r=b, gap=(10-a%10)%10; if(gap&&r>=gap){j.push([cur,cur+gap]);cur+=gap;r-=gap;} t=Math.floor(r/10)*10; o=r%10; if(t){j.push([cur,cur+t]);cur+=t;} if(o){j.push([cur,cur+o]);} }
  if(op==="-"&&st==="back"){ cur=a; t=Math.floor(b/10)*10; o=b%10; if(t){j.push([cur,cur-t]);cur-=t;} if(o){ var d=cur%10; if(d&&o>d){j.push([cur,cur-d]);cur-=d;o-=d;} j.push([cur,cur-o]); } }
  if(op==="-"&&st==="up"){ cur=b; var gp=(10-b%10)%10; if(gp&&cur+gp<=a){j.push([cur,cur+gp]);cur+=gp;} t=Math.floor((a-cur)/10)*10; if(t){j.push([cur,cur+t]);cur+=t;} if(a-cur){j.push([cur,a]);} }
  return j;
 }
 function go(){
  var a=Math.round(+$("#nlA").value), b=Math.round(+$("#nlB").value), op=$("#nlOp").value, st=$("#nlS").value;
  if(!(a>=0&&b>=0&&a<=200&&b<=200)){ $("#nlRead").innerHTML='<small>Use numbers from 0 to 200.</small>'; $("#nlPic").innerHTML=""; return; }
  if(op==="-"&&b>a){ $("#nlRead").innerHTML='<small>Choose a first number larger than the second for subtraction.</small>'; $("#nlPic").innerHTML=""; return; }
  if((op==="+"&&b===0)||(op==="-"&&b===0)){ $("#nlRead").innerHTML='<small>Choose a second number larger than 0.</small>'; $("#nlPic").innerHTML=""; return; }
  var J=jumps(a,b,op,st), pts=[]; J.forEach(function(x){pts.push(x[0],x[1]);});
  var lo=Math.min.apply(null,pts), hi=Math.max.apply(null,pts), span=Math.max(hi-lo,1);
  var W=700, L=40, R=660, X=function(v){return L+(v-lo)/span*(R-L);};
  // keep small jumps visible: enforce a minimum width by using a piecewise scale on the sorted points
  var uniq=pts.filter(function(v,i){return pts.indexOf(v)===i;}).sort(function(p,q){return p-q;});
  var minW=70, raw=uniq.map(function(v){return (v-lo)/span*(R-L);}), pos=[], acc=0;
  for(var i=0;i<uniq.length;i++){ if(i===0){pos.push(0);continue;} var d=Math.max(raw[i]-raw[i-1],minW); acc+=d; pos.push(acc); }
  var k=(R-L)/Math.max(acc,1); X=function(v){return L+pos[uniq.indexOf(v)]*k;};
  var s='<svg viewBox="0 0 '+W+' 150" role="img" aria-label="Empty number line"><line x1="20" y1="110" x2="680" y2="110" stroke="#1b2333" stroke-width="2"/>';
  uniq.forEach(function(v){ s+='<line x1="'+X(v)+'" y1="102" x2="'+X(v)+'" y2="118" stroke="#1b2333" stroke-width="2"/><text x="'+X(v)+'" y="138" text-anchor="middle" font-size="15" font-weight="700" fill="#1b2333">'+v+'</text>'; });
  J.forEach(function(x,i){ var x1=X(x[0]),x2=X(x[1]),mx=(x1+x2)/2,h=Math.min(70,20+Math.abs(x2-x1)*0.3), dir=x[1]>x[0]?1:-1, col=i%2?"#23897d":"#c88a12";
   s+='<path d="M'+x1+' 104 Q'+mx+' '+(104-h*1.6)+' '+x2+' 104" fill="none" stroke="'+col+'" stroke-width="2.5"/>';
   s+='<path d="M'+x2+' 104 l'+(-6*dir)+' -9 l'+(-3*dir)+' 7 z" fill="'+col+'"/>';
   s+='<text x="'+mx+'" y="'+(104-h*0.8-6)+'" text-anchor="middle" font-size="14" font-weight="700" fill="'+col+'">'+(x[1]>x[0]?"+":"−")+Math.abs(x[1]-x[0])+'</text>'; });
  $("#nlPic").innerHTML=s+'</svg>';
  var ans=op==="+"?a+b:a-b, steps=J.map(function(x){return (x[1]>x[0]?"+ ":"− ")+Math.abs(x[1]-x[0]);}).join(", ");
  var note={jump:"Jumping by tens then ones uses quantity value.",bridge:"Landing on a multiple of ten uses a number bond to 10.",back:"Jumping back by tens, then bridging back through a ten if needed.",up:"Adding up from the smaller number uses the inverse relationship: the jumps add to the answer."}[st];
  $("#nlRead").innerHTML=a+(op==="+"?" + ":" − ")+b+" = "+ans+'<small>Jumps: '+steps+(st==="up"?' → '+J.map(function(x){return x[1]-x[0];}).join(" + ")+' = '+ans:'')+'. '+note+'</small>';
 }
 $("#nlOp").onchange=function(){opts();go();}; $("#nlS").onchange=go; $("#nlGo").onclick=go;
 $("#nlA").onkeydown=$("#nlB").onkeydown=function(e){if(e.key==="Enter") go();};
 opts(); go();
}

/* S2 strategy chooser */
var STRAT=[
 {p:"28 + 35",best:"Levelling or compensation: 28 is 2 away from 30.",s:{jump:"28 + 30 = 58, then + 5 = 63",bridge:"28 + 2 = 30, then + 33 = 63",comp:"30 + 35 = 65, then subtract 2 = 63",level:"28 + 35 = 30 + 33 = 63",split:"20 + 30 = 50, 8 + 5 = 13, 50 + 13 = 63",up:"Adding up is a strategy for subtraction."}},
 {p:"125 − 78",best:"Compensation or constant difference: 78 is 2 away from 80. These are the syllabus examples.",s:{jump:"125 − 70 = 55, then − 8 = 47",bridge:"125 − 25 = 100, then − 53 = 47",comp:"125 − 80 = 45, then add 2 = 47",level:"Constant difference: 125 − 78 = 127 − 80 = 47",split:"!120 − 70 = 50, then 5 − 8? Students often switch to 8 − 5 = 3 and answer 53. NESA advises using the split strategy for addition only.",up:"78 + 2 = 80, + 20 = 100, + 25 = 125. So 2 + 20 + 25 = 47"}},
 {p:"179 + 49",best:"Levelling: 180 + 48 = 228 in one step. The syllabus compares partitioning, rounding and levelling for this calculation.",s:{jump:"179 + 40 = 219, then + 9 = 228",bridge:"179 + 1 = 180, then + 48 = 228",comp:"180 + 50 = 230, then subtract 2 = 228",level:"179 + 49 = 180 + 48 = 228",split:"100 + 70 + 40 = 210, 9 + 9 = 18, 210 + 18 = 228",up:"Adding up is a strategy for subtraction."}},
 {p:"456 − 298",best:"Constant difference: 458 − 300 = 158. NESA notes this suits subtracting a number ending in 8 or 9.",s:{jump:"Sequential: 456 − 200 = 256, − 90 = 166, − 8 = 158",bridge:"456 − 56 = 400, then − 242 = 158",comp:"456 − 300 = 156, then add 2 = 158",level:"Constant difference: 456 − 298 = 458 − 300 = 158",split:"!400 − 200 = 200, 50 − 90?, 6 − 8? The split strategy breaks down with regrouping in subtraction.",up:"298 + 2 = 300, + 100 = 400, + 56 = 456. So 2 + 100 + 56 = 158"}},
 {p:"713 − 695",best:"Adding up: the difference is small. NESA gives 713 − 695 as an example where indirect addition works well.",s:{jump:"713 − 600 = 113, − 90 = 23, − 5 = 18",bridge:"713 − 13 = 700, then − 682 = 18",comp:"713 − 700 = 13, then add 5 = 18",level:"Constant difference: 718 − 700 = 18",split:"!700 − 600 = 100, 10 − 90?, 3 − 5? The split strategy doesn’t work here.",up:"695 + 5 = 700, + 13 = 713. So 5 + 13 = 18"}},
 {p:"547 − 399",best:"Compensation: 547 − 400 = 147, then add 1, so 148. This is NESA’s additional advice example.",s:{jump:"547 − 300 = 247, − 90 = 157, − 9 = 148",bridge:"547 − 47 = 500, then − 352 = 148",comp:"547 − 400 = 147, then add 1 = 148",level:"Constant difference: 548 − 400 = 148",split:"!500 − 300 = 200, 40 − 90?, 7 − 9? The split strategy breaks down with regrouping in subtraction.",up:"399 + 1 = 400, + 100 = 500, + 47 = 547. So 1 + 100 + 47 = 148"}},
 {p:"500 − 498",best:"Adding up or just noticing: 498 is 2 less than 500. NESA lists 500 − 498 as better done mentally than with an algorithm.",s:{jump:"500 − 400 = 100, − 90 = 10, − 8 = 2",bridge:"500 − 400 = 100, − 98 = 2",comp:"500 − 500 = 0, then add 2 = 2",level:"Constant difference: 502 − 500 = 2",split:"!The split strategy and the algorithm both need regrouping across zeros here: far more work than the answer deserves.",up:"498 + 2 = 500. So 2"}}
];
var SNAMES=[["jump","Jump"],["bridge","Bridge to a ten"],["comp","Compensation"],["level","Levelling / constant difference"],["split","Split tens and ones"],["up","Add up"]];
function wireStrategies(){
 $("#stP").innerHTML=STRAT.map(function(x,i){return '<option value="'+i+'">'+x.p+'</option>';}).join("");
 var cur=0;
 function show(){
  var P=STRAT[cur];
  $("#stM").innerHTML=SNAMES.map(function(n){return '<button data-k="'+n[0]+'">'+n[1]+'</button>';}).join("");
  $("#stOut").innerHTML='<p class="note">Choose a strategy.</p>';
  $("#stTip").innerHTML='<b>Think first:</b> what do you notice about the numbers in '+P.p+'? <button class="btn ghost small" id="stBest" style="margin-left:8px">Show the most efficient</button>';
  $("#stBest").onclick=function(){$("#stTip").innerHTML='<b>Most efficient for '+P.p+':</b> '+P.best;};
  $$("#stM button").forEach(function(b){b.onclick=function(){
   $$("#stM button").forEach(function(x){x.classList.toggle("on",x===b);});
   var t=P.s[b.dataset.k], warn=t.charAt(0)==="!", body=warn?t.slice(1):t;
   $("#stOut").innerHTML='<div class="mk" style="grid-template-columns:1fr"><div class="side '+(warn?"before":"after")+'"><div class="lbl">'+b.textContent+'</div><div class="task" style="font-size:17px">'+body+'</div>'+'</div></div>';
  };});
 }
 $("#stP").onchange=function(){cur=+this.value;show();};
 show();
}

/* S3 spot the error */
var ERRS=[
 {st:"S2",work:"&nbsp;&nbsp;543\n− 289\n─────\n&nbsp;&nbsp;346",est:"543 − 289 is about 540 − 290 = 250, so 346 is far too big.",a:0,why:"In each column the smaller digit was taken from the larger (9 − 3, 8 − 4). This is the smaller-from-larger error. Emphasise quantity value, use number expanders, and estimate first."},
 {st:"S1",work:"96 − 58\n90 − 50 = 40\n8 − 6 = 2\nAnswer: 42",est:"96 − 58 is about 100 − 60 = 40, but 58 + 42 = 100, not 96.",a:0,why:"The split strategy led to 8 − 6 instead of 6 − 8. NESA advises using the split strategy for addition only."},
 {st:"S3",work:"2.25 + 1.5 = 2.40",est:"About 2 + 1.5 = 3.5, so 2.40 is too small.",a:2,why:"The student added 15 hundredths instead of 5 tenths, treating the decimal parts as whole numbers. Rename 1.5 as 1.50 and use a number line."},
 {st:"S3",work:"2.25 − 1.5 = 2.10",est:"2.25 − 1.5 should be less than 1, so 2.10 is far too big.",a:2,why:"The student subtracted 15 from 25 (hundredths) and kept the 2. NESA suggests asking students to explain why 2.25 − 1.5 is not 2.10."},
 {st:"S3",work:"&nbsp;&nbsp;1438\n+ 129&nbsp;\n─────\n&nbsp;&nbsp;2728",est:"1438 + 129 is about 1440 + 130 = 1570, so 2728 is far too big.",a:1,why:"The digits of 129 were aligned from the left, so the student added 1290. Use place value to check: the 1 in 129 is one hundred."},
 {st:"S2",work:"&nbsp;&nbsp;528\n−&nbsp;&nbsp;43\n─────\n&nbsp;&nbsp;585",est:"528 − 43 is about 530 − 40 = 490, so 585 is too big.",a:3,why:"The student exchanged a hundred to make 12 tens, but didn’t reduce the 5 hundreds to 4. In expanded form, 400 + 120 + 8 take away 40 + 3 is 400 + 80 + 5 = 485. NESA stresses that one of the hundreds becomes 10 tens, not simply 10."}
];
function wireErrors(){
 var opts=["Smaller digit taken from larger","Digits not aligned by place value","Decimal parts treated as whole numbers","Exchange recorded incorrectly"];
 var list=ERRS;
 var i=0,score=0,first=true;
 function show(){
  var e=list[i]; first=true;
  $("#erScore").textContent="Work "+(i+1)+" of "+list.length+" · "+e.st+" · first-try score "+score;
  $("#erWork").innerHTML='<pre>'+e.work+'</pre><button class="btn ghost small" id="erEst">Estimate first</button><span class="note" id="erEstT" style="margin-left:10px"></span>';
  $("#erEst").onclick=function(){$("#erEstT").textContent=e.est;};
  $("#erOpts").innerHTML=opts.map(function(o,j){return '<button data-j="'+j+'">'+o+'</button>';}).join("");
  $("#erFb").className="fbline"; $("#erNext").disabled=true;
  $$("#erOpts button").forEach(function(b){b.onclick=function(){
   var j=+b.dataset.j;
   if(j===e.a){ if(first) score++; b.classList.add("right"); $$("#erOpts button").forEach(function(x){x.disabled=true;}); $("#erFb").className="fbline show ok"; $("#erFb").innerHTML="<b>Yes.</b> "+e.why; $("#erNext").disabled=false; $("#erEstT").textContent=e.est; }
   else { first=false; b.classList.add("wrong"); b.disabled=true; $("#erFb").className="fbline show no"; $("#erFb").textContent="Not quite. Look at what the student did in each step."; }
   $("#erScore").textContent="Work "+(i+1)+" of "+list.length+" · "+e.st+" · first-try score "+score;
  };});
 }
 $("#erNext").onclick=function(){ i++; if(i>=list.length){ $("#erWork").innerHTML='<p class="readout">You diagnosed '+score+' of '+list.length+' on the first try.<small>Which of these errors would an estimate have caught?</small></p><button class="btn small" id="erAgain">Start again</button>'; $("#erOpts").innerHTML=""; $("#erFb").className="fbline"; $("#erNext").disabled=true; $("#erAgain").onclick=function(){i=0;score=0;show();}; return; } show(); };
 show();
}

function wireTool(t){
 if(t==="parts") wirePartsTool();
 if(t==="line") wireLine();
 if(t==="strategies") wireStrategies();
 if(t==="errors") wireErrors();
}
