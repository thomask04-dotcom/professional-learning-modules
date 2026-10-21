/* ---------------- module config ---------------- */
var M = {
 key:"fr-k6-module-v1",
 title:"Fractions K–6",
 dlName:"fractions-reflections.txt",
 welcomeH2:"How students learn fractions, K to 6",
 welcomeP:"This module follows fractions across four stages: the foundations in Geometric measure and Forming groups (Early Stage 1 and Stage 1), Partitioned fractions (Stage 2) and Representing quantity fractions (Stage 3). It covers how the outcomes build, the maths you need to teach it, the misconceptions to look for, and what the NESA teaching advice and the diocesan PL slides recommend.",
 tryText:"a model for each stage: half a length, repeated halving, fraction strips on a number line, and tape diagrams.",
 namesH3:"Where fractions live in the syllabus",
 namesP:"There are no fractions outcomes in Early Stage 1 and Stage 1. The foundations are built through halving lengths in Geometric measure and sharing collections in Forming groups. Fractions become a focus area in Stage 2 (Partitioned fractions) and Stage 3 (Representing quantity fractions). All content also addresses the Working mathematically outcome, MAO-WM-01.",
 ideasP:"NESA describes many students finding fractions, and especially fraction magnitudes, “one of the most challenging concepts in learning mathematics”. The diocesan slides call fractions “a complex, intensive property of number”. Six ideas carry the journey from half a ribbon to fractions as numbers. Select an idea to see how it develops.",
 ideasNote:"These ideas connect to Multiplicative relations (fractions as division and the multiplicative relationship between part and whole) and to Representing numbers (tenths and hundredths as decimals, and benchmark percentages).",
 progP:"Fractions move from partitioning things (a ribbon, a strip, a collection) to fractions as numbers with a place on the number line. In Stage 2 the whole is the particular length being partitioned. In Stage 3 the whole is always the number 1.",
 shifts:[
  ["es1","Early Stage 1 → Stage 1","From one half to repeated halving: quarters and eighths of lengths and of collections. Students learn to re-create the whole from a half."],
  ["s1","Stage 1 → Stage 2","From halving to making thirds and fifths, which can’t start with halving. Fraction strips are mapped to number lines, fractions go beyond one, and equivalence is shown as equal lengths."],
  ["s2","Stage 2 → Stage 3","From partitioned fractions, where the whole depends on the context, to quantity fractions, where the whole is 1. Fractions become divisions, and students add, subtract and find fractions of quantities."]
 ],
 modelsH2:"Linear models first; the number line carries fractions from Stage 2",
 modelsP:"The bars show the stages where the syllabus, the NESA teaching advice or the diocesan PL slides name or use each model. Select a model for more detail.",
 modelTips:[
  ["Linear before area.","NESA advises introducing the continuous linear model first, with one-directional folds. The area model comes once students understand area."],
  ["Show the part alongside the whole.","Shading parts inside a shape lets students see a ‘1’ and a ‘3’. Placing the part next to the whole shows the relationship (diocesan slides)."],
  ["Use strips like a ruler.","Lay fraction strips along a number line so labels move from naming pieces to naming positions."],
  ["Be careful with collections.","Discrete models can suggest a fraction is two counts. NESA notes they are generally not helpful for understanding the size of fractions."]
 ],
 sorterP:"Most fraction misconceptions come from four roots, and each root reappears in a new form from halving a ribbon to adding fractions. Read each student response and choose its root.",
 rootRows:[
  ["Counting parts instead of comparing to the whole","A piece cut from the end called “my half” <span class=\"pill src-add\">Add.</span>","Unequal folds called quarters","Fraction as the number of shaded parts","Adding parts: 1/5 + 2/5 = 3/10 <span class=\"pill src-add\">Add.</span>"],
  ["The whole is ignored","Halfway point confused with half a length","“Half is always the same size”","Comparing fractions of unequal wholes; ¼ placed wrongly on a 0–2 line","Fractions of different cakes compared as if the wholes were equal"],
  ["A fraction read as two whole numbers","—","Pieces labelled 1, 2, 3 instead of eighths","‘2 over 3’; 1/8 thought bigger than 1/3","4/5 + 11/12 estimated as 15 or 17"],
  ["Reasoning only from whole to part","—","Can’t re-create the whole from a half","Can’t rebuild the strip from a quarter; complement not seen","Can’t find the whole from three-fifths; 1 − ⅓ needs a rule"]
 ],
 sorterNote:"In a study of 52 000 Year 7 students, more than half estimated 4/5 + 11/12 as 15 or 17 (Gould 2014), treating the numerators or denominators as whole numbers.",
 notesTitle:"Fractions K–6: my reflections",
 footer:"Built from the NESA <i>Mathematics K–10 Syllabus (2022)</i> outcomes and content (Early Stage 1 to Stage 3), the NESA syllabus support teaching advice, the NESA additional teaching advice <i>Stage 2 – Partitioned fractions A (Language and vocabulary)</i>, and the Catholic Education Diocese of Wollongong PL slides on fractions. Items marked <span class=\"pill src-dio\">Diocesan PL slides</span> come from those slides; items marked <span class=\"pill src-add\">Additional commentary</span> are common classroom observations, not NESA or diocesan examples. Your progress and notes are saved only in this browser."
};

/* ---------------- data ---------------- */
var STAGES = {
 es1:{short:"ES1", name:"Early Stage 1", years:"Kindergarten", fa:"Foundations: half a length (Geometric measure)", col:"var(--es1)", soft:"var(--es1-soft)"},
 s1:{short:"S1", name:"Stage 1", years:"Years 1–2", fa:"Foundations: halves, quarters and eighths (Geometric measure and Forming groups)", col:"var(--s1)", soft:"var(--s1-soft)"},
 s2:{short:"S2", name:"Stage 2", years:"Years 3–4", fa:"Partitioned fractions A and B", col:"var(--s2)", soft:"var(--s2-soft)"},
 s3:{short:"S3", name:"Stage 3", years:"Years 5–6", fa:"Representing quantity fractions A and B", col:"var(--s3)", soft:"var(--s3-soft)"}
};
var ORDER = ["es1","s1","s2","s3"];

