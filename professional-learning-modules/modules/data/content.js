/* ---------------- module config ---------------- */
var M = {
 key:"data-k6-module-v1",
 title:"Data K–6",
 dlName:"data-reflections.txt",
 welcomeH2:"How students learn to collect, display and interpret data, K to 6",
 welcomeP:"This module follows Data across four stages: from sorting objects and comparing groups by counting, to picture graphs, tally tables, column graphs and dot plots, to many-to-one scales, line graphs, timelines and recognising bias and misleading displays. It covers how the outcomes build, the maths you need to teach it, the misconceptions to look for, and what the NESA teaching advice recommends.",
 tryText:"a model for each stage: sorting objects into a display, spotting what makes a picture graph misleading, one dataset in several displays, and how a broken axis distorts a graph.",
 namesH3:"One focus area, one strand",
 namesP:"Data has the same name in every stage, with parts A and B from Stage 1. From Stage 1, there are two outcomes: one about collecting, organising and displaying data, and one about interpreting it. All content also addresses the Working mathematically outcome, MAO-WM-01.",
 ideasP:"NESA explains that describing data and creating displays draws on quantitative and spatial reasoning, and that students need to recognise how information may be displayed in a misleading way. Experiences with collecting, organising, displaying and analysing data develop graphical and statistical literacy (Watson and Callingham 2003). Six ideas run through the focus area. Select an idea to see how it develops.",
 ideasNote:"Data connects to Chance (data from chance experiments; reasoning beyond the data), Representing numbers and Multiplicative relations (counting, skip counting and many-to-one scales), Geometric measure (equal intervals on a scale, like a ruler) and Non-spatial measure (timelines and timetables).",
 progP:"Students move from sorting objects and comparing groups by counting, to one-to-one picture graphs, to column graphs and dot plots with scales of one and then many-to-one, to choosing displays that suit the data, line graphs and timelines. Interpretation moves from ‘which has the most?’ to reasoning beyond the data and recognising bias.",
 shifts:[
  ["es1","Early Stage 1 → Stage 1","From objects grouped and arranged into a display to symbols that each represent one data value. Students gather data with tally marks, organise it in lists and tables, and build picture graphs with a baseline, equal spacing and same-sized symbols."],
  ["s1","Stage 1 → Stage 2","From picture graphs to column graphs and dot plots with labelled axes and equal intervals. Students create and refine surveys, represent the same data in more than one display, and use many-to-one scales."],
  ["s2","Stage 2 → Stage 3","From discrete data to continuous data over time: line graphs and timelines. Students choose appropriate displays and scales, interpret side-by-side column graphs, describe distributions using range and mode, and identify bias and misleading displays."]
 ],
 modelsH2:"Each stage adds displays; column graphs carry data from Stage 2 to Stage 3",
 modelsP:"The bars show the stages where the syllabus or the NESA teaching advice names or uses each model. Select a model for more detail.",
 modelTips:[
  ["One object, one data value.","In a one-to-one display, each object or picture represents one data value. One object can also represent an idea, such as a person’s preference."],
  ["Line them up.","Aligning rows or columns of objects or images on a common baseline makes comparisons easier."],
  ["From ‘here’ to ‘hidden’.","Ask what is in the data, then what can be inferred from it, then whether it would be the same elsewhere (Makar 2016)."],
  ["Avoid 3D charts.","Software 3D charts are misleading because of the slanting perspective."]
 ],
 sorterP:"Most misconceptions in this focus area come from four roots, and each root reappears in a new form as students move from sorting objects to interpreting media graphs. Read each student response and choose its root.",
 rootRows:[
  ["Comparing by appearance, not by count or scale","Thinks the longer, spread-out row has more <span class=\"pill src-add\">Add.</span>","Thinks the row of bigger pictures has more","Compares column heights without reading the scale <span class=\"pill src-add\">Add.</span>","Is misled by a broken axis or a 3D chart"],
  ["Ignoring the scale or key","—","Doesn’t notice symbols are unequally spaced","Reads a many-to-one graph as one-to-one <span class=\"pill src-add\">Add.</span>","Misreads a timeline scale or values between points on a line graph <span class=\"pill src-add\">Add.</span>"],
  ["A display that doesn’t suit the data","—","Uses one picture for several items without a key <span class=\"pill src-add\">Add.</span>","Joins the columns of a column graph","Uses a line graph for categorical or discrete data"],
  ["Conclusions not tied to how data was collected","Predicts everyone likes red because they do","Asks a question whose answers don’t form categories <span class=\"pill src-add\">Add.</span>","Generalises from one class to everyone <span class=\"pill src-add\">Add.</span>","Doesn’t notice selection bias (asking only friends)"]
 ],
 sorterNote:"NESA notes that students’ personal beliefs, such as favourite colours, influence their predictions, and that explicitly tying evidence to conclusions is a skill that needs practice and nurturing (Makar 2016).",
 notesTitle:"Data K–6: my reflections",
 footer:"Built from the NESA <i>Mathematics K–10 Syllabus (2022)</i> outcomes and content (Early Stage 1 to Stage 3) and the NESA syllabus support teaching advice. Items marked <span class=\"pill src-add\">Additional commentary</span> are common classroom observations, not NESA examples. Your progress and notes are saved only in this browser."
};

