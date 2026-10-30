function toolHTML(t){
 if(t==="balance") return '<div class="tool"><div class="tt">Diagnostic</div><h4>Which side will go down?</h4><p class="note">The pairs follow NESA’s advice to include objects that are large but light, small but heavy, and the same size but different in mass. Predict, then let go of the balance. (In class, use real objects: NESA notes pictures can reinforce ‘bigger is heavier’.)</p><div class="blpic" id="blPic"></div><div class="ctrl"><button class="btn small" data-c="l">Left is heavier</button><button class="btn small" data-c="r">Right is heavier</button><button class="btn small" data-c="s">About the same</button><button class="btn ghost small" id="blNew" disabled>Next pair</button></div><div class="fbline" id="blFb"></div><div class="score" id="blScore"></div></div>';
 if(t==="clock") return '<div class="tool"><div class="tt">Model</div><h4>Watch the hour hand</h4><p class="note">Move the minute hand and watch the hour hand travel between the numerals. Switch to “Hour hand stuck” to see the common error of pointing the hour hand at the numeral for half past.</p><div class="moves" id="ckMode" style="margin-top:0"><button data-m="move" class="on">Hour hand moves</button><button data-m="stuck">Hour hand stuck (error)</button></div><div class="ckwrap"><div class="ckpic" id="ckPic"></div><div class="ckside"><div class="ctrl" style="margin-top:0"><label for="ckH">Hour</label><select id="ckH">'+[1,2,3,4,5,6,7,8,9,10,11,12].map(function(h){return '<option'+(h===3?' selected':'')+'>'+h+'</option>';}).join("")+'</select></div><div class="ctrl"><label for="ckM">Minutes</label><input type="range" id="ckM" min="0" max="59" value="30"><span class="ckv" id="ckMv">30</span></div><div class="moves" id="ckQ" style="margin:0"><button data-q="0">o’clock</button><button data-q="15">quarter past</button><button data-q="30" class="on">half past</button><button data-q="45">quarter to</button></div></div></div><div class="readout" id="ckRead"></div></div>';
 if(t==="readclock") return '<div class="tool"><div class="tt">Diagnostic</div><h4>Read the clock to the minute</h4><p class="note">Each numeral has two values: the hour for the hour hand and 5-minute intervals for the minute hand. Choose the time shown. The wrong options are common errors.</p><div class="rcwrap"><div class="ckpic" id="rdPic"></div><div class="rdopts" id="rdOpts"></div></div><div class="fbline" id="rdFb"></div><div class="ctrl"><button class="btn ghost small" id="rdNew" disabled>New clock</button><label><input type="checkbox" id="rdMarks"> Show 5-minute labels</label><span class="score" id="rdScore"></span></div></div>';
 if(t==="elapsed") return '<div class="tool"><div class="tt">Model</div><h4>Elapsed time on a timeline</h4><p class="note">Enter start and finish times. The unscaled timeline bridges to the next hour, jumps whole hours, then adds the remaining minutes, as in the NESA advice.</p><div class="ctrl" style="margin-top:0"><label for="elS">Start</label><input type="time" id="elS" value="08:40"><label for="elE">Finish</label><input type="time" id="elE" value="11:05"><button class="btn small" id="elGo">Show</button></div><div class="moves" id="elFmt" style="margin-top:0"><button data-f="12" class="on">12-hour time</button><button data-f="24">24-hour time</button></div><div class="elpic" id="elPic"></div><div class="readout" id="elRead"></div></div>';
 return "";
}

