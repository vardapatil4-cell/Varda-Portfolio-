"use strict";
const PHOTO="photo.jpg";
const svg=i=>`<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#fff" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${i}</svg>`;
const DATA={
  name:"Varda Pravin Patil",
  roles:["Fullstack Web Developer","BCA Graduate","Open to Work"],
  summary:"Motivated and hardworking developer who enjoys building simple, meaningful web solutions. Seeking an entry-level role or internship in IT.",
  about:["I am a BCA graduate (2026) from R.C. Patel ACS College, Shirpur, with a CGPA of 9.07 and a strong interest in web development and programming.","I work across the stack, from React.js and JavaScript on the front end to Node.js, Java and MySQL on the back end. My goal is to start my career in the IT industry and grow while contributing to meaningful projects."],
  traits:[["Problem Solver","Analytical approach to challenges."],["Quick Learner","Adapts fast to new technologies."],["Detail Oriented","Careful testing and debugging."],["Team Player","Values collaboration and communication."]],
  skills:[
    {n:"React.js",g:"Frontend",bg:"#20232a",s:svg('<circle cx="12" cy="12" r="1.6" fill="#61dafb" stroke="none"/><ellipse cx="12" cy="12" rx="9" ry="3.6" stroke="#61dafb"/><ellipse cx="12" cy="12" rx="9" ry="3.6" stroke="#61dafb" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="9" ry="3.6" stroke="#61dafb" transform="rotate(120 12 12)"/>')},
    {n:"JavaScript (ES6)",g:"Frontend",bg:"#f7df1e",fg:"#222",t:"JS"},
    {n:"HTML5",g:"Frontend",bg:"#e44d26",t:"5"},
    {n:"CSS3",g:"Frontend",bg:"#1572b6",t:"3"},
    {n:"Bootstrap",g:"Frontend",bg:"#7952b3",t:"B"},
    {n:"Responsive Web Design",g:"Frontend",bg:"#1f6feb",s:svg('<rect x="2" y="4" width="14" height="10" rx="1.5"/><path d="M6 18h6M9 14v4"/><rect x="15" y="9" width="7" height="11" rx="1.5"/>')},
    {n:"Node.js",g:"Backend",bg:"#3c873a",t:"N"},
    {n:"Java",g:"Backend",bg:"#e76f00",t:"J"},
    {n:"Python (Basic)",g:"Backend",bg:"#3776ab",t:"Py"},
    {n:"MySQL",g:"Database",bg:"#00758f",s:svg('<ellipse cx="12" cy="6" rx="7" ry="3"/><path d="M5 6v6c0 1.7 3.1 3 7 3s7-1.3 7-3V6M5 12v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6"/>')},
    {n:"Git",g:"Tools",bg:"#f05032",s:svg('<circle cx="6" cy="5" r="2"/><circle cx="6" cy="19" r="2"/><circle cx="18" cy="9" r="2"/><path d="M6 7v10M18 11c0 4-6 3-12 6"/>')},
    {n:"GitHub",g:"Tools",bg:"#333",t:"GH"},
    {n:"VS Code",g:"Tools",bg:"#007acc",s:svg('<path d="M17 3l4 2v14l-4 2L8 13l-4 3-1-1V9l1-1 4 3 9-8zM17 8l-5 4 5 4V8z"/>')},
    {n:"Postman",g:"Tools",bg:"#ff6c37",t:"P"}
  ],
  project:{title:"Hospital Management System",stack:["HTML","CSS","Java","MySQL"],points:["Academic project with modules for patient registration, doctor management, appointment scheduling and record maintenance.","Implemented database operations to store and retrieve patient information efficiently.","Strengthened understanding of software development, database management and problem solving."]},
  education:[["2026","Bachelor of Computer Applications (BCA)","R.C. Patel ACS College, Shirpur · CGPA 9.07"],["2023","Higher Secondary (12th)","Nutan Jr. Science College, Dondaicha · 72.50%"],["2021","Secondary (10th)","C.D.O Meri English Medium School, Nashik · 68.20%"]],
  certs:[["Power BI","Certification"],["Skilldunia Career Guidance","Webinar"]],
  contact:{email:"vardapatil4@gmail.com",phone:"+918329762603",phoneShown:"+91 83297 62603",linkedin:"https://www.linkedin.com/in/varda-patil-050547358",place:"Dondaicha, Maharashtra"}
};

