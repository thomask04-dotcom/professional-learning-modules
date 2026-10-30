function toolHTML(t){
 if(t==="containers") return '<div class="tool"><div class="tt">Diagnostic</div><h4>Which container holds more?</h4><p class="note">Both containers are the same depth, front to back. Decide which holds more, then pour the left container into the right to check. The pairs cycle through the five kinds of comparison NESA recommends.</p><div class="ctpic" id="ctPic"></div><div class="ctrl"><button class="btn small" data-c="a">Left holds more</button><button class="btn small" data-c="b">Right holds more</button><button class="btn small" data-c="s">They hold the same</button><button class="btn ghost small" id="ctNew" disabled>New pair</button></div><div class="fbline" id="ctFb"></div><div class="score" id="ctScore"></div></div>';
 if(t==="cubes") return '<div class="tool"><div class="tt">Diagnostic</div><h4>How many cubes?</h4><p class="note">Assume the model is solid, with no gaps. Some cubes are hidden, so think in layers. Type your answer, then check.</p><div class="cbpic" id="cbPic"></div><div class="ctrl"><label for="cbIn">Number of cubes</label><input type="number" id="cbIn" min="1" max="200" style="width:90px"><button class="btn small" id="cbGo">Check</button><button class="btn ghost small" id="cbNew">New model</button></div><div class="fbline" id="cbFb"></div><div class="score" id="cbScore"></div></div>';
 if(t==="nets") return '<div class="tool"><div class="tt">Diagnostic</div><h4>Will it fold into a cube?</h4><p class="note">A cube has 11 distinct nets. Visualise folding the arrangement of six squares, then check. The check labels where each square ends up when the shaded square is the base.</p><div class="ntpic" id="ntPic"></div><div class="ctrl"><button class="btn small" data-c="y">It makes a cube</button><button class="btn small" data-c="n">It doesn’t</button><button class="btn ghost small" id="ntNew" disabled>Next arrangement</button></div><div class="fbline" id="ntFb"></div><div class="score" id="ntScore"></div></div>';
 if(t==="prisms") return '<div class="tool"><div class="tt">Model</div><h4>Same volume, different prisms</h4><p class="note">Choose a number of cubes to see every rectangular prism it can make. Select a prism to see it in layers.</p><div class="ctrl" style="margin-top:0"><label for="pmV">Volume (cubes)</label><input type="number" id="pmV" value="24" min="1" max="72" style="width:80px"><button class="btn small" id="pmGo">Show</button><label><input type="checkbox" id="pmX"> Separate the layers</label></div><div class="pmlist" id="pmList"></div><div class="cbpic" id="pmPic"></div><div class="readout" id="pmRead"></div></div>';
 return "";
}

