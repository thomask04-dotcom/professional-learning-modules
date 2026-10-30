function toolHTML(t){
 if(t==="compare") return '<div class="tool"><div class="tt">Diagnostic</div><h4>Which is longer?</h4><p class="note">The ends aren’t lined up. Decide which ribbon is longer, then line up the ends to check, as NESA advises.</p><div class="cmpbox" id="cmBox"></div><div class="ctrl"><button class="btn small" data-c="a" id="cmA">Top is longer</button><button class="btn small" data-c="b" id="cmB">Bottom is longer</button><button class="btn small" data-c="s" id="cmS">The same</button><button class="btn ghost small" id="cmNew" disabled>New ribbons</button></div><div class="fbline" id="cmFb"></div><div class="score" id="cmScore"></div></div>';
 if(t==="units") return '<div class="tool"><div class="tt">Model</div><h4>Measure with informal units</h4><p class="note">Choose an object and a unit, then see what happens when units are placed correctly, with gaps, or with overlaps.</p><div class="ctrl"><label for="unObj">Object</label><select id="unObj"><option value="15">desk</option><option value="6.5" selected>book</option><option value="4.4">pencil</option><option value="24">bookshelf</option></select><label for="unU">Unit</label><select id="unU"><option value="1">paper clips</option><option value="3.5">pop sticks</option><option value="2.4">footprints</option></select></div><div class="moves" id="unMode" style="margin-top:0"><button data-m="ok" class="on">End to end</button><button data-m="gap">With gaps</button><button data-m="over">With overlaps</button></div><div class="unpic" id="unPic"></div><div class="readout" id="unRead"></div></div>';
 if(t==="angles") return '<div class="tool"><div class="tt">Diagnostic</div><h4>Which angle is larger?</h4><p class="note">Judge by the amount of turn, not the length of the arms. Then lay angle B on angle A to check.</p><div class="angpair" id="agPic"></div><div class="ctrl"><button class="btn small" data-c="a">A is larger</button><button class="btn small" data-c="b">B is larger</button><button class="btn small" data-c="s">They’re the same</button><button class="btn ghost small" id="agNew" disabled>New angles</button></div><div class="fbline" id="agFb"></div><div class="score" id="agScore"></div></div>';
 if(t==="rects") return '<div class="tool"><div class="tt">Model</div><h4>Same perimeter, different rectangles</h4><p class="note">Fix the perimeter or the area, and see every rectangle with whole-number sides.</p><div class="moves" id="rcMode" style="margin-top:0"><button data-m="p" class="on">Fix the perimeter</button><button data-m="a">Fix the area</button></div><div class="ctrl"><label for="rcV" id="rcLab">Perimeter (units)</label><input type="number" id="rcV" value="20" min="4" max="60" style="width:80px"><button class="btn small" id="rcGo">Show</button></div><div class="rcgrid" id="rcPic"></div><div class="readout" id="rcRead"></div></div>';
 return "";
}

/* ES1 compare lengths */
function wireCompare(){
 var a,b,offA,offB,score=0,round=0;
 function newRound(){
  round++;
  var same=Math.random()<0.25;
  a=35+Math.round(Math.random()*20); b=same?a:a+(Math.random()<0.5?-1:1)*(4+Math.round(Math.random()*6));
  offA=Math.round(Math.random()*15); offB=Math.round(Math.random()*15);
  if(b>a&&offA<offB+ (b-a)) offA=offB+(b-a)+3; // make the shorter one stick out further
  if(a>b&&offB<offA+(a-b)) offB=offA+(a-b)+3;
  if(same){ offA=10; offB=0; }
  draw(false); $("#cmFb").className="fbline";
  $$(".tool [data-c]").forEach(function(x){x.disabled=false;}); $("#cmNew").disabled=true;
 }
 function draw(aligned){
  var oa=aligned?0:offA, ob=aligned?0:offB;
  $("#cmBox").innerHTML='<div class="rb" style="margin-left:'+oa+'%;width:'+a+'%;background:var(--es1)"><span>top</span></div><div class="rb" style="margin-left:'+ob+'%;width:'+b+'%;background:var(--s2)"><span>bottom</span></div>'+(aligned?'<div class="alignline"></div>':'');
 }
 $$(".tool [data-c]").forEach(function(btn){btn.onclick=function(){
  var c=btn.dataset.c, right=a===b?"s":(a>b?"a":"b");
  draw(true);
  var ok=c===right; if(ok) score++;
  $("#cmFb").className="fbline show "+(ok?"ok":"no");
  $("#cmFb").innerHTML=(ok?"<b>Yes.</b> ":"<b>Not this time.</b> ")+(right==="s"?"With the ends lined up, the ribbons are the same length.":"With the ends lined up, the "+(right==="a"?"top":"bottom")+" ribbon is longer.")+" The other end sticking out further didn’t tell us which was longer.";
  $$(".tool [data-c]").forEach(function(x){x.disabled=true;}); $("#cmNew").disabled=false;
  $("#cmScore").textContent=score+" of "+round+" correct";
 };});
 $("#cmNew").onclick=newRound;
 newRound();
}

