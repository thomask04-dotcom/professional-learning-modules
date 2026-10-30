/* ---------------- module config ---------------- */
var M = {
 key:"rn-k6-module-v1",
 title:"Representing Numbers K–6",
 dlName:"representing-numbers-reflections.txt",
 welcomeH2:"How students learn to represent numbers, K to 6",
 welcomeP:"This module follows one focus area across four stages: how the outcomes build, the maths you need to teach it, the misconceptions to look for, and what the NESA teaching advice recommends.",
 tryText:"a model for each stage: covered cards, renaming with base 10, comparing decimals and a number slide.",
 namesH3:"One focus area, four names",
 namesP:"The focus area is named differently in each stage. All content also addresses the Working mathematically outcome, MAO-WM-01.",
 ideasP:"Representing numbers in a variety of ways is, in NESA’s words, “essential for developing number sense”. Each stage revisits these ideas with larger numbers and new kinds of numbers. Select an idea to see how it develops.",
 ideasNote:"These ideas also support Additive relations, Multiplicative relations and Partitioned fractions. A gap here often shows up first as a calculation difficulty there.",
 progP:"The number range grows from 20 to 1 billion and thousandths. The bigger change is how students understand what a number is: a counted collection, then groups of ten, then a place value system that extends in both directions.",
 shifts:[
  ["es1","Early Stage 1 → Stage 1","From counting ones to treating ten as a unit. Students who count by ones to find “how many tens” aren’t yet ready to partition two-digit numbers."],
  ["s1","Stage 1 → Stage 2","From ‘groups of ten’ to ‘tens’ as abstract units, and from standard to non-standard partitions. Each place is ten times the one to its right."],
  ["s2","Stage 2 → Stage 3","From hundredths to thousandths, whole numbers to integers, and decimals to percentages. Place value is used deliberately to estimate."]
 ],
 modelsH2:"Each stage adds models; the number line runs from Stage 1 to Stage 3",
 modelsP:"The bars show the stages where the syllabus and NESA teaching advice name or use each model. Select a model for more detail.",
 modelTips:[
  ["Move between representations.","Ask students to show the same number with materials, a diagram, words and numerals, and explain how they match."],
  ["Introduce the number line through length.","Build it from equal units before using it to compare or estimate."],
  ["Prefer linear models for decimals.","NESA notes that lengths are easier to compare than areas or volumes."],
  ["Fade the materials, keep the language.","As students move from ‘groups of ten’ to ‘tens’, keep materials nearby so they can check their reasoning."]
 ],
 sorterP:"Most misconceptions in this focus area come from four roots, and each root reappears in a new form at every stage. A Stage 3 decimal error is often a Stage 1 place value gap with larger numbers. Read each student response and choose its root.",
 rootRows:[
  ["Digits read as separate whole numbers","31 for thirteen <span class=\"pill src-add\">Add.</span>","The 1 in 16 shown as one tile; 10010 for 110","0.11 for eleven tenths; ‘longer is larger’","5.37 = 5 + 0.3 + 7; 0.320 &gt; 0.32"],
  ["Zero is misread","Zero not seen as a number <span class=\"pill src-add\">Add.</span>","17 for 107 <span class=\"pill src-add\">Add.</span>","1001 read as ‘one hundred and one’","0.07 = 0.7; decimals placed below zero"],
  ["Words and numerals don’t line up","13 and 30 confused","Numbers used as labels read like quantities","‘Units’ confused with units of ten or measurement","Home-language number structures need transcoding"],
  ["Digit rules replace a sense of size","Last word of the count not linked to ‘how many’","‘Five or more, round up’ without knowing the nearest ten","0.3 &gt; 0.4 by analogy with fractions or negatives","‘The decimal point moves’"]
 ],
 sorterNote:"NESA notes that decimal misconceptions move around: ‘longer is larger’ can turn into ‘shorter is larger’, so keep checking through Stages 2 and 3.",
 notesTitle:"Representing Numbers K–6: my reflections",
 footer:"Built from the NESA <i>Mathematics K–10 Syllabus (2022)</i> outcomes and content (Early Stage 1 to Stage 3), the NESA syllabus support teaching advice, and the NESA additional teaching advice <i>Stage 2 – Representing numbers using place value B</i>. Items marked <span class=\"pill src-add\">Additional commentary</span> are common classroom observations, not NESA examples. Your progress and notes are saved only in this browser."
};

/* ---------------- data ---------------- */
var STAGES = {
 es1:{short:"ES1", name:"Early Stage 1", years:"Kindergarten", fa:"Representing whole numbers", col:"var(--es1)", soft:"var(--es1-soft)"},
 s1:{short:"S1", name:"Stage 1", years:"Years 1–2", fa:"Representing whole numbers A and B", col:"var(--s1)", soft:"var(--s1-soft)"},
 s2:{short:"S2", name:"Stage 2", years:"Years 3–4", fa:"Representing numbers using place value A and B", col:"var(--s2)", soft:"var(--s2-soft)"},
 s3:{short:"S3", name:"Stage 3", years:"Years 5–6", fa:"Represents numbers A and B", col:"var(--s3)", soft:"var(--s3-soft)"}
};
var ORDER = ["es1","s1","s2","s3"];

