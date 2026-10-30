/* ---------------- module config ---------------- */
var M = {
 key:"2ds-k6-module-v1",
 title:"Two-dimensional Spatial Structure K–6",
 dlName:"two-dimensional-spatial-structure-reflections.txt",
 welcomeH2:"How students learn about shapes and area, K to 6",
 welcomeP:"This module follows Two-dimensional spatial structure across four stages in two strands: 2D shapes (from naming familiar shapes to classifying by properties and dissecting) and area (from ‘the inside of a shape’ to calculating the areas of rectangles, parallelograms, triangles and composite shapes). It covers how the outcomes build, the maths you need to teach it, the misconceptions to look for, and what the NESA teaching advice and the diocesan PL slides recommend.",
 tryText:"a model for each stage: triangles and non-examples, quarter turns, area on a grid, and many ways to find the area of an L-shape.",
 namesH3:"One focus area, two strands",
 namesP:"Two-dimensional spatial structure has the same name in every stage, with parts A and B from Stage 1. Each stage has a 2D shapes strand and an area strand. All content also addresses the Working mathematically outcome, MAO-WM-01.",
 ideasP:"NESA explains that identifying, rotating, orienting and visualising shapes are foundations for the array structure of multiplication and area, map interpretation, visualisation and geometric reasoning (Lowrie et al. 2021). The diocesan slides call spatial reasoning “a mathematical super power”, and note it is malleable: improvements transfer to general mathematical performance. Six ideas run through the focus area. Select an idea to see how it develops.",
 ideasNote:"Two-dimensional spatial structure connects to Multiplicative relations (arrays and the area model), Geometric measure (perimeter, angles and the same-perimeter rectangles investigation), Fractions (area models) and Three-dimensional spatial structure (faces of objects and volume).",
 progP:"Shapes move from being recognised by appearance to being classified by properties, including classes that overlap. Area moves from ‘the inside of a shape’ compared directly, to informal units, to the array structure of square units, to calculating areas by transforming shapes into rectangles.",
 shifts:[
  ["es1","Early Stage 1 → Stage 1","From familiar shapes and direct comparison to naming polygons by their features, sliding, reflecting and turning shapes, and measuring area with uniform informal units in rows and columns."],
  ["s1","Stage 1 → Stage 2","From features to comparing properties such as parallel sides and right angles. Tessellations and symmetry deepen transformations, and area moves to square centimetres and square metres using the grid structure."],
  ["s2","Stage 2 → Stage 3","From describing shapes to classifying them, recognising that classes can overlap. Area is calculated using length and width in words, with hectares and square kilometres, and other shapes are transformed into rectangles to find their area."]
 ],
 modelsH2:"Each stage adds models; grids carry area from Stage 2 to Stage 3",
 modelsP:"The bars show the stages where the syllabus, the NESA teaching advice or the diocesan PL slides name or use each model. Select a model for more detail.",
 modelTips:[
  ["Show non-examples.","Non-examples similar to the shape but missing the defining characteristic (a chevron, a kite) focus attention on what makes a triangle a triangle."],
  ["Vary orientation and size.","Prototypes form quickly. Show every kind of triangle, in many orientations, so a right-angled triangle isn’t seen as ‘half a triangle’."],
  ["From many squares to one.","Give students fewer and fewer tiles until they have one square and must draw or visualise the rows and columns."],
  ["Put the grid behind the shape.","In Stage 3, placing the grid behind a rectangle encourages strategies other than counting by ones."]
 ],
 sorterP:"Most misconceptions in this focus area come from four roots, and each root reappears in a new form as students move from naming shapes to calculating areas. Read each student response and choose its root.",
 rootRows:[
  ["Shapes judged by a prototype or orientation","A right-angled triangle called ‘half a triangle’","A square on its corner isn’t a square","A rhombus called a ‘diamond’; a rectangle thought to be regular","Thinks a triangle can’t be both right-angled and isosceles"],
  ["Area units used without structure","Compares area by one dimension only <span class=\"pill src-add\">Add.</span>","Gaps and overlaps; circles used as units; squares missed or counted twice","Counts square centimetres one by one","Multiplies lengths without knowing why"],
  ["Area confused with length or perimeter","Traces the outline when asked where the area is <span class=\"pill src-add\">Add.</span>","—","Thinks a square metre must be a square; ‘4 cm squared’ for 4 cm² <span class=\"pill src-dio\">Slides</span>","Doubling the sides doubles the area; same perimeter, same area"],
  ["Transformations thought to change size or identity","Can’t turn a shape to fit a space","Thinks area changes when tiles are rearranged","Thinks reflecting or rotating a shape changes its area","Can’t see a parallelogram as a rearranged rectangle"]
 ],
 sorterNote:"NESA notes that the equilateral triangle is a common prototype, which has led some students to identify a right-angled triangle as ‘half a triangle’ (Hourigan and Leavy 2015).",
 notesTitle:"Two-dimensional Spatial Structure K–6: my reflections",
 footer:"Built from the NESA <i>Mathematics K–10 Syllabus (2022)</i> outcomes and content (Early Stage 1 to Stage 3), the NESA syllabus support teaching advice, and the Catholic Education Diocese of Wollongong PL slides on two-dimensional spatial structure. Items marked <span class=\"pill src-dio\">Diocesan PL slides</span> come from those slides; items marked <span class=\"pill src-add\">Additional commentary</span> are common classroom observations, not NESA or diocesan examples. Your progress and notes are saved only in this browser."
};

/* ---------------- data ---------------- */
var STAGES = {
 es1:{short:"ES1", name:"Early Stage 1", years:"Kindergarten", fa:"Two-dimensional spatial structure", col:"var(--es1)", soft:"var(--es1-soft)"},
 s1:{short:"S1", name:"Stage 1", years:"Years 1–2", fa:"Two-dimensional spatial structure A and B", col:"var(--s1)", soft:"var(--s1-soft)"},
 s2:{short:"S2", name:"Stage 2", years:"Years 3–4", fa:"Two-dimensional spatial structure A and B", col:"var(--s2)", soft:"var(--s2-soft)"},
 s3:{short:"S3", name:"Stage 3", years:"Years 5–6", fa:"Two-dimensional spatial structure A and B", col:"var(--s3)", soft:"var(--s3-soft)"}
};
var ORDER = ["es1","s1","s2","s3"];