/* S1 informal units */
function wireUnits(){
 var mode="ok";
 var NAMES={"1":["paper clip","paper clips"],"3.5":["pop stick","pop sticks"],"2.4":["footprint","footprints"]};
 function describe(n,unit){
  var w=Math.floor(n), r=n-w, nm=NAMES[unit];
  if(r<0.15) return (w===1?"1 "+nm[0]:w+" "+nm[1]);
  if(r<0.35) return "a bit more than "+w+" "+(w===1?nm[0]:nm[1]);
  if(r<=0.65) return "about "+w+" and a half "+nm[1];
  if(r<0.85) return "less than "+(w+1)+" "+nm[1]+" (more than "+w+" and a half)";
  return "almost "+(w+1)+" "+nm[1];
 }
 function draw(){
  var L=+$("#unObj").value, u=+$("#unU").value, uk=$("#unU").value;
  var scale=640/Math.max(L,6), W=L*scale, uw=u*scale;
  var step = mode==="ok"?uw:(mode==="gap"?uw*1.3:uw*0.75);
  var cnt=0, x=0, h='<div class="unobj" style="width:'+W+'px">'+$("#unObj").selectedOptions[0].text+'</div><div class="unrow" style="width:'+W+'px">';
  while(x+0.01<W){ var vis=Math.min(uw,W-x); h+='<div class="un u'+uk.replace(".","")+'" style="left:'+x+'px;width:'+vis+'px"></div>'; cnt++; x+=step; }
  h+='</div>';
  $("#unPic").innerHTML=h;
  var trueN=L/u, nm=NAMES[uk];
  var msg;
  if(mode==="ok") msg='The '+$("#unObj").selectedOptions[0].text+' is '+describe(trueN,uk)+'<small>Units end to end, no gaps or overlaps. Record the type of unit as well as the number. '+(uk!=="1"?'In paper clips it would be '+describe(L,"1")+': smaller units, more of them.':'In pop sticks it would be '+describe(L/3.5,"3.5")+': bigger units, fewer of them.')+'</small>';
  else msg='Counted: '+cnt+' '+(cnt===1?nm[0]:nm[1])+'<small>'+(mode==="gap"?'Gaps between the units mean fewer are counted than the true measure ('+describe(trueN,uk)+').':'Overlapping units mean more are counted than the true measure ('+describe(trueN,uk)+').')+' Units must go end to end without gaps or overlaps.</small>';
  $("#unRead").innerHTML=msg;
 }
 $("#unObj").onchange=draw; $("#unU").onchange=draw;
 $$("#unMode button").forEach(function(b){b.onclick=function(){mode=b.dataset.m;$$("#unMode button").forEach(function(x){x.classList.toggle("on",x===b);});draw();};});
 draw();
}

/* S2 compare angles */
function angClass(d){ if(d<88) return "acute: less than a quarter-turn"; if(d<=92) return "a right angle: a quarter-turn"; if(d<178) return "obtuse: more than a quarter-turn, less than a half-turn"; if(d<=182) return "a straight angle: a half-turn"; if(d<358) return "reflex: more than a half-turn"; return "a revolution: a full turn"; }
function wireAngles(){
 var A,B,la,lb,rotA,rotB,score=0,round=0;
 function svgAngle(deg,len,rot,col,lbl,overlay){
  var cx=150,cy=150, r1=rot*Math.PI/180, r2=(rot+deg)*Math.PI/180;
  var x1=cx+len*Math.cos(r1), y1=cy-len*Math.sin(r1), x2=cx+len*Math.cos(r2), y2=cy-len*Math.sin(r2);
  var ar=28, ax1=cx+ar*Math.cos(r1), ay1=cy-ar*Math.sin(r1), ax2=cx+ar*Math.cos(r2), ay2=cy-ar*Math.sin(r2);
  var s='<path d="M'+ax1+' '+ay1+' A'+ar+' '+ar+' 0 '+(deg>180?1:0)+' 0 '+ax2+' '+ay2+'" fill="none" stroke="'+col+'" stroke-width="2"/>';
  s+='<line x1="'+cx+'" y1="'+cy+'" x2="'+x1+'" y2="'+y1+'" stroke="'+col+'" stroke-width="4" stroke-linecap="round"/><line x1="'+cx+'" y1="'+cy+'" x2="'+x2+'" y2="'+y2+'" stroke="'+col+'" stroke-width="4" stroke-linecap="round"/><circle cx="'+cx+'" cy="'+cy+'" r="4" fill="#1b2333"/>';
  if(!overlay) s+='<text x="20" y="28" font-size="20" font-weight="800" fill="'+col+'">'+lbl+'</text>';
  return s;
 }
 function newRound(){
  round++;
  A=25+Math.round(Math.random()*130); var same=Math.random()<0.3;
  B=same?A:A+(Math.random()<0.5?-1:1)*(8+Math.round(Math.random()*20)); B=Math.max(15,Math.min(170,B)); if(!same&&Math.abs(A-B)<6) B=A+12;
  // the smaller angle gets the longer arms, to tempt the misconception
  la = A<B?125:55; lb = A<B?55:125; if(same){la=130;lb=50;}
  rotA=Math.round(Math.random()*40); rotB=Math.round(Math.random()*120);
  $("#agPic").innerHTML='<svg viewBox="0 0 300 300">'+svgAngle(A,la,rotA,"#23897d","A")+'</svg><svg viewBox="0 0 300 300">'+svgAngle(B,lb,rotB,"#c8553d","B")+'</svg>';
  $("#agFb").className="fbline"; $$(".tool [data-c]").forEach(function(x){x.disabled=false;}); $("#agNew").disabled=true;
 }
 $$(".tool [data-c]").forEach(function(btn){btn.onclick=function(){
  var right=A===B?"s":(A>B?"a":"b"), ok=btn.dataset.c===right; if(ok) score++;
  $("#agPic").innerHTML='<svg viewBox="0 0 300 300">'+svgAngle(A,la,0,"#23897d","A",false)+svgAngle(B,lb,0,"#c8553d","",true)+'</svg><div class="note" style="align-self:center;max-width:260px">B laid on A with one arm aligned. A is '+angClass(A)+'. B is '+angClass(B)+'.</div>';
  $("#agFb").className="fbline show "+(ok?"ok":"no");
  $("#agFb").innerHTML=(ok?"<b>Yes.</b> ":"<b>Not this time.</b> ")+(right==="s"?"They are the same size: the amount of turn is equal, even though the arms are different lengths.":(right==="a"?"A":"B")+" turns further between its arms. "+(((right==="a")===(la>lb))?"":"It has the shorter arms: arm length doesn’t affect the size of an angle."));
  $$(".tool [data-c]").forEach(function(x){x.disabled=true;}); $("#agNew").disabled=false;
  $("#agScore").textContent=score+" of "+round+" correct";
 };});
 $("#agNew").onclick=newRound;
 newRound();
}