const $=(s,r=document)=>r.querySelector(s);
const h=(tag,props={},...kids)=>{const e=document.createElement(tag);
  for(const[k,v]of Object.entries(props)){if(k==="class")e.className=v;else if(k==="html")e.innerHTML=v;else if(k.startsWith("on"))e.addEventListener(k.slice(2),v);else e.setAttribute(k,v);}
  kids.flat().forEach(c=>e.append(c&&c.nodeType?c:document.createTextNode(c==null?"":c)));return e;};
let secNo=0;const section=(id,title,...body)=>h("section",{id,class:"reveal"},h("h2",{},h("span",{class:"num"},String(++secNo).padStart(2,"0")),title),...body);
const reduced=matchMedia("(prefers-reduced-motion: reduce)").matches;
const store={get(k){try{return localStorage.getItem(k)}catch(e){return null}},set(k,v){try{localStorage.setItem(k,v)}catch(e){}}};

const icon=s=>{const i=h("i",{class:"ic",style:`background:${s.bg};color:${s.fg||"#fff"};font-size:${(s.t||"").length>1?13:16}px`});
  if(s.s)i.innerHTML=s.s;else i.textContent=s.t;return i;};

const NAV=[["home","Home"],["about","About"],["skills","Skills"],["projects","Projects"],["education","Education"],["resume","Resume"],["contact","Contact"]];

function Header(){
  const theme=h("button",{class:"icon-btn","aria-label":"Toggle light or dark theme",title:"Toggle theme"},"◐");
  theme.addEventListener("click",()=>{const r=document.documentElement,dark=r.dataset.theme?r.dataset.theme==="dark":matchMedia("(prefers-color-scheme: dark)").matches;
    r.dataset.theme=dark?"light":"dark";store.set("theme",r.dataset.theme);});
  return h("header",{},h("div",{class:"wrap"},h("nav",{},h("a",{class:"logo",href:"#home"},"Varda Patil"),
    h("ul",{},NAV.map(([id,l])=>h("li",{},h("a",{href:"#"+id,"data-id":id},l)))),theme)));
}

function Hero(){
  const role=h("div",{class:"role","aria-live":"off"},DATA.roles[0]);
  if(!reduced){let r=0,c=DATA.roles[0].length,del=true;
    const tick=()=>{const w=DATA.roles[r];
      if(del){c--;if(c<=0){del=false;r=(r+1)%DATA.roles.length;}}else{c++;if(c>=DATA.roles[r].length){del=true;role.textContent=DATA.roles[r];return setTimeout(tick,1800);}}
      role.textContent=DATA.roles[r].slice(0,Math.max(c,0));setTimeout(tick,del?40:70);};
    setTimeout(tick,1800);}
  return h("div",{class:"wrap"},h("div",{class:"hero",id:"home"},
    h("div",{},h("div",{class:"muted"},"Hello, I'm"),h("h1",{},DATA.name),role,h("p",{class:"muted"},DATA.summary),
      h("div",{class:"btns"},h("a",{class:"btn fill",href:"#projects"},"View My Projects"),h("a",{class:"btn",href:"#contact"},"Contact Me"))),
    h("figure",{class:"photo"},h("img",{alt:"Varda Patil",src:PHOTO}))));
}

function Stats(){
  const items=[[9.07,"CGPA in BCA",2],[DATA.skills.length,"Technical skills",0],[1,"Project",0],[DATA.certs.length,"Certifications",0]];
  const wrap=h("div",{class:"wrap"},h("div",{class:"stats reveal"},items.map(([v,l,d])=>{
    const b=h("b",{"data-v":v,"data-d":d},reduced?v.toFixed(d):(0).toFixed(d));return h("div",{class:"card stat"},b,h("span",{},l));})));
  return wrap;
}
function countUp(el){const v=+el.dataset.v,d=+el.dataset.d,t0=performance.now();
  const f=t=>{const p=Math.min((t-t0)/900,1);el.textContent=(v*p).toFixed(d);if(p<1)requestAnimationFrame(f);};requestAnimationFrame(f);}