var STAGE_CONTENT = {
es1:{
 lead:"In Kindergarten, students learn that number words, numerals and collections all stand for the same quantity, and that the last number said in a count tells how many. NESA calls this cardinality principle “a profound conceptual achievement”.",
 outcomes:[["MAE-RWN-01","demonstrates an understanding of how whole numbers indicate quantity"],["MAE-RWN-02","reads numerals and represents whole numbers to at least 20"]],
 content:[
  ["","Instantly name the number of objects within small collections",["Instantly recognise (subitise) the number of items in small groups of up to four items without counting","Identify the number of items in different arrangements (natural arrangements, classroom items)"]],
  ["","Use the counting sequence of ones flexibly",["Count forwards to at least 30 and state the number after or before a given number, without needing to count from one","Identify and distinguish the ‘teen’ numbers from multiples of ten with the same initial sounds (13 from 30, 14 from 40)","Count backwards from a given number 20 or less","Identify the number before as ‘one less’ and the number after as ‘one more’"]],
  ["","Recognise number patterns",["Recognise dice and domino dot patterns","Recognise different finger patterns for the same number"]],
  ["","Connect counting and numerals to quantities",["Count with one-to-one correspondence, recognising that the last number name represents the total","Count out a specified number of objects (5 to 20) from a larger collection, keeping track of the count","Make correspondences between collections","Read numerals to at least 20, including zero","Represent numbers as quantities to at least 20 using objects (such as fingers), number words and numerals","Compare and order numbers to 20","Use the term ‘is the same as’ to express equality of groups"]]
 ],
 know:[
  ["Four representations","NESA lists number words (five), numerals (5), finger patterns and collections of real items (5 pencils). Students learn to move between all four in any direction."],
  ["Counting with understanding","Rests on the one-to-one and cardinal principles, supported by stable order, order irrelevance and abstraction (anything can be counted)."],
  ["Rote count runs ahead","That is why the syllabus expects a rote count to at least 30 but representing numbers only to at least 20. Assess one-to-one counting and cardinality within each student’s counting range."],
  ["Subitising","Instantly recognising up to 4 items. Recognising known patterns (sometimes called conceptual subitising) lets students see larger numbers as parts, such as six as two threes. This grouping structure later supports place value."],
  ["Teens are irregular","English teen names say the ones first (four-teen), the reverse of ‘tens then ones’. That’s why students often name the number before twenty-three sooner than the number before thirteen."]
 ],
 misc:[
  {see:"Says the counting words to 15 correctly, but skips some items or counts them twice.",name:"Counting is reciting words, not finding quantity",resp:"Assess one-to-one correspondence within the student’s counting range. Count slowly together, touching or moving each item.",src:"n"},
  {see:"Counts 7 blocks, then when asked “How many?” counts again from one.",name:"The count isn’t linked to ‘how many’",resp:"Model the count, stress the last word, then repeat it while gesturing to the whole collection.",src:"n"},
  {see:"Reads 13 as “thirty”, or 15 as “fifty”.",name:"Confusing teens and tens",resp:"Contrast -teen and -ty explicitly and early. Use phonemic awareness to link spoken words and numerals.",src:"n"},
  {see:"Counts from 1 every time to find the number after 8.",name:"The counting sequence only works from one",resp:"Practise counting on and back from any starting number. Play ‘what comes next’ games.",src:"n"},
  {see:"Writes 31 for “thirteen”.",name:"Teen numerals written in spoken order",resp:"Build teens as ten and some more on ten frames, and point to the 1 as the ten.",src:"a"},
  {see:"Says a spread-out row of 6 counters has more than a bunched row of 6.",name:"Spread-out collections have more",resp:"Count both rows. Ask: “Is it still 6? How do you know without counting?”",src:"a"}
 ],
 advice:["Have students count out a given amount from a larger collection when shown a word or numeral, for example counting out 8 items from 20 when shown the numeral 8.","Allow gestures, nodding or body tallying to show the count.","Once students show cardinality and subitising, extend them through dice and domino pattern structures and by representing quantities to 20.","Acknowledge how number words work in students’ home languages. Many follow a regular tens-then-ones pattern that English teens don’t."],
 vocab:["count forwards","count backwards","number after","number before","one less","one more","zero","number words","numerals","is the same","count","pattern","ones","coins"],
 check:{title:"Quick check (NESA key progress point)",steps:["<b>Order the cards.</b> Give the student shuffled number cards from 1 to 20 and ask them to order them from smallest to largest. Gestures, eye gaze or telling you are all fine.","<b>If there are errors,</b> ask the student to count aloud, starting one or two numbers before the first error.","<b>If they succeed,</b> point to cards and ask, <i>What number is that?</i>","<b>Cover the first five cards.</b> Ask, <i>How many numbers have I covered up? How do you know?</i> A student who reasons “6 is showing, so 1 to 5 are covered” without counting from one understands how whole numbers indicate quantity. Try this below."]},
 tool:"cards",
 quiz:[
  {q:"A child counts 7 blocks correctly. When you ask “How many?”, they count again from one. What does this most likely show?",o:["They can’t subitise yet","They haven’t yet linked the last number said to the total (cardinality)","They don’t know the stable order of number words","They need to work with larger collections"],a:1,why:"Recounting when asked “How many?” shows the cardinal principle isn’t secure yet. NESA suggests stressing and repeating the last word while gesturing to the whole collection."},
  {q:"Why does the syllabus expect a rote count to at least 30, but representing numbers only to at least 20?",o:["Numbers above 20 aren’t used in Kindergarten","Rote counting usually runs ahead of counting with understanding","Teen numbers are easier than numbers in the twenties","Counting backwards is only expected to 20"],a:1,why:"Students can often recite further than they can count meaningfully, so NESA advises assessing one-to-one counting and cardinality within each student’s counting range."}
 ]
},
s1:{
 lead:"In Years 1 and 2, the big shift is from counting by ones to the composite units of 10 and 100: seeing ten as one ten and ten ones at the same time. NESA describes this as the focus of Stage 1.",
 outcomes:[["MA1-RWN-01","applies an understanding of place value and the role of zero to read, write and order two- and three-digit numbers"],["MA1-RWN-02","reasons about representations of whole numbers to 1000, partitioning numbers to use and record quantity values"]],
 content:[
  ["A","Use counting sequences of ones with two-digit numbers and beyond",["Identify the number before and after a given two-digit number","Count forwards and backwards by ones from a given number to at least 120"]],
  ["A","Continue and create number patterns",["Model and describe ‘odd’ and ‘even’ numbers using items paired in two rows","Count forwards and backwards by twos from any starting point"]],
  ["A","Represent numbers on a line",["Sequence numbers and arrange them on a line by considering order and size","Locate the approximate position of multiples of 10 on a number line from 0 to 100"]],
  ["A","Represent the structure of groups of ten in whole numbers",["Recognise that ten ones is the same as one ten","Use 10 as a reference in forming 11 to 20 (‘Thirteen is 1 group of ten and 3 ones’)","Count large sets by systematically grouping in tens","Partition two-digit numbers to show quantity values (32 as 30 and 2)","Use number lines and charts to locate the nearest ten","Estimate to the nearest ten and check by counting in tens"]],
  ["B","Use counting sequences of ones and tens flexibly",["Identify the number before and after a three-digit number","Count by tens on and off the decade (40, 30, 20 … and 427, 437, 447 …)","Identify how many more to the next multiple of ten (127 to 130 needs 3)"]],
  ["B","Form, regroup and rename three-digit numbers",["Count and represent large sets by grouping in tens and hundreds","Use base 10 material and interlocking cubes to represent and explain grouping","State the quantity value of digits (in 583, the 5 represents 500 or 5 hundreds)","Identify the nearest hundred","Recognise units of 100 (100 cents in $1; 3 groups of 100 in 326; 10 groups of 100 in 1000)","Partition and rename three-digit numbers in different ways (326 as 32 tens and 6 ones)","Estimate to the nearest hundred and check"]]
 ],
 know:[
  ["Composite units","A unit of ten is composite when it can be seen as one ten and ten ones at the same time. Bundling alone isn’t enough; students need to switch between both views."],
  ["Four properties of place value","Additive (583 = 500 + 80 + 3), positional (value depends on position), base-ten (positions grow by powers of ten) and multiplicative (5 × 100) — Ross 2002."],
  ["Naming isn’t understanding","Students can say ‘tens and ones’ while still treating each digit as single items. The digit-correspondence task exposes this."],
  ["Zero has two jobs","A tag at the end that forms the name (20, 100) and a place holder inside a number (107)."],
  ["Numeral track or number line?","A numeral track is ordered cards for counting. A number line is a length model: count the spaces, not the numerals. Introduce it once students can use length."],
  ["Rounding by nearest, not by rule","NESA advises against “round up if the last digit is 5 or more”. Focus on quantity: which ten or hundred is the number closest to?"]
 ],
 misc:[
  {see:"Counts 16 tiles and writes 16, then shows the 1 in 16 with a single tile and calls the other 9 tiles “leftovers”.",name:"Each digit stands for single items",resp:"Bundle the tiles into a ten and ones. Ask what the 1 stands for and show it with the materials.",src:"n"},
  {see:"Writes “10010” for one hundred and ten.",name:"Writing numbers as they sound (literal transcoding)",resp:"Build the number with base 10 material. Use place value cards that overlap (10 on top of 100).",src:"n"},
  {see:"Unsure what comes after 109, or stalls when counting past 100.",name:"Counting stalls past 100",resp:"Use number charts that run to 120. Practise counting across 100, from 106 to 120.",src:"n"},
  {see:"Lands one out on a number line by counting the marks instead of the jumps.",name:"Reading a number line as a numeral track",resp:"Build the line from equal lengths. Ask, “How far is 5 from 0?”",src:"n"},
  {see:"Rounds 47 to 50 by rule but can’t say which ten 47 is closer to, or why.",name:"Rounding is about the last digit",resp:"Place the number between two tens on a number line and talk about distance.",src:"n"},
  {see:"Agrees 326 is 3 hundreds, 2 tens and 6 ones, but says it can’t be 32 tens and 6 ones.",name:"There’s only one way to split a number",resp:"Trade a hundred for ten tens with base 10 material. Record several partitions of the same number. Try the renaming tool below.",src:"a"},
  {see:"Counts by tens across 200 as “187, 197, 1107”.",name:"Counting by tens breaks across the hundred",resp:"Count off the decade with a hundreds chart or base 10 material across the hundred boundary.",src:"a"}
 ],
 advice:["Encourage grouping when counting large collections, such as counting out fives or tens and then totalling the groups. Grouping also makes the total easier to check.","Use number charts to notice ten as 10 ones and 1 ten, one hundred as 10 tens, and patterns such as 10 more. Charts that run to 120, or build from the bottom up, help.","Use number talks (Parrish 2011) to assess reasoning about numbers to 1000. Choose problems with more than one solution path. Use think-pair-share, home-language buddies and yarning circles, and record students’ thinking as they explain.","In Australia, <i>and</i> is used when saying numbers over 100 (five hundred and sixty-three). Numbers used as labels, such as bus numbers, postcodes and phone numbers, are read differently."],
 vocab:["count forwards/backwards","number before/after","more than/less than","number line","numeral track","digit","zero","tens","groups of ten","round to","counters","coins","dollars/cents","odd/even"],
 check:{title:"Quick checks (NESA key progress points)",steps:["<b>Beyond 100 (part A).</b> Ask, <i>What number comes after 109?</i> or have the student count from 106 to 120. Then ask them to write the number after 109. Watch for “10010”.","<b>Digit-correspondence task (part B).</b> Have the student count 10 to 40 tiles and write the total. Point to each digit and ask them to show with the tiles what that digit means. A student who shows the 1 in 16 as one tile doesn’t yet link a digit’s position with its quantity."]},
 tool:"blocks",
 quiz:[
  {q:"In the 16 tiles task, a student shows the 1 in 16 using one tile. What does this tell you?",o:["They can’t count to 16","They don’t yet link the digit’s position to its quantity value","They have reversed the digits","They understand place value but are being careless"],a:1,why:"The student can name the number but treats each digit as single items. Their understanding of positional value doesn’t yet match the quantity."},
  {q:"What does NESA recommend for teaching rounding in Stage 1?",o:["Teach “round up if the last digit is 5 or more” early","Avoid rounding until Stage 2","Focus on which ten or hundred is nearest, using quantity rather than a digit rule","Teach rounding only with money"],a:2,why:"Digit procedures stress the digits rather than units of ten and hundred. Place numbers on number lines and charts and identify the nearest ten or hundred."},
  {q:"A unit of ten is ‘composite’ when a student can…",o:["write it as 10","see it as one ten and ten ones at the same time","count to ten without errors","make it with bundled sticks"],a:1,why:"Composite units are both a single unit and a collection of units at once. This is the basis for regrouping and renaming."}
 ]
},
s2:{
 lead:"In Years 3 and 4, students extend place value to hundreds of thousands and, for the first time, to the right of the ones: tenths and hundredths. NESA stresses that place value “requires more than naming the ones place, tens place and hundreds place”.",
 outcomes:[["MA2-RN-01","applies an understanding of place value and the role of zero to represent numbers to at least tens of thousands"],["MA2-RN-02","represents and compares decimals up to 2 decimal places using place value"]],
 content:[
  ["A","Whole numbers: Read, represent and order numbers to thousands",["Group objects to show tens, hundreds and a thousand","Regroup flexibly: one thousand as 10 hundreds, one hundred as 10 tens or 100 ones","Position numbers on a number line (locate 10 and 50 given 0 and 5)","Count by tens and hundreds on and off the decade","Read and order numbers of at least 4 digits","Identify the number before and after a number with an internal zero"]],
  ["A","Whole numbers: Apply place value to partition and regroup numbers up to 4 digits",["Record numbers in standard place value form (5429 = 5000 + 400 + 20 + 9)","Partition in non-standard forms (5429 as 54 hundreds and 29 ones)"]],
  ["B","Whole numbers: Order numbers in the thousands",["Arrange in ascending and descending order","Describe how rearranging digits changes size (second largest number from the digits of 54 321)","Identify the nearest thousand, 10 thousand or 100 thousand"]],
  ["B","Whole numbers: Partition, regroup and rename numbers up to 6 digits",["Name thousands using the ‘place value house’ of ones, tens and hundreds","Expand notation (67 012 = 60 000 + 7000 + 10 + 2)","Non-standard forms (67 000 as 50 000 + 17 000 or 670 hundred)"]],
  ["B","Whole numbers: Numbers that are 10, 100 or 1000 times as large",["Recognise the number of tens, hundreds or thousands in a number","Describe how making a number 10 times as large moves each digit one place left"]],
  ["B","Decimals: Extend place value to tenths and hundredths",["Divide a length into 10 equal parts and label with decimal notation (clothesline)","The decimal point marks the position of the ones (12.1 is 1 ten, 2 ones and 1 tenth)","10 tenths is 1.0; 13 tenths is 1.3","Subdivide tenths into hundredths","Express decimals as tenths and hundredths (0.25 as 2 tenths and 5 hundredths, or 25 hundredths)","Locate and order decimals on a number line (0.5, 0.05, 0.55)","Interpret trailing zeros (0.70 = 0.7) and the role of zero in 1.0, 0.1, 0.01, 0.10"]],
  ["B","Decimals: Connect fractions and decimal notation",["Record measurements with decimals (125 cm as 1.25 m)","Connect fraction strips in tenths to a number line marked in hundredths"]]
 ],
 know:[
  ["Two principles that can’t be separated","Positional (each position corresponds to a unit) and decimal (each unit equals ten of the next lower unit) — Ross 1989. Secure ones, tens and hundreds before non-standard partitions."],
  ["From ‘groups of ten’ to ‘tens’","K–2 language talks about groups of ten; Stage 2 treats a ten as an abstract unit. Bundling, ten frames and place value charts support the shift."],
  ["Zero’s roles","Lexical zeros name a number (300). Syntactic zeros hold an empty place (1002) and are harder. Trailing zeros show precision. Write 0.2, not .2."],
  ["Say ‘ones’, not ‘units’","Both are correct, but ‘ones’ avoids confusion with units of ten and units of measurement: “10 ones equal 1 ten”."],
  ["Expanded notation enables operations","234 = 200 + 30 + 4 = 200 + 20 + 14, which is why exchanging a ten for ten ones in 234 − 119 makes sense."],
  ["The decimal point shows where the ones are","Grouping by ten builds places to the left; splitting one into ten builds them to the right. Symmetry is around the ones, not the point. Introduce decimals with words (three tenths), not fraction notation."],
  ["Read decimals by place value","Reading 1.12 as ‘one point twelve’ reinforces the idea that decimals are two whole numbers. Say ‘1 and 1 tenth and 2 hundredths’. Thinking of 0.45 as 4 tenths and 5 hundredths helped problem solving more than ‘45 hundredths’ (Rittle-Johnson et al. 2001). <span class=\"pill src-nesa\">NESA additional advice</span>"],
  ["Money uses only some decimal features","$1.25 is read as two whole numbers, ‘one dollar twenty-five’, and amounts under $1 are often written in cents (83c). Petrol prices use four digits in cents per litre. Money is a context, but not a model of decimal place value. <span class=\"pill src-nesa\">NESA additional advice</span>"],
  ["Say ‘times as large’","‘Ten times bigger’ is ambiguous: ‘one time bigger’ would mean doubling. Say ‘10 times as large’, and for smaller values use the fraction: ‘one-tenth as large’, not ‘ten times smaller’. <span class=\"pill src-nesa\">NESA additional advice</span>"]
 ],
 misc:[
  {see:"Says the 5 in 53 means “five”.",name:"Every digit is ones",resp:"Compare the 5 in 35 and 53 with materials: one is 10 times the other.",src:"n"},
  {see:"Reads 1001 as “one hundred and one” or “ten hundred and ten”.",name:"Misreading internal zeros",resp:"Name 1200, 1020 and 1002 in turn. Play Wipe-out.",src:"n"},
  {see:"Writes 0.11 for eleven tenths.",name:"Decimals are two whole numbers separated by a point",resp:"Regroup 10 tenths as 1 using length models; write 11 tenths as 1.1. Read decimals by place value (‘1 and 1 tenth’), not ‘one point eleven’. (40–50% of 11- to 15-year-olds did this in one Norwegian study.)",src:"n"},
  {see:"Reads 1.12 as “one point twelve” and says 1.12 is bigger than 1.5.",name:"Reading the decimal part as a whole number",resp:"Read it as ‘1 and 1 tenth and 2 hundredths’ and compare the tenths first. NESA’s additional advice notes that money reading (‘one twenty-five’) can reinforce this.",src:"n"},
  {see:"Says 0.75 is larger than 0.8.",name:"Longer is larger",resp:"Set benchmarks (0.5 is a half, 0.25 is a quarter). Focus on the tenths digit on a length divided into tenths.",src:"n"},
  {see:"Says 0.4 is larger than 0.45.",name:"Shorter is larger",resp:"Often appears as ‘longer is larger’ fades. Keep checking across stages; use number lines and hundredths grids.",src:"n"},
  {see:"Says 0.3 is larger than 0.4, “like one third is bigger than one quarter”.",name:"Reciprocal or negative thinking",resp:"Place both on a number line and name them as tenths.",src:"n"},
  {see:"Thinks the first place after the point is ‘oneths’.",name:"The decimal point is the centre of symmetry",resp:"Show the stepped symmetry around the ones column: tens and tenths, hundreds and hundredths.",src:"a"}
 ],
 advice:["<b>Read decimals aloud by place value:</b> 1.12 is ‘1 and 1 tenth and 2 hundredths’ (NESA additional advice).","<b>Multisensory access:</b> use bead strings, interlocking cubes, ten frames, blocks, counters and pattern-based materials such as Numicon. Represent numbers with fingers, dots and images before numerals. Virtual manipulatives support embodied learning (NESA additional advice).","<b>Number expanders</b> help with renaming in non-standard forms, such as 5429 as 54 hundreds and 29 ones.","<b>Arrow cards</b> show that a number contains its parts: in 34, the 30 is still there under the 4. Ask how many tens are in 230, and build the same number with base 10 blocks or bundles.","<b>Let students split numbers.</b> Most children who haven’t been taught an algorithm split numbers into place value parts when adding (Kamii 2004).","<b>Direct attention</b> to the tenths digit; it improves decimal magnitude knowledge (Durkin and Rittle-Johnson 2015).","<b>Number conventions.</b> Numbers with 5 or more digits use a space, not a comma (16 234); 4-digit numbers have no space (2004). Some students know other numeral sets, such as Arabic-script or Devanagari."],
 vocab:["number before/after","more than","greater than","less than","largest/smallest number","ascending order","descending order","digit","zero","ones","groups of ten","tens","hundreds","thousands","tens of thousands","place value","expanded notation","times as large","decimal","decimal point","tenths","hundredths","decimal places"],
 check:{title:"Quick checks (activities from NESA teaching advice)",steps:["<b>Wipe-out.</b> The student enters 3042 on a calculator and must make it show 3002 by subtracting one number. Ask them to explain, and to say the answer as a number (forty), not a string of digits.","<b>Decimal comparison.</b> Ask, <i>Which is larger, 0.75 or 0.8? How do you know?</i> Then have them place both on a number line marked in tenths. Recheck later with 0.4 and 0.45. Try the comparison tool below.","<b>Reading decimals.</b> Ask the student to read 1.12 and 0.45 aloud. Listen for ‘one point twelve’, and model ‘1 and 1 tenth and 2 hundredths’ (NESA additional advice)."]},
 tool:"decimals",
 quiz:[
  {q:"A student says 0.75 is larger than 0.8. Which misconception is this?",o:["Shorter is larger","Longer is larger","Reciprocal thinking","Negative thinking"],a:1,why:"NESA identifies ‘longer decimals are larger’ as the most common first misconception. Benchmarks (0.5, 0.25) and attention to the tenths digit help."},
  {q:"In 1002, the zeros are…",o:["lexical zeros that name the number","trailing zeros that show precision","syntactic (place holder) zeros, harder to interpret than the zeros in 1000","not needed"],a:2,why:"Internal zeros show an empty place and are harder than the lexical zeros in 1000. Students may misread 1001 as ‘one hundred and one’."},
  {q:"Why does NESA suggest introducing decimals using words (three tenths) rather than fraction notation?",o:["Fraction notation for tenths doesn’t use place value","Fractions are taught later","Words are quicker to write","Students prefer words"],a:0,why:"3/10 doesn’t use the place value system, while 0.3 does. Words connect the meaning to the place value columns."},
  {q:"How does NESA’s additional advice suggest reading 1.12 aloud?",o:["‘One point twelve’","‘One dollar twelve’","‘1 and 1 tenth and 2 hundredths’","‘112 hundredths’"],a:2,why:"Reading the decimal part as a whole number reinforces the two-whole-numbers misconception. Thinking in tenths and hundredths supported problem solving (Rittle-Johnson et al. 2001)."},
  {q:"Which phrase does NESA recommend instead of ‘ten times smaller’?",o:["‘Ten times less’","‘One-tenth as large’","‘Divided by ten times’","‘Ten times bigger, backwards’"],a:1,why:"Everyday phrases like ‘ten times smaller’ are ambiguous. Use ‘times as large’, and the fraction multiplier for smaller values."}
 ]
},
s3:{
 lead:"In Years 5 and 6, place value extends to billions and thousandths, and students meet negative integers and benchmark percentages. The aim is to understand place value relationships well enough to use them for estimation.",
 outcomes:[["MA3-RN-01","applies an understanding of place value and the role of zero to represent the properties of numbers"],["MA3-RN-02","compares and orders decimals up to 3 decimal places"],["MA3-RN-03","determines percentages of quantities, and finds equivalent fractions and decimals for benchmark percentage values"]],
 content:[
  ["A","Whole numbers: Recognise, represent and order numbers in the millions",["Name millions using the place value grouping of ones, tens and hundreds","Arrange numbers in the millions in order","Round to a specified place value (84 352 is 84 400 to the nearest hundred)"]],
  ["A","Whole numbers: Partition, regroup and rename numbers to 1 billion",["Recognise 1000 thousands is 1 million and 1000 millions is 1 billion","Regroup (163 480 as 163 thousands, 4 hundreds and 8 tens)","Partition in non-standard forms to help calculate (163 480 as 150 000 + 13 480)"]],
  ["A","Decimals and percentages: Extend place value beyond hundredths",["Express and interpret thousandths (0.125 m is 125 mm)","Indicate the place value of digits up to 3 decimal places","Partition decimals (5.37 = 5 + 0.3 + 0.07; 5.429 as 5 ones and 429 thousandths)"]],
  ["A","Decimals and percentages: Compare, order and represent decimals",["Compare and order to 3 decimal places (0.5, 0.125, 0.25)","Interpret trailing zeros (0.170 = 0.17)","Find 10 or 100 times, and one-tenth or one-hundredth of, a decimal (0.032 is one-tenth of 0.32)","Approximate decimals (1.254 is 1.25 to 2 decimal places)","Place decimals on a number line"]],
  ["B","Whole numbers: Locate and represent integers on a number line",["Locate negative whole numbers in relation to zero","Use the term ‘integers’","Interpret integers in context, such as thermometers","Recognise that negative numbers can result from subtraction"]],
  ["B","Decimals and percentages: Benchmark fractions, decimals and percentages",["% means per cent and 100% is the whole","Recall equivalents for ½, ¼ and ¾ (75%, 0.75)","Represent percentages as fractions and decimals (25% = 25/100 = 0.25)","10% is one-tenth of 100%; find 10% of a quantity"]],
  ["B","Decimals and percentages: Percentage discounts of 10%, 25% and 50%",["10% is dividing by 10, 25% is dividing by 4, 50% is halving","Estimate discounts mentally (50% off $1099.99 is about $500)","Calculate sale prices (25% of $120 as half and half again)"]]
 ],
 know:[
  ["Relative size of units","10 thousand = 100 hundreds = 1000 tens. 894 × 3 must be between 2400 and 2700, closer to 2700, so 894 × 30 is between 24 000 and 27 000."],
  ["Decimals versus fractions","A fraction shows the number of parts and their size. A decimal shows only the number of parts; place value gives the size."],
  ["Not strictly sequential","A student can understand the relative size of decimals and still be unsure what is 1 more than 3099."],
  ["Linear models work best","Lengths are easier to compare than areas or volumes. A tape measure shows a metre in tenths, hundredths and thousandths."],
  ["The point doesn’t move","When multiplying or dividing by a power of ten, the digits shift and the decimal point stays fixed. Try the number slide below."],
  ["Benchmarks","Stage 3 adds one-tenth (10%, 0.1) to half and quarter. Build from 10%: if 10% of 150 is 15, 30% is 3 lots of 15."]
 ],
 misc:[
  {see:"Completes 5.37 = 5 + 0.3 + ___ with 7.",name:"The decimal point separates two whole numbers",resp:"Partition on a number slide or with linear materials, naming each part as tenths or hundredths.",src:"n"},
  {see:"Says 0.07 is the same as 0.7.",name:"Ignoring a zero in the tenths place",resp:"Build both with a linear model; read them as 7 hundredths and 7 tenths.",src:"n"},
  {see:"Says 0.320 is greater than 0.32.",name:"Trailing zeros make a decimal bigger",resp:"Show both on a number line, and read both by place value: 3 tenths and 2 hundredths, with 0 thousandths in 0.320.",src:"n"},
  {see:"Explains × 10 as “moving the decimal point one place”.",name:"The decimal point moves",resp:"Use a number slide with a fixed decimal marker so the digits move instead.",src:"n"},
  {see:"Places 0.6 and 0.5 to the left of 0 on a number line.",name:"Decimals starting with zero are less than zero",resp:"Check where students place decimals beginning with zero. Label 0 and 1 and ask what lies between.",src:"n"},
  {see:"Says 0.5 is one-fifth.",name:"Confusing benchmark forms",resp:"Practise equivalent forms on one number line: ½ = 0.5 = 50%.",src:"n"},
  {see:"A student whose home language groups large numbers in tens of thousands hesitates naming 612 000.",name:"Converting between number-word structures",resp:"In Mandarin, 612 000 is ‘61 wàn, 2 qiān’. Explicitly practise moving between the two structures.",src:"n"},
  {see:"Says 25% of $120 is $25.",name:"A percentage is a fixed amount, not a proportion",resp:"Draw a tape diagram with 0% to 100% above and $0 to $120 below.",src:"a"}
 ],
 advice:["Use a <b>number slide</b> to show how each position relates to the next, adding zeros as place holders when multiplying and dividing by powers of ten.","Use <b>tape measures and metric units</b> as decimal models.","Use <b>tape diagrams</b> to find percentages, building from 10%.","Trailing zeros in measurement show precision: 0.2 seconds is measured in tenths, 0.20 seconds in hundredths.","<b>Language.</b> ‘K’ comes from the Greek <i>khilios</i>, thousand ($70 K). ‘Per cent’ comes from the Latin <i>per centum</i>, by the hundred. Brahmagupta described negative numbers as debts around 620 CE."],
 vocab:["ascending order","descending order","digit","expanded notation","factor","millions","place value","thousandths","whole number","benchmark","integer","negative number","number line","per cent","percentage","positive number","zero"],
 check:{title:"Quick checks (built from the NESA examples)",steps:["Ask the student to complete <b>5.37 = 5 + 0.3 + ___</b>, then ask, <i>True or false: 0.07 = 0.7?</i>","Give a number line marked −1, 0 and 1. Ask them to place <b>0.6, 0.22 and −0.5</b> and explain. Watch for decimals placed left of zero.","Ask, <i>Which is larger, 0.32 or 0.320?</i> and <i>Show me 0.32 × 10 on a number slide.</i>","Ask, <i>What is 25% of $120? Show me how you know.</i> Look for halving and halving again."]},
 tool:"slide",
 quiz:[
  {q:"A student completes 5.37 = 5 + 0.3 + ___ with 7. What is the most likely thinking?",o:["They can’t add decimals","They see the decimal point as a separator between whole numbers","They are rounding","They confuse tenths and thousandths"],a:1,why:"NESA describes this as viewing the decimal separator as a space between whole numbers. Naming each part (7 hundredths) helps."},
  {q:"A number slide is especially useful for addressing which belief?",o:["That longer decimals are larger","That the decimal point moves when multiplying by 10","That 0.5 is one-fifth","That negative numbers are smaller"],a:1,why:"The decimal marker on a number slide stays fixed while the digits move. That challenges ‘the point moves’ language."},
  {q:"A student places 0.6 to the left of 0 on a number line. What may they be doing?",o:["Applying a ‘mirror at zero’ analogy from negative numbers to decimals","Rounding 0.6 to 0","Confusing 0.6 with 6","Counting the marks instead of the spaces"],a:0,why:"Stacey et al. (2001) found students sometimes carry the mirror analogy for negatives over to decimals, placing decimals that start with zero below zero."}
 ]
}
};

