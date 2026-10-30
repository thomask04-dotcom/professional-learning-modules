/* ---------------- module config ---------------- */
var M = {
 key:"nsm-k6-module-v1",
 title:"Non-spatial Measure K–6",
 dlName:"non-spatial-measure-reflections.txt",
 welcomeH2:"How students learn about mass and time, K to 6",
 welcomeP:"This module follows Non-spatial measure across four stages in two strands: mass (from hefting ‘heavy’ and ‘light’ to grams, kilograms, tonnes and decimal notation) and time (from ‘before’ and ‘after’ and o’clock to 24-hour time, timetables and elapsed time). It covers how the outcomes build, the maths you need to teach it, the misconceptions to look for, and what the NESA teaching advice recommends.",
 tryText:"a model for each stage: which side of the balance goes down, how the hour hand moves, reading the clock to the minute, and elapsed time on a timeline.",
 namesH3:"One focus area, two strands",
 namesP:"Non-spatial measure has the same name in every stage, with parts A and B from Stage 1. Each stage has a mass strand and a time strand. NESA notes that although they share a substrand, teachers aren’t expected to connect the concepts of mass and time. All content also addresses the Working mathematically outcome, MAO-WM-01.",
 ideasP:"NESA explains that the units of mass and time don’t rely on a physical spatial structure. In mass, the arrangement of units doesn’t affect the total: unlike length or area, they needn’t be end to end with no gaps. Concepts of time are influenced by students’ experiences, cultural knowledge and personal judgements, and time can be understood through lunar, seasonal and Gregorian calendars, and as linear or cyclical. Six ideas run through the focus area. Select an idea to see how it develops.",
 ideasNote:"Non-spatial measure connects to Representing numbers (decimal notation to thousandths), Fractions (half, quarter and three-quarters of an hour or a kilogram), Geometric measure (quarter and half turns; reading scales) and Data (timelines and timetables).",
 progP:"Mass moves from hefting and comparing directly, to equal-arm balances with informal units, to grams and kilograms on scaled instruments, to choosing units and converting with decimals. Time moves from sequencing events and o’clock, to half and quarter hours, to reading clocks to the minute and am/pm, to 24-hour time and calculating elapsed time.",
 shifts:[
  ["es1","Early Stage 1 → Stage 1","From hefting to the equal-arm balance and uniform informal units, and recognising that mass is conserved. Time moves from days of the week and o’clock to months, half past, quarter past and quarter to, and hours, minutes and seconds."],
  ["s1","Stage 1 → Stage 2","From informal units to the kilogram and gram, read on scaled instruments. Time moves from quarter hours to reading analog clocks to the minute (Part A) and digital displays with am and pm (Part B)."],
  ["s2","Stage 2 → Stage 3","From measuring to choosing units and devices, tonnes, decimal notation and conversions. Time moves to 24-hour time, timetables and elapsed time calculated by bridging the hour."]
 ],
 modelsH2:"Each stage adds models; clocks carry time from Kindergarten to Stage 3",
 modelsP:"The bars show the stages where the syllabus or the NESA teaching advice names or uses each model. Select a model for more detail.",
 modelTips:[
  ["Choose surprising pairs.","Include objects that are large but light, small but heavy, and large but lighter than a smaller object."],
  ["Real objects, not pictures.","NESA notes that images can reinforce the idea that bigger items weigh more. Where visuals are needed, show real objects on scales."],
  ["Hour hand and minute hand.","Say ‘hour hand’ and ‘minute hand’, not ‘little hand’ and ‘big hand’, so the names describe what each hand does."],
  ["Bridge the hour on a timeline.","Jump to the next hour, then whole hours, then the remaining minutes. An unscaled timeline links to work in Data."]
 ],
 sorterP:"Most misconceptions in this focus area come from four roots, and each root reappears in a new form as students move from hefting and o’clock to tonnes and 24-hour time. Read each student response and choose its root.",
 rootRows:[
  ["Mass judged by size or appearance","Thinks the bigger object is always heavier","Thinks plasticine gets heavier when rolled into a snake","Thinks a bigger parcel must be more than 1 kg","Confuses gross mass and net mass <span class=\"pill src-add\">Add.</span>"],
  ["Time treated as base 10","—","Can’t connect :30 to half past (rather than :50)","Says 4:57 is 43 minutes to five <span class=\"pill src-add\">Add.</span>","Writes 1.5 hours as 1 hour 50 minutes"],
  ["Clock hands and notation misread","Mixes up the ‘big hand’ and ‘little hand’ <span class=\"pill src-add\">Add.</span>","Points the hour hand exactly at 3 for half past three","Reads the minute hand on the 2 as ‘2 minutes’","Converts 1800 hours to 8 pm <span class=\"pill src-add\">Add.</span>"],
  ["A moment in time confused with a duration","Uses ‘long’ and ‘short’ only for length","Has little sense of how long a minute is <span class=\"pill src-add\">Add.</span>","Answers ‘what time?’ when asked ‘how long?’ <span class=\"pill src-add\">Add.</span>","Gives the finishing time instead of the elapsed time <span class=\"pill src-add\">Add.</span>"]
 ],
 sorterNote:"NESA notes that early experiences often lead students to conclude that large things are heavier than small things, and that students often position the hour hand inaccurately while locating the minute hand correctly (Earnest et al. 2018).",
 notesTitle:"Non-spatial Measure K–6: my reflections",
 footer:"Built from the NESA <i>Mathematics K–10 Syllabus (2022)</i> outcomes and content (Early Stage 1 to Stage 3) and the NESA syllabus support teaching advice. Items marked <span class=\"pill src-add\">Additional commentary</span> are common classroom observations, not NESA examples. Your progress and notes are saved only in this browser."
};