/* ---------------- data ---------------- */
var STAGES = {
 es1:{short:"ES1", name:"Early Stage 1", years:"Kindergarten", fa:"Data", col:"var(--es1)", soft:"var(--es1-soft)"},
 s1:{short:"S1", name:"Stage 1", years:"Years 1–2", fa:"Data A and B", col:"var(--s1)", soft:"var(--s1-soft)"},
 s2:{short:"S2", name:"Stage 2", years:"Years 3–4", fa:"Data A and B", col:"var(--s2)", soft:"var(--s2-soft)"},
 s3:{short:"S3", name:"Stage 3", years:"Years 5–6", fa:"Data A and B", col:"var(--s3)", soft:"var(--s3-soft)"}
};
var ORDER = ["es1","s1","s2","s3"];

var STAGE_CONTENT = {
es1:{
 lead:"In Kindergarten, students collect information about themselves and their environment with teacher assistance, use objects as data, group them by characteristics into a display, and compare the groups by counting. Discussing possible responses introduces the language of chance.",
 outcomes:[["MAE-DATA-01","contributes to collecting data and interprets data displays made from objects"]],
 content:[
  ["","Respond to questions, collect information and discuss possible outcomes",["Predict possible responses to a question: What is your favourite colour?","Collect information from peers and about the classroom or school environment","Pose and respond to questions about the information: Did anyone in our class choose green?"]],
  ["","Organise objects into simple data displays and interpret them",["Group objects by colour, size, shape or texture","Compare the sizes of groups of objects by counting (Reasons about relations)","Arrange objects according to a characteristic to form a data display","Interpret a display to answer questions: How many students chose red? (Reasons about quantity)"]]
 ],
 know:[
  ["Objects as data","Students use objects as data and group them into a display. Comparing the sizes of groups applies their counting knowledge to reasoning about relations."],
  ["Personal beliefs shape predictions","Students’ personal beliefs, such as their favourite colour, influence their predictions. Predicting responses and then checking against the data begins to build an understanding of likelihood."],
  ["The language of chance","The language of chance is introduced through discussing data collected. Question starters such as ‘Could it be …?’ and ‘Why couldn’t it be …?’ help clarify events that are certain and not certain."],
  ["Probability is hard","A widely accepted definition of probability took nearly three centuries. Students find it hard to accept that past outcomes don’t affect the future: after five heads, tails isn’t more likely."],
  ["Line them up","When groups are arranged in lines from a common starting point, they can be compared by looking as well as by counting. Spread-out groups can look bigger than they are."],
  ["Reasoning across strands","Describing data and creating displays draws on quantitative and spatial reasoning; comparing probabilities later relies on proportional reasoning."]
 ],
 misc:[
  {see:"Says the group of red blocks has more because the row is longer, though the blocks are spread out.",name:"Judging by length, not count",resp:"Count both groups. Line them up from the same starting point with no gaps. Try the sorting tool below.",src:"a"},
  {see:"Predicts that everyone will choose red because red is their favourite.",name:"Predictions based on personal preference",resp:"Record the prediction, collect the data and compare. NESA notes personal beliefs influence predictions.",src:"n"},
  {see:"Sorts blocks by colour, then can’t explain how a group was sorted by someone else.",name:"Not identifying the characteristic",resp:"Ask, <i>What is the same about all of these?</i> Sort the same objects in a different way.",src:"a"},
  {see:"Counts one group twice when comparing.",name:"Counting without tracking",resp:"Move each object as it is counted, or line the groups up one-to-one.",src:"a"}
 ],
 advice:["Collect information about students and their environment, with teacher assistance.","Group objects by colour, size, shape or texture, and compare groups by counting.","Discuss possible outcomes with question starters such as ‘Could it be …?’ and ‘Why couldn’t it be …?’","Use familiar events to discuss what is certain and what is not certain.","Some chance experiments can be included as part of an investigation that collects data."],
 vocab:["information","collect","group","display","objects","sort","count","more","less","most","fewest","the same as"],
 check:{title:"Quick check (built from the syllabus examples)",steps:["Ask, <i>What do you think will be the class’s favourite colour? Why?</i>","Give a mixed collection of blocks. Ask the student to sort them and tell you how they sorted. Try the sorting tool below.","Ask, <i>Which group has the most? How do you know? How many more?</i>","Arrange the groups into a display. Ask, <i>How many chose red?</i>"]},
 tool:"sort",
 quiz:[
  {q:"What does NESA say influences young students’ predictions?",o:["Their counting skills","Their personal beliefs, such as favourite colours","The size of the class","Their age"],a:1,why:"Personal preferences influence predictions of chance events and survey responses."},
  {q:"Which question starters does NESA suggest for introducing the language of chance?",o:["‘What is the probability?’","‘Could it be …?’ and ‘Why couldn’t it be …?’","‘How many?’","‘Which is biggest?’"],a:1,why:"These help clarify events that are certain and those that are not."}
 ]
},
s1:{
 lead:"In Years 1 and 2, students choose questions, gather data with objects, tally marks, lists and symbols, and represent it in one-to-one displays, lists, tables and picture graphs. They learn why a picture graph needs a baseline, equal spacing and same-sized symbols.",
 outcomes:[["MA1-DATA-01","gathers and organises data, displays data in lists, tables and picture graphs"],["MA1-DATA-02","reasons about representations of data to describe and interpret the results"]],
 content:[
  ["A","Ask questions and gather data",["Investigate a topic of interest by choosing suitable questions","Gather data and track what has been counted using concrete materials, tally marks, lists or symbols"]],
  ["A","Represent data with objects and drawings and describe the displays",["Use objects or pictures as symbols where one represents one data value: same-sized blocks for different-coloured cars","Describe information in one-to-one displays, such as weather charts (Reasons about relations)","Use comparative language: more sunny days than cloudy days","Identify the biggest or smallest values: the most popular fruit snack was an apple"]],
  ["B","Identify a question of interest and gather relevant data",["Pose questions where the answers form categories, and predict the responses: Which school sport is most popular?","Collect data through questioning, observation or feedback","Sort data into relevant categories"]],
  ["B","Create displays of data and interpret them",["Organise data into lists and tables","Represent data in a picture graph using a baseline, equal spacing and same-sized symbols","Give reasons why some representations are misleading: symbols of different sizes, or not equally spaced (Reasons about relations)","Interpret tables and picture graphs (Reasons about relations)","Record answers to questions using tables and picture graphs"]]
 ],
 know:[
  ["Representation is abstraction","Representing an object with a different object, picture or drawing is an abstraction. In a one-to-one display each object represents one object, or one idea such as a person’s preference."],
  ["Ways of recording","Placing blocks or counters in a line, colouring squares on grid paper, and tally marks. Tally marks are drawn in fives, with the fifth drawn diagonally through the first four. Cultures using Chinese characters tally five with 正."],
  ["Categorical data","Categorical data can be separated into distinct groups: the colours of Smarties in a box, or class members’ favourite fruits."],
  ["Observation and conversation","Students may engage more through observation or conversation than questioning. Some Aboriginal students may prefer not to ask or be asked direct questions, and may have well-developed observational skills."],
  ["Accessible displays","Use strong colour contrast, alternative text and captions. Introduce displays through real objects, photos, images, then abstract drawings, to suit students’ preferred communication."],
  ["Real contexts","Base early data experiences on real-life contexts relevant to students and connected to History, Geography, or Science and Technology."]
 ],
 misc:[
  {see:"Says bananas are most popular because their row of pictures is longest, though the banana pictures are bigger.",name:"Different-sized symbols",resp:"Count the symbols in each row. Redraw with same-sized symbols. Try the picture graph tool below.",src:"n"},
  {see:"Draws a picture graph with rows that start in different places.",name:"No common baseline",resp:"Align rows on a common baseline so comparisons are easier, as NESA advises.",src:"n"},
  {see:"Spaces symbols unevenly so one row stretches further.",name:"Unequal spacing",resp:"Use grid paper so each symbol takes one square. This is a Stage 1 B reasoning point.",src:"n"},
  {see:"Asks “What do you do at lunch?” and can’t sort the answers.",name:"Questions without categories",resp:"Pose questions where the answers form categories, and predict the likely responses first.",src:"n"},
  {see:"Draws tally marks in one long line and loses count.",name:"Not grouping tallies",resp:"Draw tally marks in fives, with the fifth across the first four, and count in fives.",src:"n"}
 ],
 advice:["Use real-life contexts connected to other learning areas.","Make sure each object or symbol in a one-to-one display represents one data value.","Align rows or columns on a common baseline.","Teach tally marks in groups of five, and acknowledge other systems such as 正.","Offer collecting through observation and conversation as well as questioning.","Ensure displays are accessible: strong colour contrast, alternative text, captions, and a progression from real objects to abstract drawings."],
 vocab:["information","data","collect","gather","display","symbol","tally mark","picture graph","list","table","category","baseline","more than","less than","most","least"],
 check:{title:"Quick checks (built from the syllabus examples)",steps:["Ask the student to choose a question about the class whose answers form categories, and to predict the responses.","Ask the student to collect the data using tally marks, then organise it in a table.","Show a picture graph with different-sized symbols. Ask, <i>Which is most popular? Is this graph fair? Why?</i> Try the picture graph tool below.","Ask, <i>How many more chose apples than bananas?</i>"]},
 tool:"picgraph",
 quiz:[
  {q:"What three features does the syllabus require for a Stage 1 picture graph?",o:["A title, a key and colour","A baseline, equal spacing and same-sized symbols","Axes, a scale and gridlines","Tally marks, a list and a table"],a:1,why:"Without these, a picture graph can be misleading."},
  {q:"How are tally marks usually drawn?",o:["In tens","In groups of five, the fifth drawn across the first four","As dots","In pairs"],a:1,why:"Grouping in fives makes counting more efficient."},
  {q:"Why might some Aboriginal students engage more with observation than questioning?",o:["They can’t write questions","For cultural and historical reasons, some may prefer not to ask or be asked direct questions","Observation is quicker","Questions aren’t in the syllabus"],a:1,why:"NESA suggests applying well-developed observational skills to collecting data."}
 ]
},
s2:{
 lead:"In Years 3 and 4, students collect discrete data, create and refine surveys, and construct tables, column graphs and dot plots with labelled axes and equal intervals. They represent the same data in more than one display and use many-to-one scales.",
 outcomes:[["MA2-DATA-01","collects discrete data and constructs graphs using a given scale"],["MA2-DATA-02","interprets data in tables, dot plots and column graphs"]],
 content:[
  ["A","Collect discrete data",["Pose questions whose answers can be recorded in categories: How many bush tucker plants are in the school grounds?","Collect data by interviewing, observing or using a database","Predict and list categories for efficient collection: the most common rubbish in the playground"]],
  ["A","Organise and display data using tables and graphs",["Create a list or table: native plants in the local community; ages of students","Construct column graphs (scale intervals of 1) and dot plots, using software where appropriate","Mark equal intervals, name and label axes, and choose titles"]],
  ["A","Interpret and compare data",["Interpret tally tables and column graphs","Investigate how data is used to make decisions: Aboriginal and Torres Strait Islander Peoples use changes in the environment to make decisions about food sources and shelter","Represent the same dataset in more than one display and compare them (Statistical reasoning)"]],
  ["B","Select and trial methods for data collection",["Create a survey and recording sheet with appropriate categories","Refine questions after a trial: ‘the most popular playground game among Year 4 students at our school’","Conduct surveys or observations for categorical or numerical data","Compare methods: categories with tally marks versus open-ended questions"]],
  ["B","Construct and interpret displays with many-to-one scales",["Use a given many-to-one scale in column graphs","Use spreadsheets to create column graphs with vertical axes in multiples: each interval represents 2 families","Interpret and evaluate displays in media and factual texts using many-to-one scales"]]
 ],
 know:[
  ["Types of data (for teachers)","Categorical data can be separated into groups (colour). Discrete numerical data is counted in whole numbers (the number of students in a class). Continuous numerical data is measured (height). Stage 2 focuses on discrete data; students needn’t classify data types."],
  ["Column graphs, not bar graphs","Column graphs have vertical columns or horizontal bars, and the columns aren’t joined because they represent distinct categories. ‘Bar graph’ is reserved for divided bar graphs. A simple table of counts is often the best display for categorical data."],
  ["Dot plots","A dot plot is an alternative to a column graph when there are only a small number of data values. Each value is a dot, so frequencies are easy to count. Dot stickers and graphing software help."],
  ["Here, hidden, beyond","Move from what is in the data (‘here’) to what can be inferred (‘hidden’): ‘most family names had fewer than 7 letters’. Then ask, ‘Would this be the same in a different class?’ Tying evidence to conclusions needs practice (Makar 2016)."],
  ["Equal interval scales","The separation between 1 and 2 must equal that between 29 and 30, as on a ruler (Bell and Janvier 1981)."],
  ["When to use many-to-one","A dataset needs enough data points to warrant a many-to-one scale. A range of 1 to 5 doesn’t need one; values from 1 to 83 typically would."]
 ],
 misc:[
  {see:"Reads a column reaching the third gridline as 3, when each interval represents 2.",name:"Reading a many-to-one scale as one-to-one",resp:"Read the scale before the columns. Ask, <i>What does each interval stand for?</i>",src:"a"},
  {see:"Draws the columns of a column graph touching each other.",name:"Joining columns",resp:"Columns represent distinct categories, so they aren’t joined.",src:"n"},
  {see:"Marks the vertical axis 0, 1, 2, 5, 10 to fit the data.",name:"Unequal intervals",resp:"Relate the axis to a ruler: the gap between each pair of numbers must be the same.",src:"n"},
  {see:"Concludes that “everyone” prefers soccer from one class’s data.",name:"Generalising beyond the data",resp:"Ask, <i>Do you think this would be the same in a different class? Why?</i>",src:"n"},
  {see:"Asks “What playground game do you like?” and gets too many different answers to graph.",name:"Survey questions not refined",resp:"Trial the question with a small group, then narrow it or provide categories.",src:"n"},
  {see:"Calls a column graph with horizontal bars a “bar graph”.",name:"Bar graph and column graph",resp:"NESA reserves ‘bar graph’ for divided bar graphs.",src:"n"}
 ],
 advice:["Use data from the internet, newspapers and magazines as well as observations, surveys, votes and questionnaires.","Consider tables and graphs in real-world contexts, noting that graphs are often used to persuade.","Use dot stickers or graphing software for dot plots.","Ask ‘here’, ‘hidden’ and ‘beyond’ questions to build inference.","Keep surveys short with a clear purpose; trial and redraft questions.","Use matching cards of statements and graphs to model sentence structures."],
 vocab:["data","collect","survey","recording sheet","rating scale","category","display","symbol","tally mark","list","table","column graph","dot plot","vertical columns","horizontal bars","scale","equal spacing","title","key","vertical axis","horizontal axis","axes","spreadsheet","misleading"],
 check:{title:"Quick checks (built from the syllabus examples and NESA advice)",steps:["Give a small dataset (number of pets). Ask the student to show it in a table, a dot plot and a column graph. Ask, <i>What does each display make easy to see?</i> Try the tool below.","Show a column graph where each interval represents 2. Ask, <i>How many families have 1 pet?</i>","Ask, <i>What does this graph tell us? What can you work out that isn’t written? Would it be the same in another class?</i>","Ask the student to refine the question ‘What is the most popular playground game?’"]},
 tool:"displays",
 quiz:[
  {q:"Why shouldn’t the columns in a column graph be joined?",o:["To save space","They represent distinct categories","It looks neater","They are continuous data"],a:1,why:"Joined bars suggest continuous data."},
  {q:"When is a many-to-one scale warranted?",o:["Always","When the dataset has enough data points, such as values from 1 to 83","When values range from 1 to 5","Only in Stage 4"],a:1,why:"A narrow range doesn’t need one."},
  {q:"Which question moves students ‘beyond’ the data?",o:["How many students have 2 pets?","Most students have fewer than 3 pets.","Do you think this would be the same in a different class?","What is the title?"],a:2,why:"‘Here’ is what is shown; ‘hidden’ is inferred; ‘beyond’ considers other contexts (Makar 2016)."}
 ]
},
s3:{
 lead:"In Years 5 and 6, students collect categorical and numerical data, choose appropriate displays and scales, and construct column graphs and timelines with many-to-one scales. They interpret line graphs and side-by-side column graphs, describe distributions using range and mode, and identify bias and misleading displays.",
 outcomes:[["MA3-DATA-01","constructs graphs using many-to-one scales"],["MA3-DATA-02","interprets data displays, including timelines and line graphs"]],
 content:[
  ["A","Collect categorical and discrete numerical data",["Pose and refine survey questions, including rating scales of 1 to 5","Collect ordinal or nominal categorical data, and discrete numerical data: insects in one square metre each day; temperature of an insulated container over time"]],
  ["A","Choose and use appropriate tables and graphs",["Tabulate data with and without spreadsheets","Recognise which displays suit the data: a column graph for cinema ticket prices; a line graph for a plant’s growth over time (Statistical reasoning)","Determine appropriate horizontal and vertical scales","Construct column graphs with many-to-one scales","Draw timelines with a many-to-one scale: 1 cm = 10 years"]],
  ["A","Describe and interpret datasets in context",["Interpret line graphs using the scales: pulse rate after exercise; maximum and minimum temperatures","Interpret tables, column graphs and line graphs, including seasonal data from Aboriginal calendars","Determine the total number of data values in a column graph"]],
  ["B","Interpret and compare a range of displays",["Interpret side-by-side column graphs for 2 categorical variables: favourite subjects in 5A and 5B","Interpret data on a timeline using the given scale","Compare displays by the shape of the distribution, the range and the mode: temperatures in Bathurst and Darwin"]],
  ["B","Interpret data in digital media and elsewhere",["Interpret data in digital media and factual texts","Identify sources of possible bias: who paid for the data, whether it is an advertisement (Statistical reasoning)","Identify misleading representations: broken axes, graphics not drawn to scale"]]
 ],
 know:[
  ["Types of data","Categorical (colour); ordinal categorical, where the order is clear but not the distance (first, second, third); numerical, either counted (discrete) or measured (continuous). Column graphs suit discrete data but not continuous data."],
  ["Line graphs","Line graphs suit data where points between plotted values have meaning, such as temperature over time. They shouldn’t be used for discrete or categorical data."],
  ["Many-to-one scales","One unit represents more than one of what is counted or measured: 1 cm on the axis might represent 20 cm of height."],
  ["Displays highlight and hide","Different representations of the same data highlight or obscure different features. 3D charts are misleading because of their slanting perspective and are best avoided."],
  ["Describing distributions","Describe how spread out the data is (range), where most of it is (mode), and whether it is clustered. Median and mean come in Stage 4."],
  ["Bias","In statistics, bias means being unrepresentative of the population. Selection bias: asking only your friends. Data can present a biased view if it isn’t representative or is poorly displayed."]
 ],
 misc:[
  {see:"Says Brand A batteries last 3 times as long, from a graph whose vertical axis starts at 40.",name:"Misled by a broken axis",resp:"Read the values. Redraw from zero. Try the axis tool below.",src:"n"},
  {see:"Draws a line graph of favourite fruits.",name:"Line graph for categorical data",resp:"Points between categories have no meaning. Use a column graph or table.",src:"n"},
  {see:"Surveys only their friends and concludes the whole school prefers basketball.",name:"Selection bias",resp:"Ask who was surveyed and who was left out. Would a different group give different results?",src:"n"},
  {see:"Thinks a 3D pie chart shows the front slice is biggest.",name:"3D perspective",resp:"Compare the values. NESA advises avoiding 3D charts because the slanting perspective misleads.",src:"n"},
  {see:"Reads the height of the tallest column as the total number of students in the class.",name:"Totals from a column graph",resp:"Add the values of every column to find the number of data values.",src:"a"},
  {see:"Describes the data as “mostly 4” when 4 is the highest value, not the most frequent.",name:"Mode confused with maximum",resp:"The mode is the most frequent value. Find the tallest column in a dot plot or column graph of the values.",src:"a"}
 ],
 advice:["Use census data, environmental audits of water and energy, and sports statistics.","Discuss whether data is clustered, its range and its mode.","Discuss who created or paid for data and whether a display is part of an advertisement.","Avoid 3D charts; discuss why they mislead.","Match the display to the data: column graphs for discrete data, line graphs for change over time.","Interpret seasonal data from Aboriginal calendars."],
 vocab:["axes","bias","category","collect","column graph","side-by-side column graph","data","display","equal spacing","horizontal axis","vertical axis","line graph","misleading","range","mode","scale","spreadsheet","survey","table","two-way table","tabulate","timeline","title"],
 check:{title:"Quick checks (built from the syllabus examples and NESA advice)",steps:["Show an advertisement’s graph with a broken axis. Ask, <i>What does this graph suggest? Is it fair? Why?</i> Try the axis tool below.","Ask, <i>Would you use a column graph or a line graph for cinema ticket prices? For a plant’s growth?</i>","Show a side-by-side column graph of favourite subjects in 5A and 5B. Ask, <i>What is the same and what is different about the two classes?</i>","Ask, <i>If you only asked your friends, would your results represent the whole school?</i>"]},
 tool:"axis",
 quiz:[
  {q:"When is a line graph appropriate?",o:["For favourite colours","When points between plotted values have meaning, such as temperature over time","For any data","For discrete data"],a:1,why:"Line graphs shouldn’t be used for discrete or categorical data."},
  {q:"What does bias mean in statistics?",o:["A personal opinion","Being unrepresentative of the population","A wrong calculation","A broken axis"],a:1,why:"Selection bias, such as asking only your friends, is a common source."},
  {q:"Which measures describe a distribution in Stage 3?",o:["Mean and median","Range and mode","Standard deviation","Quartiles"],a:1,why:"Median and mean come in Stage 4."}
 ]
}
};