var STAGE_CONTENT = {
es1:{
 lead:"There are no fractions outcomes in Kindergarten, but the idea of a fraction starts here. In Geometric measure, students divide a length into two equal parts and tell the halfway point from half a length. NESA introduces fractions through length so that a fraction is based on division, not counting parts.",
 outcomes:[["MAE-GM-03","identifies half the length and the halfway point (Geometric measure)"],["MAE-FG-02","forms equal groups by sharing and counting collections of objects (Forming groups)"]],
 content:[
  ["","Geometric measure — Length: Create half a length",["Divide a length into two equal parts, such as cutting a piece of ribbon into halves (Reasons about relations)","Distinguish between the halfway point and half a length","Describe positions as ‘about halfway’, ‘more than halfway’ or ‘less than halfway’"]],
  ["","Forming groups — Investigate and form equal groups by sharing",["Distribute a group of objects into smaller groups and recognise whether the number in each group is equal or not","Group and share concrete materials by distributing objects one by one or another way"]]
 ],
 know:[
  ["Fractions start with division","NESA: “The concept of a fraction is based on the process of division, rather than counting parts.” Fractions are introduced through equal sharing, with continuous (length) and discrete (collection) models."],
  ["Two meanings of half","Half can mean dividing one whole into two equal pieces (continuous), or dividing a collection into two equal groups (discrete)."],
  ["Halfway point or half a length?","The halfway point is a position, built on the equality of two lengths. Half a length is one of the two equal lengths. Model the language of two equal lengths, and give non-examples where the lengths aren’t equal."],
  ["Extending students","Students who understand half a length can find other fractions of lengths, such as repeatedly halving to find quarters, or exploring folding to make thirds."],
  ["Supporting access","For students with visual perception or fine motor difficulties, use stickers to mark start and end points, bold outlines and strong colour contrast."]
 ],
 misc:[
  {see:"Asked for half the ribbon, cuts a small piece off the end and says, “This is my half.”",name:"A half is any piece",resp:"Lay the two pieces side by side. Are they the same length? Model the language of two equal lengths.",src:"a"},
  {see:"Asked to show the halfway point of a path, cuts the path drawing in two and points to one piece.",name:"Halfway point confused with half a length",resp:"Distinguish the position (halfway point) from the length (half). NESA highlights this distinction.",src:"n"},
  {see:"Shares 9 crackers between two friends as 5 and 4, and says each friend has “half”.",name:"Halving a collection without equal groups",resp:"Ask, “Is it fair? Does each friend have the same number?” Discuss what to do with the one left over.",src:"a"},
  {see:"Says a longer ribbon is “bigger” when meaning “longer”.",name:"General words for specific attributes",resp:"NESA notes young students use ‘big’ for ‘long’ or ‘tall’. Model specific length words.",src:"n"}
 ],
 advice:["Model and reinforce the language of two equal lengths when describing halfway, and provide non-examples where the lengths are not equal.","Introduce half through both continuous (one length) and discrete (a collection shared between two) models.","Extend students by repeatedly halving to find quarters, or by exploring folding to make thirds.","See Forming groups for discrete models of fractions, and equal sharing linked with division."],
 vocab:["half","halves","about halfway","more than halfway","less than halfway","equal","length","share"],
 check:{title:"Quick check (built from the syllabus examples)",steps:["Give the student a strip of paper or ribbon. Ask, <i>Can you cut this so you and a friend get half each? How do you know?</i>","Draw a path. Ask, <i>Show me the halfway point. Is that the same as half the path?</i>","Mark a point on a length. Ask, <i>Is this about halfway, more than halfway or less than halfway?</i>"]},
 tool:"half",
 quiz:[
  {q:"What is the difference between the halfway point and half a length?",o:["There is no difference","The halfway point is a position; half a length is one of two equal lengths","Half a length is a position; the halfway point is a length","The halfway point is only used with collections"],a:1,why:"NESA notes the halfway point builds on the equality of two lengths and introduces subdividing a length, which underpins measuring."},
  {q:"According to NESA, the concept of a fraction is based on…",o:["counting the shaded parts","the process of division","reading fraction symbols","comparing numerators"],a:1,why:"The syllabus introduces fractions through equal sharing, laying foundations for fractions as division and as numbers."}
 ]
},
s1:{
 lead:"In Years 1 and 2, students use repeated halving to make quarters and eighths of a length, and find halves, quarters and eighths of collections. NESA emphasises that the size of each part depends on the size of the whole. Fraction symbols aren’t needed yet.",
 outcomes:[["MA1-GM-03","creates and recognises halves, quarters and eighths as part measures of a whole length (Geometric measure)"],["MA1-FG-01","uses the structure of equal groups to solve multiplication problems, and shares or groups to solve division problems (Forming groups)"]],
 content:[
  ["A","Geometric measure — Length: Subdivide lengths to find halves and quarters",["Model half and quarters of a whole length, highlighting the length: halve a paper strip, then halve again","Identify two equal parts and the relationship of the parts to the whole length, linking words and images","Recognise when lengths have or have not been divided into halves and quarters (a strip folded in half, then one half folded again)"]],
  ["A","Forming groups — Recognise and represent division",["Model a half of a collection and show the relation between the half and the whole"]],
  ["B","Geometric measure — Length: Repeatedly halve lengths to form eighths",["Model an eighth of a whole length, highlighting the length: compare halving a strip 3 times with halving one-half of a half","Recognise when a length is divided into eight equal parts (What fraction of the whole is the arrow pointing to?)"]],
  ["B","Forming groups — Model doubling and halving with fractions",["Model doubling and halving and the relation between them (double 4 is 8, so half of 8 is 4)","Re-create the whole given half (if half is 3 marbles, how many altogether?)","Model a half, a quarter or an eighth of a collection and explain their thinking (quarters of 12)"]]
 ],
 know:[
  ["Division, not counting parts","NESA: in Stage 1, fractions are formed by division. Halves, quarters and eighths are formed as equal parts of a whole length, and as equal quantities of a linear arrangement of a collection."],
  ["The whole decides the size","With repeated halving, emphasise that the size of the part depends on the size of the original whole length or collection."],
  ["Three models, in order","Continuous linear (one-directional folds, highlight the long edge) first. Continuous area (multi-directional folds) once area is understood in Stage 2. Discrete (separate items in a collection)."],
  ["No symbols needed yet","It isn’t necessary for Stage 1 students to use ½ or ¼. Use the words: one-half, one-quarter, one-eighth."],
  ["Strips to number lines","On a fraction strip each piece is one-eighth. On a number line, one-eighth is a single position: one-eighth of a unit from 0. Watch for this shift in labelling as students move to Stage 2. <span class=\"pill src-dio\">Diocesan PL slides</span>"],
  ["What Stage 1 should leave students able to do","Use repeated halving for halves, quarters and eighths; distinguish the halfway point from half a length; re-create the whole given half; model fractions of collections; relate doubling and halving. <span class=\"pill src-dio\">Diocesan PL slides</span>"]
 ],
 misc:[
  {see:"Folds a strip in half, then folds just one half again, and says the strip is now in quarters.",name:"Any parts are quarters",resp:"Unfold and compare the pieces. Are they all the same length? The syllabus asks students to recognise when lengths have not been divided into quarters.",src:"n"},
  {see:"Says “half is always the same size”, so half of a short strip equals half of a long one.",name:"The whole is ignored",resp:"Halve two strips of different lengths and compare. NESA stresses that the size of the part depends on the whole.",src:"n"},
  {see:"Labels the pieces of an eighths strip 1, 2, 3 … 8, and later can’t say where one-eighth sits on a number line.",name:"Naming pieces, not positions",resp:"Lay the strip along a number line like a ruler and name positions: one-eighth, two-eighths … eight-eighths is one whole.",src:"d"},
  {see:"Told that half is 3 marbles, says there are 3 altogether.",name:"Not re-creating the whole from the half",resp:"Model with two equal groups: “This is one half. What would the other half look like?”",src:"a"},
  {see:"Finds a quarter of 12 counters by taking any 3, but can’t say why they are a quarter.",name:"Fraction of a collection without equal groups",resp:"Share the 12 into 4 equal groups and point to one group. Relate quarters to halving and halving again.",src:"a"}
 ],
 advice:["Introduce the continuous linear model first, using one-directional cuts or folds and highlighting the long edge to focus on length.","Use a length of 10 connecting cubes as a measuring device; half of it links measurement to simple fractions.","Compare halving a strip three times with halving one-half of a half.","Ask, ‘If half is 3 marbles, how many altogether?’ to build reversible thinking from the start.","<span class=\"pill src-dio\">Diocesan PL slides</span> Use fraction strips like a ruler as students move to number lines, and notice the shift from naming pieces to naming positions."],
 vocab:["half","halves","quarter","eighth","equal parts","whole","halve","double","one-half","one-quarter","one-eighth"],
 check:{title:"Quick checks (NESA key progress point and syllabus examples)",steps:["<b>NESA (Geometric measure A).</b> Draw an equilateral triangle. Say, <i>An ant crawls around the outside of this triangle. Can you show where the ant will be when it is half of the way around from the start?</i> Starting from the base shows whether the student halves the distance, not the triangle.","Ask, <i>If half is 3 marbles, how many altogether?</i>","Show a strip divided into eighths with an arrow at one part. Ask, <i>What fraction of the whole is the arrow pointing to?</i>","Show a strip folded in half with one half folded again. Ask, <i>Is this divided into quarters? How do you know?</i>"]},
 tool:"halving",
 quiz:[
  {q:"Which model of fractions does NESA advise introducing first?",o:["The area model, shading parts of a circle","The continuous linear model, with one-directional folds","The discrete model, with collections","Fraction symbols"],a:1,why:"Linear folds compare parts by length. The area model comes once students understand area in Stage 2."},
  {q:"Do Stage 1 students need to use the symbols ½ and ¼?",o:["Yes, from the start of Stage 1","No, it isn’t necessary in Stage 1","Only for eighths","Only with collections"],a:1,why:"NESA notes it isn’t necessary for Stage 1 students to use the symbols; the words carry the meaning."},
  {q:"When repeatedly halving, what should teachers emphasise about the size of the part?",o:["It is always the same","It depends on the size of the original whole","It depends on how many folds","It doesn’t matter"],a:1,why:"The same fraction of different wholes gives different sizes, which matters later for comparing fractions."}
 ]
},
s2:{
 lead:"In Years 3 and 4, students make thirds and fifths without halving, map fraction strips to number lines, show equivalence as equal lengths, and go beyond one whole. NESA describes fractions here as partitioned lengths that become numbers once they are placed on a number line.",
 outcomes:[["MA2-PF-01","represents and compares halves, quarters, thirds and fifths as lengths on a number line and their related fractions formed by halving (eighths, sixths and tenths)"]],
 content:[
  ["A","Create fractional parts of a length using techniques other than repeated halving",["Make thirds of a length (creating fraction strips for thirds)","Create fifths of a length"]],
  ["A","Model and represent unit fractions, and their multiples, to a complete whole on a number line",["Model halves, quarters, eighths and thirds with fraction strips and diagrams","Describe fraction families with the same denominator (thirds: one-third, two-thirds)","Determine the complement needed to complete one whole (Reasons about relations)","Recreate the whole from ½, ¼, ⅓ and ⅛ (Reversible reasoning): if this is a quarter of the strip, how big is the whole strip?"]],
  ["B","Model equivalent fractions as lengths",["Represent equivalence with related denominators as lengths: 4 eighths is one half; 4 tenths is 2 fifths","Recognise the need for equal wholes to compare (a quarter of one length of timber can be more than a quarter of another) (Reasoning about relations)","Use same-size wholes to compare (2, 4 and 8; 3 and 6; 5 and 10): which is larger, ⅓ or ⅜?"]],
  ["B","Represent fractional quantities equal to and greater than one",["Rename 2 halves, 3 thirds, 4 quarters, 5 fifths, 6 sixths, 8 eighths and 10 tenths as one whole","Regroup fractional parts beyond one (draw a piece of chocolate four-thirds the size)","Represent totals of halves, thirds, quarters and fifths beyond one on a number line","Locate one-quarter and one-half when a number line extends beyond one"]]
 ],
 know:[
  ["Two ways of thinking about fractions","Fractions describe partitions of an object or collection, and they denote numbers (½ is midway between 0 and 1). Stage 2 moves from the first to the second by mapping partitioned lengths to number lines."],
  ["Discrete models have limits","With a collection, it’s easier to see 1 red dot and 3 black dots than one red dot as one of 4. Discrete models can suggest a fraction is two counts, and don’t show the size of fractions well."],
  ["A multiplicative relationship","Learning fractions means coordinating units in a multiplicative relationship (Hackenberg et al. 2016). Counting parts leads students to see fractions as two whole numbers, and the whole as an additive sum of parts."],
  ["Compare only with equal wholes","Half of a 6 m length of timber is more than two-thirds of a 3 m length. Change the length of the unit ‘1’ on number lines so students see that fractions refer to a whole."],
  ["Say ‘two-thirds’, not ‘2 over 3’","Reading a fraction as two numbers (‘2 out of 3’, ‘2 over 3’) is a barrier to seeing it as one number (Way and Bobis 2011). The words numerator and denominator can wait until Stage 3. In Japanese, ¾ is said ‘of four parts, three’."],
  ["Number lines matter","The number line plays a causal role in fraction magnitude understanding and is more beneficial than area models (Hamdan and Gunderson 2017). <span class=\"pill src-dio\">Diocesan PL slides</span>"]
 ],
 misc:[
  {see:"Shown a circle with 3 of 4 parts shaded, says the fraction is “3 and 1”.",name:"A fraction as two counts",resp:"Show the part alongside the whole on a strip, not shaded inside it. Ask how many quarters make the whole.",src:"d"},
  {see:"Says one-quarter of a long plank and one-quarter of a short plank are the same amount.",name:"Comparing fractions of unequal wholes",resp:"Compare only with equal wholes. Ask students to explain why a quarter of one length of timber can be more than a quarter of another.",src:"n"},
  {see:"Tries to make thirds by folding in half, then half again.",name:"Every fraction comes from halving",resp:"Thirds and fifths can’t start with halving. Practise folding strips into thirds, adjusting and refolding until the parts are equal.",src:"n"},
  {see:"On a number line from 0 to 2, places ¼ a quarter of the way along the whole line.",name:"The whole is the whole line",resp:"Find 1 first. A quarter is a quarter of the distance from 0 to 1, wherever the line ends.",src:"n"},
  {see:"Says ⅛ is bigger than ⅓ “because 8 is bigger than 3”.",name:"Bigger denominator, bigger fraction",resp:"Align strips for thirds and eighths with the same whole. More parts means smaller parts.",src:"a"},
  {see:"Counts “one quarter, two quarters, three quarters, four quarters, five quarters” but can’t say 4 quarters is one whole.",name:"Counting fractions without seeing the whole",resp:"NESA notes fractions aren’t counting numbers. Iterate quarter-lengths and rename 4 quarters as 1 when the whole is complete.",src:"n"}
 ],
 advice:["Use fraction strips to subdivide a whole length, then use the number line like a ruler to show benchmark fractions such as ½ and ¼.","Record fraction strips as tape diagrams, which help students move from partitioned shapes to fractions as numbers (Spencer and Fielding 2015).","Practise folding paper strips, drawing and virtual fraction bars to make thirds and fifths. Adjusting to form equal parts emphasises that parts are equal and together form the whole.","Develop the fraction concept as a comparison of part to whole before formal symbols. How many quarters recreate the whole?","Use different-length units for ‘1’ on number lines, and units of measure (4 quarter litres make 1 litre) when going beyond the whole.","Students can complete Frayer models in their own words for terms such as two-thirds (NESA additional advice).","Use word origins to support fraction families: numerator comes from Latin for ‘counter or numberer’, and denominator from ‘that which gives a name’. Fractions with the same denominator belong to the same family (NESA additional advice)."],
 vocab:["whole","part","equal parts","fractional part","half","quarter","eighth","third","sixth","fifth","tenth","one-third","one-fifth","fraction","whole number","number line","is equal to","equivalent fractions"],
 check:{title:"Quick checks (NESA key progress point and diocesan slides)",steps:["<b>NESA (Mitchell 2011).</b> Show a bar beside a row of pencils of equal length, where the bar is a whole number of pencils plus part of one. Ask, <i>How long is this bar in pencils?</i> If the student gives a whole number, prompt, <i>Is it exactly three? How did you work that out?</i>","Ask, <i>Position two-thirds on a number line with endpoints 0 and 2.</i> <span class=\"pill src-dio\">Diocesan PL slides</span>","Show a strip. Say, <i>This is a quarter of the whole strip. How big is the whole strip?</i>","Ask, <i>Which is larger, one-third or three-eighths? Show me with strips.</i> Try the fraction strip tool below."]},
 tool:"strips",
 quiz:[
  {q:"How does NESA’s additional advice suggest reading ⅔?",o:["‘2 over 3’","‘2 out of 3’","‘Two-thirds’","‘2 divided by 3’ only"],a:2,why:"Reading the numerator and denominator as two separate numbers creates a barrier to seeing the fraction as a single number (Way and Bobis 2011)."},
  {q:"Why is half of a 6 m length of timber more than two-thirds of a 3 m length?",o:["Halves are always bigger than thirds","The wholes are different, so the fractions can’t be compared directly","Two-thirds is less than one-half","Timber can’t be partitioned evenly"],a:1,why:"Fractional parts can only be compared when the relation between the wholes is known."},
  {q:"Why do students find thirds and fifths harder to make than quarters and eighths?",o:["The numbers are bigger","They can’t begin with halving","They aren’t in the syllabus until Stage 3","They need a calculator"],a:1,why:"Quarters and eighths come from repeated halving; thirds and fifths need other techniques, such as folding and adjusting."}
 ]
},
s3:{
 lead:"In Years 5 and 6, fractions become numbers with the whole always ‘1’. Students compare and order fractions, add and subtract with the same and related denominators, see fractions as division, rebuild the whole from a non-unit fraction, and find fractions of quantities.",
 outcomes:[["MA3-RQF-01","compares and orders fractions with denominators of 2, 3, 4, 5, 6, 8 and 10"],["MA3-RQF-02","determines ½, ¼, ⅕ and ⅒ of measures and quantities"]],
 content:[
  ["A","Recognise the role of the number 1 as representing the whole",["Compare halves and quarters of different sized wholes (Jake ate ¼ of a cake and Kate ate ½ of a different cake; how could Jake have eaten more?)","Justify the need for fractions to refer to the number 1 as the common whole (Reasons about quantity)"]],
  ["A","Compare and order common unit fractions",["Compare unit fractions to the benchmark ½ (is ⅕ smaller or larger than ½?)","Order unit fractions with denominators of 2, 3, 4, 5, 6, 8 and 10 on a number line"]],
  ["A","Add and subtract fractions with the same denominator",["Represent sums, recreating the whole, where the result may exceed one (⅘ + ⅗ = 7/5)","Find and interpret differences (7/8 − 2/8 = 5/8 is more than one-half)","Solve word problems (I eat ⅕ of a block of chocolate and you eat ⅗)","Subtract a unit fraction from a whole number, including 1, using the complement principle (1 − ⅓ = ⅔)"]],
  ["B","Recognise that a fraction can represent a division",["¾ represents 3 divided by 4"]],
  ["B","Compare common fractions with related denominators",["Order on number lines: halves, quarters and eighths; thirds and sixths; fifths and tenths","Subdivide a rectangle by length and width to show sixths, thirds and halves","Compare fractions of a whole shape (area model) and a collection (discrete model)","Create equivalent fractions for half in quarters, eighths, sixths and tenths (a fraction wall)","Record equivalences in diagrams, words and notation (6/8 = ¾)"]],
  ["B","Build up to the whole from a given fractional part",["Generate the whole from non-unit fractions (given three-fifths of a length of tape, find the whole) (Reversible reasoning)"]],
  ["B","Use equivalence to add and subtract fractional quantities",["Solve word problems with related denominators (Jake ate ⅛ and Kath ate ¼ of the cake: what fraction remains?)","Represent fractions with the same or related denominators to add and subtract (how much more is ¾ than ⅜?) (Reasons about relations)"]],
  ["B","Find fractional quantities of whole numbers",["Find quarters and fifths of multiples of the denominator with a tape diagram (⅖ of 30)","Solve word problems (share 7 chocolate fingers equally between 4 people)","Find ½, ¼, ⅕ and ⅒ of collections, expressing remainders as decimals"]]
 ],
 know:[
  ["A fraction is one number","More than half of 52 000 Year 7 students estimated 4/5 + 11/12 as 15 or 17 (Gould 2014). The syllabus develops ⅓ as the number made by dividing a unit whole by 3, not as ‘a numerator of 1 and a denominator of 3’."],
  ["The unit whole is 1","For partitioned fractions the whole is specific to the context, and it disappears once the ribbon is cut. For quantity fractions the whole is always implied: it is the number 1."],
  ["Fractions as division","12 lamingtons shared between 24 people is easier than ‘12 ÷ 24’, where students often answer 2. Tape diagrams with a changing quantity link division and fractions (24 ÷ 4 = 6; 1 ÷ 4 = ¼). 2 shared between 5 is ⅖."],
  ["The complement","The complement of a proper fraction completes the whole: the complement of ¼ is ¾. Recognising ⅕ and ⅘ as complements simplifies ⅘ + ⅗."],
  ["Reversible reasoning","Finding the whole from three-fifths means dividing three-fifths into 3 equal parts to get one-fifth, then building five-fifths. Reverse tasks need deeper understanding than the original task (Tunc-Pekkan 2015)."],
  ["Area models build equivalence","Subdividing a rectangle by length and width (thirds, then halve each third to make sixths) shows how equivalent fractions and common denominators are made, better than counting shaded parts in given diagrams."]
 ],
 misc:[
  {see:"Estimates 4/5 + 11/12 as 15 or 17.",name:"Fractions as two whole numbers",resp:"Compare each fraction to the benchmarks 0, ½ and 1. Both are close to 1, so the sum is close to 2.",src:"n"},
  {see:"For “12 lamingtons shared equally between 24 people”, answers 2.",name:"Dividing the larger number by the smaller",resp:"Use the words and a tape diagram before the symbols: each person gets less than one lamington, 12/24 or ½.",src:"n"},
  {see:"Says Jake can’t have eaten more cake than Kate because ¼ is less than ½.",name:"Ignoring different wholes",resp:"Discuss different-sized cakes. Fractions as numbers refer to the common whole, 1.",src:"n"},
  {see:"Writes ⅕ + ⅖ = 3/10.",name:"Adding numerators and denominators",resp:"Use strips: one-fifth and two-fifths of the same whole is three-fifths. The size of the parts doesn’t change.",src:"a"},
  {see:"Given three-fifths of a tape, adds two more pieces the same size as the whole three-fifths.",name:"Building the whole from the wrong unit",resp:"Split three-fifths into 3 equal parts to find one-fifth first, then build five-fifths.",src:"n"},
  {see:"Can’t find 2 − ⅝ without a written procedure.",name:"No intuitive sense of fraction size",resp:"Empson and Levi suggest that students without intuitive strategies (⅝ is ⅜ away from 1, so 1⅜) aren’t ready for standard procedures.",src:"n"}
 ],
 advice:["Present some fraction problems in words before symbols, because notation gives few clues to meaning as division.","Use tape diagrams to connect fractions with the four operations and to make sense of the unit fraction. Pay attention to the size of the units in word problems (Xiaobo and Harrington 2022).","Use the measurement model: the distance from 0 to 1 divided into any number of lengths, then subdivided for related denominators.","Let students actively explore dividing areas, subdividing rectangles by both length and width.","Use the term ‘fraction bar’ for the line between numerator and denominator.","<span class=\"pill src-dio\">Diocesan PL slides</span> Use bar models for complements (1 − ⅝) and fractions of quantities (⅔ of 6), tape diagrams for ⅗ of 30, and area models for related denominators (⅕ + ⅒ = 3/10)."],
 vocab:["fraction","numerator","denominator","fraction bar","whole","whole number","equal parts","half","third","quarter","fifth","sixth","eighth","tenth","equivalent","is equal to","ascending order","descending order","number line"],
 check:{title:"Quick checks (NESA key progress point and diocesan slides)",steps:["<b>NESA (Empson and Levi 2011).</b> Pose problems such as <b>1 − ⅓</b> and <b>2 − ⅝</b>, in words or as practical tasks. Students without intuitive strategies aren’t yet ready for standard procedures for adding and subtracting fractions.","Ask, <i>Find four-thirds of 60.</i> One-third of 60 is 20, so four-thirds is 80. <span class=\"pill src-dio\">Diocesan PL slides</span>","Ask, <i>How much cake does each person get if 2 cakes are shared between 3 people?</i> The answer is in the question: ⅔ of a cake. <span class=\"pill src-dio\">Diocesan PL slides</span>","Ask, <i>If you are given three-fifths of a length of tape, how can you find the whole length?</i> Try the tape diagram below."]},
 tool:"tape",
 quiz:[
  {q:"More than half of 52 000 Year 7 students estimated 4/5 + 11/12 as 15 or 17. What does this show?",o:["Weak addition facts","Treating fractions as two whole numbers (numerators or denominators)","Not knowing benchmark fractions","Rushing"],a:1,why:"Both fractions are close to 1, so the sum is close to 2. Developing fractions as numbers on a number line addresses this."},
  {q:"Given three-fifths of a length, what is the first step to find the whole?",o:["Multiply the length by 5","Split the three-fifths into 3 equal parts to find one-fifth","Add two more pieces the same as the three-fifths","Divide by 5"],a:1,why:"Finding one-fifth first lets students build the whole as five-fifths."},
  {q:"12 lamingtons are shared equally between 24 people. As a fraction, how much does each person get?",o:["2","12/24, or one-half","24/12","1/12"],a:1,why:"A fraction can represent division: 12 ÷ 24 = 12/24 = ½. Words make the meaning clearer than the symbols."}
 ]
}
};