var IDEAS = [
 {t:"Numbers tell how many",d:"A word, numeral, finger pattern, collection and point on a line can all show the same quantity.",s:{es1:"Cardinality: the last number counted tells how many. Moving between words, numerals, fingers and collections.",s1:"Two- and three-digit numbers as quantities of tens, hundreds and ones.",s2:"Decimals as quantities less than one: 125 cm is 1.25 m.",s3:"0.25, 25% and ¼ are the same value."}},
 {t:"We group to count and record",d:"Ten ones make one ten, ten tens make one hundred. Composite units are one and many at the same time.",s:{es1:"Subitising and dice patterns: seeing small groups at once. Five and ten as reference points.",s1:"The ten and the hundred as composite units. Counting large sets by grouping.",s2:"One thousand as 10 hundreds. The place value house groups digits in threes.",s3:"1000 thousands is 1 million; 1000 millions is 1 billion."}},
 {t:"Position gives value",d:"A digit’s value is its face value multiplied by the value of its place. Zero names, holds a place or shows precision.",s:{es1:"Reading numerals to 20, including zero. Telling teens from tens (13 and 30).",s1:"In 583, the 5 is 500. Zero as a place holder in 107.",s2:"The 5 in 53 is ten times the 5 in 35. Lexical and syntactic zeros. The decimal point marks the ones.",s3:"Thousandths. Trailing zeros show precision (0.2 s and 0.20 s)."}},
 {t:"Partition and rename flexibly",d:"326 is 3 hundreds, 2 tens and 6 ones, and also 32 tens and 6 ones. This is what makes calculation work.",s:{es1:"Different finger patterns for the same number.",s1:"32 as 30 and 2. 326 as 32 tens and 6 ones.",s2:"5429 as 54 hundreds and 29 ones. 0.25 as 25 hundredths.",s3:"163 480 as 150 000 + 13 480. 5.429 as 5 ones and 429 thousandths."}},
 {t:"Numbers have size and position",d:"Ordering, number lines, rounding and estimating depend on a sense of magnitude, not on digit rules.",s:{es1:"Compare and order to 20. One more and one less.",s1:"Numbers on a line; the nearest ten and hundred.",s2:"Locate 10 and 50 given 0 and 5. Order decimals on a number line.",s3:"Round to a specified place. Decimals to 3 places and integers on a number line."}},
 {t:"The system extends both ways",d:"Multiplying by ten builds places to the left; dividing by ten builds places to the right. The line extends below zero.",s:{es1:"Counting forwards and backwards; zero as a number.",s1:"The counting pattern repeats past 100 (109, 110, 111).",s2:"10, 100 and 1000 times as large. Tenths and hundredths by dividing by ten.",s3:"Thousandths; 10 or 100 times and one-tenth of decimals; negative integers."}}
];

