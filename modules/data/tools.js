function toolHTML(t){
 if(t==="sort") return '<div class="tool"><div class="tt">Model</div><h4>Sort, line up and compare</h4><p class="note">Sort a collection of objects, then compare the groups. Spread-out groups can look bigger than they are; lining them up from a common baseline lets you compare by looking as well as by counting.</p><div class="ctrl" style="margin-top:0"><label for="soBy">Sort by</label><select id="soBy"><option value="c">colour</option><option value="s">shape</option><option value="z">size</option></select><button class="btn ghost small" id="soNew">New collection</button></div><div class="moves" id="soView" style="margin-top:0"><button data-v="g" class="on">Groups</button><button data-v="l">Lined up</button></div><div class="sopic" id="soPic"></div><div class="readout" id="soRead"></div></div>';
 if(t==="picgraph") return '<div class="tool"><div class="tt">Diagnostic</div><h4>Is this picture graph fair?</h4><p class="note">A picture graph needs a baseline, equal spacing and same-sized symbols. Look at the favourite-fruit graph, then decide what (if anything) makes it misleading.</p><div class="pgpic" id="pgPic"></div><div class="ctrl"><button class="btn small" data-c="size">Different-sized symbols</button><button class="btn small" data-c="spacing">Unequal spacing</button><button class="btn small" data-c="baseline">No common baseline</button><button class="btn small" data-c="none">It’s fair</button></div><div class="fbline" id="pgFb"></div><div class="ctrl"><button class="btn ghost small" id="pgNew" disabled>New graph</button><span class="score" id="pgScore"></span></div></div>';
 if(t==="displays") return '<div class="tool"><div class="tt">Model</div><h4>One dataset, several displays</h4><p class="note">How many pets do students in a class have? Compare what each display makes easy to see, then try the ‘here, hidden, beyond’ questions.</p><div class="moves" id="dsV" style="margin-top:0"><button data-v="t" class="on">Tally table</button><button data-v="d">Dot plot</button><button data-v="c">Column graph</button></div><div class="ctrl" id="dsScaleRow" style="margin-top:0;display:none"><label for="dsScale">Each interval represents</label><select id="dsScale"><option value="1">1 student</option><option value="2">2 students</option></select></div><div class="dspic" id="dsPic"></div><div class="readout" id="dsRead"></div><div class="ctrl"><button class="btn ghost small" id="dsNew">New class data</button></div></div>';
 if(t==="axis") return '<div class="tool"><div class="tt">Model</div><h4>How the axis changes the story</h4><p class="note">Choose a dataset. For the advertisement, move the start of the vertical axis and compare how big the differences look with the actual values.</p><div class="moves" id="axD" style="margin-top:0"><button data-d="ad" class="on">Battery advertisement</button><button data-d="cls">Favourite subjects: 5A and 5B</button></div><div class="ctrl" id="axRow" style="margin-top:0"><label for="axS">Vertical axis starts at</label><input type="range" id="axS" min="0" max="44" step="2" value="0"><span class="axv" id="axSv">0</span></div><div class="axpic" id="axPic"></div><div class="readout" id="axRead"></div></div>';
 return "";
}