var IDEAS = [
 {t:"A fraction comes from dividing into equal parts",d:"Fractions are based on division, not on counting parts.",s:{es1:"Cutting a ribbon into two equal parts; sharing a collection between two.",s1:"Repeated halving for quarters and eighths; halves and quarters of collections.",s2:"Making thirds and fifths without halving.",s3:"Fractions as division: ¾ is 3 ÷ 4; 2 cakes shared between 3."}},
 {t:"The whole matters",d:"A fraction always refers to a whole, and you can only compare fractions of equal wholes.",s:{es1:"Halfway along a particular length.",s1:"The size of a part depends on the size of the whole.",s2:"Equal wholes to compare; where ¼ sits depends on where 1 is.",s3:"The number 1 as the common whole."}},
 {t:"A fraction is a number",d:"Each fraction has one position on the number line.",s:{es1:"About halfway, more than halfway, less than halfway.",s1:"Eighths named on a strip, ready to become positions.",s2:"Fraction strips mapped to number lines; going beyond one.",s3:"Comparing and ordering on a number line; the benchmark ½."}},
 {t:"Equivalence: same number, different names",d:"Re-dividing the whole gives equivalent fractions.",s:{es1:"Two halves make the whole.",s1:"Half of a half is a quarter.",s2:"4 eighths is one half; 4 tenths is 2 fifths; 4 quarters is 1.",s3:"Half as quarters, eighths, sixths and tenths; 6/8 = ¾; area models."}},
 {t:"From the part back to the whole",d:"Reversible reasoning and the complement build part-whole understanding both ways.",s:{es1:"Two equal parts put back together make the whole.",s1:"Re-create the whole given half.",s2:"The complement to one whole; rebuild the whole from a unit fraction.",s3:"Rebuild the whole from three-fifths; 1 − ⅓ = ⅔."}},
 {t:"Fractions as quantities to operate on",d:"Fractions can be added, subtracted and taken of quantities.",s:{es1:"Sharing a collection fairly between two.",s1:"Halves, quarters and eighths of collections; doubling and halving.",s2:"Totals beyond one; renaming 4 quarters as 1.",s3:"Adding and subtracting same and related denominators; ⅖ of 30."}}
];