var ASPECTS = [
 {k:"q",l:"Quantity and place value outcome",v:{es1:"<b>MAE-RWN-01</b> demonstrates an understanding of how whole numbers indicate quantity",s1:"<b>MA1-RWN-01</b> applies an understanding of place value and the role of zero to read, write and order two- and three-digit numbers",s2:"<b>MA2-RN-01</b> applies an understanding of place value and the role of zero to represent numbers to at least tens of thousands",s3:"<b>MA3-RN-01</b> applies an understanding of place value and the role of zero to represent the properties of numbers"}},
 {k:"r",l:"Representation outcome",v:{es1:"<b>MAE-RWN-02</b> reads numerals and represents whole numbers to at least 20",s1:"<b>MA1-RWN-02</b> reasons about representations of whole numbers to 1000, partitioning numbers to use and record quantity values",s2:"<b>MA2-RN-02</b> represents and compares decimals up to 2 decimal places using place value",s3:"<b>MA3-RN-02</b> compares and orders decimals up to 3 decimal places<br><br><b>MA3-RN-03</b> determines percentages of quantities, and finds equivalent fractions and decimals for benchmark percentage values"}},
 {k:"n",l:"Number range",v:{es1:"Count to 30; represent to 20",s1:"Count to 120; represent to 1000",s2:"Whole numbers to 6 digits; tenths and hundredths",s3:"Millions to 1 billion; thousandths; negative integers; benchmark percentages"}},
 {k:"u",l:"Key unit",v:{es1:"Ones; small groups seen at once (subitising)",s1:"The ten and the hundred as composite units",s2:"Thousands; tenths and hundredths",s3:"Millions and billions; thousandths; 10% as one-tenth"}},
 {k:"z",l:"Role of zero",v:{es1:"Zero as a number to read",s1:"At the end to name a number (20, 100) and inside as a place holder (107)",s2:"Lexical, syntactic and trailing zeros; a leading zero in decimals (0.2)",s3:"Trailing zeros and precision; zero as the boundary between positive and negative"}},
 {k:"m",l:"Main models",v:{es1:"Fingers, dice and domino patterns, collections",s1:"Bundles, base 10 material, number charts, numeral track to number line",s2:"Number expanders, arrow cards, place value house, clothesline decimals",s3:"Number slide, tape measures, tape diagrams, number line with integers"}}
];