/* ---------------- data ---------------- */
var STAGES = {
 es1:{short:"ES1", name:"Early Stage 1", years:"Kindergarten", fa:"Non-spatial measure", col:"var(--es1)", soft:"var(--es1-soft)"},
 s1:{short:"S1", name:"Stage 1", years:"Years 1–2", fa:"Non-spatial measure A and B", col:"var(--s1)", soft:"var(--s1-soft)"},
 s2:{short:"S2", name:"Stage 2", years:"Years 3–4", fa:"Non-spatial measure A and B", col:"var(--s2)", soft:"var(--s2-soft)"},
 s3:{short:"S3", name:"Stage 3", years:"Years 5–6", fa:"Non-spatial measure A and B", col:"var(--s3)", soft:"var(--s3-soft)"}
};
var ORDER = ["es1","s1","s2","s3"];

var STAGE_CONTENT = {
es1:{
 lead:"In Kindergarten, students identify objects as heavy or light and compare masses by hefting. They sequence events, name the days of the week, compare durations and read o’clock time on analog and digital clocks. NESA stresses comparing objects that challenge the idea that bigger is heavier.",
 outcomes:[["MAE-NSM-01","describes and compares the masses of objects"],["MAE-NSM-02","sequences events and reads hour time on clocks"]],
 content:[
  ["","Mass: Identify and compare mass using weight",["Identify that objects can be heavy or light","Compare two masses directly by hefting","Predict which object would be heavier than, lighter than, or about the same weight as another, and explain (Reasons about relations)"]],
  ["","Time: Compare and order the duration of events",["Use terms such as daytime, night-time, morning, afternoon, today, tomorrow, yesterday, before, after and next","Sequence events: daily events, recounts, cultural experiences, narratives","Compare the duration of two events: eating lunch and brushing teeth"]],
  ["","Time: Connect days of the week to familiar events",["Recall that there are seven days in a week","Name and order the days of the week","Relate events to a particular day or time of day: routines, class schedules, sports training"]],
  ["","Time: Tell time on the hour",["Create the layout of an analog clock: numeral cards around a hoop","Read analog and digital clocks to the hour using ‘o’clock’","Describe the positions of the hour and minute hands; the numbers on the clock represent hours"]]
 ],
 know:[
  ["Mass isn’t spatial","Early experiences lead students to conclude that large things are heavier and that objects of the same size and shape have the same mass. Objects with the same volume can have different masses."],
  ["Five kinds of objects","Compare two objects that are quite different in mass. Include objects that are light and large, heavy and large, light and small, heavy and small, and large but lighter than a smaller object."],
  ["Weight and mass","‘Weigh’ and ‘weight’ are more common in everyday use, and ‘weight’ is acceptable in Early Stage 1. Weight is a force that changes with gravity; mass stays constant. Hefting is testing weight by lifting or holding and balancing."],
  ["Many ways to feel mass","Students have different gross motor skills. Experiences can include resistance against the body, grip, or an object such as a blanket placed on the lap."],
  ["Time is personal and cultural","In Early Stage 1, time spans are personal judgements. Concepts of time can be linear or cyclical. Work with local Aboriginal communities on Aboriginal concepts of time and language; some students may use terms such as ‘long, long time ago’ or ‘old time’."],
  ["Long and short","‘Long’ and ‘short’ can confuse students who have met them only for length. They are comparatives: 5 years or 50 000 years might both be ‘a long time’."]
 ],
 misc:[
  {see:"Says the big pillow is heavier than the small tin of beans.",name:"Bigger means heavier",resp:"Heft both. Compare objects that are large but lighter than a smaller object. Try the balance tool below.",src:"n"},
  {see:"Says two boxes the same size must weigh the same.",name:"Same size, same mass",resp:"Heft an empty box and an identical box full of blocks.",src:"n"},
  {see:"Says eating lunch took “a short time” because the sandwich was short.",name:"Long and short only for length",resp:"Use ‘long’ and ‘short’ for time in context: a long time, a short time, ‘which took longer?’",src:"n"},
  {see:"Reads 3 o’clock as 12 o’clock because the ‘big hand’ points to the 12.",name:"Mixing up the hands",resp:"Name them ‘hour hand’ and ‘minute hand’. At o’clock, the hour hand tells the hour.",src:"a"},
  {see:"Puts Saturday before Friday when ordering the days.",name:"Days not yet linked to routines",resp:"Connect each day to a familiar event (sport on Tuesday, library on Thursday) and revisit the order daily.",src:"a"}
 ],
 advice:["Compare only two objects that are quite different in mass, and include large but light objects.","Offer different ways to experience mass: resistance, grip, or an object on the lap.","Introduce time through everyday contexts: wait times, timers, first-and-then boards, visual schedules, weekly routines.","Make clocks accessible: strong colour contrast between hands, braille, tactile or talking clocks.","Work with local Aboriginal communities on Aboriginal concepts of time.","Extend students who understand mass by exploring placing masses at different points on an equal-arm balance."],
 vocab:["mass","matter","heavy","heavier","heaviest","light","lighter","lightest","about the same as","hard to push","hard to pull","daytime","night-time","yesterday","today","tomorrow","before","after","next","a long time","a short time","days","week","weekdays","weekend","morning","afternoon","o’clock","clock","hour hand","minute hand"],
 check:{title:"Quick check (built from the syllabus and NESA advice)",steps:["Give a large light object and a small heavy object. Ask, <i>Which do you think is heavier? Why?</i> Then heft. Try the balance tool below.","Ask the student to order three pictures of their day and tell what happens before and after.","Ask, <i>What day is it today? What day was yesterday? What do we do on Fridays?</i>","Show 4 o’clock on an analog clock. Ask, <i>What time is it? Which hand tells you?</i>"]},
 tool:"balance",
 quiz:[
  {q:"Which pairs does NESA suggest students compare in Early Stage 1?",o:["Objects that are almost the same mass","Objects that are quite different in mass, including large but light objects","Only objects of the same size","Objects weighed in grams"],a:1,why:"Include light and large, heavy and large, light and small, heavy and small, and large but lighter than a smaller object."},
  {q:"Is ‘weight’ acceptable in Early Stage 1?",o:["No, only ‘mass’","Yes, ‘weight’ is an acceptable description for mass at this stage","Only in Stage 3","Only for liquids"],a:1,why:"‘Weigh’ and ‘weight’ are more common in everyday language."}
 ]
},
s1:{
 lead:"In Years 1 and 2, students use the equal-arm balance to compare masses and to measure with uniform informal units, and recognise that mass is conserved. They name the months, use calendars, measure duration, and read time to the half-hour and quarter-hour using ‘past’ and ‘to’.",
 outcomes:[["MA1-NSM-01","measures, records, compares and estimates the masses of objects using uniform informal units"],["MA1-NSM-02","describes, compares and orders durations of events, and reads half- and quarter-hour time"]],
 content:[
  ["A","Mass: Investigate mass using an equal-arm balance",["Place objects on either side to obtain a level balance","Compare two masses and record which is heavier or lighter","Predict the action of the balance before placing objects (Reasons about relations)","Find two collections with the same mass: blocks and counters","Order masses by hefting and check with the balance"]],
  ["A","Time: Name and order the cycle of months",["Name and order the months; recall the days in each month","Identify a day and date on a Gregorian calendar","Recognise monthly and annual cycles: Aboriginal calendars, the school year, Lunar calendars"]],
  ["A","Time: Tell time to the half-hour",["Read analog clocks to the half-hour using ‘o’clock’ and ‘half past’","Connect half turns of the minute hand to the passing of the half-hour","Explain why the hour hand is halfway between hour markers at half past (Reasons about relations)","Record hour and half-hour time, connecting analog and digital"]],
  ["B","Mass: Compare masses using an equal-arm balance",["Measure mass by counting the uniform informal units needed to balance","Select an appropriate unit and justify the choice (Reasons about relations)","Explain the relationship between the mass of a unit and the number needed: more toothpicks than pop sticks (Reasons about relations)","Compare using the same units: scissors 6 blocks, pencil 3 blocks, so scissors are 3 blocks heavier","Estimate and check; recognise that mass is conserved (plasticine moulded or divided)"]],
  ["B","Time: Describe duration using units of time",["Use a calendar to calculate months, weeks or days until an event","Measure duration with a repeated informal unit: claps while the teacher writes your name","Use the terms hour, minute and second; an hour is longer than a minute","Predict the time remaining until an event starts or finishes (Reasons about relations)"]],
  ["B","Time: Tell time to the quarter-hour",["Read quarter past and quarter to, and relate them to quarter turns","Identify which hour has just passed when the hour hand isn’t on a numeral","Record quarter-past and quarter-to time on analog and digital clocks","Associate 3, 6 and 9 with 15, 30 and 45 minutes and quarter past, half past and quarter to"]]
 ],
 know:[
  ["Key understandings of measurement","Repeatedly using a unit; selecting an appropriate unit; needing a common unit to compare; and realising some informal units (such as pebbles) are unsatisfactory because they aren’t uniform."],
  ["Conservation of mass","When students realise that changing the shape of an object doesn’t change its mass, they are said to conserve mass."],
  ["Two uses of the balance","The equal-arm balance compares the masses of two objects, and measures mass using multiple identical units. It is a pivoted beam with equal-length arms and a pan on each arm."],
  ["Analog shows the base of 60","Analog clocks represent the 60-minute hour more effectively than digital. Half past as halfway around is more transparent than :30, which relies on knowing :30 means half an hour (not :50)."],
  ["Quarter hours are hard","Quarter past as 15 minutes or a quarter turn, and quarter to as 45 minutes or three-quarters around, is much more challenging than half past. It needs extensive modelling and practice. There is always more than one way to express a time."],
  ["A sense of duration","Students need a sense of one hour, one minute and one second, built through practical experiences rather than recalling that there are 60 minutes in an hour."]
 ],
 misc:[
  {see:"Says the plasticine is heavier after it is rolled into a long snake.",name:"Mass not conserved",resp:"Balance the ball against blocks, reshape it and balance again. This is a Stage 1 B content point.",src:"n"},
  {see:"Points the hour hand exactly at the 3 for half past three.",name:"The hour hand doesn’t move",resp:"Move the minute hand slowly around and watch the hour hand. At half past, it is halfway to the next hour. Try the clock tool below.",src:"n"},
  {see:"Says the pencil is heavier because it balanced 8 toothpicks but the scissors balanced 6 blocks.",name:"Comparing with different units",resp:"Use the same unit to compare. More toothpicks than blocks are needed because each toothpick is lighter.",src:"n"},
  {see:"Uses pebbles of different sizes as units and gets a different answer each time.",name:"Units that aren’t uniform",resp:"Discuss why the units must be identical. NESA names pebbles as unsatisfactory units.",src:"n"},
  {see:"At 3:45, says it is “quarter to three”.",name:"Naming the hour for ‘to’ times",resp:"Ask which hour is coming next. ‘To’ times name the next hour.",src:"a"},
  {see:"Calls the hands the “big hand” and the “little hand”.",name:"Names that don’t describe the job",resp:"Use ‘hour hand’ and ‘minute hand’ to promote understanding of their functions.",src:"n"}
 ],
 advice:["Allow time to process instructions and feel mass; offer grip or resistance comparisons for students with different gross motor skills.","Use the equal-arm balance both to compare and to measure with identical units.","Use ‘hour hand’ and ‘minute hand’ rather than ‘little hand’ and ‘big hand’.","Build a sense of one hour, one minute and one second through practical experiences.","Give extensive modelling and practice with quarter past and quarter to.","Connect analog clocks to cycles: weekly, monthly, annual, seasonal or lunar."],
 vocab:["measure","estimate","about the same as","level balance","equal-arm balance","mass","heavier","lighter","balance","calendar","days","date","month","year","clock","analog","digital","hour hand","minute hand","o’clock","half past","quarter past","quarter to","hour","minute","second","numeral"],
 check:{title:"Quick checks (built from the syllabus examples)",steps:["Roll a ball of plasticine into a snake. Ask, <i>Is it heavier, lighter or the same? How could we check?</i>","Ask, <i>Would you need more toothpicks or more pop sticks to balance this book? Why?</i>","Ask the student to show half past three on a clock. Watch where they put the hour hand. Try the clock tool below.","Show quarter to four. Ask, <i>What time is it? Which hour has just passed?</i>"]},
 tool:"clock",
 quiz:[
  {q:"Why does NESA suggest analog clocks for learning the half-hour?",o:["They are more common","They represent the 60-minute base of an hour more transparently","They are easier to read","Digital clocks are inaccurate"],a:1,why:"Halfway around the clock face shows half an hour; :30 relies on knowing it means half an hour."},
  {q:"What does it mean to conserve mass?",o:["To keep objects safe","To realise that changing an object’s shape doesn’t change its mass","To use the same unit","To weigh carefully"],a:1,why:"For example, plasticine has the same mass whatever shape it is moulded into."},
  {q:"Why should teachers say ‘hour hand’ and ‘minute hand’?",o:["They are shorter words","The names describe each hand’s function","Big and little are inaccurate on all clocks","It is required for assessment"],a:1,why:"NESA recommends these terms to promote understanding of their respective functions."}
 ]
},
s2:{
 lead:"In Years 3 and 4, students use kilograms and grams, read scaled instruments, and interpret fractions of a kilogram. Time is split by instrument: analog clocks to the minute in Part A, and digital displays, seconds and am/pm notation in Part B.",
 outcomes:[["MA2-NSM-01","estimates, measures and compares the masses of objects using kilograms and grams"],["MA2-NSM-02","represents and interprets analog and digital time in hours, minutes and seconds"]],
 content:[
  ["A","Mass: Compare objects using the kilogram",["Recognise the need for a formal unit","Identify familiar objects of about 1 kg: a pack of flour; a litre of milk","Record using kg","Find objects more than, less than and about 1 kg, and check against a 1 kg mass"]],
  ["A","Time: Represent and read analog time",["Use minutes for duration: recess is about 20 minutes","Identify 30 minutes as a half-hour, 60 minutes as an hour, and the quarter-hour as 15 minutes","Recognise that a numeral on the clock often represents 2 values: the 2 can mean 2 hours or 10 minutes","Use 5-minute intervals as benchmarks: 4:19 is about twenty past four","Read time as past the hour to half past, then towards the hour: ten past seven, five to seven","Read analog clocks to the minute"]],
  ["B","Mass: Use scaled instruments",["Recognise the need for a unit smaller than the kilogram","Relate 1000 grams to one kilogram with a scaled instrument","Identify objects measured in grams: an egg is about 60 g","Measure and record in g; compare in kg and g using scales","Interpret ½, ¼ and ¾ of a kilogram in grams","Record masses as kilograms and grams: 1 kg 200 grams"]],
  ["B","Time: Represent and interpret digital time displays",["Identify durations in seconds: the 3-second rule; running 100 metres","Read or set digital devices to the minute or second; 60 seconds in a minute","Recognise that the hour is read first: 7:35 is seven thirty-five; 4:00 is four o’clock, not four, zero, zero","Find the time to the next hour: 4:57 is 3 minutes to five"]],
  ["B","Time: Use am and pm notation",["Record times with colon notation and am or pm: 9:15 am","Relate midday or noon and midnight to am and pm: 3:15 pm is after midday","Relate analog and digital notation: 20 to 9 in the morning is 8:40 am"]]
 ],
 know:[
  ["Formal units","Formal units allow easier and more accurate communication. Students develop a sense of the size of a kilogram and a gram and use them to estimate and measure."],
  ["Real objects, not images","Using images to compare masses can reinforce the belief that bigger items weigh more. Where visuals are needed, use images of real objects on scales, so the size and the recorded mass are both clear."],
  ["Analog first, then digital","Stage 2 separates time by instrument: analog in Part A, digital in Part B. Relative language (half past 11, ten to nine) differs from precise language (2:30, four forty-five), so students develop each before using them interchangeably."],
  ["Watch the hour hand","When showing half an hour on a clock face, attend to the hour hand as well as the minute hand. Students often position the hour hand inaccurately while locating the minute hand correctly (Earnest et al. 2018). Learning about equal intervals on lengths first helps (Earnest and Chandler 2021)."],
  ["Noon, midnight and :00","Use ‘12 noon’ or ‘12 midday’ and ‘12 midnight’ rather than 12:00 pm and 12:00 am. The double zero for exact hours is confusing and needs explicit teaching."],
  ["Time and culture","Some Aboriginal and Torres Strait Islander students may need support code switching between Eastern Standard Time and cultural ways of understanding time, such as lunar cycles or tides."]
 ],
 misc:[
  {see:"Reads a clock with the minute hand on the 2 and the hour hand past the 7 as “7:02”.",name:"Numerals read as minutes",resp:"Each numeral on the clock represents 2 values. Count the 5-minute intervals: the 2 means 10 minutes. Try the tool below.",src:"n"},
  {see:"Reads 6:40 on an analog clock as “twenty to six”.",name:"Naming the wrong hour for ‘to’ times",resp:"The hour hand is past the 6, nearly at 7. ‘To’ times name the hour that is coming next: twenty to seven.",src:"a"},
  {see:"Says the bigger box must be more than a kilogram without hefting it.",name:"Bigger means heavier",resp:"Compare it with a 1 kg mass. Use real objects; images can reinforce this misconception.",src:"n"},
  {see:"Reads 4:00 as “four, zero, zero”.",name:"Reading the double zero",resp:"Explicitly teach that 4:00 is four o’clock, and that the hour is read first.",src:"n"},
  {see:"Writes 1 kg 200 g as 1.200 kg but reads it as “1 kg 2 g”.",name:"Kilograms and grams not related",resp:"Use a scaled instrument to relate 1000 grams to 1 kilogram before introducing decimal notation (Stage 3).",src:"a"},
  {see:"Thinks 12:00 pm means midnight.",name:"Noon and midnight",resp:"Use ‘12 noon’ and ‘12 midnight’ rather than am or pm forms, as NESA advises.",src:"n"}
 ],
 advice:["Teach mass with physical objects; where visuals are needed, show real objects on scales.","Separate analog (Part A) and digital (Part B) language before using them interchangeably.","Attend to the hour hand as well as the minute hand when showing half an hour.","Use ‘12 noon’ and ‘12 midnight’ rather than 12:00 pm and 12:00 am.","Discuss other meanings of ‘scale’ and ‘scales’: fish scales, map scales, musical scales.","Show watch faces with separate scales for hours and minutes to address the numerals’ two values."],
 vocab:["mass","more than","less than","about the same as","pan balance","level balance","measure","estimate","kilogram","gram","scales","time","clock","analog","digital","hour hand","minute hand","second hand","revolution","numeral","hour","minute","second","o’clock","minutes past","minutes to","am","pm","midday","noon","midnight"],
 check:{title:"Quick checks (built from the syllabus examples and NESA advice)",steps:["Show an analog clock at ten to two. Ask, <i>What does the 2 tell you? What does the hand pointing near the 2 tell you?</i> Try the tool below.","Show 4:19. Ask, <i>About what time is it?</i> (about twenty past four)","Ask, <i>How many grams in half a kilogram? A quarter of a kilogram?</i>","Show 4:57 on a digital clock. Ask, <i>How long until five o’clock?</i>"]},
 tool:"readclock",
 quiz:[
  {q:"Why does Stage 2 separate analog time (Part A) from digital time (Part B)?",o:["Digital clocks are harder","So students develop the very different language of each instrument before using them interchangeably","Analog clocks are no longer used","To match the Data strand"],a:1,why:"Relative language (ten to nine) and precise language (8:50) are very different."},
  {q:"What error do students often make when showing half an hour on a clock face?",o:["Placing the minute hand on the 3","Positioning the hour hand inaccurately while placing the minute hand correctly","Using a digital clock","Counting by tens"],a:1,why:"Earnest et al. (2018) found students often position the hour hand inaccurately."},
  {q:"How should midday be expressed?",o:["12:00 am","12:00 pm","‘12 noon’ or ‘12 midday’","00:00"],a:2,why:"NESA advises ‘12 noon’, ‘12 midday’ and ‘12 midnight’ rather than am or pm forms."}
 ]
},
s3:{
 lead:"In Years 5 and 6, students choose units and devices for mass, use tonnes, record masses in decimal notation and convert between units. They convert between 12- and 24-hour time, read timetables, and calculate elapsed time by bridging to the hour.",
 outcomes:[["MA3-NSM-01","selects and uses the appropriate unit and device to measure the masses of objects"],["MA3-NSM-02","measures and compares duration, using 12- and 24-hour time and am and pm notation"]],
 content:[
  ["A","Mass: Choose appropriate units",["Identify the appropriate unit and device: electronic scales for a school bag (kg); kitchen scales for ingredients (g)","Recognise situations measured in tonnes: trucks at a weighing station"]],
  ["A","Mass: Connect decimal representations to the metric system",["3 kg 250 g is the same as 3.25 kg","2.08 kg is 2 kilograms and 80 grams","Record mass in decimal notation to 3 decimal places: 0.875 kg"]],
  ["A","Time: Compare 12- and 24-hour time",["Recognise that 24-hour time avoids confusion between am and pm","Read 24-hour time: 1800 hours is eighteen-hundred hours; 0630 is zero six thirty hours","Convert: 11:30 pm is 2330 hours","Read and use real timetables in 12- and 24-hour time"]],
  ["B","Mass: Convert between units",["Convert between kilograms and grams, and kilograms and tonnes: 1250 g = 1.25 kg; 4.32 t = 4320 kg","Solve problems with different units: the total of 50 g, 750 g and 2.5 kg"]],
  ["B","Time: Solve problems involving duration",["Use start and finish times to calculate elapsed time","Add and subtract time mentally by bridging: from 2:45 to 3:00 is 15 minutes, to 5:00 is 2 hours, so 2 hours 15 minutes","Round time calculations to the nearest minute or hour","Represent intervals as decimals: 2¼ hours is 2.25 hours; 1.5 hours is 1 hour 30 minutes, not 1 hour 50 minutes","Solve duration problems in 12- and 24-hour notation"]]
 ],
 know:[
  ["Mass and weight","In everyday use, weight is a synonym for mass; in science, weight is a force. Goods in Australia are sold by mass in grams and kilograms, so K–6 focuses on metric units of mass."],
  ["Gross and net mass","Gross mass is the mass of the contents and the container. Net mass is the mass of the contents only."],
  ["Units of 1000","Converting between grams, kilograms and tonnes relies on working with units of 1000, connecting to decimal place value to thousandths."],
  ["Time regroups in 60s","Regrouping units of time is like partitioning and combining numbers, except the unit is 60 rather than 10 or 100. So 1.5 hours is 1 hour 30 minutes."],
  ["Unscaled timelines","Record elapsed time by jumping to the next hour, then whole hours, then the remaining minutes: 8:40 am to 11:05 am is 20 min + 2 h + 5 min. The timeline is unscaled and links to Data."],
  ["24-hour time","24-hour time avoids am/pm confusion. It can be written without a colon (1545) or with one (15:45). Some students may need support code switching between cultural knowledges of time and Australian Eastern Standard Time."]
 ],
 misc:[
  {see:"Writes 1.5 hours as 1 hour 50 minutes.",name:"Time treated as base 10",resp:"An hour is 60 minutes, so 0.5 hours is 30 minutes. The syllabus uses this exact example.",src:"n"},
  {see:"Subtracts 2:45 from 5:00 as 5.00 − 2.45 = 2.55.",name:"Subtracting times like decimals",resp:"Bridge to the hour: 2:45 to 3:00 is 15 minutes, then 3:00 to 5:00 is 2 hours. Try the timeline tool below.",src:"n"},
  {see:"Converts 1800 hours to 8 pm.",name:"Subtracting 10 instead of 12",resp:"Afternoon 24-hour times are 12 more than pm times: 18 − 12 = 6, so 6 pm.",src:"a"},
  {see:"Writes 2.08 kg as 2 kg 8 g.",name:"Decimal places in metric units",resp:"1 kg = 1000 g, so 0.08 kg is 80 g. Use a place value chart to thousandths.",src:"n"},
  {see:"Gives “11:05” when asked how long from 8:40 to 11:05.",name:"Finishing time given for duration",resp:"Distinguish a moment in time from an amount of time. Show the jumps on a timeline and add them.",src:"a"},
  {see:"Weighs a full lunchbox and says the food has a mass of 650 g.",name:"Gross mass for net mass",resp:"Weigh the empty container too. Net mass is the contents only.",src:"n"}
 ],
 advice:["Use local industries and businesses for tonnes: weighbridges, cranes, hoists.","Connect conversions between g, kg and t to place value and units of 1000.","Use unscaled timelines to record elapsed time, with different levels of scaffolding.","Compare regrouping time (units of 60) with regrouping numbers (units of 10 or 100).","Read and use real timetables in 12- and 24-hour time.","Support students in code switching between cultural knowledges of time and Australian Eastern Standard Time."],
 vocab:["gram","kilogram","tonne","mass","gross mass","net mass","measure","scales","12-hour time","24-hour time","am","pm","daylight saving","local time","hour","minute","second","timeline","timetable","elapsed time","duration"],
 check:{title:"Quick checks (built from the syllabus examples and NESA advice)",steps:["Ask, <i>School starts at 8:40 am and morning tea is at 11:05 am. How long is it between them?</i> Watch for bridging to the hour. Try the timeline tool below.","Ask, <i>Is 1.5 hours the same as 1 hour 50 minutes? Explain.</i>","Ask, <i>Write 11:30 pm in 24-hour time. Read 0630 aloud.</i>","Ask, <i>What is the total mass of items of 50 g, 750 g and 2.5 kg?</i>"]},
 tool:"elapsed",
 quiz:[
  {q:"What is 1.5 hours?",o:["1 hour 50 minutes","1 hour 30 minutes","1 hour 15 minutes","150 minutes"],a:1,why:"Time regroups in 60s: 0.5 hours is half of 60 minutes."},
  {q:"How does NESA suggest recording elapsed time from 8:40 am to 11:05 am?",o:["Subtract 8.40 from 11.05","An unscaled timeline: 20 minutes to 9:00, 2 hours to 11:00, then 5 minutes","Count every minute","Use a calendar"],a:1,why:"Bridging to the hour avoids treating time as base 10."},
  {q:"What is net mass?",o:["The mass of the container and contents","The mass of the contents only","The mass in tonnes","The estimated mass"],a:1,why:"Gross mass includes the container; net mass is the contents only."}
 ]
}
};

