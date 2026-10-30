function toolHTML(t){
 if(t==="triangles") return '<div class="tool"><div class="tt">Diagnostic</div><h4>Triangle or not?</h4><p class="note">Triangles in different orientations and sizes, mixed with non-examples that look similar. Decide, then read why. This mirrors the syllabus point “distinguish examples of triangles from non-examples”.</p><div class="trwrap"><svg viewBox="0 -15 200 195" id="trPic" class="trpic" role="img" aria-label="A shape"></svg><div class="trside"><div class="ctrl" style="margin-top:0"><button class="btn small" data-c="y">Triangle</button><button class="btn small" data-c="n">Not a triangle</button></div><div class="fbline" id="trFb"></div><div class="ctrl"><button class="btn ghost small" id="trNext" disabled>Next shape</button><span class="score" id="trScore"></span></div></div></div></div>';
 if(t==="turns") return '<div class="tool"><div class="tt">Diagnostic</div><h4>Predict the turn</h4><p class="note">From the diocesan PL slides: the arrow turns a set amount in each box. Predict what a later box looks like without drawing every step. Think of the minute hand: a quarter turn is 15 minutes.</p><div class="moves" id="tnDir" style="margin-top:0"><button data-d="1" class="on">Quarter turn clockwise</button><button data-d="-1">Quarter turn anti-clockwise</button><button data-d="2">Half turn</button></div><div class="tnrow" id="tnRow"></div><p class="note" id="tnAsk" style="margin-top:12px"></p><div class="tnopts" id="tnOpts"></div><div class="fbline" id="tnFb"></div><div class="ctrl"><button class="btn ghost small" id="tnNew" disabled>New question</button><span class="score" id="tnScore"></span></div></div>';
 if(t==="grid") return '<div class="tool"><div class="tt">Model</div><h4>Use the grid structure</h4><p class="note">Change the rectangle, then compare counting by ones with using rows and columns. Switch to a right-angled triangle to see it as half a rectangle.</p><div class="moves" id="gdShape" style="margin-top:0"><button data-s="r" class="on">Rectangle</button><button data-s="t">Right-angled triangle</button></div><div class="ctrl"><label for="gdL">Length</label><input type="range" id="gdL" min="1" max="12" value="8"><span id="gdLv" class="gdv">8 cm</span><label for="gdW">Width</label><input type="range" id="gdW" min="1" max="10" value="6"><span id="gdWv" class="gdv">6 cm</span></div><div class="moves" id="gdView" style="margin-top:0"><button data-v="1" class="on">Count by ones</button><button data-v="r">Rows and columns</button></div><div class="gdpic" id="gdPic"></div><div class="readout" id="gdRead"></div></div>';
 if(t==="lshape") return '<div class="tool"><div class="tt">Model</div><h4>Many ways to find the area of an L-shape</h4><p class="note">The NESA Stage 3 example: a 6 by 4 rectangle with a 3 by 2 corner missing. Choose a method to see the cut lines, the rearranged pieces and the calculation.</p><div class="moves" id="lsM" style="margin-top:0"><button data-m="0" class="on">Split across</button><button data-m="1">Split down</button><button data-m="2">Cut and move (long)</button><button data-m="3">Cut and move (tall)</button><button data-m="4">Complete and subtract</button><button data-m="5">Double and halve</button></div><div class="ctrl" style="margin-top:0"><label><input type="checkbox" id="lsG" checked> Show the grid</label></div><div class="lspic" id="lsPic"></div><div class="readout" id="lsRead"></div><p class="note" style="margin-top:10px">Every method gives 18 square units, and every method relies on the area of a rectangle.</p></div>';
 return "";
}