var MODELS = [
 {n:"Fingers, dice and dominoes",w:"subitising and part-whole patterns",s:0,e:0,d:"NESA lists finger patterns as one of the four early representations. Recognising dice and domino patterns and different finger patterns for the same number builds the pattern structure that later supports grouping."},
 {n:"Collections of objects",w:"one-to-one counting, then grouping",s:0,e:1,d:"Counting out a set amount from a larger collection (ES1), then counting large sets by grouping in tens and hundreds (S1). Items collected on-Country are suggested in the syllabus."},
 {n:"Ten frames",w:"five and ten as reference points",s:0,e:2,d:"Used to see ten as five and five, and teens as ten and some more. NESA’s Stage 2 advice notes that ten frames and place value charts help some students move from ‘groups of ten’ to ‘tens’ (Hartnett 2018)."},
 {n:"Numeral track",w:"ordered numerals that support counting",s:0,e:1,d:"Ordered numeral cards placed side by side. It’s a counting model, not a length model, and a step towards the number line."},
 {n:"Number line",w:"length and size, then decimals and integers",s:1,e:3,hi:true,d:"Introduced once students can use length: they count the spaces, not the numerals. It carries through to locating numbers in Stage 2 (10 and 50 given 0 and 5), decimals, and integers in Stage 3."},
 {n:"Number charts to 120",w:"patterns of ten, counting past 100",s:1,e:1,d:"Show ten as 10 ones and 1 ten, one hundred as 10 tens, and patterns such as 10 more. Charts to 120 help students cross 100; some build from the bottom up."},
 {n:"Bundles and base 10 material",w:"composite units of 10, 100 and 1000",s:1,e:2,d:"Bundling sticks, base 10 blocks and interlocking cubes make grouping and regrouping visible. Use them to rename numbers (326 as 32 tens and 6 ones)."},
 {n:"Expanders and arrow cards",w:"standard and non-standard partitions",s:2,e:2,d:"Number expanders show renaming such as 5429 as 54 hundreds and 29 ones. Arrow cards stack so that in 34, the 30 is still there under the 4."},
 {n:"Place value house",w:"ones, tens, hundreds repeat in groups",s:2,e:3,d:"Shows that each group of three digits (thousands, millions, billions) contains its own hundreds, tens and ones."},
 {n:"Clothesline decimals",w:"one whole split into ten equal parts",s:2,e:2,d:"A length from 0 to 1 divided into 10 equal parts with string and pegs, labelled with decimal notation."},
 {n:"Tape measures, metric units",w:"tenths, hundredths, thousandths",s:2,e:3,d:"125 cm as 1.25 m (S2); 0.125 m as 125 mm (S3). A metre divides naturally into tenths, hundredths and thousandths."},
 {n:"Number slide",w:"digits move, the decimal point stays",s:3,e:3,d:"A fixed frame with a sliding strip of digits. It shows that multiplying or dividing by powers of ten moves the digits, not the point, and that symmetry is around the ones."},
 {n:"Tape diagrams",w:"percentages as parts of a whole",s:3,e:3,d:"A bar divided into 10 equal parts, labelled 0% to 100% on one side and the quantity on the other, so percentages build from 10%."}
];

