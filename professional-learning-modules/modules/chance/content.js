/* ---------------- module config ---------------- */
var M = {
 key:"chance-k6-module-v1",
 title:"Chance K–6",
 dlName:"chance-reflections.txt",
 welcomeH2:"How students learn about chance and probability, K to 6",
 welcomeP:"This module follows Chance from its foundations in Early Stage 1 Data to Stage 3: from discussing what could happen, to describing events as likely or unlikely, to listing outcomes and comparing predictions with results, to probabilities as fractions, expected and observed frequencies, and randomness. It covers how the outcomes build, the maths you need to teach it, the misconceptions to look for, and what the NESA teaching advice recommends.",
 tryText:"a model for each stage: will it, might it or won’t it, unlikely isn’t impossible, predicted and actual spins, and how results settle down with more trials.",
 namesH3:"No Early Stage 1 outcomes, then one focus area",
 namesP:"There are no Chance outcomes in Early Stage 1. The language of chance is introduced there through Data, by discussing possible outcomes of data collection. From Stage 1, Chance has parts A and B. All content also addresses the Working mathematically outcome, MAO-WM-01.",
 ideasP:"NESA explains that a chance event happens without a clear cause, and that randomness is difficult to grasp, even for adults: we tend to see patterns in data where none exist. Comparing probabilities relies on, and can support, proportional reasoning. Probabilistic reasoning connects proportional thinking with the idea of randomness. Six ideas run through the focus area. Select an idea to see how it develops.",
 ideasNote:"Chance connects to Data (collecting and displaying results of experiments), Fractions and Representing numbers (probabilities as fractions, decimals and percentages on a number line from 0 to 1) and Multiplicative relations (listing combinations such as 3 T-shirts × 2 pairs of shorts).",
 progP:"Students move from discussing what could happen, to describing events as possible, likely or unlikely, to listing equally likely outcomes and comparing predictions with results, to assigning probabilities as fractions and comparing expected and observed frequencies over small and large numbers of trials.",
 shifts:[
  ["es1","Early Stage 1 → Stage 1","From discussing possible responses in Data (‘Could it be …?’) to describing everyday events with ‘will happen’, ‘might happen’ and ‘won’t happen’, then as likely, unlikely, possible, and more or less likely."],
  ["s1","Stage 1 → Stage 2","From describing everyday events to chance experiments: listing equally likely outcomes and combinations, predicting results, and comparing predictions with actual results. Students consider whether one event affects another."],
  ["s2","Stage 2 → Stage 3","From describing likelihood to quantifying it: probabilities as fractions from 0 to 1 that add to 1, frequency compared with probability, outcomes that aren’t equally likely, and the effect of small and large numbers of trials."]
 ],
 modelsH2:"Each stage adds models; random generators carry chance from Stage 2 to Stage 3",
 modelsP:"The bars show the stages where the syllabus or the NESA teaching advice names or uses each model. Select a model for more detail.",
 modelTips:[
  ["Define what can happen first.","Use examples where everything that can happen is well defined. Determining what is possible is the essential first step in any probability problem."],
  ["Predict, then test.","Identifying outcomes, predicting and testing builds a sense of chance, and shows that randomness means something different may happen."],
  ["Many trials.","As the number of trials increases, observed probabilities tend to get closer to expected probabilities."],
  ["Don’t pin words to numbers.","Avoid assigning precise positions on a number line to imprecise words such as ‘possible’."]
 ],
 sorterP:"Most misconceptions in this focus area come from four roots, and each root reappears in a new form as students move from ‘could it be?’ to probabilities as fractions. Read each student response and choose its root.",
 rootRows:[
  ["Not considering everything that could happen","Says it could be green when there are no green cubes <span class=\"pill src-add\">Add.</span>","Says something unlikely is impossible","Misses outcomes when listing combinations <span class=\"pill src-add\">Add.</span>","Gives probabilities that don’t add to 1 <span class=\"pill src-add\">Add.</span>"],
  ["Personal beliefs and preferences drive predictions","Predicts red because it is their favourite colour","Says it won’t rain because it’s sports day <span class=\"pill src-add\">Add.</span>","Chooses a ‘lucky number’ on a die <span class=\"pill src-add\">Add.</span>","Thinks events that happen together must be related"],
  ["Expecting the past to balance the future","—","Expects colours to take turns <span class=\"pill src-add\">Add.</span>","After 6 heads, expects tails (the ‘law of averages’)","Expects observed results to match expected results exactly in a few trials"],
  ["Comparing amounts, not proportions","—","Thinks the bag with more red cubes is always better for red <span class=\"pill src-add\">Add.</span>","Thinks rolling a 6 is as likely as tossing a tail","Confuses frequency with probability"]
 ],
 sorterNote:"NESA notes that some students interpret events with a low probability as being impossible, and that the ‘law of averages’ is a common mistaken belief that what has happened will be balanced by what happens next.",
 notesTitle:"Chance K–6: my reflections",
 footer:"Built from the NESA <i>Mathematics K–10 Syllabus (2022)</i> outcomes and content (Early Stage 1 Data foundations to Stage 3) and the NESA syllabus support teaching advice. Items marked <span class=\"pill src-add\">Additional commentary</span> are common classroom observations, not NESA examples. Your progress and notes are saved only in this browser."
};

