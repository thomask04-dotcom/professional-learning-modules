/* ---------------- module config ---------------- */
var M = {
 key:"mr-k6-module-v1",
 title:"Multiplicative Relations K–6",
 dlName:"multiplicative-relations-reflections.txt",
 welcomeH2:"How students learn to multiply and divide, K to 6",
 welcomeP:"This module follows one thread across four stages, from Forming groups in Early Stage 1 and Stage 1 to Multiplicative relations in Stages 2 and 3. It covers how the outcomes build, the maths you need to teach it, the misconceptions to look for, and what the NESA teaching advice and the diocesan PL slides recommend.",
 tryText:"a model for each stage: fair sharing, groups and arrays, splitting an array, and the area model.",
 ideasP:"The diocesan slides describe the journey as moving “from forming a group and establishing whether groups are equal” to “selecting and applying properties of number and properties of multiplication” to multiply and divide efficiently. Six ideas carry that journey. Select an idea to see how it develops.",
 ideasNote:"These ideas connect closely to Representing numbers (place value, multiplying by 10, 100 and 1000) and to Partitioned fractions, where halving and equal sharing become the basis of fractions.",
 progP:"Two focus areas form one thread. Forming groups (K–2) builds equal groups, sharing and arrays. Multiplicative relations (3–6) builds fact families, properties of multiplication and efficient strategies for larger numbers.",
 shifts:[
  ["es1","Early Stage 1 → Stage 1","From sharing until the supply runs out to deliberately coordinating the number of groups and the number in each group. Counting by ones gives way to rhythmic and skip counting."],
  ["s1","Stage 1 → Stage 2","From repeated addition to multiplication facts. Groups become arrays, arrays become fact families, and the symbols × and ÷ are introduced."],
  ["s2","Stage 2 → Stage 3","From facts to strategies for larger numbers. The distributive property drives the area model and the algorithm, division includes remainders, and the order of operations is agreed."]
 ],
 modelsH2:"Each stage adds models; the array runs from Stage 1 to Stage 3",
 modelsP:"The bars show the stages where the syllabus, the NESA teaching advice or the diocesan PL slides name or use each model. Select a model for more detail.",
 modelTips:[
  ["Groups of before rows and columns.","NESA notes that arrays need students to see groups in two directions, which is much harder than ‘groups of’."],
  ["Make the structure visible.","Draw a shape around each group, write the numeral for the number in each group, and use dot patterns so equality is easy to see (diocesan slides)."],
  ["Fade the objects.","Move from visible objects, to markers for groups with a skip count, to repeated addition, to number facts."],
  ["Keep one model across stages.","The array becomes the partially covered array, then the area model. Using it consistently lets students see each new strategy as an old idea with bigger numbers."]
 ],
 sorterP:"Most misconceptions in this thread come from four roots, and each root reappears in a new form as students move from forming groups to multiplicative relations. Read each student response and choose its root.",
 rootRows:[
  ["Multiplication seen only as counting or adding on","Counts every object by ones to find the total of equal groups <span class=\"pill src-add\">Add.</span>","Skip counts but loses track of how many groups","Counts on to find 6 × 7; ‘multiplying always makes bigger’","Can’t choose an efficient strategy for 5000 × 90"],
  ["Number of groups and number in each group confused","Groups judged equal by how they look <span class=\"pill src-add\">Add.</span>","3 groups of 4 described as 7; uneven rows in an ‘array’","‘Five threes’ and ‘three fives’ not linked","Rates: mixing up 3 cups and 10 people"],
  ["Division not linked to multiplication","Recounts from one after recombining shared groups <span class=\"pill src-add\">Add.</span>","Shares by dealing but can’t say how many groups of 4 in 12","Divisor and dividend reversed; doesn’t check by multiplying","‘How many 2s in 6?’ written as 2 ÷ 6"],
  ["Facts and rules without meaning","Pattern copied without seeing the repeating unit <span class=\"pill src-add\">Add.</span>","Uses ‘lots of’ with its everyday meaning","4 × 8 recalled as 24; ‘the answer goes after the equals sign’","2 + 3 × 4 = 20; BODMAS applied as a strict order; remainders ignored in context"]
 ],
 sorterNote:"NESA notes that most multiplication recall errors come from within the tables (choosing a neighbouring answer), which is why it recommends learning facts as fact families with mixed practice.",
 notesTitle:"Multiplicative Relations K–6: my reflections",
 namesH3:"One thread, two focus areas",
 namesP:"Forming groups (Early Stage 1 and Stage 1) leads into Multiplicative relations (Stages 2 and 3). There are no Forming groups outcomes in Stages 2 and 3, and no Multiplicative relations outcomes in Early Stage 1 and Stage 1. All content also addresses the Working mathematically outcome, MAO-WM-01.",
 footer:"Built from the NESA <i>Mathematics K–10 Syllabus (2022)</i> outcomes and content (Early Stage 1 to Stage 3), the NESA syllabus support teaching advice, and the Catholic Education Diocese of Wollongong PL slides <i>Forming groups to multiplicative relations</i>. Items marked <span class=\"pill src-dio\">Diocesan PL slides</span> come from those slides; items marked <span class=\"pill src-add\">Additional commentary</span> are common classroom observations, not NESA or diocesan examples. Your progress and notes are saved only in this browser."
};

/* ---------------- data ---------------- */
var STAGES = {
 es1:{short:"ES1", name:"Early Stage 1", years:"Kindergarten", fa:"Forming groups", col:"var(--es1)", soft:"var(--es1-soft)"},
 s1:{short:"S1", name:"Stage 1", years:"Years 1–2", fa:"Forming groups A and B", col:"var(--s1)", soft:"var(--s1-soft)"},
 s2:{short:"S2", name:"Stage 2", years:"Years 3–4", fa:"Multiplicative relations A and B", col:"var(--s2)", soft:"var(--s2-soft)"},
 s3:{short:"S3", name:"Stage 3", years:"Years 5–6", fa:"Multiplicative relations A and B", col:"var(--s3)", soft:"var(--s3-soft)"}
};
var ORDER = ["es1","s1","s2","s3"];