var IDEAS = [
 {t:"Data answers a question",d:"Investigations start with a question worth asking, and questions are refined.",s:{es1:"Predicting and answering questions about the class.",s1:"Questions whose answers form categories.",s2:"Surveys trialled and refined.",s3:"Rating scales; ordinal and numerical data."}},
 {t:"Collecting and organising data",d:"Methods of collecting and recording make data countable.",s:{es1:"Objects grouped by characteristics.",s1:"Tally marks, lists and tables.",s2:"Recording sheets; comparing collection methods.",s3:"Tabulating with spreadsheets."}},
 {t:"A display represents data",d:"Each symbol, dot, column or point represents data according to a scale.",s:{es1:"Objects as data.",s1:"One-to-one picture graphs.",s2:"Column graphs and dot plots; many-to-one scales.",s3:"Line graphs and timelines."}},
 {t:"Choose the display to suit the data",d:"Different displays highlight or obscure different features.",s:{es1:"Lining objects up.",s1:"Baseline, equal spacing, same-sized symbols.",s2:"The same data in more than one display.",s3:"Column graphs for discrete data; line graphs for change over time."}},
 {t:"Interpret: here, hidden, beyond",d:"From what the data shows, to what it implies, to other contexts.",s:{es1:"Which has the most? How many?",s1:"More than, less than; biggest and smallest.",s2:"Inference; data used to make decisions.",s3:"Range, mode and the shape of a distribution."}},
 {t:"Be a critical reader of data",d:"Displays can mislead, and data can be biased.",s:{es1:"Comparing groups by counting, not by looks.",s1:"Why some picture graphs are misleading.",s2:"Evaluating many-to-one displays in the media.",s3:"Bias, broken axes and graphics not to scale."}}
];