/* ES1 triangle or not */
var TRI_SHAPES=[
 {y:1,d:'<polygon points="100,20 170,140 30,140"/>',why:"Three straight sides, three corners and closed."},
 {y:1,d:'<polygon points="40,25 40,140 170,140"/>',why:"This right-angled triangle is a whole triangle, not “half a triangle”: three straight sides, closed."},
 {y:1,d:'<polygon points="30,30 170,30 100,140"/>',why:"Upside down, it is still a triangle. Turning a shape doesn’t change its name."},
 {y:1,d:'<polygon points="15,125 190,55 70,110"/>',why:"Long and thin, it still has three straight sides and is closed."},
 {y:1,d:'<polygon points="20,120 185,120 55,50"/>',why:"Its sides are different lengths, but it has three straight sides and is closed."},
 {y:1,d:'<polygon points="88,68 128,68 96,108"/>',why:"Small triangles are still triangles. Size doesn’t change the name."},
 {y:0,d:'<polygon points="30,140 100,20 170,140 100,95"/>',why:"It looks pointy, but it has four sides and four corners."},
 {y:0,d:'<polygon points="100,12 152,68 100,150 48,68"/>',why:"A kite has four sides and four corners."},
 {y:0,d:'<path d="M30 140 L170 140 L100 20 Q40 60 30 140Z"/>',why:"One side is curved. A triangle has three straight sides."},
 {y:0,d:'<path d="M88 40 L30 140 L170 140 L108 34" fill="none" stroke-width="6"/>',why:"There is a gap at the top, so it isn’t closed. A triangle is a closed shape."}
];
function wireTriangles(){
 var cols=["#2f7f6f","#c8553d","#4b5bbf","#b07a1a","#8a3f8f"], order, i, score;
 function start(){ order=TRI_SHAPES.slice().sort(function(){return Math.random()-.5;}); i=0; score=0; show(); }
 function show(){
  var s=order[i], c=cols[i%cols.length], rot=[0,15,-20,35,90,-60][Math.floor(Math.random()*6)];
  $("#trPic").innerHTML='<g transform="rotate('+rot+' 100 80)" fill="'+c+'" stroke="'+c+'" stroke-linejoin="round">'+s.d+'</g>';
  $("#trFb").className="fbline"; $$(".trside [data-c]").forEach(function(x){x.disabled=false;});
  $("#trNext").disabled=true; $("#trNext").textContent="Next shape";
  $("#trScore").textContent="Shape "+(i+1)+" of "+order.length;
 }
 $$(".trside [data-c]").forEach(function(btn){btn.onclick=function(){
  var s=order[i], ok=(btn.dataset.c==="y")===!!s.y; if(ok) score++;
  $("#trFb").className="fbline show "+(ok?"ok":"no");
  $("#trFb").innerHTML=(ok?"<b>Yes.</b> ":"<b>Not this time.</b> ")+(s.y?"It is a triangle. ":"It isn’t a triangle. ")+s.why;
  $$(".trside [data-c]").forEach(function(x){x.disabled=true;});
  $("#trNext").disabled=false;
  if(i===order.length-1){ $("#trNext").textContent="Start again"; $("#trScore").textContent=score+" of "+order.length+" correct"; }
  else $("#trScore").textContent=score+" of "+(i+1)+" correct";
 };});
 $("#trNext").onclick=function(){ if(i===order.length-1) start(); else { i++; show(); } };
 start();
}