var ROOTS = ["Digits are read as separate whole numbers","Zero is misread","Number words and numerals don’t line up","Digit rules replace a sense of size"];
var SCENARIOS = [
 {st:"s1",q:"Asked to write one hundred and ten, Mia writes 10010.",a:0,why:"Mia writes each spoken part as its own whole number (100 and 10). NESA calls this literal transcoding."},
 {st:"s2",q:"Liam reads 1001 as “one hundred and one”.",a:1,why:"Internal (syntactic) zeros are harder to interpret than lexical zeros. Naming 1200, 1020 and 1002 in turn helps."},
 {st:"es1",q:"Ava reads the numeral 13 as “thirty”.",a:2,why:"Teen names reverse the usual tens-then-ones pattern, and -teen and -ty sound alike. Contrast them explicitly."},
 {st:"s2",q:"Noah says 0.75 is larger than 0.8 “because 75 is bigger than 8”.",a:0,why:"‘Longer is larger’ treats the digits after the point as a whole number. Benchmarks and attention to the tenths digit help."},
 {st:"s3",q:"Zara says that when you multiply by 10, “the decimal point jumps one place”.",a:3,why:"A procedural description replaces the idea that digits change value. The number slide keeps the point fixed while the digits move."},
 {st:"s3",q:"Kai places 0.5 to the left of zero on a number line.",a:1,why:"Kai treats zero like a mirror, as with negative numbers, and so misreads the leading zero. Check where students place decimals that start with zero."},
 {st:"s1",q:"Ella rounds 47 to 50 “because 7 is five or more”, but can’t say which ten 47 is closer to.",a:3,why:"A digit rule is standing in for magnitude. NESA recommends identifying the nearest ten on a number line instead."},
 {st:"s3",q:"Sam completes 5.37 = 5 + 0.3 + ___ with 7.",a:0,why:"Sam treats the decimal point as a separator between whole numbers, so the 7 is read as seven rather than 7 hundredths."},
 {st:"s3",q:"Ruby says 0.07 and 0.7 are the same.",a:1,why:"Ruby ignores the zero in the tenths place and reads the 7 as tenths."},
 {st:"s3",q:"Jun, whose home language groups numbers in tens of thousands, hesitates when naming 612 000 in English.",a:2,why:"Mandarin says ‘61 wàn, 2 qiān’ (61 tens of thousands and 2 thousands). Moving between structures needs explicit practice."}
];