/* shared: isometric drawing of an L × W × H prism of cubes */
function isoPrism(L,W,H,opt){
 opt=opt||{}; var s=opt.s||22, c=Math.cos(Math.PI/6), gap=opt.explode?1.1:0;
 function shade(hex,k){ var n=parseInt(hex.slice(1),16), r=n>>16, g=(n>>8)&255, b=n&255; return 'rgb('+[r,g,b].map(function(v){return Math.min(255,Math.round(k>1?v+(255-v)*(k-1)*1.6:v*k));}).join(',')+')'; }
 var cols=["#4b5bbf","#2f7f6f","#c8553d","#b07a1a","#8a3f8f","#3b7fae"];
 function P(x,y,z){ return [(x-y)*c*s,(x+y)*0.5*s-z*s]; }
 var cubes=[]; for(var z=0;z<H;z++) for(var y=0;y<W;y++) for(var x=0;x<L;x++) cubes.push([x,y,z]);
 cubes.sort(function(a,b){return ((a[0]+a[1]+a[2])-(b[0]+b[1]+b[2]))||(a[2]-b[2]);});
 var polys=[], minX=1e9,maxX=-1e9,minY=1e9,maxY=-1e9;
 cubes.forEach(function(q){
  var x=q[0],y=q[1],z=q[2]+q[2]*gap, col=opt.layers?cols[q[2]%cols.length]:(opt.col||"#4b5bbf");
  var faces=[
   [[x,y,z+1],[x+1,y,z+1],[x+1,y+1,z+1],[x,y+1,z+1],1.12],
   [[x+1,y,z],[x+1,y+1,z],[x+1,y+1,z+1],[x+1,y,z+1],0.86],
   [[x,y+1,z],[x+1,y+1,z],[x+1,y+1,z+1],[x,y+1,z+1],0.66]
  ];
  faces.forEach(function(f){
   var pts=f.slice(0,4).map(function(v){var p=P(v[0],v[1],v[2]); minX=Math.min(minX,p[0]);maxX=Math.max(maxX,p[0]);minY=Math.min(minY,p[1]);maxY=Math.max(maxY,p[1]); return p;});
   polys.push('<polygon points="'+pts.map(function(p){return p[0].toFixed(1)+","+p[1].toFixed(1);}).join(" ")+'" fill="'+shade(col,f[4])+'" stroke="#fff" stroke-width="1.2" stroke-linejoin="round"/>');
  });
 });
 var pad=6, w=maxX-minX+pad*2, h=maxY-minY+pad*2;
 return '<svg viewBox="'+(minX-pad).toFixed(1)+' '+(minY-pad).toFixed(1)+' '+w.toFixed(1)+' '+h.toFixed(1)+'" style="max-width:'+Math.round(w)+'px" role="img" aria-label="'+L+' by '+W+' by '+H+' prism of cubes">'+polys.join("")+'</svg>';
}

/* ES1 containers */
var CT_PAIRS=[
 {a:[110,80],b:[52,150],k:"The left container is shorter but holds more."},
 {a:[42,150],b:[96,90],k:"The left container is taller but holds less."},
 {a:[62,80],b:[70,135],k:"The left container is shorter and holds less."},
 {a:[72,150],b:[84,92],k:"The left container is taller and holds more."},
 {a:[100,72],b:[45,160],k:"The short wide container holds the same as the tall narrow one."}
];
function wireContainers(){
 var order, i=-1, score=0, round=0, A, B, swap;
 function cont(x,w,h,level,over,lab,col){
  var base=190, top=base-h, s='';
  if(level>0) s+='<rect x="'+x+'" y="'+(base-level)+'" width="'+w+'" height="'+level+'" fill="'+col+'" fill-opacity=".75"/>';
  if(over) s+='<path d="M'+(x+w)+' '+top+' q 14 4 18 30 q 4 40 14 '+(h-30)+' l -18 0 q -8 -50 -10 -'+(h-40)+'Z" fill="'+col+'" fill-opacity=".55"/><ellipse cx="'+(x+w+18)+'" cy="'+(base+4)+'" rx="26" ry="5" fill="'+col+'" fill-opacity=".5"/>';
  s+='<path d="M'+x+' '+top+' V'+base+' H'+(x+w)+' V'+top+'" fill="none" stroke="var(--ink)" stroke-width="3" stroke-linejoin="round"/>';
  s+='<text x="'+(x+w/2)+'" y="214" text-anchor="middle" font-size="14" font-weight="700" fill="var(--ink2)">'+lab+'</text>';
  return s;
 }
 function draw(poured){
  var col="#3b7fae", la=A[1], lb=0, over=false, capA=A[0]*A[1], capB=B[0]*B[1];
  if(poured){ la=0; lb=Math.min(B[1],capA/B[0]); over=capA>capB+1; }
  var xB=90+A[0]+80;
  $("#ctPic").innerHTML='<svg viewBox="0 0 '+(xB+B[0]+70)+' 222" style="max-width:'+(xB+B[0]+70)+'px">'+cont(60,A[0],A[1],la,false,"Left",col)+cont(xB,B[0],B[1],lb,over,"Right",col)+'</svg>';
 }
 function newPair(){
  if(i<0||i>=order.length-1){ order=CT_PAIRS.slice().sort(function(){return Math.random()-.5;}); i=0; } else i++;
  round++; var p=order[i]; swap=false; A=p.a; B=p.b;
  draw(false); $("#ctFb").className="fbline";
  $$(".tool [data-c]").forEach(function(x){x.disabled=false;}); $("#ctNew").disabled=true;
 }
 $$(".tool [data-c]").forEach(function(btn){btn.onclick=function(){
  var capA=A[0]*A[1], capB=B[0]*B[1], right=Math.abs(capA-capB)<=1?"s":(capA>capB?"a":"b"), ok=btn.dataset.c===right; if(ok) score++;
  draw(true);
  var what=right==="s"?"The water from the left exactly fills the right container, so they hold the same amount.":right==="a"?"The water from the left overflows the right container, so the left holds more.":"The water from the left doesn’t fill the right container, so the right holds more.";
  $("#ctFb").className="fbline show "+(ok?"ok":"no");
  $("#ctFb").innerHTML=(ok?"<b>Yes.</b> ":"<b>Not this time.</b> ")+what+" "+order[i].k+" Height alone doesn’t decide which holds more.";
  $$(".tool [data-c]").forEach(function(x){x.disabled=true;}); $("#ctNew").disabled=false;
  $("#ctScore").textContent=score+" of "+round+" correct";
 };});
 $("#ctNew").onclick=newPair;
 newPair();
}