function About(){
  return h("div",{class:"wrap"},section("about","About Me",h("div",{class:"grid2"},
    h("div",{},DATA.about.map(t=>h("p",{class:"muted"},t))),
    h("div",{class:"grid2"},DATA.traits.map(([a,b])=>h("div",{class:"card"},h("h3",{},a),h("div",{class:"muted"},b)))))));
}

function Skills(){
  const groups=["All",...new Set(DATA.skills.map(s=>s.g))],list=h("div",{class:"chips"}),tabs=h("div",{class:"tabs",role:"tablist"});
  const draw=g=>{list.replaceChildren(...DATA.skills.filter(s=>g==="All"||s.g===g).map(s=>h("div",{class:"card chip"},icon(s),s.n)));
    [...tabs.children].forEach(b=>b.setAttribute("aria-selected",String(b.textContent===g)));};
  groups.forEach(g=>tabs.append(h("button",{class:"tab",role:"tab",onclick:()=>draw(g)},g)));draw("All");
  return h("div",{class:"wrap"},section("skills","Technical Skills",tabs,list));
}

function Projects(){
  const p=DATA.project;
  return h("div",{class:"wrap"},section("projects","Projects",h("div",{class:"card"},h("h3",{},p.title),
    h("div",{class:"pills"},p.stack.map(s=>h("span",{},s))),h("ul",{class:"list"},p.points.map(t=>h("li",{},t))))));
}

function Education(){
  return h("div",{class:"wrap"},h("div",{class:"grid2"},
    section("education","Education",h("div",{class:"stack"},DATA.education.map(([y,t,s])=>h("div",{class:"card"},h("div",{class:"yr"},y),h("h3",{},t),h("div",{class:"muted"},s))))),
    section("certifications","Certifications",h("div",{class:"stack"},DATA.certs.map(([t,s])=>h("div",{class:"card"},h("h3",{},t),h("div",{class:"muted"},s)))))));
}

function Resume(){
  return h("div",{class:"wrap"},section("resume","Resume",h("div",{class:"center"},h("p",{class:"muted"},"I am a fresher seeking an entry-level role or internship in IT. Download my resume for a full summary of my skills, project and education."),
    h("a",{class:"btn fill",href:"Varda_Patil_Resume.pdf",download:"Varda_Patil_Resume.pdf"},"Download Resume (PDF)"))));
}

function Contact(){
  const c=DATA.contact,status=h("div",{class:"muted",style:"font-size:14px;min-height:20px"});
  const f=h("form",{novalidate:""},h("input",{name:"n",placeholder:"Your name",required:"","aria-label":"Your name"}),h("input",{name:"e",type:"email",placeholder:"Your email",required:"","aria-label":"Your email"}),
    h("textarea",{name:"m",placeholder:"Your message",required:"","aria-label":"Your message"}),h("button",{class:"btn fill",type:"submit"},"Send Message"),status);
  f.addEventListener("submit",ev=>{ev.preventDefault();const v=Object.fromEntries(new FormData(f));
    if(!v.n.trim()||!/^\S+@\S+\.\S+$/.test(v.e)||!v.m.trim()){status.textContent="Please fill in your name, a valid email and a message.";return;}
    const a=h("a",{href:`mailto:${c.email}?subject=${encodeURIComponent("Portfolio message from "+v.n)}&body=${encodeURIComponent(v.m+"\n\n"+v.n+" ("+v.e+")")}`,target:"_blank",rel:"noopener"});
    document.body.append(a);a.click();a.remove();status.textContent="Your email app should open with the message ready to send.";});
  const copy=h("button",{class:"btn",type:"button"},"Copy email");
  copy.addEventListener("click",async()=>{try{await navigator.clipboard.writeText(c.email);copy.textContent="Copied";}catch(e){copy.textContent=c.email;}setTimeout(()=>copy.textContent="Copy email",2500);});
  const row=(k,v)=>h("div",{class:"row"},h("b",{},k),v);
  return h("div",{class:"wrap"},section("contact","Get In Touch",h("div",{class:"grid2"},
    h("div",{},h("p",{class:"muted"},"I'm open to internship and entry-level opportunities. Feel free to reach out!"),
      row("Email",h("a",{href:"mailto:"+c.email},c.email)),row("Phone",h("a",{href:"tel:"+c.phone},c.phoneShown)),
      row("LinkedIn",h("a",{href:c.linkedin,target:"_blank",rel:"noopener"},"varda-patil-050547358")),row("Location",c.place),h("div",{class:"btns"},copy)),f)));
}


