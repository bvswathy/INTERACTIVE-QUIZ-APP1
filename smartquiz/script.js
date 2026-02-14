const quiz = [
 {q:"HTML stands for?",o:["Hyper Text Markup Language","High Text ML","Hyper Tool","None"],a:0},
 {q:"CSS used for?",o:["Logic","Styling","DB","Server"],a:1},
 {q:"JS runs in?",o:["Browser","CPU","RAM","Compiler"],a:0},
 {q:"Which is backend?",o:["HTML","CSS","Java","Bootstrap"],a:2},
 {q:"<img> tag is for?",o:["Link","Image","Video","Audio"],a:1},
 {q:"Git used for?",o:["Design","Version control","Hosting","IDE"],a:1},
 {q:"JS extension?",o:[".js",".java",".html",".css"],a:0},
 {q:"Which is DB?",o:["HTML","CSS","MySQL","JS"],a:2},
 {q:"DOM stands for?",o:["Document Object Model","Data Obj","Design Obj","None"],a:0},
 {q:"Which is loop?",o:["if","switch","for","case"],a:2},

 {q:"CSS full form?",o:["Creative","Cascading","Computer","Color"],a:1},
 {q:"Frontend lang?",o:["Python","HTML","Java","C"],a:1},
 {q:"JS comment?",o:["//","##","<!--","**"],a:0},
 {q:"OS?",o:["Linux","HTML","CSS","JS"],a:0},
 {q:"Search engine?",o:["Google","VS Code","Git","Node"],a:0},
 {q:"AI field?",o:["ML","HTML","FTP","CSS"],a:0},
 {q:"Mobile OS?",o:["Android","HTML","JS","CSS"],a:0},
 {q:"Which tag link?",o:["<a>","<p>","<h1>","<img>"],a:0},
 {q:"IDE?",o:["VS Code","Chrome","Git","HTML"],a:0},
 {q:"Cloud?",o:["AWS","CSS","JS","HTML"],a:0},

 {q:"JS keyword?",o:["var","int","float","double"],a:0},
 {q:"Framework?",o:["React","HTML","CSS","C"],a:0},
 {q:"Version tool?",o:["Git","Figma","VS","Chrome"],a:0},
 {q:"Web styling?",o:["CSS","JS","Python","SQL"],a:0},
 {q:"Programming lang?",o:["Python","HTML","CSS","XML"],a:0},
 {q:"Server language?",o:["PHP","HTML","CSS","Bootstrap"],a:0},
 {q:"Data type?",o:["String","Loop","Tag","Div"],a:0},
 {q:"Command push?",o:["git push","git pull","git init","git add"],a:0},
 {q:"JS operator?",o:["===","<>","=>","**"],a:0},
 {q:"Editor?",o:["VS Code","Google","Linux","Git"],a:0}
];

let i = 0;
let score = 0;

const startScreen = document.getElementById("startScreen");
const quizScreen = document.getElementById("quizScreen");
const qEl = document.getElementById("question");
const btns = document.querySelectorAll(".options button");
const fb = document.getElementById("feedback");
const effects = document.getElementById("effects");

function startQuiz(){
  startScreen.classList.add("hidden");
  quizScreen.classList.remove("hidden");
  loadQ();
}

function loadQ(){
  fb.textContent="";
  effects.innerHTML="";
  qEl.textContent = quiz[i].q;
  btns.forEach((b,idx)=>b.textContent=quiz[i].o[idx]);
}

function checkAnswer(c){
  fb.classList.remove("blink");
  if(c === quiz[i].a){
    fb.textContent="Correct 🌸";
    flowerShower();
  } else {
    fb.textContent="Try again 😅";
    fb.classList.add("blink");
  }
}

function nextQuestion(){
  quizScreen.classList.add("fold");
  setTimeout(()=>{
    quizScreen.classList.remove("fold");
    i++;
    if(i < quiz.length){
      loadQ();
    } else {
      quizScreen.innerHTML =
        `<h2>🎉 Quiz Completed</h2>
         <h3>Score: ${score} / ${quiz.length}</h3>`;
    }
  },600);
}

function flowerShower(){
  score++;
  for(let s=0;s<30;s++){
    const f=document.createElement("div");
    f.className="flower";
    f.textContent="🌸";
    f.style.left = (s%2===0?20:300) + Math.random()*50 + "px";
    effects.appendChild(f);
    setTimeout(()=>f.remove(),1200);
  }
}