var ASPECTS = [
 {k:"o",l:"Outcomes",v:{es1:"No fractions outcomes. Foundations: <b>MAE-GM-03</b> identifies half the length and the halfway point",s1:"No fractions outcomes. Foundations: <b>MA1-GM-03</b> creates and recognises halves, quarters and eighths as part measures of a whole length; fractions of collections in <b>MA1-FG-01</b>",s2:"<b>MA2-PF-01</b> represents and compares halves, quarters, thirds and fifths as lengths on a number line and their related fractions formed by halving (eighths, sixths and tenths)",s3:"<b>MA3-RQF-01</b> compares and orders fractions with denominators of 2, 3, 4, 5, 6, 8 and 10<br><br><b>MA3-RQF-02</b> determines ½, ¼, ⅕ and ⅒ of measures and quantities"}},
 {k:"f",l:"Fractions involved",v:{es1:"Half",s1:"Halves, quarters, eighths",s2:"Halves, quarters, eighths, thirds, sixths, fifths, tenths; beyond one",s3:"Denominators 2, 3, 4, 5, 6, 8 and 10; ½, ¼, ⅕ and ⅒ of quantities"}},
 {k:"m",l:"Main models",v:{es1:"Lengths (ribbon, paper); sharing collections",s1:"Folded strips; linear arrangements of collections",s2:"Fraction strips mapped to number lines; tape diagrams",s3:"Number lines, area models, tape and bar diagrams, collections"}},
 {k:"w",l:"The whole",v:{es1:"A particular length or collection",s1:"The original strip or collection: its size decides the size of the parts",s2:"Equal wholes are needed to compare; where is 1 on the line?",s3:"Always the number 1"}},
 {k:"l",l:"Language and symbols",v:{es1:"half, halves, halfway",s1:"half, quarter, eighth in words; symbols not needed",s2:"‘two-thirds’, not ‘2 over 3’; fraction families; numerator and denominator can wait",s3:"numerator, denominator, fraction bar, equivalent"}}
];

