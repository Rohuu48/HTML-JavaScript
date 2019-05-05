window.addEventListener('load', init);

let time=5;
let score=0;
let isPlaying;

const wordInput=document.querySelector('#wordinput');
const currentWord=document.querySelector('#currentword');
const scoreDisp=document.querySelector('#score');
const timeDisp=document.querySelector('#time');
const message=document.querySelector('#message');
const seconds=document.querySelector('#seconds');
const highScore=document.querySelector('#hs');
highScore.innerHTML=0;
words=[
 'rohit', 'javascript', 'css', 'kjek', 'sdsa', 'fdadfsd', 'adaadas', 'hat',
 'river',
 'lucky',
 'statue',
 'generate',
 'stubborn',
 'cocktail',
 'runaway',
 'joke',
 'developer',
 'establishment',
 'hero',
 'nutrition',
 'revolver',
 'echo',
 'siblings',
 'investigate',
 'horrendous',
 'symptom',
 'laughter',
 'magic',
 'master',
 'space',
 'definition'
];

function changeSelection(){
var f;
var h = document.getElementById("diffSelect").selectedIndex;
var y=document.getElementsByTagName("option")[h].value;


if(y=="e"){
    seconds.innerHTML=5;
    f=5;
    timeDisp.innerHTML=5;
}
else if(y=="m"){
    seconds.innerHTML=3;
    f=3;
    timeDisp.innerHTML=3;
}
else if(y=="h"){
    seconds.innerHTML=1;
    f=1;
    timeDisp.innerHTML=1;
}
time=f;
score=0;
init();
}
function init(){
    message.innerHTML="";
    seconds.innerHTML;
    wordInput.addEventListener('input', Check);    
    showWord(words); 
}
setInterval(countdown, 1000);
setInterval(Status,50);
function Check(){
    if(matchWords()){
       isPlaying=true;
       timeDisp.innerHTML='';
       time=timeDisp.innerHTML+seconds.innerHTML;
       showWord(words);
       wordInput.value='';
       score++;
    }
    if(score===-1){
        scoreDisp.innerHTML=0;

    }else{
    scoreDisp.innerHTML=score;
    }
}
function matchWords(){
    if(wordInput.value==currentWord.innerHTML){
        message.innerHTML='Correct!';
        return true;
    }
    else{
        message.innerHTML='';
        return false;
    }

}
function showWord(words){
    const randIndex=Math.floor(Math.random()*words.length);
    currentWord.innerHTML=words[randIndex];
}
function countdown(){
    if(time>0){
        time--;
    }
    else if(time===0){
        isPlaying=false;
    }
    timeDisp.innerHTML=time;
}
function Status(){
    if(!isPlaying && time==0){
        message.innerHTML="Game Over!";
        highScore.innerHTML=Math.max(score,highScore.innerHTML);
        score=-1;
        wordInput.value='';
        
        
    }
}