var STAGE_CONTENT = {
es1:{
 lead:"In Kindergarten, students sort, describe, name and make familiar shapes, and begin to see area as the amount of surface inside a closed shape. NESA stresses examples and non-examples, and shapes in many orientations, so prototypes don’t limit what students recognise.",
 outcomes:[["MAE-2DS-01","sorts, describes, names and makes two-dimensional shapes, including triangles, circles, squares and rectangles"],["MAE-2DS-02","describes and compares areas of similar shapes"]],
 content:[
  ["","2D shapes: Sort, describe and name familiar shapes",["Identify familiar shapes in a range of contexts, such as handball squares","Sort shapes by features such as size and shape","Recognise and explain how a group of shapes has been sorted (Reasons about spatial relations)","Describe circles, squares, triangles and rectangles","Ask and respond to questions to identify a shape","Distinguish examples of triangles from non-examples"]],
  ["","2D shapes: Represent shapes",["Manipulate shapes and describe their features","Turn shapes to fit into or match a given space (Reasons about spatial relations)","Represent shapes using paint, paper, movement or technology","Make pictures and designs from shapes (the Aboriginal flag from two rectangles and a circle; a house from a square and a triangle)","Trace around the faces of 3D objects","Identify and draw lines and curves"]],
  ["","Area: Identify and compare area",["Make closed shapes and identify area as the amount of surface (the inside part of a shape)","Use comparative language: bigger than, smaller than, the same as","Predict which of two surfaces has the larger area and justify (Reasons about spatial relations)","Compare areas of two similar shapes directly by drawing, tracing, or cutting and pasting"]]
 ],
 know:[
  ["Prototypes form early","Children learn ‘What shape is this?’ is answered with ‘circle’ or ‘square’ and link the word to their first examples. The equilateral triangle is a common prototype, so some students see a right-angled triangle as ‘half a triangle’ (Hourigan and Leavy 2015). Introduce all types of triangles."],
  ["Examples and non-examples","Non-examples should be similar to the shape but lack the defining characteristic, such as a chevron or kite compared with a triangle. Students needing support can start with very different non-examples and match-to-sample activities."],
  ["Regular and irregular","Work with asymmetric and irregular shapes as well as regular ones. Students aren’t expected to use the terms ‘regular’ and ‘irregular’."],
  ["Comparing area","Compare similar shapes where one fits inside the other; different shapes where one can be placed on the other; and different shapes with the same area, by cutting one up and pasting it onto the other."],
  ["Superimpose and superpose","Superimpose: compare areas by placing one on top of the other. Superpose: compare by aligning the edges or corners when one is placed on top."],
  ["Shape or object?","In the syllabus, ‘shape’ means a two-dimensional figure and ‘object’ means a three-dimensional solid. Choose images with good colour contrast for students with visual difficulties."]
 ],
 misc:[
  {see:"Says a right-angled triangle is “half a triangle”.",name:"The equilateral prototype",resp:"Show all types of triangles, in different orientations. Focus on the defining features: three straight sides, closed.",src:"n"},
  {see:"Says an upside-down triangle isn’t a triangle any more.",name:"Orientation changes the name",resp:"Turn the shape while the student watches. Ask what changed and what stayed the same.",src:"n"},
  {see:"Calls a chevron a triangle because it is “pointy”.",name:"Not attending to the defining features",resp:"Compare it with triangles: count the sides and corners. Use non-examples that look similar.",src:"n"},
  {see:"Asked where the area of a shape is, traces around the outline.",name:"Area seen as the boundary",resp:"Colour or cover the inside. Area is the amount of surface inside a closed shape.",src:"a"},
  {see:"Says the taller rectangle has the bigger area, without comparing the widths.",name:"Comparing area by one dimension",resp:"Place one on top of the other (superimpose) or cut and paste to compare the whole surface.",src:"a"}
 ],
 advice:["Give time to explore and represent shapes in the classroom, school and local environment, and through painting, drawing, movement, gesture, writing, cutting and pasting.","Show shapes in different orientations and sizes, and use templates for students to create shapes.","Extend students who understand area by comparing shapes that can’t be superimposed, predicting shapes with the same area, and learning to measure area.","Use images with good colour contrast to support students with visual difficulties."],
 vocab:["shape","closed shape","circle","triangle","square","rectangle","features","side","line","curve","area","surface","inside","outside","bigger than","smaller than","the same as"],
 check:{title:"Quick check (built from the syllabus and NESA advice)",steps:["Show triangles of different types and orientations mixed with non-examples (a chevron, a kite, a shape with a curved side). Ask, <i>Which are triangles? How do you know?</i> Try the sorting tool below.","Show a closed shape. Ask, <i>Can you show me where the area is?</i>","Give two rectangles of different sizes. Ask, <i>Which has more area? How can you check?</i>","Ask the student to make a picture using a square and a triangle, and describe the shapes they used."]},
 tool:"triangles",
 quiz:[
  {q:"Why does NESA recommend introducing all types of triangles?",o:["So students learn the names isosceles and scalene early","Because a common equilateral prototype can lead students to see a right-angled triangle as ‘half a triangle’","Because equilateral triangles are rare","To prepare for Stage 4"],a:1,why:"Initial examples form the prototype image students hold. Varied examples and orientations build a robust concept."},
  {q:"What is the difference between superimposing and superposing?",o:["There is none","Superimpose: place one area on top of another; superpose: also align the edges or corners","Superpose means cutting and pasting","Superimpose is for objects, superpose for shapes"],a:1,why:"Both compare by placing one area on another; superposing also aligns edges or corners."}
 ]
},
s1:{
 lead:"In Years 1 and 2, students name polygons by their features, slide, reflect and turn shapes, combine and split shapes, and measure area with uniform informal units arranged in rows and columns. NESA highlights moving from many tiles to a single square, so students build the array structure of area.",
 outcomes:[["MA1-2DS-01","recognises, describes and represents shapes including quadrilaterals and other common polygons"],["MA1-2DS-02","measures and compares areas using uniform informal units in rows and columns"]],
 content:[
  ["A","2D shapes: Recognise and classify shapes using obvious features",["Explore and describe features of polygons (a triangle has three sides and three points)","Use the terms side, vertex and two-dimensional","Create repeating linear patterns with two and three shapes","Classify polygons by the number of sides or vertices (rectangles and squares as quadrilaterals)","Name a shape from a description: triangles, quadrilaterals, pentagons, hexagons, octagons (Reasons about spatial relations)","Recognise that shapes with the same name may have sides of equal or different lengths (Reasons about spatial relations)","Identify shapes in different orientations (a square is still a square)"]],
  ["A","2D shapes: Transform shapes with slides and reflections",["Recognise that sliding or reflecting a shape does not change its size or features (Reasons about spatial relations)","Identify and create a slide (translation) or reflection","Make symmetrical designs with paper folding, mirrors, drawings or paintings"]],
  ["A","Area: Indirectly compare area",["Compare surfaces that can’t be moved or superimposed by cutting paper to cover one and placing it over the other","Predict which of two similar shapes has the larger area and check by covering (desks covered with books)"]],
  ["A","Area: Measure areas using uniform informal units",["Cover surfaces in rows or columns without gaps or overlaps","Select appropriate units (Reasons about relations)","Explain the relationship between unit size and number of units: more sticky notes than workbooks (Reasons about relations)","Explain why area remains constant when units are rearranged: a 2 × 8 tiled rectangle becomes a 4 × 4 square (Reasons about relations)","Record the number and type of unit; identify parts of units left over; estimate and check"]],
  ["B","2D shapes: Represent, combine and separate shapes",["Represent shapes and combinations in different orientations","Combine and split shapes to form new shapes: three triangles make a square, a larger triangle or a rectangle (Reasons about spatial relations)"]],
  ["B","2D shapes: Orientation using quarter turns",["Identify full, half and quarter turns and describe the movement","Describe turns as left, right, clockwise or anti-clockwise","Connect quarter and half turns to the minute hand on a clock (Reasons about relations)","Perform turns and describe the result (a half turn looks the same but upside down)","Determine the repeating pattern formed by quarter turns"]],
  ["B","Area: Compare rectangular areas using uniform square units in rows and columns",["Cover rectangles by creating repeated rows of square tiles","Use a single square to create the array structure","Use the structure of repeated units to find the area of a rectangle","Explain how the grid structure helps find the area (Reasons about spatial structure)","Compare areas of surfaces that can’t be moved, using informal units, and record with drawings, numerals and words"]]
 ],
 know:[
  ["Informal units teach measurement","Repeatedly placing units with no gaps or overlaps, and units equal in size. Covering with different units shows that some units tessellate and suit area better than others."],
  ["From many squares to one","Teaching progresses from many squares, to fewer, to a single square, so students must draw or visualise the rows and columns. Drawing the array helps students see rows as composite units, which connects side length and area, and later 3D stacking."],
  ["How students draw coverings","Some draw every square; some draw rows and mark off squares; some draw the array with lines. These show developing structure. Outlining cardboard tiles helps students notice the grid."],
  ["Count without missing or double counting","Develop procedures for counting tiles so none are missed or counted twice, and use repeated addition or skip counting. Students need experience cutting and rearranging areas before estimating."],
  ["Turns","Explain full, half and quarter turns physically (‘Simon Says’) and link them to clocks. Drawing tools use ‘rotate’ and ‘flip horizontal’, and their icons can help."],
  ["Names have meanings","Triangle (Latin: three angles), quadrilateral (four sides), polygon (Greek: many angles). A square is a special type of rectangle. Vertex (plural vertices) is where two straight sides meet."]
 ],
 misc:[
  {see:"Says a square turned on its corner is “a diamond, not a square”.",name:"Orientation changes the shape",resp:"Rotate the square while students watch, and check its sides and vertices. Identify shapes in different orientations.",src:"n"},
  {see:"Says a square can’t be a rectangle or a quadrilateral.",name:"Classes seen as separate",resp:"A square is a special type of rectangle, and both are quadrilaterals (NESA language advice).",src:"n"},
  {see:"Covers a book with round counters and counts them, ignoring the gaps.",name:"Using units that don’t tessellate",resp:"Compare coverings with circles and with squares. Units that tessellate are more suitable for area.",src:"n"},
  {see:"Counts the squares covering a rectangle and misses some while counting others twice.",name:"Counting without structure",resp:"Count row by row and record as you go. Skip count by the number in each row.",src:"n"},
  {see:"Says a 2 × 8 rectangle of tiles has more area once it is rearranged into a 4 × 4 square.",name:"Area changes when rearranged",resp:"Rearrange the same tiles back and forth. Count them each time. This is a Stage 1 reasoning point.",src:"n"},
  {see:"Makes a half turn when asked for a quarter turn clockwise.",name:"Confusing amounts and directions of turn",resp:"Link turns to the minute hand on a clock: a quarter turn is 15 minutes. Try the turning tool below.",src:"a"}
 ],
 advice:["Foster representing and visualising objects and shapes through practical activities and communication.","Use rectangular shapes in covering activities so students develop the array structure that later links area to multiplication.","Outline cardboard square tiles to help students notice the grid.","Teach a variety of estimation strategies, after students have cut up and rearranged areas.","Introduce ‘slide (or translation)’, ‘reflection’ and ‘rotation’, and stress that these transformations don’t change area.","<span class=\"pill src-dio\">Diocesan PL slides</span> Make a 3-piece tangram and rearrange the three triangles into a triangle, rectangle, pentagon and hexagon. Describe each move with slide, rotate and reflect."],
 vocab:["shape","circle","triangle","quadrilateral","square","rectangle","pentagon","hexagon","octagon","orientation","features","side","vertex","vertices","symmetry","slide","reflection","turn","full-turn","half-turn","quarter-turn","clockwise","anti-clockwise","area","cover","surface","row","column","grid","gap","overlap","unit","estimate"],
 check:{title:"Quick checks (built from the syllabus examples and diocesan slides)",steps:["Show a square in several orientations, including on its corner. Ask, <i>What shape is this? How do you know?</i>","Ask the student to measure a desk with sticky notes and then workbooks. Ask, <i>Why did you need more sticky notes?</i>","Give one square tile and a rectangle. Ask, <i>How many tiles would cover it? Show how you know without more tiles.</i>","<span class=\"pill src-dio\">Diocesan PL slides</span> Show a shape turned a quarter turn clockwise in each box of a pattern. Ask, <i>What will the next box look like? What about the 15th?</i> Try the turning tool below."]},
 tool:"turns",
 quiz:[
  {q:"Why does NESA suggest moving from providing many squares to providing just one square when covering an area?",o:["To save resources","Students must create the rows and columns themselves, which helps them see rows as composite units","Because one square is easier to count","To introduce square centimetres"],a:1,why:"Drawing or visualising the array connects side length and area and lays the basis for calculating area with multiplication."},
  {q:"Which informal units are most suitable for measuring area?",o:["Any objects","Units that tessellate, fitting together without gaps or overlaps","Round counters","The largest units available"],a:1,why:"Covering with a range of units helps students see that tessellating units suit area measurement."},
  {q:"Is a square a rectangle?",o:["No, they have different names","Yes, a square is a special type of rectangle","Only when it is upright","Only in Stage 3"],a:1,why:"NESA notes that while squares and rectangles are both quadrilaterals, a square is also a special type of rectangle."}
 ]
},
s2:{
 lead:"In Years 3 and 4, students compare quadrilaterals by properties such as parallel sides and right angles, use symmetry and tessellation, combine and split shapes, and measure area in square centimetres and square metres using the grid structure.",
 outcomes:[["MA2-2DS-01","compares two-dimensional shapes and describes their features"],["MA2-2DS-02","performs transformations by combining and splitting two-dimensional shapes"],["MA2-2DS-03","estimates, measures and compares areas using square centimetres and square metres"]],
 content:[
  ["A","2D shapes: Compare and describe features",["Describe and compare parallelograms, rectangles, rhombuses, squares, trapeziums and kites","Identify polygons with and without parallel sides (the Torres Strait Islander flag)","Identify quadrilaterals with all sides equal (rhombuses)","Identify right angles in shapes","Group quadrilaterals using one or more attributes"]],
  ["A","2D shapes: Transform shapes by reflecting, translating and rotating",["Identify lines of symmetry in pictures, artefacts, designs and the environment, including Aboriginal artworks and Islamic designs","Draw lines of symmetry and identify quadrilaterals with none","Create tessellating designs by reflecting, translating and rotating triangles (two scalene triangles form a parallelogram)","Apply and describe half-, quarter- and three-quarter-turns"]],
  ["A","Area: Square centimetres",["Create the array structure with 1 cm × 1 cm squares","Recognise that area can be measured in square centimetres","Estimate using a 10 cm by 10 cm benchmark and by visualising rows and columns","Explain how the grid structure helps find the area (Reasons about spatial structure)","Estimate and measure areas up to 100 square centimetres; record in words","Count efficiently, such as using strips of 10"]],
  ["A","Area: Square metres",["Recognise the need for a larger unit","Construct a square metre and measure large areas (the classroom floor or door)","Recognise that one square metre need not be a square: a 2 m by half-metre rectangle (Reasons about spatial structure)","Record and estimate in square metres"]],
  ["B","2D shapes: Combine and split common shapes",["Combine shapes (a rhombus and a triangle form a trapezium; two copies of a triangle form a parallelogram)","Split shapes (a parallelogram into a rectangle and two equal triangles)","Record arrangements (a hexagon formed or split in many ways)"]],
  ["B","2D shapes: Symmetrical patterns and shapes",["Create tessellating designs with triangles or quadrilaterals by reflecting, translating and rotating","Apply and describe half-, quarter- and three-quarter-turns"]],
  ["B","Area: Measure the areas of shapes using the grid structure",["Measure rectangles and right-angled triangles with a square-centimetre grid overlay (a triangle as half a square or rectangle)","Estimate areas in the environment efficiently with a grid (more than 9 but less than 49 square centimetres)","Recognise that rectangles with different side lengths can have the same area"]],
  ["B","Area: Compare surfaces using metric units",["Estimate before measuring to find the larger of two areas in square centimetres, and in square metres"]]
 ],
 know:[
  ["Flexible mental images","Keep using irregular shapes and different orientations. ‘Regular’ and ‘irregular’ are introduced in Stage 3 after angles are measured. Although rectangles have four right angles, they aren’t regular."],
  ["Any triangle tessellates","Tessellating triangles by reflecting, rotating and translating shows that any triangle tessellates, and that two copies of a triangle form a parallelogram: a triangle is exactly half a parallelogram."],
  ["A square metre needn’t be a square","A 2 m by half-metre rectangle is one square metre. Dissecting a 2 m by 2 m square into two 2 m² rectangles builds the relationship between edge length and area."],
  ["Use the grid","Use the row and column structure of a square-centimetre grid overlay when the shape sits on the overlay. Triangles are the building blocks of polygons."],
  ["Precise names","‘Diamond’ isn’t the geometric term: use ‘rhombus’. British English (and NESA) use ‘trapezium’ for one pair of parallel sides; American English reverses trapezium and trapezoid. Prefer ‘translate’, ‘reflect’ and ‘rotate’ to ‘slide’, ‘flip’ and ‘turn’."],
  ["Recording units","In Stage 2, record areas in words or informal abbreviations (sq m). Standard abbreviations such as m² and cm² are introduced in Stage 3."]
 ],
 misc:[
  {see:"Calls a rhombus a “diamond”.",name:"Everyday names for shapes",resp:"Use ‘rhombus’: a quadrilateral with 4 equal sides. NESA notes ‘diamond’ isn’t the correct geometric term.",src:"n"},
  {see:"Says one square metre has to be a square.",name:"The unit name describes the shape",resp:"Cut a 1 m by 1 m square in half and join the pieces end to end: 2 m by half a metre is still one square metre.",src:"n"},
  {see:"Says a rectangle is a regular shape because all its angles are right angles.",name:"Regular means ‘neat’",resp:"Regular shapes have all sides and all angles equal. A rectangle’s sides aren’t all equal. (Diocesan slides ask: is a rectangle a regular polygon?)",src:"d"},
  {see:"Counts every square centimetre in a 6 by 8 rectangle one at a time.",name:"Counting by ones on a grid",resp:"Use the rows and columns: strips of 10, or 8 in each row and 6 rows.",src:"n"},
  {see:"Thinks a shape gets a different area when it is reflected or rotated.",name:"Transformations change area",resp:"Trace the shape, transform it and lay the tracing on top. NESA stresses that transformations don’t change area.",src:"n"},
  {see:"Reads 4 cm² as “4 centimetres squared” and pictures a 4 cm by 4 cm square.",name:"4 cm² versus 4 cm squared",resp:"Read cm² as ‘square centimetres’. 4 square centimetres is 4 unit squares; (4 cm)² is 16 cm². (Diocesan slides question.)",src:"d"}
 ],
 advice:["Use local Aboriginal artworks, artefacts or designs wherever possible, in consultation with local Aboriginal Communities.","Emphasise the shape of the face that tessellates when using pattern blocks; digital tools can help focus on 2D shapes.","Have students tessellate shapes that don’t tessellate too, and explain why.","Construct a square metre and use it to measure large areas; dissect a 2 m by 2 m square.","Use a 10 cm by 10 cm square as a benchmark for estimating.","<span class=\"pill src-dio\">Diocesan PL slides</span> Use paper-folding constructions such as the two-fold and three-fold kite to develop spatial reasoning and to distinguish features from properties."],
 vocab:["quadrilateral","parallelogram","rectangle","rhombus","square","trapezium","kite","pentagon","hexagon","octagon","parallel","pair of parallel sides","opposite","right angle","line of symmetry","reflect","translate","rotate","tessellate","half-turn","quarter-turn","three-quarter-turn","area","grid","row","column","square centimetre","square metre","estimate"],
 check:{title:"Quick checks (NESA key progress point and diocesan slides)",steps:["<b>NESA: Equal area.</b> Show 2 identical paper squares. Ask, <i>Can you show me where the area of this square is? Are the areas the same? How do you know?</i>","Fold one square diagonally and the other vertically, then unfold. Trace a triangle and ask, <i>Show me where the area of this triangle is.</i> Trace a rectangle from the other square and ask the same.","Cut along the folds and place a triangle beside a rectangle. Ask, <i>Do these have the same area, or is one bigger? Why?</i> This shows whether the student recognises different shapes can have the same area.","<span class=\"pill src-dio\">Diocesan PL slides</span> Ask, <i>Is a square a rectangle? Is a rectangle a regular polygon? Why?</i>"]},
 tool:"grid",
 quiz:[
  {q:"Does one square metre have to be a square?",o:["Yes, by definition","No: a rectangle 2 m long and half a metre wide is also one square metre","Only on grid paper","Only indoors"],a:1,why:"NESA identifies this as an important Stage 2 understanding."},
  {q:"Which terms does NESA encourage in Stage 2 B?",o:["Slide, flip and turn","Translate, reflect and rotate","Move, mirror and spin","Shift, swap and twist"],a:1,why:"Students should use the terms translate, reflect and rotate rather than slide, flip and turn."},
  {q:"What does tessellating triangles help students recognise?",o:["Only equilateral triangles tessellate","Any triangle tessellates, and two copies of a triangle form a parallelogram","Triangles can’t be rotated","Triangles have no area"],a:1,why:"A triangle is exactly half a parallelogram, which later underpins the area of a triangle."}
 ]
},
s3:{
 lead:"In Years 5 and 6, students classify triangles and quadrilaterals by properties, recognising that classes overlap. They calculate areas of rectangles in words, use hectares and square kilometres, and transform composite shapes, parallelograms and triangles into rectangles to find their area.",
 outcomes:[["MA3-2DS-01","investigates and classifies two-dimensional shapes, including triangles and quadrilaterals based on their properties"],["MA3-2DS-02","selects and uses the appropriate unit to calculate areas, including areas of rectangles"],["MA3-2DS-03","combines, splits and rearranges shapes to determine the area of parallelograms and triangles"]],
 content:[
  ["A","2D shapes: Classify shapes and describe their properties",["Classify triangles as equilateral, isosceles or scalene","Recognise that triangles and quadrilaterals can be classified in more than one way: a triangle can be right-angled and isosceles (Reasons about spatial relations)","Compare side and angle properties using measurement and symmetry","Investigate line and rotational symmetry of quadrilaterals (which have diagonals as lines of symmetry?)","Identify regular and irregular polygons"]],
  ["A","Area: Hectares and square kilometres",["Recognise the need for units larger than the square metre (land)","Identify where km² and hectares are used (a suburb; the botanic gardens)","1 hectare is a square with 100 m sides: 10 000 m²","Record areas in km² and ha"]],
  ["A","Area: Calculate the areas of rectangles",["Use the same units of length on both sides to create ‘square units’","Establish the relationship between length, width and area","Record in words: area of rectangle = number of units of length × number of units of width","Calculate in cm², m² and km²","Recognise that rectangles with the same area may have different dimensions (24 cm²)","Compare areas of rectangles with the same perimeter (20 cm)"]],
  ["B","2D shapes: Dissect and rearrange using translations, reflections and rotations",["Use the terms translate, reflect and rotate","Dissect and rearrange one shape to make another (a rectangle cut on its diagonal)","Recognise that transformations change position and orientation but not size (Reasons about spatial orientation)"]],
  ["B","Area: Composite figures",["Find different ways to calculate the area of a composite L-shape"]],
  ["B","Area: Parallelograms",["Transform a parallelogram into a rectangle to find its area","Record in words: area of parallelogram = base × height"]],
  ["B","Area: Triangles",["Compare a triangle with a parallelogram with the same base and height","Duplicate and rotate a triangle to form a parallelogram","Record in words: the area of a triangle is half the area of a parallelogram with the same base and height"]]
 ],
 know:[
  ["Classes overlap","Asking how many right angles an isosceles triangle can have leads students to see classifications aren’t discrete: a triangle can be a right-angled isosceles triangle. Folding along a line of symmetry shows equal sides and equal base angles."],
  ["Features and properties","A feature is observable (3 sides, 3 vertices). A property needs mathematical knowledge to identify (the angles of a triangle add to 2 right angles). The diocesan slides ask teachers to distinguish these too."],
  ["Why multiply lengths?","Move on from counting squares: find how many squares fit in one row and multiply by the number of rows. The dimensions tell how many unit squares fit in each row and column. Formulas are written in words; algebra comes in Stage 4."],
  ["The linearity problem","A common assumption is that doubling the sides doubles the area. Keep the perimeter fixed while changing the area with shapes made of connected squares, such as perimeter 20 cm with areas of 23 cm² and 17 cm²."],
  ["Transform to a rectangle","Finding the area of other shapes depends on transforming them into rectangles. The L-shape (a 6 by 4 rectangle missing a 3 by 2 corner, 18 square units) can be split, cut and filled, completed and subtracted, or doubled and rotated. Then parallelograms, then triangles as half a parallelogram."],
  ["Units and reading them","Give the hectare and square kilometre a local reference on a map. Read m² as ‘square metres’, not ‘metres squared’. Area underpins the area model of multiplication."]
 ],
 misc:[
  {see:"Says that doubling the sides of a rectangle doubles its area.",name:"The linearity problem",resp:"Draw a 2 by 3 rectangle and a 4 by 6 rectangle on grid paper and compare: the area is 4 times as large.",src:"n"},
  {see:"Insists a triangle can’t be both right-angled and isosceles.",name:"Classes must be separate",resp:"Ask how many right angles an isosceles triangle can have. Fold a square on its diagonal to make one.",src:"n"},
  {see:"Uses ‘length × width’ but can’t explain why multiplying gives the area.",name:"A formula without the array",resp:"Connect to rows and columns: the length is how many squares fit in a row; the width is how many rows.",src:"n"},
  {see:"Finds the area of a parallelogram by multiplying the base by the slanted side.",name:"Using the side instead of the perpendicular height",resp:"Cut the triangle off one end and move it to the other to make a rectangle. Its height is the perpendicular height.",src:"a"},
  {see:"Reads 12 m² as “12 metres squared”.",name:"Reading area units",resp:"NESA advises reading m² as ‘square metres’ and cm² as ‘square centimetres’.",src:"n"},
  {see:"Says two rectangles with a perimeter of 20 cm must have the same area.",name:"Same perimeter, same area",resp:"Compare all whole-number rectangles with a perimeter of 20 cm: areas from 9 to 25 cm². (The Geometric measure module has an interactive tool for this.)",src:"n"}
 ],
 advice:["Let students experiment with physical models of triangles to develop spatial reasoning.","Place the square-centimetre grid behind rectangles, not on top, to encourage strategies other than counting by ones.","Locate one square kilometre or one hectare on a local map to give the units meaning.","Use shapes made of connected squares with a fixed perimeter and changing area to address the linearity problem.","Encourage many ways of dissecting the L-shape; all rely on the area of a rectangle.","Generalise methods for area in words; algebraic formulas are introduced in Stage 4."],
 vocab:["equilateral triangle","isosceles triangle","scalene triangle","right-angled triangle","regular shape","irregular shape","properties","features","rotational symmetry","line of symmetry","diagonal","translate","reflect","rotate","area","dimensions","length","width","base (of triangle)","perpendicular height","square centimetre","square metre","hectare","square kilometre"],
 check:{title:"Quick checks (built from the syllabus examples and NESA advice)",steps:["Show an L-shape made from a 6 by 4 rectangle missing a 3 by 2 corner. Ask, <i>Find the area in as many ways as you can.</i> Try the L-shape tool below.","Ask, <i>How many right angles can an isosceles triangle have?</i>","Ask, <i>If I double the length and width of a rectangle, what happens to its area?</i>","Ask the student to read 4 cm² aloud and explain what it means."]},
 tool:"lshape",
 quiz:[
  {q:"A student says doubling the sides of a rectangle doubles its area. What happens?",o:["The area doubles","The area becomes 4 times as large","The area stays the same","The area halves"],a:1,why:"This is the linearity problem: area isn’t directly proportional to side length or perimeter."},
  {q:"Why does NESA suggest placing a grid behind rectangles in Stage 3?",o:["It looks neater","It encourages strategies other than counting by ones","It is required for assessment","It makes the area larger"],a:1,why:"With the grid behind, students use the number in a row and the number of rows."},
  {q:"How is the area of a triangle related to a parallelogram?",o:["They are always equal","A triangle is half a parallelogram with the same base and height","A triangle is a quarter of a parallelogram","There is no relationship"],a:1,why:"Duplicating and rotating a triangle forms a parallelogram with the same base and height."}
 ]
}
};

