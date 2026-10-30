/* ---------------- module config ---------------- */
var M = {
 key:"ar-k6-module-v1",
 title:"Additive Relations K–6",
 dlName:"additive-relations-reflections.txt",
 welcomeH2:"How students learn to add and subtract, K to 6",
 welcomeP:"This module follows one thread across four stages, from Combining and separating quantities in Early Stage 1 and Stage 1 to Additive relations in Stages 2 and 3. It covers how the outcomes build, the maths you need to teach it, the misconceptions to look for, and what the NESA teaching advice recommends.",
 tryText:"a model for each stage: a part-part-whole ten frame, the empty number line, choosing a strategy, and spotting errors in students’ working.",
 namesH3:"One thread, two focus areas",
 namesP:"Combining and separating quantities (Early Stage 1 and Stage 1) leads into Additive relations (Stages 2 and 3). There are no Combining and separating quantities outcomes in Stages 2 and 3, and no Additive relations outcomes in Early Stage 1 and Stage 1. All content also addresses the Working mathematically outcome, MAO-WM-01.",
 ideasP:"NESA describes addition and subtraction as progressing from counting, combining and separating objects to using numbers as replacements for completed counts, and then to strategies that use the structure of numbers. Six ideas carry that journey. Select an idea to see how it develops.",
 ideasNote:"These ideas depend on Representing numbers (quantity value and place value) and support Multiplicative relations, where the distributive property splits a product into a sum.",
 progP:"Two focus areas form one thread. Combining and separating quantities (K–2) builds part-whole thinking, number bonds and the meaning of the equals sign. Additive relations (3–6) builds flexible mental strategies, algorithms with understanding, and choosing the most efficient method for the numbers involved.",
 shifts:[
  ["es1","Early Stage 1 → Stage 1","From counting all to counting on and back, then to number bonds and bridging to ten. Symbols +, − and = are introduced, with = read as ‘is the same as’."],
  ["s1","Stage 1 → Stage 2","From number bonds with two-digit numbers to a repertoire of strategies with three-digit numbers: compensation, levelling and constant difference. Bar models appear, and written algorithms are used with understanding."],
  ["s2","Stage 2 → Stage 3","From learning strategies to choosing them. Students decide between mental methods, algorithms and calculators, estimate to check, solve multistep problems and extend strategies to decimals."]
 ],
 modelsH2:"Each stage adds models; the empty number line runs from Stage 1 to Stage 3",
 modelsP:"The bars show the stages where the syllabus and NESA teaching advice name or use each model. Select a model for more detail.",
 modelTips:[
  ["Structure before recording.","Students need to know how a bead string shows groups of 5 before it can be linked to an empty number line."],
  ["Materials only help if ten is a unit.","NESA notes base 10 blocks have little meaning for regrouping if a student doesn’t yet see 10 as both 10 ones and 1 ten."],
  ["One picture for many problems.","A bar model shows students what picture to draw, and how to use what they know to solve the problem."],
  ["Expanded before contracted.","Writing algorithms in expanded form shows the size of each exchange; the contracted form hides it."]
 ],
 sorterP:"Most misconceptions in this thread come from four roots, and each root reappears in a new form as students move from combining and separating to choosing strategies. Read each student response and choose its root.",
 rootRows:[
  ["Counting or procedures used instead of number structure","Counts all from one when combining 5 and 3 <span class=\"pill src-add\">Add.</span>","Knows 8 + 2 = 10 but counts on by ones for 28 + 7","Uses the algorithm for 527 + 399 or 500 − 498","Draws 183 marks to work out 183 − 96"],
  ["The equals sign read as ‘the answer comes next’","—","Says 5 = 4 + 1 is ‘backwards’","8 + 4 = □ + 5 answered with 12 or 17","Can’t see that 5009 − 3997 = 5012 − 4000"],
  ["Digits treated without their quantity value","—","Split strategy for 96 − 58 gives 42","543 − 289 = 346 (smaller from larger); a hundred traded as ‘10’","2.25 + 1.5 = 2.40; the traded ‘1’ seen as the same in + and −"],
  ["Words and problem types misread","States the bigger number for ‘how many more?’; two tenses confuse","‘Difference’ and ‘left’ read with everyday meanings","Key words used to choose the operation; ‘total’ taken to mean add","‘More than’ always taken to mean add"]
 ],
 sorterNote:"NESA notes that the many ways of saying ‘9 minus 3’ show “the futility of trying to teach a key word approach” to word problems.",
 notesTitle:"Additive Relations K–6: my reflections",
 footer:"Built from the NESA <i>Mathematics K–10 Syllabus (2022)</i> outcomes and content (Early Stage 1 to Stage 3), the NESA syllabus support teaching advice, and the NESA additional teaching advice for <i>Stage 2 – Additive relations A (Strategies and vocabulary)</i> and <i>B (Language and vocabulary)</i>. Items marked <span class=\"pill src-add\">Additional commentary</span> are common classroom observations, not NESA examples. Your progress and notes are saved only in this browser."
};

/* ---------------- data ---------------- */
var STAGES = {
 es1:{short:"ES1", name:"Early Stage 1", years:"Kindergarten", fa:"Combining and separating quantities", col:"var(--es1)", soft:"var(--es1-soft)"},
 s1:{short:"S1", name:"Stage 1", years:"Years 1–2", fa:"Combining and separating quantities A and B", col:"var(--s1)", soft:"var(--s1-soft)"},
 s2:{short:"S2", name:"Stage 2", years:"Years 3–4", fa:"Additive relations A and B", col:"var(--s2)", soft:"var(--s2-soft)"},
 s3:{short:"S3", name:"Stage 3", years:"Years 5–6", fa:"Additive relations A and B", col:"var(--s3)", soft:"var(--s3-soft)"}
};
var ORDER = ["es1","s1","s2","s3"];