/* ---------- ES1 sort ---------- */
var SO_COL={red:"#c8553d",blue:"#3b5bbf",yellow:"#e0a33a",green:"#2f7f6f"};
function soShape(o,x,y){
 var r=o.z==="big"?15:9, c=SO_COL[o.c];
 if(o.s==="circle") return '<circle cx="'+x+'" cy="'+y+'" r="'+r+'" fill="'+c+'"/>';
 if(o.s==="square") return '<rect x="'+(x-r)+'" y="'+(y-r)+'" width="'+(2*r)+'" height="'+(2*r)+'" fill="'+c+'"/>';
 return '<polygon points="'+x+','+(y-r-2)+' '+(x+r+2)+','+(y+r)+' '+(x-r-2)+','+(y+r)+'" fill="'+c+'"/>';
}
function wireSort(){
 var objs=[], view="g";
 function make(){
  var cols=Object.keys(SO_COL).sort(function(){return Math.random()-.5;}).slice(0,3), shapes=["circle","square","triangle"], n=12+Math.floor(Math.random()*5);
  objs=[]; for(var i=0;i<n;i++) objs.push({c:cols[Math.floor(Math.random()*3)],s:shapes[Math.floor(Math.random()*3)],z:Math.random()<.5?"big":"small"});
 }
 function draw(){
  var by=$("#soBy").value, key=function(o){return by==="c"?o.c:by==="s"?o.s:o.z;}, groups={};
  objs.forEach(function(o){(groups[key(o)]=groups[key(o)]||[]).push(o);});
  var names=Object.keys(groups).sort(), counts=names.map(function(k){return groups[k].length;}), s;
  // make the smallest group the most spread out, so it looks biggest
  var minI=counts.indexOf(Math.min.apply(null,counts));
  if(view==="g"){
   var W=names.length*170, H=190; s='<svg viewBox="0 0 '+W+' '+(H+24)+'" style="max-width:'+W+'px">';
   names.forEach(function(k,gi){
    var x0=gi*170+6, g=groups[k], spread=gi===minI?1:0.55, seed=gi*7+1;
    s+='<rect x="'+x0+'" y="4" width="158" height="'+H+'" rx="12" fill="none" stroke="var(--line)" stroke-width="2"/>';
    var cell=gi===minI?Math.min(56,Math.sqrt(130*160/g.length)):34, cols=Math.max(1,Math.floor(140/cell)), rows=Math.ceil(g.length/cols);
    g.forEach(function(o,j){ seed=(seed*37+11)%101; var c=j%cols, rr=Math.floor(j/cols), cx=x0+79+(c-(cols-1)/2)*cell+((seed%7)-3)*(gi===minI?2:1), cy=99+(rr-(rows-1)/2)*cell+(((seed*3)%7)-3)*(gi===minI?2:1); s+=soShape(o,cx.toFixed(1),cy.toFixed(1)); });
    s+='<text x="'+(x0+79)+'" y="'+(H+20)+'" text-anchor="middle" font-size="13" font-weight="700" fill="var(--ink2)">'+k+'</text>';
   });
  } else {
   var cw=90, W2=names.length*cw+40, H2=Math.max.apply(null,counts)*34+40; s='<svg viewBox="0 0 '+W2+' '+(H2+24)+'" style="max-width:'+W2+'px">';
   s+='<line x1="10" y1="'+H2+'" x2="'+(W2-10)+'" y2="'+H2+'" stroke="var(--ink)" stroke-width="2.5"/>';
   names.forEach(function(k,gi){ var cx=30+gi*cw+cw/2;
    groups[k].forEach(function(o,j){ s+=soShape(o,cx,H2-18-j*34); });
    s+='<text x="'+cx+'" y="'+(H2+18)+'" text-anchor="middle" font-size="13" font-weight="700" fill="var(--ink2)">'+k+' ('+groups[k].length+')</text>';
   });
  }
  $("#soPic").innerHTML=s+'</svg>';
  var mx=Math.max.apply(null,counts), mn=Math.min.apply(null,counts), most=names.filter(function(k){return groups[k].length===mx;}), least=names.filter(function(k){return groups[k].length===mn;});
  var cmp=names.map(function(k){return k+": "+groups[k].length;}).join(" · ");
  $("#soRead").innerHTML=(view==="g"?"Which group has the most?":cmp)+'<small>'+(view==="g"?"The "+names[minI]+" group is spread out, so it may look biggest. Line the groups up to check, or count. ":"")+(view==="l"?(most.length>1?most.join(" and ")+" have the most (equal).":"Most: "+most[0]+".")+(mx>mn?" Fewest: "+least.join(" and ")+". "+most[0].charAt(0).toUpperCase()+most[0].slice(1)+" has "+(mx-mn)+" more than "+least[0]+".":""):"")+'</small>';
 }
 $$("#soView button").forEach(function(b){b.onclick=function(){view=b.dataset.v;$$("#soView button").forEach(function(x){x.classList.toggle("on",x===b);});draw();};});
 $("#soBy").onchange=draw; $("#soNew").onclick=function(){make();draw();};
 make(); draw();
}