var STAGE_CONTENT = {
es1:{
 lead:"In Kindergarten, students form equal groups by sharing and recognise, copy and create repeating patterns. NESA explains that sharing objects equally and putting them back together lays the foundation for understanding multiplication and division as inverse operations.",
 outcomes:[["MAE-FG-01","recognises, describes and continues repeating patterns"],["MAE-FG-02","forms equal groups by sharing and counting collections of objects"]],
 content:[
  ["","Copy, continue and create patterns",["Copy and continue repeating patterns using sounds and/or actions (dance or music patterns)","Copy, continue and create repeating patterns using shapes, objects, images or pictures (Reasons about patterns)"]],
  ["","Investigate and form equal groups by sharing",["Distribute a group of familiar objects into smaller groups and recognise whether the number in each group is equal or not","Group and share concrete materials by distributing objects one by one or using another method (one at a time, or in groups of two)"]],
  ["","Record grouping and sharing",["Label the number of objects in a group","Record grouping and sharing using drawings, words and numerals, and explain their thinking (Reasons about relations)"]]
 ],
 know:[
  ["Two processes, two questions","<b>Sharing</b> (partitive): you know the number of groups and find how many in each. <b>Grouping</b> (quotitive): you know how many in each group and find the number of groups."],
  ["Share, then put it back together","After sharing equally, reverse the process and recombine the groups. This shows the total hasn’t changed and is the foundation of the inverse relationship."],
  ["Equal groups build equality","Forming groups with the same number of elements helps students develop the concept of equality. The emphasis is on groups of the same size and describing them."],
  ["The pattern unit","Start with two-part AB patterns. Students extend, correct and create them, then fill in missing elements, then copy and extend. This is foundational for algebra."],
  ["‘Familiar’ objects differ","Objects that are familiar to one student may not be to another. Choose objects with students’ backgrounds and experiences in mind."],
  ["Make groups easy to see","Draw a shape around each group (different from the shape of the objects), write the numeral for the number in each group, and use dot patterns so equality is easy to check. <span class=\"pill src-dio\">Diocesan PL slides</span>"]
 ],
 misc:[
  {see:"Shares 12 counters into piles of 5, 4 and 3, and says everyone has some.",name:"A ‘share’ doesn’t have to be equal",resp:"Talk about a ‘fair share’ meaning everyone has the same number. Count each group and compare.",src:"a"},
  {see:"Says a spread-out group of 3 has more than a bunched group of 4.",name:"Judging equal groups by how they look",resp:"Arrange each group as a dot pattern so the groups can be compared at a glance, then count to check.",src:"a"},
  {see:"After sharing 10 counters into two piles and pushing them back together, counts again from one to see if there are still 10.",name:"Sharing and recombining aren’t yet seen as opposites",resp:"Recombine the groups every time you share, and ask, “Did we lose any? How do you know without counting?”",src:"a"},
  {see:"Continues red, blue, red, blue as “red, blue, blue, red…”.",name:"Not seeing the repeating unit",resp:"Start with two-part AB patterns. Ask students to say the pattern aloud, find the part that repeats, and fix a broken pattern.",src:"a"}
 ],
 advice:["Engage students in manipulating concrete materials wherever possible. Visual or digital models can be used by students with complex learning needs.","Students first distribute objects one by one until the supply runs out. Draw attention to the number of groups and the number in each group.","After sharing equally, reverse the process and put the shared objects back together to form one collection.","Extend students who can already form equal groups by posing problems that can be solved by forming groups, and by representing a number in different ways (12 as 3 groups of 4, 4 groups of 3, 6 groups of 2 or 2 groups of 6).","<span class=\"pill src-dio\">Diocesan PL slides</span> Introduce equal groups through purposeful sharing: count to establish the total, state how many are sharing and model it, state the number in each group, then recombine to show the total hasn’t changed."],
 vocab:["group","share","equal","pattern","repeat","pairs"],
 check:{title:"Quick check (NESA key progress point)",steps:["Give the student a pile of at least 20 linking cubes or similar objects.","Ask, <i>Can you make 5 towers, with 3 blocks in each tower?</i>","Then ask, <i>How many towers do you have? How many in each tower? How many altogether?</i>","Watch whether the student distinguishes the number of towers from the number in each tower, and how they find the total."]},
 tool:"share",
 quiz:[
  {q:"A student has 12 pop sticks and puts them down in groups of 4 to see how many groups they can make. Which process is this?",o:["Equal sharing (partitive)","Equal grouping (quotitive)","Repeated addition","Skip counting"],a:1,why:"The number in each group is known (4) and the number of groups is unknown. That is grouping, or quotitive, division."},
  {q:"Why does NESA recommend putting shared objects back together after sharing?",o:["To save time packing up","It shows the total is unchanged and links the two processes, the foundation of the inverse relationship","So students can practise counting from one","It’s only needed when there are leftovers"],a:1,why:"Reversing the share shows that combining and separating undo each other, which later becomes the inverse relationship between multiplication and division."}
 ]
},
s1:{
 lead:"In Years 1 and 2, students move from counting by ones to rhythmic and skip counting and repeated addition. They model multiplication with equal groups and arrays, and solve sharing and grouping division problems, including what’s left over.",
 outcomes:[["MA1-FG-01","uses the structure of equal groups to solve multiplication problems, and shares or groups to solve division problems"]],
 content:[
  ["A","Count in multiples using rhythmic and skip counting",["Count by twos, threes, fives and tens using rhythmic counting and skip counting (for example, totalling five-cent coins)"]],
  ["A","Use skip counting patterns",["Identify and describe patterns when skip counting forwards or backwards by twos, fives and tens","Determine a missing number in a number pattern with a constant difference (2, 7, 12, __, 22, 27, 32)","Describe how the missing number was determined (Reasons about relations)"]],
  ["A","Model and use equal groups of objects to represent multiplication",["Model and describe collections of objects as ‘groups of’ (two groups of three)","Determine and distinguish between the number of groups and the number in each group (Reasons about relations)","Find the total using skip counting of equal groups of a known size"]],
  ["A","Recognise and represent division",["Model a half of a collection and show the relation between the half and the whole","Model sharing division (10 objects shared between 2 people: how many each?)","Model grouping division (20 objects in groups of 4: how many groups?)","Describe the part left over (22 objects in groups of 4 is 5 groups of 4 and 2 left over)"]],
  ["B","Represent and explain multiplication as the combining of equal groups",["Model multiplication as accumulating equal groups: objects visible, then markers with a skip count (3, 6, 9), then repeated addition (3 + 3 + 3), then number facts","Solve multiplication problems using repeated addition (3 groups of 4 is 4 + 4 + 4)","Form arrays of equal rows and equal columns","Distinguish the number of rows/columns from the number in each row/column","Model the commutative property using an array: 2 rows of 3 rotated is 3 rows of 2 (Reasons about relations)","Model division by deconstructing an array into a given number of rows or columns"]],
  ["B","Model doubling and halving with fractions",["Model doubling and halving and the relation between them (double 4 is 8, so half of 8 is 4)","Re-create the whole given half (if half is 3 marbles, how many altogether?)","Model a half, a quarter or an eighth of a collection, and explain their thinking (quarters of 12)"]],
  ["B","Represent multiplication and division problems",["Solve multiplication and division problems using objects, diagrams, images and actions"]]
 ],
 know:[
  ["Number of groups vs number in each","NESA notes that distinguishing the number of groups from the number in each group “can be confusing for students”. A group acting as one unit is a composite unit, like a pea pod holding 10 peas."],
  ["Groups of, then rows and columns","An array needs students to identify groups in two directions. Coordinating rows and columns is much more difficult than using ‘groups of’ with repeated addition, so start with groups."],
  ["Two kinds of division","Sharing: “12 marbles shared between 3 students, how many each?” Grouping: “12 marbles, 4 each, how many children?” Grouping division is needed later to make sense of 8 ÷ 0.5 in Stage 4."],
  ["Fractions start with sharing","Fractions are introduced through equal-sharing problems, so a fraction is based on division rather than counting parts (Empson and Levi 2011). Use linear arrangements of objects to link halving collections with halving lengths."],
  ["Rhythmic to skip counting","Count aloud stressing every second number (1, <b>2</b>, 3, <b>4</b>…), then skip the unstressed numbers (2, 4, 6…). The fives and tens sequences have a natural rhythm."],
  ["Language and symbols","Check students know ‘pairs’. Avoid ‘lots of’ because of its everyday meaning (‘lots of fish in the sea’). The symbols × and ÷ are not introduced until Stage 2."]
 ],
 misc:[
  {see:"Asked how many in 3 groups of 4, answers “7”.",name:"Number of groups and number in each group confused",resp:"Trace around each group while counting the groups, then label the number in each group. Ask, “How many groups? How many in each? How many altogether?”",src:"n"},
  {see:"Skip counts 3, 6, 9, 12, 15 but can’t say how many threes were counted.",name:"Losing track of the number of groups",resp:"Keep track of groups on fingers or markers, and record the new total as each group is counted (diocesan PL slides).",src:"a"},
  {see:"Builds an ‘array’ of 12 with rows of 5, 4 and 3.",name:"An array doesn’t need equal rows",resp:"Revisit the definition: every row has the same number and every column has the same number. Transform equal groups into equal rows.",src:"a"},
  {see:"Shares 13 counters between 3 people and gives the extra one to the first person.",name:"Not recognising the part left over",resp:"Talk about what’s fair: everyone gets 4 and 1 is left over. Ask, “What could we do with the one left over?”",src:"a"},
  {see:"Splits 10 counters into 6 and 4 and calls each pile “a half”.",name:"A half is any part",resp:"Share between two so each has the same. Re-create the whole from a given half.",src:"a"},
  {see:"Says “lots of” means “a big amount”, not equal groups.",name:"Everyday meaning of ‘lots of’",resp:"Use ‘groups of’ and ‘rows of’ instead, as NESA advises.",src:"n"}
 ],
 advice:["Use rhythmic and choral counting: the number word sequences for fives and tens produce a rhythm.","After dividing into equal groups (12 into groups of 4), recombine the groups. Reversing the process links multiplication and division.","Focus on ‘groups of’ before progressing to ‘rows of’ and ‘columns of’.","Introduce fractions through equal sharing, starting with sharing between two. Some Aboriginal and Torres Strait Islander students may understand fractions through kinship and community responsibilities.","<span class=\"pill src-dio\">Diocesan PL slides</span> Record skip counting patterns on blank number tracks and hundred charts. Trace a finger around each group as you count the groups. Replace visible objects with markers for groups, and record two repeated addition sentences for each rectangular array."],
 vocab:["group","number of groups","number in each group","row","column","array","sharing","shared between","left over","total","equal","half","quarter","eighth","halve","pairs"],
 check:{title:"Quick check (NESA key progress point)",steps:["Give the student a pile of at least 20 cubes. NESA uses the same task as Early Stage 1.","Ask, <i>Can you make 5 towers, with 3 blocks in each tower? How many towers do you have? How many blocks in each tower? How many altogether?</i>","In Stage 1, look for the student finding the total by skip counting or repeated addition rather than counting by ones."]},
 tool:"groups",
 quiz:[
  {q:"“If 12 marbles are shared between 3 students, how many does each student get?” This is…",o:["grouping (quotitive) division: how many groups?","sharing (partitive) division: how many in each group?","repeated addition","an array problem"],a:1,why:"The number of groups (3 students) is known and the number in each group is unknown, so it is sharing, or partitive, division."},
  {q:"Why does NESA recommend ‘groups of’ before ‘rows of’ and ‘columns of’?",o:["Arrays are only used in Stage 3","An array needs students to identify groups in two directions, which is much harder","Rows and columns can’t show multiplication","Groups are easier to draw"],a:1,why:"Coordinating rows and columns is much more difficult than using ‘groups of’ with repeated addition."},
  {q:"What does NESA say about the phrase ‘lots of’?",o:["Use it for all grouping","Avoid it, because its everyday meaning can confuse students","Use it only with arrays","Use it instead of ‘times’"],a:1,why:"‘Lots of’ has an everyday meaning (‘lots of fish in the sea’) that can confuse students when describing equal groups."}
 ]
},
s2:{
 lead:"In Years 3 and 4, students use arrays to build multiplication fact families to 10 × 10, connect multiplication and division as inverse operations, and use the commutative, associative and distributive properties to work out facts they don’t yet know.",
 outcomes:[["MA2-MR-01","represents and uses the structure of multiplicative relations to 10 × 10 to solve problems"],["MA2-MR-02","completes number sentences involving multiplication and division by finding missing values"]],
 content:[
  ["A","Generate and describe patterns",["Model, describe and record patterns of multiples (repeatedly adding 5 on a calculator)","Create and continue patterns that increase or decrease by a constant amount (5, 10, 15 … and 16, 12, 8 …)","Recognise that the final digit determines odd or even; connect even numbers to the facts for 2; investigate multiplying by one and zero (Reasons about relations)"]],
  ["A","Use arrays to establish multiplication facts from multiples of 2 and 4, 5 and 10",["Use the term multiples when connecting grouping to arrays (4 multiples of 3)","Coordinate the number of groups with the number in each group (1 two is 2, 2 twos are 4, 3 twos are 6)","Record the first 10 multiples of 2, 4, 5 and 10","Doubling is multiplying by 2 and halving is dividing by 2; doubling multiples of 2 makes multiples of 4 (Reasons about relations)","Model square numbers"]],
  ["A","Recall multiplication facts of 2 and 4, 5 and 10 and related division facts",["Use the symbols ×, ÷ and =","Link fact families using arrays (3 × 4 = 12, 4 × 3 = 12, 12 ÷ 3 = 4, 12 ÷ 4 = 3)","Generate fact families for multiples of 2 and 4, 5 and 10","Model and apply the commutative property (4 × 6 = 6 × 4)"]],
  ["A","Represent and solve problems involving multiplication fact families",["Describe problems using ‘for each’ and ‘times as many’ (3 Johnny cakes for each of 5 friends; 4 times as many eggs)","Find the total of partially covered arrays (6 rows of four is 24)","Apply the inverse relationship: 12 ÷ 3 = 4 because 4 × 3 = 12 (Reasons about relations)"]],
  ["B","Investigate number sequences involving related multiples",["Generate and investigate patterns of related multiples (2, 4 and 8; 3, 6 and 9) on a number chart"]],
  ["B","Use known number facts and strategies",["Use doubling to connect multiples of 3 to 6 and 4 to 8 (Reasons about relations)","Use known facts to find unknown multiples: multiples of 9 are one group less than multiples of 10 (Reasons about relations)"]],
  ["B","Use the structure of the area model to represent multiplication and division",["Move from arrays to partially covered area models"]],
  ["B","Use number properties to find related multiplication facts",["Commutative property (7 × 9 = 9 × 7)","Associative property: 5 × 8 = 5 × (2 × 4) = (5 × 2) × 4 = 10 × 4 (Reasons about structure)","Distributive property: 7 × 6 = (7 × 5) + (7 × 1) (Reasons about relations)","Generate and recall fact families up to 10 × 10"]],
  ["B","Operate with multiples of 10",["Multiply a one-digit number by a multiple of 10","Rename groups of 10: 50 × 3 is 3 groups of 5 tens, 15 tens is 150","Use the commutative and associative properties: 30 × 4 = 3 × 10 × 4 = 12 × 10 = 120"]],
  ["B","Represent and solve word problems with number sentences",["Use the equals sign for equivalent relationships: 4 × 3 = 6 × 2; 20 ÷ 4 = 30 ÷ 6 (Reasons about relations)","Find missing numbers: 28 = ◻ × 7, 40 ÷ ◻ = 5 (Reasons about relations)","Represent sharing and grouping word problems with number sentences (6 pens cost $24: 6 × ◻ = 24 or 24 ÷ 6 = ◻)"]]
 ],
 know:[
  ["Multiplication isn’t just repeated addition","Repeated addition describes what some students do, not what multiplication is. If it were, multiplying would always give a bigger answer, which isn’t true. Multiplication uses a one-to-many correspondence to coordinate groups of groups."],
  ["Fact families, not blocked tables","Tables are stored as verbal memories, so people retrieve neighbouring answers (4 × 8 as 24). Between two-thirds and four-fifths of adult recall errors are choosing the wrong value from the tables. Fact families give mixed practice and link × and ÷."],
  ["Contract the language","‘5 columns of 3’ becomes ‘5 threes’, then ‘one three is 3, two threes are 6, three threes are 9’. Use the language before introducing the symbols."],
  ["Why the last digit tells odd or even","Any whole number is a multiple of 10 plus a digit (153 = 150 + 3). Every multiple of 10 is even, because each ten is 2 rows of 5."],
  ["Properties make strategies","Associative: × 6 is × 3 then × 2. Distributive: × 7 is × 5 plus × 2. Once ×0, ×1, ×2, ×5, ×9, ×10 and strategies for ×3, ×4 and ×6 are secure, only 7 × 7, 7 × 8 and 8 × 8 remain (Kilpatrick, Swafford and Findell 2001). <span class=\"pill src-dio\">Diocesan PL slides</span>"],
  ["Divisor and dividend","Division isn’t commutative. ‘How many times does 4 go into 20?’ and ‘What is 20 divided by 4?’ state the numbers in opposite orders. Point to the divisor after the ÷ sign: 20 ÷ 4."]
 ],
 misc:[
  {see:"Says “multiplying always makes a number bigger”.",name:"Multiplication is only repeated addition",resp:"Investigate × 1 and × 0 with arrays and groups. Describe multiplication as groups of groups.",src:"n"},
  {see:"Recalls 4 × 8 as 24.",name:"Retrieving a neighbouring answer from another table",resp:"Learn facts as fact families with mixed practice, and derive them from known facts (double 4 × 4).",src:"n"},
  {see:"Says 4 × 3 = 6 × 2 is false “because the answer goes after the equals sign”.",name:"The equals sign means ‘the answer comes next’",resp:"Use ‘is the same as’ and true/false number sentences. NESA notes the calculator equals key can reinforce this belief.",src:"n"},
  {see:"Writes 4 ÷ 20 for “How many times does 4 go into 20?”",name:"Divisor and dividend reversed",resp:"Model decoding division questions, identifying the divisor and its position after the ÷ sign.",src:"n"},
  {see:"Works out 6 × 7 by counting on in sevens on their fingers every time.",name:"Repeated addition instead of known facts",resp:"Encourage known facts and properties: 6 × 7 is double 3 × 7, or 5 × 7 plus 7.",src:"n"},
  {see:"Says 6 × 0 is 6 “because nothing happens”.",name:"Confusing × 0 with + 0",resp:"Model 6 groups of nothing and 0 groups of 6. Compare 6 + 0 with 6 × 0.",src:"a"}
 ],
 advice:["Start by forming equal groups (a one-to-many correspondence) before forming arrays, then interpret the row and column structure.","Learn fact families with unknown values (2 × ◻ = 10, 10 ÷ 2 = ?) and use mixed practice rather than blocked tables (Rohrer 2009). Thinking about meaning helps facts stick (Willingham 2008).","Once facts are learnt, use them instead of repeated addition. Teach multiplying tens by thinking about how: 20 × 3 is two 10s × 3.","Check division by multiplying the answer by the divisor: 35 ÷ 7 is the same as ◻ × 7 = 35.","Mathematics is practised differently across cultures (in some countries a colon is the division symbol). Some Aboriginal students may understand multiplicative relations through kinship and Community structures.","<span class=\"pill src-dio\">Diocesan PL slides</span> Cover parts of an array and ask, “How many? How do you know? Do all the rows have the same number?” Use bar models, tree diagrams and arrays with ‘for each’ and ‘times as many’ problems."],
 vocab:["each","group","row","column","array","multiply","multiplied by","multiplication facts","multiple","times as many","for each","double","halve","square number","shared between","divide","divided by","product","factor","remainder","equals","is the same as"],
 check:{title:"Quick checks (built from the syllabus examples)",steps:["Show an array of 6 rows of 4 with most of it covered. Ask, <i>How many dots? How do you know?</i>","Ask the student to find the missing numbers: <b>28 = ◻ × 7</b> and <b>40 ÷ ◻ = 5</b>.","Ask, <i>True or false: 4 × 3 = 6 × 2? How do you know?</i>","Ask, <i>If you forgot 7 × 6, how could you work it out from a fact you know?</i> Look for the distributive or associative property. Try the array splitter below."]},
 tool:"split",
 quiz:[
  {q:"Why does NESA say ‘repeated addition’ isn’t a complete description of multiplication?",o:["Repeated addition is too slow","If it were, multiplying would always give a bigger answer, which isn’t true","It only works for even numbers","Arrays don’t use addition"],a:1,why:"Multiplication coordinates groups of groups through a one-to-many correspondence. × 1, × 0 and later fractions and decimals show it doesn’t always make bigger."},
  {q:"A student recalls 4 × 8 as 24. What is the most likely cause, according to NESA?",o:["Random guessing","Retrieving a neighbouring answer from the tables (4 × 6 or 3 × 8)","Not knowing how to count by fours","Confusing × and +"],a:1,why:"Tables are stored as verbal memories, so most errors come from within the tables. Fact families and mixed practice help."},
  {q:"6 × 7 = 6 × 5 + 6 × 2 uses which property?",o:["Commutative","Associative","Distributive","Inverse"],a:2,why:"Multiplication is distributed over addition: 7 is 5 + 2, so 6 × 7 is 6 × 5 plus 6 × 2."}
 ]
},
s3:{
 lead:"In Years 5 and 6, students select efficient mental and written strategies to multiply and divide larger numbers, work with factors, primes and remainders, solve rate problems, and agree on the order of operations.",
 outcomes:[["MA3-MR-01","selects and applies appropriate strategies to solve multiplication and division problems"],["MA3-MR-02","constructs and completes number sentences involving multiplicative relations, applying the order of operations to calculations"]],
 content:[
  ["A","Determine products and factors",["Use the term product (the product of 5 and 6 is 30)","Model different ways to show a whole number as a product: arrays of 12 as 2 by 6, 3 by 4 or 12 by 1 (Reasons about structure)","Determine factors (the factors of 12 are 1, 2, 3, 4, 6, 12)","Determine whether a number is prime, composite or neither (0 or 1)"]],
  ["A","Use partitioning and place value to multiply 2-, 3- and 4-digit numbers by one-digit numbers",["Multiply one-digit numbers by 10, 100, 1000 and their multiples (6 × 500 as 6 × 5 × 100, 3 × 2 × 500, or half of 6 × 1000)","Estimate products (684 × 7 is less than 700 × 7)","Use the area model and the distributive property (8 × 27; 684 × 5)","Use partial products: 684 × 3 = 1800 + 240 + 12 = 2052","Record using a formal algorithm"]],
  ["A","Multiply 2- and 3-digit numbers by 2-digit numbers",["Factorise to aid mental multiplication: 12 × 25 = 3 × 4 × 25 = 300","Extend the area model to 2-digit by 2-digit (23 × 56 = 1288)","Use an algorithm with understanding: explain the zero in the second line (multiplying by 2 tens) (Reasons about relations)","Solve word problems (How many days old will Sonya be on her 20th birthday?)"]],
  ["A","Represent and solve division problems with whole number remainders",["Model remainders with an array with a partially filled row (5 × 3 + 2 = 17)","Record remainders in words (17 ÷ 5 = 3 remainder 2)","Use fact families (27 ÷ 6 is 4 remainder 3)","Use the term quotient","Connect division and multiplication: 25 ÷ 4 = 6 remainder 1, so 25 = 4 × 6 + 1"]],
  ["A","Divide a number with 3 or more digits by a one-digit divisor",["Estimate with tens, hundreds and thousands","Partition using multiples: 3248 ÷ 4 = 800 + 10 + 2; 258 ÷ 6 = (240 + 18) ÷ 6","Use repeated halving (4 laptops cost $3248)","Interpret remainders: how many 5-seater cars for 47 people?","Use digital technologies for one- and 2-digit divisors"]],
  ["A","Use estimation and rounding to check reasonableness",["32 × 253 will be about, but more than, 30 × 250"]],
  ["B","Select and apply strategies to solve problems involving multiplication and division",["Choose efficient strategies (5000 × 90 mentally, 4974 × 87 with a calculator)","Solve rate problems (3 cups of flour for 10 people: how many for 40?) (Reasons about relations)","Explain why 4 ÷ 1, 8 ÷ 2, 16 ÷ 4 and 24 ÷ 6 all equal 4 (Reasons about relations)"]],
  ["B","Multiply and divide decimals by powers of 10",["Multiply benchmark decimals mentally (3.5 × 2)","Compare place value: 2.5 is 10 times 0.25","Estimate to check a calculator answer (7 desks of 1.15 m is a little more than 7 m)"]],
  ["B","Use equivalent number sentences to find unknown quantities",["Complete sentences with more than one operation (5 × ◻ = 4 × 10)","Use inverse operations (125 ÷ 5 = ◻ becomes ◻ × 5 = 125)","Recognise that division can be recorded as a fraction (3 ÷ 2 = 3/2)"]],
  ["B","Represent and describe number patterns formed by multiples",["Make a table of values from a geometric pattern (triangles and sides)","Describe the pattern multiplicatively: there are 3 times as many sides as triangles","Determine a rule for the table (Algebraic reasoning)"]],
  ["B","Explore brackets and the order of operations",["Recognise the need to agree on an order (4 + 8 ÷ 2 could give two answers)","Use grouping symbols; place brackets to make 2 + 4 × 7 = 42 true","Use real-life contexts (6 bull roarers at $10 and 2 sets of clapsticks at $4)"]]
 ],
 know:[
  ["The distributive property drives multi-digit multiplication","8 × 24 is 8 × 20 plus 8 × 4. The area model can be recorded as an extended form of the algorithm, and it is a precursor to expanding binomials in Stage 5."],
  ["Primes, composites and 1","A prime has exactly 2 distinct factors; as an array it has only one row. 1 has one factor, so it is neither prime nor composite. 2 is the only even prime."],
  ["Euclidean division","Whole-number division with a whole-number remainder: 53 ÷ 3 = 17 remainder 2, which can be written 53 = 3 × 17 + 2. Sharing base 10 blocks mirrors the division algorithm."],
  ["Rates, ratios and bar models","The simplest multiplication word problems are rates (“4 students have $3 each”). Bar models show ‘five times as many’, and ratio tables keep values in a constant ratio (28 students : 20 computers = 7 : 5)."],
  ["Fractions as division","Say ‘3 divided by 4’ rather than ‘3 over 4’. The fraction bar represents division."],
  ["Order of operations","Without an agreed order, 2 + 3 × 4 could be 20 or 14. Seeing 3 × 4 as 4 + 4 + 4 makes multiplication ‘unfinished business’. Mnemonics like BODMAS mislead because they suggest addition always comes before subtraction."]
 ],
 misc:[
  {see:"Says 1 is a prime number.",name:"1 is prime",resp:"Use the definition: exactly 2 distinct factors. Model 1, 2, 5 and 6 as arrays and count the factors.",src:"d"},
  {see:"Works out 2 + 3 × 4 = 20.",name:"Working strictly left to right",resp:"Discuss why an agreed order is needed. Rewrite 3 × 4 as 4 + 4 + 4 to show multiplication as ‘unfinished business’.",src:"n"},
  {see:"Works out 10 − 3 + 2 = 5 “because BODMAS says add first”.",name:"Mnemonics applied as a strict order",resp:"Multiplication and division, and addition and subtraction, are each done left to right. Use anchor charts rather than BODMAS.",src:"n"},
  {see:"Answers “9 remainder 2 cars” for 47 people in 5-seater cars.",name:"Remainders not interpreted in context",resp:"Ask what the remainder means in the story. Here 2 people still need a car, so 10 cars are needed.",src:"n"},
  {see:"Writes 2 ÷ 6 for “How many 2s in 6?”",name:"Following the word order in division",resp:"NESA advises drawing attention to division phrasing that reverses the order of the numbers.",src:"n"},
  {see:"Writes the zero on the second line of the algorithm but says it’s “just what you do”.",name:"Algorithm without understanding",resp:"Connect each line of the algorithm to the area model: the second line is multiplying by 2 tens.",src:"a"}
 ],
 advice:["Reinforce mental strategies and recognise that students’ strategies differ; some switch languages when solving problems (Martinez 2019, Moschkovich 2007).","Record informal strategies with jottings. Progress from the area model to the extended algorithm, then the traditional algorithm.","Use the distributive property for mental and written calculation: 6 × 14 is 6 tens plus 6 fours.","Use base 10 blocks to show division: sharing 5 tens and 3 ones between 3.","Use bar models for multiplicative comparison and ratio tables for rates.","When solving word problems, write a few words before the equals sign: ‘cost of goldfish = …’. Use anchor charts for the order of operations.","<span class=\"pill src-dio\">Diocesan PL slides</span> Estimate before calculating (6 × 529 is a little more than 6 × 500 = 3000), use arrays to find all the products for a number such as 24, and check division with a calculator."],
 vocab:["product","factor","multiple","prime","composite","quotient","remainder","estimate","strategy","area","brackets","grouping symbols","order of operations","number sentence","per","is the same as"],
 check:{title:"Quick checks (built from the syllabus examples)",steps:["Ask, <i>Show 12 as many arrays as you can. Is 12 prime? Is 1 prime? How do you know?</i>","Ask the student to estimate <b>684 × 7</b> and explain, then calculate it. Try the area model below.","Ask, <i>How many 5-seater cars are needed to take 47 people to the beach?</i>","Ask, <i>Where do brackets go to make 2 + 4 × 7 = 42 true?</i>","Ask, <i>Why do 4 ÷ 1, 8 ÷ 2, 16 ÷ 4 and 24 ÷ 6 all have the same answer?</i>"]},
 tool:"area",
 quiz:[
  {q:"Is 1 a prime number?",o:["Yes, it is only divisible by itself","No, it is composite","No, it is neither prime nor composite because it has exactly one distinct factor","Yes, because it is odd"],a:2,why:"A prime has exactly 2 distinct factors. 1 has only one, so it is neither prime nor composite."},
  {q:"Why does NESA say mnemonics like BODMAS can be misleading?",o:["They are too hard to remember","They suggest a strict order between addition and subtraction, and between multiplication and division","They leave out brackets","They are only for Stage 5"],a:1,why:"Multiplication and division are done left to right, as are addition and subtraction. The mnemonic suggests one always comes first."},
  {q:"53 ÷ 3 = 17 remainder 2 can also be written as…",o:["53 = 17 × 2 + 3","53 = 3 × 17 + 2","53 = 3 × 2 + 17","53 ÷ 17 = 3 remainder 2"],a:1,why:"Euclidean division links division and multiplication: the dividend equals the divisor times the quotient, plus the remainder."}
 ]
}
};

