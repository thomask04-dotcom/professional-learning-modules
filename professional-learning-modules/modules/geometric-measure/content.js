/* ---------------- module config ---------------- */
var M = {
 key:"gm-k6-module-v1",
 title:"Geometric Measure K–6",
 dlName:"geometric-measure-reflections.txt",
 welcomeH2:"How students learn position, length and angles, K to 6",
 welcomeP:"This module follows Geometric measure across four stages. It covers three strands: position (from ‘in, on, under’ to the Cartesian plane), length (from aligning the ends to converting metric units and perimeter), and angles (from amounts of turn to degrees). It covers how the outcomes build, the maths you need to teach it, the misconceptions to look for, and what the NESA teaching advice recommends.",
 tryText:"a model for each stage: comparing lengths, measuring with informal units, comparing angles, and rectangles with the same perimeter or area.",
 namesH3:"One focus area, three strands",
 namesP:"Geometric measure has the same name in every stage, with parts A and B from Stage 1. Position and length run from Early Stage 1; angles begin in Stage 2. Halves, quarters and eighths of lengths (Early Stage 1 and Stage 1) are covered in more depth in the Fractions module. All content also addresses the Working mathematically outcome, MAO-WM-01.",
 ideasP:"NESA explains that learning about position is important in locating oneself and others in space, and that learning about length develops an understanding of proximity and provides a context for fractions. Six ideas run through the three strands. Select an idea to see how it develops.",
 ideasNote:"Geometric measure connects to Fractions (halves, quarters and eighths of lengths), Representing numbers (decimal notation and the metric system), Two-dimensional spatial structure (area and perimeter) and Multiplicative relations (the array structure of grid maps).",
 progP:"Position moves from describing where things are in relation to yourself to locating exact points on a number plane. Length moves from comparing two objects to choosing units and devices and converting between them. Angles start in Stage 2 as amounts of turn and become measures in degrees in Stage 3.",
 shifts:[
  ["es1","Early Stage 1 → Stage 1","From direct comparison to measuring with repeated uniform informal units, then metres and centimetres. Left and right begin to be used from another person’s point of view."],
  ["s1","Stage 1 → Stage 2","From informal units to millimetres, scaled instruments and perimeter. Grid maps and compass directions arrive, and angles appear as amounts of turn compared with a right angle."],
  ["s2","Stage 2 → Stage 3","From grid references (an area) to coordinates (a point). Kilometres and conversions use place value. Angles are measured and constructed in degrees, including angles on a straight line and at a point."]
 ],
 modelsH2:"Each stage adds tools; rulers and maps run from Stage 1 to Stage 3",
 modelsP:"The bars show the stages where the syllabus and NESA teaching advice name or use each model or tool. Select one for more detail.",
 modelTips:[
  ["Make the device before using it.","Calibrate a strip with footprints or join 10 cubes before using a ruler, so students see that the unit is the space between marks."],
  ["Vary orientation and arm length.","Show angles and right angles in many orientations, with arms of different lengths, so students attend to the amount of turn."],
  ["Start in the playground.","Find north with a compass in the real environment before using compass directions on maps."],
  ["Build personal benchmarks.","Find things that are 1 cm, 10 cm and 1 m. Students estimate best ‘in the human scale’."]
 ],
 sorterP:"Most misconceptions in this focus area come from four roots, and each root reappears in a new form as students move from comparing lengths to measuring angles and plotting points. Read each student response and choose its root.",
 rootRows:[
  ["Units used without the rules of measuring","Compares lengths without aligning the ends","Leaves gaps or overlaps between units; counts marks, not spaces","Starts measuring from the 1 on the ruler <span class=\"pill src-add\">Add.</span>","Adds 5 mm, 20 cm and 1.2 m without converting <span class=\"pill src-add\">Add.</span>"],
  ["Measures judged by appearance","Thinks a coiled string is shorter than the same string straight","Thinks a length changes when cut and recombined","Judges an angle larger because its arms are longer; misses tilted right angles","Assumes rectangles with the same perimeter have the same area <span class=\"pill src-add\">Add.</span>"],
  ["Frame of reference not coordinated","‘On top of’ read as on or above; left and right confused","Left and right from another person’s view","Grid reference read vertical first <span class=\"pill src-add\">Add.</span>; ‘to the east’ and ‘in the east’ confused","Numbers the spaces instead of the lines; (2, 3) and (3, 2) treated as the same"],
  ["Units and scales not related","—","More units always means longer, whatever the unit","Records 1 m 25 cm as 1.25 cm <span class=\"pill src-add\">Add.</span>","Reads 140° instead of 40° on a protractor; divides to convert km to m"]
 ],
 sorterNote:"NESA notes that the terms ‘left’ and ‘right’ depend on which way a person is facing and “can be a source of confusion for several years”.",
 notesTitle:"Geometric Measure K–6: my reflections",
 footer:"Built from the NESA <i>Mathematics K–10 Syllabus (2022)</i> outcomes and content (Early Stage 1 to Stage 3) and the NESA syllabus support teaching advice. Items marked <span class=\"pill src-add\">Additional commentary</span> are common classroom observations, not NESA examples. Your progress and notes are saved only in this browser."
};

/* ---------------- data ---------------- */
var STAGES = {
 es1:{short:"ES1", name:"Early Stage 1", years:"Kindergarten", fa:"Geometric measure", col:"var(--es1)", soft:"var(--es1-soft)"},
 s1:{short:"S1", name:"Stage 1", years:"Years 1–2", fa:"Geometric measure A and B", col:"var(--s1)", soft:"var(--s1-soft)"},
 s2:{short:"S2", name:"Stage 2", years:"Years 3–4", fa:"Geometric measure A and B", col:"var(--s2)", soft:"var(--s2-soft)"},
 s3:{short:"S3", name:"Stage 3", years:"Years 5–6", fa:"Geometric measure A and B", col:"var(--s3)", soft:"var(--s3-soft)"}
};
var ORDER = ["es1","s1","s2","s3"];