var ASPECTS = [
 {k:"o",l:"Outcomes",v:{es1:"<b>MAE-DATA-01</b> contributes to collecting data and interprets data displays made from objects",s1:"<b>MA1-DATA-01</b> gathers and organises data, displays data in lists, tables and picture graphs<br><b>MA1-DATA-02</b> reasons about representations of data to describe and interpret the results",s2:"<b>MA2-DATA-01</b> collects discrete data and constructs graphs using a given scale<br><b>MA2-DATA-02</b> interprets data in tables, dot plots and column graphs",s3:"<b>MA3-DATA-01</b> constructs graphs using many-to-one scales<br><b>MA3-DATA-02</b> interprets data displays, including timelines and line graphs"}},
 {k:"c",l:"Collecting",v:{es1:"With teacher assistance; about themselves and the environment",s1:"Questions with categories; tally marks",s2:"Surveys and recording sheets, trialled and refined",s3:"Surveys with rating scales; observations over time"}},
 {k:"d",l:"Displays",v:{es1:"Objects arranged by characteristic",s1:"Lists, tables, picture graphs",s2:"Tally tables, column graphs, dot plots; many-to-one scales",s3:"Column graphs, line graphs, timelines, side-by-side column graphs"}},
 {k:"i",l:"Interpreting",v:{es1:"Comparing groups by counting",s1:"More than, less than; misleading picture graphs",s2:"Comparing displays; data for decisions; media",s3:"Range, mode, distribution; bias; misleading media"}},
 {k:"l",l:"Language",v:{es1:"information, collect, group, display, objects",s1:"data, symbol, tally mark, picture graph",s2:"survey, category, column graph, dot plot, axes, scale, key",s3:"line graph, timeline, range, mode, bias, misleading"}}
];