function Particles(){
  const c=h("canvas",{id:"bg","aria-hidden":"true"}),x=c.getContext("2d");let w=0,H=0,pts=[],col="#5aa2ff",f=0;const m={x:-999,y:-999};
  const init=()=>{const d=Math.min(devicePixelRatio||1,2);w=innerWidth;H=innerHeight;c.width=w*d;c.height=H*d;x.setTransform(d,0,0,d,0,0);
    pts=Array.from({length:Math.min(70,Math.floor(w*H/16000))},()=>({x:Math.random()*w,y:Math.random()*H,vx:(Math.random()-.5)*.35,vy:(Math.random()-.5)*.35}));};
  const draw=()=>{x.clearRect(0,0,w,H);if(f++%30===0)col=getComputedStyle(document.documentElement).getPropertyValue("--accent").trim()||col;
    x.fillStyle=col;x.strokeStyle=col;
    for(const p of pts){if(!reduced){p.x+=p.vx;p.y+=p.vy;if(p.x<0||p.x>w)p.vx*=-1;if(p.y<0||p.y>H)p.vy*=-1;}
      x.globalAlpha=.55;x.beginPath();x.arc(p.x,p.y,1.8,0,6.283);x.fill();}
    for(let i=0;i<pts.length;i++){for(let j=i+1;j<pts.length;j++){const d=Math.hypot(pts[i].x-pts[j].x,pts[i].y-pts[j].y);
        if(d<130){x.globalAlpha=(1-d/130)*.28;x.beginPath();x.moveTo(pts[i].x,pts[i].y);x.lineTo(pts[j].x,pts[j].y);x.stroke();}}
      const dm=Math.hypot(pts[i].x-m.x,pts[i].y-m.y);if(dm<160){x.globalAlpha=(1-dm/160)*.6;x.beginPath();x.moveTo(pts[i].x,pts[i].y);x.lineTo(m.x,m.y);x.stroke();}}
    if(!reduced&&!document.hidden)requestAnimationFrame(draw);};
  init();draw();
  addEventListener("resize",()=>{init();if(reduced)draw();});
  addEventListener("pointermove",e=>{m.x=e.clientX;m.y=e.clientY;},{passive:true});
  document.addEventListener("visibilitychange",()=>{if(!document.hidden&&!reduced)draw();});
  return c;
}
function tilt(){const p=$(".photo");if(!p||reduced||matchMedia("(hover: none)").matches)return;
  p.addEventListener("pointermove",e=>{const r=p.getBoundingClientRect(),dx=(e.clientX-r.left)/r.width-.5,dy=(e.clientY-r.top)/r.height-.5;
    p.style.transform=`perspective(700px) rotateY(${dx*10}deg) rotateX(${-dy*10}deg)`;});
  p.addEventListener("pointerleave",()=>{p.style.transform="";});}
const app=$("#app");
app.append(Particles(),Header(),h("main",{},Hero(),Stats(),About(),Skills(),Projects(),Education(),Resume(),Contact()),
  h("footer",{},`© ${new Date().getFullYear()} ${DATA.name}. All rights reserved.`),
  h("button",{id:"top",class:"icon-btn","aria-label":"Back to top",onclick:()=>scrollTo({top:0})},"↑"));
tilt();const saved=store.get("theme");if(saved)document.documentElement.dataset.theme=saved;

const links=[...document.querySelectorAll("nav li a")];
const spy=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)links.forEach(l=>l.classList.toggle("on",l.dataset.id===e.target.id));}),{rootMargin:"-45% 0px -50% 0px"});
NAV.forEach(([id])=>{const el=document.getElementById(id);if(el)spy.observe(el);});
const rev=new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting)return;e.target.classList.add("in");e.target.querySelectorAll(".stat b").forEach(b=>reduced||countUp(b));rev.unobserve(e.target);}),{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>rev.observe(el));
addEventListener("scroll",()=>{const d=document.documentElement,p=scrollY/Math.max(d.scrollHeight-innerHeight,1);
  $("#bar").style.width=(p*100)+"%";$("#top").classList.toggle("show",scrollY>600);},{passive:true});