/* ---------- shared helpers ---------- */
var NUMW=["","one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve"];
function hr12(h){ h=((h-1)%12+12)%12+1; return h; }
function timeWords(h,m){
 var nh=hr12(h+1);
 if(m===0) return NUMW[hr12(h)]+" o’clock";
 if(m===15) return "quarter past "+NUMW[hr12(h)];
 if(m===30) return "half past "+NUMW[hr12(h)];
 if(m===45) return "quarter to "+NUMW[nh];
 var w={5:"five",10:"ten",20:"twenty",25:"twenty-five"};
 if(m<30) return (w[m]||m+" minute"+(m===1?"":"s"))+" past "+NUMW[hr12(h)];
 var r=60-m; return (w[r]||r+" minute"+(r===1?"":"s"))+" to "+NUMW[nh];
}
function digital(h,m){ return hr12(h)+":"+(m<10?"0":"")+m; }
function clockSVG(h,m,opt){
 opt=opt||{}; var cx=110, cy=110, R=96, s='<svg viewBox="0 0 220 220" role="img" aria-label="Analog clock">';
 s+='<circle cx="'+cx+'" cy="'+cy+'" r="'+R+'" fill="#fff" stroke="var(--ink)" stroke-width="4"/>';
 for(var i=0;i<60;i++){ var a=i*Math.PI/30, big=i%5===0, r1=big?R-12:R-6;
  s+='<line x1="'+(cx+Math.sin(a)*r1).toFixed(1)+'" y1="'+(cy-Math.cos(a)*r1).toFixed(1)+'" x2="'+(cx+Math.sin(a)*(R-2)).toFixed(1)+'" y2="'+(cy-Math.cos(a)*(R-2)).toFixed(1)+'" stroke="var(--ink)" stroke-width="'+(big?2.5:1)+'"/>'; }
 for(var n=1;n<=12;n++){ var b=n*Math.PI/6;
  s+='<text x="'+(cx+Math.sin(b)*(R-26)).toFixed(1)+'" y="'+(cy-Math.cos(b)*(R-26)+6).toFixed(1)+'" text-anchor="middle" font-size="17" font-weight="700" fill="var(--ink)">'+n+'</text>';
  if(opt.marks) s+='<text x="'+(cx+Math.sin(b)*(R+14)).toFixed(1)+'" y="'+(cy-Math.cos(b)*(R+14)+4).toFixed(1)+'" text-anchor="middle" font-size="11" font-weight="700" fill="var(--accent)">'+(n*5%60===0?"00":n*5)+'</text>';
 }
 if(opt.sector){ var e=m*Math.PI/30; if(m>0) s+='<path d="M'+cx+' '+cy+' L'+cx+' '+(cy-R+14)+' A'+(R-14)+' '+(R-14)+' 0 '+(m>30?1:0)+' 1 '+(cx+Math.sin(e)*(R-14)).toFixed(1)+' '+(cy-Math.cos(e)*(R-14)).toFixed(1)+'Z" fill="var(--s1)" fill-opacity=".14"/>'; }
 var ha=((h%12)+(opt.stuck?0:m/60))*Math.PI/6, ma=m*Math.PI/30;
 s+='<line x1="'+cx+'" y1="'+cy+'" x2="'+(cx+Math.sin(ma)*(R-16)).toFixed(1)+'" y2="'+(cy-Math.cos(ma)*(R-16)).toFixed(1)+'" stroke="#2f7f6f" stroke-width="5" stroke-linecap="round"/>';
 s+='<line x1="'+cx+'" y1="'+cy+'" x2="'+(cx+Math.sin(ha)*(R-46)).toFixed(1)+'" y2="'+(cy-Math.cos(ha)*(R-46)).toFixed(1)+'" stroke="'+(opt.stuck?"var(--accent)":"#1f2a44")+'" stroke-width="8" stroke-linecap="round"/>';
 s+='<circle cx="'+cx+'" cy="'+cy+'" r="6" fill="var(--ink)"/>';
 return s+'</svg>';
}