var IDEAS = [
 {t:"Shapes are defined by properties, not appearance",d:"Prototypes and orientation shouldn’t decide what a shape is called.",s:{es1:"Examples and non-examples of triangles, in many orientations.",s1:"Shapes with the same name can have equal or different sides; any orientation.",s2:"Parallel sides, right angles and equal sides; grouping by attributes.",s3:"Classifying by properties; classes that overlap; regular and irregular."}},
 {t:"Transformations move shapes but don’t change their size",d:"Translating, reflecting and rotating change position and orientation only.",s:{es1:"Turning shapes to fit a space.",s1:"Slides, reflections and quarter turns.",s2:"Symmetry and tessellation by reflecting, translating and rotating.",s3:"Dissecting and rearranging shapes; transformations preserve area."}},
 {t:"Shapes combine and split",d:"Shapes can be found within other shapes; triangles are the building blocks of polygons.",s:{es1:"Pictures from shapes: the Aboriginal flag, a house.",s1:"Three triangles form a square, a larger triangle or a rectangle.",s2:"A rhombus and a triangle form a trapezium; a triangle is half a parallelogram.",s3:"Dissecting a rectangle on its diagonal; composite L-shapes."}},
 {t:"Area is the amount of surface",d:"Area is compared, then measured with units that cover without gaps or overlaps.",s:{es1:"The inside of a closed shape, compared directly.",s1:"Indirect comparison; uniform informal units.",s2:"Square centimetres and square metres.",s3:"Hectares and square kilometres."}},
 {t:"Area has an array structure",d:"Rows and columns of square units link area to multiplication.",s:{es1:"Covering activities.",s1:"Rows and columns; one square used to build the structure.",s2:"The grid structure; strips of 10.",s3:"Length × width, explained in words."}},
 {t:"Find areas by transforming to rectangles",d:"Cutting, moving and duplicating shapes turns new problems into rectangles.",s:{es1:"Cutting and pasting to compare.",s1:"Area stays the same when tiles are rearranged (2 × 8 to 4 × 4).",s2:"A triangle as half a rectangle on a grid; 1 m² as 2 m by half a metre.",s3:"Parallelogram to rectangle; triangle as half a parallelogram; L-shapes."}}
];

