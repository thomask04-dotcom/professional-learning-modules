/* ---------------- module config ---------------- */
var M = {
 key:"3ds-k6-module-v1",
 title:"Three-dimensional Spatial Structure K–6",
 dlName:"three-dimensional-spatial-structure-reflections.txt",
 welcomeH2:"How students learn about objects, volume and capacity, K to 6",
 welcomeP:"This module follows Three-dimensional spatial structure across four stages in two strands: 3D objects (from describing familiar objects as ‘flat’, ‘round’ or ‘curved’ to naming prisms and pyramids, sketching views and working with nets) and volume (from filling and packing to litres, millilitres and the layer structure of cubic units). It covers how the outcomes build, the maths you need to teach it, the misconceptions to look for, and what the NESA teaching advice recommends.",
 tryText:"a model for each stage: which container holds more, counting the cubes you can’t see, which nets fold into a cube, and prisms with the same volume.",
 namesH3:"One focus area, two strands",
 namesP:"Three-dimensional spatial structure has the same name in every stage, with parts A and B from Stage 1. Each stage has a 3D objects strand and a volume strand (which includes capacity, or internal volume). All content also addresses the Working mathematically outcome, MAO-WM-01.",
 ideasP:"NESA explains that three-dimensional spatial structure is foundational for position and location, perspective and directions, and that volume relates to three-dimensional space in the same way that area relates to two-dimensional space. Manipulating objects and observing them from different viewpoints builds visual imagery, language and the ability to identify structural features. Six ideas run through the focus area. Select an idea to see how it develops.",
 ideasNote:"Three-dimensional spatial structure connects to Two-dimensional spatial structure (faces as 2D shapes; the row and column structure of area), Multiplicative relations (layers × cubes in a layer), Representing numbers (decimal notation for litres and millilitres) and Geometric measure (length, width and height as dimensions).",
 progP:"Objects move from being described by everyday features to being classified by their faces, edges, vertices and cross-sections, and connected to 2D views and nets. Volume moves from direct comparison, to informal units, to litres, millilitres and cubic centimetres, to the layer structure of cubic units.",
 shifts:[
  ["es1","Early Stage 1 → Stage 1","From describing objects as flat, round or curved to naming cubes, cylinders, spheres and rectangular prisms by their surfaces and faces. Volume moves from direct comparison to counting uniform informal units, including stacking cubes in layers."],
  ["s1","Stage 1 → Stage 2","From describing objects to making models and nets of prisms and pyramids, and sketching views on isometric grids. Capacity moves to litres and millilitres, and volume to cubic centimetres in layers."],
  ["s2","Stage 2 → Stage 3","From families of objects to naming prisms and pyramids by their base and uniform cross-section, and visualising nets and views. Volume is calculated as cubes in one layer × number of layers, with cubic metres, displacement and decimal capacities."]
 ],
 modelsH2:"Each stage adds models; cubes carry volume from Stage 1 to Stage 3",
 modelsP:"The bars show the stages where the syllabus or the NESA teaching advice names or uses each model. Select a model for more detail.",
 modelTips:[
  ["Compare all five kinds of container.","Shorter and holds more; taller and holds less; shorter and holds less; taller and holds more; short and holds the same as a tall one."],
  ["Build, then draw.","Building prisms from cubes gives a context for face and edge; drawing links stacking to diagrams. Some cubes will always be hidden."],
  ["Predict before building.","Ask students to predict how many cubes fit from the net of an open box. Predictions refine mental models (Battista 1999)."],
  ["Feel, don’t just look.","Explore objects in a bag or behind a screen so mental images focus on structure, not appearance."]
 ],
 sorterP:"Most misconceptions in this focus area come from four roots, and each root reappears in a new form as students move from filling containers to calculating volumes. Read each student response and choose its root.",
 rootRows:[
  ["Judging volume or capacity by one dimension or appearance","Thinks the taller container always holds more","Thinks containers of different shapes can’t hold the same amount","Thinks one-litre containers all look the same","Thinks prisms with the same volume must look the same"],
  ["Counting only what can be seen","—","Counts only the cubes visible in a model","Counts the faces of cubes rather than the cubes","Multiplies the numbers on the visible faces without the layer structure"],
  ["Confusing 3D objects with 2D shapes and representations","Calls a ball a ‘circle’ or a box a ‘square’ <span class=\"pill src-add\">Add.</span>","Calls the curved surface of a cylinder a face","Thinks any arrangement of 6 squares folds into a cube","Thinks the base of a prism is the face it rests on"],
  ["Ignoring the size of the unit","—","Says the model with more blocks is bigger, whatever the block size","Thinks 1250 mL is more than 2 L because 1250 is bigger <span class=\"pill src-add\">Add.</span>","Reads 0.375 L as 375 L or 3.75 L; says ‘centimetres cubed’"]
 ],
 sorterNote:"NESA notes that early experiences often lead students to conclude that taller containers hold more, and that volume is harder to visualise than length or area because some units are hidden by the layer structure.",
 notesTitle:"Three-dimensional Spatial Structure K–6: my reflections",
 footer:"Built from the NESA <i>Mathematics K–10 Syllabus (2022)</i> outcomes and content (Early Stage 1 to Stage 3) and the NESA syllabus support teaching advice. Items marked <span class=\"pill src-add\">Additional commentary</span> are common classroom observations, not NESA examples. Your progress and notes are saved only in this browser."
};

/* ---------------- data ---------------- */
var STAGES = {
 es1:{short:"ES1", name:"Early Stage 1", years:"Kindergarten", fa:"Three-dimensional spatial structure", col:"var(--es1)", soft:"var(--es1-soft)"},
 s1:{short:"S1", name:"Stage 1", years:"Years 1–2", fa:"Three-dimensional spatial structure A and B", col:"var(--s1)", soft:"var(--s1-soft)"},
 s2:{short:"S2", name:"Stage 2", years:"Years 3–4", fa:"Three-dimensional spatial structure A and B", col:"var(--s2)", soft:"var(--s2-soft)"},
 s3:{short:"S3", name:"Stage 3", years:"Years 5–6", fa:"Three-dimensional spatial structure A and B", col:"var(--s3)", soft:"var(--s3-soft)"}
};
var ORDER = ["es1","s1","s2","s3"];