var MODELS = [
 {n:"Real objects as data",w:"blocks, counters, collected items",s:0,e:1,d:"Grouping and arranging objects into displays; real objects and photos support students who find abstract displays hard."},
 {n:"Lines of objects on a baseline",w:"one-to-one comparison",s:0,e:1,d:"Lining groups up from a common starting point makes comparisons easier."},
 {n:"Tally marks",w:"in fives",s:1,e:2,d:"Recording observations efficiently; other systems such as 正."},
 {n:"Grid paper",w:"colouring squares",s:1,e:2,d:"Recording data and keeping symbols equally spaced."},
 {n:"Picture graphs",w:"baseline, spacing, same-sized symbols",s:1,e:1,d:"One-to-one displays and why some are misleading."},
 {n:"Tables and lists",w:"organising data",s:1,e:3,d:"Lists and tables in Stage 1; tally tables in Stage 2; tabulating with spreadsheets and two-way tables in Stage 3."},
 {n:"Column graphs",w:"scale of one, then many-to-one",s:2,e:3,hi:true,d:"Columns not joined; equal intervals; many-to-one scales; side-by-side column graphs in Stage 3."},
 {n:"Dot plots",w:"dot stickers, software",s:2,e:2,d:"For small numbers of data values; frequencies easy to count."},
 {n:"Spreadsheets and graphing software",w:"virtual environments",s:2,e:3,d:"Creating column graphs with multiples on axes; manipulating dot plots; tabulating data."},
 {n:"Line graphs",w:"change over time",s:3,e:3,d:"Pulse rates, temperatures and plant growth, where points between readings have meaning."},
 {n:"Timelines",w:"1 cm = 10 years",s:3,e:3,d:"Many-to-one scales for events over time; unscaled timelines link to elapsed time."},
 {n:"Media and factual texts",w:"advertisements, news, census",s:2,e:3,d:"Evaluating many-to-one displays in Stage 2; identifying bias and misleading displays in Stage 3."}
];