var MODELS = [
 {n:"Lengths: ribbon and paper strips",w:"halving by cutting and folding",s:0,e:1,d:"Half a length in Early Stage 1; repeated halving for quarters and eighths in Stage 1, highlighting the long edge. NESA advises introducing this continuous linear model first."},
 {n:"Collections shared fairly",w:"half, quarter and eighth of a group",s:0,e:1,d:"Sharing between two (Early Stage 1) and halves, quarters and eighths of collections arranged in a line (Stage 1). Discrete models are revisited in Stage 3 alongside area models."},
 {n:"Fraction strips",w:"partitioning a whole length",s:1,e:2,d:"Strips labelled in eighths in Stage 1; thirds and fifths, fraction families and equivalence in Stage 2. Used like a ruler against a number line."},
 {n:"Number line",w:"fractions as numbers with a position",s:2,e:3,hi:true,d:"Fraction strips mapped onto number lines in Stage 2, including beyond one; comparing and ordering fractions in Stage 3. The diocesan slides note it plays a causal role in fraction magnitude understanding (Hamdan and Gunderson 2017)."},
 {n:"Tape diagrams and bar models",w:"part-whole and fractions of quantities",s:2,e:3,d:"Fraction strips recorded as tape diagrams in Stage 2; fractions as division, complements and fractions of quantities (⅖ of 30) in Stage 3."},
 {n:"Units of measure",w:"4 quarter litres make 1 litre",s:2,e:2,d:"Having a unit of measure makes the whole easier to describe when fractions exceed one."},
 {n:"Frayer models",w:"vocabulary such as two-thirds",s:2,e:2,d:"Students complete Frayer models in their own words (NESA additional advice, Partitioned fractions A)."},
 {n:"Area model",w:"subdividing rectangles both ways",s:3,e:3,d:"Divide the length into thirds, then halve each third to make sixths. Shows how equivalent fractions and common denominators are created."},
 {n:"Fraction wall",w:"one-half in many names",s:3,e:3,d:"Show one-half as quarters, eighths, sixths and tenths."}
];