var IDEAS = [
 {t:"Mass isn’t decided by size",d:"Objects with the same volume can have different masses; shape doesn’t change mass.",s:{es1:"Large but light; small but heavy.",s1:"Conservation: plasticine moulded or divided.",s2:"Real objects on scales, not pictures.",s3:"Gross and net mass."}},
 {t:"Measuring mass needs a unit",d:"From hefting, to identical informal units, to grams, kilograms and tonnes.",s:{es1:"Hefting and comparing directly.",s1:"Uniform informal units on an equal-arm balance.",s2:"Kilograms and grams on scaled instruments.",s3:"Choosing units and devices; tonnes."}},
 {t:"Metric mass uses units of 1000",d:"1000 g = 1 kg; 1000 kg = 1 t; decimals record mixed units.",s:{es1:"Heavy, heavier, heaviest.",s1:"More toothpicks than pop sticks.",s2:"½, ¼ and ¾ kg in grams; 1 kg 200 g.",s3:"3.25 kg; 4.32 t = 4320 kg."}},
 {t:"Time is sequence and duration",d:"Moments in time differ from amounts of time.",s:{es1:"Before, after, next; comparing durations.",s1:"Calendars; hours, minutes and seconds; informal units of duration.",s2:"Minutes and seconds to describe duration.",s3:"Elapsed time from start and finish times."}},
 {t:"Clocks show turns and a base of 60",d:"The minute hand turns once each hour; the hour hand moves between numerals.",s:{es1:"O’clock; numbers represent hours.",s1:"Half and quarter turns; the hour hand between numerals.",s2:"Each numeral has 2 values; reading to the minute.",s3:"Regrouping time in 60s; decimal hours."}},
 {t:"Time has many representations",d:"Analog, digital, am/pm, 24-hour and cultural ways of understanding time.",s:{es1:"Days of the week; cultural time.",s1:"Months; Aboriginal and Lunar calendars; analog and digital.",s2:"Digital displays; am and pm; noon and midnight.",s3:"24-hour time; timetables."}}
];