/* ---------------- data ---------------- */
var STAGES = {
 es1:{short:"ES1", name:"Early Stage 1", years:"Kindergarten", fa:"Foundations: discussing possible outcomes (Data)", col:"var(--es1)", soft:"var(--es1-soft)"},
 s1:{short:"S1", name:"Stage 1", years:"Years 1–2", fa:"Chance A and B", col:"var(--s1)", soft:"var(--s1-soft)"},
 s2:{short:"S2", name:"Stage 2", years:"Years 3–4", fa:"Chance A and B", col:"var(--s2)", soft:"var(--s2-soft)"},
 s3:{short:"S3", name:"Stage 3", years:"Years 5–6", fa:"Chance A and B", col:"var(--s3)", soft:"var(--s3-soft)"}
};
var ORDER = ["es1","s1","s2","s3"];

var STAGE_CONTENT = {
es1:{
 lead:"There are no Chance outcomes in Kindergarten, but the language of chance starts here. In Data, students predict responses to questions and discuss possible outcomes of activities. NESA suggests question starters such as ‘Could it be …?’ and ‘Why couldn’t it be …?’ to clarify what is certain and what is not.",
 outcomes:[["MAE-DATA-01","contributes to collecting data and interprets data displays made from objects (Data)"]],
 content:[
  ["","Data: Respond to questions, collect information and discuss possible outcomes of activities",["Predict possible responses to a question: What is your favourite colour?","Collect information from peers and about the environment","Pose and respond to questions about the information: Did anyone in our class choose green?"]],
  ["","Foundations from the NESA advice",["Discuss possible outcomes of data collections to clarify events that are certain and those that are not","Use familiar events to support understanding of certain and not certain","Some chance experiments may be included as part of an investigation that collects data"]]
 ],
 know:[
  ["Probability is hard","A widely accepted definition of probability took nearly three centuries and much controversy. In simple terms, probability is how likely something is to happen."],
  ["It works against our sense of balance","After five heads in a row, we expect tails. The idea that the past doesn’t affect the future is challenging at this stage."],
  ["Beliefs influence predictions","Students’ personal beliefs, such as favourite colours, influence their predictions of chance events."],
  ["Question starters","‘Could it be …?’ and ‘Why couldn’t it be …?’ help students decide what is possible and what isn’t."],
  ["Familiar events","Use familiar events to discuss what is certain and what is not: will we have lunch today? Will it snow in the classroom?"],
  ["Experiments that make data","Chance understanding develops through simple experiments that produce data students can compare."]
 ],
 misc:[
  {see:"Predicts the class favourite will be red because red is their favourite.",name:"Predictions based on personal preference",resp:"Record the prediction, collect the data and compare. NESA notes personal beliefs influence predictions.",src:"n"},
  {see:"Says a cube taken from a bag of red and blue cubes could be green.",name:"Not considering what is in the bag",resp:"Look inside the bag together. Ask, <i>Why couldn’t it be green?</i> Try the tool below.",src:"a"},
  {see:"Says a bag of only red cubes “might” give a red one.",name:"‘Might’ used for everything",resp:"Ask, <i>Could it be anything else?</i> If not, it will be red.",src:"a"},
  {see:"Says it will be sunny tomorrow “because I want to go to the beach”.",name:"Wishes as predictions",resp:"Ask what else could happen. Separate what we want from what could happen.",src:"a"}
 ],
 advice:["Introduce the language of chance through discussions of data collected.","Use question starters such as ‘Could it be …?’ and ‘Why couldn’t it be …?’","Use events familiar to students to discuss what is certain and what is not.","Include simple chance experiments as part of investigations that collect data.","Support students with the vocabulary demands of probability."],
 vocab:["could","couldn’t","will","won’t","might","maybe","certain","not certain","predict","information","collect"],
 check:{title:"Quick check (built from the NESA advice)",steps:["Show a bag of red and blue cubes. Ask, <i>If I take one out without looking, could it be red? Could it be green? Why couldn’t it be?</i> Try the tool below.","Ask, <i>What do you think will be our class’s favourite fruit? Why?</i>","Ask, <i>Will we have lunch today? Will it snow in our classroom? Might it rain?</i>"]},
 tool:"couldit",
 quiz:[
  {q:"How is the language of chance introduced in Early Stage 1?",o:["Through a separate Chance outcome","Through discussions of data collected","Through probability fractions","It isn’t introduced"],a:1,why:"There are no Early Stage 1 Chance outcomes; chance language arises in Data."},
  {q:"What influences young students’ predictions of chance events?",o:["Counting skills","Personal beliefs, such as favourite colours","Their age","The size of the bag"],a:1,why:"NESA notes this, so predictions should be compared with data."}
 ]
},
s1:{
 lead:"In Years 1 and 2, students identify possible outcomes of familiar activities and describe them as ‘will happen’, ‘might happen’ or ‘won’t happen’, then as likely, unlikely or possible, and compare events as more or less likely.",
 outcomes:[["MA1-CHAN-01","recognises and describes the element of chance in everyday events"]],
 content:[
  ["A","Identify and describe possible outcomes",["Identify possible outcomes of familiar activities and events: what might happen after lunch","Describe the chance of outcomes using ‘will happen’, ‘might happen’, ‘won’t happen’, ‘probably’, ‘maybe’"]],
  ["B","Identify and describe activities that involve chance",["Describe possible outcomes in everyday events as likely or unlikely","Compare familiar activities and events as more or less likely (Reasoning about relations)","Describe familiar events as possible: It is possible that it will rain today"]]
 ],
 know:[
  ["What is a chance event?","A chance event happens without a clear cause. By the end of Stage 1, students should acknowledge a range of possible outcomes and that some are more likely than others."],
  ["Two extremes","Events certain to happen and events certain not to happen. ‘Might’, ‘may’ and ‘possible’ describe events between them. Students often need help with ‘certain’ and ‘impossible’."],
  ["Unlikely isn’t impossible","Some students interpret events with a low probability as impossible. A coin landing on its edge is unexpected but not impossible."],
  ["Define what can happen","Use examples where everything that can happen is well defined. Students often don’t realise that for something to be impossible, there must be none of it among the possible outcomes."],
  ["Social contexts are harder","Impossible is harder to grasp in social contexts than ‘more likely’ or ‘equally likely’."],
  ["We see patterns","Randomness is hard to grasp, even for adults: we tend to see patterns where none exist. Encourage students to recognise the impact of chance on their predictions."]
 ],
 misc:[
  {see:"Says taking a red cube from a bag of 9 blue and 1 red is impossible.",name:"Unlikely seen as impossible",resp:"Take cubes out (and put them back) many times. Red appears sometimes. Try the tool below.",src:"n"},
  {see:"Says red and blue “take turns”, so blue is next.",name:"Expecting turns",resp:"Record many draws and look for runs of the same colour.",src:"a"},
  {see:"Says it won’t rain because it’s sports day.",name:"Wishes as predictions",resp:"Discuss what could happen, whatever we hope.",src:"a"},
  {see:"Says the bag with 5 red cubes is better for red than the bag with 2 red cubes, though the first also has 20 blue.",name:"Comparing amounts, not proportions",resp:"Compare the reds with the whole bag. Use very familiar, simple proportions in Stage 1.",src:"a"},
  {see:"Uses ‘likely’ to mean ‘will happen’.",name:"Likely and certain confused",resp:"Place events between ‘won’t happen’ and ‘will happen’, without assigning exact positions.",src:"n"}
 ],
 advice:["Encourage students to recognise the impact of chance on their predictions.","Use examples where all possible outcomes are well defined, such as a bag of cubes whose contents are known.","Discuss the two extremes, certain and certain not to happen, and the words in between.","Show that low-probability events are not impossible.","Use familiar activities, such as what might happen after lunch."],
 vocab:["possible","might happen","will happen","won’t happen","probably","maybe","likely","unlikely","more likely","less likely","certain","impossible"],
 check:{title:"Quick checks (built from the syllabus and NESA advice)",steps:["Ask, <i>What might happen after lunch? What will happen? What won’t happen?</i>","Show a bag with 9 blue cubes and 1 red. Ask, <i>Is it possible to take a red? Is it likely?</i> Try the tool below.","Ask, <i>Which is more likely: rain today or snow today? Why?</i>"]},
 tool:"bag",
 quiz:[
  {q:"What do some students think about events with a low probability?",o:["That they are certain","That they are impossible","That they are likely","That they are equally likely"],a:1,why:"NESA notes this; showing rare outcomes occurring helps."},
  {q:"What does NESA say is the essential first step in understanding any probability problem?",o:["Calculating a fraction","Determining what is possible (all the outcomes)","Drawing a graph","Tossing a coin"],a:1,why:"For something to be impossible, there must be none of it among the possible outcomes."}
 ]
},
s2:{
 lead:"In Years 3 and 4, students use the term outcome, record all possible outcomes and combinations in equally likely situations, predict and compare results of experiments, describe likelihood, and consider whether one event affects another.",
 outcomes:[["MA2-CHAN-01","records and compares the results of chance experiments"]],
 content:[
  ["A","Identify possible outcomes from chance experiments",["Use the term outcome for any possible result of a chance experiment","Record all outcomes when outcomes are equally likely: 3 pegs from a bag with equal numbers of 2 colours","Record all combinations: outfits from 3 T-shirts and 2 pairs of shorts","Predict how many times each outcome might occur in a set number of trials: a 6 might appear twice in 10 rolls (Probabilistic reasoning)","Compare predicted and actual results: a spinner with red, blue, green and yellow quarters; repeat and compare again"]],
  ["B","Describe the likelihood of outcomes of chance events",["Use equally likely, likely and unlikely: an odd or even number on a die is equally likely","Predict, conduct and compare: in 7 red, 13 blue and 10 yellow blocks, blue is most likely"]],
  ["B","Identify when events are affected by previous events",["Discuss events not affected by previous events: heads on one toss doesn’t affect the next","Compare events that are affected: removing an apple from a bag of apples and oranges increases the chance of an orange (Reasons about relations)"]]
 ],
 know:[
  ["Equally likely generators first","Random generators include coins, dice and spinners. Stage 2 focuses on equally likely outcomes; spinners with unequal areas come in Stage 3."],
  ["Expectation and variation","Identifying outcomes helps establish expectations, but randomness means something different may happen. Students need many opportunities to compare what might happen with what does happen."],
  ["The ‘law of averages’","The mistaken belief that past outcomes will be balanced: after 6 heads, tails is ‘due’. Each toss is independent. The coin doesn’t know what just happened."],
  ["Comparing likelihood needs proportion","A tail on a coin is more likely than a 6 on a die. This relies on intuitively comparing ratios, so use only very familiar ratios."],
  ["Equally likely isn’t always 50–50","Taking a red, blue or yellow ball is equally likely when the balls are identical except for colour: each has the same chance, but not a 50–50 chance."],
  ["Everyday words are imprecise","‘Certain’ and ‘likely’ are used loosely in speech. Don’t assign precise positions on a number line to imprecise words such as ‘possible’."]
 ],
 misc:[
  {see:"After 6 heads in a row, says tails is more likely next.",name:"The law of averages",resp:"Each toss is independent; the coin doesn’t remember. Record many tosses and look at what follows a run.",src:"n"},
  {see:"Predicts exactly 5 reds in 20 spins of a quarters spinner and thinks the spinner is broken when it gives 8.",name:"Expecting results to match predictions exactly",resp:"Repeat the experiment and compare. Variation is expected. Try the spinner tool below.",src:"n"},
  {see:"Lists 5 outfits from 3 T-shirts and 2 pairs of shorts.",name:"Not listing systematically",resp:"Pair each T-shirt with each pair of shorts: 3 × 2 = 6. Use a table or tree.",src:"a"},
  {see:"Says ‘equally likely’ means a 50–50 chance.",name:"Equally likely means 50–50",resp:"With 3 identical balls in different colours, each colour is equally likely, with a 1 in 3 chance.",src:"n"},
  {see:"Says taking an apple out doesn’t change the chance of getting an orange next.",name:"Dependent events treated as independent",resp:"Model with real fruit: count what’s left in the bag before the next draw.",src:"n"},
  {see:"Says rolling a 6 is as likely as tossing a tail because each is “one thing”.",name:"Ignoring the number of outcomes",resp:"List the outcomes: 1 of 2 for the coin, 1 of 6 for the die.",src:"n"}
 ],
 advice:["Focus on random generators with equally likely outcomes; leave unequal spinners to Stage 3.","Identify all possible outcomes, predict, then test.","Give many opportunities to compare expected and actual outcomes.","Compare likelihoods only with very familiar ratios.","Avoid assigning precise number-line positions to imprecise words such as ‘possible’."],
 vocab:["chance","event","experiment","outcome","random","trials","tally","expected results","actual results","possible","impossible","likely","unlikely","less likely","more likely","most likely","least likely","equally likely","more often","less frequent"],
 check:{title:"Quick checks (built from the syllabus examples and NESA advice)",steps:["Show a spinner with red, blue, green and yellow quarters. Ask, <i>In 20 spins, how many reds might we get?</i> Spin, then repeat. Try the tool below.","Ask, <i>A coin has landed heads 6 times. What is more likely next?</i>","Ask, <i>List all the outfits you can make with 3 T-shirts and 2 pairs of shorts.</i>","Ask, <i>A bag has apples and oranges. I take out an apple and keep it. Does that change the chance of an orange next?</i>"]},
 tool:"spinner",
 quiz:[
  {q:"Why are spinners with unequal areas not used in Stage 2 Chance?",o:["They are too expensive","The Stage 2 focus is on generators with equally likely outcomes","They don’t work","They are used only in Stage 1"],a:1,why:"Unequal outcomes are introduced in Stage 3."},
  {q:"After 6 heads in a row, what is the chance of heads on the next fair toss?",o:["Less than tails","More than tails","The same as tails","Zero"],a:2,why:"Each toss is independent. Expecting tails is the ‘law of averages’ fallacy."},
  {q:"What does ‘equally likely’ mean?",o:["Always a 50–50 chance","Each outcome has the same chance as any other","It will happen","It won’t happen"],a:1,why:"With three identical balls of different colours, each has a 1 in 3 chance."}
 ]
},
s3:{
 lead:"In Years 5 and 6, students describe probabilities as numbers from 0 to 1 using fractions, recognise that probabilities add to 1, distinguish frequency from probability, create random generators for given probabilities, and compare expected and observed results over small and large numbers of trials.",
 outcomes:[["MA3-CHAN-01","conducts chance experiments and quantifies the probability"]],
 content:[
  ["A","List outcomes of equally likely experiments and represent probabilities",["Use the term probability for the numerical value of likelihood","Recognise equally likely outcomes: every number on a 6-sided die","Record all outcomes where each is equally likely","Represent probabilities as fractions: one throw of a die; one spin of an 8-sector spinner","Establish that the probabilities of all outcomes add to one","Discuss the imprecise meaning of possible, likely and unlikely"]],
  ["B","Compare observed frequencies with expected results",["Use the term frequency for the number of times an outcome occurs","Distinguish frequency from probability: heads in 10 tosses is a frequency; the probability of heads is ½","Compare expected and observed frequencies, including when outcomes aren’t equally likely: a spinner half green, the rest red, grey and blue","Discuss the fairness of simple games and the idea of randomness","Explain why observed frequencies may differ from expected frequencies"]],
  ["B","Create random generators and describe probabilities using fractions",["Create generators to follow given probabilities: red twice as likely as blue","Assign probabilities with denominators of 2, 3, 4, 5, 6, 8 and 10: green 3/6, red 1/6, grey 1/6, blue 1/6","Use benchmark fractions, decimals and percentages: 5 out of 10, ½, 50%"]],
  ["B","Conduct experiments with small and large numbers of trials",["Compare expected and observed probabilities after small and large numbers of trials, including digital simulators","Discuss the differences","Determine the likely make-up of a collection by sampling with replacement"]]
 ],
 know:[
  ["A scale from 0 to 1","Probability 0 means impossible; 1 means the event must occur. Ordering fractions and decimals on a number line from 0 to 1 supports comparing probabilities. Probabilities of all outcomes add to 1."],
  ["Numbers are precise, words aren’t","A weather report might call a 100% chance of no rain ‘very high’ rather than certain. A numeric value is an exact statement; chance words remain imprecise."],
  ["Frequency and probability","Frequency is the number of times an outcome occurs. Probability is a value from 0 to 1. Theoretical probability comes from proportions; experimental probability comes from results."],
  ["More trials, closer results","As the number of trials increases, observed probabilities tend to get closer to expected probabilities. Monte Carlo methods use repeated random sampling to estimate probabilities we can’t calculate, such as how a paper cup lands."],
  ["Together isn’t because","Events occurring together don’t necessarily cause each other: the fallacy ‘with this, therefore because of this’."],
  ["Words","‘Random’ has everyday meanings (unknown, out of place). ‘Sample space’ isn’t introduced until Stage 4. ‘Dice’ is now both singular and plural."]
 ],
 misc:[
  {see:"After 10 spins of a half-green spinner gets 7 greens and says the probability of green is 7/10.",name:"Observed probability taken as expected",resp:"Distinguish observed from expected probability. Run many more trials and compare. Try the tool below.",src:"n"},
  {see:"Says the probability of heads is 6 because heads came up 6 times.",name:"Frequency confused with probability",resp:"Frequency is a count; probability is a value from 0 to 1. The syllabus uses this coin example.",src:"n"},
  {see:"Gives probabilities of ½, ⅓ and ⅓ for a spinner with three sectors.",name:"Probabilities that don’t add to 1",resp:"All the outcomes together must add to 1. Check the sector sizes.",src:"n"},
  {see:"Says wearing their lucky socks made the team win.",name:"‘With this, therefore because of this’",resp:"Events occurring together don’t necessarily cause each other.",src:"n"},
  {see:"Expects exactly 50 heads in 100 tosses and thinks 46 means the coin is unfair.",name:"Expecting no variation",resp:"Variation is expected, even in large samples. Compare with classmates’ results or a simulator.",src:"n"},
  {see:"Makes a spinner with red as one of three equal sectors when asked for red twice as likely as blue.",name:"Not building the proportion",resp:"Twice as likely: give red 2 parts for every 1 part of blue.",src:"a"}
 ],
 advice:["Connect probabilities to ordering fractions and decimals on a number line from 0 to 1.","Use digital simulators to run large numbers of trials and compare with small samples.","Discuss fairness of games and the idea of randomness.","Have students create spinners and bags that follow given probabilities.","Use Monte Carlo experiments, such as tossing a paper cup, where probabilities can’t be calculated.","Discuss the many everyday meanings of ‘random’."],
 vocab:["certain","chance","equally likely","event","expected frequency","expected outcome","expected probability","experiment","fair","frequency","impossible","likelihood","likely","observed frequency","observed probability","outcome","possible","probability","random","trials","unlikely"],
 check:{title:"Quick checks (built from the syllabus examples and NESA advice)",steps:["Show a spinner that is half green with the other half split into red, grey and blue. Ask, <i>What is the probability of each colour? What do they add to?</i>","Ask, <i>In 12 spins, how many greens do you expect? What if we spin 600 times?</i> Try the trials tool below.","Ask, <i>A coin landed heads 6 times in 10 tosses. What is the frequency of heads? What is the probability?</i>","Ask, <i>Make a bag where red is twice as likely as blue.</i>"]},
 tool:"trials",
 quiz:[
  {q:"What happens as the number of trials increases?",o:["Results become less predictable","Observed probabilities tend to get closer to expected probabilities","Observed results match expected exactly","Nothing changes"],a:1,why:"Small samples vary a lot; large samples tend to settle near the expected probability."},
  {q:"A fair coin lands heads 6 times in 10 tosses. What is the probability of heads?",o:["6","6/10","1/2","10"],a:2,why:"6 is the frequency of heads; 6/10 is the observed probability; the probability is ½."},
  {q:"What do the probabilities of all outcomes of a chance experiment add to?",o:["0","1","100","It depends"],a:1,why:"One of the outcomes must occur."}
 ]
}
};