var STAGE_CONTENT = {
es1:{
 lead:"In Kindergarten, students describe where things are and follow simple directions, compare lengths directly and indirectly, and create half a length. NESA highlights accurately aligning the ends of objects, and conservation of length.",
 outcomes:[["MAE-GM-01","describes position and gives and follows simple directions"],["MAE-GM-02","describes and compares lengths"],["MAE-GM-03","identifies half the length and the halfway point"]],
 content:[
  ["","Position: Describe position and movement of oneself",["Give and follow simple directions to position themselves or objects","Describe position using in, on, under, up and down","Use proximity terms (near, between, next to) and frames of reference (in front of, behind)","Use ordinal names to at least third","Begin to use ‘left’ and ‘right’ in relation to themselves, referencing their dominant hand or foot"]],
  ["","Length: Use direct and indirect comparisons to decide which is longer",["Identify length as the measure of an object from end to end","Use comparative language: longer than, shorter than, the same as","Compare directly by placing objects side by side and aligning the ends","Explain why a piece of string stays the same length straight or curved","Compare indirectly by copying a length, such as with a strip of paper (Reasons about relations)"]],
  ["","Length: Create half a length",["Divide a length into two equal parts, such as cutting a ribbon into halves (Reasons about relations)","Distinguish between the halfway point and half a length","Describe positions as about halfway, more than halfway or less than halfway"]]
 ],
 know:[
  ["Two ideas about position","Following an instruction to position an object or oneself, and describing the relative position of an object or oneself. Some students can describe position in relation to themselves but not in relation to another object."],
  ["Position words do double duty","‘Next to’, ‘before’ and ‘after’ are used in space and in number (13 comes before 14). ‘On top of’ can be confusing: does it mean resting on, or above?"],
  ["Left and right","Reference a dominant hand or foot. Left and right depend on which way a person is facing and can confuse students for several years. Using them from someone else’s view is expected from Stage 1."],
  ["Align the ends","Start with lengths that are clearly different (the table and the pencil). When lengths are close, aligning the ends becomes necessary, such as standing students back-to-back."],
  ["Conservation of length","Students conserve length when they consistently say two objects are equal in length even after their positions change. This develops over time."],
  ["Spatial strengths","Some Aboriginal students show a high degree of spatial awareness on a larger scale, such as on-Country, even before they have the mathematical language. Explicit teaching of positional language supports them."]
 ],
 misc:[
  {see:"Says one pencil is longer because its end sticks out further, without aligning the other ends.",name:"Comparing without aligning the ends",resp:"Physically align one end of each object. NESA highlights the importance of accurately aligning one end.",src:"n"},
  {see:"Says a string is shorter when it is coiled up than when it is straight.",name:"Length changes when the shape changes",resp:"Straighten and coil the same string side by side with a strip of the same length. Ask, “Did we cut any off?”",src:"n"},
  {see:"Asked to put the teddy “on top of” the box, holds it above the box.",name:"‘On top of’: resting on, or above?",resp:"Use physical, digital and visual examples of both meanings, and clarify which is meant.",src:"n"},
  {see:"Says the ribbon is “bigger” when meaning “longer”.",name:"General words for specific attributes",resp:"Model specific words: long, tall, wide, thick. Some students, including those who use Aboriginal English, may use ‘big’ to show importance.",src:"n"},
  {see:"Asked to show the halfway point of a path, cuts the path in two and holds up one piece.",name:"Halfway point confused with half a length",resp:"The halfway point is a position; half a length is a length. Give examples and non-examples. (See the Fractions module.)",src:"n"}
 ],
 advice:["Address positional language regularly, using physical, digital and visual representations.","Introduce ordinals (first, second, third) in contexts such as games, storytelling or recording the date. They show position in a sequence, not quantity.","Provide experience physically aligning the ends of objects to compare lengths, starting with large differences.","Use modelling and visual cues for students with perceptual difficulties or poor spatial awareness.","Use examples and non-examples, including Frayer models, to clarify mathematical terms."],
 vocab:["position","between","next to","behind","inside","outside","left","right","directions","length","end to end","side by side","longer than","shorter than","taller than","the same as","near","far","whole","half","halfway"],
 check:{title:"Quick check (built from the syllabus and NESA advice)",steps:["Give two pencils of similar length, not aligned. Ask, <i>Which is longer? How do you know?</i> Watch whether the student aligns the ends.","Show a string straight, then curved. Ask, <i>Is it still the same length? How do you know?</i>","Ask, <i>Is the door wider than the bookshelf? We can’t move them. How could we find out?</i> Look for copying a length with string or a strip.","Give directions: <i>Put the teddy behind the box. Now put it on your left.</i>"]},
 tool:"compare",
 quiz:[
  {q:"Which response shows a student is conserving length?",o:["They say the longer-looking object is longer","They consistently say two objects are the same length even after their positions change","They can count to 20","They use the word ‘long’"],a:1,why:"NESA describes conservation as consistently saying objects are equal in length though their relative positions have changed."},
  {q:"Why does NESA suggest starting with lengths that are very different, such as a table and a pencil?",o:["Small objects are hard to hold","The difference is easy to notice before aligning the ends becomes necessary","Tables are a standard unit","Students can’t compare similar lengths in Kindergarten"],a:1,why:"When items are closer in length, aligning the ends becomes necessary, so start with obvious differences."}
 ]
},
s1:{
 lead:"In Years 1 and 2, students measure with repeated uniform informal units, then metres and centimetres, describe positions on simple maps, and use left and right from other people’s points of view. Halves, quarters and eighths of lengths also sit here.",
 outcomes:[["MA1-GM-01","represents and describes the positions of objects in familiar locations"],["MA1-GM-02","measures, records, compares and estimates lengths and distances using uniform informal units, as well as metres and centimetres"],["MA1-GM-03","creates and recognises halves, quarters and eighths as part measures of a whole length"]],
 content:[
  ["A","Position: Follow directions to familiar locations",["Give and follow directions with turns to the left and right","Position objects in models and drawings","Describe a path on drawings and diagrams of the school or local area"]],
  ["A","Length: Measure lengths using uniform informal units",["Place units end to end without gaps or overlaps","Select appropriate uniform informal units","Explain the relationship between the size of a unit and the number needed: more paper clips than pop sticks (Reasons about relations)","Describe the part left over as about a half, less than a half or more than a half","Record the number and type of unit","Use a single unit repeatedly with ‘make, mark and move’"]],
  ["A","Length: Compare lengths using uniform informal units",["Compare using the same units, checking side by side","Explain why a string stays the same length coiled or straight (Reasons about relations)","Estimate lengths and check by measuring"]],
  ["A","Length: Subdivide lengths to find halves and quarters",["Model halves and quarters by folding, highlighting the length","Recognise when a length has or hasn’t been divided into halves and quarters"]],
  ["B","Position: Explore simple maps of familiar locations",["Make simple models from memory, photographs, drawings or descriptions","Interpret simple maps, including Aboriginal mapping of Country","Create a path from one location to another"]],
  ["B","Length: Compare and order lengths using uniform informal units",["Make and use a tape measure calibrated in informal units (footprints on a paper strip)"]],
  ["B","Length: Recognise and use formal units",["Recognise the need for formal units","Measure to the nearest metre or half-metre; record with m","Recognise the need for a smaller unit; 100 centimetres in one metre","Measure to the nearest centimetre with a 10 cm strip marked in centimetres; record with cm","Estimate in metres and centimetres and check"]],
  ["B","Length: Repeatedly halve lengths to form eighths",["Model an eighth of a length; compare halving three times with halving one-half of a half","Recognise when a length is divided into eight equal parts"]]
 ],
 know:[
  ["What measuring needs","Units placed end to end without gaps or overlaps; units equal in size; identical units to compare; some units suit some objects; the size of the unit affects how many are needed."],
  ["Make, mark and move","Place one unit, mark where it ends, move it along and repeat. Students see that the unit is the space between the marks, not the marks themselves."],
  ["Make a device before a ruler","A length of 10 connecting cubes or a strip calibrated in footprints shows that ruler markings are endpoints of unit lengths. Half of 10 cubes links to simple fractions."],
  ["Conserving length","Recognising that a length can be divided and recombined and still be the same length is part of conserving length."],
  ["Estimate with benchmarks","Estimation relies on visualising a known unit, such as a finger-width or handspan. Students need measuring experience and taught strategies first. For long distances, imagine how many metre rulers would fit, and adjust after the first metre and again at halfway."],
  ["Left and right of others","Many Stage 1 students begin to use left and right from the perspective of a person facing the opposite way. Some Aboriginal students bring a sense of measurement from cultural knowledge or on-Country experiences."]
 ],
 misc:[
  {see:"Lays paper clips along a desk with gaps between some and overlaps at others, then counts them.",name:"Gaps and overlaps",resp:"Revisit the rules: end to end, no gaps or overlaps. Use make, mark and move with a single unit.",src:"n"},
  {see:"Measures the desk in paper clips and the bookshelf in pop sticks, then says the desk is longer because 12 is more than 5.",name:"Comparing counts of different units",resp:"Identical units must be used to compare lengths. Record the type of unit as well as the number.",src:"n"},
  {see:"Is surprised the room measures more in paper clips than in pop sticks.",name:"More units means longer, whatever the unit",resp:"Explore the relationship: the smaller the unit, the more you need. Predict before measuring.",src:"n"},
  {see:"Counts the marks on a calibrated strip, starting at 1 for the first mark, and gets one too many.",name:"Counting marks, not spaces",resp:"Use make, mark and move: the unit is the space between marks.",src:"n"},
  {see:"Facing a partner, says the partner’s raised right hand is on the partner’s left.",name:"Left and right from another person’s view",resp:"Stand beside, then opposite, the partner. Turn to face the same way to check.",src:"n"}
 ],
 advice:["Use the phrase ‘make, mark and move’ when using a single unit repeatedly.","Have students make a measuring device with uniform informal units, such as 10 connecting cubes, before using a ruler.","Before estimating, give students measuring experience and teach estimation strategies. Let them adjust estimates as a distance is measured.","Engage in meaningful exchange with Aboriginal students about cultural measurement knowledge, and connect it with Western measurement.","Leave a space between the number and the unit: 3 cm, not 3cm."],
 vocab:["length","distance","end to end","side by side","unit","handspan","estimate","measure","metre","centimetre","left","right","map","path","half","quarter","eighth"],
 check:{title:"Quick checks (NESA key progress point and syllabus examples)",steps:["<b>NESA.</b> Draw a triangle with equal sides. Say, <i>An ant crawls around the outside of this triangle. Show where the ant will be when it is half of the way around from the start.</i> Starting from the base shows whether the student halves the distance, not the triangle.","Ask the student to measure a desk with paper clips, then with pop sticks. Ask, <i>Why are the numbers different?</i>","Give one unit and ask them to measure a book using make, mark and move.","Stand facing the student. Ask, <i>Which is my right hand?</i>"]},
 tool:"units",
 quiz:[
  {q:"What does ‘make, mark and move’ help students understand?",o:["How to use a calculator","That the unit is the space between the marks, not the marks","How to draw a map","How to estimate"],a:1,why:"Placing, marking and moving a single unit shows that the unit of measurement is the space between marks on a device."},
  {q:"A room measures 60 paper clips but only 20 pop sticks. What relationship does this show?",o:["The room changed size","The smaller the unit, the more units are needed","Paper clips are inaccurate","Pop sticks should not be used"],a:1,why:"Recognising the relationship between the size of a unit and the number of units needed is a Stage 1 reasoning point."},
  {q:"When are students typically expected to use left and right from the perspective of a person facing them?",o:["Early Stage 1","Stage 1","Stage 3","Stage 4"],a:1,why:"In Early Stage 1 left and right are used in relation to oneself; many students begin to use them from another’s view in Stage 1."}
 ]
},
s2:{
 lead:"In Years 3 and 4, students use grid maps and compass directions, measure in metres, centimetres and millimetres with scaled instruments, find perimeters, and meet angles as amounts of turn compared with a right angle.",
 outcomes:[["MA2-GM-01","uses grid maps and directional language to locate positions and follow routes"],["MA2-GM-02","measures and estimates lengths in metres, centimetres and millimetres"],["MA2-GM-03","identifies angles and classifies them by comparing to a right angle"]],
 content:[
  ["A","Position: Interpret movement on a map",["Orient a map to work out which way to travel","Follow routes on land and Aboriginal maps without a grid reference system, such as songlines or trading routes (Reasons about spatial structure)","Describe a route using landmarks and directional language"]],
  ["A","Position: Locate positions on grid maps",["Coordinate horizontal and vertical references (second shelf from the left, third shelf down)","Use the row and column structure of grid maps, horizontal before vertical (the waterhole is at B3)"]],
  ["A","Length: Measure and compare in metres, centimetres and millimetres",["Measure and record using metres and centimetres (1 m 25 cm)","Estimate with known benchmarks and check","Compare and order lengths","Recognise the need for a unit smaller than the centimetre; 10 mm in 1 cm","Measure with a ruler in millimetres; record as 53 mm or 6 cm 2 mm"]],
  ["A","Angles: Identify angles as measures of turn",["Identify angles with 2 arms in practical situations (clock hands, a boomerang)","Identify the arms and vertex","Recognise an angle as the amount of turning between 2 arms","Compare angles and explain that arm length does not affect angle size (Reasons about spatial relations)","Use the term right angle for a quarter-turn in a range of orientations (Reasons about spatial orientation)"]],
  ["B","Position: Create and interpret grid maps",["Create simple maps and plans from an aerial view, labelling grid references","Mark locations given their grid references, including local organisations and Aboriginal sites"]],
  ["B","Position: Directional language and routes on grid maps",["Plan and describe a route using a grid map and N, S, E, W","Use the sun and landmarks to identify the compass directions","Relate compass directions to amounts of turn (a quarter turn right from north faces east)","Describe a return journey (turn right at the lake going, left at the lake returning) (Reasons about spatial orientation)"]],
  ["B","Length: Use scaled instruments to measure and compare",["Select a tape measure, ruler or trundle wheel and an appropriate unit","Identify length, height and width of 3D objects","Use the term perimeter; estimate and measure perimeters of quadrilaterals","Convert between m and cm, and between cm and mm","Record lengths to 2 decimal places (1.25 m)"]],
  ["B","Angles: Compare angles to a right angle",["Compare with a right angle informally (the corner of a page, a bent straw)","Describe angles as less than, equal to, about the same as or greater than a right angle","Describe angles as acute, right, obtuse, straight, reflex or a revolution in terms of quarter-turns","Identify arms and vertex when one arm is invisible (an open door)"]]
 ],
 know:[
  ["Angles are amounts of turn","An angle is the amount of turning between two arms. Arm length doesn’t affect angle size, so show angles in many orientations and with different arm lengths."],
  ["Make angle testers","A pipe-cleaner in a bent straw, two strips of card joined with a split pin, two intersecting paper plates of different colours, or folded paper all generate and compare angles."],
  ["Avoid ‘sharp’ and ‘blunt’","These words focus on the shape of an angle rather than the amount of turning. NESA advises not using them for acute and obtuse angles."],
  ["Personal benchmarks","Find things that are 1 cm, 10 cm and 1 m. A hand width (about 10 cm) is a benchmark. Estimates are most accurate in the human scale and least accurate for very large or small lengths."],
  ["Grid maps and compass","Grid references give the horizontal component first, then the vertical. Identify north with a compass in the playground before using directions on maps. ‘To the east’ is directional; ‘in the east’ is positional."],
  ["Length as boundary","Students interpret length as the distance around a boundary (perimeter) as well as straight-line distance. Making a kite gives purposeful measuring. ‘Perimeter’ comes from the Greek peri (around) and metron (measure)."]
 ],
 misc:[
  {see:"Says angle A is larger than angle B because A’s arms are longer.",name:"Arm length decides angle size",resp:"Place one angle on top of the other, aligning one arm. Show the same angle with short and long arms.",src:"n"},
  {see:"Recognises a right angle only when one arm is horizontal and the other vertical.",name:"Right angles only in standard orientation",resp:"Find right angles in many orientations, and use a right-angle tester at different tilts.",src:"n"},
  {see:"Calls acute angles “sharp” and obtuse angles “blunt”.",name:"Describing the shape, not the turn",resp:"Describe angles by comparison with a quarter-turn instead.",src:"n"},
  {see:"Finds B3 on a grid map by going to row 3 first, then column B, and lands on the wrong square.",name:"Grid reference order",resp:"Horizontal before vertical. Practise with a real grid, such as shelves (second from the left, third down).",src:"a"},
  {see:"Measures a pencil from the 1 on the ruler and gets 1 cm too much.",name:"Starting at 1 instead of 0",resp:"Revisit the unit as the space between marks: the first centimetre runs from 0 to 1.",src:"a"},
  {see:"Says the perimeter of a rectangle is the number of squares inside it.",name:"Perimeter confused with area",resp:"Trace the boundary with string, then straighten the string and measure it.",src:"a"}
 ],
 advice:["Give students informal experiences of creating, identifying and describing a range of angles, leading to the need for a formal unit.","Expose students to angles in a variety of orientations and real-world situations, with arms of different lengths.","Identify north with a compass in the playground, then east, south and west, before using them on maps.","Use practical tasks such as making a kite for purposeful measuring and perimeter.","Use an Aboriginal Languages Map of Australia and local maps to connect to students’ local areas and Country.","Leave a space between the number and the unit: 3 cm, not 3cm."],
 vocab:["position","location","map","plan","path","route","grid","grid reference","aerial view","compass","north","south","east","west","length","distance","metre","centimetre","millimetre","ruler","tape measure","trundle wheel","perimeter","height","width","angle","arm","vertex","right angle","acute","obtuse","straight angle","reflex angle","angle of revolution"],
 check:{title:"Quick checks (built from the syllabus examples and NESA advice)",steps:["Show two angles of the same size, one with longer arms. Ask, <i>Which angle is larger? How could you check?</i> Try the angle tool below.","Show a right angle tilted on the page. Ask, <i>Is this a right angle? How do you know?</i>","On a grid map, ask the student to find B3, then describe a route to another location and the return journey.","Ask, <i>About how long is this desk? Use a benchmark to estimate, then measure.</i>"]},
 tool:"angles",
 quiz:[
  {q:"Why does NESA advise against calling acute angles ‘sharp’ and obtuse angles ‘blunt’?",o:["They’re not real words","They focus attention on the shape of the angle rather than the amount of turning","They’re only for Stage 3","They confuse students learning English"],a:1,why:"Angles should be described by the amount of turning between the arms, compared with a quarter-turn."},
  {q:"Two angles are the same size, but one has much longer arms. What should students conclude?",o:["The one with longer arms is larger","They are the same size because the amount of turning is the same","They can’t be compared","The shorter one is larger"],a:1,why:"Arm length does not affect angle size; the amount of turning between the arms does."},
  {q:"In a grid reference such as B3, which component is given first?",o:["Vertical","Horizontal","Either","The larger one"],a:1,why:"By convention the horizontal component is named first, then the vertical, the same as for coordinates later."}
 ]
},
s3:{
 lead:"In Years 5 and 6, students move from grid references to points on the Cartesian plane, use kilometres and convert units using place value, calculate perimeters, and measure, construct and reason about angles in degrees.",
 outcomes:[["MA3-GM-01","locates and describes points on a coordinate plane"],["MA3-GM-02","selects and uses the appropriate unit and device to measure lengths and distances including perimeters"],["MA3-GM-03","measures and constructs angles, and identifies the relationships between angles on a straight line and angles at a point"]],
 content:[
  ["A","Position: Explore the Cartesian coordinate system",["A grid reference gives an area; the number plane identifies a point","The lines are numbered, not the spaces","The origin is (0, 0)","Plot and label points in the first quadrant, horizontal first: (2, 3) is different from (3, 2)","Record the coordinates of given points"]],
  ["A","Length: Use metres and kilometres",["Recognise the need for a unit longer than the metre","Measure 100 m; 10 × 100 m is 1 km (1000 m)","Estimate with an appropriate unit (a pool is about 50 m; a local Aboriginal site is about 20 km away)","Record as 1 km 200 m","Use a variety of measuring devices"]],
  ["A","Length: Measure lengths to find perimeters",["Use efficient strategies for the perimeter of a large rectangular area","Calculate perimeters of squares, rectangles and triangles","Decide which side lengths are needed (a rhombus needs only one) (Reasons about relations)","Recognise that rectangles with the same perimeter may have different dimensions (Spatial reasoning)"]],
  ["A","Angles: Estimate, measure and compare angles using degrees",["Identify arms and vertex when both arms are invisible, such as rotations","Explain how a protractor is formed (fold a circle in quarters for 90°, eighths for 45°)","Estimate using benchmark angles (Reasons about mental rotation)","Record with ° and measure up to 360° with a protractor"]],
  ["A","Angles: Use a protractor to measure and identify types of angles",["Create angles up to 360°","Right angle 90°, straight angle 180°, revolution 360°","Describe acute, obtuse and reflex angles in degrees (the external angles of a rectangle are 270°)"]],
  ["B","Position: Use the 4 quadrants of the coordinate plane",["Plot, label and record points in all 4 quadrants","Describe changes to coordinates when a point is translated or reflected across an axis ((2, 3) reflected across the x-axis is (2, −3))"]],
  ["B","Length: Connect decimal representations to the metric system",["165 cm is the same as 1.65 m","13.5 cm is 13 cm and 5 mm","Record as 2.7 km"]],
  ["B","Length: Convert between common metric units",["2600 m is 2.6 km","Convert to the same unit to compare (5 m, 10 m, 2 m and 100 cm)","More metres than kilometres are needed for the same distance, so multiply by 1000 to convert km to m"]],
  ["B","Length: Solve problems comparing lengths",["Compare perimeters of rectangles with the same area","Find all whole-number rectangles for a given area (Reasons about spatial structure)","Solve problems with different units (5 mm, 20 cm and 1.2 m)"]],
  ["B","Angles: Angles on a straight line and at a point",["Recognise right angles, angles on a straight line and angles at a point in diagrams and tessellations (Reasons about spatial orientation)","Identify vertex and arms in intersecting lines and Aboriginal cross-hatching designs","Identify angle types where lines intersect: right angles (90°), on a straight line (add to 180°), at a point (add to 360°)"]]
 ],
 know:[
  ["From area to point","A grid reference locates a square region; a coordinate locates a single point. In the number plane the lines are numbered, not the spaces. The horizontal coordinate comes first, as in grid references."],
  ["Conversions use place value","Converting between mm, cm, m and km draws on place value: adjacent places are 10 times or one-tenth. Moving from mm to km involves multiples of 10, 100 and 1000."],
  ["Perimeter with properties","Use properties of shapes: a hexagon with 5 right angles can be split into rectangles, so the unmarked sides add to the known totals. Keep area or perimeter constant while varying the other to tell them apart."],
  ["Protractor pitfalls","Common errors: thinking an angle is the distance between two points or depends on arm length, and reading the wrong scale on a semicircular protractor (140° instead of 40°). A circular 0–360° protractor helps with reflex angles."],
  ["The numberless protractor","With no numbers, students only need one step: place the centre at the vertex. It builds awareness of angle as rotation and naturally shows angles around a point (Francome 2016)."],
  ["Right angles are 90° in any orientation","Students should see that perpendicular lines meet at right angles whatever their orientation, not only when vertical and horizontal."]
 ],
 misc:[
  {see:"Labels the spaces of a number plane 1, 2, 3 instead of the lines.",name:"Numbering spaces, as on a grid map",resp:"Contrast a grid map (areas) with the number plane (points on lines). The origin is where the lines cross at (0, 0).",src:"n"},
  {see:"Plots (2, 3) and (3, 2) at the same point.",name:"Order of coordinates doesn’t matter",resp:"Horizontal first, then vertical. Plot both and compare.",src:"n"},
  {see:"Reads 140° for an angle that is clearly less than a right angle.",name:"Reading the wrong protractor scale",resp:"Estimate first with benchmarks (less than 90°?). Try a numberless or circular protractor.",src:"n"},
  {see:"Says an angle is “the gap between the ends of the arms”.",name:"Angle as a distance",resp:"Revisit angle as rotation. Rotate a body or a strip to show the turn; extend the arms to show the angle stays the same.",src:"n"},
  {see:"Divides by 1000 to convert 3 km to metres.",name:"Unit size and number of units not related",resp:"More metres than kilometres are needed for the same distance, so the number gets larger: multiply by 1000.",src:"n"},
  {see:"Says two garden beds with a 20 m border must have the same area.",name:"Same perimeter, same area",resp:"Build rectangles with a fixed perimeter and compare their areas. Try the rectangle tool below.",src:"a"}
 ],
 advice:["Use a numberless protractor so the only step is placing the centre at the vertex, and to identify angles around a point.","Use a circular 0–360° protractor for reflex angles.","Connect metric conversions to place value: 10 times larger to the left, one-tenth to the right.","Use properties of polygons to determine perimeter.","Use Aboriginal cross-hatching designs and tessellations to find angles at a point and on a straight line.","Use the etymology of words: perimeter (peri, around; metron, measure). Adjacent angles share a common vertex and arm."],
 vocab:["grid","grid reference","coordinates","origin","number plane","quadrant","axis","key","legend","scale","kilometre","metre","centimetre","millimetre","perimeter","dimensions","measuring device","degree","protractor","vertex","arm","adjacent angles","angles on a straight line","angles at a point","angle of revolution"],
 check:{title:"Quick checks (built from the syllabus examples and NESA advice)",steps:["Ask the student to plot (2, 3) and (3, 2). Ask, <i>Are these the same point? How do you know?</i>","Show a rhombus with one side labelled 3 cm. Ask, <i>What is the perimeter? Which sides did you need?</i>","Show an acute angle on a semicircular protractor where the scales read 40° and 140°. Ask, <i>What size is this angle? How do you know?</i>","Ask, <i>How many kilometres is 2600 m? How many different rectangles have an area of 24 square units?</i> Try the rectangle tool below."]},
 tool:"rects",
 quiz:[
  {q:"What is the difference between a grid reference and a coordinate?",o:["There is none","A grid reference gives an area; a coordinate identifies a specific point","A coordinate gives an area; a grid reference gives a point","Grid references use numbers only"],a:1,why:"Grid maps label spaces; the number plane labels lines, so a coordinate pair identifies one point."},
  {q:"Why can a numberless protractor simplify measuring angles?",o:["It has more numbers","Students need only one step: place the centre at the vertex","It measures in radians","It only measures right angles"],a:1,why:"Rather than a long list of steps, students place the centre at the point of the angle, which builds awareness of angle as rotation."},
  {q:"A student reads 140° for an acute angle. What is the most likely cause?",o:["The protractor is broken","Reading the wrong scale on a semicircular protractor","Measuring the arms","Using degrees instead of turns"],a:1,why:"Semicircular protractors show two scales running in opposite directions. Estimating first (less than 90°?) catches the error."}
 ]
}
};