var ASPECTS = [
 {k:"o",l:"Outcomes",v:{es1:"<b>MAE-2DS-01</b> sorts, describes, names and makes 2D shapes<br><b>MAE-2DS-02</b> describes and compares areas of similar shapes",s1:"<b>MA1-2DS-01</b> recognises, describes and represents shapes including quadrilaterals and other common polygons<br><b>MA1-2DS-02</b> measures and compares areas using uniform informal units in rows and columns",s2:"<b>MA2-2DS-01</b> compares 2D shapes and describes their features<br><b>MA2-2DS-02</b> performs transformations by combining and splitting 2D shapes<br><b>MA2-2DS-03</b> estimates, measures and compares areas using cm² and m²",s3:"<b>MA3-2DS-01</b> investigates and classifies 2D shapes based on their properties<br><b>MA3-2DS-02</b> selects and uses the appropriate unit to calculate areas<br><b>MA3-2DS-03</b> combines, splits and rearranges shapes to determine the area of parallelograms and triangles"}},
 {k:"s",l:"Shapes",v:{es1:"Circles, squares, triangles, rectangles",s1:"Triangles, quadrilaterals, pentagons, hexagons, octagons",s2:"Parallelograms, rectangles, rhombuses, squares, trapeziums, kites",s3:"Equilateral, isosceles and scalene triangles; regular and irregular polygons"}},
 {k:"t",l:"Transformations",v:{es1:"Turning shapes to fit",s1:"Slides, reflections; full, half and quarter turns",s2:"Reflect, translate, rotate; symmetry; tessellation",s3:"Dissect and rearrange; transformations preserve size"}},
 {k:"a",l:"Area",v:{es1:"Direct comparison of similar shapes",s1:"Indirect comparison; uniform informal units in rows and columns",s2:"cm² and m²; grid overlay; right-angled triangles",s3:"Rectangles by calculation; ha and km²; composite shapes, parallelograms, triangles"}},
 {k:"l",l:"Language",v:{es1:"shape, side, line, curve, area, surface, inside",s1:"side, vertex, two-dimensional, slide, reflection, quarter-turn, clockwise",s2:"rhombus (not diamond), trapezium, parallel; translate, reflect, rotate; sq m in words",s3:"features and properties; regular; cm², m², ha, km² read as ‘square …’; base and perpendicular height"}}
];