var STAGE_CONTENT = {
es1:{
 lead:"In Kindergarten, students combine, separate and compare collections, and see how the parts make up the whole for numbers up to 10. NESA explains that developing addition and subtraction together lays the foundation for understanding them as inverse operations.",
 outcomes:[["MAE-CSQ-01","reasons about number relations to model addition and subtraction by combining and separating, and comparing collections"],["MAE-CSQ-02","represents the relations between the parts that form the whole, with numbers up to 10"]],
 content:[
  ["","Model additive relations and compare quantities",["Identify situations in which addition and subtraction may be applied","Combine two or more groups to model addition, identifying the relationship between the parts and the whole","Separate and take away part of a group to model subtraction","Use concrete materials or fingers to model and solve addition and subtraction, counting forwards or backwards by ones","Compare two groups of objects to determine how many more (Reasons about quantity)"]],
  ["","Identify part–whole relationships in numbers up to 10",["Use visual representations to combine and separate quantities (ten as five and five on a ten frame, or two hands as ten)","Describe the actions of combining, separating and comparing (makes, joins, combines with, take away, altogether, how many more?)","Use five as a reference in forming numbers from six to ten (six is one more than five)","Create, model and recognise combinations for numbers up to ten (Reasons about relations)","Count by ones to find the total or difference","Use drawings, words and numerals to record addition and subtraction, and explain their thinking (Reasons about relations)"]]
 ],
 know:[
  ["Subtraction has two meanings","Taking away from a group, and comparing two groups. Students first compare by matching one-to-one, then find how many more or fewer."],
  ["Comparison is harder","“How many more?” is much harder than “Which has more?”. Students may just state the bigger number, partly because the question type is unfamiliar."],
  ["Separate and recombine","Ten items split into 4 and 6 and pushed back together are still ten. Taking 4 away and putting them back shows that combining and separating are opposites."],
  ["Order matters for subtraction","Students may know 5 + 4 and 4 + 5 are ‘turnarounds’ without knowing why. Investigate why order doesn’t matter for addition, and what happens when you try to take 5 from 3."],
  ["Mathematics as storytelling","Stories help students conceptualise and communicate combining and separating, and can support the engagement of Aboriginal students and all students (Matthews 2008)."],
  ["Two tenses in one problem","“I had six beans and took away four” mixes past and present. A real context helps: “…my brother took away four to give to our cousins.”"]
 ],
 misc:[
  {see:"Asked “How many more does Sam have?” (8 counters and 5 counters), answers “8”.",name:"Stating the bigger number for ‘how many more?’",resp:"Match the two groups one-to-one and look at the extra ones. Ask comparison questions regularly so the question type becomes familiar.",src:"n"},
  {see:"Hears “I had six beans and took away four. How many do I have now?” and answers 10.",name:"Confused by two tenses in one problem",resp:"Act out the story with a real context and objects, so the change from ‘had’ to ‘now’ is visible.",src:"n"},
  {see:"Says you can take 5 counters from 3 counters by “turning it around”.",name:"Subtraction can be turned around like addition",resp:"Try it with real objects: there aren’t enough to take away 5. Compare with 3 + 5 and 5 + 3.",src:"n"},
  {see:"To combine 5 and 3, counts every counter from one.",name:"Counting all instead of using a known amount",resp:"Use five as a reference on a ten frame: “Five and three more.” Hide the first group and count on.",src:"a"}
 ],
 advice:["Students need many experiences relating their knowledge to the vocabulary of mathematics: visualising, modelling, drawing and writing problems.","Compare groups by matching first, using one-to-one correspondence, before asking how many more or fewer.","Use storytelling to show the purpose of combining and separating in real contexts.","Some Aboriginal students may have well-developed understandings of quantitative relations and relationships through connections within Country, kinship systems or community structures.","Formal number sentences with +, − and = are introduced in Stage 1."],
 vocab:["count forwards","count backwards","combines with","joins","take away","how many more","altogether","makes"],
 check:{title:"Quick check (NESA key progress point)",steps:["Give the student a pile of 15 counters (adjust for a student with a lower counting range).","Ask, <i>Can you get me 8 counters from the pile? How do you know that is 8?</i>","Point to the 8 and the 7 left. Ask, <i>Are there more here or more there? How do you know?</i>","Ask, <i>If you put them all together, how many are there?</i> By the end of Early Stage 1, students typically count with one-to-one correspondence to find totals from 1 to 20."]},
 tool:"parts",
 quiz:[
  {q:"Which two situations does subtraction cover in Early Stage 1?",o:["Taking away and sharing","Taking away from a group and comparing two groups","Counting back and skip counting","Adding and doubling"],a:1,why:"Subtraction covers taking away from a group and comparing two groups to find how many more or fewer."},
  {q:"A student answers “8” when asked how many more counters 8 is than 5. According to NESA, why?",o:["They can’t count to 8","Comparison questions are harder and often unfamiliar, so students state the bigger number","They are subtracting incorrectly","They need to learn number bonds first"],a:1,why:"Comparison subtraction (“how many more?”) is much harder than “which is more?”, partly because students aren’t familiar with the question type."}
 ]
},
s1:{
 lead:"In Years 1 and 2, students move from counting on and back to using number bonds, bridging to ten and quantity values. They read the equals sign as ‘is the same as’ and use the relationship between addition and subtraction to solve problems.",
 outcomes:[["MA1-CSQ-01","uses number bonds and the relationship between addition and subtraction to solve problems involving partitioning"]],
 content:[
  ["A","Use advanced count-by-one strategies to solve addition and subtraction problems",["Use the terms add, plus, equals, is equal to, is the same as, take away, minus and the difference between","Use the symbols +, − and =","Record number sentences using drawings, words, numerals and symbols, for example to represent a story","Fluently count on and count back to solve problems with one- and two-digit numbers (Reasons about relations)"]],
  ["A","Recognise and recall number bonds up to ten",["Recall combinations of two numbers that bond to 10, using a ten frame or other structured models","Model and record all whole-number combinations for numbers up to ten: 5 + 0, 4 + 1, 3 + 2 … (Reasons about patterns)","Recall combinations for numbers less than 10 (two numbers add to 8: what could they be?)","Describe combinations using more than, less than and double: 5 as one more than four, or double two and one more (Reasons about relations)"]],
  ["A","Use flexible strategies to solve addition and subtraction problems",["Use non-count-by-one strategies: near doubles (5 + 7 is double 5 and 2) and making ten (4 + 7 + 8 + 6 + 3)","Represent addition and subtraction with a bead string linked to an empty number line (8 + 5)","Partition using quantity value and bridging to 10: 3 bridges 17 to 20 (Reasons about relations)"]],
  ["A","Represent equality",["Use = to mean ‘is the same as’, not as a signal to calculate: 5 + 2 = 3 + 4 (Reasons about relations)","Model the commutative property: 4 + 5 = 5 + 4 (Reasons about relations)","Recall related facts to at least 10: 8 = 5 + 3, so 8 − 3 = 5 and 8 − 5 = 3 (Reasons about relations)"]],
  ["B","Represent and reason about additive relations",["Combinations of two numbers that add to 11 to 20","Create, model and solve word problems using number sentences","Represent the difference between two numbers with materials and diagrams (the difference between 4 and 7 as a jump of 3)","Represent a constant difference: 4 and 7 have the same difference as 5 and 8","Model addition and subtraction as inverse operations","Recall related facts to at least 20: 15 + 3 = 18, so 18 − 3 = 15 and 18 − 15 = 3"]],
  ["B","Form multiples of ten when adding and subtracting two-digit numbers",["Add by building to multiples of ten: 38 + 25 ‘resting on 60’ or ‘resting on 40’","Add and subtract on an empty number line (jump strategy for 79 − 33)","Separate tens and ones for addition only: 37 + 45 is 70 + 12 = 82","Turn subtraction into addition: the shopkeeper’s method for $100 − $38 (Reasons about relations)"]],
  ["B","Use knowledge of equality to solve related problems",["Use number bonds to find a missing number (8 + _ = 20)","Use related problems: 8 + 19 = 27 helps solve 8 + _ = 17 (Reasons about relations)","Write number sentences in different ways: 15 + _ = 18, _ = 8 + 3, 15 = _ + 6","Solve equality problems: 8 + _ = 10 + 5"]]
 ],
 know:[
  ["The strategy progression","Count-by-one, then counting on and back, then number bonds and bridging across multiples of ten. Students may know their bonds but not use them (Graven and Venkat 2021), so model their use explicitly."],
  ["Bridging to 10","28 + 7 is 28 + 2 + 5: partition 7 to reach the next ten. Bridging to and through ten are foundational strategies to revisit regularly."],
  ["Quantity value","Mental strategies treat the 4 in 345 as forty, not ‘four in the tens column’. Quantity value is a different aspect of place value from column value."],
  ["Split strategy: addition only","Separating tens and ones works for 37 + 45. For 96 − 58 it invites 90 − 50 and then 8 − 6, giving 42. NESA advises using it only for addition."],
  ["Read = as ‘is the same amount as’","Students often read = as ‘do something’. Vary how number sentences are written (5 = 4 + 1) and gesture under each side to show the balance."],
  ["Why key words fail","‘9 minus 3’ can be said a dozen ways: “By how much does 9 exceed 3?”, “How many added to 3 make 9?”, “Decrease 9 by 3”. ‘Difference’ and ‘left’ also have everyday meanings, and word order matters."]
 ],
 misc:[
  {see:"Knows 8 + 2 = 10, but solves 28 + 7 by counting on 29, 30, 31… on their fingers.",name:"Knowing number bonds but not using them",resp:"Explicitly model bridging: 28 + 2 is 30, then 5 more. Link it to the bond they already know.",src:"n"},
  {see:"Works out 96 − 58 by splitting: 90 − 50 = 40, 8 − 6 = 2, answer 42.",name:"The smaller-from-larger error",resp:"Use the split strategy for addition only. For subtraction, use the jump strategy or add up from 58.",src:"n"},
  {see:"Says 5 = 4 + 1 is “backwards” and must be wrong.",name:"The equals sign means ‘the answer comes next’",resp:"Read = as ‘is the same amount as’, write number sentences both ways, and use true/false statements.",src:"n"},
  {see:"Asked “What is the difference between 9 and 3?”, says “one is bigger”.",name:"Everyday meaning of ‘difference’",resp:"In number, difference means the distance between two numbers on a number line. Show it as a jump.",src:"n"},
  {see:"Hears “Five children were in the room. Three went to lunch. How many were left?” and points left.",name:"‘Left’ as a direction",resp:"Discuss homographs explicitly, especially with students learning English as an additional language or dialect.",src:"n"},
  {see:"Counts on from 3 to solve 3 + 8, getting lost along the way.",name:"Not starting from the larger number",resp:"Model counting on from the larger number, using the commutative property: 3 + 8 is the same as 8 + 3.",src:"a"}
 ],
 advice:["Use concrete materials and drawings to model and solve problems, explore and build concepts. Recording reduces the load on working memory.","Once students are confident with taking away, encourage counting on or back where differences are small: comparing 19 and 17 is easier by counting on from 17.","Students need to know how a bead string shows groups of 5 before linking it to an empty number line. On the number line, encourage jumps using multiples of 10 and number bonds.","Calculating with two-digit numbers doesn’t need to wait for full mastery of place value. Ask students to explain strategies and discuss which are practical and efficient.","Use gestures under each side of a number sentence: “I want to make this side equal to that side.”"],
 vocab:["counting on/counting back","combine","plus","add","take away","minus","the difference between","total","increase","decrease","more than","less than","bridge","number bond","double","equals","is the same as","number sentence","strategy"],
 check:{title:"Quick checks (NESA key progress points)",steps:["<b>Part A.</b> Say, <i>I have 13 cards and Kim gave me some more. Altogether, I now have 16 cards. How many cards did Kim give me?</i> A student who doesn’t count from 1 to form 13 is using its cardinal value.","<b>Bridging to the next ten.</b> Ask, <i>I have $23. How much more do I need to have $30?</i> and <i>I have $34. How much more do I need to have $40?</i>","<b>Bridging through ten.</b> Ask, <i>I have $44. How much more do I need to have $51? How did you work it out?</i> and the same for $25 to $32.","<b>Relating addition and subtraction.</b> Ask, <i>Can you use 27 + 13 = 40 to work out 40 − 13?</i> and <i>If 24 − 7 = 17, what is 24 − 17?</i>"]},
 tool:"line",
 quiz:[
  {q:"Why does NESA warn against a key word approach to word problems?",o:["Key words are too hard to read","Subtraction can be expressed in many different ways, so key words don’t reliably signal the operation","Key words are only for Stage 3","Students should guess the operation"],a:1,why:"The many ways of saying ‘9 minus 3’ highlight “the futility of trying to teach a key word approach”."},
  {q:"Why should the split strategy (separating tens and ones) be used only for addition?",o:["It is too slow for subtraction","For subtraction it leads to the smaller-from-larger error, such as 96 − 58 = 42","It only works with even numbers","Subtraction doesn’t use tens"],a:1,why:"Separating 96 − 58 gives 90 − 50 and then 6 − 8, which students often swap to 8 − 6, producing 42."},
  {q:"How does NESA suggest reading the = symbol?",o:["‘Makes’","‘The answer is’","‘Is the same amount as’","‘Then’"],a:2,why:"Reading = as ‘is the same amount as’ supports relational thinking, the basis for algebra."}
 ]
},
s2:{
 lead:"In Years 3 and 4, students build a repertoire of mental strategies for 2- and 3-digit numbers, use bar models to show part-part-whole relationships, and learn written algorithms with understanding. Equality and the complement principle let them find missing values.",
 outcomes:[["MA2-AR-01","selects and uses mental and written strategies for addition and subtraction involving 2- and 3-digit numbers"],["MA2-AR-02","completes number sentences involving addition and subtraction by finding missing values"]],
 content:[
  ["A","Use the principle of equality",["Recognise equal differences: 20 − 13 = 10 − 3","Use = to mean ‘the same as’: 32 − 13 = 30 − 11","Use the associative property to form multiples of 10: 22 + 13 + 8 = 30 + 13 = 43 (Reasons about relations)"]],
  ["A","Recognise and explain the connection between addition and subtraction",["Use related problems: 27 + 13 = 40 solves 40 − 27 and 40 − 13 (Reasons about relations)","Show addition and subtraction as inverse operations with a bar model","Use the complement principle: if 64 − 17 = 47, what is 64 − 47? (Reasons about relations)","Check solutions with the inverse operation (spent $375, now have $158: how much at the start?)"]],
  ["A","Select strategies flexibly for problems of up to 3 digits",["Bridge the decades (36 + 27: 36 + 4 = 40, plus 23 is 63) or use quantity values","Compensation: 28 + 35 is 30 + 35 − 2 = 63; 125 − 78 is 125 − 80 + 2 = 47 (Reasons about relations)","Levelling and constant difference: 28 + 35 = 30 + 33; 125 − 78 = 127 − 80 (Reasons about relations)","Represent solutions on an empty number line or bar model (237 people, 189 seats)","Compare strategies for efficiency: 179 + 49 by partitioning, rounding or levelling"]],
  ["A","Represent money values in multiple ways",["$3 is the same as 300 cents","Make 70 cents in different ways","Calculate with money, including change ($4.50 lunch from $5)"]],
  ["B","Partition, rearrange and regroup numbers to at least 1000",["Use quantity values and non-standard partitioning (527 + 83; 365 − 43)","Model addition and subtraction with and without regrouping, and record the method","Use an algorithm with understanding for 3-digit numbers (286 + 437 = 723)","Recognise that one of the hundreds becomes 10 tens, not simply 10 (528 − 43)","Recognise when mental strategies beat the algorithm: 900 − 3, 500 − 498 (Reasons about relations)","Solve subtractions with missing digits given the difference (Reasons about relations)"]],
  ["B","Apply addition and subtraction to familiar contexts, including money and budgeting",["Estimate to check solutions ($5 for an apple at $1.25, a banana at 95c and an orange at $1.45)","Reflect on a chosen strategy and whether it can be improved","Interpret money problems as addition or subtraction (shopkeeper’s method for change)"]],
  ["B","Complete number sentences to find unknown quantities",["Find missing numbers: □ − 15 = 19, 83 = 55 + □ (Algebraic reasoning)","Operations on both sides: 18 + 5 = □ + 16 (Algebraic reasoning)","Create word problems for number sentences (15 emu eggs: 15 − □ = 11)"]]
 ],
 know:[
  ["Equality is a relationship","Use true/false statements (4 + 7 = 5 + 6; 11 = 11) and a balance analogy. Students initially read = as ‘the answer’; the relational meaning develops gradually (McNeil and Alibali 2005)."],
  ["Bar models","Bar models and tape diagrams show part-part-whole relationships and reduce the load on working memory. They show students what picture to draw and how to use it, and lay a foundation for algebra."],
  ["Commutativity, then the complement principle","3 + 4 = 7 implies 7 − 4 = 3. Commutativity develops first (Ching and Nunes 2017). The hardest step is seeing that a − b = c means a − c = b: 100 − 3 = 97, so 100 − 97 = 3."],
  ["Three kinds of mental subtraction","Sequential (456 − 200 − 90 − 8), decomposition or adding up, and varying the question with constant difference (458 − 300). Constant difference suits numbers ending in 8 or 9; adding up suits small differences (713 − 695) (Hartnett 2007)."],
  ["Why teach algorithms?","Not to supply a procedure, but to deepen understanding of the base-10 system. Expanded recording shows the size of each exchange. Base 10 blocks only help if 10 is already a composite unit."],
  ["Mental first","After a year of algorithms, students often use them for 527 + 399 or 601 − 127 (Torbeyns and Verschaffel 2013). Don’t write single-digit additions or subtractions vertically."],
  ["Holistic strategies","Compensation, constant difference and levelling attend to the size of both numbers. Compensation: 547 − 399 is 547 − 400 = 147, then add 1, so 148. Constant difference: add the same to both numbers and the difference stays the same (two bars shifted together). Levelling (‘give and take’): 87 + 24 = 90 + 21. <span class=\"pill src-nesa\">NESA additional advice</span>"],
  ["Estimate first","Estimation is more than guesswork: it uses quantity values to set boundaries. 342 + 213 must be more than 300 + 200. An estimate is a rough and easy calculation; an approximation also says how close it is. Hide a digit to focus on place value: what could 52 − 3_ be? <span class=\"pill src-nesa\">NESA additional advice</span>"],
  ["Flexible, fluent, efficient","Flexible: I have a range of strategies to choose from. Fluent: I can use my strategy with relative ease. Efficient: I solved it in a small number of steps. Strategy flexibility means choosing a strategy that responds to the numbers in the task. <span class=\"pill src-nesa\">NESA additional advice</span>"]
 ],
 misc:[
  {see:"Writes 543 − 289 = 346.",name:"The smaller-from-larger error",resp:"Emphasise quantity value with number expanders, and estimate first: will the answer be more or less than 300?",src:"n"},
  {see:"Answers 12 (or 17) for 8 + 4 = □ + 5.",name:"The equals sign as ‘the answer comes next’",resp:"Revisit true/false number sentences and the balance. Ask what makes both sides the same.",src:"n"},
  {see:"Ignores the zero when subtracting 304 − 128 “because zero means nothing”.",name:"Zero means nothing, so it can be ignored",resp:"Build 304 in expanded form and show the hundred exchanged for 10 tens before the tens are used.",src:"n"},
  {see:"Records a traded hundred in 528 − 43 as “10” in the tens column.",name:"A hundred becomes 10, not 10 tens",resp:"Use expanded recording (400 + 120 + 8) so the size of the exchange is visible.",src:"n"},
  {see:"Sets out 500 − 498 as a vertical algorithm.",name:"Algorithm by default",resp:"Discuss which questions are better done mentally. Ask students to look at the numbers before choosing a method.",src:"n"},
  {see:"Knows 64 − 17 = 47 but works out 64 − 47 from scratch.",name:"Not using the complement principle",resp:"Draw the bar model: 64 split into 47 and 17. Either part subtracted from the whole leaves the other.",src:"n"},
  {see:"For “I have 18 apples. How many more do I need to have 30 apples in total?”, adds 18 and 30 to get 48.",name:"‘Total’ means add",resp:"‘Sum’ and ‘total’ can appear in subtraction problems. Draw a tape diagram: 30 is the whole, 18 is one part, the other part is unknown.",src:"n"},
  {see:"For “I have 30 apples in a box and give away 12. How many apples do I have left in the box?”, isn’t sure what the 12 refers to.",name:"Missing words in the problem (ellipsis)",resp:"Say the omitted word aloud (‘give away 12 apples’) and retell the problem as a story with objects or a diagram.",src:"n"}
 ],
 advice:["Teach the two types of subtraction word problem and how to translate each into a calculation: take-away (30 apples, give away 12) and comparison (how many more to reach 30? how many more does Mary have?). Tape diagrams show both (Pongsakdi et al. 2020; NESA additional advice).","Use storytelling to help students conceptualise word problems and move from concrete to abstract. Mathematics as storytelling supports the engagement and achievement of Aboriginal students, and all students (Matthews 2008).","Money: 1c and 2c coins were withdrawn in 1990, so cash totals round to the nearest 5 cents ($5.36 and $5.37 round to $5.35; $5.38 to $5.42 round to $5.40). Some Aboriginal and Torres Strait Islander students may bring well-developed understanding of money from personal experience, Community and Cultural Knowledge (NESA additional advice).","Show true/false statements one at a time and ask, “How do you know?” Emphasise that = means ‘has the same value as’.","Use bar models consistently, so students know what kind of picture to create for a problem.","To work out 68 − 45, think: how much must be added to 45 to make 68?","Develop addition with trading before subtraction with regrouping. Sequence subtraction examples: exchanging tens for ones, then hundreds for tens, then both, then zeros in the answer and the top line.","Ask students to look at the numbers before choosing a method. Questions like 20 − 19 + 18 − 17 + … + 12 − 11 reward looking first.","Rekenreks or bead strings, Montessori number cards and place value arrow cards are all effective approaches to multidigit addition and subtraction (Fuson et al. 1997)."],
 vocab:["add","addition","plus","subtract","subtraction","minus","sum","total","the difference between","make ten","increase","decrease","equals","is equal to","is the same as","number sentence","estimate","round to","empty number line","strategy","digit","dollars","cents","change (in money)","budget"],
 check:{title:"Quick checks (built from the NESA advice and syllabus examples)",steps:["Show one at a time and ask true or false, and how they know: <b>8 + 2 = 10 + 4</b>, <b>7 + 4 = 15 − 4</b>, <b>7 = 3 + 4</b>, <b>8 = 8</b>.","Ask the student to find the missing number in <b>8 + 4 = □ + 5</b>. Watch for 12 or 17.","Ask, <i>If 64 − 17 = 47, what is 64 − 47?</i>","Show 543 − 289. Ask, <i>Will the answer be more or less than 300? Why?</i>","Ask which they would do mentally and which with an algorithm: <b>527 + 399</b>, <b>601 − 127</b>, <b>286 + 437</b>. Try the strategy chooser below.","Ask, <i>Estimate 342 + 213. What must the answer be more than?</i> Then show <b>52 − 3_</b> with a hidden digit and ask, <i>What could the answer be?</i> (NESA additional advice)"]},
 tool:"strategies",
 quiz:[
  {q:"Students often answer 12 or 17 for 8 + 4 = □ + 5. What does this show?",o:["Weak number facts","Reading = as an instruction to calculate rather than as a statement of equality","Not knowing how to add 5","Confusion about place value"],a:1,why:"Understanding that both sides hold the same value is essential to algebra, and develops over a number of years."},
  {q:"Which strategy does NESA suggest is most effective for 456 − 298?",o:["Sequential: 456 − 200 − 90 − 8","Constant difference: 458 − 300","A vertical algorithm","Counting back by ones"],a:1,why:"Varying the question with constant difference is most effective when the number being subtracted ends in 8 or 9."},
  {q:"A student writes 543 − 289 = 346. What does NESA recommend?",o:["More practice of the same algorithm","Emphasising quantity value, using number expanders, and estimating first","Avoiding subtraction until Stage 3","Teaching a rhyme for borrowing"],a:1,why:"This is the smaller-from-larger error. Quantity value, number expanders and estimating (more or less than 300?) help."},
  {q:"In NESA’s additional advice, what makes a student an efficient strategy user?",o:["They always use the algorithm","They solve a problem with a small number of steps","They know the most strategies","They work the fastest"],a:1,why:"Flexible means having a range of strategies; fluent means using one with ease; efficient means a small number of steps. Flexibility is choosing a strategy that fits the numbers."},
  {q:"“I have 18 apples. How many more do I need to have 30 apples in total?” Which operation solves it?",o:["Addition, because it says ‘total’","Subtraction (or adding on from 18 to 30)","Multiplication","It can’t be solved"],a:1,why:"‘Sum’ and ‘total’ can appear in subtraction problems. This is a comparison problem: 30 − 18 = 12, or count on from 18."}
 ]
},
s3:{
 lead:"In Years 5 and 6, students choose efficient strategies for multidigit and decimal addition and subtraction, decide when to use mental methods, algorithms or a calculator, solve multistep problems and check their answers with estimation.",
 outcomes:[["MA3-AR-01","selects and applies appropriate strategies to solve addition and subtraction problems"]],
 content:[
  ["A","Apply efficient mental and written strategies",["Solve word problems, including multistep problems (25 waratahs and 15 kangaroo paws; 5 picked)","Levelling (4988 + 955 → 5000 + 943), addition for subtraction (5009 − 3997), constant difference (5012 − 4000) and bridging (Reasons about relations)","Use place value to add or subtract 3 or more numbers with different numbers of digits (42 000 + 5123 + 246)","Decide when a calculator is more efficient (2300 + 467 + 4657 + 32 800 + 39 999)","Identify efficient and inefficient strategies: 9000 − 7 mentally, not with an algorithm"]],
  ["A","Use estimation and place value to determine reasonableness",["Round appropriately to estimate: 1438 + 129 is about 1440 + 130","Use place value to check for errors in calculations","Use estimation to check: 1438 + 129 = 1567 should be above 1500, so it is reasonable"]],
  ["B","Choose and use efficient strategies",["Solve multistep problems, including more than one operation (Newtown to Canberra via Wollongong; 16 cards with one person getting 4 more)","Compare, evaluate and communicate strategies"]],
  ["B","Apply known strategies to add and subtract decimals",["Model decimal addition and subtraction to 3 decimal places (string number lines for 1.5 m + 2.25 m and 1.5 m − 0.75 m)","Solve decimal word problems (two identical bars overlap by 1.2 m for a total of 4.2 m)","Justify the strategy chosen: 2.14 m − 1.4 m by adding up 0.6 then 0.14 (Reasons about quantity)"]]
 ],
 know:[
  ["Mental strategies still matter","8000 − 698 is easier mentally than with an algorithm. Recording jottings reduces the load on working memory. Some students switch languages when solving problems."],
  ["Count up on an empty number line","8000 − 673: jump 7 to 680, 20 to 700, 300 to 1000, 7000 to 8000, so 7327. Or shift both numbers: 7999 − 672 needs no trading."],
  ["Choice depends on the numbers","2003 − 1997 is easiest by adding up: 3 to 2000 and 3 more, so 6. Drawing 183 marks to find 183 − 96 is ‘counting from one three times’: slow and error-prone."],
  ["Number problem strings","4 to 7 related calculations that build a target strategy, with helper questions first and a final question without help. Then name and discuss the strategy."],
  ["Decimals need meaning first","Adding 3.428 + 1.1 relies on knowing equivalent decimals: 0.1 is 100 thousandths. That goes well beyond lining up decimal points. Measurement gives a sound context."],
  ["‘More’ doesn’t mean add","“Kim has $3 more than Kerry” (add) and “How much more does Kerry have than Kim?” (subtract) both use ‘more’ and ‘than’. Some phrasings reverse the order of the numbers."]
 ],
 misc:[
  {see:"Writes 2.25 + 1.5 = 2.40, or 2.25 − 1.5 = 2.10.",name:"Decimal parts treated as whole numbers",resp:"Ask students to explain why these are wrong. Use a metre ruler or number line and rename 1.5 as 1.50.",src:"n"},
  {see:"Uses a vertical algorithm for 9000 − 7.",name:"Inefficient strategy choice",resp:"Discuss efficient and inefficient strategies, and ask students to look at the numbers first.",src:"n"},
  {see:"Says the 1 traded in 259 + 38 and in 429 − 34 “both mean a ten”.",name:"Not knowing what the traded 1 represents",resp:"In addition, 10 ones become 1 ten. In subtraction, 1 hundred becomes 10 tens, so 10 tens are added to the 2 tens. Record in expanded form.",src:"n"},
  {see:"For “Kerry has $5, Kim has $3; how much more does Kerry have?”, answers $8.",name:"‘More’ means add",resp:"Model both problem types with bar models and discuss which quantity is unknown.",src:"n"},
  {see:"Writes 1438 + 129 = 2728 and doesn’t notice.",name:"Not checking reasonableness",resp:"Estimate first: about 1440 + 130. Ask, “Is the answer bigger than…? How do you know?”",src:"a"},
  {see:"For a multistep distance problem, stops after the first calculation.",name:"Losing track in multistep problems",resp:"Write a few words before each equals sign (‘Newtown to Canberra via Wollongong = …’) and draw a bar model.",src:"a"}
 ],
 advice:["Continue to reinforce mental strategies, including students’ informal recordings. Compare approaches and decide which is most efficient.","Use rounding to test reasonableness: to the nearest hundred, 1438 + 129 is about 1500; to the nearest ten, about 1570.","Prompt with “Is the answer bigger than…?” and “How do you know?” to build the habit of checking.","Use number problem strings to develop a target strategy, such as constant difference for subtraction.","Address misconceptions by asking students to correct a response that shows it, for example why 2.25 − 1.5 is not 2.10.","Use related metric units and measurement as a context for operating with decimals."],
 vocab:["add","addition","subtract","subtraction","sum","the difference between","increase","decrease","estimate","round to","strategy","operation","equals","is equal to","digit","budget","empty number line"],
 check:{title:"Quick checks (NESA key progress point and syllabus examples)",steps:["<b>Trading (NESA).</b> Show 259 + 38 = 297 and 429 − 34 = 395, each with its traded 1. Ask, <i>Does the 1 in the working out represent the same amount in both?</i> and <i>Why is the 1 added to the 5 in the first, but 10 added to the 2 in the second?</i>","Ask the student to choose a method for each and explain: <b>9000 − 7</b>, <b>2003 − 1997</b>, <b>4988 + 955</b>, <b>2300 + 467 + 4657 + 32 800 + 39 999</b>.","Ask, <i>Why is 2.25 − 1.5 not 2.10?</i>","Ask, <i>16 cards are shared between 2 people. One gets 4 more than the other. How many does each get?</i> Try the error spotter below."]},
 tool:"errors",
 quiz:[
  {q:"In 429 − 34, why is 10 added to the 2 in the tens column?",o:["Because a ten is traded for 10 ones","Because 1 hundred is exchanged for 10 tens","Because 4 − 3 = 1","It shouldn’t be; it should be 1"],a:1,why:"Even proficient students often can’t explain this. In subtraction, 1 hundred becomes 10 tens, unlike the traded 1 ten in addition."},
  {q:"What is the most efficient way to find 2003 − 1997?",o:["A vertical algorithm","Adding up: 3 to 2000, then 3 more, so 6","Counting back by ones","Rounding both to the nearest thousand"],a:1,why:"Adding up uses the inverse relationship and is efficient when the difference is small."},
  {q:"Before adding decimals such as 3.428 + 1.1, what do students need?",o:["A rule for lining up decimal points","A clear understanding of the meaning of decimals and equivalent decimals (0.1 is 100 thousandths)","A calculator","Knowledge of the order of operations"],a:1,why:"NESA notes this goes well beyond learning to line up decimal points in an algorithm."}
 ]
}
};