var PROMPTS = [
 ["Looking across the progression","Which of the six big ideas does your stage depend on most? Which earlier stage is it built on?"],
 ["Looking across the progression","How do you currently teach zero? Is it treated as a big idea or a passing detail?"],
 ["Looking across the progression","Choose one model. How could it be used consistently from one stage to the next in your school?"],
 ["Your students","Run the quick check for your stage with three students: one secure, one you’re unsure of and one who is struggling. What did you learn that you didn’t expect?"],
 ["Your students","Which root misconception do you see most often? Where in the earlier stages might it have started?"],
 ["Your students","Are any students still counting by ones where the syllabus expects composite units? What would you do next for them?"],
 ["Your practice","NESA advises against teaching rounding as ‘five or more, round up’. How do you teach rounding now, and what would you change?"],
 ["Your practice","How do you describe multiplying by 10? Do you say the decimal point moves, or that the digits move?"],
 ["Your practice","How are students’ home languages and number words recognised in your classroom?"]
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
  tags:[["Make correspondences between collections","Reasons about quantity"],["Use the term ‘is the same as’ to express equality of groups","Reasons about quantity"]],
  before:{task:"Count the dots. Write the number.<br><br>● ● ● ● ● ●&nbsp;&nbsp;&nbsp;&nbsp;____",lim:["Only one correct response and one way to get it","Doesn’t show whether the student understands that the last number counted tells how many","No talk, no reasoning"]},
  after:{task:"“Show me six in as many ways as you can: fingers, dots, counters, a numeral.”<br><br>“Which of your sixes can you see <i>without</i> counting? How do you know it’s still six?”",enable:"Start with 4 or 5, using dice patterns and fingers.",extend:"Show 16 as ten and six on a double ten frame. “Is it the same as your other way?”",listen:"“I saw 3 and 3.” “It’s the same, I just moved them.” Students who recount from one when asked “How many?”",el:["Understanding and fluency","Exploring and connecting","Communicating","Reasoning"]}
 },
 s1:{
  tags:[["Estimate, to the nearest ten, the number of objects in a collection and check by counting in groups of ten","Reasons about quantity"],["State the quantity value of digits in numbers of up to three digits","Reasons about quantity"],["Use place value to partition and rename three-digit numbers in different ways","Reasons about relations"]],
  before:{task:"Fill in the blanks.<br><br>326 = ___ hundreds ___ tens ___ ones",lim:["Can be done by copying digits into boxes, with no sense of quantity","Reinforces the idea that there is only one way to split a number","Gives no evidence of composite units"]},
  after:{task:"“Jack says 326 is 32 tens and 6 ones. Pia says it’s 3 hundreds, 2 tens and 6 ones. Who is right?”<br><br>“Prove it with base 10 material. Then find a different way to make 326.”",enable:"Start with 26 using tens and ones only: “Can 26 be 1 ten and 16 ones?”",extend:"“How many different ways can you make 326 using hundreds, tens and ones? How do you know you’ve found them all?”",listen:"Trading language: “I swapped a hundred for ten tens.” Students who argue only one answer can be right.",el:["Understanding and fluency","Exploring and connecting","Communicating","Reasoning"]}
 },
 s2:{
  tags:[["Compare and describe the relative size of numbers by positioning numbers on a number line","Reasons about quantity"],["Partition numbers of up to 4 digits in non-standard forms","Reasons about quantity"],["Recognise and describe how rearranging digits changes the size of a number","Reasons about relations"],["Represent and compare tenths as decimals using linear representations","Reasons about relations"]],
  before:{task:"Circle the larger number.<br><br>0.75&nbsp;&nbsp;&nbsp;&nbsp;0.8",lim:["A 50% chance of a correct guess","A correct answer can hide ‘shorter is larger’ thinking","No representation and no explanation"]},
  after:{task:"“Sam says 0.75 is bigger than 0.8 because 75 is bigger than 8.”<br><br>“Convince Sam he isn’t right, using a number line or a metre ruler. Then write a decimal that is between 0.75 and 0.8.”",enable:"Compare tenths only (0.7 and 0.8) on a clothesline from 0 to 1.",extend:"“Find three decimals between 0.75 and 0.8. How many could there be?”",listen:"Attention to the tenths digit; reading by place value (“7 tenths and 5 hundredths” compared with “8 tenths”); benchmarks (“0.75 is three quarters”).",el:["Understanding and fluency","Exploring and connecting","Communicating","Reasoning"]}
 },
 s3:{
  tags:[["Regroup numbers in different forms","Reasons about quantity"],["Recognise that negative whole numbers can result from subtraction","Reasons about quantity"],["Recognise that 10% is one-tenth of 100% and use this to find 10% of a quantity","Reasons about relations"]],
  before:{task:"Find 25% of $120.<br><br>Answer: $____",lim:["A single procedure with one answer","Doesn’t show whether 25% is understood as a proportion of the whole","No decision, no justification"]},
  after:{task:"“A jacket costs $120. Shop A has 25% off. Shop B has $25 off. Which is the better deal?”<br><br>“Prove it in two different ways.”",enable:"Start with 50% off $120 compared with $50 off.",extend:"“At what price would the two deals be exactly the same? How did you work it out?”",listen:"Halving and halving again; 10% as one-tenth; tape diagrams; checking whether the answer is reasonable.",el:["Exploring and connecting","Choosing and applying techniques","Communicating","Reasoning"]}
 }
};