var IDEAS = [
 {t:"Know the attribute before measuring it",d:"Students need to know what is being measured: length end to end, a boundary, or an amount of turn.",s:{es1:"Length as the measure from end to end.",s1:"Length and distance measured with units.",s2:"Angle as the amount of turning; perimeter as the distance around a boundary.",s3:"Angles in degrees; perimeters of shapes and large areas."}},
 {t:"Units are repeated, equal and fit together",d:"Measuring means using equal units end to end, and the size of the unit decides how many you need.",s:{es1:"Direct comparison, and indirect comparison by copying a length.",s1:"Uniform informal units; make, mark and move; metres and centimetres.",s2:"Millimetres; combining units (1 m 25 cm); scaled instruments.",s3:"Kilometres; converting units; more metres than kilometres for the same distance."}},
 {t:"A measure doesn’t change when appearance does",d:"Length stays the same when moved or bent; an angle stays the same when the arms change length or it is rotated.",s:{es1:"A string is the same length straight or curved.",s1:"A length divided and recombined is the same length.",s2:"Arm length doesn’t change an angle; right angles in any orientation.",s3:"Rectangles with the same perimeter can have different dimensions and areas."}},
 {t:"Estimate with benchmarks",d:"Good estimates come from known, personal reference measures.",s:{es1:"About halfway, more than halfway, less than halfway.",s1:"Handspans and finger-widths; adjusting estimates as you measure.",s2:"Things that are 1 cm, 10 cm and 1 m; comparing angles with a right angle.",s3:"A 50 m pool, a 20 km trip; 90°, 180° and 360° as angle benchmarks."}},
 {t:"Position needs a frame of reference",d:"Where something is depends on what it is described in relation to.",s:{es1:"In, on, under, next to; left and right of yourself.",s1:"Left and right of others; simple maps and paths.",s2:"Grid maps (horizontal first); compass directions and turns.",s3:"Points on the number plane; four quadrants; reflections and translations."}},
 {t:"Measurement connects to number",d:"Fractions, decimals and place value grow from measuring.",s:{es1:"Half a length (see the Fractions module).",s1:"Halves, quarters and eighths of lengths; half of 10 cubes.",s2:"Decimal notation for length (1.25 m); quarter-turns.",s3:"Place value in metric conversions; 360° in a revolution, 180° on a straight line."}}
];