var ROOTS = ["Counting parts instead of comparing to the whole","The whole is ignored","A fraction read as two whole numbers","Reasoning only from whole to part"];
var SCENARIOS = [
 {st:"es1",q:"Asked for half the ribbon, Ava cuts a small piece off the end and says, “This is my half.”",a:0,why:"Ava treats any piece as a half. Lay the two pieces side by side and talk about two equal lengths."},
 {st:"s1",q:"Mia folds a strip in half, then folds one half again, and says the strip is in quarters.",a:0,why:"Mia counts four sections (or folds) without checking that the parts are equal."},
 {st:"s1",q:"Josh says half of a short strip is the same as half of a long strip, “because half is half”.",a:1,why:"The size of the part depends on the whole. Halve two different strips and compare."},
 {st:"s2",q:"Ella says ⅛ is bigger than ⅓ “because 8 is bigger than 3”.",a:2,why:"Ella reads the denominator as a whole number. Aligned strips with the same whole show more parts means smaller parts."},
 {st:"s2",q:"On a number line from 0 to 2, Ben places ¼ a quarter of the way along the whole line.",a:1,why:"Ben uses the whole line as the unit. A quarter is a quarter of the distance from 0 to 1."},
 {st:"s2",q:"Given a strip and told it is one-quarter of the whole, Zoe can’t draw the whole strip.",a:3,why:"Zoe can go from whole to part but not back. The syllabus asks students to recreate the whole from a unit fraction (reversible reasoning)."},
 {st:"s2",q:"Shown a circle with 3 of 4 parts shaded, Noah says “3 and 1”.",a:0,why:"Shading inside the shape lets Noah count parts instead of relating the part to the whole. Show the part alongside the whole."},
 {st:"s3",q:"Estimating 4/5 + 11/12, Sam chooses 15.",a:2,why:"Sam added numerators. Both fractions are close to 1, so the sum is close to 2."},
 {st:"s3",q:"Ruby says Jake can’t have eaten more cake than Kate, because Jake ate ¼ and Kate ate ½ (of a different cake).",a:1,why:"Ruby ignores that the cakes are different wholes. Fractions as numbers use the common whole, 1."},
 {st:"s3",q:"Kai writes ⅕ + ⅖ = 3/10.",a:2,why:"Kai adds numerators and denominators as whole numbers. The parts are still fifths."},
 {st:"s3",q:"Asked for 1 − ⅓, Lily says she needs a rule before she can start.",a:3,why:"Lily doesn’t yet see ⅔ as the complement of ⅓. Use a strip: take one-third from the whole."}
];