var MODELS = [
 {n:"Shapes in the environment",w:"handball squares, flags, artworks",s:0,e:2,d:"Identifying shapes in the classroom, school and local environment; Aboriginal artworks, artefacts and designs (in consultation with local Communities); the Aboriginal and Torres Strait Islander flags."},
 {n:"Examples and non-examples",w:"chevrons, kites, match-to-sample",s:0,e:1,d:"Non-examples similar to the shape but lacking the defining characteristic focus attention on critical attributes. Frayer models support this."},
 {n:"Cutting and pasting areas",w:"direct and indirect comparison",s:0,e:1,d:"Superimposing and superposing; cutting paper to cover one surface and placing it on another."},
 {n:"Informal area units",w:"sticky notes, books, tiles",s:1,e:1,d:"Covering surfaces in rows and columns without gaps or overlaps; discovering that some units tessellate."},
 {n:"Square tiles and drawn arrays",w:"from many squares to one",s:1,e:2,d:"Outlined cardboard squares, then fewer tiles, then a single square, so students draw the rows and columns."},
 {n:"Tangrams and pattern blocks",w:"combining, splitting, tessellating",s:1,e:3,d:"A 3-piece tangram rearranged into new shapes (diocesan slides); pattern blocks for tessellation; dissection in Stage 3."},
 {n:"Paper folding and mirrors",w:"symmetry and constructions",s:1,e:2,d:"Symmetrical designs in Stage 1; lines of symmetry and paper kites (two-fold and three-fold, diocesan slides) in Stage 2."},
 {n:"Square-centimetre grids",w:"the grid structure of area",s:2,e:3,hi:true,d:"Grid overlays on top of shapes in Stage 2; grids placed behind rectangles in Stage 3 to move beyond counting by ones."},
 {n:"A constructed square metre",w:"and a 2 m by half-metre rectangle",s:2,e:2,d:"Building a square metre to measure floors and doors, and rearranging it to show 1 m² needn’t be a square."},
 {n:"Isometric grids",w:"tessellating triangles",s:2,e:2,d:"Tessellating a scalene triangle to form parallelograms."},
 {n:"Local maps",w:"hectares and square kilometres",s:3,e:3,d:"Locating one hectare or one square kilometre on a local map to give the units meaning."},
 {n:"Dissection diagrams",w:"L-shapes, parallelograms, triangles",s:3,e:3,d:"Splitting, cutting and filling, completing a larger rectangle, and duplicating and rotating to find areas."}
];