var ROOTS = ["Comparing by appearance, not by count or scale","Ignoring the scale or key","A display that doesn’t suit the data","Conclusions not tied to how data was collected"];
var SCENARIOS = [
 {st:"es1",q:"Ava says the red group has more because its row of blocks is longer, though the blocks are spread out.",a:0,why:"Ava compares by length, not by count. Count and line them up."},
 {st:"es1",q:"Noah predicts the whole class will choose blue because blue is his favourite.",a:3,why:"Personal preferences influence predictions. Collect the data and compare."},
 {st:"s1",q:"Mia says bananas are most popular because the banana pictures stretch furthest, though they are bigger pictures.",a:0,why:"Symbols must be the same size. Count the symbols."},
 {st:"s1",q:"Leo spaces his apple symbols wider than his orange symbols and doesn’t notice the problem.",a:1,why:"Unequal spacing misleads. Use grid paper."},
 {st:"s1",q:"Grace asks “What do you do at lunch?” and can’t sort the answers into a graph.",a:3,why:"Pose questions whose answers form categories."},
 {st:"s2",q:"Ben reads a column on a scale where each interval is 2 families as “3 families” because it reaches the third line.",a:1,why:"Ben reads a many-to-one scale as one-to-one. Read the scale first."},
 {st:"s2",q:"Ella draws a column graph of favourite sports with all the columns touching.",a:2,why:"Columns represent distinct categories, so they aren’t joined."},
 {st:"s2",q:"Josh says everyone in Australia prefers soccer, based on his class survey.",a:3,why:"Josh generalises beyond the data. Ask whether another class would be the same."},
 {st:"s3",q:"Kai says Brand A lasts 3 times as long, from a graph whose axis starts at 40.",a:0,why:"A broken axis exaggerates differences. Read the values."},
 {st:"s3",q:"Ruby draws a line graph of favourite fruits.",a:2,why:"Line graphs suit change over time, not categories."},
 {st:"s3",q:"Jai surveys only his friends and concludes the school prefers basketball.",a:3,why:"Selection bias: the sample isn’t representative."},
 {st:"s3",q:"Lily misreads a timeline where 1 cm = 10 years, saying two events 3 cm apart were 3 years apart.",a:1,why:"Lily ignores the many-to-one scale: 3 cm represents 30 years."}
];