/* S1 count the cubes */
function wireCubes(){
 var D, score=0, round=0, last="";
 function newModel(){
  var k; do{ D=[2+Math.floor(Math.random()*3),2+Math.floor(Math.random()*3),2+Math.floor(Math.random()*3)]; k=D.join(); }while(k===last); last=k;
  $("#cbPic").innerHTML=isoPrism(D[0],D[1],D[2],{s:26});
  $("#cbIn").value=""; $("#cbFb").className="fbline"; $("#cbGo").disabled=false;
 }
 function check(){
  var n=Math.round(+$("#cbIn").value); if(!n) return;
  var L=D[0],W=D[1],H=D[2], V=L*W*H, faces=L*W+L*H+W*H, visible=V-(L-1)*(W-1)*(H-1), ok=n===V;
  round++; if(ok) score++;
  var why;
  if(ok) why="Each layer is "+W+" rows of "+L+" cubes, which is "+(L*W)+" cubes, and there are "+H+" layers: "+H+" × "+(L*W)+" = "+V+" cubes.";
  else if(n===faces) why="You may have counted the squares you can see on the outside. That counts faces, and some cubes are counted more than once. ";
  else if(n===visible) why="You may have counted only the cubes you can see. "+(V-visible)+" cube"+(V-visible===1?" is":"s are")+" hidden inside or at the back. ";
  else why="";
  if(!ok) why+="There are "+V+" cubes: "+H+" layers of "+(L*W)+" (each layer is "+W+" rows of "+L+").";
  $("#cbPic").innerHTML=isoPrism(L,W,H,{s:26,explode:true,layers:true});
  $("#cbFb").className="fbline show "+(ok?"ok":"no");
  $("#cbFb").innerHTML=(ok?"<b>Yes.</b> ":"<b>Not this time.</b> ")+why;
  $("#cbGo").disabled=true; $("#cbScore").textContent=score+" of "+round+" correct";
 }
 $("#cbGo").onclick=check; $("#cbIn").onkeydown=function(e){if(e.key==="Enter") check();};
 $("#cbNew").onclick=newModel;
 newModel();
}