var ASPECTS = [
 {k:"o",l:"Outcomes",v:{es1:"<b>MAE-NSM-01</b> describes and compares the masses of objects<br><b>MAE-NSM-02</b> sequences events and reads hour time on clocks",s1:"<b>MA1-NSM-01</b> measures, records, compares and estimates masses using uniform informal units<br><b>MA1-NSM-02</b> describes, compares and orders durations, and reads half- and quarter-hour time",s2:"<b>MA2-NSM-01</b> estimates, measures and compares masses using kg and g<br><b>MA2-NSM-02</b> represents and interprets analog and digital time in hours, minutes and seconds",s3:"<b>MA3-NSM-01</b> selects and uses the appropriate unit and device to measure mass<br><b>MA3-NSM-02</b> measures and compares duration, using 12- and 24-hour time and am and pm"}},
 {k:"m",l:"Mass",v:{es1:"Hefting; heavy and light",s1:"Equal-arm balance; uniform informal units; conservation",s2:"kg and g; scaled instruments; fractions of a kg",s3:"Choosing units and devices; tonnes; decimals; conversions"}},
 {k:"t",l:"Telling time",v:{es1:"O’clock, analog and digital",s1:"Half past, quarter past, quarter to",s2:"To the minute; digital; am and pm",s3:"24-hour time; timetables"}},
 {k:"d",l:"Duration",v:{es1:"Comparing two events; days of the week",s1:"Months; calendars; informal units; hours, minutes, seconds",s2:"Minutes and seconds; time to the next hour",s3:"Elapsed time; bridging; decimal hours"}},
 {k:"l",l:"Language",v:{es1:"heavy, light, before, after, long time, short time, o’clock",s1:"equal-arm balance, hour hand, minute hand, half past, quarter to",s2:"kilogram, gram, scales; relative and precise time; noon, midnight",s3:"tonne, gross and net mass; 24-hour time; timeline, timetable"}}
];