var ROOTS = ["Shapes judged by a prototype or orientation","Area units used without structure","Area confused with length or perimeter","Transformations thought to change size or identity"];
var SCENARIOS = [
 {st:"es1",q:"Ava says a right-angled triangle is “half a triangle”.",a:0,why:"Ava holds the equilateral prototype. Show all kinds of triangles in many orientations."},
 {st:"s1",q:"Leo says a square turned onto its corner is a diamond, not a square.",a:0,why:"Leo judges by orientation. A square in any orientation is still a square."},
 {st:"s1",q:"Mia covers a book with round counters and says the area is 14 counters.",a:1,why:"Circles don’t tessellate, so they leave gaps. Units for area should fit together without gaps or overlaps."},
 {st:"s1",q:"Josh says the tiles have more area after he rearranges a 2 × 8 rectangle into a 4 × 4 square.",a:3,why:"Rearranging doesn’t change area. Count the same tiles in both arrangements."},
 {st:"s2",q:"Ella says one square metre must be shaped like a square.",a:2,why:"Ella reads the unit name as a shape. A 2 m by half-metre rectangle is also one square metre."},
 {st:"s2",q:"Ben counts every square on a grid one by one to find the area of a 6 by 8 rectangle.",a:1,why:"Ben isn’t using the grid structure: 8 in each row, 6 rows."},
 {st:"s2",q:"Zoe thinks her shape got bigger when she rotated it a quarter turn.",a:3,why:"Rotating changes orientation, not size. Trace and compare."},
 {st:"s3",q:"Kai says doubling the length and width of a rectangle doubles its area.",a:2,why:"This is the linearity problem. Doubling both dimensions makes the area 4 times as large."},
 {st:"s3",q:"Ruby says a triangle can’t be both right-angled and isosceles.",a:0,why:"Ruby treats classes as separate. Ask how many right angles an isosceles triangle can have."},
 {st:"s3",q:"Jai finds a parallelogram’s area by multiplying the base by the slanted side.",a:3,why:"Jai can’t yet see the parallelogram as a rearranged rectangle. Cut and move the end triangle to show the perpendicular height."},
 {st:"s3",q:"Lily reads 4 cm² as “4 centimetres squared” and draws a 4 cm by 4 cm square.",a:2,why:"4 cm² is 4 square centimetres. Read the units as ‘square centimetres’."}
];