var ASPECTS = [
 {k:"p",l:"Position",v:{es1:"<b>MAE-GM-01</b> In, on, under, next to, between; ordinals; left and right of oneself",s1:"<b>MA1-GM-01</b> Directions with turns; left and right of others; models and simple maps of familiar places",s2:"<b>MA2-GM-01</b> Grid maps (horizontal before vertical); compass directions; routes and return journeys",s3:"<b>MA3-GM-01</b> The Cartesian plane: first quadrant, then all four; translations and reflections"}},
 {k:"l",l:"Length",v:{es1:"<b>MAE-GM-02</b> Direct and indirect comparison; aligning ends; conservation",s1:"<b>MA1-GM-02</b> Uniform informal units; make, mark and move; metres and centimetres",s2:"<b>MA2-GM-02</b> Millimetres; scaled instruments; perimeter of quadrilaterals; decimal notation",s3:"<b>MA3-GM-02</b> Kilometres; conversions using place value; perimeter problems"}},
 {k:"f",l:"Part measures",v:{es1:"<b>MAE-GM-03</b> Half a length and the halfway point",s1:"<b>MA1-GM-03</b> Halves, quarters and eighths of a whole length",s2:"Fractions continue in Partitioned fractions",s3:"Fractions continue in Representing quantity fractions"}},
 {k:"a",l:"Angles",v:{es1:"Not yet (turns appear informally in position)",s1:"Turns to the left and right in directions",s2:"<b>MA2-GM-03</b> Angles as turns; compared with a right angle; acute, right, obtuse, straight, reflex, revolution",s3:"<b>MA3-GM-03</b> Degrees and protractors; angles on a straight line and at a point"}},
 {k:"t",l:"Tools",v:{es1:"Body, string, paper strips",s1:"Informal units, calibrated strips, 10-cube device, metre ruler, 10 cm strip",s2:"Rulers, tape measures, trundle wheels, compasses, grid maps, angle testers",s3:"Measuring devices for different contexts, number plane, protractors (numberless, circular, semicircular)"}}
];