var STAGE_CONTENT = {
es1:{
 lead:"In Kindergarten, students manipulate, describe and sort familiar objects, predict which objects will stack, and compare volumes and capacities directly by filling, pouring, packing and building. NESA stresses comparing containers that challenge the idea that taller always holds more.",
 outcomes:[["MAE-3DS-01","manipulates, describes and sorts three-dimensional objects"],["MAE-3DS-02","describes and compares volumes"]],
 content:[
  ["","3D objects: Explore familiar three-dimensional objects",["Describe the features of familiar objects: ‘flat’, ‘round’, ‘curved’","Sort objects and identify the attribute used: ‘size’, ‘shape’, ‘function’","Make and describe a variety of three-dimensional models (a robot from a ball and some blocks)","Predict the stacking capabilities of various three-dimensional objects (Reasons about spatial relations)"]],
  ["","Volume: Compare internal volume by filling and packing",["Fill and empty containers using materials such as water or sand","Use the terms ‘full’, ‘empty’ and ‘about half full’","Compare the capacities of two containers directly by filling one and pouring into the other","Compare indirectly by pouring both into two identical containers and observing the levels","Establish that containers of different shapes may hold the same amount (a tall narrow container and a short wide container)","Stack and pack blocks into defined spaces"]],
  ["","Volume: Compare volume by building",["Identify volume as the amount of space an object or substance occupies","Compare the volumes of two objects made from blocks by deconstructing one and using its parts to build a copy of the other","Use comparative language: ‘takes up more space’"]]
 ],
 know:[
  ["Volume and capacity","Volume is the amount of space occupied by an object or substance. Internal volume (capacity) is used only for containers and usually refers to liquids. Students aren’t expected to know these definitions yet."],
  ["Taller isn’t always more","Early experiences lead many students to conclude that taller containers hold more. Students need to compare containers that are shorter and hold more, taller and hold less, shorter and hold less, taller and hold more, and short and hold the same as a tall one."],
  ["Direct and indirect comparison","Direct: fill one container and pour into the other. Indirect: pour each into one of two identical containers and compare the levels."],
  ["Stacking and rolling","Predicting whether objects will stack, roll or slide draws attention to flat and curved surfaces, preparing for sorting and naming objects."],
  ["Use a range of objects","Use objects of different sizes; some students need larger objects to manipulate. Everyday moments such as packing up toys and storing objects are rich opportunities."],
  ["The word ‘container’","Students often need meaningful practice using the general word ‘container’ for bottles, jars and tubs."]
 ],
 misc:[
  {see:"Says the tall thin bottle holds more because it is taller.",name:"Taller holds more",resp:"Pour from one into the other. Compare all five kinds of pair NESA lists, including short containers that hold more. Try the tool below.",src:"n"},
  {see:"Says the water in the short wide jug became more when it was poured into a tall glass.",name:"The level shows the amount",resp:"Pour it back. Ask, <i>Did we add any? Did we take any away?</i>",src:"a"},
  {see:"Predicts a ball will stack on top of a cylinder lying on its side.",name:"Not attending to flat and curved surfaces",resp:"Try it, then ask which surfaces touch when objects stack. Sort objects into ‘stack’, ‘roll’ and ‘both’.",src:"a"},
  {see:"Calls a ball a ‘circle’ and a box a ‘square’.",name:"2D names for 3D objects",resp:"Model ‘object’ for things we can hold and ‘shape’ for flat figures. Trace a face of the box to find the square.",src:"a"}
 ],
 advice:["Use a range of objects of different sizes; some students may need larger objects to manipulate.","Encourage students to describe objects as ‘flat’, ‘round’ or ‘curved’, preparing them to sort by size, shape or function.","Have students predict the stacking capabilities of objects, then test.","Compare containers that are shorter and hold more, taller and hold less, shorter and hold less, taller and hold more, and short but hold the same as a tall container.","Extend students who understand volume by exploring different ways of stacking 24 cubes (3 by 2 by 4, or 6 by 2 by 2)."],
 vocab:["object","shape","size","curved","flat","pointy","round","roll","slide","stack","container","liquid","empty","full","about half full","volume","space","has more","has less","will hold more","will hold less","takes up more space"],
 check:{title:"Quick check (built from the syllabus and NESA advice)",steps:["Show a tall narrow container and a short wide container that hold the same amount. Ask, <i>Which holds more? How could we check?</i> Try the tool below.","Ask the student to pour from one into the other and describe what happened, using ‘full’, ‘empty’ or ‘about half full’.","Give a set of objects. Ask, <i>Which of these will stack? Which will roll? Why?</i>","Build two models from blocks. Ask, <i>Which takes up more space? How do you know?</i>"]},
 tool:"containers",
 quiz:[
  {q:"Which comparison does NESA suggest to move students beyond ‘taller holds more’?",o:["Only containers of the same height","Containers that are shorter and hold more, taller and hold less, and short but hold the same as a tall one","Only measuring in litres","Using pictures of containers"],a:1,why:"Students need direct comparisons that contradict the belief that height alone decides capacity."},
  {q:"How can students compare the capacities of two containers indirectly?",o:["Look at them closely","Pour the contents of each into one of two identical containers and compare the levels","Weigh them","Measure their heights"],a:1,why:"Identical containers make the levels directly comparable."}
 ]
},
s1:{
 lead:"In Years 1 and 2, students name and describe cubes, cylinders, spheres and rectangular prisms using surface, face, edge and vertex, and measure capacity and volume with uniform informal units, including stacking cubes in layers to build rectangular prisms.",
 outcomes:[["MA1-3DS-01","recognises, describes and represents familiar three-dimensional objects"],["MA1-3DS-02","measures, records, compares and estimates internal volumes (capacities) and volumes using uniform informal units"]],
 content:[
  ["A","3D objects: Recognise familiar three-dimensional objects",["Use the term ‘three-dimensional’ for objects in the classroom, landforms and outdoor spaces","Distinguish objects (3D, a sculpture) from shapes (2D, a photograph)","Identify and name cubes, cylinders, spheres and rectangular prisms"]],
  ["A","3D objects: Sort and describe three-dimensional objects",["Manipulate and describe familiar objects: blocks, yidaki, clapsticks, soccer balls, tissue boxes","Use the term ‘surface’: a cylinder has a curved surface and two flat surfaces","Sort objects by obvious features (objects with curved surfaces)","Use ‘face’ for the flat surfaces of objects with straight edges","Select and name an object from a description: find an object with six square faces"]],
  ["A","Volume: Measure internal volumes of containers by filling",["Count how many times a smaller container can be filled and emptied into the container being measured","Select appropriate units: cups rather than teaspoons to fill a bucket","Explain the relationship between unit size and the number of units: more cups than ice-cream containers (Reasons about relations)","Explain why containers of different shapes may have the same internal volume (Reasons about relations)","Estimate by referring to the number and type of unit, and check"]],
  ["A","Volume: Measure internal volume by packing",["Pack cubic units into rectangular containers with no gaps","Recognise that cubes pack better than other objects (Reasons about spatial structure)","Estimate and measure by counting the units used (the number of blocks a box holds)","Explain that gaps affect the accuracy of the measurement"]],
  ["A","Volume: Construct volumes using cubes",["Explore different rectangular prisms made from a given number of cubes","Devise and explain strategies for stacking and counting units: make layers with no gaps (Reasons about spatial structure)","Record volumes by number and type of unit (a prism 2 cubes high, 2 wide and 4 long)"]],
  ["B","3D objects: Describe the features of three-dimensional objects",["Describe prisms using ‘face’, ‘edge’ and ‘vertex’","Make simple models (a sphere from plasticine)","Recognise flat surfaces as 2D shapes: the faces of a cube are all squares"]],
  ["B","Volume: Compare containers by filling and packing",["Make and use a device calibrated in informal units: mark a bottle as each cup of water is added","Compare, order and record the capacities of two or more containers","Estimate by referring to the number and type of unit"]],
  ["B","Volume: Compare volumes using uniform informal units",["Estimate the volumes of models and check by counting the blocks","Compare models with different appearances, recognising when they have the same volume (Reasons about spatial structure)","Record comparisons with drawings, numerals and words, naming the units","Explain that models with the same number of units may have different volumes, depending on the size of the units (Reasons about spatial relations)"]]
 ],
 know:[
  ["Faces and surfaces","A face is a flat surface with only straight edges, as in prisms and pyramids: a cube has six faces. Curved surfaces (cones, cylinders, spheres) are not faces, and nor are flat surfaces with curved boundaries, such as the circular ends of a cylinder."],
  ["Edges and vertices","An edge is the interval where two faces meet. A vertex (plural vertices) is where three or more faces meet, or where two straight sides of a 2D shape meet. Teach these with examples and non-examples."],
  ["Continuous and discrete","Students need experience filling containers with continuous materials, such as water, and discrete objects, such as marbles."],
  ["Hidden units","Volume is harder to visualise than length or area because some units are hidden by the layer structure. The row and column structure of area helps students understand three-dimensional packing."],
  ["Length, width, height … or depth?","The labels depend on orientation and context: the depth of a pool, the height of a building. For a block, ‘height’ depends on how it is positioned. Introduce the terms with rectangular prisms."],
  ["Capacity and internal volume","Use ‘capacity’ and ‘internal volume’ interchangeably. Capacity isn’t taught as a separate concept from volume until Stage 4."]
 ],
 misc:[
  {see:"Counts 12 cubes in a 3 by 2 by 3 prism: only the cubes that can be seen.",name:"Ignoring hidden cubes",resp:"Build it, then take it apart layer by layer. Count the cubes in one layer and the number of layers. Try the tool below.",src:"n"},
  {see:"Says a cylinder has three faces.",name:"Curved and flat surfaces called faces",resp:"A face is a flat surface with only straight edges. A cylinder has one curved surface and two flat surfaces.",src:"n"},
  {see:"Says the model made of 20 small cubes is bigger than one made of 12 large blocks.",name:"Ignoring the size of the unit",resp:"Compare the models directly. Record the type of unit as well as the number. This is a Stage 1 B reasoning point.",src:"n"},
  {see:"Packs marbles into a box and says it holds 40, ignoring the gaps.",name:"Using units that don’t pack",resp:"Pack the same box with cubes. Cubes pack better than other objects in rectangular containers.",src:"n"},
  {see:"Says a tall model and a flat model can’t have the same volume because they look different.",name:"Judging volume by appearance",resp:"Rebuild one model into the other using the same blocks.",src:"n"},
  {see:"Uses a teaspoon to fill a bucket and loses count.",name:"Choosing an inappropriate unit",resp:"Discuss which unit suits the container: cups rather than teaspoons to fill a bucket.",src:"n"}
 ],
 advice:["Give students experience filling containers with continuous materials, such as water, and discrete objects, such as marbles.","Use building rectangular prisms from cubes as a context for using face and edge; drawing helps link stacking to diagrams and plans.","Construct and draw different prisms made from a fixed number of cubes, such as 24, to build familiarity with the layer structure.","Emphasise systematic packing: counting the blocks in a row, the rows in a layer, then the layers.","Use examples and non-examples to teach edge and vertex.","Introduce length, width and height when students work with rectangular prisms."],
 vocab:["object","three-dimensional","cube","cylinder","sphere","rectangular prism","surface","flat surface","curved surface","face","edge","vertex","prism","internal volume","capacity","has more","has less","layer","row","measure","estimate"],
 check:{title:"Quick checks (built from the syllabus examples)",steps:["Show a prism of cubes 2 high, 2 wide and 4 long. Ask, <i>How many cubes? How did you count them?</i> Try the tool below with other prisms.","Ask, <i>Find an object with six square faces.</i> Then, <i>How many faces does a cylinder have?</i>","Give two containers of different shapes that hold the same amount. Ask, <i>Could these hold the same amount? How could we check?</i>","Ask, <i>Would you need more cups or more ice-cream containers to fill this bucket? Why?</i>"]},
 tool:"cubes",
 quiz:[
  {q:"Which of these is a face, as NESA defines it?",o:["The curved surface of a cylinder","The circular end of a cylinder","A square surface of a cube","The surface of a sphere"],a:2,why:"A face is a flat surface with only straight edges. Curved surfaces and flat surfaces with curved boundaries aren’t faces."},
  {q:"Why is volume harder to visualise than length or area?",o:["It uses bigger numbers","Some units are hidden by the layer structure","It needs a ruler","Cubes are hard to count"],a:1,why:"In a model or drawing, inside and back cubes can’t be seen, so students need the layer structure."},
  {q:"What prior knowledge helps students understand 3D packing?",o:["Counting by ones","The row and column structure of area","Telling time","Naming 2D shapes"],a:1,why:"Rows × columns gives a layer; layers stack to make the prism."}
 ]
},
s2:{
 lead:"In Years 3 and 4, students make models and nets of prisms, pyramids and cylinders, sketch objects showing depth and from different views, and use isometric grids. Capacity is measured in litres and millilitres, and volume in cubic centimetres described in layers.",
 outcomes:[["MA2-3DS-01","makes and sketches models and nets of three-dimensional objects including prisms and pyramids"],["MA2-3DS-02","estimates, measures and compares capacities (internal volumes) using litres, millilitres and volumes using cubic centimetres"]],
 content:[
  ["A","3D objects: Make models to compare and describe key features",["Identify differences between prisms (including cubes), pyramids and cylinders: a pyramid has triangular faces and a cube does not","Construct models with plasticine, connecting cubes, magnetic shapes or online tools, identifying features","Deconstruct everyday packages that are prisms to create nets (cut up tissue boxes)","Investigate the variety of nets that make a particular prism, including nets that do and don’t make a cube"]],
  ["A","Volume: Measure and order containers using litres",["Recognise the need for formal units","Measure to the nearest litre","Relate the litre to everyday containers (milk cartons)","Recognise that one-litre containers can be a variety of shapes: milk cartons, dilly bags, ice-cream containers (Reasons about spatial structure)","Record using L; estimate using one litre as a benchmark and check"]],
  ["A","Volume: Compare objects using familiar metric units of volume",["Construct rectangular prisms from cubic-centimetre blocks and describe them in layers (2 layers of 10)","Record in numerals and words (6 cubic centimetres)","Compare volumes by counting blocks or using the row, column, layer structure"]],
  ["B","3D objects: Connect objects and two-dimensional representations",["Identify faces, vertices and edges of prisms and pyramids, and the surfaces and boundaries of cylinders, from images","Sketch rectangular prisms and pyramids showing depth","Sketch objects from top, front and side views (Reasons about spatial relations)","Draw views of connecting-cube models on isometric grids","Interpret drawings to make models from connecting cubes (Reasons about spatial visualisation)"]],
  ["B","Volume: Use scaled instruments to measure capacities",["Recognise the need for a unit smaller than the litre","Relate 1000 millilitres to one litre","Relate benchmarks to containers: 250 mL juice containers; a teaspoon is about 5 mL","Calibrate a container in 100 mL increments","Record using mL and L: 1250 mL = 1 litre 250 millilitres","Compare, order and estimate capacities, using benchmarks such as 250 mL"]]
 ],
 know:[
  ["Nets","A net is a diagram in which the edges of a polyhedron are shown. A cube has 11 distinct nets and a regular tetrahedron has 2. Spheres, cylinders and cones aren’t polyhedra and don’t have nets in this sense."],
  ["Families, not names","Prisms and pyramids are treated as classes in Stage 2. Formal names such as ‘triangular prism’ and ‘square pyramid’ are introduced in Stage 3."],
  ["Isometric drawings","Isometric (Greek: equal measure) grids help students draw 3D objects. A cube’s square faces are drawn as rhombuses: as they appear, not as we know them to be. Photographing a cube from different angles and finger-tracing the shapes helps."],
  ["Volume and capacity","Volume is the space an object or substance occupies, usually in cubic units. Capacity is the amount a container can hold, in mL, L and kL. We talk about the capacity of a dam and the volume of water in it."],
  ["Estimate, then refine","After an initial estimate, let students adjust it after adding one cup of liquid. One cup is about a quarter of a litre (250 mL). Avoid images of containers that aren’t to scale."],
  ["Recording units","Record cubic centimetres in words or informal abbreviations (cc) in Stage 2; cm³ is introduced in Stage 3."]
 ],
 misc:[
  {see:"Thinks any arrangement of six squares will fold into a cube.",name:"Every six-square shape is a net",resp:"Cut out and fold several arrangements. Sort them into those that make a cube and those that don’t. Try the nets tool below.",src:"n"},
  {see:"Draws a cube on isometric paper and says the faces are wrong because they aren’t squares.",name:"Drawing what we know, not what we see",resp:"Photograph a cube from different angles and finger-trace the faces. Faces are drawn as they appear.",src:"n"},
  {see:"Says a 1 L milk carton and a 1 L ice-cream container can’t hold the same amount.",name:"Capacity judged by shape",resp:"Pour one into the other. One-litre containers can be a variety of shapes (a Stage 2 A reasoning point).",src:"n"},
  {see:"Says 1250 mL is more than 2 L because 1250 is a bigger number.",name:"Ignoring the size of the unit",resp:"Convert to the same unit: 1250 mL = 1 litre 250 millilitres; 2 L = 2000 mL.",src:"a"},
  {see:"Calls a square pyramid a ‘triangle’ because its sides are triangles.",name:"Naming objects by one face",resp:"Contrast the object with the 2D shape. A pyramid has a base and triangular faces meeting at an apex.",src:"a"},
  {see:"Draws only the front face when asked for the top view of a model.",name:"Views not distinguished",resp:"Look from directly above, in front and to the side, or photograph each view, then sketch.",src:"n"}
 ],
 advice:["Investigate the variety of nets of a cube by cutting up packages and folding arrangements of six squares.","Use digital technologies for students who can’t access physical manipulatives to construct models.","Have students take photos of a cube from different angles and finger-trace the faces before drawing on isometric grids.","Use one cup as a benchmark of a quarter of a litre (250 mL), and let students adjust estimates after adding one cup.","Avoid images of containers that aren’t to scale.","Treat prisms and pyramids as classes; formal names come in Stage 3."],
 vocab:["object","2D shape","3D object","cone","cube","cylinder","prism","pyramid","sphere","surface","flat surface","curved surface","curved boundary","face","edge","vertex","vertices","net","top view","front view","side view","isometric grid paper","isometric drawing","depth","capacity","container","litre","millilitre","volume","layers","cubic centimetre","estimate","measure"],
 check:{title:"Quick checks (built from the syllabus examples and NESA advice)",steps:["Show several arrangements of six squares. Ask, <i>Which will fold to make a cube? How do you know?</i> Try the nets tool below.","Show a connecting-cube model. Ask the student to sketch the top, front and side views.","Show a 1 L milk carton and a 1 L ice-cream container. Ask, <i>Which holds more?</i>","Ask, <i>About how many cups would fill this 1 L bottle? How many millilitres in each cup?</i>"]},
 tool:"nets",
 quiz:[
  {q:"How many distinct nets does a cube have?",o:["6","8","11","24"],a:2,why:"There are 11 distinct nets of a cube (and 2 of a regular tetrahedron)."},
  {q:"Why does a cube look like it has rhombus faces in an isometric drawing?",o:["Isometric drawings are inaccurate","Faces are drawn as they appear to the eye, not as we know them to be","The cube is stretched","It isn’t a cube"],a:1,why:"NESA suggests photographing and finger-tracing to help students understand this."},
  {q:"When are formal names such as ‘triangular prism’ introduced?",o:["Early Stage 1","Stage 1","Stage 2","Stage 3"],a:3,why:"In Stage 2, prisms and pyramids are treated as classes; specific names come in Stage 3."}
 ]
},
s3:{
 lead:"In Years 5 and 6, students name prisms and pyramids by their base, recognise uniform cross-sections, visualise views and nets, and construct skeletal models. Volume is calculated as the number of cubes in one layer × the number of layers, in cm³ and m³, with displacement and decimal capacities.",
 outcomes:[["MA3-3DS-01","visualises, sketches and constructs three-dimensional objects, including prisms and pyramids, making connections to two-dimensional representations"],["MA3-3DS-02","selects and uses the appropriate unit to estimate, measure and calculate volumes and capacities"]],
 content:[
  ["A","3D objects: Compare, describe and name prisms and pyramids",["Compare properties: prisms have a uniform cross-section parallel to the base and pyramids do not","Prisms have 2 identical bases; pyramids have a base and an apex","Name prisms and pyramids by the shape of their base (rectangular prism, square pyramid)"]],
  ["A","3D objects: Connect objects with two-dimensional representations",["Visualise and sketch objects from top, front and side views (Reasons about spatial orientation)","Examine a diagram to decide whether it is the net of a closed object","Visualise and sketch nets for given objects","Visualise and name prisms and pyramids from their nets (Reasons about spatial visualisation)"]],
  ["A","Volume: Capacity, displacement and decimals",["Select appropriate units: millilitres for a glass, litres for a bucket","Observe the change in water level when an object is placed in water; compare volumes by marking the change","Recognise equivalence: 375 mL is the same as 0.375 L; 8.7 L is 8 litres and 700 millilitres","Record measurements to 3 decimal places (1.275 L)"]],
  ["B","3D objects: Construct prisms and pyramids",["Create skeletal models with toothpicks and modelling clay, or straws and tape","Construct models from drawings of different views"]],
  ["B","Volume: Use cubic metres",["Recognise the need for a unit larger than the cubic centimetre","Construct and use the cubic metre; estimate and measure the size of the classroom"]],
  ["B","Volume: Recognise the multiplicative structure for finding volume",["Describe length, width and height as the dimensions of a rectangular prism","Describe arrangements in layers: 5 layers of 8 cubes, each layer 4 rows of 2","Establish the relationship between the number of cubes in one layer and the number of layers (Reasons about spatial structure)"]],
  ["B","Volume: Find volumes of rectangular prisms in cm³ and m³",["Construct prisms from cubic-centimetre blocks and determine their volumes","Explain that objects with the same volume may be different shapes (Reasons about spatial structure)","Record in words: volume = number of cubes in one layer × number of layers","Recognise that prisms with the same volume may have different dimensions: volumes of 24 cubes (Reasons about spatial structure)","Calculate volumes in cm³ and m³"]]
 ],
 know:[
  ["Base and cross-section","Prisms have two bases of the same shape and size. The base is the shape of the uniform cross-section, not necessarily the face it rests on. Pyramids have one base and triangular faces meeting at the apex, and no uniform cross-section."],
  ["Right and oblique prisms","In a right prism, the joining faces are rectangles; in an oblique prism, they are parallelograms. Spheres, cones and cylinders are neither prisms nor pyramids. A triangular pyramid is also called a tetrahedron."],
  ["Schematic, not pictorial","Schematic representations, like the plan of a house, encode spatial relations and are associated with success in problem solving; detailed pictorial images are not (Hegarty and Kozhevnikov 1999)."],
  ["Visualising isn’t only visual","Mental images can be formed by touch or sound. Exploring objects in a bag or behind a screen builds images that focus on structure. Spatial imagination among people who are blind relies on tactile and auditory activity (Healy and Fernandes 2014)."],
  ["Row × column × layer","Finding the volume of prisms relies on the row by column structure of each layer, multiplied by the number of layers. Predicting from the net of an open box before building refines students’ mental models (Battista 1999)."],
  ["Reading units","Read m³ as ‘cubic metres’ and cm³ as ‘cubic centimetres’, not ‘metres cubed’. ‘cc’ isn’t internationally accepted; cm³ is. Relate the cubic metre to the metre and the square metre."]
 ],
 misc:[
  {see:"Says the base of a triangular prism lying on a rectangular face is a rectangle.",name:"The base is the bottom face",resp:"The base is the shape of the uniform cross-section. Slice (or imagine slicing) parallel to the triangular ends.",src:"n"},
  {see:"Finds the volume of a prism by counting the squares on the visible faces.",name:"Counting surface squares",resp:"Build the prism and take it apart in layers. Volume counts cubes, not faces.",src:"a"},
  {see:"Says two prisms of 24 cubes can’t have the same volume because one is long and flat and the other is a tower.",name:"Same volume, same shape",resp:"Build both from the same 24 cubes. Prisms with the same volume can have different dimensions. Try the tool below.",src:"n"},
  {see:"Writes 375 mL as 3.75 L.",name:"Decimal places in metric units",resp:"1 L = 1000 mL, so 375 mL is 375 thousandths of a litre: 0.375 L. Use a place value chart.",src:"a"},
  {see:"Uses length × width × height but can’t explain why.",name:"A formula without the layer structure",resp:"Record in words: cubes in one layer × number of layers. Link length × width to the area of the base layer.",src:"n"},
  {see:"Reads 12 m³ as “12 metres cubed”.",name:"Reading volume units",resp:"NESA advises reading m³ as ‘cubic metres’ and cm³ as ‘cubic centimetres’.",src:"n"}
 ],
 advice:["Let students explore objects with their hands, without looking (in a bag or behind a screen), to build mental images focused on structure.","Model prisms by stacking uniform objects, and pyramids by stacking seriated shapes, to explore cross-sections.","Use skeletal models to focus on edges and vertices, and nets to focus on faces.","Ask students to predict the number of cubes that will fit in an open box from its net before building it.","Relate the cubic metre to the metre and the square metre; construct one and estimate the classroom’s volume.","Use digital technologies for students who can’t access physical manipulatives."],
 vocab:["apex","base","cube","depth","edge","face","vertex","vertices","net","prism","pyramid","rectangular prism","triangular prism","square pyramid","tetrahedron","uniform cross-section","top view","front view","side view","capacity","container","cubic centimetre","cubic metre","dimensions","length","width","height","layers","litre","millilitre","volume","displacement"],
 check:{title:"Quick checks (built from the syllabus examples and NESA advice)",steps:["Show the net of an open box 4 by 3 with sides 2 high. Ask, <i>How many cubes will fit? How do you know?</i> Then build it.","Ask, <i>Make as many different rectangular prisms as you can with 24 cubes. Describe each in layers.</i> Try the tool below.","Show a triangular prism resting on a rectangular face. Ask, <i>What is the base of this prism? Why?</i>","Ask, <i>Write 375 mL in litres. Read 1.275 L aloud.</i>"]},
 tool:"prisms",
 quiz:[
  {q:"What is the base of a prism?",o:["The face it rests on","The shape of the uniform cross-section","The largest face","Always a rectangle"],a:1,why:"The base is the shape of the uniform cross-section, not necessarily the face on which it is resting."},
  {q:"How does NESA suggest recording the method for the volume of a rectangular prism in Stage 3?",o:["V = l × w × h","In words: number of cubes in one layer × number of layers","Count every cube","Length + width + height"],a:1,why:"Methods are recorded in words; algebraic formulas come in Stage 4."},
  {q:"Which kind of representation is associated with success in mathematical problem solving?",o:["Detailed pictorial images","Schematic representations that encode spatial relations","Colourful drawings","Photographs"],a:1,why:"Hegarty and Kozhevnikov (1999) found schematic representations were associated with success; pictorial ones were negatively correlated."}
 ]
}
};