var IDEAS = [
 {t:"Equal groups are the foundation",d:"Multiplication and division both rest on groups of the same size.",s:{es1:"Sharing so everyone has a ‘fair share’ (the same number).",s1:"‘Groups of’, skip counting and repeated addition.",s2:"Arrays of equal rows and columns; multiples and fact families.",s3:"Products and factors: every way of showing 24 as an array."}},
 {t:"Count the groups and what’s in each",d:"Students coordinate two numbers at once: the number of groups and the number in each group.",s:{es1:"Label the number in each group.",s1:"Distinguish the number of groups from the number in each group; rows and columns.",s2:"‘Five threes are fifteen’; ‘for each’ and ‘times as many’.",s3:"Rates (3 cups for 10 people) and ratio tables."}},
 {t:"Two kinds of division",d:"Sharing finds how many in each group; grouping finds how many groups.",s:{es1:"Sharing by dealing one at a time until the supply runs out.",s1:"Sharing and grouping division, and the part left over.",s2:"Division word problems as number sentences (24 ÷ 6 = ◻).",s3:"Remainders, interpreting them in context, and fractions as division."}},
 {t:"Multiplication and division undo each other",d:"Recombining a share, checking by multiplying and fact families all show the inverse relationship.",s:{es1:"Share, then put the groups back together: the total hasn’t changed.",s1:"Doubling and halving: double 4 is 8, so half of 8 is 4.",s2:"Fact families: 12 ÷ 3 = 4 because 4 × 3 = 12.",s3:"Inverse operations in number sentences; 25 = 4 × 6 + 1."}},
 {t:"Properties make strategies",d:"Strategies rely on properties of number and properties of multiplication (diocesan slides).",s:{es1:"Repeating patterns: finding the unit that repeats.",s1:"Commutative property: rotating an array.",s2:"Associative (5 × 8 = 10 × 4) and distributive (7 × 6 = 7 × 5 + 7 × 1).",s3:"Area model and algorithm; factorising (12 × 25 = 3 × 100); order of operations."}},
 {t:"From adding on to thinking multiplicatively",d:"Students move from counting and repeated addition to scaling: ‘times as many’.",s:{es1:"Counting collections by ones.",s1:"Rhythmic and skip counting; repeated addition.",s2:"Known facts instead of repeated addition; ‘times as many’.",s3:"Describing patterns by multiplication (“3 times as many sides as triangles”), rates and multiplicative comparison."}}
];