/* S2 nets of a cube */
var NETS=[
 [[1,0],[1,1],[1,2],[1,3],[0,0],[2,0]],
 [[1,0],[1,1],[1,2],[1,3],[0,0],[2,1]],
 [[1,0],[1,1],[1,2],[1,3],[0,0],[2,2]],
 [[1,0],[1,1],[1,2],[1,3],[0,0],[2,3]],
 [[1,0],[1,1],[1,2],[1,3],[0,1],[2,1]],
 [[1,0],[1,1],[1,2],[1,3],[0,1],[2,2]],
 [[0,0],[0,1],[1,1],[1,2],[1,3],[2,1]],
 [[0,0],[0,1],[1,1],[1,2],[1,3],[2,2]],
 [[0,0],[0,1],[1,1],[1,2],[1,3],[2,3]],
 [[0,0],[0,1],[1,1],[1,2],[2,2],[2,3]],
 [[0,0],[0,1],[0,2],[1,2],[1,3],[1,4]],
 [[0,0],[0,1],[0,2],[0,3],[0,4],[0,5]],
 [[0,0],[0,1],[0,2],[1,0],[1,1],[1,2]],
 [[1,0],[1,1],[1,2],[1,3],[1,4],[0,0]],
 [[0,0],[0,1],[1,0],[1,1],[1,2],[1,3]],
 [[1,0],[1,1],[1,2],[1,3],[0,1],[0,2]],
 [[0,0],[0,1],[0,2],[0,3],[1,1],[1,2]],
 [[0,1],[1,0],[1,1],[1,2],[2,1],[2,2]],
 [[0,0],[0,1],[0,2],[1,2],[1,3],[2,3]]
];
/* fold by rolling a cube: returns the face each square lands on */
function foldNet(cells){
 var key=function(r,c){return r+","+c;}, set={}; cells.forEach(function(p){set[key(p[0],p[1])]=1;});
 var start=cells[0], st={}, res={};
 st[key(start[0],start[1])]={D:"Base",U:"Top",N:"Back",S:"Front",E:"Right",W:"Left"};
 var q=[start];
 while(q.length){
  var p=q.shift(), o=st[key(p[0],p[1])]; res[key(p[0],p[1])]=o.D;
  [[-1,0,"N"],[1,0,"S"],[0,1,"E"],[0,-1,"W"]].forEach(function(d){
   var r=p[0]+d[0], c=p[1]+d[1], k=key(r,c); if(!set[k]||st[k]) return;
   var n={};
   if(d[2]==="E") n={D:o.E,E:o.U,U:o.W,W:o.D,N:o.N,S:o.S};
   if(d[2]==="W") n={D:o.W,W:o.U,U:o.E,E:o.D,N:o.N,S:o.S};
   if(d[2]==="S") n={D:o.S,S:o.U,U:o.N,N:o.D,E:o.E,W:o.W};
   if(d[2]==="N") n={D:o.N,N:o.U,U:o.S,S:o.D,E:o.E,W:o.W};
   st[k]=n; q.push([r,c]);
  });
 }
 return res;
}
function transformCells(cells,rot,flip){
 var out=cells.map(function(p){var r=p[0],c=p[1]; if(flip) c=-c; for(var i=0;i<rot;i++){var t=r; r=c; c=-t;} return [r,c];});
 var mr=Math.min.apply(null,out.map(function(p){return p[0];})), mc=Math.min.apply(null,out.map(function(p){return p[1];}));
 return out.map(function(p){return [p[0]-mr,p[1]-mc];});
}
function wireNets(){
 var order, i, score=0, round=0, cells;
 function draw(labels){
  var u=44, R=1+Math.max.apply(null,cells.map(function(p){return p[0];})), C=1+Math.max.apply(null,cells.map(function(p){return p[1];}));
  var w=C*u+8, h=R*u+8, s='<svg viewBox="0 0 '+w+' '+h+'" style="max-width:'+w+'px">', cnt={};
  if(labels) cells.forEach(function(p){var f=labels[p[0]+","+p[1]]; cnt[f]=(cnt[f]||0)+1;});
  cells.forEach(function(p,j){
   var f=labels?labels[p[0]+","+p[1]]:"", dup=labels&&cnt[f]>1;
   s+='<rect x="'+(4+p[1]*u)+'" y="'+(4+p[0]*u)+'" width="'+u+'" height="'+u+'" fill="'+(dup?(j===0?"#eaa79a":"#f6c9bf"):(j===0?"#c9d0f0":"#eef0fb"))+'" stroke="'+(dup?"var(--accent)":"var(--s2)")+'" stroke-width="2"/>';
   if(labels) s+='<text x="'+(4+p[1]*u+u/2)+'" y="'+(4+p[0]*u+u/2+4)+'" text-anchor="middle" font-size="11" font-weight="700" fill="'+(dup?"#7a2219":"var(--ink)")+'">'+f+'</text>';
  });
  $("#ntPic").innerHTML=s+'</svg>';
  return cnt;
 }
 function start(){ order=NETS.slice().sort(function(){return Math.random()-.5;}); i=0; show(); }
 function show(){
  cells=transformCells(order[i],Math.floor(Math.random()*4),Math.random()<.5);
  draw(null); $("#ntFb").className="fbline";
  $$(".tool [data-c]").forEach(function(x){x.disabled=false;}); $("#ntNew").disabled=true; $("#ntNew").textContent="Next arrangement";
 }
 $$(".tool [data-c]").forEach(function(btn){btn.onclick=function(){
  var lab=foldNet(cells), cnt=draw(lab), dups=Object.keys(cnt).filter(function(k){return cnt[k]>1;}), isNet=dups.length===0, ok=(btn.dataset.c==="y")===isNet;
  round++; if(ok) score++;
  $("#ntFb").className="fbline show "+(ok?"ok":"no");
  $("#ntFb").innerHTML=(ok?"<b>Yes.</b> ":"<b>Not this time.</b> ")+(isNet?"Every square lands on a different face, so this is a net of a cube.":"When folded, two squares overlap on the same face ("+dups.join(", ").toLowerCase()+"), so one face of the cube is left open. This isn’t a net of a cube.");
  $$(".tool [data-c]").forEach(function(x){x.disabled=true;}); $("#ntNew").disabled=false;
  if(i===order.length-1) $("#ntNew").textContent="Start again";
  $("#ntScore").textContent=score+" of "+round+" correct";
 };});
 $("#ntNew").onclick=function(){ if(i===order.length-1) start(); else { i++; show(); } };
 start();
}