/* S1 quarter turns */
function arrowSVG(deg,cls){
 return '<svg viewBox="0 0 100 100" class="'+(cls||"")+'"><g transform="rotate('+deg+' 50 50)"><path d="M50 12 L74 42 L58 42 L58 84 L42 84 L42 42 L26 42Z" fill="var(--s1)"/><circle cx="66" cy="74" r="7" fill="var(--accent)"/></g></svg>';
}
function wireTurns(){
 var dir=1, N, score=0, round=0;
 function step(n){ return ((dir===2?2:dir)*(n-1)*90); }
 function ori(n){ return (((dir===2?2:dir)*(n-1))%4+4)%4; }
 function newQ(){
  round++; N=6+Math.floor(Math.random()*19);
  var h=""; for(var n=1;n<=4;n++) h+='<div class="tnbox"><div class="tnlab">Box '+n+'</div>'+arrowSVG(step(n))+'</div>';
  h+='<div class="tnbox dots">…</div><div class="tnbox q"><div class="tnlab">Box '+N+'</div><div class="tnq" id="tnQ">?</div></div>';
  $("#tnRow").innerHTML=h;
  $("#tnAsk").innerHTML="What will box <b>"+N+"</b> look like?";
  $("#tnOpts").innerHTML=[0,1,2,3].map(function(o){return '<button class="tnopt" data-o="'+o+'" aria-label="Arrow turned '+(o*90)+' degrees clockwise">'+arrowSVG(o*90)+'</button>';}).join("");
  $$("#tnOpts .tnopt").forEach(function(b){b.onclick=function(){answer(+b.dataset.o,b);};});
  $("#tnFb").className="fbline"; $("#tnNew").disabled=true;
 }
 function answer(o,b){
  var right=ori(N), ok=o===right; if(ok) score++;
  $$("#tnOpts .tnopt").forEach(function(x){x.disabled=true; if(+x.dataset.o===right) x.classList.add("right");});
  if(!ok) b.classList.add("wrong");
  $("#tnQ").outerHTML=arrowSVG(step(N));
  var turns=N-1, msg;
  if(dir===2){ msg="Box "+N+" comes after "+turns+" half turns. Two half turns make a full turn, so "+(turns%2?"an odd number of half turns looks like box 2.":"an even number of half turns looks like box 1."); }
  else {
   var full=Math.floor(turns/4), rem=turns%4;
   msg="Box "+N+" comes after "+turns+" quarter turns "+(dir===1?"clockwise":"anti-clockwise")+". "+turns+" quarter turns is "+full+" full turn"+(full===1?"":"s")+(rem?" and "+rem+" more quarter turn"+(rem===1?"":"s"):"")+", so box "+N+" looks the same as box "+(rem+1)+". The pattern repeats every 4 boxes.";
  }
  $("#tnFb").className="fbline show "+(ok?"ok":"no");
  $("#tnFb").innerHTML=(ok?"<b>Yes.</b> ":"<b>Not this time.</b> ")+msg;
  $("#tnNew").disabled=false; $("#tnScore").textContent=score+" of "+round+" correct";
 }
 $$("#tnDir button").forEach(function(b){b.onclick=function(){dir=+b.dataset.d;$$("#tnDir button").forEach(function(x){x.classList.toggle("on",x===b);});newQ();};});
 $("#tnNew").onclick=newQ;
 newQ();
}