var ASPECTS = [
 {k:"o1",l:"Main outcome",v:{es1:"<b>MAE-FG-02</b> forms equal groups by sharing and counting collections of objects",s1:"<b>MA1-FG-01</b> uses the structure of equal groups to solve multiplication problems, and shares or groups to solve division problems",s2:"<b>MA2-MR-01</b> represents and uses the structure of multiplicative relations to 10 × 10 to solve problems",s3:"<b>MA3-MR-01</b> selects and applies appropriate strategies to solve multiplication and division problems"}},
 {k:"o2",l:"Patterns and number sentences",v:{es1:"<b>MAE-FG-01</b> recognises, describes and continues repeating patterns",s1:"Skip counting patterns and missing numbers in patterns (within MA1-FG-01)",s2:"<b>MA2-MR-02</b> completes number sentences involving multiplication and division by finding missing values",s3:"<b>MA3-MR-02</b> constructs and completes number sentences involving multiplicative relations, applying the order of operations to calculations"}},
 {k:"x",l:"Multiplication",v:{es1:"Forming equal groups by sharing",s1:"Equal groups, skip counting, repeated addition, arrays",s2:"Arrays to fact families to 10 × 10; properties to derive facts; multiples of 10",s3:"Area model, partial products, formal algorithm; up to 4-digit by 2-digit"}},
 {k:"d",l:"Division",v:{es1:"Sharing one by one until the supply runs out",s1:"Sharing and grouping division; the part left over; halves, quarters and eighths",s2:"The inverse of multiplication; fact families; sharing and grouping word problems",s3:"Remainders; 3+ digits by a one-digit divisor; interpreting remainders; fractions as division"}},
 {k:"p",l:"Properties",v:{es1:"Repeating pattern units; equality of groups",s1:"Commutative (rotating an array); doubling and halving",s2:"Commutative, associative, distributive; × 1 and × 0; odd and even",s3:"Distributive (area model), associative (factorising); order of operations"}},
 {k:"l",l:"Language and symbols",v:{es1:"group, share, equal, pattern, repeat, pairs",s1:"groups of, rows and columns, left over, half; no × or ÷ yet; avoid ‘lots of’",s2:"× and ÷ introduced; ‘five threes’; ‘for each’ and ‘times as many’",s3:"product, quotient, factor, prime, composite, remainder, grouping symbols"}}
];

