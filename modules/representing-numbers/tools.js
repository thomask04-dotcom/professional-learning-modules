function toolHTML(t){
 if(t==="cards") return '<div class="tool"><div class="tt">Quick check simulator</div><h4>Covered cards</h4><p class="note">Some cards from 1 to 20 are covered. How many? Try reasoning from the first card you can see, as a student with secure understanding would, rather than counting.</p><div class="ncards" id="ncards"></div><div class="ctrl"><label for="covAns">How many are covered?</label><input type="number" id="covAns" min="0" max="20"><button class="btn small" id="covCheck">Check</button><button class="btn ghost small" id="covNew">New cards</button></div><div class="fbline" id="covFb"></div></div>';
 if(t==="blocks") return '<div class="tool"><div class="tt">Model</div><h4>Rename a three-digit number</h4><p class="note">Trade a hundred for ten tens, or a ten for ten ones. The number stays the same, but its name changes.</p><div class="ctrl"><label for="blkNum">Number</label><select id="blkNum"><option>326</option><option>107</option><option>240</option><option>583</option></select><button class="btn ghost small" id="bH">1 hundred → 10 tens</button><button class="btn ghost small" id="bT">1 ten → 10 ones</button><button class="btn ghost small" id="bT2">10 tens → 1 hundred</button><button class="btn ghost small" id="bO2">10 ones → 1 ten</button></div><div class="blocks" id="blocks"></div><div class="readout" id="blkRead"></div></div>';
 if(t==="decimals") return '<div class="tool"><div class="tt">Diagnostic</div><h4>Which is larger?</h4><p class="note">Each pair is built around a decimal misconception from the NESA advice. Choose the larger number, then see both on a number line.</p><div class="score" id="decScore"></div><div class="pair" id="decPair" style="margin-top:10px"></div><div class="nl" id="decLine"></div><div class="fbline" id="decFb"></div><div class="ctrl"><button class="btn ghost small" id="decNext" disabled>Next pair →</button></div></div>';
 if(t==="slide") return '<div class="tool"><div class="tt">Model</div><h4>Number slide</h4><p class="note">The decimal point (red dot) stays fixed. Multiply or divide by 10 and watch the digits move. The ones column is shaded.</p><div class="ctrl"><label for="slNum">Start with</label><select id="slNum"><option value="32|-1">0.32</option><option value="125|-1">0.125</option><option value="234|2">234</option><option value="5|-1">0.5</option><option value="429|0">4.29</option></select><button class="btn small" id="slMul">× 10</button><button class="btn small" id="slDiv">÷ 10</button></div><div class="slide"><div class="frame" id="slFrame"></div></div><div class="readout" id="slRead" style="text-align:center"></div></div>';
 return "";
}

/* ES1 covered cards */
function wireCards(){
 var n=0;
 function deal(){
  n=2+Math.floor(Math.random()*12);
  var h=""; for(var i=1;i<=20;i++) h+='<div class="ncard'+(i<=n?" cov":"")+'" aria-label="'+(i<=n?"covered card":"card "+i)+'">'+i+'</div>';
  $("#ncards").innerHTML=h; $("#covAns").value=""; $("#covFb").className="fbline";
 }
 $("#covNew").onclick=deal;
 $("#covCheck").onclick=function(){
  var v=parseInt($("#covAns").value,10), fb=$("#covFb");
  if(isNaN(v)){fb.className="fbline show info";fb.textContent="Type a number first.";return;}
  if(v===n){fb.className="fbline show ok";fb.innerHTML="<b>Yes, "+n+".</b> The first card showing is "+(n+1)+", so 1 to "+n+" must be covered. A student who reasons like this, without counting from one, understands how whole numbers indicate quantity.";
   $$(".ncard.cov").forEach(function(c){c.classList.remove("cov");});}
  else {fb.className="fbline show no";fb.innerHTML="Not quite. Look at the first card you can see. What comes just before it?";}
 };
 deal();
}