var PROMPTS = [
 ["Looking across the progression","Which of the six big ideas does your stage depend on most? Which earlier stage is it built on?"],
 ["Looking across the progression","How often do your students meet fractions as lengths on a number line, compared with shaded shapes?"],
 ["Looking across the progression","The diocesan slides ask why ‘an equal part of a whole’ might be an insufficient understanding of a fraction. What is your answer?"],
 ["Your students","Run the quick check for your stage with three students: one secure, one you’re unsure of and one who is struggling. What did you learn that you didn’t expect?"],
 ["Your students","Which root misconception do you see most often? Where in the earlier stages might it have started?"],
 ["Your students","Can your students rebuild the whole from a part? Which students go only from whole to part?"],
 ["Your practice","How do you read ⅔ aloud? Do you say ‘two-thirds’, ‘2 out of 3’ or ‘2 over 3’?"],
 ["Your practice","How much of your fractions teaching uses shading inside shapes? What could you use instead?"],
 ["Your practice","How do you recognise students’ home languages and cultural knowledge (such as sharing within kinship systems) when teaching fractions?"]
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
  tagsLead:"Every content point addresses MAO-WM-01. In this stage, the fraction foundations are in Geometric measure, where the syllabus tags this point as reasoning:",
  tags:[["Divide a length into two equal parts (Geometric measure)","Reasons about relations"]],
  before:{task:"Colour half of the rectangle.<br><br>▭",lim:["The ‘shading approach’ shows the part inside the whole (diocesan slides)","One correct response, no explanation","Doesn’t ask whether the parts are equal"]},
  after:{task:"“Here is a ribbon. Cut it so that you and a friend get half each. How do you know it’s fair?”<br><br>“Now show me the halfway point of this path. Is that the same as half the path?”",enable:"Fold a paper strip end to end and compare the two pieces.",extend:"“Can you find half of half the ribbon? What would you call that piece?”",listen:"Placing the pieces side by side; ‘the same length’; telling a position (halfway point) from a length (half).",el:["Understanding and fluency","Exploring and connecting","Communicating","Reasoning"]}
 },
 s1:{
  tagsLead:"Every content point addresses MAO-WM-01. The syllabus doesn’t tag Stage 1 fractions content as reasoning, but these points invite it:",
  tags:[["Recognise when lengths have or have not been divided into halves and quarters (Geometric measure)","Invites reasoning"],["Re-create the whole given half (Forming groups)","Invites reasoning"],["Model a half, a quarter or an eighth of a collection, and explain their thinking (Forming groups)","Invites reasoning"]],
  before:{task:"Shade one quarter of the square.<br><br>□",lim:["The area model, which NESA places after the linear model","Shading invites counting parts","No need to show the parts are equal"]},
  after:{task:"“Fold a strip to show quarters. Now fold another strip in half, and fold just one half in half again. Are these quarters too? Convince me.”",enable:"Start with halves: fold and compare the two pieces.",extend:"“Make eighths. How many eighths are in one quarter? How do you know?”",listen:"Checking equal lengths; ‘a quarter is half of a half’; noticing that the size of the parts depends on the strip.",el:["Understanding and fluency","Exploring and connecting","Communicating","Reasoning"]}
 },
 s2:{
  tags:[["Determine the complementary fractional part needed to complete one whole","Reasons about relations"],["Recreate the whole unit from a fractional part (½, ¼, ⅓ and ⅛)","Reversible reasoning"],["Recognise the need to have equal wholes to compare partitioned fractions","Reasoning about relations"]],
  before:{task:"What fraction is shaded?<br><br>◕ (3 of 4 parts shaded)",lim:["Counting shaded parts can be done without seeing the fraction as a number","The part overlaps the whole (diocesan slides)","No comparison, no reasoning"]},
  after:{task:"“Position two-thirds on a number line from 0 to 2. Then position it on a line from 0 to 1. Why does it look different but stay the same number?” (diocesan slides)",enable:"Lay a thirds fraction strip along a number line from 0 to 1.",extend:"“Where would four-thirds go on each line? Explain how you know.”",listen:"Finding 1 first; dividing the distance from 0 to 1 into three equal parts; ‘two-thirds is one third less than one whole’.",el:["Exploring and connecting","Choosing and applying techniques","Communicating","Reasoning"]}
 },
 s3:{
  tags:[["Justify the need for fractions to refer to the number 1 as the common whole","Reasons about quantity"],["Generate the whole quantity from non-unit fractional parts","Reversible reasoning"],["Represent fractional quantities with the same or related denominators to add and subtract","Reasons about relations"]],
  before:{task:"Find ⅖ of 30.<br><br>Answer: ____",lim:["Can be done by a memorised rule (divide by the bottom, times by the top)","No representation of the relationship","Only works from whole to part"]},
  after:{task:"“Bella says ⅖ of 30 is 12. Jack says it’s 2 × 30 ÷ 5. Use a tape diagram to show whether they agree.”<br><br>“Now: 12 is ⅖ of a number. What is the number?”",enable:"Start with ⅕ of 30 on a tape diagram.",extend:"“Find four-thirds of 60. Is it more or less than 60? Why?” (diocesan slides)",listen:"Each fifth is 6; two-fifths is 12; reversing: 12 is two-fifths, so one-fifth is 6 and the whole is 30.",el:["Understanding and fluency","Exploring and connecting","Communicating","Reasoning"]}
 }
};