var IDEAS = [
 {t:"Know what could happen",d:"Identifying all possible outcomes is the first step in any probability problem.",s:{es1:"‘Could it be …?’ ‘Why couldn’t it be …?’",s1:"Possible outcomes of familiar activities.",s2:"Listing outcomes and combinations.",s3:"Recording all outcomes; probabilities add to 1."}},
 {t:"Likelihood lies between impossible and certain",d:"Events range from certain not to happen to certain to happen.",s:{es1:"Certain and not certain.",s1:"Will, might, won’t; likely, unlikely; unlikely isn’t impossible.",s2:"Equally likely, more likely, most likely.",s3:"Probability from 0 to 1."}},
 {t:"Chance words are imprecise",d:"Everyday language of chance differs from mathematical precision.",s:{es1:"Probably, maybe.",s1:"Possible, likely.",s2:"Avoid assigning exact positions to words.",s3:"Numbers are precise; words remain imprecise."}},
 {t:"Predict, test and compare",d:"Expectations come from outcomes; results vary because of randomness.",s:{es1:"Predicting responses and checking data.",s1:"Recognising chance in predictions.",s2:"Predicted and actual results; repeat and compare.",s3:"Expected and observed frequencies; small and large numbers of trials."}},
 {t:"Independence and dependence",d:"Some events affect others; many don’t.",s:{es1:"The past doesn’t change the next outcome (a hard idea).",s1:"Colours don’t take turns.",s2:"Coin tosses are independent; removing an apple changes the bag.",s3:"Together doesn’t mean because."}},
 {t:"Probability is proportional",d:"Likelihood compares a part with all the possibilities.",s:{es1:"More of one colour in the bag.",s1:"More or less likely.",s2:"A tail is more likely than a 6.",s3:"Fractions, decimals and percentages; building generators to a proportion."}}
];

