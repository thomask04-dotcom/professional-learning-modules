var FNAME={2:["half","halves"],3:["third","thirds"],4:["quarter","quarters"],5:["fifth","fifths"],6:["sixth","sixths"],8:["eighth","eighths"],10:["tenth","tenths"]};
var NUMW=["zero","one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen","twenty"];
function fword(k,d){ return NUMW[k]+"-"+(k===1?FNAME[d][0]:FNAME[d][1]); }
function frac(k,d){ return '<span class="fr"><sup>'+k+'</sup>⁄<sub>'+d+'</sub></span>'; }

function toolHTML(t){
 if(t==="half") return '<div class="tool"><div class="tt">Model</div><h4>Cut the ribbon in half</h4><p class="note">Drag the scissors to where you would cut. Then fold to check whether the two pieces are equal.</p><div class="ribwrap"><div class="rib" id="hfRib"><div class="ribA" id="hfA"></div><div class="ribB" id="hfB"></div><div class="cut" id="hfCut">✂</div></div><input type="range" id="hfPos" min="5" max="95" value="38" aria-label="Where to cut"></div><div class="ctrl"><button class="btn small" id="hfFold">Fold to check</button><button class="btn ghost small" id="hfPoint">Show the halfway point</button></div><div id="hfFoldPic"></div><div class="readout" id="hfRead"></div></div>';
 if(t==="halving") return '<div class="tool"><div class="tt">Model</div><h4>Repeated halving</h4><p class="note">Halve the whole strip again and again, or keep halving just one piece. Compare the results, as the syllabus suggests.</p><div class="moves" id="hvMode" style="margin-top:0"><button data-m="all" class="on">Halve every piece</button><button data-m="one">Halve one piece only</button></div><div class="ctrl"><button class="btn small" id="hvGo">Halve</button><button class="btn ghost small" id="hvReset">Start again</button><label for="hvN">Collection</label><select id="hvN"><option>8</option><option selected>16</option><option>24</option></select></div><div class="hstrip" id="hvStrip"></div><div class="hcoll" id="hvColl"></div><div class="readout" id="hvRead"></div></div>';
 if(t==="strips") return '<div class="tool"><div class="tt">Model</div><h4>Fraction strips on a number line</h4><p class="note">Choose a fraction family and how many parts. The strip sits on a number line like a ruler. Change where the line ends to see that ¼ is always a quarter of the way from 0 to 1.</p><div class="ctrl"><label for="fsD">Family</label><select id="fsD"><option value="2">halves</option><option value="3">thirds</option><option value="4" selected>quarters</option><option value="5">fifths</option><option value="6">sixths</option><option value="8">eighths</option><option value="10">tenths</option></select><label for="fsK">Parts</label><input type="range" id="fsK" min="0" max="8" value="3" style="width:160px"><label for="fsE">Line ends at</label><select id="fsE"><option value="1">1</option><option value="2" selected>2</option></select><label for="fsC">Compare with</label><select id="fsC"><option value="">nothing</option><option value="1/2">one-half</option><option value="1/3">one-third</option><option value="3/8">three-eighths</option><option value="2/5">two-fifths</option><option value="4/8">four-eighths</option></select></div><div id="fsPic" class="fspic"></div><div class="readout" id="fsRead"></div></div>';
 if(t==="tape") return '<div class="tool"><div class="tt">Model</div><h4>Tape diagram</h4><p class="note">Find a fraction of a quantity, or work backwards from a part to the whole.</p><div class="moves" id="tpMode" style="margin-top:0"><button data-m="of" class="on">Fraction of a quantity</button><button data-m="whole">Find the whole</button></div><div class="ctrl"><input type="number" id="tpA" value="2" min="1" max="20" style="width:64px"><span>/</span><select id="tpB"><option>2</option><option>3</option><option>4</option><option selected>5</option><option>6</option><option>8</option><option>10</option></select><span id="tpLab">of</span><input type="number" id="tpN" value="30" min="1" max="1000" style="width:90px"><button class="btn small" id="tpGo">Show</button><span class="note">Try ⅖ of 30, ¾ of 24, 4/3 of 60, or “⅗ is 18”</span></div><div id="tpPic" class="tppic"></div><div class="readout" id="tpRead"></div></div>';
 return "";
}