var MODELS = [
 {n:"Sharing real objects",w:"dealing one at a time, then recombining",s:0,e:1,d:"Students distribute objects one by one until the supply runs out, then put the groups back together. NESA recommends concrete materials wherever possible."},
 {n:"Repeating patterns",w:"sounds, actions, shapes and objects",s:0,e:0,d:"Two-part AB patterns first: extend, correct and create, then fill missing elements. The pattern unit is foundational for algebra."},
 {n:"Circled groups and dot patterns",w:"making groups easy to see and compare",s:0,e:1,d:"Draw a shape around each group, different from the objects, write the numeral for the number in each group, and arrange groups as dot patterns so equality is visible. (Diocesan PL slides)"},
 {n:"Number tracks and hundred charts",w:"skip counting patterns and multiples",s:1,e:2,d:"Record skip counting on blank number tracks and hundred charts, skipping spaces not in the pattern (Stage 1). Reveal patterns of related multiples on number charts (Stage 2)."},
 {n:"Markers for groups",w:"from visible objects to skip counting",s:1,e:1,d:"Finding 3 groups of 3 progresses from visible objects, to markers for the groups with a skip count (3, 6, 9), to repeated addition, to number facts."},
 {n:"Arrays",w:"equal rows and columns; facts; factors",s:1,e:3,hi:true,d:"Introduced after ‘groups of’ in Stage 1, used to establish fact families and properties in Stage 2, and to find all the factors of a number and define primes in Stage 3."},
 {n:"Partially covered arrays",w:"using structure when not all is visible",s:2,e:2,d:"Cover part of an array and ask how many, and how you know (6 rows of four is 24). A stepping stone to the area model."},
 {n:"Fact family triangles",w:"linking × and ÷ facts",s:2,e:2,d:"Three numbers (2, 5 and 10) generate four facts. Including unknown values (2 × ◻ = 10) supports mixed practice."},
 {n:"Bar models (tape diagrams)",w:"‘times as many’ and rates",s:2,e:3,d:"Used with ‘for each’ and ‘times as many’ problems in Stage 2 (diocesan slides), and for multiplicative comparison and rate problems in Stage 3 (NESA)."},
 {n:"Area model",w:"partial products and the algorithm",s:2,e:3,d:"Partially covered area models in Stage 2 Part B lead to the area model for 2- and 3-digit multiplication in Stage 3, recorded as partial products and then the algorithm."},
 {n:"Base 10 blocks for division",w:"sharing tens and ones",s:3,e:3,d:"Sharing 5 tens and 3 ones between 3 mirrors the division algorithm: each person gets 1 ten and 23 remain to be shared."},
 {n:"Ratio tables",w:"values kept in a constant ratio",s:3,e:3,d:"28 students to 20 computers, so 14 to 10 and 7 to 5. Also used to show the multiplicative nature of decimals (0.25, 2.5, 25, 250)."},
 {n:"Tables of values",w:"describing patterns multiplicatively",s:3,e:3,d:"A geometric pattern of triangles gives 1→3, 2→6, 3→9 sides. Students describe the rule by multiplication: 3 times as many sides as triangles."}
];