var ASPECTS = [
 {k:"o",l:"Outcomes",v:{es1:"No Chance outcomes. Foundations in <b>MAE-DATA-01</b> (Data)",s1:"<b>MA1-CHAN-01</b> recognises and describes the element of chance in everyday events",s2:"<b>MA2-CHAN-01</b> records and compares the results of chance experiments",s3:"<b>MA3-CHAN-01</b> conducts chance experiments and quantifies the probability"}},
 {k:"d",l:"Describing chance",v:{es1:"Could it be? Why couldn’t it be?",s1:"Will, might, won’t; likely, unlikely, possible",s2:"Equally likely, likely, unlikely; outcome",s3:"Probability as a fraction from 0 to 1"}},
 {k:"e",l:"Experiments",v:{es1:"As part of data investigations",s1:"Everyday events",s2:"Equally likely generators; predicted and actual",s3:"Unequal generators; small and large numbers of trials; simulators"}},
 {k:"i",l:"Independence",v:{es1:"—",s1:"—",s2:"Coin tosses; removing an apple",s3:"‘With this, therefore because of this’"}},
 {k:"l",l:"Language",v:{es1:"could, couldn’t, certain, not certain",s1:"possible, might happen, likely, unlikely, more likely",s2:"outcome, trials, random, expected and actual results",s3:"probability, frequency, observed, expected, fair, random"}}
];