/* S3 rectangles */
function wireRects(){
 var mode="p";
 function draw(){
  var v=Math.round(+$("#rcV").value), list=[];
  if(mode==="p"){
   if(!(v>=4&&v<=60)||v%2){ $("#rcRead").innerHTML='<small>Choose an even perimeter from 4 to 60, so the sides can be whole numbers.</small>'; $("#rcPic").innerHTML=""; return; }
   for(var w=1;w<=v/4;w++){ var l=v/2-w; if(l>=w) list.push([l,w]); }
  } else {
   if(!(v>=1&&v<=100)){ $("#rcRead").innerHTML='<small>Choose an area from 1 to 100.</small>'; $("#rcPic").innerHTML=""; return; }
   for(var w2=1;w2*w2<=v;w2++){ if(v%w2===0) list.push([v/w2,w2]); }
  }
  var maxL=Math.max.apply(null,list.map(function(r){return r[0];})), cell=Math.max(6,Math.min(18,Math.floor(170/maxL)));
  var best = mode==="p" ? Math.max.apply(null,list.map(function(r){return r[0]*r[1];})) : Math.min.apply(null,list.map(function(r){return 2*(r[0]+r[1]);}));
  $("#rcPic").innerHTML=list.map(function(r){
   var A=r[0]*r[1], P=2*(r[0]+r[1]), hi = mode==="p"?A===best:P===best;
   return '<div class="rc'+(hi?" best":"")+'"><div class="rcshape" style="width:'+(r[0]*cell)+'px;height:'+(r[1]*cell)+'px;background-size:'+cell+'px '+cell+'px"></div><div class="rclab"><b>'+r[0]+' × '+r[1]+'</b><br>Perimeter '+P+' · Area '+A+'</div></div>';
  }).join("");
  if(mode==="p") $("#rcRead").innerHTML=list.length+' rectangle'+(list.length>1?'s':'')+' with a perimeter of '+v+'<small>Length and width always add to '+(v/2)+'. The areas range from '+Math.min.apply(null,list.map(function(r){return r[0]*r[1];}))+' to '+best+' square units, so the same perimeter doesn’t mean the same area. The closest to a square has the largest area.</small>';
  else $("#rcRead").innerHTML=list.length+' rectangle'+(list.length>1?'s':'')+' with an area of '+v+'<small>Each pair of sides is a factor pair of '+v+'. The perimeters range from '+best+' to '+Math.max.apply(null,list.map(function(r){return 2*(r[0]+r[1]);}))+' units. The closest to a square has the smallest perimeter.</small>';
 }
 $$("#rcMode button").forEach(function(b){b.onclick=function(){mode=b.dataset.m;$$("#rcMode button").forEach(function(x){x.classList.toggle("on",x===b);});$("#rcLab").textContent=mode==="p"?"Perimeter (units)":"Area (square units)";$("#rcV").value=mode==="p"?20:24;draw();};});
 $("#rcGo").onclick=draw; $("#rcV").onkeydown=function(e){if(e.key==="Enter") draw();};
 draw();
}

function wireTool(t){
 if(t==="compare") wireCompare();
 if(t==="units") wireUnits();
 if(t==="angles") wireAngles();
 if(t==="rects") wireRects();
}