var MODELS = [
 {n:"Hefting with hands and body",w:"grip, resistance, objects on the lap",s:0,e:1,d:"Comparing masses by lifting, holding one object in each hand, or feeling resistance, with adjustments for different gross motor skills."},
 {n:"Equal-arm balance",w:"comparing and measuring",s:0,e:2,hi:true,d:"Extending Early Stage 1 students; comparing and measuring with identical units in Stage 1; checking against a 1 kg mass in Stage 2."},
 {n:"Plasticine",w:"conservation of mass",s:1,e:1,d:"Moulding or dividing a lump shows that mass stays the same."},
 {n:"Scaled instruments",w:"kitchen and electronic scales",s:2,e:3,d:"Relating 1000 g to 1 kg; choosing devices for different objects."},
 {n:"Benchmark objects",w:"flour, milk, eggs",s:2,e:3,d:"A pack of flour or a litre of milk is about 1 kg; an egg is about 60 g; trucks at a weighbridge for tonnes."},
 {n:"Visual schedules and timers",w:"first-and-then boards",s:0,e:1,d:"Building a sense of sequence and duration through routines."},
 {n:"Calendars",w:"Gregorian, Aboriginal, Lunar",s:0,e:1,d:"Days of the week; months; cycles; counting days until an event."},
 {n:"Analog clocks",w:"from a hoop to reading to the minute",s:0,e:3,hi:true,d:"Numeral cards around a hoop; o’clock; half and quarter turns; reading to the minute; relating analog and digital."},
 {n:"Digital displays",w:"clocks, timers, devices",s:0,e:3,d:"O’clock in Early Stage 1; reading the hour first and seconds in Stage 2; 24-hour time in Stage 3."},
 {n:"Watch faces with two scales",w:"separate hours and minutes",s:2,e:2,d:"Address the confusion of one set of numerals representing both hours and minutes."},
 {n:"Unscaled timelines",w:"bridging to the hour",s:3,e:3,d:"Recording elapsed time in jumps; a link to Data."},
 {n:"Timetables",w:"real-life, 12- and 24-hour",s:3,e:3,d:"Reading and interpreting transport and event timetables."}
];