var MODELS = [
 {n:"Familiar events",w:"lunch, weather, routines",s:0,e:2,d:"Discussing what will, might and won’t happen in everyday life."},
 {n:"Bags of coloured cubes",w:"known contents",s:0,e:3,hi:true,d:"Well-defined outcomes; impossible means none in the bag; sampling with replacement in Stage 3."},
 {n:"Data investigations",w:"predicting responses",s:0,e:1,d:"Predicting and checking class data, such as favourite colours."},
 {n:"Coins",w:"independence",s:2,e:3,d:"Heads and tails; the law of averages; frequency and probability."},
 {n:"Dice",w:"equally likely outcomes",s:2,e:3,d:"Predicting how many 6s in 10 rolls; probabilities as sixths."},
 {n:"Equal-sector spinners",w:"quarters and eighths",s:2,e:3,d:"Predicted and actual results in Stage 2; probabilities as fractions in Stage 3."},
 {n:"Unequal-sector spinners",w:"half green, sixths",s:3,e:3,d:"Outcomes that aren’t equally likely; creating spinners for given probabilities."},
 {n:"Tables and trees",w:"listing combinations",s:2,e:2,d:"Outfits from 3 T-shirts and 2 pairs of shorts."},
 {n:"Tally charts and graphs",w:"recording results",s:2,e:3,d:"Recording trials and comparing results (links to Data)."},
 {n:"Number line 0 to 1",w:"probability scale",s:3,e:3,d:"Ordering probabilities as fractions, decimals and percentages."},
 {n:"Digital simulators",w:"large numbers of trials",s:3,e:3,d:"Comparing expected and observed probabilities after many trials."},
 {n:"Monte Carlo experiments",w:"paper cups",s:3,e:3,d:"Estimating probabilities that can’t be calculated by repeated trials."}
];