/* S1 blocks */
function wireBlocks(){
 var h=3,t=2,o=6;
 function set(nv){h=Math.floor(nv/100);t=Math.floor(nv/10)%10;o=nv%10;draw();}
 function draw(){
  var b="";
  b+='<div class="bgrp">'; for(var i=0;i<h;i++) b+='<div class="hund"></div>'; b+='</div>';
  b+='<div class="bgrp">'; for(i=0;i<t;i++) b+='<div class="ten"></div>'; b+='</div>';
  b+='<div class="bgrp" style="max-width:260px">'; for(i=0;i<o;i++) b+='<div class="one"></div>'; b+='</div>';
  $("#blocks").innerHTML=b;
  var parts=[]; if(h) parts.push(h+" hundred"+(h===1?"":"s")); if(t) parts.push(t+" ten"+(t===1?"":"s")); if(o||!parts.length) parts.push(o+" one"+(o===1?"":"s"));
  var name = parts.length>1 ? parts.slice(0,-1).join(", ")+" and "+parts[parts.length-1] : parts[0];
  $("#blkRead").innerHTML=(h*100+t*10+o)+" is "+name+'<small>'+(h*100+t*10+o)+" = "+[h?h+" × 100":"",t?t+" × 10":"",o?o+" × 1":""].filter(Boolean).join(" + ")+'</small>';
  $("#bH").disabled=h<1; $("#bT").disabled=t<1||o>60; $("#bT2").disabled=t<10; $("#bO2").disabled=o<10;
 }
 $("#blkNum").onchange=function(){set(+this.value);};
 $("#bH").onclick=function(){h--;t+=10;draw();};
 $("#bT").onclick=function(){t--;o+=10;draw();};
 $("#bT2").onclick=function(){t-=10;h++;draw();};
 $("#bO2").onclick=function(){o-=10;t++;draw();};
 draw();
}

/* S2 decimals */
var PAIRS=[
 {a:"0.75",b:"0.8",m:"<b>Longer is larger.</b> Students who think longer decimals are larger choose 0.75. Look at the tenths: 7 tenths is less than 8 tenths."},
 {a:"0.4",b:"0.45",m:"<b>Shorter is larger.</b> This often replaces ‘longer is larger’. 0.45 is 4 tenths and 5 hundredths, a little more than 0.4."},
 {a:"0.3",b:"0.4",m:"<b>Reciprocal or negative thinking.</b> Some students pick 0.3 by analogy with one third and one quarter, or with −3 and −4."},
 {a:"0.5",b:"0.25",m:"<b>Benchmarks.</b> 0.5 is a half and 0.25 is a quarter. Students using whole number thinking may pick 0.25 because 25 is more than 5."},
 {a:"0.7",b:"0.07",m:"<b>Zero in the tenths place.</b> 0.07 is 7 hundredths, ten times smaller than 7 tenths."},
 {a:"0.6",b:"0.60",m:"<b>Trailing zeros.</b> They’re equal: 0.60 is 6 tenths and 0 hundredths, the same as 6 tenths. Students who think a trailing zero makes a decimal bigger choose 0.60."}
];
function wireDecimals(){
 var i=0, score=0, first=true;
 function show(){
  var p=PAIRS[i]; first=true;
  $("#decScore").textContent="Pair "+(i+1)+" of "+PAIRS.length+" · first-try score "+score;
  var eq = +p.a===+p.b;
  $("#decPair").innerHTML='<button class="btn" data-v="a">'+p.a+'</button><button class="btn" data-v="b">'+p.b+'</button>'+(eq?'<button class="btn" data-v="eq" style="background:var(--navy);font-size:16px">They’re equal</button>':'');
  $("#decLine").innerHTML=""; $("#decFb").className="fbline"; $("#decNext").disabled=true;
  $$("#decPair button").forEach(function(b){b.onclick=function(){
   var v=b.dataset.v, A=+p.a, B=+p.b, right = A===B ? "eq" : (A>B?"a":"b");
   if(v===right){ if(first) score++; $("#decFb").className="fbline show ok"; $("#decFb").innerHTML="<b>Correct.</b> "+p.m; }
   else { first=false; $("#decFb").className="fbline show no"; $("#decFb").innerHTML="Not this time. "+p.m; }
   $$("#decPair button").forEach(function(x){x.disabled=true;});
   line(A,B,p.a,p.b); $("#decNext").disabled=false;
   $("#decScore").textContent="Pair "+(i+1)+" of "+PAIRS.length+" · first-try score "+score;
  };});
 }
 function line(A,B,la,lb){
  var x=function(v){return 30+v*640;}, s='<svg viewBox="0 0 700 110" role="img" aria-label="Number line from 0 to 1 showing '+la+' and '+lb+'">';
  s+='<line x1="30" y1="60" x2="670" y2="60" stroke="#1b2333" stroke-width="2"/>';
  for(var k=0;k<=100;k++){var big=k%10===0; s+='<line x1="'+x(k/100)+'" y1="'+(big?50:56)+'" x2="'+x(k/100)+'" y2="'+(big?70:64)+'" stroke="'+(big?"#1b2333":"#b8bfcc")+'" stroke-width="'+(big?1.5:1)+'"/>'; if(big) s+='<text x="'+x(k/100)+'" y="90" text-anchor="middle" font-size="13" fill="#4a5468">'+(k===0?"0":k===100?"1":"0."+(k/10))+'</text>';}
  var same=A===B;
  s+='<circle cx="'+x(A)+'" cy="60" r="7" fill="#c8553d"/><text x="'+x(A)+'" y="'+(same?30:34)+'" text-anchor="middle" font-size="15" font-weight="700" fill="#c8553d">'+la+(same?" = "+lb:"")+'</text>';
  if(!same) s+='<circle cx="'+x(B)+'" cy="60" r="7" fill="#23897d"/><text x="'+x(B)+'" y="34" text-anchor="middle" font-size="15" font-weight="700" fill="#23897d">'+lb+'</text>';
  $("#decLine").innerHTML=s+'</svg>';
 }
 $("#decNext").onclick=function(){i=(i+1)%PAIRS.length; if(i===0) score=0; show();};
 show();
}

