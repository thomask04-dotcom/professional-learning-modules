function toolHTML(t){
 if(t==="share") return '<div class="tool"><div class="tt">Model</div><h4>Fair share</h4><p class="note">Deal the counters one at a time, like a student sharing. Then put them back together to show the total hasn’t changed.</p><div class="ctrl"><label for="shT">Counters</label><select id="shT"><option>6</option><option>8</option><option>10</option><option selected>12</option><option>13</option><option>15</option><option>20</option></select><label for="shP">People</label><select id="shP"><option>2</option><option selected>3</option><option>4</option><option>5</option></select><button class="btn small" id="shOne">Deal one</button><button class="btn small" id="shAll">Deal the rest</button><button class="btn ghost small" id="shBack">Put back together</button></div><div class="pile" id="shPile"></div><div class="plates" id="shPlates"></div><div class="fbline show info" id="shFb"></div></div>';
 if(t==="groups") return '<div class="tool"><div class="tt">Model</div><h4>From equal groups to arrays</h4><p class="note">Make equal groups, then turn them into an array and rotate it. The total stays the same.</p><div class="ctrl"><label for="grG">Groups</label><select id="grG"></select><label for="grN">In each group</label><select id="grN"></select></div><div class="moves" id="grView" style="margin-top:0"><button data-v="g" class="on">Equal groups</button><button data-v="a">Array</button><button data-v="r">Rotate the array</button></div><div id="grPic" class="grpic"></div><div class="readout" id="grRead"></div></div>';
 if(t==="split") return '<div class="tool"><div class="tt">Model</div><h4>Split the array</h4><p class="note">Forgotten a fact? Split the array into two facts you know. This is the distributive property.</p><div class="ctrl"><label for="spF">Fact</label><select id="spF"><option value="7x6">7 × 6</option><option value="6x8">6 × 8</option><option value="7x8">7 × 8</option><option value="4x9">4 × 9</option><option value="8x7">8 × 7</option><option value="3x7">3 × 7</option></select><button class="btn ghost small" id="spL">◀ Move split</button><button class="btn ghost small" id="spR">Move split ▶</button><button class="btn ghost small" id="sp5">Split at 5</button><button class="btn ghost small" id="spH">Split in half</button><button class="btn ghost small" id="spC">Cover the middle</button></div><div id="spPic" class="grpic"></div><div class="readout" id="spRead"></div></div>';
 if(t==="area") return '<div class="tool"><div class="tt">Model</div><h4>Area model</h4><p class="note">Partition each number by place value. Each part of the rectangle is a partial product, and their sum is the answer. Estimate first.</p><div class="ctrl"><label for="arA">Multiply</label><input type="number" id="arA" value="684" min="2" max="9999" style="width:100px"><label for="arB">by</label><input type="number" id="arB" value="7" min="2" max="99" style="width:80px"><button class="btn small" id="arGo">Show</button><span class="note">Try 8 × 27, 684 × 5, 23 × 56</span></div><div id="arEst" class="fbline show info"></div><div id="arPic" class="areagrid"></div><div class="readout" id="arRead"></div></div>';
 return "";
}

/* ES1 fair share */
function wireShare(){
 var T=12,P=3,dealt=[],plates=[];
 function reset(){ T=+$("#shT").value; P=+$("#shP").value; dealt=0; plates=[]; for(var i=0;i<P;i++) plates.push(0); draw("Choose how many counters and people, then deal one at a time."); }
 function draw(msg){
  var left=T-dealt, h="";
  for(var i=0;i<left;i++) h+='<span class="ctr"></span>';
  $("#shPile").innerHTML='<span class="note" style="margin-right:8px">Pile: '+left+'</span>'+h;
  $("#shPlates").innerHTML=plates.map(function(c,i){var d="";for(var j=0;j<c;j++) d+='<span class="ctr"></span>';return '<div class="plate"><div class="pl">Person '+(i+1)+'</div><div class="pd">'+d+'</div><div class="pn">'+c+'</div></div>';}).join("");
  $("#shFb").innerHTML=msg;
  $("#shOne").disabled=left===0; $("#shAll").disabled=left===0;
 }
 function status(){
  var left=T-dealt;
  var mn=Math.min.apply(null,plates), mx=Math.max.apply(null,plates);
  if(left===0){
   if(mn===mx) return '<b>Fair share!</b> '+T+' shared between '+P+' is '+mn+' each. Now put them back together.';
   return '<b>Is it fair?</b> The groups have '+plates.join(", ")+'. Not everyone has the same number. Put them back and try sharing so everyone gets the same.';
  }
  if(left<P && plates.every(function(c){return c===mn;})) return '<b>'+left+' left over.</b> Everyone has '+mn+'. There aren’t enough for everyone to get one more. What could we do with the '+(left===1?"one":left)+' left over?';
  return 'Dealt '+dealt+'. Groups so far: '+plates.join(", ")+'.';
 }
 function dealOne(){ if(dealt>=T) return; plates[dealt%P]++; dealt++; }
 $("#shT").onchange=reset; $("#shP").onchange=reset;
 $("#shOne").onclick=function(){dealOne();draw(status());};
 $("#shAll").onclick=function(){
  while(dealt<T){ var left=T-dealt; var mn=Math.min.apply(null,plates); if(left<P && dealt%P===0 && plates.every(function(c){return c===mn;})) break; dealOne(); }
  draw(status());
 };
 $("#shBack").onclick=function(){ for(var i=0;i<P;i++) plates[i]=0; dealt=0; draw('<b>Back together: still '+T+'.</b> Sharing and recombining undo each other, so the total hasn’t changed.'); };
 reset();
}