var IDEAS = [
 {t:"Parts make the whole",d:"Every addition and subtraction is a relationship between two parts and a whole.",s:{es1:"Combinations to 10; ten as five and five.",s1:"Number bonds to 10 and 20; all combinations for a number.",s2:"Bar models: 64 split into 47 and 17.",s3:"Multistep problems drawn as bar models."}},
 {t:"Addition and subtraction undo each other",d:"Knowing one fact gives you related facts, and addition can be used to subtract.",s:{es1:"Separate 10 into 4 and 6, then put them back together.",s1:"8 = 5 + 3, so 8 − 3 = 5; the shopkeeper’s method.",s2:"The complement principle; checking with the inverse.",s3:"Addition for subtraction: 2003 − 1997; counting up from 673 to 8000."}},
 {t:"Equals means ‘is the same as’",d:"The equals sign states a relationship, not an instruction to calculate.",s:{es1:"‘Is the same as’ for equal groups.",s1:"5 + 2 = 3 + 4; 5 = 4 + 1; 8 + _ = 10 + 5.",s2:"True/false statements; 8 + 4 = □ + 5; 20 − 13 = 10 − 3.",s3:"Equivalent calculations: 5009 − 3997 = 5012 − 4000."}},
 {t:"Subtraction is taking away and finding the difference",d:"Comparison problems ask for the distance between two numbers, not just what’s left.",s:{es1:"Take away, and ‘how many more?’",s1:"Difference as a jump on a number line; counting on when the difference is small.",s2:"Bar models for comparing; adding up for small differences.",s3:"Using addition to find a difference: 2.14 m and 1.4 m."}},
 {t:"Strategies use the structure of numbers",d:"Number bonds, ten, place value and properties make calculation efficient.",s:{es1:"Five as a reference.",s1:"Doubles and near doubles, bridging to 10, quantity value.",s2:"Compensation, levelling, constant difference; algorithms with understanding.",s3:"Levelling and bridging with large numbers; decimals."}},
 {t:"Choose, then check",d:"Students look at the numbers before choosing a method, and estimate to check.",s:{es1:"Explain thinking with drawings and words.",s1:"Discuss which strategies are practical and efficient.",s2:"Compare strategies; mental versus algorithm; estimate with money.",s3:"Mental, written or calculator? Round to estimate; use place value to find errors."}}
];