/* S3 same volume, different prisms */
function wirePrisms(){
 var list=[], sel=0;
 function build(){
  var V=Math.round(+$("#pmV").value); list=[];
  if(!(V>=1&&V<=72)){ $("#pmList").innerHTML=""; $("#pmPic").innerHTML=""; $("#pmRead").innerHTML='<small>Choose a number of cubes from 1 to 72.</small>'; return; }
  for(var h=1;h<=V;h++) if(V%h===0) for(var w=1;w<=V/h;w++) if((V/h)%w===0){ var l=V/h/w; if(l>=w&&w>=h) list.push([l,w,h]); }
  sel=0;
  for(var j=1;j<list.length;j++){ if(list[j][0]<list[sel][0]) sel=j; }
  $("#pmList").innerHTML=list.map(function(d,j){return '<button data-j="'+j+'" class="'+(j===sel?"on":"")+'">'+d[0]+' × '+d[1]+' × '+d[2]+'</button>';}).join("");
  $$("#pmList button").forEach(function(b){b.onclick=function(){sel=+b.dataset.j;$$("#pmList button").forEach(function(x){x.classList.toggle("on",x===b);});draw();};});
  draw();
 }
 function draw(){
  if(!list.length) return;
  var d=list[sel], L=d[0],W=d[1],H=d[2], V=L*W*H, big=Math.max(L,W,H), s=big>12?12:big>8?16:22;
  $("#pmPic").innerHTML=isoPrism(L,W,H,{s:s,explode:$("#pmX").checked,layers:true});
  $("#pmRead").innerHTML=(L*W)+' cubes in one layer × '+H+' layer'+(H>1?'s':'')+' = '+V+' cubic centimetres<small>Each layer is '+W+' row'+(W>1?'s':'')+' of '+L+'. '+list.length+' different rectangular prism'+(list.length>1?'s':'')+' can be made from '+V+' cubes: the same volume with different dimensions. (Each prism is listed once, whichever way it is turned.)</small>';
 }
 $("#pmGo").onclick=build; $("#pmV").onkeydown=function(e){if(e.key==="Enter") build();};
 $("#pmX").onchange=draw;
 build();
}

function wireTool(t){
 if(t==="containers") wireContainers();
 if(t==="cubes") wireCubes();
 if(t==="nets") wireNets();
 if(t==="prisms") wirePrisms();
}