var ROOTS = ["Not considering everything that could happen","Personal beliefs and preferences drive predictions","Expecting the past to balance the future","Comparing amounts, not proportions"];
var SCENARIOS = [
 {st:"es1",q:"Ava says a cube from a bag of red and blue cubes could be green.",a:0,why:"Ava isn’t considering what is in the bag. Look inside and ask why it couldn’t be green."},
 {st:"es1",q:"Noah predicts everyone will choose dogs because he loves dogs.",a:1,why:"Personal preferences drive the prediction. Collect the data and compare."},
 {st:"s1",q:"Mia says taking the one red cube from a bag of 9 blue is impossible.",a:0,why:"Unlikely isn’t impossible: red is in the bag."},
 {st:"s1",q:"Leo says blue must be next because red came out last time.",a:2,why:"Colours don’t take turns."},
 {st:"s1",q:"Grace chooses a bag with 5 red and 20 blue over a bag with 2 red and 1 blue, to get red.",a:3,why:"Grace compares amounts of red, not the proportion of the bag that is red."},
 {st:"s2",q:"After 6 heads, Ben bets on tails because it’s “due”.",a:2,why:"The law of averages. Each toss is independent."},
 {st:"s2",q:"Ella lists 5 outfits from 3 T-shirts and 2 pairs of shorts.",a:0,why:"Ella hasn’t listed systematically: there are 6."},
 {st:"s2",q:"Josh always chooses 4 on a die because it’s his lucky number.",a:1,why:"Every number on a fair die is equally likely."},
 {st:"s2",q:"Zoe says rolling a 6 is as likely as tossing a tail.",a:3,why:"1 in 6 compared with 1 in 2. Comparing likelihood depends on proportion."},
 {st:"s3",q:"Kai says the probability of heads is 6 because heads came up 6 times.",a:3,why:"6 is a frequency; the probability of heads is ½."},
 {st:"s3",q:"Ruby says her lucky socks made the team win.",a:1,why:"‘With this, therefore because of this’: events together aren’t necessarily related."},
 {st:"s3",q:"Jai says a coin must be unfair because it gave 4 heads in 10 tosses.",a:2,why:"Small samples vary. Expecting exact results ignores randomness."}
];

