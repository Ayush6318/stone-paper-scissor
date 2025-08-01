let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");

const userscorepara = document.querySelector("#user-score");
const compscorepara = document.querySelector("#comp-score");

const gencompchoice = ()=>{
const options = ["rock","paper","scissors"];
const randidx = Math.floor(Math.random()*3);
return options [randidx];
}

const drawgame = ()=>{
    msg.innerText = "Game Draw , Play Again";
    msg.style.backgroundColor = " #081b31";
}
const showwinner = (userwin,compchoice,userchoice)=>{
    if(userwin){
        userscore++;
       userscorepara.innerText = userscore;
       msg.innerText = `you win! your ${userchoice} beats ${compchoice}`;
       msg.style.backgroundColor = "green";
    }
    else{
        compscore++;
        compscorepara.innerText = compscore;
        msg.innerText =  `you lost! ${compchoice} beats your ${userchoice}`;
        msg.style.backgroundColor = "red";
    }
   
}

const playgame = (userchoice)=>{
console.log("user choice = ",userchoice);
// Generate computer choice ->modular
const compchoice = gencompchoice();
console.log("computer choice = ",compchoice);

if(userchoice === compchoice){
    drawgame();
}
else{
    let userwin = true;
    if(userchoice === "rock"){
        // scissors,paper
        userwin = compchoice === "paper"? false:true;
    }
    else if (userchoice === "paper"){
        // rock,scissors
       userwin = compchoice === "scissors" ? false:true;
    }
    else{
        // rock,paper
    userwin = compchoice === "rock"? false:true;
    }
    showwinner(userwin,compchoice,userchoice);
    }
};


choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userchoice= choice.getAttribute("id");
        console.log("choice was clicked",userchoice);
        playgame(userchoice);
    });
});