var ROOTS = ["Multiplication seen only as counting or adding on","Number of groups and number in each group confused","Division not linked to multiplication","Facts and rules without meaning"];
var SCENARIOS = [
 {st:"s1",q:"Asked how many in 3 groups of 4, Leo answers 7.",a:1,why:"Leo adds the number of groups to the number in each group. Trace around each group and ask: how many groups, how many in each, how many altogether?"},
 {st:"s2",q:"Mia works out 6 × 7 by counting on in sevens on her fingers every time.",a:0,why:"Mia is still using repeated addition. NESA advises using known facts once learnt: 6 × 7 is double 3 × 7."},
 {st:"s2",q:"Ben says 4 × 3 = 6 × 2 is false “because the answer has to come after the equals sign”.",a:3,why:"Ben reads = as ‘the answer comes next’. Use ‘is the same as’ and true/false number sentences."},
 {st:"s3",q:"Asked “How many 2s in 6?”, Zoe writes 2 ÷ 6.",a:2,why:"Zoe follows the word order. NESA advises drawing attention to phrasing that reverses the order of the numbers."},
 {st:"s3",q:"For 47 people in 5-seater cars, Sam answers “9 remainder 2 cars”.",a:3,why:"Sam calculates correctly but doesn’t interpret the remainder in context: 10 cars are needed."},
 {st:"s2",q:"Ruby recalls 4 × 8 as 24.",a:3,why:"Ruby retrieved a neighbouring answer from another table. Fact families and mixed practice reduce these errors."},
 {st:"s1",q:"Ella builds an ‘array’ of 12 with rows of 5, 4 and 3.",a:1,why:"Ella hasn’t yet coordinated the number of rows with the number in each row. Every row must have the same number."},
 {st:"s3",q:"Kai works out 2 + 3 × 4 = 20.",a:3,why:"Kai works left to right without the agreed order of operations. Show 3 × 4 as 4 + 4 + 4 to see why multiplication comes first."},
 {st:"s2",q:"Noah shares 12 lollies between 3 friends by dealing, but doesn’t see that 3 × 4 = 12 tells him the answer.",a:2,why:"Noah treats division as a separate procedure. Fact families and checking by multiplying build the inverse relationship."},
 {st:"es1",q:"After sharing 10 counters into two piles and pushing them back together, Ava recounts from one to check there are still 10.",a:2,why:"Ava doesn’t yet see sharing and recombining as opposites. Recombine every time you share and ask how she knows without counting."},
 {st:"s2",q:"Ali says 6 × 0 is 6 “because nothing happens”.",a:0,why:"Ali treats × 0 like + 0. Model 6 groups of nothing to show multiplication as groups of groups."}
];

