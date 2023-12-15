//Khalid Abdrabah Alowd
//sec4
//20196964

//Your DOM here
const Levels=document.getElementById("difficultyy")
const wordInput=document.getElementById("text")
const scoreDisplay=document.getElementById("score")
const timeDisplay=document.getElementById("time")
const rWord=document.getElementById("word")
const message=document.getElementById("message")
const fscore=document.getElementById('fscore')
const btn=document.getElementById('btn')
// List of words for game

const words = [
  'sigh',
  'tense',
  'airplane',
  'ball',
  'pies',
  'juice',
  'warlike',
  'bad',
  'north',
  'dependent',
  'steer',
  'silver',
  'highfalutin',
  'superficial',
  'quince',
  'eight',
  'feeble',
  'admit',
  'drag',
  'loving',
  'paradox',
  'diamond',
  'monarch',
  'railcar',
  'privacy',
  'discuss',
  'produce',
  'fixture',
  'revival',
  'complex',
  'present',
  'graphic',
  'extreme',
  'posture',
  'private',
  'justice',
  'enhance',
  'kinship',
  'impound',
  'terrify'
  
  
];
window.addEventListener('load',play);
document.getElementById('visible').hidden=false;
document.getElementById('two').hidden=true;
window.addEventListener('load', () => {    wordInput.focus();});
window.addEventListener('load', getData());

function storeData(){
  localStorage.setItem('diffChoice',Levels.value);
  var selectedValue=levels.value;
}
function getData(){
  Levels.value=localStorage.getItem('diffChoice');
}
let time=10;
let score=0;
let isPlaying;

const levels={
  easy:5,
  medium:3,
  hard:2
}
let currentLevel = levels[Levels.value || 'easy'];
window.addEventListener('load', storeData);
window.addEventListener('load', play);
function handleInput() {
  const enteredWord = wordInput.value.trim();
  // Process the entered word here
}
function getData() {
  const storedValue = localStorage.getItem('diffChoice');
  Levels.value = storedValue || 'easy';
}
function startMatch(){
  var selectedValue=Levels.value;
  var currentLevel=levels[selectedValue];
  if(matchWords()){
     isPlaying=true;
     time+=currentLevel+1;
     showWords(words);
     wordInput.value='';
     score++;
  }
  if(score==-1){
    scoreDisplay.innerHTML=0;
  }
  scoreDisplay.innerHTML=score;
}
function play(){
  showWords(words);

  wordInput.addEventListener('input',getData);
  wordInput.addEventListener('input',startMatch);

  setInterval(countdown, 1000);

  setInterval(checkStatus,50);
}

function matchWords(){
  const fWord=wordInput.value.trim();
  if(fWord===rWord.innerHTML){
    message.innerHTML='correct';
    return true;
  }else{
    message.innerHTML='';
    return false;
  }
}

function showWords(word){
  const random= Math.floor(Math.random() * words.length);
  rWord.innerHTML=words[random];
}

function countdown(){
  if(time > 0){
    if(isPlaying){
    time--;}
  }
  else if(time==0){
    isPlaying=false;
  }

  timeDisplay.innerHTML=time+"s";
}

function checkStatus(){
  if(!isPlaying && time==0){
    document.getElementById('visible').hidden=true;
    document.getElementById('two').hidden=false;
    fscore.innerHTML="your final score is " + score;
  }


}