/* S2 grid structure */
function wireGrid(){
 var shape="r", view="1";
 function draw(){
  var L=+$("#gdL").value, W=+$("#gdW").value, c=24, pad=4, lab=view==="r"&&shape==="r"?64:4;
  $("#gdLv").textContent=L+" cm"; $("#gdWv").textContent=W+" cm";
  var vw=12*c+pad+lab, h='<svg viewBox="0 0 '+vw+' '+(W*c+pad*2)+'" style="max-width:'+vw+'px">';
  h+='<defs><pattern id="gdg" width="'+c+'" height="'+c+'" patternUnits="userSpaceOnUse" x="'+pad+'" y="'+pad+'"><path d="M'+c+' 0 L0 0 0 '+c+'" fill="none" stroke="#c9cfdb" stroke-width="1"/></pattern></defs>';
  h+='<rect x="'+pad+'" y="'+pad+'" width="'+(12*c)+'" height="'+(W*c)+'" fill="url(#gdg)"/>';
  if(shape==="r"){
   for(var r=0;r<W;r++){
    h+='<rect x="'+pad+'" y="'+(pad+r*c)+'" width="'+(L*c)+'" height="'+c+'" fill="'+(view==="r"?(r%2?"rgba(35,137,125,.30)":"rgba(35,137,125,.55)"):"rgba(35,137,125,.35)")+'"/>';
    if(view==="1") for(var k=0;k<L;k++) h+='<text x="'+(pad+k*c+c/2)+'" y="'+(pad+r*c+c/2+4)+'" text-anchor="middle" font-size="10" fill="#1b2333">'+(r*L+k+1)+'</text>';
    else h+='<text x="'+(pad+L*c+8)+'" y="'+(pad+r*c+c/2+4)+'" font-size="12" fill="#1b2333" font-weight="700">'+L*(r+1)+'</text>';
   }
   for(var gx=0;gx<=L;gx++) h+='<line x1="'+(pad+gx*c)+'" y1="'+pad+'" x2="'+(pad+gx*c)+'" y2="'+(pad+W*c)+'" stroke="#fff" stroke-opacity=".6"/>';
   for(var gy=0;gy<=W;gy++) h+='<line x1="'+pad+'" y1="'+(pad+gy*c)+'" x2="'+(pad+L*c)+'" y2="'+(pad+gy*c)+'" stroke="#fff" stroke-opacity=".6"/>';
   h+='<rect x="'+pad+'" y="'+pad+'" width="'+(L*c)+'" height="'+(W*c)+'" fill="none" stroke="var(--s2)" stroke-width="2.5"/>';
  } else {
   h+='<rect x="'+pad+'" y="'+pad+'" width="'+(L*c)+'" height="'+(W*c)+'" fill="none" stroke="var(--s2)" stroke-width="1.5" stroke-dasharray="5 4"/>';
   h+='<polygon points="'+pad+','+pad+' '+pad+','+(pad+W*c)+' '+(pad+L*c)+','+(pad+W*c)+'" fill="rgba(35,137,125,.45)" stroke="var(--s2)" stroke-width="2.5"/>';
  }
  $("#gdPic").innerHTML=h+'</svg>';
  var A=L*W, msg;
  if(shape==="t"){
   msg='Half of '+L+' × '+W+' = half of '+A+' = '+(A/2)+' square centimetres<small>The right-angled triangle is exactly half of the dashed '+L+' by '+W+' rectangle. Counting squares one by one is hard here because of the part squares, so the rectangle helps.</small>';
  } else if(view==="1"){
   msg=A+' square centimetres<small>Counting by ones works, but it is slow and squares are easy to miss or count twice. Try rows and columns.</small>';
  } else {
   var pairs=[]; for(var a=1;a<=A;a++) if(A%a===0&&a<=A/a&&a!==Math.min(L,W)&&A/a<=40) pairs.push(a+" by "+(A/a));
   msg=L+' in each row × '+W+' rows = '+A+' square centimetres<small>Each row is a composite unit of '+L+' squares, so we can skip count: '+Array.from({length:W},function(_,i){return L*(i+1);}).join(", ")+'.'+(pairs.length?' Other rectangles with the same area: '+pairs.slice(0,6).join(", ")+'.':'')+'</small>';
  }
  $("#gdRead").innerHTML=msg;
  $("#gdView").style.display=shape==="r"?"":"none";
 }
 $$("#gdShape button").forEach(function(b){b.onclick=function(){shape=b.dataset.s;$$("#gdShape button").forEach(function(x){x.classList.toggle("on",x===b);});draw();};});
 $$("#gdView button").forEach(function(b){b.onclick=function(){view=b.dataset.v;$$("#gdView button").forEach(function(x){x.classList.toggle("on",x===b);});draw();};});
 $("#gdL").oninput=draw; $("#gdW").oninput=draw;
 draw();
}