var ASPECTS = [
 {k:"o1",l:"Main outcome",v:{es1:"<b>MAE-CSQ-01</b> reasons about number relations to model addition and subtraction by combining and separating, and comparing collections",s1:"<b>MA1-CSQ-01</b> uses number bonds and the relationship between addition and subtraction to solve problems involving partitioning",s2:"<b>MA2-AR-01</b> selects and uses mental and written strategies for addition and subtraction involving 2- and 3-digit numbers",s3:"<b>MA3-AR-01</b> selects and applies appropriate strategies to solve addition and subtraction problems"}},
 {k:"o2",l:"Part-whole and number sentences",v:{es1:"<b>MAE-CSQ-02</b> represents the relations between the parts that form the whole, with numbers up to 10",s1:"Number sentences, related facts and missing numbers (within MA1-CSQ-01)",s2:"<b>MA2-AR-02</b> completes number sentences involving addition and subtraction by finding missing values",s3:"Equivalent calculations within strategies (within MA3-AR-01)"}},
 {k:"n",l:"Numbers involved",v:{es1:"Combinations to 10; collections to 20",s1:"Facts to 20; one- and two-digit numbers",s2:"2- and 3-digit numbers to at least 1000; money",s3:"Multidigit whole numbers; decimals to 3 decimal places"}},
 {k:"s",l:"Strategies",v:{es1:"Counting all, counting forwards and backwards by ones; five as a reference",s1:"Counting on and back; number bonds; near doubles; bridging to 10; jump; split (addition only); inverse",s2:"Compensation, levelling, constant difference, adding up; algorithms with understanding",s3:"Choosing between levelling, bridging, constant difference, addition for subtraction, algorithms and calculators"}},
 {k:"m",l:"Models",v:{es1:"Objects, fingers, ten frames, stories",s1:"Ten frames, bead strings, empty number line",s2:"Empty number line, bar models, balance, arrow cards, base 10, expanded algorithms",s3:"Empty number line, bar models, string number lines for decimals"}},
 {k:"l",l:"Language and symbols",v:{es1:"joins, take away, how many more, altogether; no symbols yet",s1:"+, − and = introduced; = read as ‘is the same as’; ‘difference’ and ‘left’",s2:"sum, difference, estimate, budget; true/false statements",s3:"Phrasings that reverse number order; ‘more than’ in both addition and subtraction"}}
];