var ROOTS = ["Mass judged by size or appearance","Time treated as base 10","Clock hands and notation misread","A moment in time confused with a duration"];
var SCENARIOS = [
 {st:"es1",q:"Ava says the big beach ball is heavier than the small rock.",a:0,why:"Ava judges mass by size. Heft both."},
 {st:"es1",q:"Leo says lunch took “a short time” because his sandwich was short.",a:3,why:"Leo uses ‘short’ only for length. Use ‘long’ and ‘short’ for time in context."},
 {st:"s1",q:"Mia says the plasticine snake is heavier than the ball it was rolled from.",a:0,why:"Mia doesn’t yet conserve mass. Balance it before and after."},
 {st:"s1",q:"Tom shows half past three with the hour hand pointing exactly at the 3.",a:2,why:"At half past, the hour hand is halfway between the 3 and the 4."},
 {st:"s1",q:"Grace thinks :30 and :50 both mean half past.",a:1,why:"Grace hasn’t linked half an hour to 30 of 60 minutes. Use the analog clock face."},
 {st:"s2",q:"Ben reads the minute hand on the 2 as “2 minutes past”.",a:2,why:"Each numeral has two values. The 2 means 10 minutes for the minute hand."},
 {st:"s2",q:"Ella says 4:57 is 43 minutes to five.",a:1,why:"Ella subtracts from 100 rather than 60. 4:57 is 3 minutes to five."},
 {st:"s2",q:"When asked how long recess lasts, Josh answers “11 o’clock”.",a:3,why:"Josh gives a moment in time, not a duration."},
 {st:"s3",q:"Kai writes 1.5 hours as 1 hour 50 minutes.",a:1,why:"0.5 hours is 30 minutes. Time regroups in 60s."},
 {st:"s3",q:"Ruby converts 1800 hours to 8 pm.",a:2,why:"Subtract 12, not 10: 1800 hours is 6 pm."},
 {st:"s3",q:"Jai is asked how long from 8:40 to 11:05 and answers 11:05.",a:3,why:"Jai gives the finishing time instead of the elapsed time."},
 {st:"s3",q:"Lily says the bigger parcel must be heavier, so it costs more to post.",a:0,why:"Mass isn’t decided by size. Weigh both."}
];