/* ---------- S1 picture graph ---------- */
var PG_FRUIT=[["apples","#c8553d","apple"],["bananas","#e0a33a","banana"],["oranges","#e07a2a","orange"],["grapes","#8a3f8f","grape"]];
function wirePicgraph(){
 var counts, flaw, target, maxI, score=0, round=0, last="";
 function make(){
  var flaws=["size","spacing","baseline","none"]; do{ flaw=flaws[Math.floor(Math.random()*4)]; }while(flaw===last); last=flaw;
  var mx=6+Math.floor(Math.random()*2); counts=[mx,mx-1,mx-2,2+Math.floor(Math.random()*2)].sort(function(){return Math.random()-.5;});
  maxI=counts.indexOf(mx);
  var cands=[0,1,2,3].filter(function(i){return counts[i]<mx&&counts[i]>=mx-2;}); target=flaw==="size"?counts.indexOf(mx-1):cands[Math.floor(Math.random()*cands.length)];
 }
 function draw(fair){
  var lab=90, sp=32, H=4*46+30, W=lab+8*50+20, s='<svg viewBox="0 0 '+W+' '+H+'" style="max-width:'+W+'px">';
  s+='<text x="'+(W/2)+'" y="18" text-anchor="middle" font-size="14" font-weight="700" fill="var(--ink)">Our favourite fruit</text>';
  PG_FRUIT.forEach(function(f,i){
   var y=48+i*46, big=!fair&&flaw==="size"&&i===target, wide=!fair&&flaw==="spacing"&&i===target, off=(!fair&&flaw==="baseline"&&i===target)?(counts[maxI]-counts[i])*sp+44:0;
   var r=big?21:12, step=big?48:wide?52:sp;
   s+='<text x="'+(lab-10)+'" y="'+(y+5)+'" text-anchor="end" font-size="13" font-weight="700" fill="var(--ink2)">'+f[0]+'</text>';
   for(var k=0;k<counts[i];k++){ var cx=lab+off+r+4+k*step; s+='<circle cx="'+cx+'" cy="'+y+'" r="'+r+'" fill="'+f[1]+'"/><circle cx="'+(cx-r*.35)+'" cy="'+(y-r*.35)+'" r="'+(r*.25)+'" fill="#fff" fill-opacity=".5"/>'; }
  });
  if(fair||flaw!=="baseline") s+='<line x1="'+lab+'" y1="28" x2="'+lab+'" y2="'+(H-6)+'" stroke="var(--ink)" stroke-width="2"/>';
  $("#pgPic").innerHTML=s+'</svg>';
 }
 function newQ(){ round++; make(); draw(false); $("#pgFb").className="fbline"; $$(".tool [data-c]").forEach(function(x){x.disabled=false;}); $("#pgNew").disabled=true; }
 $$(".tool [data-c]").forEach(function(btn){btn.onclick=function(){
  var ok=btn.dataset.c===flaw; if(ok) score++;
  var tn=PG_FRUIT[target][0], mn=PG_FRUIT[maxI][0], msg;
  if(flaw==="none") msg="This graph has a baseline, equal spacing and same-sized symbols, so the longest row really does show the most: "+mn+" ("+counts[maxI]+").";
  else msg={size:"The "+PG_FRUIT[target][2]+" symbols are bigger, so that row looks longest.",spacing:"The "+PG_FRUIT[target][2]+" symbols are spaced further apart, so that row looks longest.",baseline:"The "+PG_FRUIT[target][2]+" row doesn’t start at the same place as the others, so it ends furthest along."}[flaw]+" Counting shows "+tn+": "+counts[target]+", but "+mn+": "+counts[maxI]+". The fair graph is shown now.";
  if(flaw!=="none") draw(true);
  $("#pgFb").className="fbline show "+(ok?"ok":"no");
  $("#pgFb").innerHTML=(ok?"<b>Yes.</b> ":"<b>Not this time.</b> ")+msg;
  $$(".tool [data-c]").forEach(function(x){x.disabled=true;}); $("#pgNew").disabled=false;
  $("#pgScore").textContent=score+" of "+round+" correct";
 };});
 $("#pgNew").onclick=newQ;
 newQ();
}