/* ES1 half a length */
function wireHalf(){
 var pos=38, showPt=false;
 function draw(){
  $("#hfA").style.width=pos+"%"; $("#hfB").style.width=(100-pos)+"%"; $("#hfCut").style.left=pos+"%";
  var d=pos-50, where=Math.abs(d)<=3?"about halfway":(d<0?"less than halfway":"more than halfway");
  $("#hfRead").innerHTML='The cut is '+where+'<small>'+(Math.abs(d)<=3?'The two pieces look the same length. Fold to check that they match exactly.':'One piece is longer than the other, so they are not halves.')+'</small>';
  var r=$("#hfRib"), p=$("#hfPt"); if(p) p.remove();
  if(showPt){ var el=document.createElement("div"); el.id="hfPt"; el.className="hpt"; el.innerHTML='<span>halfway point</span>'; r.appendChild(el); }
  $("#hfFoldPic").innerHTML="";
 }
 $("#hfPos").oninput=function(){pos=+this.value;draw();};
 $("#hfPoint").onclick=function(){showPt=!showPt;this.textContent=showPt?"Hide the halfway point":"Show the halfway point";draw();};
 $("#hfFold").onclick=function(){
  var a=pos, b=100-pos, eq=Math.abs(a-b)<=6;
  $("#hfFoldPic").innerHTML='<div class="foldcmp"><div class="fp" style="width:'+a+'%;background:var(--es1)"></div><div class="fp" style="width:'+b+'%;background:var(--s2)"></div></div><p class="note" style="margin:6px 0 0">'+(eq?'The pieces match: two equal lengths, so each is half the ribbon.':'Laid side by side, the pieces don’t match. Move the scissors and try again.')+'</p>';
 };
 draw();
}

/* S1 repeated halving */
function wireHalving(){
 var mode="all", level=0, N=16;
 function pieces(){ if(mode==="all"){var n=Math.pow(2,level),p=[];for(var i=0;i<n;i++)p.push(n);return p;} var q=[];for(var j=1;j<=level;j++) q.push(Math.pow(2,j)); if(level>0) q.push(Math.pow(2,level)); else q=[1]; return q; }
 function draw(){
  var P=pieces(), names={1:"one whole",2:"one-half",4:"one-quarter",8:"one-eighth"};
  $("#hvStrip").innerHTML=P.map(function(d,i){return '<div class="hp" style="width:'+(100/d)+'%;background:'+(i%2?"var(--s1-soft)":"#f6dfae")+'"><span>'+(d===1?"whole":names[d])+'</span></div>';}).join("");
  if(mode==="all"){
   var n=Math.pow(2,level), per=N/n, h="";
   for(var g=0;g<n;g++){ var dots=""; for(var k=0;k<per;k++) dots+='<span class="dt" style="background:var(--s1)"></span>'; h+='<div class="hg">'+dots+'</div>'; }
   $("#hvColl").innerHTML=h;
   var nm={1:"",2:"halves",4:"quarters",8:"eighths"}[n];
   $("#hvRead").innerHTML=(n===1?'One whole strip':'The strip is in '+n+' equal parts: '+nm)+'<small>'+(n===1?'Halve it to make two equal parts.':'Each part is '+names[n]+'. '+(n>1?'In the collection of '+N+', '+names[n]+' is '+per+'.':'')+(n===8?' Halving three times makes eighths.':''))+'</small>';
  } else {
   $("#hvColl").innerHTML="";
   var smallest=Math.pow(2,level);
   $("#hvRead").innerHTML=(level===0?'One whole strip':'Pieces: '+P.map(function(d){return names[d];}).join(", "))+'<small>'+(level===0?'Halve one piece at a time.':'Halving one-half of a half makes a quarter, and halving again makes an eighth. The pieces are different sizes, so the strip is not in quarters or eighths, even though one piece is '+names[smallest]+'.')+'</small>';
  }
  $("#hvGo").disabled=level>=3;
 }
 $$("#hvMode button").forEach(function(b){b.onclick=function(){mode=b.dataset.m;level=0;$$("#hvMode button").forEach(function(x){x.classList.toggle("on",x===b);});draw();};});
 $("#hvGo").onclick=function(){if(level<3){level++;draw();}};
 $("#hvReset").onclick=function(){level=0;draw();};
 $("#hvN").onchange=function(){N=+this.value;draw();};
 draw();
}