var MODELS = [
 {n:"Body, string and paper strips",w:"direct and indirect comparison",s:0,e:0,d:"Standing back-to-back, aligning the ends of objects, and copying a length with a strip of paper to compare things that can’t be moved."},
 {n:"Positional games and stories",w:"in, on, under; ordinals; left and right",s:0,e:1,d:"Following and giving directions; ordinals introduced through games, storytelling or the date; left and right referenced to a dominant hand or foot."},
 {n:"Uniform informal units",w:"paper clips, pop sticks, footprints",s:1,e:1,d:"Placed end to end without gaps or overlaps; a single unit repeated with make, mark and move; the size of the unit and the number needed."},
 {n:"Home-made measuring devices",w:"calibrated strips and 10 cubes",s:1,e:1,d:"A paper strip calibrated in footprints or a length of 10 connecting cubes shows that ruler marks are the ends of unit lengths."},
 {n:"Rulers and tape measures",w:"metres, centimetres, millimetres",s:1,e:3,hi:true,d:"A 10 cm strip in centimetres and metre rulers in Stage 1; rulers, tape measures and trundle wheels in Stage 2; choosing devices for different contexts in Stage 3."},
 {n:"Maps",w:"from familiar places to Country",s:1,e:3,d:"Simple maps and Aboriginal mapping of Country in Stage 1; land and Aboriginal maps, routes and songlines in Stage 2; keys, legends and scale in Stage 3."},
 {n:"Grid maps",w:"areas named horizontal first",s:2,e:2,d:"Row and column structure, horizontal before vertical (B3); creating maps from an aerial view and labelling grid references."},
 {n:"Compass",w:"N, S, E, W and turns",s:2,e:3,d:"Identify north in the playground first; relate compass directions to quarter turns."},
 {n:"Angle testers",w:"straws, split pins, paper plates",s:2,e:2,d:"A pipe-cleaner in a bent straw, card strips joined by a split pin, two coloured paper plates, or folded paper to make and compare angles."},
 {n:"Paper folding",w:"angles and protractors",s:2,e:3,d:"Folding paper to generate angles in Stage 2; folding a circle into quarters (90°) and eighths (45°) to explain a protractor in Stage 3."},
 {n:"Number plane",w:"points, quadrants, reflections",s:3,e:3,d:"The lines are numbered and the origin is (0, 0). First quadrant, then all four, with translations and reflections."},
 {n:"Protractors",w:"numberless, circular, semicircular",s:3,e:3,d:"Numberless protractors build angle as rotation with one step; circular protractors help with reflex angles; semicircular ones need care with the two scales."}
];