var PROMPTS = [
 ["Looking across the progression","Which of the six big ideas does your stage depend on most? Which earlier stage is it built on?"],
 ["Looking across the progression","How often do your students meet both sharing and grouping division? Which do they find harder?"],
 ["Looking across the progression","How could the array be used consistently from Stage 1 to Stage 3 in your school?"],
 ["Your students","Run the quick check for your stage with three students: one secure, one you’re unsure of and one who is struggling. What did you learn that you didn’t expect?"],
 ["Your students","Which root misconception do you see most often? Where in the earlier stages might it have started?"],
 ["Your students","Are any students still counting by ones or using repeated addition where the syllabus expects skip counting, facts or strategies? What would you do next?"],
 ["Your practice","How are multiplication facts learnt in your class: blocked tables, or fact families with mixed practice? What would you change?"],
 ["Your practice","Do you use the phrase ‘lots of’ or a mnemonic like BODMAS? What would you use instead?"],
 ["Your practice","How are students’ cultural knowledge and home-language strategies recognised when they multiply and divide?"]
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
  tags:[["Copy, continue and create repeating patterns using shapes, objects, images or pictures","Reasons about patterns"],["Record grouping and sharing using drawings, words and numerals, and explain their thinking","Reasons about relations"]],
  before:{task:"Share 12 counters between 3 bears.<br><br>Each bear gets ____.",lim:["One answer, found by a procedure the teacher has described","No reason to check whether the share is fair","Doesn’t ask students to explain or record their thinking"]},
  after:{task:"“Three bears want to share 12 honey biscuits so it’s fair. Show me how they could share them. How do you know it’s fair?”<br><br>“Uh oh, a fourth bear has arrived! What will you do now?”",enable:"Start with 6 biscuits between 2 bears.",extend:"“Can 12 biscuits be shared fairly between 5 bears? What would you do with the ones left over?”",listen:"‘Fair’ meaning the same number each; dealing one at a time or in groups; recombining to check the total is still 12.",el:["Understanding and fluency","Exploring and connecting","Communicating","Reasoning"]}
 },
 s1:{
  tags:[["Describe how the missing number in a number pattern was determined","Reasons about relations"],["Determine and distinguish between the number of groups and the number in each group","Reasons about relations"],["Model the commutative property of multiplication, using an array","Reasons about relations"]],
  before:{task:"3 groups of 5 = ____",lim:["Can be done by counting by ones","Only one arrangement is considered","Doesn’t show whether students distinguish groups from the number in each group"]},
  after:{task:"“I have 15 counters in equal groups. How might they be arranged? Find as many ways as you can, and record each with a drawing and words.”",enable:"Start with 6 or 12 counters.",extend:"“Which numbers can only be arranged one way? Why do you think that is?”",listen:"‘3 groups of 5’ and ‘5 groups of 3’; skip counting to check the total; whether 1 group of 15 counts as a way.",el:["Exploring and connecting","Choosing and applying techniques","Communicating","Reasoning"]}
 },
 s2:{
  tags:[["Recognise the significance of the final digit in determining whether a number is even or odd","Reasons about relations"],["Investigate the result of multiplying by one and zero","Reasons about relations"],["Recognise that doubling is multiplying by 2 and halving is dividing by 2","Reasons about relations"],["Apply the inverse relationship of multiplication and division","Reasons about relations"],["Use known facts to find unknown multiples","Reasons about relations"],["Use the associative property within multiplication to regroup the factors","Reasons about structure"],["Use flexible partitioning within multiplication","Reasons about relations"],["Use the equals sign to record equivalent number relationships involving multiplication","Reasons about relations"],["Complete number sentences involving multiplication and division by calculating missing numbers","Reasons about relations"]],
  before:{task:"7 × 6 = ____",lim:["Tests recall only: a student either knows it or doesn’t","Gives no strategy to a student who has forgotten","No representation and no explanation"]},
  after:{task:"“You’ve forgotten 7 × 6. Use a fact you know to work it out, and show your thinking with an array. Then find a different way.”",enable:"Start with 4 × 6 using double 2 × 6.",extend:"“Which facts in the 10 × 10 grid can you work out from your × 2, × 5 and × 10 facts? Which are left?”",listen:"Distributive (7 × 5 + 7 × 1), doubling (double 7 × 3), associative, splitting the array and labelling both parts.",el:["Understanding and fluency","Exploring and connecting","Choosing and applying techniques","Reasoning"]}
 },
 s3:{
  tags:[["Model different ways to show a whole number as a product","Reasons about structure"],["Use a multiplication algorithm with understanding","Reasons about relations"],["Solve word problems involving rates using multiplication and division","Reasons about relations"],["Determine why different division questions have the same answer","Reasons about relations"],["Determine a rule describing the relationship between numbers in a table","Algebraic reasoning"]],
  before:{task:"47 ÷ 5 = ____ remainder ____",lim:["A single procedure with no context","The remainder never has to be interpreted","No decision, no justification"]},
  after:{task:"“47 people are going to the beach in 5-seater cars. How many cars are needed?”<br><br>“Now write a story for 47 ÷ 5 where the answer is 9, one where it is 9 remainder 2, and one where it is 9.4.”",enable:"Start with 17 ÷ 5 using counters or an array with a partially filled row.",extend:"“Write a division story where the remainder is the only part of the answer that matters.”",listen:"47 = 5 × 9 + 2; rounding up or down depending on the story; $47 shared between 5 is $9.40.",el:["Exploring and connecting","Choosing and applying techniques","Communicating","Reasoning"]}
 }
};