var IDEAS = [
 {t:"Objects are described by their surfaces",d:"Flat and curved surfaces, faces, edges and vertices describe and classify objects.",s:{es1:"Flat, round and curved; which objects stack or roll.",s1:"Surface, face, edge and vertex; a cube has six square faces.",s2:"Prisms, pyramids and cylinders compared by their features.",s3:"Prisms and pyramids named by their base; uniform cross-sections."}},
 {t:"3D objects connect to 2D representations",d:"Faces, nets, views and drawings represent objects in two dimensions.",s:{es1:"Making and describing models.",s1:"Flat surfaces recognised as 2D shapes.",s2:"Nets from packages; isometric drawings; top, front and side views.",s3:"Visualising nets and views; deciding whether a diagram is a net."}},
 {t:"Volume is the space an object occupies",d:"Volume and capacity are compared before they are measured.",s:{es1:"‘Takes up more space’; direct comparison by building.",s1:"Uniform informal units; cubes pack without gaps.",s2:"Cubic centimetres described in layers.",s3:"Cubic metres; displacement shows volume takes up space."}},
 {t:"Shape doesn’t decide volume",d:"Containers and objects of different shapes can hold or occupy the same amount.",s:{es1:"Tall narrow and short wide containers holding the same amount.",s1:"Models with different appearances and the same volume.",s2:"One-litre containers come in a variety of shapes.",s3:"Prisms with the same volume and different dimensions."}},
 {t:"Volume has a layer structure",d:"Rows and columns make a layer; layers stack to make a prism.",s:{es1:"Stacking and packing blocks.",s1:"Make layers with no gaps; count the hidden cubes.",s2:"Row, column and layer structure in cubic centimetres.",s3:"Cubes in one layer × number of layers."}},
 {t:"The size of the unit matters",d:"Bigger units mean fewer of them; formal units allow accurate communication.",s:{es1:"Full, empty, about half full.",s1:"More cups than ice-cream containers; block size affects volume.",s2:"Litres and millilitres; 1000 mL = 1 L; benchmarks.",s3:"Choosing units; decimals to 3 places (0.375 L)."}}
];