var PROMPTS = [
 ["Looking across the progression","Which of the six big ideas does your stage depend on most? Which earlier stage is it built on?"],
 ["Looking across the progression","Where do students learn that time regroups in 60s? How could this be made explicit from Stage 1 to Stage 3?"],
 ["Looking across the progression","How do your students experience mass physically? How often are pictures used instead of real objects?"],
 ["Your students","Run the quick check for your stage with three students: one secure, one you’re unsure of and one who is struggling. What did you learn that you didn’t expect?"],
 ["Your students","Which root misconception do you see most often? Where in the earlier stages might it have started?"],
 ["Your students","How might your students’ cultural understandings of time shape how they think about duration and sequence?"],
 ["Your practice","Do you consistently say ‘hour hand’ and ‘minute hand’? Do your students?"],
 ["Your practice","How do you use analog clocks to show half and quarter turns, and to show the hour hand moving between numerals?"],
 ["Your practice","How could you work with your local Aboriginal community on Aboriginal concepts of time?"]
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
  tags:[["Predict which object would be heavier than, lighter than, or have about the same weight as another object and explain reasons for this prediction","Reasons about relations"]],
  before:{task:"Circle the heavier one.<br><br>(a picture of an elephant and a mouse)",lim:["Size and mass agree, so it confirms ‘bigger is heavier’","A picture, not real objects","No predicting, hefting or explaining"]},
  after:{task:"“Here is a big box and a small tin. Which do you think is heavier? Why?” Students predict, heft and explain. Then, “Find something bigger than the tin that is lighter.”",enable:"Start with two objects that are very different in mass.",extend:"“Find two things that feel about the same. How could we check?”",listen:"‘It’s bigger but it’s lighter’; ‘I felt it pull my hand down’; heavier, lighter, about the same.",el:["Exploring and connecting","Choosing and applying techniques","Communicating","Reasoning"]}
 },
 s1:{
  tags:[["Predict the action of an equal-arm balance before placing particular objects in each pan","Reasons about relations"],["Explain why the hour hand on a clock is halfway between successive hour-markers when the minute hand shows the half-hour","Reasons about relations"],["Select an appropriate uniform informal unit to measure the mass of an object and justify the choice","Reasons about relations"],["Explain the relationship between the mass of a unit and the number of units needed","Reasons about relations"],["Make predictions about the time remaining until a particular event starts or finishes","Reasons about relations"]],
  before:{task:"Draw the hands to show half past 3.<br><br>(a blank clock face)",lim:["The hour hand’s position isn’t discussed","One answer","No reasoning about turns"]},
  after:{task:"“Show 3 o’clock, then move the minute hand slowly to half past 3. What happens to the hour hand? Why?”",enable:"Use a geared clock so the hands move together.",extend:"“Where will the hour hand be at quarter past 3? At quarter to 4?”",listen:"‘The hour hand moves too’; ‘halfway between 3 and 4 because it’s half an hour’; half turn, quarter turn.",el:["Exploring and connecting","Communicating","Reasoning"]}
 },
 s2:{
  tagsLead:"Every content point addresses MAO-WM-01. In Stage 2, the syllabus doesn’t tag any Non-spatial measure points as reasoning, so the makeover below builds reasoning into a typical task:",
  tags:[],
  before:{task:"What time is it?<br><br>(an analog clock showing 7:10)",lim:["One clock, one answer","No attention to the two values of the numeral","No comparison of representations"]},
  after:{task:"“The minute hand points to the 2. Sam says it’s 2 minutes past. Lee says it’s 10 minutes past. Who is correct? How many different ways can you say and write this time?”",enable:"Mark the 5-minute intervals on the outside of the clock face.",extend:"“Find a time where the hour hand and minute hand point to the same numeral. Is there more than one?”",listen:"‘Each numeral means two things’; counting by fives; ten past seven, 7:10, seven ten.",el:["Understanding and fluency","Exploring and connecting","Communicating","Reasoning"]}
 },
 s3:{
  tagsLead:"Every content point addresses MAO-WM-01. In Stage 3, the syllabus doesn’t tag any Non-spatial measure points as reasoning, so the makeover below builds reasoning into a typical task:",
  tags:[],
  before:{task:"How long is it from 2:45 pm to 5:00 pm?",lim:["Invites subtracting like decimals (5.00 − 2.45)","One method","No representation"]},
  after:{task:"“Jo says 2:45 pm to 5:00 pm is 2 hours 55 minutes. Show on a timeline whether Jo is correct. Then plan a 2 hour 15 minute excursion using a real bus timetable in 24-hour time.”",enable:"Provide an unscaled timeline with the hours marked.",extend:"“Write the duration in decimal hours. Why isn’t it 2.15 hours?”",listen:"Bridging to the hour; ‘60 minutes, not 100’; 2.25 hours; converting 1445 to 2:45 pm.",el:["Choosing and applying techniques","Communicating","Reasoning","Exploring and connecting"]}
 }
};