var CLOSED = [
 {st:"s2",task:"Write 2047 in words.",moves:[
  {m:"Who is correct?",t:"“Ari reads 2047 as ‘two hundred and forty-seven’. Bella reads it as ‘two thousand and forty-seven’. Who is correct? How could you prove it?”",el:["Reasoning","Communicating"]},
  {m:"Same and different",t:"“What is the same and what is different about 2047, 2407 and 2470?”",el:["Exploring and connecting","Communicating"]},
  {m:"Always, sometimes, never",t:"“A number with a zero in it is smaller than one without a zero. Always, sometimes or never true?”",el:["Reasoning","Exploring and connecting"]},
  {m:"Open it up",t:"“Make a 4-digit number with one zero that is between 2000 and 2100. How many can you find? How do you know you have them all?”",el:["Choosing and applying techniques","Reasoning"]},
  {m:"Convince me",t:"“Is 2047 closer to 2000 or to 3000? Convince me using a number line.”",el:["Understanding and fluency","Communicating"]}
 ]},
 {st:"s1",task:"Round 47 to the nearest ten.",moves:[
  {m:"Who is correct?",t:"“Tom says 47 rounds to 40 because 4 is in the tens. Mei says 50. Who is correct? Show it on a number line.”",el:["Reasoning","Communicating"]},
  {m:"Same and different",t:"“What is the same and what is different about rounding 47, 74 and 147 to the nearest ten?”",el:["Exploring and connecting","Communicating"]},
  {m:"Always, sometimes, never",t:"“When you round to the nearest ten, the number gets bigger. Always, sometimes or never true?”",el:["Reasoning","Exploring and connecting"]},
  {m:"Open it up",t:"“A number rounds to 50 when rounded to the nearest ten. What could it be? Find all the possibilities.”",el:["Choosing and applying techniques","Reasoning"]},
  {m:"Convince me",t:"“About how many children are in our school hall right now, to the nearest ten? Convince me, then check by counting in tens.”",el:["Understanding and fluency","Choosing and applying techniques"]}
 ]},
 {st:"s3",task:"Place 0.6 on a number line from 0 to 1.",moves:[
  {m:"Who is correct?",t:"“Kai put 0.6 to the left of zero, ‘because it starts with zero’. Jess put it halfway between 0 and 1. Who is correct, and why might Kai think that?”",el:["Reasoning","Communicating"]},
  {m:"Same and different",t:"“What is the same and what is different about 0.6, −0.6 and 6?”",el:["Exploring and connecting","Communicating"]},
  {m:"Always, sometimes, never",t:"“A decimal that starts with 0 is less than 1. Always, sometimes or never true?”",el:["Reasoning","Exploring and connecting"]},
  {m:"Open it up",t:"“Choose three decimals that would be hard to place on this line. Place them, then swap with a partner to check.”",el:["Choosing and applying techniques","Communicating"]},
  {m:"Convince me",t:"“Is 0.6 closer to 0.5 or to 1? Convince me with a metre ruler.”",el:["Understanding and fluency","Communicating"]}
 ]}
];