var CLOSED = [
 {st:"s1",task:"Colour half of the shape.",moves:[
  {m:"Who is correct?",t:"“Ari folded the paper corner to corner. Bella folded it edge to edge. Who made halves? How do you know?”",el:["Reasoning","Communicating"]},
  {m:"Same and different",t:"“What is the same and what is different about half of a ribbon, half of 8 counters and the halfway point of a path?”",el:["Exploring and connecting","Communicating"]},
  {m:"Always, sometimes, never",t:"“Half of something is bigger than a quarter of something else. Always, sometimes or never true?”",el:["Reasoning","Exploring and connecting"]},
  {m:"Open it up",t:"“Show half of this strip in as many different ways as you can.”",el:["Choosing and applying techniques","Reasoning"]},
  {m:"Convince me",t:"“Convince me that these two pieces are halves.”",el:["Understanding and fluency","Communicating"]}
 ]},
 {st:"s2",task:"Shade ¾ of the rectangle.",moves:[
  {m:"Who is correct?",t:"“Tom says ⅜ is bigger than ⅓. Mei says it’s smaller. Use fraction strips with the same whole to decide.”",el:["Reasoning","Communicating"]},
  {m:"Same and different",t:"“What is the same and what is different about ¾, 6/8 and ⅜ on a number line?”",el:["Exploring and connecting","Communicating"]},
  {m:"Always, sometimes, never",t:"“A fraction with a bigger denominator is smaller. Always, sometimes or never true?”",el:["Reasoning","Exploring and connecting"]},
  {m:"Open it up",t:"“Find as many fractions as you can between one-half and one whole, using the fraction families you know.”",el:["Choosing and applying techniques","Reasoning"]},
  {m:"Convince me",t:"“Convince me that 4 quarters is the same as one whole, using a number line.”",el:["Understanding and fluency","Communicating"]}
 ]},
 {st:"s3",task:"¼ + ⅛ = ____",moves:[
  {m:"Who is correct?",t:"“Kai says ¼ + ⅛ = 2/12. Jess says it’s ⅜. Who is correct? Use a fraction wall to prove it.”",el:["Reasoning","Communicating"]},
  {m:"Same and different",t:"“What is the same and what is different about ¼ + ⅛, 2/8 + ⅛ and 3 ÷ 8?”",el:["Exploring and connecting","Communicating"]},
  {m:"Always, sometimes, never",t:"“When you add two fractions, the answer is bigger than both of them. Always, sometimes or never true?”",el:["Reasoning","Exploring and connecting"]},
  {m:"Open it up",t:"“Jake ate ⅛ of a cake and Kath ate ¼. What fraction remains? Write a similar problem where exactly half the cake remains.”",el:["Choosing and applying techniques","Reasoning"]},
  {m:"Convince me",t:"“Convince me that ¼ + ⅛ is less than one-half without working out the exact answer.”",el:["Understanding and fluency","Communicating"]}
 ]}
];