/* S2 fraction strips on a number line */
function wireStrips(){
 function draw(){
  var d=+$("#fsD").value, E=+$("#fsE").value, K=$("#fsK"); K.max=d*E; var k=Math.min(+K.value,d*E); K.value=k;
  var L=30, R=670, X=function(v){return L+v/E*(R-L);}, s='<svg viewBox="0 0 700 '+($("#fsC").value?250:190)+'" role="img" aria-label="Fraction strip on a number line">';
  // strip(s)
  for(var w=0;w<E;w++){ for(var i=0;i<d;i++){ var idx=w*d+i, x1=X(w+i/d), x2=X(w+(i+1)/d); s+='<rect x="'+x1+'" y="30" width="'+(x2-x1)+'" height="44" fill="'+(idx<k?"#23897d":"#fff")+'" fill-opacity="'+(idx<k?0.85:1)+'" stroke="#1b2333" stroke-width="1.5"/>'; } }
  // number line
  s+='<line x1="'+(L-10)+'" y1="110" x2="'+(R+10)+'" y2="110" stroke="#1b2333" stroke-width="2"/>';
  for(var j=0;j<=d*E;j++){ var v=j/d, x=X(v), whole=j%d===0; s+='<line x1="'+x+'" y1="'+(whole?98:103)+'" x2="'+x+'" y2="'+(whole?122:117)+'" stroke="#1b2333" stroke-width="'+(whole?2.5:1.5)+'"/>';
   if(whole) s+='<text x="'+x+'" y="148" text-anchor="middle" font-size="18" font-weight="800" fill="#1b2333">'+(j/d)+'</text>';
   else if(d<=6||j===k) s+='<text x="'+x+'" y="140" text-anchor="middle" font-size="13" fill="#4a5468">'+j+'/'+d+'</text>'; }
  if(k>0){ s+='<circle cx="'+X(k/d)+'" cy="110" r="7" fill="#c8553d"/><text x="'+X(k/d)+'" y="20" text-anchor="middle" font-size="15" font-weight="800" fill="#c8553d">'+k+'/'+d+'</text>'; }
  var c=$("#fsC").value;
  if(c){ var p=c.split("/"), ck=+p[0], cd=+p[1];
   for(i=0;i<cd;i++){ x1=X(i/cd); x2=X((i+1)/cd); s+='<rect x="'+x1+'" y="170" width="'+(x2-x1)+'" height="40" fill="'+(i<ck?"#c88a12":"#fff")+'" fill-opacity="'+(i<ck?0.8:1)+'" stroke="#1b2333" stroke-width="1.5"/>'; }
   s+='<text x="'+X(ck/cd)+'" y="232" text-anchor="middle" font-size="14" font-weight="700" fill="#a06b00">'+ck+'/'+cd+'</text>';
   s+='<line x1="'+X(ck/cd)+'" y1="168" x2="'+X(ck/cd)+'" y2="110" stroke="#c88a12" stroke-dasharray="4 4" stroke-width="1.5"/>'; }
  $("#fsPic").innerHTML=s+'</svg>';
  var w1=Math.floor(k/d), r=k%d, txt=fword(k,d);
  var extra = k===0?'Choose how many parts.' : (k===d?'That is one whole: '+d+' '+FNAME[d][1]+' make 1.' : (k>d?'That is '+(r===0?NUMW[w1]+' wholes':NUMW[w1]+' and '+fword(r,d))+'.' : 'The complement to make one whole is '+fword(d-k,d)+'.'));
  var cmp="";
  if(c){ var cv=ck/cd, kv=k/d; cmp=' Compared with '+fword(ck,cd)+': '+(Math.abs(cv-kv)<1e-9?'they are equivalent (the same position).':(kv>cv?fword(k,d)+' is larger.':fword(ck,cd)+' is larger.')); }
  $("#fsRead").innerHTML=txt+'<small>'+extra+cmp+(E===2?' The line runs to 2, so 1 is halfway along it.':'')+'</small>';
 }
 ["#fsD","#fsE","#fsC"].forEach(function(id){$(id).onchange=draw;}); $("#fsK").oninput=draw;
 draw();
}