var CLOSED = [
 {st:"s1",task:"Make 4 groups of 3. How many altogether?",moves:[
  {m:"Who is correct?",t:"“Ari says 4 groups of 3 and 3 groups of 4 are the same. Bella says they’re different. Who is correct? Show it with counters.”",el:["Reasoning","Communicating"]},
  {m:"Same and different",t:"“What is the same and what is different about 4 groups of 3, 3 rows of 4 and 3 + 3 + 3 + 3?”",el:["Exploring and connecting","Communicating"]},
  {m:"Always, sometimes, never",t:"“If you have more groups, you have more altogether. Always, sometimes or never true?”",el:["Reasoning","Exploring and connecting"]},
  {m:"Open it up",t:"“There are 12 counters altogether in equal groups. How many groups could there be, and how many in each?”",el:["Choosing and applying techniques","Reasoning"]},
  {m:"Convince me",t:"“Convince me that 4 groups of 3 is 12 without counting by ones.”",el:["Understanding and fluency","Communicating"]}
 ]},
 {st:"s2",task:"8 × 4 = ____",moves:[
  {m:"Who is correct?",t:"“Tom says 8 × 4 is 24. Mei says it’s 32. Who is correct? Use doubling to prove it.”",el:["Reasoning","Communicating"]},
  {m:"Same and different",t:"“What is the same and what is different about 8 × 4, 4 × 8 and 32 ÷ 4?”",el:["Exploring and connecting","Communicating"]},
  {m:"Always, sometimes, never",t:"“Multiplying makes a number bigger. Always, sometimes or never true?”",el:["Reasoning","Exploring and connecting"]},
  {m:"Open it up",t:"“The answer is 32. What could the multiplication question be? What could the division questions be?”",el:["Choosing and applying techniques","Reasoning"]},
  {m:"Convince me",t:"“Convince me that 8 × 4 is double 4 × 4. Use an array.”",el:["Understanding and fluency","Communicating"]}
 ]},
 {st:"s3",task:"Calculate 32 + 2 × 4.",moves:[
  {m:"Who is correct?",t:"“Kai says 32 + 2 × 4 = 136. Jess says it’s 40. Who is correct, and why might Kai think that?”",el:["Reasoning","Communicating"]},
  {m:"Same and different",t:"“What is the same and what is different about 32 + 2 × 4, (32 + 2) × 4 and 32 + (2 × 4)?”",el:["Exploring and connecting","Communicating"]},
  {m:"Always, sometimes, never",t:"“Adding brackets changes the answer. Always, sometimes or never true?”",el:["Reasoning","Exploring and connecting"]},
  {m:"Open it up",t:"“Use 2, 3, 4 and 5 once each, with any operations and brackets, to make 20. How many ways can you find?”",el:["Choosing and applying techniques","Reasoning"]},
  {m:"Convince me",t:"“I buy 6 bull roarers at $10 each and 2 sets of clapsticks at $4 each. Convince me that 6 × 10 + 2 × 4 gives the total cost.”",el:["Understanding and fluency","Communicating"]}
 ]}
];