var ASPECTS = [
 {k:"o",l:"Outcomes",v:{es1:"<b>MAE-3DS-01</b> manipulates, describes and sorts 3D objects<br><b>MAE-3DS-02</b> describes and compares volumes",s1:"<b>MA1-3DS-01</b> recognises, describes and represents familiar 3D objects<br><b>MA1-3DS-02</b> measures, records, compares and estimates capacities and volumes using uniform informal units",s2:"<b>MA2-3DS-01</b> makes and sketches models and nets of 3D objects including prisms and pyramids<br><b>MA2-3DS-02</b> estimates, measures and compares capacities using L and mL, and volumes using cubic centimetres",s3:"<b>MA3-3DS-01</b> visualises, sketches and constructs 3D objects, making connections to 2D representations<br><b>MA3-3DS-02</b> selects and uses the appropriate unit to estimate, measure and calculate volumes and capacities"}},
 {k:"s",l:"Objects",v:{es1:"Familiar objects described as flat, round, curved",s1:"Cubes, cylinders, spheres, rectangular prisms",s2:"Prisms, pyramids, cylinders (as families)",s3:"Named prisms and pyramids (by base)"}},
 {k:"r",l:"Representations",v:{es1:"Models",s1:"Simple models; faces as 2D shapes",s2:"Nets; sketches showing depth; views; isometric grids",s3:"Visualised nets and views; skeletal models; models from drawings"}},
 {k:"v",l:"Volume and capacity",v:{es1:"Direct and indirect comparison by filling, packing, building",s1:"Uniform informal units; calibrated bottles; prisms of cubes",s2:"L and mL; cubic centimetres in layers",s3:"cm³ and m³; layer × layers; displacement; decimals"}},
 {k:"l",l:"Language",v:{es1:"flat, curved, stack, roll, full, empty, about half full, takes up more space",s1:"surface, face, edge, vertex, capacity, internal volume, layer",s2:"prism, pyramid, net, top/front/side view, litre, millilitre, ‘cc’ in words",s3:"base, apex, uniform cross-section, dimensions; cm³ and m³ read as ‘cubic …’"}}
];