/* ---------- ES1 balance ---------- */
var BL_PAIRS=[
 {l:{n:"beach ball",k:"circle",w:84,h:84,c:"#e0a33a"},r:{n:"rock",k:"rock",w:40,h:30,c:"#7a7f8c"},a:"r",why:"The rock is smaller but heavier. Large objects can be lighter than smaller ones."},
 {l:{n:"box of books",k:"box",w:84,h:64,c:"#8b6b4a"},r:{n:"feather",k:"feather",w:56,h:18,c:"#9aa6bd"},a:"l",why:"The box is large and heavy; the feather is small and light. Here the bigger object is heavier."},
 {l:{n:"empty box",k:"box",w:90,h:66,c:"#d9c3a3"},r:{n:"full water bottle",k:"bottle",w:28,h:70,c:"#3b7fae"},a:"r",why:"The water bottle is smaller but heavier than the empty box."},
 {l:{n:"tin of beans",k:"tin",w:36,h:44,c:"#c8553d"},r:{n:"pillow",k:"pillow",w:96,h:40,c:"#c9d0f0"},a:"l",why:"The tin is small and heavy; the pillow is large and light."},
 {l:{n:"box full of blocks",k:"box",w:64,h:54,c:"#8b6b4a"},r:{n:"the same box, empty",k:"box",w:64,h:54,c:"#d9c3a3"},a:"l",why:"The boxes are the same size and shape, but they have different masses."},
 {l:{n:"ball of plasticine",k:"circle",w:46,h:46,c:"#2f7f6f"},r:{n:"the same plasticine rolled into a snake",k:"snake",w:96,h:14,c:"#2f7f6f"},a:"s",why:"It is the same plasticine, so the mass is the same: changing the shape doesn’t change the mass (Stage 1 conservation)."}
];
function blObj(o,x,y){
 var s='', w=o.w, h=o.h, c=o.c, x0=x-w/2, y0=y-h;
 if(o.k==="circle") s='<circle cx="'+x+'" cy="'+(y-h/2)+'" r="'+(w/2)+'" fill="'+c+'"/>'+(w>60?'<path d="M'+(x-w/2)+' '+(y-h/2)+' Q'+x+' '+(y-h/2-18)+' '+(x+w/2)+' '+(y-h/2)+'" stroke="#fff" stroke-width="4" fill="none"/>':'');
 else if(o.k==="rock") s='<path d="M'+x0+' '+y+' Q'+(x0-4)+' '+(y0+6)+' '+(x0+12)+' '+y0+' Q'+(x+8)+' '+(y0-6)+' '+(x0+w)+' '+(y0+10)+' Q'+(x0+w+4)+' '+y+' '+(x0+w-4)+' '+y+'Z" fill="'+c+'"/>';
 else if(o.k==="feather") s='<path d="M'+x0+' '+y+' Q'+x+' '+(y-h*1.6)+' '+(x0+w)+' '+(y-h)+' Q'+x+' '+(y-2)+' '+x0+' '+y+'Z" fill="'+c+'"/>';
 else if(o.k==="bottle") s='<rect x="'+x0+'" y="'+(y0+12)+'" width="'+w+'" height="'+(h-12)+'" rx="5" fill="'+c+'"/><rect x="'+(x-5)+'" y="'+y0+'" width="10" height="14" fill="'+c+'"/>';
 else if(o.k==="tin") s='<rect x="'+x0+'" y="'+y0+'" width="'+w+'" height="'+h+'" rx="3" fill="'+c+'"/><rect x="'+x0+'" y="'+(y0+12)+'" width="'+w+'" height="18" fill="#fff" fill-opacity=".5"/>';
 else if(o.k==="pillow") s='<rect x="'+x0+'" y="'+y0+'" width="'+w+'" height="'+h+'" rx="16" fill="'+c+'"/>';
 else if(o.k==="snake") s='<rect x="'+x0+'" y="'+y0+'" width="'+w+'" height="'+h+'" rx="7" fill="'+c+'"/>';
 else s='<rect x="'+x0+'" y="'+y0+'" width="'+w+'" height="'+h+'" rx="3" fill="'+c+'"/><line x1="'+x0+'" y1="'+(y0+10)+'" x2="'+(x0+w)+'" y2="'+(y0+10)+'" stroke="#000" stroke-opacity=".15" stroke-width="2"/>';
 return s;
}
function wireBalance(){
 var order, i, score=0, round=0;
 function draw(p,tilt){
  var cx=200, cy=70, L=130, ang=tilt*Math.PI/180, dx=Math.cos(ang)*L, dy=Math.sin(ang)*L;
  var lx=cx-dx, ly=cy-dy, rx=cx+dx, ry=cy+dy, drop=70, s='<svg viewBox="0 0 400 260" style="max-width:520px">';
  s+='<path d="M'+(cx-40)+' 250 L'+(cx+40)+' 250 L'+(cx+8)+' '+(cy+4)+' L'+(cx-8)+' '+(cy+4)+'Z" fill="#c9ced9"/>';
  s+='<line x1="'+lx.toFixed(1)+'" y1="'+ly.toFixed(1)+'" x2="'+rx.toFixed(1)+'" y2="'+ry.toFixed(1)+'" stroke="var(--ink)" stroke-width="7" stroke-linecap="round"/><circle cx="'+cx+'" cy="'+cy+'" r="7" fill="var(--accent)"/>';
  [[lx,ly,p.l],[rx,ry,p.r]].forEach(function(e){
   var px=e[0], py=e[1]+drop+60;
   s+='<line x1="'+px.toFixed(1)+'" y1="'+e[1].toFixed(1)+'" x2="'+(px-50).toFixed(1)+'" y2="'+py.toFixed(1)+'" stroke="var(--ink3)" stroke-width="1.5"/><line x1="'+px.toFixed(1)+'" y1="'+e[1].toFixed(1)+'" x2="'+(px+50).toFixed(1)+'" y2="'+py.toFixed(1)+'" stroke="var(--ink3)" stroke-width="1.5"/>';
   s+=blObj(e[2],px,py);
   s+='<path d="M'+(px-58).toFixed(1)+' '+py.toFixed(1)+' Q'+px.toFixed(1)+' '+(py+22).toFixed(1)+' '+(px+58).toFixed(1)+' '+py.toFixed(1)+'Z" fill="#9aa6bd"/>';
  });
  s+='</svg><div class="bllab"><span>'+p.l.n+'</span><span>'+p.r.n+'</span></div>';
  $("#blPic").innerHTML=s;
 }
 function start(){ order=BL_PAIRS.slice().sort(function(){return Math.random()-.5;}); i=0; show(); }
 function show(){ draw(order[i],0); $("#blFb").className="fbline"; $$(".tool [data-c]").forEach(function(x){x.disabled=false;}); $("#blNew").disabled=true; $("#blNew").textContent="Next pair"; }
 $$(".tool [data-c]").forEach(function(btn){btn.onclick=function(){
  var p=order[i], ok=btn.dataset.c===p.a; round++; if(ok) score++;
  draw(p,p.a==="l"?-12:p.a==="r"?12:0);
  $("#blFb").className="fbline show "+(ok?"ok":"no");
  $("#blFb").innerHTML=(ok?"<b>Yes.</b> ":"<b>Not this time.</b> ")+(p.a==="s"?"The balance stays level. ":"The "+(p.a==="l"?p.l.n:p.r.n)+" side goes down. ")+p.why;
  $$(".tool [data-c]").forEach(function(x){x.disabled=true;}); $("#blNew").disabled=false;
  if(i===order.length-1) $("#blNew").textContent="Start again";
  $("#blScore").textContent=score+" of "+round+" correct";
 };});
 $("#blNew").onclick=function(){ if(i===order.length-1) start(); else { i++; show(); } };
 start();
}