var MODELS = [
 {n:"Collections and fingers",w:"combining, separating, matching",s:0,e:1,d:"Students combine and separate real objects and fingers, and compare groups by matching one-to-one before finding how many more."},
 {n:"Stories and acting out",w:"giving operations a purpose",s:0,e:1,d:"Mathematics as storytelling (Matthews 2008) helps students conceptualise combining and separating. In Stage 1, number sentences record a mathematical story."},
 {n:"Ten frames",w:"five and ten as reference points",s:0,e:1,d:"Ten as five and five; numbers from six to ten built from five; number bonds to ten in Stage 1."},
 {n:"Bead strings and rekenreks",w:"structured groups of 5 and 10",s:1,e:2,d:"Students need to know how colour shows groups of 5. Then a bead string (8 + 5) can be linked to an empty number line. Rekenreks support counting by tens with multidigit numbers in Stage 2."},
 {n:"Empty number line",w:"recording jumps and bridging",s:1,e:3,hi:true,d:"The jump strategy and bridging to ten in Stage 1, recording strategies and word problems in Stage 2, and counting up for large subtractions such as 8000 − 673 in Stage 3."},
 {n:"Balance",w:"equality as two equal sides",s:2,e:2,d:"A balance analogy (7 + 4 and 6 + 5) helps some students see = as a statement that both sides have the same value."},
 {n:"Bar models and tape diagrams",w:"part-part-whole and comparison",s:2,e:3,d:"Introduced in Stage 2 to show part-part-whole relationships and the complement principle; used for multistep problems in Stage 3."},
 {n:"Arrow cards and number cards",w:"partitioning for multidigit work",s:2,e:2,d:"Place value arrow cards and Montessori number cards support partitioning and regrouping in multidigit addition and subtraction."},
 {n:"Base 10 and expanded algorithms",w:"showing the size of each exchange",s:2,e:3,d:"Expanded recording (400 + 120 + 8) shows that a hundred becomes 10 tens. NESA notes base 10 blocks only help if 10 is already a composite unit."},
 {n:"Money",w:"equivalent amounts, change, budgeting",s:2,e:2,d:"Dollars and cents, equivalent amounts with different coins, change and budgeting provide familiar contexts in Stage 2."},
 {n:"Number problem strings",w:"sequences that build a strategy",s:3,e:3,d:"4 to 7 related calculations with helper questions, building towards a target strategy such as constant difference."},
 {n:"String number lines for decimals",w:"measuring decimal sums and differences",s:3,e:3,d:"String and metre lengths model 1.5 m + 2.25 m and 1.5 m − 0.75 m."}
];