var ROOTS = ["Units used without the rules of measuring","Measures judged by appearance","Frame of reference not coordinated","Units and scales not related"];
var SCENARIOS = [
 {st:"es1",q:"Ava says her pencil is longer because its end sticks out past Leo’s, but the other ends aren’t lined up.",a:0,why:"Ava compares without aligning the ends. Physically align one end of each object."},
 {st:"es1",q:"Sam says the skipping rope is shorter when it is coiled up.",a:1,why:"Sam isn’t yet conserving length. Straighten and coil the rope beside a strip of the same length."},
 {st:"s1",q:"Mia measures the desk with paper clips, leaving gaps between some and overlapping others.",a:0,why:"Units must be placed end to end without gaps or overlaps. Use make, mark and move."},
 {st:"s1",q:"Josh is sure the room is longer in paper clips (60) than in pop sticks (20).",a:3,why:"Josh hasn’t related the size of the unit to the number of units. Smaller units mean more are needed."},
 {st:"s1",q:"Facing her partner, Ella points to her partner’s left hand and calls it “your right”.",a:2,why:"Ella uses her own frame of reference. Using left and right from another person’s view develops in Stage 1."},
 {st:"s2",q:"Ben says angle A is bigger than angle B because A’s arms are longer.",a:1,why:"Ben judges by appearance. Place one angle on the other with an arm aligned: the amount of turn is what matters."},
 {st:"s2",q:"Zoe recognises right angles only when one arm is flat along the bottom of the page.",a:1,why:"Show right angles in a range of orientations, as the syllabus requires."},
 {st:"s3",q:"Kai numbers the spaces on a number plane, as on a grid map.",a:2,why:"On a grid map the spaces are labelled; on the number plane the lines are numbered and a coordinate is a point."},
 {st:"s3",q:"Ruby reads 140° for an angle that is clearly smaller than a right angle.",a:3,why:"Ruby read the wrong scale. Estimate first against 90°, or use a numberless or circular protractor."},
 {st:"s3",q:"Jai divides by 1000 to convert 3 km to metres.",a:3,why:"More metres than kilometres are needed for the same distance, so the number should get larger: 3 km is 3000 m."},
 {st:"s3",q:"Lily plots (2, 3) and (3, 2) at the same place.",a:2,why:"The horizontal coordinate comes first. Plot both and compare."}
];