/* ---------- S1 clock model ---------- */
function wireClock(){
 var mode="move";
 function draw(){
  var h=+$("#ckH").value, m=+$("#ckM").value; $("#ckMv").textContent=m;
  $$("#ckQ button").forEach(function(b){b.classList.toggle("on",+b.dataset.q===m);});
  $("#ckPic").innerHTML=clockSVG(h,m,{stuck:mode==="stuck",sector:true});
  var turn={0:"no turn yet",15:"a quarter turn",30:"a half turn",45:"three-quarters of a turn"}[m], frac=m/60, msg;
  if(mode==="stuck") msg='Not quite: the hour hand is still pointing at the '+h+'<small>'+(m===0?'At o’clock this is correct. Move the minute hand to see the problem.':'After '+m+' minutes, the hour hand should have moved '+(m===30?'halfway':m===15?'a quarter of the way':m===45?'three-quarters of the way':Math.round(frac*100)+'% of the way')+' from the '+h+' to the '+hr12(h+1)+'. Students often position the hour hand inaccurately while placing the minute hand correctly (Earnest et al. 2018).')+'</small>';
  else msg=timeWords(h,m).replace(/^./,function(c){return c.toUpperCase();})+' · '+digital(h,m)+'<small>The minute hand has made '+(turn||m+' sixtieths of a turn')+' since '+NUMW[h]+' o’clock. The hour hand has moved '+(m===0?'nowhere yet: it points at the '+h:(m===30?'halfway':m===15?'a quarter of the way':m===45?'three-quarters of the way':'part of the way')+' from the '+h+' to the '+hr12(h+1))+'.'+(m===30?' This is why the hour hand is halfway between the hour markers at half past (a Stage 1 A reasoning point).':'')+(m>30?' The hour hand is closer to the '+hr12(h+1)+', but the hour that has just passed is '+h+'.':'')+'</small>';
  $("#ckRead").innerHTML=msg;
 }
 $$("#ckMode button").forEach(function(b){b.onclick=function(){mode=b.dataset.m;$$("#ckMode button").forEach(function(x){x.classList.toggle("on",x===b);});draw();};});
 $$("#ckQ button").forEach(function(b){b.onclick=function(){$("#ckM").value=b.dataset.q;draw();};});
 $("#ckM").oninput=draw; $("#ckH").onchange=draw;
 draw();
}