var ROOTS = ["Counting or procedures used instead of number structure","The equals sign read as ‘the answer comes next’","Digits treated without their quantity value","Words and problem types misread"];
var SCENARIOS = [
 {st:"es1",q:"Sam has 8 counters and Lily has 5. Asked how many more Sam has, Lily says “8”.",a:3,why:"‘How many more?’ is a comparison question. Students often state the bigger number because the question type is unfamiliar."},
 {st:"s1",q:"Josh knows 8 + 2 = 10, but works out 28 + 7 by counting on by ones.",a:0,why:"Many students don’t use the number bonds they know. Model bridging explicitly: 28 + 2 is 30, then 5 more."},
 {st:"s1",q:"Mia splits 96 − 58 into 90 − 50 = 40 and 8 − 6 = 2, and answers 42.",a:2,why:"The split strategy invites the smaller-from-larger error in subtraction. NESA advises using it for addition only."},
 {st:"s2",q:"Ari writes 12 in the box for 8 + 4 = □ + 5.",a:1,why:"Ari reads = as ‘the answer comes next’ and ignores the + 5. True/false statements and the balance help."},
 {st:"s2",q:"Ben writes 543 − 289 = 346.",a:2,why:"Ben took the smaller digit from the larger in each column. Quantity value, number expanders and estimating first help."},
 {st:"s1",q:"Ella says 5 = 4 + 1 is “backwards” and can’t be right.",a:1,why:"Ella sees = as a signal to calculate. Write number sentences both ways and read = as ‘is the same amount as’."},
 {st:"s3",q:"Kerry has $5 and Kim has $3. Asked how much more money Kerry has, Tom answers $8.",a:3,why:"Tom treated ‘more’ as a cue to add. NESA shows both addition and subtraction problems can use ‘more’ and ‘than’."},
 {st:"s3",q:"Zoe writes 2.25 + 1.5 = 2.40.",a:2,why:"Zoe added 15 hundredths instead of 5 tenths, treating the decimal parts as whole numbers. Rename 1.5 as 1.50."},
 {st:"s2",q:"Sam sets out 500 − 498 as a vertical algorithm and makes errors with the zeros.",a:0,why:"Sam defaults to a procedure. Looking at the numbers first shows a difference of 2."},
 {st:"s3",q:"To find 183 − 96, Jai draws 183 marks and crosses off 96.",a:0,why:"NESA calls this ‘counting from one three times’: slow and error-prone. Adding up from 96, or 183 − 100 + 4, is far quicker."},
 {st:"s2",q:"“I have 18 apples. How many more do I need to have 30 apples in total?” Mia adds and answers 48.",a:3,why:"Mia treats ‘total’ as a cue to add. NESA’s additional advice notes ‘sum’ and ‘total’ appear in subtraction problems too. A tape diagram shows 30 as the whole."},
 {st:"es1",q:"“I had six beans and took away four. How many do I have now?” Ava answers 10.",a:3,why:"Two tenses in one problem are confusing. A real context and acting it out help."}
];

