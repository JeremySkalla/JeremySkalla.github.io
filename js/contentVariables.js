let aboutHeader = "Who Am I?";

let workHeader1 = "ActiFi";
let workHeader2 = "temp1"
let workHeader3 = "temp2"

let firstButtons = `<button class="bottom" onclick="nextPage()">Next</button>`;
let middleButtons = `<button class="bottom" onclick="prevPage()">Prev</button>
<button class="bottom" onclick="nextPage()">Next</button>`;
let lastButtons = `<button class="bottom" onclick="prevPage()">Prev</button>`;

let aboutContent = `Hello! I'm Jeremy Skalla, and I'm a 21 year old Computer Science Major at the <span style="color:#7a0019">University</span> of 
<span style="color:#ffcc33">Minnesota</span>. I have experience in <span style="color:#306998">Python</span>, 
<span style="color:#5c6bc0">C</span>, <span style="color:#004283">C++</span>, 
<span style="color:#f89820">Java</span>, <span style="color:#F0DB4F">Javascript</span>, and more. 
Let's move on from coding talk, and I'll tell you about some of my other passions and my background.<br><br>
I grew up in Dallas and moved to Minnesota at age 5. I'm a huge fan of playing and watching basketball, 
especially watching the <span style="color:#00538C">Dallas Mavericks</span>. I'm also a huge soccer fan, 
and I'm a season ticket holder for <span style="color:#9BCDE4">Minnesota United</span>. I love discussing music,
and my favorite albums of all time are <span style="color:#313733">Rodeo</span> by Travis Scott, 
<span style="color:#ce1e35">My Beautiful Dark Twisted Fantasy</span> by Kanye West, and 
<span style="color:#dcd1b3">What's the Story Morning Glory</span> by Oasis. Poker is one of my favorite past-times,
and I love trivia. Lastly, I'm super heavily involved in esports, as you can see by my projects, 
especially Super Smash Brothers Melee.`;

let projectsContent1 = `<a href="https://github.com/JeremySkalla/pysmashgg" style="color:#6E5494">Pysmashgg</a> is a simple wrapper for 
<a href="https://smash.gg/" style="color:#cb333b">smash.gg's</a> 
API that takes inspiration from older wrappers, but it useds the GraphQL API instead of the older, 
slower one. It has over 16,000 downloads on PyPI and Github. I started this project in December 2020 over  
winter break. I had wanted to learn about APIs, since I hadn't learned much in school, and I was 
passionate about esports. I looked for wrappers at first, but all that existed were out of date ones 
or poorly written/documented ones. So, pysmashgg was born.<br><br>

This was written all in <span style="color:#306998">Python</span>. I organized the files in 
the github, as well as created detailed documentation about how to use the wrapper. One of my biggest goals 
with this project was to help other newer coders understand how the API works. It was pretty cool getting 
people telling me that my program helped them. I continue to work on it,
as I've needed it for another one of my projects, JUMS.`;

let projectsHeaderArr = ["<a href=\"https://github.com/JeremySkalla/pysmashgg\">Pysmashgg</a>", 
                        "This Website", "JUMS", "Discord Queue Bot"];
let projectsH2Arr = ["December 2020-Current", "February 2022-Current", "December 2021-Current", "January 2021-March 2021"]
let projectsContentArr = [projectsContent1, "TODO", "TODO", "TODO"];

let workContent1 = `I worked at <span style="color:#216093">ActiFi</span> as a summer intern between April 2021-September 2021. 
During this time, I had many roles. I tested and documented their SuccessPro software for implementation 
of new features. Along with this, I gave feedback to the company on the new features. I edited training 
video of SuccessPro for new employees at the company, as well as video of the software being used in action.  
This was also my first time getting experience in Salesforce, where I created and implemented plugins.<br><br>

On the less technical side of things, I attended meetings with the CEO and other members of the company, 
discussing plans for growth in the future. During these meetings, I took notes and created a glossary, both 
for the use of new employees. This was put into action when they hired a new member to the Sales team that summer.`

let workHeaderArr = ["ActiFi", "Grinning Goat Gaming", "Culver's"];
let workH2Arr = ["April-August 2021", "November 2015-October 2018", "April-September 2017"];
let workContentArr = [workContent1, "TODO", "TODO"];