var MODELS = [
 {n:"Everyday objects and packages",w:"blocks, balls, tissue boxes, yidaki",s:0,e:2,d:"Familiar objects to manipulate, describe and sort; packages deconstructed into nets in Stage 2."},
 {n:"Water, sand and containers",w:"pouring, filling, emptying",s:0,e:3,d:"Direct and indirect comparison in Early Stage 1; informal units in Stage 1; litres and millilitres in Stage 2; displacement in Stage 3."},
 {n:"Blocks and connecting cubes",w:"stacking, packing and layers",s:0,e:3,hi:true,d:"Building and comparing models, packing boxes, constructing prisms in layers and calculating volume."},
 {n:"Calibrated containers",w:"marked bottles and jugs",s:1,e:2,d:"Marking a bottle as each cup is added in Stage 1; calibrating in 100 mL increments in Stage 2."},
 {n:"Plasticine and modelling materials",w:"simple models",s:1,e:2,d:"Making spheres and other objects; constructing prisms and pyramids."},
 {n:"Nets",w:"from packages and paper",s:2,e:3,d:"Cutting up packages; investigating the 11 nets of a cube; visualising nets and predicting volumes from nets of open boxes."},
 {n:"Isometric grids and digital tools",w:"drawings and views",s:2,e:3,d:"Drawing views of cube models; digital tools for students who can’t access physical manipulatives."},
 {n:"Cubic-centimetre blocks",w:"formal units of volume",s:2,e:3,d:"Prisms described in layers in Stage 2; volume calculated in Stage 3."},
 {n:"Skeletal models",w:"toothpicks and clay, straws and tape",s:3,e:3,d:"Focus attention on edges and vertices, while nets emphasise faces."},
 {n:"Feely bags and screens",w:"exploring by touch",s:3,e:3,d:"Building mental images of structure rather than appearance."},
 {n:"A constructed cubic metre",w:"for large volumes",s:3,e:3,d:"Estimating and measuring large volumes such as the classroom."},
 {n:"Stacked and seriated shapes",w:"modelling prisms and pyramids",s:3,e:3,d:"Uniform stacks model prisms; stacks of decreasing size model pyramids and show non-uniform cross-sections."}
];