var PROMPTS = [
 ["Looking across the progression","Which of the six big ideas does your stage depend on most? Which earlier stage is it built on?"],
 ["Looking across the progression","How do your students experience comparison subtraction (‘how many more?’) as well as taking away?"],
 ["Looking across the progression","How could the empty number line and the bar model be used consistently from Stage 1 to Stage 3 in your school?"],
 ["Your students","Run the quick check for your stage with three students: one secure, one you’re unsure of and one who is struggling. What did you learn that you didn’t expect?"],
 ["Your students","Which root misconception do you see most often? Where in the earlier stages might it have started?"],
 ["Your students","Do any students know their number bonds but still count by ones? What would you do next for them?"],
 ["Your practice","How do you read the equals sign aloud? How often do students see number sentences written as 5 = 4 + 1?"],
 ["Your practice","Do you teach key words for word problems? What could you do instead?"],
 ["Your practice","When do students in your class choose a mental strategy over an algorithm? How do you encourage them to look at the numbers first?"]
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
  tags:[["Compare two groups of objects to determine how many more","Reasons about quantity"],["Create, model and recognise combinations for numbers up to ten","Reasons about relations"],["Use drawings, words and numerals to record addition and subtraction, and explain their thinking","Reasons about relations"]],
  before:{task:"Count the dots. Write the total.<br><br>●●●●● + ●●●&nbsp;&nbsp;=&nbsp;&nbsp;____",lim:["Can be done by counting every dot from one","Only one combination of the number is considered","No explaining or recording of thinking"]},
  after:{task:"“I have 8 counters hidden in my two hands. How many could be in each hand? Find as many ways as you can.”<br><br>“How do you know you’ve found them all?”",enable:"Start with 5 counters and a ten frame.",extend:"“If one hand has 3, how many are in the other? How did you know without counting?”",listen:"Five as a reference (‘five and three’); ‘one more’ and ‘one less’ between combinations; noticing 3 and 5 and 5 and 3; a systematic list.",el:["Understanding and fluency","Exploring and connecting","Communicating","Reasoning"]}
 },
 s1:{
  tags:[["Fluently use advanced count-by-one strategies, including counting on and counting back","Reasons about relations"],["Model and record patterns for individual numbers up to ten by making all possible whole-number combinations","Reasons about patterns"],["Describe combinations for numbers using words such as more than, less than and double","Reasons about relations"],["Partition numbers using quantity value and bridging to 10","Reasons about relations"],["Use the equals sign to mean ‘is the same as’","Reasons about relations"],["Model the commutative property for addition","Reasons about relations"],["Recall related addition and subtraction facts","Reasons about relations"],["Use an inverse strategy to turn a subtraction into an addition","Reasons about relations"],["Use number knowledge to solve related problems","Reasons about relations"]],
  before:{task:"28 + 7 = ____",lim:["Can be done by counting on by ones","Doesn’t ask students to use the bonds they know","One answer, no recording of a strategy"]},
  after:{task:"“Use what you know about 8 + 2 to solve 28 + 7. Show your thinking on an empty number line.”<br><br>“What other questions could you solve the same way?”",enable:"Start with 8 + 5 on a bead string.",extend:"“Write three questions where bridging to ten is the best strategy, and one where it isn’t. Explain why.”",listen:"Partitioning 7 into 2 and 5; landing on 30; generalising to 38 + 7 and 48 + 7; noticing when bridging doesn’t help (21 + 3).",el:["Understanding and fluency","Exploring and connecting","Choosing and applying techniques","Reasoning"]}
 },
 s2:{
  tags:[["Apply the associative property of addition to forming multiples of 10","Reasons about relations"],["Use number relation principles to solve related problems","Reasons about relations"],["Use the complement principle of addition and subtraction","Reasons about relations"],["Use the compensation strategy to add and subtract","Reasons about relations"],["Apply the levelling and constant difference strategies","Reasons about relations"],["Recognise when mental strategies would be more efficient than a vertical algorithm","Reasons about relations"],["Solve subtraction questions with missing digits given the difference","Reasons about relations"],["Calculate missing numbers by completing number sentences","Algebraic reasoning"],["Find the missing number with operations on both sides of the equals sign","Algebraic reasoning"]],
  before:{task:"Use the algorithm.<br><br>&nbsp;&nbsp;456<br>− 298<br>─────",lim:["The method is chosen for the student","The numbers invite a far easier mental strategy","No comparison of strategies or reasoning"]},
  after:{task:"“Solve 456 − 298 in two different ways. Which way is more efficient for these numbers, and why?”<br><br>“Now write a subtraction where the algorithm would be the better choice.”",enable:"Start with 56 − 29.",extend:"“Change one number so that adding up becomes the best strategy.”",listen:"Constant difference (458 − 300); compensation (456 − 300 + 2); sequential jumps; reasons based on 298 being close to 300.",el:["Exploring and connecting","Choosing and applying techniques","Communicating","Reasoning"]}
 },
 s3:{
  tags:[["Apply known strategies such as levelling, addition for subtraction, using constant difference, and bridging","Reasons about relations"],["Justify why the strategy used to solve addition and subtraction word problems is appropriate","Reasons about quantity"]],
  before:{task:"Calculate 2.25 − 1.5.<br><br>Answer: ____",lim:["A procedure can hide whole-number thinking","No representation of the decimal quantities","No justification"]},
  after:{task:"“Leila says 2.25 − 1.5 = 2.10. Is she right? Use a metre ruler or a number line to convince her.”<br><br>“What might Leila have been thinking?”",enable:"Start with 2.5 − 1.5 on a metre ruler.",extend:"“Write a decimal subtraction that someone with Leila’s thinking would get right by accident.”",listen:"1.5 renamed as 1.50; adding up from 1.5 to 2 (0.5) and on to 2.25 (0.25), so 0.75; estimating ‘a bit less than 1’.",el:["Understanding and fluency","Exploring and connecting","Communicating","Reasoning"]}
 }
};