/* S1 groups to arrays */
function wireGroups(){
 var g=3,n=4,v="g";
 $("#grG").innerHTML=[1,2,3,4,5,6].map(function(x){return '<option'+(x===3?" selected":"")+'>'+x+'</option>';}).join("");
 $("#grN").innerHTML=[1,2,3,4,5,6,7,8].map(function(x){return '<option'+(x===4?" selected":"")+'>'+x+'</option>';}).join("");
 function dot(c){return '<span class="dt" style="background:'+c+'"></span>';}
 function draw(){
  var tot=g*n, h="", col="var(--s1)";
  if(v==="g"){
   for(var i=0;i<g;i++){var d="";for(var j=0;j<n;j++) d+=dot(col); h+='<div class="grp">'+d+'<span class="gl">'+n+'</span></div>';}
   $("#grPic").innerHTML='<div class="grps">'+h+'</div>';
   var adds=[];for(i=0;i<g;i++) adds.push(n);
   var sk=[];for(i=1;i<=g;i++) sk.push(n*i);
   $("#grRead").innerHTML=g+' group'+(g>1?"s":"")+' of '+n+' is '+tot+'<small>'+(g>1?adds.join(" + ")+" = "+tot+" · ":"")+'Skip count: '+sk.join(", ")+'</small>';
  } else {
   var R=v==="a"?g:n, C=v==="a"?n:g;
   h='<div class="arr" style="grid-template-columns:repeat('+C+',22px)">';
   for(var r=0;r<R;r++) for(var c=0;c<C;c++) h+=dot(v==="a"?col:"var(--s2)");
   h+='</div>';
   $("#grPic").innerHTML='<div style="display:flex;gap:18px;align-items:center;flex-wrap:wrap">'+h+'<div class="note">'+R+' row'+(R>1?"s":"")+' of '+C+'<br>'+C+' column'+(C>1?"s":"")+' of '+R+'</div></div>';
   $("#grRead").innerHTML=R+' rows of '+C+' is '+tot+'<small>'+(v==="r"?'Rotated: '+g+' rows of '+n+' and '+n+' rows of '+g+' have the same total. This is the commutative property.':'Each row has the same number, and each column has the same number. Two repeated addition sentences: '+Array(R).fill(C).join(" + ")+' and '+Array(C).fill(R).join(" + ")+'.')+'</small>';
  }
 }
 $("#grG").onchange=function(){g=+this.value;draw();};
 $("#grN").onchange=function(){n=+this.value;draw();};
 $$("#grView button").forEach(function(b){b.onclick=function(){v=b.dataset.v;$$("#grView button").forEach(function(x){x.classList.toggle("on",x===b);});draw();};});
 draw();
}