/* ---------- S2 displays ---------- */
function tallySVG(n,x,y){
 var s='', g=Math.floor(n/5), r=n%5, px=x;
 for(var i=0;i<g;i++){ for(var k=0;k<4;k++) s+='<line x1="'+(px+k*7)+'" y1="'+(y-11)+'" x2="'+(px+k*7)+'" y2="'+(y+11)+'" stroke="var(--ink)" stroke-width="2"/>'; s+='<line x1="'+(px-4)+'" y1="'+(y+8)+'" x2="'+(px+25)+'" y2="'+(y-8)+'" stroke="var(--ink)" stroke-width="2"/>'; px+=38; }
 for(var j=0;j<r;j++) s+='<line x1="'+(px+j*7)+'" y1="'+(y-11)+'" x2="'+(px+j*7)+'" y2="'+(y+11)+'" stroke="var(--ink)" stroke-width="2"/>';
 return s;
}
function wireDisplays(){
 var f, view="t";
 function make(){ var base=[3,7,6,3,2,1]; f=base.map(function(v){return Math.max(0,v+Math.floor(Math.random()*5)-2);}); if(f.reduce(function(a,b){return a+b;},0)<12) f[1]+=4; }
 function draw(){
  $("#dsScaleRow").style.display=view==="c"?"":"none";
  var N=f.reduce(function(a,b){return a+b;},0), mx=Math.max.apply(null,f), s;
  if(view==="t"){
   s='<table class="dstab"><tr><th>Number of pets</th><th>Tally</th><th>Number of students</th></tr>'+f.map(function(v,i){return '<tr><td>'+i+'</td><td><svg viewBox="0 0 120 26" width="120" height="26">'+tallySVG(v,6,13)+'</svg></td><td>'+v+'</td></tr>';}).join("")+'<tr><td><b>Total</b></td><td></td><td><b>'+N+'</b></td></tr></table>';
  } else if(view==="d"){
   var W=6*60+40, H=mx*22+60; s='<svg viewBox="0 0 '+W+' '+H+'" style="max-width:'+W+'px">';
   s+='<line x1="20" y1="'+(H-34)+'" x2="'+(W-10)+'" y2="'+(H-34)+'" stroke="var(--ink)" stroke-width="2"/>';
   f.forEach(function(v,i){ var x=50+i*60; s+='<line x1="'+x+'" y1="'+(H-34)+'" x2="'+x+'" y2="'+(H-28)+'" stroke="var(--ink)" stroke-width="2"/><text x="'+x+'" y="'+(H-14)+'" text-anchor="middle" font-size="13" font-weight="700" fill="var(--ink)">'+i+'</text>'; for(var k=0;k<v;k++) s+='<circle cx="'+x+'" cy="'+(H-46-k*22)+'" r="8" fill="var(--s2)"/>'; });
   s+='<text x="'+(W/2)+'" y="'+(H-1)+'" text-anchor="middle" font-size="12" fill="var(--ink2)">Number of pets</text>';
  } else {
   var sc=+$("#dsScale").value, top=Math.ceil(mx/sc)*sc, unit=Math.round(150/(top/sc)), W3=6*58+70, H3=(top/sc)*unit+70;
   s='<svg viewBox="0 0 '+W3+' '+H3+'" style="max-width:'+W3+'px">';
   for(var g=0;g<=top;g+=sc){ var gy=H3-40-(g/sc)*unit; s+='<line x1="46" y1="'+gy+'" x2="'+(W3-8)+'" y2="'+gy+'" stroke="#e2e5ec"/><text x="40" y="'+(gy+4)+'" text-anchor="end" font-size="12" fill="var(--ink)">'+g+'</text>'; }
   f.forEach(function(v,i){ var x=60+i*58, h=(v/sc)*unit; s+='<rect x="'+x+'" y="'+(H3-40-h)+'" width="36" height="'+h+'" fill="var(--s2)"/><text x="'+(x+18)+'" y="'+(H3-24)+'" text-anchor="middle" font-size="13" font-weight="700" fill="var(--ink)">'+i+'</text>'; });
   s+='<line x1="46" y1="'+(H3-40)+'" x2="'+(W3-8)+'" y2="'+(H3-40)+'" stroke="var(--ink)" stroke-width="2"/><line x1="46" y1="10" x2="46" y2="'+(H3-40)+'" stroke="var(--ink)" stroke-width="2"/>';
   s+='<text x="'+(W3/2+20)+'" y="'+(H3-4)+'" text-anchor="middle" font-size="12" fill="var(--ink2)">Number of pets</text><text x="12" y="'+((H3-40)/2)+'" text-anchor="middle" font-size="12" fill="var(--ink2)" transform="rotate(-90 12 '+((H3-40)/2)+')">Students</text>';
  }
  $("#dsPic").innerHTML=s+(view==="t"?"":'</svg>');
  var mode=f.indexOf(mx), fewer3=f[0]+f[1]+f[2], pick=2;
  var what={t:"The table gives exact counts and a total quickly.",d:"The dot plot shows each student as a dot, so the shape of the data and the most common value stand out.",c:"The column graph makes comparing categories easy"+(view==="c"&&$("#dsScale").value==="2"?", but with each interval representing 2 students you must read between gridlines for odd numbers.":".")}[view];
  $("#dsRead").innerHTML=what+'<small><b>Here:</b> How many students have '+pick+' pets? ('+f[pick]+') &nbsp; <b>Hidden:</b> '+(fewer3>N/2?'Most students ('+fewer3+' of '+N+') have fewer than 3 pets.':'Only '+fewer3+' of '+N+' students have fewer than 3 pets.')+' The most common number of pets is '+mode+'. &nbsp; <b>Beyond:</b> Would a class at another school be the same? Why or why not?</small>';
 }
 $$("#dsV button").forEach(function(b){b.onclick=function(){view=b.dataset.v;$$("#dsV button").forEach(function(x){x.classList.toggle("on",x===b);});draw();};});
 $("#dsScale").onchange=draw; $("#dsNew").onclick=function(){make();draw();};
 make(); draw();
}