var ROOTS = ["Judging volume or capacity by one dimension or appearance","Counting only what can be seen","Confusing 3D objects with 2D shapes and representations","Ignoring the size of the unit"];
var SCENARIOS = [
 {st:"es1",q:"Noah says the tall thin bottle holds more water than the wide bowl because it is taller.",a:0,why:"Noah judges capacity by height. Pour one into the other."},
 {st:"es1",q:"Isla calls the ball a circle.",a:2,why:"Isla uses a 2D name for a 3D object. Model ‘object’ and ‘shape’."},
 {st:"s1",q:"Tom counts 12 cubes in a 3 by 2 by 3 prism.",a:1,why:"Tom counts only the visible cubes. Take the prism apart in layers."},
 {st:"s1",q:"Grace says her 20-block model is bigger than Sam’s 12-block model, but Sam used larger blocks.",a:3,why:"Grace ignores the size of the unit. Compare the models directly."},
 {st:"s1",q:"Leo says a cylinder has three faces.",a:2,why:"Curved surfaces and flat surfaces with curved boundaries aren’t faces."},
 {st:"s2",q:"Maya says every shape made of six squares folds into a cube.",a:2,why:"Only 11 arrangements are nets of a cube. Fold and test."},
 {st:"s2",q:"Ari says the 1 L milk carton holds more than the 1 L ice-cream container because it is taller.",a:0,why:"One-litre containers can be a variety of shapes."},
 {st:"s2",q:"Zara says 1250 mL is more than 2 L.",a:3,why:"Zara compares numbers without the units. 2 L = 2000 mL."},
 {st:"s3",q:"Eli counts the squares on the faces he can see to find the volume of a prism.",a:1,why:"Volume counts cubes, including hidden ones: cubes in one layer × number of layers."},
 {st:"s3",q:"Ruby says a long, flat prism of 24 cubes has less volume than a tower of 24 cubes.",a:0,why:"Prisms with the same volume can have different dimensions."},
 {st:"s3",q:"Jai says the base of a triangular prism lying on its side is a rectangle.",a:2,why:"The base is the shape of the uniform cross-section, not the face it rests on."},
 {st:"s3",q:"Sophie writes 375 mL as 3.75 L.",a:3,why:"1 L = 1000 mL, so 375 mL = 0.375 L."}
];