/* S3 L-shape */
var LS_A="#4b5bbf", LS_B="#e0a33a", LS_C="#2f7f6f";
var LS_METHODS=[
 {cut:[[0,0,3,2,LS_A,"3 × 2"],[0,2,6,2,LS_B,"6 × 2"]],calc:"3 × 2 + 6 × 2 = 6 + 12 = 18",why:"Split the L-shape across into two rectangles and add their areas."},
 {cut:[[0,0,3,4,LS_A,"3 × 4"],[3,2,3,2,LS_B,"3 × 2"]],calc:"3 × 4 + 3 × 2 = 12 + 6 = 18",why:"Split the L-shape down into two rectangles and add their areas."},
 {cut:[[0,0,3,2,LS_A,"move"],[0,2,6,2,LS_B,""]],after:[[0,0,6,2,LS_B,""],[6,0,3,2,LS_A,""]],alab:"9 × 2",calc:"9 × 2 = 18",why:"Cut off the top piece and translate it to the end of the bottom strip, making one rectangle 9 long and 2 wide."},
 {cut:[[0,0,3,4,LS_A,""],[3,2,3,2,LS_B,"move"]],after:[[0,2,3,4,LS_A,""],[0,0,3,2,LS_B,""]],alab:"3 × 6",calc:"3 × 6 = 18",why:"Cut off the bottom-right piece and move it on top of the tall column, making one rectangle 3 wide and 6 tall."},
 {cut:[[0,0,3,4,LS_A,""],[3,2,3,2,LS_A,""]],one:1,lab0:"Complete the rectangle",missing:[3,0,3,2],calc:"6 × 4 − 3 × 2 = 24 − 6 = 18",why:"Complete the 6 by 4 rectangle, then subtract the missing 3 by 2 corner."},
 {cut:[[0,0,3,4,LS_A,""],[3,2,3,2,LS_A,""]],after:[[0,0,3,4,LS_A,""],[3,2,3,2,LS_A,""],[3,0,3,2,LS_C,""],[6,0,3,4,LS_C,""]],one:1,lab0:"Start",alab:"9 × 4",calc:"9 × 4 = 36, and half of 36 = 18",why:"Duplicate the L-shape and rotate the copy a half turn. The two fit together to make a 9 by 4 rectangle, which is double the area."}
];
function lsSVG(rects,u,grid,missing,one,outlineL){
 var p=8, maxX=0, maxY=0;
 rects.concat(missing?[missing]:[]).forEach(function(r){maxX=Math.max(maxX,r[0]+r[2]);maxY=Math.max(maxY,r[1]+r[3]);});
 var w=maxX*u+p*2, h=maxY*u+p*2, s='<svg viewBox="0 0 '+w+' '+h+'" style="max-width:'+w+'px">';
 if(missing) s+='<rect x="'+(p+missing[0]*u)+'" y="'+(p+missing[1]*u)+'" width="'+(missing[2]*u)+'" height="'+(missing[3]*u)+'" fill="#fbe9e5" stroke="var(--accent)" stroke-width="2" stroke-dasharray="6 4"/><text x="'+(p+(missing[0]+missing[2]/2)*u)+'" y="'+(p+(missing[1]+missing[3]/2)*u+5)+'" text-anchor="middle" font-size="14" font-weight="700" fill="#7a2219">− 3 × 2</text>';
 rects.forEach(function(r){ s+='<rect x="'+(p+r[0]*u)+'" y="'+(p+r[1]*u)+'" width="'+(r[2]*u)+'" height="'+(r[3]*u)+'" fill="'+r[4]+'" fill-opacity=".8" stroke="'+(one?r[4]:"#fff")+'" stroke-opacity="'+(one?.8:1)+'" stroke-width="'+(one?1:3)+'"/>'; });
 if(grid) rects.forEach(function(r){ for(var i=0;i<r[2];i++) for(var j=0;j<r[3];j++) s+='<rect x="'+(p+(r[0]+i)*u)+'" y="'+(p+(r[1]+j)*u)+'" width="'+u+'" height="'+u+'" fill="none" stroke="#fff" stroke-opacity=".55" stroke-width="1"/>'; });
 rects.forEach(function(r){ if(r[5]) s+='<text x="'+(p+(r[0]+r[2]/2)*u)+'" y="'+(p+(r[1]+r[3]/2)*u+5)+'" text-anchor="middle" font-size="15" font-weight="700" fill="#fff" stroke="rgba(0,0,0,.35)" stroke-width=".6">'+r[5]+'</text>'; });
 if(outlineL) s+='<path d="M'+p+' '+p+' h'+(3*u)+' v'+(2*u)+' h'+(3*u)+' v'+(2*u)+' h-'+(6*u)+'Z" fill="none" stroke="var(--ink)" stroke-width="2.5"/>';
 return s+'</svg>';
}
function wireLshape(){
 var m=0;
 function draw(){
  var M=LS_METHODS[m], g=$("#lsG").checked, u=30;
  var h='<div class="lspanel"><div class="lslab">'+(M.lab0||"Cut")+'</div>'+lsSVG(M.cut,u,g,M.missing,M.one,true)+'</div>';
  if(M.after) h+='<div class="lsarrow">→</div><div class="lspanel"><div class="lslab">'+(m===5?"Duplicate and rotate":"Rearrange")+": "+M.alab+'</div>'+lsSVG(M.after,u,g,null,M.one,m===5)+'</div>';
  $("#lsPic").innerHTML=h;
  $("#lsRead").innerHTML=M.calc+' square units<small>'+M.why+'</small>';
 }
 $$("#lsM button").forEach(function(b){b.onclick=function(){m=+b.dataset.m;$$("#lsM button").forEach(function(x){x.classList.toggle("on",x===b);});draw();};});
 $("#lsG").onchange=draw;
 draw();
}

function wireTool(t){
 if(t==="triangles") wireTriangles();
 if(t==="turns") wireTurns();
 if(t==="grid") wireGrid();
 if(t==="lshape") wireLshape();
}