var CLOSED = [
 {st:"s1",task:"9 − 3 = ____",moves:[
  {m:"Who is correct?",t:"“Ari says 9 − 3 is the same as 3 − 9. Bella says they’re different. Who is correct? Show it with counters.”",el:["Reasoning","Communicating"]},
  {m:"Same and different",t:"“What is the same and what is different about 9 − 3 = 6, 6 + 3 = 9 and 9 − 6 = 3?”",el:["Exploring and connecting","Communicating"]},
  {m:"Always, sometimes, never",t:"“When you subtract, the answer is smaller than the number you started with. Always, sometimes or never true?”",el:["Reasoning","Exploring and connecting"]},
  {m:"Open it up",t:"“The difference between two numbers is 6. What could the numbers be? How many pairs can you find?”",el:["Choosing and applying techniques","Reasoning"]},
  {m:"Convince me",t:"“Convince me that 9 − 3 = 6 by counting up from 3 on a number line.”",el:["Understanding and fluency","Communicating"]}
 ]},
 {st:"s2",task:"125 − 78 = ____",moves:[
  {m:"Who is correct?",t:"“Tom says 125 − 78 is the same as 127 − 80. Mei says it’s 125 − 80 + 2. Who is correct?”",el:["Reasoning","Communicating"]},
  {m:"Same and different",t:"“What is the same and what is different about 125 − 78, 127 − 80 and 78 + □ = 125?”",el:["Exploring and connecting","Communicating"]},
  {m:"Always, sometimes, never",t:"“Adding the same amount to both numbers in a subtraction doesn’t change the answer. Always, sometimes or never true?”",el:["Reasoning","Exploring and connecting"]},
  {m:"Open it up",t:"“Find three subtractions with the same answer as 125 − 78. What do you notice?”",el:["Choosing and applying techniques","Reasoning"]},
  {m:"Convince me",t:"“Convince me that 125 − 78 is about 50.”",el:["Understanding and fluency","Communicating"]}
 ]},
 {st:"s3",task:"4988 + 955 = ____",moves:[
  {m:"Who is correct?",t:"“Kai levels the numbers to 5000 + 943. Jess uses the algorithm. Who has the more efficient method for these numbers, and why?”",el:["Reasoning","Communicating"]},
  {m:"Same and different",t:"“What is the same and what is different about 4988 + 955, 4990 + 953 and 5000 + 943?”",el:["Exploring and connecting","Communicating"]},
  {m:"Always, sometimes, never",t:"“A mental strategy is quicker than the algorithm. Always, sometimes or never true?”",el:["Reasoning","Exploring and connecting"]},
  {m:"Open it up",t:"“Write an addition where levelling makes it easy, and one where levelling doesn’t help.”",el:["Choosing and applying techniques","Reasoning"]},
  {m:"Convince me",t:"“Convince me that the answer is between 5900 and 6000 without calculating it exactly.”",el:["Understanding and fluency","Communicating"]}
 ]}
];