/* S2 split the array */
function wireSplit(){
 var a=7,b=6,s=5,cover=false;
 function draw(){
  var W=Math.min(34, Math.floor(560/Math.max(b,1))), r=W*0.32, pad=14, gap=s>0&&s<b?16:0;
  var w=pad*2+b*W+gap, h=pad*2+a*W, svg='<svg viewBox="0 0 '+w+' '+h+'" style="max-width:'+w+'px;width:100%" role="img" aria-label="Array of '+a+' rows of '+b+' split after column '+s+'">';
  for(var i=0;i<a;i++) for(var j=0;j<b;j++){
   var x=pad+j*W+W/2+(j>=s?gap:0), y=pad+i*W+W/2, left=j<s;
   svg+='<circle cx="'+x+'" cy="'+y+'" r="'+r+'" fill="'+(left?"#23897d":"#c8553d")+'"/>';
  }
  if(s>0&&s<b) svg+='<line x1="'+(pad+s*W+gap/2)+'" y1="4" x2="'+(pad+s*W+gap/2)+'" y2="'+(h-4)+'" stroke="#1b2333" stroke-width="2" stroke-dasharray="5 4"/>';
  if(cover) svg+='<rect x="'+(pad+W-2)+'" y="'+(pad+W-2)+'" width="'+(b*W+gap-W+2)+'" height="'+(a*W-W+2)+'" rx="8" fill="#1f2a44"/><text x="'+(pad+W+(b*W+gap-W)/2)+'" y="'+(pad+W+(a*W-W)/2+6)+'" text-anchor="middle" font-size="16" font-weight="700" fill="#fff">How many?</text>';
  $("#spPic").innerHTML=svg+'</svg>';
  var p1=a*s, p2=a*(b-s);
  var eq = (s===0||s===b) ? a+' × '+b+' = '+(a*b) : a+' × '+b+' = '+a+' × '+s+' + '+a+' × '+(b-s)+' = '+p1+' + '+p2+' = '+(a*b);
  var note = s*2===b ? 'Split in half: '+a+' × '+b+' is double '+a+' × '+s+'.' : (s===5 ? 'Split at 5: start with the × 5 fact, then add the rest.' : 'Both parts are facts you might already know.');
  $("#spRead").innerHTML=(cover?'Covered: '+a+' rows, '+b+' in each row':eq)+'<small>'+(cover?'Use the first row and first column to work out the total without counting every dot.':note)+'</small>';
  $("#spC").textContent=cover?"Uncover":"Cover the middle";
  $("#spL").disabled=s<=1; $("#spR").disabled=s>=b-1; $("#sp5").disabled=b<=5; $("#spH").disabled=b%2!==0;
 }
 $("#spF").onchange=function(){var p=this.value.split("x");a=+p[0];b=+p[1];s=b>5?5:Math.floor(b/2);cover=false;draw();};
 $("#spL").onclick=function(){if(s>1){s--;draw();}};
 $("#spR").onclick=function(){if(s<b-1){s++;draw();}};
 $("#sp5").onclick=function(){s=5;draw();};
 $("#spH").onclick=function(){s=b/2;draw();};
 $("#spC").onclick=function(){cover=!cover;draw();};
 draw();
}

/* S3 area model */
function wireArea(){
 function parts(n){var s=String(n),out=[];for(var i=0;i<s.length;i++){var d=+s.charAt(i);if(d) out.push(d*Math.pow(10,s.length-1-i));}return out;}
 function fmt(n){return n>=10000?n.toLocaleString("en-AU").replace(/,/g," "):String(n);}
 function lead(n){var p=Math.pow(10,String(n).length-1);return Math.round(n/p)*p;}
 function go(){
  var A=Math.round(+$("#arA").value), B=Math.round(+$("#arB").value);
  if(!(A>=2&&A<=9999&&B>=2&&B<=99)){ $("#arEst").innerHTML="Choose a number from 2 to 9999 and a multiplier from 2 to 99."; $("#arPic").innerHTML=""; $("#arRead").innerHTML=""; return; }
  var pa=parts(A), pb=parts(B);
  var eA=lead(A), eB=B<10?B:lead(B);
  $("#arEst").innerHTML='<b>Estimate first:</b> '+fmt(A)+' × '+B+' is about '+fmt(eA)+' × '+eB+' = '+fmt(eA*eB)+'.';
  var cols=pa.length, h='<div class="ag" style="grid-template-columns:70px repeat('+cols+',minmax(70px,1fr))"><div></div>';
  pa.forEach(function(p){h+='<div class="ah">'+fmt(p)+'</div>';});
  var prods=[];
  pb.forEach(function(q,ri){
   h+='<div class="ah side">'+fmt(q)+'</div>';
   pa.forEach(function(p,ci){var v=p*q;prods.push(v);h+='<div class="ac" style="background:'+(ri%2?"var(--s3-soft)":"#eef0fb")+'"><span>'+fmt(p)+' × '+fmt(q)+'</span><b>'+fmt(v)+'</b></div>';});
  });
  h+='</div><p class="note" style="margin-top:6px">Not to scale.</p>';
  $("#arPic").innerHTML=h;
  var sum=prods.reduce(function(x,y){return x+y;},0);
  $("#arRead").innerHTML=fmt(A)+' × '+B+' = '+prods.map(fmt).join(" + ")+' = '+fmt(sum)+'<small>'+(Math.abs(sum-eA*eB)<=Math.max(eA*eB*0.25,10)?'Close to the estimate of '+fmt(eA*eB)+', so the answer is reasonable.':'Compare with the estimate of '+fmt(eA*eB)+'. Is the answer reasonable?')+' Each partial product is a line of the extended algorithm.</small>';
 }
 $("#arGo").onclick=go;
 $("#arA").onkeydown=$("#arB").onkeydown=function(e){if(e.key==="Enter") go();};
 go();
}

function wireTool(t){
 if(t==="share") wireShare();
 if(t==="groups") wireGroups();
 if(t==="split") wireSplit();
 if(t==="area") wireArea();
}