var PROMPTS = [
 ["Looking across the progression","Which of the six big ideas does your stage depend on most? Which earlier stage is it built on?"],
 ["Looking across the progression","How do your students experience angles: as shapes on a page, or as amounts of turn?"],
 ["Looking across the progression","How could students’ personal benchmarks for length be built and reused from Stage 1 to Stage 3?"],
 ["Your students","Run the quick check for your stage with three students: one secure, one you’re unsure of and one who is struggling. What did you learn that you didn’t expect?"],
 ["Your students","Which root misconception do you see most often? Where in the earlier stages might it have started?"],
 ["Your students","How do your students use left and right, and compass directions, when the frame of reference changes?"],
 ["Your practice","Do students make their own measuring devices before using a ruler? What would change if they did?"],
 ["Your practice","Do you or your students use ‘sharp’ and ‘blunt’ for angles? What language could you use instead?"],
 ["Your practice","How do you connect to students’ knowledge of Country, local maps and on-Country measurement?"]
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
  tags:[["Compare lengths indirectly by copying a length","Reasons about relations"],["Divide a length into two equal parts","Reasons about relations"]],
  before:{task:"Circle the longer pencil.<br><br>━━━━━━━━<br>━━━━━",lim:["The ends are already aligned in the picture","One answer, no explanation","Doesn’t need any measuring idea"]},
  after:{task:"“Is the door wider than the bookshelf? We can’t move either of them. How could we find out?”<br><br>“Show me how you know.”",enable:"Compare two pencils by lining up the ends.",extend:"“Find something in the room that is longer than the door but shorter than the whiteboard.”",listen:"Copying a length with string or a strip; aligning ends; ‘the same as’; ‘longer than’ used precisely.",el:["Exploring and connecting","Choosing and applying techniques","Communicating","Reasoning"]}
 },
 s1:{
  tags:[["Recognise and explain the relationship between the size of a unit and the number of units needed","Reasons about relations"],["Explain why the length of an object remains constant when rearranged","Reasons about relations"]],
  before:{task:"The desk is ____ paper clips long.",lim:["One unit is chosen for the student","No comparison between units","No reasoning about the result"]},
  after:{task:"“Ari measured the desk and got 12. Bella measured the same desk and got 30. They were both careful. How can that be?”",enable:"Measure a book with two different units and compare the counts.",extend:"“The room is 60 paper clips long. Predict how many pop sticks long it is, then check.”",listen:"The size of the unit; recording the type of unit; smaller units mean more units; checking for gaps and overlaps.",el:["Exploring and connecting","Communicating","Reasoning","Choosing and applying techniques"]}
 },
 s2:{
  tags:[["Use given directions to follow routes on land and Aboriginal maps without a grid reference system","Reasons about spatial structure"],["Compare angles and explain that the length of the arms does not affect the size of the angle","Reasons about spatial relations"],["Use the term right angle to describe a quarter-turn in a range of orientations","Reasons about spatial orientation"],["Describe a return journey between 2 locations on a grid map","Reasons about spatial orientation"]],
  before:{task:"Circle the right angles.<br><br>└&nbsp;&nbsp;&nbsp;∠&nbsp;&nbsp;&nbsp;┘",lim:["Right angles shown only in standard orientations","Recognition, not reasoning","Doesn’t address arm length"]},
  after:{task:"“Ben says angle A is bigger because its arms are longer. Is he right? Make both angles with an angle tester to check.”<br><br>“Then find three right angles in the room that aren’t ‘upright’.”",enable:"Compare two angles by laying one on top of the other.",extend:"“Make an angle that is more than a right angle but less than a straight angle with very short arms. What is it called?”",listen:"Aligning one arm; ‘the amount of turn’; right angles at a tilt; avoiding ‘sharp’ and ‘blunt’.",el:["Understanding and fluency","Exploring and connecting","Communicating","Reasoning"]}
 },
 s3:{
  tags:[["Determine which side lengths are needed to find the perimeter of a shape","Reasons about relations"],["Recognise that rectangles with the same perimeter may have different dimensions","Spatial reasoning"],["Estimate and describe the size of angles using known angles as benchmarks","Reasons about mental rotation"],["Determine the number of different rectangles that can be formed using whole-number dimensions for a given area","Reasons about spatial structure"],["Recognise right angles, angles on a straight line and angles at a point embedded in diagrams","Reasons about spatial orientation"]],
  before:{task:"Find the perimeter of a rectangle 6 m long and 4 m wide.<br><br>P = ____",lim:["A single calculation with given dimensions","No decisions or comparison","Doesn’t connect perimeter and area"]},
  after:{task:"“A garden bed needs exactly 20 m of edging. What could the garden bed look like? Which shape gives the most space for plants?”",enable:"Start with 12 m of edging and use grid paper.",extend:"“Now keep the area at 24 m². Which rectangle needs the least edging?”",listen:"Length and width adding to 10; listing systematically; same perimeter, different areas; the square (5 m by 5 m) giving the most area.",el:["Exploring and connecting","Choosing and applying techniques","Communicating","Reasoning"]}
 }
};

