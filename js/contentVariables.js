let aboutHeader = "Who Am I?";

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

let projectsContent2 = `<a href="https://github.com/JeremySkalla/JeremySkalla.github.io" style="color:#41C300">This Website</a>
was a passion project I started during my time taking CSCI4131 at the University of Minnesota. It was my first real 
introduction to <span style="color:#F0DB4F">Javascript</span>. I had had some experience in 
<span style="color:#E34C26">HTML</span> and <span style="color:#264DE4">CSS</span> from around 
2012 due to blogging, but this was my first time really putting it to good use.<br><br>

I have some background in graphic design, so I immediately put it to use and made a mockup of my idea in 
<span style="color:#FF9C00">Illustrator</span>. After multiple design changes in the mockup, I got to work. 
I decided on having a dark theme and a light theme, as it's something I always want in softwares/websites I use. 
I also decided on having matte-style colors, adhering to Google's Material Design guidelines.`

let projectsContent3 = `<span style="color:#FA8100">JUMS</span> is a project I worked on during winter break of 2021 
after being reached out to by some members of the esports commmunity. 
<span style="color:#8468A3>Super Smash Bros. Melee</span> is an esports scene driven off of stats. Since I had experience 
using the <a href="https://smash.gg/" style="color:#cb333b">smash.gg</a> API, this was a perfect project for me to do
in <span style="color:#306998">Python</span><br><br>

After multiple weeks of sending in queries, I had processed over 500 million lines of esports data that ended 
up being stored in a <span style="color:#DB7533">NoSQL</span> database. When I started to talk 
to esports community members and influencers, there was clearly an interest in my data. I ended up collaborating on 
video and article projects with many of them. I created graphs using <span style="color:#11557C">MatPlotLib</span> and 
detailed spreadsheets using <span style="color:#1D6F42">Excel</span> with over 50,000 cells filled with 
<span style="color:#52218A">VBA</span> being used as well.`

let projectsContent4 = `<a href="https://github.com/JeremySkalla/pysmashgg" style="color:#738ADB">Discord Among Us Queue Bot</a> 
was a project I undertook with another developer, Gowin20. He's a student at UCLA that I met online playing games. 
We ran a server for the popular game <span style="color:#F21717">Among Us</span>, and we needed a way to make a queue. 
Since we were both computer science majors, we decided to make a bot together.<br><br>

This was my first real experience developing with another developer. This was super beneficial, as I learned how to 
develop in parallel and use version control on git. This project was also done in <span style="color:#306998">Python</span>.`

let projectsHeaderArr = ["<a href=\"https://github.com/JeremySkalla/pysmashgg\">Pysmashgg</a>", 
                        "This Website", "JUMS", "Discord Queue Bot"];
let projectsH2Arr = ["December 2020-Current", "February 2022-Current", "December 2021-Current", "January 2021-March 2021"]
let projectsContentArr = [projectsContent1, projectsContent2, projectsContent3, projectsContent4];

let workContent1 = `I worked at <span style="color:#216093">ActiFi</span> as a summer intern between April 2021-September 2021. 
During this time, I had many roles. I tested and documented their SuccessPro software for implementation 
of new features. Along with this, I gave feedback to the company on the new features. I edited training 
video of SuccessPro for new employees at the company, as well as video of the software being used in action.  
This was also my first time getting experience in Salesforce, where I created and implemented plugins.<br><br>

On the less technical side of things, I attended meetings with the CEO and other members of the company, 
discussing plans for growth in the future. During these meetings, I took notes and created a glossary, both 
for the use of new employees. This was put into action when they hired a new member to the Sales team that summer.`

let workContent2 = `<span style="color:#DEBA26">Grinning Goat Gaming</span> was my first long-term job, and my first real 
job in general. I originally was hired in November 2015 after they needed a video editor. I had no experience doing any 
video editing, but was an avid fan of their work. I got the job, and tought myself Sony Vegas Pro. Eventually, 
that transitioned into learning Adobe After Effects and Adobe Premiere Pro.<br><br>

In 2017, the company hired two more editors, who I was put in charge of. I ended up looking over and facilitating the 
editors. This was my first time in a leadership role, as I was only 17 at the time. This was huge for my development in 
terms of learning how to develop relationships with other staff members, especially those I was in charge of. I worked 
around 20 to 25 hours a week while maintaining good grades in High School. I decided to step down when college started.`

let workContent3 = `My local <span style="color:#005599">Culver's</span> was a 10 minute walk away from my house. 
I started this role as a summer job when I was 16/17. I was trained on tons of roles throughout the store in 
order to fufill what ever role they needed me in.<br><br>

This was important for my development as a teenager. I worked up to 35 hours a week during the months that 
I worked there. This also gave me an ability to improve face-to-face customer relationship skills, something 
that I hadn't gotten out of my other job at that point.`

let workHeaderArr = ["ActiFi", "Grinning Goat Gaming", "Culver's"];
let workH2Arr = ["April-August 2021", "November 2015-October 2018", "April-September 2017"];
let workContentArr = [workContent1, workContent2, workContent3];