/* ---------- S3 axis ---------- */
var AX_AD=[["Brand A",52],["Brand B",48],["Brand C",46]];
var AX_CLS={subj:["Maths","English","Science","PDHPE","History","Creative Arts"],a:[11,6,4,7,2,1],b:[12,7,5,4,1,8]};
function wireAxis(){
 var d="ad";
 function draw(){
  $("#axRow").style.display=d==="ad"?"":"none";
  var s, W, H=240, base=200, top=20, x0=56;
  if(d==="ad"){
   var st=+$("#axS").value, mx=56, sc=(base-top)/(mx-st); $("#axSv").textContent=st;
   W=x0+3*110+20; s='<svg viewBox="0 0 '+W+' '+H+'" style="max-width:'+W+'px">';
   for(var g=st;g<=mx;g+=(mx-st)>20?10:2){ var gy=base-(g-st)*sc; s+='<line x1="'+x0+'" y1="'+gy+'" x2="'+(W-10)+'" y2="'+gy+'" stroke="#e2e5ec"/><text x="'+(x0-6)+'" y="'+(gy+4)+'" text-anchor="end" font-size="12" fill="var(--ink)">'+g+'</text>'; }
   AX_AD.forEach(function(r,i){ var x=x0+24+i*110, h=(r[1]-st)*sc; s+='<rect x="'+x+'" y="'+(base-h)+'" width="64" height="'+h+'" fill="'+(i===0?"var(--accent)":"#9aa6bd")+'"/><text x="'+(x+32)+'" y="'+(base-h-6)+'" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink)">'+r[1]+' h</text><text x="'+(x+32)+'" y="'+(base+18)+'" text-anchor="middle" font-size="13" font-weight="700" fill="var(--ink2)">'+r[0]+'</text>'; });
   s+='<line x1="'+x0+'" y1="'+top+'" x2="'+x0+'" y2="'+base+'" stroke="var(--ink)" stroke-width="2"/><line x1="'+x0+'" y1="'+base+'" x2="'+(W-10)+'" y2="'+base+'" stroke="var(--ink)" stroke-width="2"/>';
   if(st>0) s+='<rect x="'+(x0-7)+'" y="'+(base-24)+'" width="14" height="14" fill="#fff"/><path d="M'+(x0-9)+' '+(base-13)+' l6 -6 l6 6 l6 -6" fill="none" stroke="var(--accent)" stroke-width="2.5"/>';
   s+='<text x="14" y="'+((base+top)/2)+'" text-anchor="middle" font-size="12" fill="var(--ink2)" transform="rotate(-90 14 '+((base+top)/2)+')">Battery life (hours)</text>';
   var a=AX_AD[0][1], c=AX_AD[2][1], looks=(a-st)/(c-st), real=a/c;
   $("#axRead").innerHTML=(st===0?'Axis from zero: Brand A looks '+looks.toFixed(2)+' times as tall as Brand C':'Brand A’s column looks '+looks.toFixed(1)+' times as tall as Brand C’s')+'<small>The values are '+a+' and '+c+' hours: Brand A lasts '+real.toFixed(2)+' times as long, or '+Math.round((real-1)*100)+'% longer. '+(st>0?'Starting the axis at '+st+' (a broken axis) exaggerates the difference. Ask who made the graph: it is an advertisement for Brand A.':'Move the slider to see how a broken axis changes the story.')+'</small>';
  } else {
   var cm=13, scl=(base-top)/cm; W=x0+6*74+20; s='<svg viewBox="0 0 '+W+' '+(H+18)+'" style="max-width:'+W+'px">';
   for(var g2=0;g2<=cm;g2+=1){ var gy2=base-g2*scl; s+='<line x1="'+x0+'" y1="'+gy2+'" x2="'+(W-10)+'" y2="'+gy2+'" stroke="#eef0f4"/>'+(g2%2===0?'<text x="'+(x0-6)+'" y="'+(gy2+4)+'" text-anchor="end" font-size="11" fill="var(--ink)">'+g2+'</text>':''); }
   AX_CLS.subj.forEach(function(n,i){ var x=x0+10+i*74; s+='<rect x="'+x+'" y="'+(base-AX_CLS.a[i]*scl)+'" width="26" height="'+(AX_CLS.a[i]*scl)+'" fill="var(--s3)"/><rect x="'+(x+28)+'" y="'+(base-AX_CLS.b[i]*scl)+'" width="26" height="'+(AX_CLS.b[i]*scl)+'" fill="#e0a33a"/><text x="'+(x+27)+'" y="'+(base+16)+'" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--ink2)">'+(n==="Creative Arts"?"Creative":n)+'</text>'+(n==="Creative Arts"?'<text x="'+(x+27)+'" y="'+(base+28)+'" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--ink2)">Arts</text>':''); });
   s+='<line x1="'+x0+'" y1="'+top+'" x2="'+x0+'" y2="'+base+'" stroke="var(--ink)" stroke-width="2"/><line x1="'+x0+'" y1="'+base+'" x2="'+(W-10)+'" y2="'+base+'" stroke="var(--ink)" stroke-width="2"/>';
   s+='<rect x="'+(x0+10)+'" y="'+(H)+'" width="12" height="12" fill="var(--s3)"/><text x="'+(x0+28)+'" y="'+(H+10)+'" font-size="12" fill="var(--ink)">5A</text><rect x="'+(x0+70)+'" y="'+(H)+'" width="12" height="12" fill="#e0a33a"/><text x="'+(x0+88)+'" y="'+(H+10)+'" font-size="12" fill="var(--ink)">5B</text>';
   s+='<text x="14" y="'+((base+top)/2)+'" text-anchor="middle" font-size="12" fill="var(--ink2)" transform="rotate(-90 14 '+((base+top)/2)+')">Number of students</text>';
   var ta=AX_CLS.a.reduce(function(p,q){return p+q;},0), tb=AX_CLS.b.reduce(function(p,q){return p+q;},0);
   $("#axRead").innerHTML='The mode (most popular subject) is Maths in both classes<small>Totals: 5A has '+ta+' students and 5B has '+tb+', found by adding every column. The biggest difference is Creative Arts (1 in 5A, 8 in 5B). The data is from the syllabus example of a side-by-side column graph for 2 categorical variables.</small>';
  }
  $("#axPic").innerHTML=s+'</svg>';
 }
 $$("#axD button").forEach(function(b){b.onclick=function(){d=b.dataset.d;$$("#axD button").forEach(function(x){x.classList.toggle("on",x===b);});draw();};});
 $("#axS").oninput=draw;
 draw();
}

function wireTool(t){
 if(t==="sort") wireSort();
 if(t==="picgraph") wirePicgraph();
 if(t==="displays") wireDisplays();
 if(t==="axis") wireAxis();
}