var PROMPTS = [
 ["Looking across the progression","Which of the six big ideas does your stage depend on most? Which earlier stage is it built on?"],
 ["Looking across the progression","How does chance language in Early Stage 1 Data prepare students for Stage 1 Chance?"],
 ["Looking across the progression","Where do fractions and decimals on a number line from 0 to 1 support probability in Stage 3?"],
 ["Your students","Run the quick check for your stage with three students: one secure, one you’re unsure of and one who is struggling. What did you learn that you didn’t expect?"],
 ["Your students","Which root misconception do you see most often? Where in the earlier stages might it have started?"],
 ["Your students","How often do your students’ predictions reflect their wishes rather than the possible outcomes?"],
 ["Your practice","How often do students run enough trials to see variation, and to see results settle down?"],
 ["Your practice","Do you ever place chance words at exact points on a number line? What could you do instead?"],
 ["Your practice","How could Data and Chance be taught together in your stage?"]
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
  tagsLead:"There are no Chance outcomes in Early Stage 1, and the related Data points aren’t tagged as reasoning. The makeover below builds the language of chance into a Data task, as NESA suggests:",
  tags:[],
  before:{task:"Colour the cubes in the bag.<br><br>(a picture of a bag with 3 red and 2 blue cubes)",lim:["No prediction or ‘could it be?’","No discussion of what is possible","No experiment"]},
  after:{task:"“Here is a bag with red and blue cubes. If I take one out without looking, could it be red? Could it be blue? Could it be green? Why couldn’t it be?” Then take cubes out and record them.",enable:"Use a bag with only one colour first.",extend:"“Make a bag where it couldn’t be blue.”",listen:"‘It could be red because there are red ones’; ‘it can’t be green because there aren’t any’; will, might, won’t.",el:["Exploring and connecting","Communicating","Reasoning"]}
 },
 s1:{
  tags:[["Compare familiar activities and events and describe them as being more or less likely to happen","Reasoning about relations"]],
  before:{task:"Will it happen? Circle yes or no.<br><br>It will rain tomorrow. YES / NO",lim:["Forces certainty onto chance events","No ‘might’, ‘likely’ or ‘possible’","No comparing events"]},
  after:{task:"“Put these events in order from ‘won’t happen’ to ‘will happen’: it will rain today; we will have lunch; a dinosaur will visit; you will see a bird at recess. Which is more likely? Why?”",enable:"Use two events at a time.",extend:"“Can you think of an event that is unlikely but possible?”",listen:"‘Might’, ‘probably’, ‘possible’; ‘unlikely but not impossible’; reasons based on experience.",el:["Exploring and connecting","Communicating","Reasoning"]}
 },
 s2:{
  tags:[["Predict the number of times each outcome might occur in a chance experiment involving a set number of trials","Probabilistic reasoning"],["Compare events where the chance of one event occurring is affected by the occurrence of the other","Reasons about relations"]],
  before:{task:"Spin the spinner 20 times. Tally the results.<br><br>(a spinner with four equal colours)",lim:["No prediction","No comparison of predicted and actual","No repeat to see variation"]},
  after:{task:"“Predict how many reds in 20 spins. Spin, then compare. Repeat. Why didn’t you get the same both times? What would happen if we combined the whole class’s results?”",enable:"Use a coin for 10 tosses.",extend:"“Design a spinner where red would come up about 10 times in 20 spins.”",listen:"‘About 5’; ‘it was close but not exact’; ‘it’s random’; combining results gets closer to a quarter.",el:["Exploring and connecting","Choosing and applying techniques","Communicating","Reasoning"]}
 },
 s3:{
  tagsLead:"Every content point addresses MAO-WM-01. In Stage 3, the syllabus doesn’t tag any Chance points as reasoning, so the makeover below builds reasoning into a typical task:",
  tags:[],
  before:{task:"What is the probability of spinning green?<br><br>(a spinner that is half green)",lim:["One fraction, one answer","No experiment","No reasoning about variation"]},
  after:{task:"“This spinner is half green, with red, grey and blue sharing the other half. Is this game fair if green wins? Predict results for 12 spins and for 600 spins. Run both and explain the differences.”",enable:"Use a spinner with two equal halves first.",extend:"“Design a fair game using this spinner.”",listen:"½, ⅙, ⅙, ⅙ adding to 1; frequency versus probability; ‘more trials, closer to expected’; fairness.",el:["Exploring and connecting","Choosing and applying techniques","Communicating","Reasoning"]}
 }
};