var CLOSED = [
 {st:"s1",task:"What time is it? (a clock showing half past 3)",moves:[
  {m:"Who is correct?",t:"“Ali drew half past 3 with the hour hand on the 3. Bea drew it halfway between the 3 and 4. Who is correct? Why?”",el:["Reasoning","Communicating"]},
  {m:"Same and different",t:"“What is the same and what is different about half past 3 and 3:30?”",el:["Exploring and connecting","Communicating"]},
  {m:"Always, sometimes, never",t:"“At half past, the hour hand points to a numeral. Always, sometimes or never true?”",el:["Reasoning","Exploring and connecting"]},
  {m:"Open it up",t:"“Show a time where the minute hand has made a half turn since 3 o’clock. What other times can you show with quarter turns?”",el:["Choosing and applying techniques","Reasoning"]},
  {m:"Convince me",t:"“Convince me that quarter to 4 is 45 minutes after 3 o’clock.”",el:["Understanding and fluency","Communicating"]}
 ]},
 {st:"s2",task:"How many grams in 1 kilogram?",moves:[
  {m:"Who is correct?",t:"“Kai says the bigger parcel must be heavier. Mia says you need to weigh them. Who is correct?”",el:["Reasoning","Communicating"]},
  {m:"Same and different",t:"“What is the same and what is different about 1 kg 250 g, 1250 g and 1¼ kg?”",el:["Exploring and connecting","Communicating"]},
  {m:"Always, sometimes, never",t:"“A bigger object is heavier than a smaller object. Always, sometimes or never true?”",el:["Reasoning","Exploring and connecting"]},
  {m:"Open it up",t:"“Find three objects in the classroom that together have a mass of about 1 kg.”",el:["Choosing and applying techniques","Reasoning"]},
  {m:"Convince me",t:"“Convince me that half a kilogram and two quarter kilograms are the same mass.”",el:["Understanding and fluency","Communicating"]}
 ]},
 {st:"s3",task:"Convert 11:30 pm to 24-hour time.",moves:[
  {m:"Who is correct?",t:"“Jo says 1.5 hours is 1 hour 50 minutes. Sam says it’s 1 hour 30 minutes. Who is correct? Explain.”",el:["Reasoning","Communicating"]},
  {m:"Same and different",t:"“What is the same and what is different about 6:30 am, 0630 and 1830?”",el:["Exploring and connecting","Communicating"]},
  {m:"Always, sometimes, never",t:"“To convert pm times to 24-hour time, add 12 to the hour. Always, sometimes or never true?”",el:["Reasoning","Exploring and connecting"]},
  {m:"Open it up",t:"“Find two events on this timetable that are 2 hours 15 minutes apart.”",el:["Choosing and applying techniques","Reasoning"]},
  {m:"Convince me",t:"“Convince me that 8:40 am to 11:05 am is 2 hours 25 minutes.”",el:["Understanding and fluency","Communicating"]}
 ]}
];