/* S3 tape diagram */
function wireTape(){
 var mode="of";
 function draw(){
  var a=Math.round(+$("#tpA").value), b=+$("#tpB").value, N=Math.round(+$("#tpN").value);
  $("#tpLab").textContent=mode==="of"?"of":"is";
  if(!(a>=1&&N>=1)){ $("#tpRead").innerHTML='<small>Enter whole numbers.</small>'; $("#tpPic").innerHTML=""; return; }
  var unit, whole;
  if(mode==="of"){ if(N%b){ $("#tpRead").innerHTML='<small>Choose a quantity that is a multiple of '+b+', so each '+FNAME[b][0]+' is a whole number.</small>'; $("#tpPic").innerHTML=""; return; } unit=N/b; whole=N; }
  else { if(N%a){ $("#tpRead").innerHTML='<small>Choose a part that can be split into '+a+' equal pieces.</small>'; $("#tpPic").innerHTML=""; return; } unit=N/a; whole=unit*b; }
  var cells=Math.max(a,b), h='<div class="tape" style="grid-template-columns:repeat('+cells+',1fr)">';
  for(var i=0;i<cells;i++){ var inW=i<b, sh=i<a; h+='<div class="tc'+(sh?" sh":"")+(inW?"":" over")+'">'+unit+'</div>'; }
  h+='</div><div class="tapebrace" style="width:'+(100*b/cells)+'%"><span>whole = '+whole+'</span></div>';
  h+='<div class="tapeline" style="grid-template-columns:repeat('+cells+',1fr)">';
  for(i=1;i<=cells;i++) h+='<span>'+i+'/'+b+'</span>';
  $("#tpPic").innerHTML=h+'</div>';
  if(mode==="of") $("#tpRead").innerHTML=a+'/'+b+' of '+N+' = '+(unit*a)+'<small>Split '+N+' into '+b+' equal parts: each '+FNAME[b][0]+' is '+unit+'. '+(function(t){return t.charAt(0).toUpperCase()+t.slice(1);})(a<=20?fword(a,b):a+' '+FNAME[b][1])+' is '+a+' × '+unit+' = '+(unit*a)+'.'+(a>b?' More than one whole, so the answer is more than '+N+'.':'')+'</small>';
  else $("#tpRead").innerHTML='The whole is '+whole+'<small>'+a+'/'+b+' is '+N+', so split '+N+' into '+a+' equal parts: one '+FNAME[b][0]+' is '+unit+'. The whole is '+b+' '+FNAME[b][1]+': '+b+' × '+unit+' = '+whole+'.</small>';
 }
 $$("#tpMode button").forEach(function(btn){btn.onclick=function(){mode=btn.dataset.m;$$("#tpMode button").forEach(function(x){x.classList.toggle("on",x===btn);}); if(mode==="whole"){$("#tpA").value=3;$("#tpB").value="5";$("#tpN").value=18;} else {$("#tpA").value=2;$("#tpB").value="5";$("#tpN").value=30;} draw();};});
 $("#tpGo").onclick=draw; $("#tpB").onchange=draw;
 $("#tpA").onkeydown=$("#tpN").onkeydown=function(e){if(e.key==="Enter") draw();};
 draw();
}

function wireTool(t){
 if(t==="half") wireHalf();
 if(t==="halving") wireHalving();
 if(t==="strips") wireStrips();
 if(t==="tape") wireTape();
}