var CLOSED = [
 {st:"s1",task:"Will it rain tomorrow? Yes or no.",moves:[
  {m:"Who is correct?",t:"“Ari says taking a red cube from a bag of 9 blue and 1 red is impossible. Bea says it’s unlikely. Who is correct?”",el:["Reasoning","Communicating"]},
  {m:"Same and different",t:"“What is the same and what is different about ‘unlikely’ and ‘impossible’?”",el:["Exploring and connecting","Communicating"]},
  {m:"Always, sometimes, never",t:"“If something is unlikely, it won’t happen. Always, sometimes or never true?”",el:["Reasoning","Exploring and connecting"]},
  {m:"Open it up",t:"“Make a bag of cubes where red is likely but not certain.”",el:["Choosing and applying techniques","Reasoning"]},
  {m:"Convince me",t:"“Convince me it is possible to see a bird at recess.”",el:["Understanding and fluency","Communicating"]}
 ]},
 {st:"s2",task:"List the outcomes when you toss a coin.",moves:[
  {m:"Who is correct?",t:"“After 6 heads, Tom says tails is more likely. Mei says it’s still equally likely. Who is correct?”",el:["Reasoning","Communicating"]},
  {m:"Same and different",t:"“What is the same and what is different about tossing a coin and rolling a die?”",el:["Exploring and connecting","Communicating"]},
  {m:"Always, sometimes, never",t:"“If you spin a quarters spinner 20 times, you get 5 reds. Always, sometimes or never true?”",el:["Reasoning","Exploring and connecting"]},
  {m:"Open it up",t:"“How many different outfits can you make from 3 T-shirts and 2 pairs of shorts? How do you know you have them all?”",el:["Choosing and applying techniques","Reasoning"]},
  {m:"Convince me",t:"“Convince me that taking an apple out of the bag changes the chance of an orange.”",el:["Understanding and fluency","Communicating"]}
 ]},
 {st:"s3",task:"What is the probability of rolling a 3 on a die?",moves:[
  {m:"Who is correct?",t:"“Kai rolled 3 four times in 12 rolls and says the probability is 4/12. Jess says it’s 1/6. Who is correct? Explain.”",el:["Reasoning","Communicating"]},
  {m:"Same and different",t:"“What is the same and what is different about frequency and probability?”",el:["Exploring and connecting","Communicating"]},
  {m:"Always, sometimes, never",t:"“The more trials you do, the closer the results are to the expected probability. Always, sometimes or never true?”",el:["Reasoning","Exploring and connecting"]},
  {m:"Open it up",t:"“Design a spinner where the probability of red is 3/8. Find more than one way.”",el:["Choosing and applying techniques","Reasoning"]},
  {m:"Convince me",t:"“Convince me that the probabilities of all the outcomes add to 1.”",el:["Understanding and fluency","Communicating"]}
 ]}
];