var PROMPTS = [
 ["Looking across the progression","Which of the six big ideas does your stage depend on most? Which earlier stage is it built on?"],
 ["Looking across the progression","What prototypes for triangles, squares and rectangles might your students hold? Where did they come from?"],
 ["Looking across the progression","How could grids and the array structure of area be used consistently from Stage 1 to Stage 3 in your school?"],
 ["Your students","Run the quick check for your stage with three students: one secure, one you’re unsure of and one who is struggling. What did you learn that you didn’t expect?"],
 ["Your students","Which root misconception do you see most often? Where in the earlier stages might it have started?"],
 ["Your students","The diocesan slides note that online tests are more spatially demanding. Which of your students might be disadvantaged, and how could you build their spatial reasoning?"],
 ["Your practice","How often do your students see non-examples and shapes in unusual orientations?"],
 ["Your practice","Try the diocesan ‘precise mathematical language’ questions. Is a square a rectangle? Is a rectangle regular? How would you explain the difference between features and properties?"],
 ["Your practice","How do you use local Aboriginal artworks, artefacts or designs, and how do you consult with local Communities?"]
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
  tags:[["Recognise and explain how a group of shapes has been sorted","Reasons about spatial relations"],["Turn shapes to fit into or match a given space","Reasons about spatial relations"],["Predict which of two surfaces will have the larger area and justify the answer","Reasons about spatial relations"]],
  before:{task:"Colour the triangles.<br><br>△ △ △ (all upright, all the same)",lim:["Only prototype triangles","No non-examples to reason about","No sorting or explanation"]},
  after:{task:"“Sort these shapes into ‘triangles’ and ‘not triangles’. Tell me how you decided.”<br><br>(Include a right-angled triangle on its side, a long thin triangle, a chevron, a kite and a shape with one curved side.)",enable:"Start with non-examples that are very different, such as a circle and a square.",extend:"“Draw a triangle that you think no one else in the class will draw.”",listen:"Three straight sides; closed; ‘it’s still a triangle when you turn it’; explaining why the chevron isn’t a triangle.",el:["Understanding and fluency","Exploring and connecting","Communicating","Reasoning"]}
 },
 s1:{
  tags:[["Select and name a shape from a description of its features","Reasons about spatial relations"],["Recognise that shapes with the same name may have sides of equal or different lengths","Reasons about spatial relations"],["Recognise that sliding or reflecting a shape does not change its size or features","Reasons about spatial relations"],["Explain the relationship between the size of a unit and the number of units needed to measure an area","Reasons about relations"],["Explain why the area remains constant when units are rearranged","Reasons about relations"],["Combine and split single shapes and arrangements of shapes to form new shapes","Reasons about spatial relations"],["Connect the use of quarter and half turns to the turn of the minute hand on a clock","Reasons about relations"],["Explain how the grid structure of rows and columns helps to find the area","Reasons about spatial structure"]],
  before:{task:"How many squares cover the rectangle?<br><br>(grid already drawn)",lim:["The structure is given, so students only count","Doesn’t build rows as composite units","One answer, no reasoning"]},
  after:{task:"“Here is one square tile. Without using more tiles, work out how many would cover this book. Show how you know.”",enable:"Give enough tiles for one row and one column.",extend:"“Find a different rectangle that would need the same number of tiles.”",listen:"Drawing rows and columns; ‘make, mark and move’ with the tile; skip counting by rows; seeing a row as one unit.",el:["Exploring and connecting","Choosing and applying techniques","Communicating","Reasoning"]}
 },
 s2:{
  tags:[["Explain how the grid structure of rows and columns helps to find the area","Reasons about spatial structure"],["Recognise that an area of one square metre need not be a square","Reasons about spatial structure"]],
  before:{task:"Draw the line of symmetry on the square.<br><br>□",lim:["One shape with one expected answer (and a square has four lines)","No transformation or reasoning","No vocabulary in use"]},
  after:{task:"“Make a 3-piece tangram. How many different quadrilaterals can you make with the three pieces? Draw each one and describe how you moved the pieces using translate, reflect and rotate.” (diocesan slides)",enable:"Start by making a rectangle, then a triangle, from the three pieces.",extend:"“Which of your shapes have lines of symmetry? Which have parallel sides?”",listen:"Translate, reflect, rotate; ‘the area stays the same’; naming parallelograms, trapeziums and rectangles; marking vertices.",el:["Exploring and connecting","Choosing and applying techniques","Communicating","Reasoning"]}
 },
 s3:{
  tags:[["Recognise that triangles and quadrilaterals can be classified in more than one way","Reasons about spatial relations"],["Recognise that translations, reflections or rotations change the position and orientation but not the size of shapes","Reasons about spatial orientation"]],
  before:{task:"Find the area of the L-shape.<br><br>(6 by 4 rectangle missing a 3 by 2 corner)<br>Area = ____",lim:["One method expected","No comparison of methods","No generalising"]},
  after:{task:"“Find the area of this L-shape in as many different ways as you can. Which way is most efficient? Would each way still work for a different L-shape?”",enable:"Draw the L-shape on grid paper and colour the parts.",extend:"“Design an L-shape where doubling and rotating it doesn’t make a rectangle. Why not?”",listen:"Splitting into rectangles; cut and fill; completing a rectangle and subtracting; doubling and halving; ‘they all use the area of a rectangle’.",el:["Exploring and connecting","Choosing and applying techniques","Communicating","Reasoning"]}
 }
};