var CLOSED = [
 {st:"s1",task:"Measure the book with paper clips.",moves:[
  {m:"Who is correct?",t:"“Ari says the book is 8 paper clips long. Bella says it’s 3 pop sticks long. Can they both be right? Explain.”",el:["Reasoning","Communicating"]},
  {m:"Same and different",t:"“What is the same and what is different about measuring with paper clips, footprints and a centimetre strip?”",el:["Exploring and connecting","Communicating"]},
  {m:"Always, sometimes, never",t:"“If you use bigger units, you need more of them. Always, sometimes or never true?”",el:["Reasoning","Exploring and connecting"]},
  {m:"Open it up",t:"“Find three things in the room that are about 10 paper clips long.”",el:["Choosing and applying techniques","Reasoning"]},
  {m:"Convince me",t:"“Convince me that your measurement is accurate. What did you do to make sure?”",el:["Understanding and fluency","Communicating"]}
 ]},
 {st:"s2",task:"Is this angle acute, right or obtuse?",moves:[
  {m:"Who is correct?",t:"“Tom says this angle is bigger than a right angle. Mei says it’s smaller. Use an angle tester to decide.”",el:["Reasoning","Communicating"]},
  {m:"Same and different",t:"“What is the same and what is different about a right angle on a book, on a tilted roof and between clock hands at 3 o’clock?”",el:["Exploring and connecting","Communicating"]},
  {m:"Always, sometimes, never",t:"“An angle with longer arms is bigger. Always, sometimes or never true?”",el:["Reasoning","Exploring and connecting"]},
  {m:"Open it up",t:"“Find an acute, a right and an obtuse angle in the playground. Sketch where each one is.”",el:["Choosing and applying techniques","Reasoning"]},
  {m:"Convince me",t:"“Convince me that a quarter-turn is a right angle, whichever way you face.”",el:["Understanding and fluency","Communicating"]}
 ]},
 {st:"s3",task:"Plot (3, 2) on the number plane.",moves:[
  {m:"Who is correct?",t:"“Kai plotted (3, 2) and (2, 3) at the same point. Jess says they’re different. Who is correct?”",el:["Reasoning","Communicating"]},
  {m:"Same and different",t:"“What is the same and what is different about the grid reference C2 and the coordinates (3, 2)?”",el:["Exploring and connecting","Communicating"]},
  {m:"Always, sometimes, never",t:"“Reflecting a point across the x-axis changes both coordinates. Always, sometimes or never true?”",el:["Reasoning","Exploring and connecting"]},
  {m:"Open it up",t:"“Plot four points that make a square with (3, 2) as one corner. How many different squares can you find?”",el:["Choosing and applying techniques","Reasoning"]},
  {m:"Convince me",t:"“Convince me that the lines, not the spaces, are numbered on a number plane.”",el:["Understanding and fluency","Communicating"]}
 ]}
];