var PROMPTS = [
 ["Looking across the progression","Which of the six big ideas does your stage depend on most? Which earlier stage is it built on?"],
 ["Looking across the progression","How could ‘here, hidden, beyond’ questions be used consistently from Kindergarten to Year 6?"],
 ["Looking across the progression","Where could your students collect authentic data from other learning areas, such as Science and Technology, HSIE or PDHPE?"],
 ["Your students","Run the quick check for your stage with three students: one secure, one you’re unsure of and one who is struggling. What did you learn that you didn’t expect?"],
 ["Your students","Which root misconception do you see most often? Where in the earlier stages might it have started?"],
 ["Your students","Which of your students might prefer collecting data through observation or conversation rather than questioning?"],
 ["Your practice","How often do your students create their own questions, rather than graphing data you provide?"],
 ["Your practice","How often do your students critique graphs from the media or advertisements?"],
 ["Your practice","Are your data displays accessible: strong colour contrast, alternative text, captions?"]
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
  tags:[["Compare the sizes of groups of objects by counting","Reasons about relations"],["Interpret information presented in a data display to answer questions","Reasons about quantity"]],
  before:{task:"Count the red blocks. Count the blue blocks.<br><br>Red: ___ Blue: ___",lim:["No question to investigate","No sorting or display","No comparing or explaining"]},
  after:{task:"“What do you think is the favourite fruit in our class? Let’s each put a block on the fruit we like best. Which has the most? How do you know? How many more?”",enable:"Use only two fruits and real objects.",extend:"“If we asked another class, would we get the same result? Why?”",listen:"Predicting and checking; lining up blocks to compare; ‘3 more’; ‘it could be different’.",el:["Exploring and connecting","Communicating","Reasoning"]}
 },
 s1:{
  tags:[["Describe information presented in one-to-one data displays","Reasons about relations"],["Give reasons why some representations of data are misleading","Reasons about relations"],["Interpret information presented in tables and picture graphs","Reasons about relations"]],
  before:{task:"Colour one square for each child.<br><br>(a given grid of favourite pets)",lim:["Question and categories are given","No choices about the display","No interpreting or critiquing"]},
  after:{task:"“Sam made this picture graph of our favourite pets. Sam says dogs are most popular. Is Sam’s graph fair? How would you fix it?” (The dog symbols are bigger and more widely spaced.)",enable:"Provide cut-out same-sized symbols and grid paper.",extend:"“Make a graph that makes cats look most popular, then explain why it’s misleading.”",listen:"Baseline, equal spacing, same-sized symbols; counting rather than looking; ‘one picture is one person’.",el:["Exploring and connecting","Communicating","Reasoning"]}
 },
 s2:{
  tags:[["Represent the same dataset using more than one type of display and compare the displays","Statistical reasoning"]],
  before:{task:"Draw a column graph of this data.<br><br>(a table of pets: 0, 1, 2, 3, 4)",lim:["One display, chosen by the teacher","No comparison of displays","No inference beyond the data"]},
  after:{task:"“Show our pets data in a table, a dot plot and a column graph. What does each display make easy to see? Which would you choose to convince the principal we need a pet day? Why?”",enable:"Provide a partly drawn dot plot and graph paper.",extend:"“Would this data be the same in a Year 6 class? What might be different?”",listen:"‘The dot plot shows each value’; ‘the table is quickest to read’; ‘most of us have 1 or 2 pets’ (hidden); ‘another class might…’ (beyond).",el:["Exploring and connecting","Choosing and applying techniques","Communicating","Reasoning"]}
 },
 s3:{
  tags:[["Recognise which types of data display are appropriate to represent data","Statistical reasoning"],["Identify sources of possible bias in representations of data in the media","Statistical reasoning"]],
  before:{task:"Read the graph. How many hours does Brand A last?<br><br>(a column graph of battery life)",lim:["Reading one value","The axis and source aren’t questioned","No reasoning about the display"]},
  after:{task:"“This advertisement says Brand A lasts much longer. Who made the graph? What do you notice about the vertical axis? Redraw it fairly and write a headline for each version.”",enable:"Provide the values in a table and graph paper with the axis from zero.",extend:"“Find a graph in the media. Is it misleading or biased? How do you know?”",listen:"‘The axis starts at 40’; ‘it’s an advertisement’; redrawing from zero; differences are much smaller than they look.",el:["Exploring and connecting","Choosing and applying techniques","Communicating","Reasoning"]}
 }
};