/* ---------- S2 read the clock ---------- */
function wireReadclock(){
 var H, Mn, opts, score=0, round=0, answered=false;
 function fmt(h,m){ return timeWords(h,m)+" ("+digital(h,m)+")"; }
 function newQ(){
  answered=false;
  do{ H=1+Math.floor(Math.random()*12); Mn=1+Math.floor(Math.random()*58); }while(Mn%15===0||Mn<5||Mn>55||Math.abs(Mn-30)<3);
  var c=[{h:H,m:Mn,k:"ok"}], near=Math.round(Mn/5)||12;
  c.push({h:H,m:near===12?12:near,k:"numeral"});
  if(Mn>30) c.push({h:H-1,m:Mn,k:"tohour"}); else c.push({h:H+1,m:Mn,k:"ahead"});
  c.push({h:near,m:(H*5)%60,k:"swap"});
  if(Mn>30) c.push({h:H+1,m:Mn,k:"ahead"});
  var seen={}, list=[]; c.forEach(function(o){var key=fmt(o.h,o.m); if(!seen[key]&&list.length<4){seen[key]=1; list.push(o);}});
  opts=list.sort(function(){return Math.random()-.5;});
  draw();
  $("#rdOpts").innerHTML=opts.map(function(o,j){return '<button class="rdopt" data-j="'+j+'">'+fmt(o.h,o.m)+'</button>';}).join("");
  $$("#rdOpts .rdopt").forEach(function(b){b.onclick=function(){answer(+b.dataset.j,b);};});
  $("#rdFb").className="fbline"; $("#rdNew").disabled=true;
 }
 function draw(){ $("#rdPic").innerHTML=clockSVG(H,Mn,{marks:$("#rdMarks").checked}); }
 function answer(j,b){
  if(answered) return; answered=true; round++;
  var o=opts[j], ok=o.k==="ok"; if(ok) score++;
  $$("#rdOpts .rdopt").forEach(function(x){x.disabled=true; if(opts[+x.dataset.j].k==="ok") x.classList.add("right");});
  if(!ok) b.classList.add("wrong");
  var why={
   ok:"The minute hand shows "+Mn+" minutes: count by fives to the nearest numeral, then by ones. The hour hand is "+(Mn<30?"just past the "+hr12(H):"getting close to the "+hr12(H+1)+", so the hour that has passed is "+hr12(H))+".",
   numeral:"This reads the numeral the minute hand points to as a number of minutes. For the minute hand, each numeral stands for 5 minutes, so the "+(Math.round(Mn/5)||12)+" means "+((Math.round(Mn/5)||12)*5)+" minutes.",
   tohour:"‘To’ times name the hour that is coming next. The hour hand is nearly at the "+hr12(H+1)+", so it is "+timeWords(H,Mn)+".",
   ahead:"The hour hand hasn’t reached the "+hr12(H+1)+" yet, so the hour that has passed is "+hr12(H)+".",
   swap:"This mixes up the hands. The shorter hour hand shows the hour; the longer minute hand shows the minutes."
  };
  $("#rdFb").className="fbline show "+(ok?"ok":"no");
  $("#rdFb").innerHTML=(ok?"<b>Yes.</b> ":"<b>Not this time.</b> "+why[o.k]+" ")+(ok?why.ok:"It is "+fmt(H,Mn)+".");
  $("#rdNew").disabled=false; $("#rdScore").textContent=score+" of "+round+" correct";
 }
 $("#rdNew").onclick=newQ; $("#rdMarks").onchange=draw;
 newQ();
}