/* S3 number slide */
function wireSlide(){
 var heads=["thousands","hundreds","tens","ones","tenths","hundredths","thousandths"];
 var D="32", p=-1, W=72, prev="", op="", cur="";
 var fr=$("#slFrame");
 fr.innerHTML=heads.map(function(h){return '<div class="hd">'+h+'</div>';}).join("")+'<div class="cells" id="slCells">'+heads.map(function(h,i){return '<div class="cell'+(i===3?" ones":"")+'" data-c="'+i+'"></div>';}).join("")+'<div class="strip" id="slStrip"></div><div class="pt"></div></div>';
 function colOf(e){return 3-e;}
 function render(anim){
  var strip=$("#slStrip");
  if(!anim) strip.style.transition="none";
  strip.innerHTML=D.split("").map(function(d){return '<span>'+d+'</span>';}).join("");
  strip.style.transform="translateX("+(colOf(p)*W)+"px)";
  if(!anim){ void strip.offsetWidth; strip.style.transition=""; }
  var first=colOf(p), last=colOf(p-D.length+1);
  $$(".cell",fr).forEach(function(c){var i=+c.dataset.c; var needZero = (i>last && i<=3) || (i<first && i>=3); c.textContent=needZero?"0":""; c.style.color=needZero?"#9aa2b1":"";});
  var lastE=p-D.length+1, s="";
  var hiE=Math.max(p,0), loE=Math.min(lastE,0);
  for(var e=hiE;e>=loE;e--){ var idx=p-e; var dg=(idx>=0&&idx<D.length)?D.charAt(idx):"0"; if(e===-1) s+="."; s+=dg; }
  if(loE===0) s=s.replace(/\.$/,"");
  $("#slRead").innerHTML=(op?prev+" "+op+" = ":"")+s+'<small>'+(op?"The digits moved one place; the decimal point stayed where it was.":"Choose × 10 or ÷ 10.")+'</small>';
  cur=s;
  $("#slMul").disabled = p>=3; $("#slDiv").disabled = (p-D.length+1)<=-3;
 }
 $("#slNum").onchange=function(){var v=this.value.split("|"); D=v[0]; p=+v[1]; op=""; render(false);};
 $("#slMul").onclick=function(){prev=cur;op="× 10";p++;render(true);};
 $("#slDiv").onclick=function(){prev=cur;op="÷ 10";p--;render(true);};
 render(false);
}

function wireTool(t){
 if(t==="cards") wireCards();
 if(t==="blocks") wireBlocks();
 if(t==="decimals") wireDecimals();
 if(t==="slide") wireSlide();
}