var CLOSED = [
 {st:"s1",task:"How many children chose apples? (a picture graph)",moves:[
  {m:"Who is correct?",t:"“Ari says bananas are most popular because that row is longest. Bea counted and says apples. Who is correct? Why?”",el:["Reasoning","Communicating"]},
  {m:"Same and different",t:"“What is the same and what is different about our tally table and our picture graph?”",el:["Exploring and connecting","Communicating"]},
  {m:"Always, sometimes, never",t:"“The longest row in a picture graph shows the most. Always, sometimes or never true?”",el:["Reasoning","Exploring and connecting"]},
  {m:"Open it up",t:"“Make a picture graph where 6 children chose apples. What could the other rows be?”",el:["Choosing and applying techniques","Reasoning"]},
  {m:"Convince me",t:"“Convince me that this picture graph is fair.”",el:["Understanding and fluency","Communicating"]}
 ]},
 {st:"s2",task:"Draw a column graph of the pets data.",moves:[
  {m:"Who is correct?",t:"“Tom says each line on the graph is 1 family. Mei says each line is 2 families. How can you tell who is correct?”",el:["Reasoning","Communicating"]},
  {m:"Same and different",t:"“What is the same and what is different about a dot plot and a column graph of the same data?”",el:["Exploring and connecting","Communicating"]},
  {m:"Always, sometimes, never",t:"“A many-to-one scale makes a graph easier to read. Always, sometimes or never true?”",el:["Reasoning","Exploring and connecting"]},
  {m:"Open it up",t:"“Write three questions that can be answered from this graph: one ‘here’, one ‘hidden’ and one ‘beyond’.”",el:["Choosing and applying techniques","Reasoning"]},
  {m:"Convince me",t:"“Convince me that the columns shouldn’t touch.”",el:["Understanding and fluency","Communicating"]}
 ]},
 {st:"s3",task:"Read the temperature at 2 pm from the line graph.",moves:[
  {m:"Who is correct?",t:"“Kai says a line graph would be best for favourite fruits. Jess says a column graph. Who is correct? Why?”",el:["Reasoning","Communicating"]},
  {m:"Same and different",t:"“What is the same and what is different about the Bathurst and Darwin temperature graphs?”",el:["Exploring and connecting","Communicating"]},
  {m:"Always, sometimes, never",t:"“A graph from an advertisement is biased. Always, sometimes or never true?”",el:["Reasoning","Exploring and connecting"]},
  {m:"Open it up",t:"“Make a graph of the same data that tells a different story. Explain what you changed.”",el:["Choosing and applying techniques","Reasoning"]},
  {m:"Convince me",t:"“Convince me that it makes sense to read values between the plotted points on this graph.”",el:["Understanding and fluency","Communicating"]}
 ]}
];