/* ---------- S3 elapsed time ---------- */
function wireElapsed(){
 var f="12";
 function parse(v){ var p=(v||"").split(":"); if(p.length<2) return null; var h=+p[0], m=+p[1]; if(isNaN(h)||isNaN(m)) return null; return h*60+m; }
 function show(t){
  t=((t%1440)+1440)%1440; var h=Math.floor(t/60), m=t%60;
  if(f==="24") return (h<10?"0":"")+h+(m<10?"0":"")+m;
  if(t===720) return "12 noon"; if(t===0) return "12 midnight";
  return hr12(h)+":"+(m<10?"0":"")+m+(h<12?" am":" pm");
 }
 function dur(n){ var h=Math.floor(n/60), m=n%60, a=[]; if(h) a.push(h+" hour"+(h>1?"s":"")); if(m||!h) a.push(m+" minute"+(m===1?"":"s")); return a.join(" "); }
 function draw(){
  var s=parse($("#elS").value), e=parse($("#elE").value);
  if(s===null||e===null){ $("#elRead").innerHTML="<small>Enter a start and a finish time.</small>"; $("#elPic").innerHTML=""; return; }
  var next=e<=s, E=next?e+1440:e, pts=[s], jumps=[];
  var firstHour=Math.ceil(s/60)*60;
  if(firstHour>s && firstHour<E){ pts.push(firstHour); }
  var lastHour=Math.floor(E/60)*60;
  if(lastHour>pts[pts.length-1] && lastHour<=E) pts.push(lastHour);
  if(pts[pts.length-1]!==E) pts.push(E);
  for(var k=1;k<pts.length;k++) jumps.push(pts[k]-pts[k-1]);
  var n=pts.length, W=Math.max(320,n*150), x0=50, step=(W-100)/(n-1), sv='<svg viewBox="0 0 '+W+' 130" style="max-width:'+W+'px">';
  sv+='<line x1="'+(x0-20)+'" y1="90" x2="'+(W-30)+'" y2="90" stroke="var(--ink)" stroke-width="2"/>';
  pts.forEach(function(p,k){ var x=x0+k*step; sv+='<line x1="'+x+'" y1="82" x2="'+x+'" y2="98" stroke="var(--ink)" stroke-width="2"/><text x="'+x+'" y="118" text-anchor="middle" font-size="13" font-weight="700" fill="var(--ink)">'+show(p)+'</text>'; });
  jumps.forEach(function(j,k){ var a=x0+k*step, b=a+step, mid=(a+b)/2;
   sv+='<path d="M'+(a+4)+' 84 Q'+mid+' 30 '+(b-4)+' 84" fill="none" stroke="var(--s3)" stroke-width="2.5"/><path d="M'+(b-4)+' 84 l-9 -3 l4 -8z" fill="var(--s3)"/>';
   sv+='<text x="'+mid+'" y="46" text-anchor="middle" font-size="13" font-weight="700" fill="var(--s3)">+ '+dur(j).replace(" hours","h").replace(" hour","h").replace(" minutes"," min").replace(" minute"," min")+'</text>'; });
  $("#elPic").innerHTML=sv+'</svg>';
  var T=E-s, dec=T/60, decTxt=(T%15===0)?"or "+(+dec.toFixed(2))+" hours":"or about "+dec.toFixed(2)+" hours";
  var sh=Math.floor(s/60), sm=s%60, eh=Math.floor(e/60), em=e%60;
  var naive=(eh+em/100)-(sh+sm/100), note="";
  var dh=function(x){return f==="12"?hr12(x):x;};
  if(!next && sm>em && (f==="24"||(sh<12)===(eh<12))) note=' Treating the times as decimals gives '+(dh(eh)+"."+(em<10?"0":"")+em)+' − '+(dh(sh)+"."+(sm<10?"0":"")+sm)+' = '+(((dh(eh)*100+em)-(dh(sh)*100+sm))/100).toFixed(2)+', which is wrong because an hour has 60 minutes, not 100.';
  $("#elRead").innerHTML=(jumps.length>1?jumps.map(dur).join(" + ")+" = ":"")+dur(T)+'<small>'+show(s)+' to '+show(E)+(next?' (the next day)':'')+'. That is '+T+' minutes, '+decTxt+'.'+note+'</small>';
 }
 $$("#elFmt button").forEach(function(b){b.onclick=function(){f=b.dataset.f;$$("#elFmt button").forEach(function(x){x.classList.toggle("on",x===b);});draw();};});
 $("#elGo").onclick=draw; $("#elS").onchange=draw; $("#elE").onchange=draw;
 draw();
}

function wireTool(t){
 if(t==="balance") wireBalance();
 if(t==="clock") wireClock();
 if(t==="readclock") wireReadclock();
 if(t==="elapsed") wireElapsed();
}