var PROMPTS = [
 ["Looking across the progression","Which of the six big ideas does your stage depend on most? Which earlier stage is it built on?"],
 ["Looking across the progression","How does the row and column structure of area, taught in Two-dimensional spatial structure, set up the layer structure of volume in your school?"],
 ["Looking across the progression","Where do your students meet containers that challenge ‘taller holds more’? Is it only in Kindergarten?"],
 ["Your students","Run the quick check for your stage with three students: one secure, one you’re unsure of and one who is struggling. What did you learn that you didn’t expect?"],
 ["Your students","Which root misconception do you see most often? Where in the earlier stages might it have started?"],
 ["Your students","NESA notes that visualising isn’t only visual. How could you include students with vision impairment in visualising tasks?"],
 ["Your practice","How often do students build and handle objects, rather than looking at pictures of them?"],
 ["Your practice","Do you use schematic representations, like plans and nets, as well as pictures? How could you use them more?"],
 ["Your practice","How consistently do you and your colleagues use ‘face’, ‘surface’, ‘capacity’ and ‘volume’?"]
];
var TODOS = ["Choose one quick check to use with my class in the next fortnight","Bring two student work samples to the next meeting that show a misconception from this module","Agree as a stage team on one shared model or piece of language to use consistently"];

var WM_ELEMENTS = [
 ["Understanding and fluency","Students build conceptual understanding alongside fluent recall and procedures."],
 ["Exploring and connecting","Students explore ideas and connect concepts and representations."],
 ["Choosing and applying techniques","Students choose and apply mathematical techniques to solve problems."],
 ["Communicating","Students communicate their thinking clearly and coherently."],
 ["Reasoning","Students reason about and justify their thinking."]
];