var CLOSED = [
 {st:"s1",task:"Name this shape. (a square)",moves:[
  {m:"Who is correct?",t:"“Ari says a square turned on its corner is a diamond. Bella says it’s still a square. Who is correct? How do you know?”",el:["Reasoning","Communicating"]},
  {m:"Same and different",t:"“What is the same and what is different about a square, a rectangle and a rhombus?”",el:["Exploring and connecting","Communicating"]},
  {m:"Always, sometimes, never",t:"“A square is a rectangle. Always, sometimes or never true?”",el:["Reasoning","Exploring and connecting"]},
  {m:"Open it up",t:"“Draw as many different four-sided shapes as you can. What do they all have in common?”",el:["Choosing and applying techniques","Reasoning"]},
  {m:"Convince me",t:"“Convince me that a square is a quadrilateral.”",el:["Understanding and fluency","Communicating"]}
 ]},
 {st:"s2",task:"Find the area of this rectangle on the grid.",moves:[
  {m:"Who is correct?",t:"“Tom counted 24 squares one at a time. Mei multiplied 6 × 4. Whose method would work best for a much bigger rectangle?”",el:["Reasoning","Communicating"]},
  {m:"Same and different",t:"“What is the same and what is different about a 6 by 4, a 3 by 8 and a 12 by 2 rectangle?”",el:["Exploring and connecting","Communicating"]},
  {m:"Always, sometimes, never",t:"“A shape with a bigger perimeter has a bigger area. Always, sometimes or never true?”",el:["Reasoning","Exploring and connecting"]},
  {m:"Open it up",t:"“Draw shapes with an area of 12 square centimetres that aren’t rectangles.”",el:["Choosing and applying techniques","Reasoning"]},
  {m:"Convince me",t:"“Convince me that a right-angled triangle with sides of 4 cm and 6 cm next to the right angle has an area of 12 square centimetres.”",el:["Understanding and fluency","Communicating"]}
 ]},
 {st:"s3",task:"Find the area of a parallelogram with base 8 cm and height 5 cm.",moves:[
  {m:"Who is correct?",t:"“Kai says the area is 8 × the slanted side. Jess says it’s 8 × 5. Who is correct? Show it by cutting and moving.”",el:["Reasoning","Communicating"]},
  {m:"Same and different",t:"“What is the same and what is different about a rectangle 8 by 5, a parallelogram with base 8 and height 5, and a triangle with base 8 and height 5?”",el:["Exploring and connecting","Communicating"]},
  {m:"Always, sometimes, never",t:"“Two shapes with the same base and height have the same area. Always, sometimes or never true?”",el:["Reasoning","Exploring and connecting"]},
  {m:"Open it up",t:"“Draw three different parallelograms with an area of 24 cm².”",el:["Choosing and applying techniques","Reasoning"]},
  {m:"Convince me",t:"“Convince me that this parallelogram has the same area as a rectangle 8 cm by 5 cm.”",el:["Understanding and fluency","Communicating"]}
 ]}
];