var WM = {
 es1:{
  tags:[["Predict the stacking capabilities of various three-dimensional objects","Reasons about spatial relations"]],
  before:{task:"Colour the container that holds more.<br><br>(a picture of a big bucket and a small cup)",lim:["The answer is obvious from size","Pictures, not real containers","No pouring, predicting or explaining"]},
  after:{task:"“Here are a tall thin bottle and a short wide jug. Which do you think holds more? How could we find out?” Students predict, pour and explain.",enable:"Use containers that are clearly different first, then closer ones.",extend:"“Find a container that is shorter than the bottle but holds more.”",listen:"‘Taller doesn’t always mean more’; pouring one into the other; ‘it overflowed, so…’; ‘full’, ‘empty’, ‘about half full’.",el:["Exploring and connecting","Choosing and applying techniques","Communicating","Reasoning"]}
 },
 s1:{
  tags:[["Recognise and explain the relationship between the size of a unit and the number of units needed","Reasons about relations"],["Recognise and explain why containers of different shapes may have the same internal volume","Reasons about relations"],["Recognise that cubes pack better than other objects in rectangular containers","Reasons about spatial structure"],["Devise and explain strategies for stacking and counting units to form a rectangular prism","Reasons about spatial structure"],["Compare models with different appearances, recognising when they have the same volume","Reasons about spatial structure"],["Explain that models made of the same number of units may have different volumes depending on the size of the units","Reasons about spatial relations"]],
  before:{task:"How many cubes?<br><br>(a picture of a 2 by 2 by 2 cube model)",lim:["One answer","Hidden cubes may not be considered","No building or comparing"]},
  after:{task:"“Build as many different rectangular prisms as you can with 12 cubes. Record each one and explain how you counted.”",enable:"Start with 6 cubes; build a layer first.",extend:"“Which prisms could you also make with 24 cubes? What changes?”",listen:"‘Make a layer, then stack’; counting a layer and adding layers; ‘it looks different but has the same number of cubes’.",el:["Exploring and connecting","Choosing and applying techniques","Communicating","Reasoning"]}
 },
 s2:{
  tags:[["Recognise that one-litre containers can be a variety of shapes","Reasons about spatial structure"],["Create sketches of three-dimensional objects from different views, including top, front and side views","Reasons about spatial relations"],["Interpret given drawings to make models of three-dimensional objects using connecting cubes","Reasons about spatial visualisation"]],
  before:{task:"Is this a net of a cube? Yes / No<br><br>(one cross-shaped net)",lim:["One net, one expected answer","No investigation of other nets","No reasoning about why"]},
  after:{task:"“How many different arrangements of six squares can you find that fold into a cube? How do you know you’ve found them all?”",enable:"Give students a cube to roll across paper, tracing each face.",extend:"“Which arrangements don’t work? What do they have in common?”",listen:"‘Four in a row with one on each side’; ‘two squares would overlap’; checking for repeats by turning or flipping.",el:["Exploring and connecting","Choosing and applying techniques","Communicating","Reasoning"]}
 },
 s3:{
  tags:[["Visualise and sketch three-dimensional objects from different views, including top, front and side views","Reasons about spatial orientation"],["Visualise and name prisms and pyramids, given representations of their nets","Reasons about spatial visualisation"],["Establish the relationship between the number of cubes in one layer and the number of layers to find the volume of a rectangular prism","Reasons about spatial structure"],["Explain that objects with the same volume may be different shapes","Reasons about spatial structure"],["Recognise that rectangular prisms with the same volume may have different dimensions","Reasons about spatial structure"]],
  before:{task:"Find the volume.<br><br>Length 4 cm, width 3 cm, height 2 cm.<br>V = ____",lim:["A procedure without the layer structure","One prism, one answer","No reasoning or comparison"]},
  after:{task:"“A box holds exactly 24 centimetre cubes. What could its dimensions be? Find them all and describe each in layers.”",enable:"Build with cubes, one layer at a time.",extend:"“Which box needs the least cardboard? Explain.”",listen:"‘6 in a layer, 4 layers’; factors of 24; ‘same volume, different shapes’; systematic listing.",el:["Exploring and connecting","Choosing and applying techniques","Communicating","Reasoning"]}
 }
};

var CLOSED = [
 {st:"s1",task:"How many faces does a cube have?",moves:[
  {m:"Who is correct?",t:"“Ali says a cylinder has three faces. Bea says it has none. Who is correct? Why?”",el:["Reasoning","Communicating"]},
  {m:"Same and different",t:"“What is the same and what is different about a cube and a rectangular prism?”",el:["Exploring and connecting","Communicating"]},
  {m:"Always, sometimes, never",t:"“The faces of a rectangular prism are squares. Always, sometimes or never true?”",el:["Reasoning","Exploring and connecting"]},
  {m:"Open it up",t:"“Find objects in the classroom with 6 faces. Are they all the same kind of object?”",el:["Choosing and applying techniques","Reasoning"]},
  {m:"Convince me",t:"“Convince me that a cube has 6 faces, 12 edges and 8 vertices.”",el:["Understanding and fluency","Communicating"]}
 ]},
 {st:"s2",task:"How many millilitres in 1 litre?",moves:[
  {m:"Who is correct?",t:"“Kai says 1250 mL is more than 2 L. Mia says 2 L is more. Who is correct? Show how you know.”",el:["Reasoning","Communicating"]},
  {m:"Same and different",t:"“What is the same and what is different about a 1 L milk carton, a 1 L jug and a 1 L ice-cream container?”",el:["Exploring and connecting","Communicating"]},
  {m:"Always, sometimes, never",t:"“A taller container holds more. Always, sometimes or never true?”",el:["Reasoning","Exploring and connecting"]},
  {m:"Open it up",t:"“Find containers that together hold about 1 litre. Check by pouring.”",el:["Choosing and applying techniques","Reasoning"]},
  {m:"Convince me",t:"“Convince me that 4 cups of 250 mL fill a 1 L bottle.”",el:["Understanding and fluency","Communicating"]}
 ]},
 {st:"s3",task:"Find the volume of a rectangular prism 5 cm by 4 cm by 3 cm.",moves:[
  {m:"Who is correct?",t:"“Jo says the volume is 5 + 4 + 3 = 12 cm³. Sam says it is 20 × 3 = 60 cm³. Who is correct? Explain using layers.”",el:["Reasoning","Communicating"]},
  {m:"Same and different",t:"“What is the same and what is different about prisms 5 by 4 by 3, 10 by 2 by 3 and 6 by 10 by 1?”",el:["Exploring and connecting","Communicating"]},
  {m:"Always, sometimes, never",t:"“If you double the length of a rectangular prism, you double its volume. Always, sometimes or never true?”",el:["Reasoning","Exploring and connecting"]},
  {m:"Open it up",t:"“Find rectangular prisms with a volume of 60 cm³. How many can you find?”",el:["Choosing and applying techniques","Reasoning"]},
  {m:"Convince me",t:"“Convince me that this prism has 3 layers of 20 cubes.”",el:["Understanding and fluency","Communicating"]}
 ]}
];
