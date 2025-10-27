// Khalid Abdrabah Alowd
// sec4
// 20196964

// Your DOM here
const Levels = document.getElementById("difficultyy");
const wordInput = document.getElementById("text");
const scoreDisplay = document.getElementById("score");
const timeDisplay = document.getElementById("time");
const rWord = document.getElementById("word");
const message = document.getElementById("message");
const fscore = document.getElementById('fscore');
const btn = document.getElementById('btn');

// List of words for game
const words = [
  'cat', 'sun', 'book', 'tree', 'bird', 'rain', 'jump', 'love', 'happy', 'smile',
  "puzzle", "journey", "melody", "whisper", "shadow", "harvest", "twilight", "fragile", "rhythm",
  "labyrinth", "synchronize", "effervescent", "ubiquitous", "chrysanthemum", "archipelago", 
  "melancholy", "idiosyncrasy", "juxtaposition", "quintessential",
  'sigh', 'tense', 'airplane', 'ball', 'pies', 'juice', 'warlike', 'bad', 'north', 
  'dependent', 'steer', 'silver', 'highfalutin', 'superficial', 'quince', 'eight', 
  'feeble', 'admit', 'drag', 'loving', 'paradox', 'diamond', 'monarch', 'railcar', 
  'privacy', 'discuss', 'produce', 'fixture', 'revival', 'complex', 'present', 'graphic', 
  'extreme', 'posture', 'private', 'justice', 'enhance', 'kinship', 'impound', 'terrify'
];

// Initial settings
let time = 10;
let score = 0;
let isPlaying;

const levels = {
  easy: 5,
  medium: 3,
  hard: 2
};

// Load settings on window load
window.addEventListener('load', () => {
  document.getElementById('visible').hidden = false;
  document.getElementById('two').hidden = true;
  getData();
  play();
  wordInput.focus();
});

// Store selected difficulty in local storage
function storeData() {
  localStorage.setItem('diffChoice', Levels.value);
}

// Get difficulty level from local storage
function getData() {
  const storedValue = localStorage.getItem('diffChoice');
  Levels.value = storedValue || 'easy';
}

// Main play function
function play() {
  showWords(words);
  wordInput.addEventListener('input', startMatch);
  setInterval(countdown, 1000);
  setInterval(checkStatus, 50);
}

// Compare words (case-insensitive)
function matchWords() {
  const fWord = wordInput.value.trim().toLowerCase(); // user input lowercase
  const displayedWord = rWord.innerHTML.trim().toLowerCase(); // displayed word lowercase

  if (fWord === displayedWord) {
    message.innerHTML = 'Correct!';
    return true;
  } else {
    message.innerHTML = '';
    return false;
  }
}

// Start matching and update score/time
function startMatch() {
  const selectedValue = Levels.value;
  const currentLevel = levels[selectedValue];

  if (matchWords()) {
    isPlaying = true;
    time += currentLevel + 1;
    showWords(words);
    wordInput.value = '';
    score++;
  }

  if (score === -1) {
    scoreDisplay.innerHTML = 0;
  } else {
    scoreDisplay.innerHTML = score;
  }
}

// Show random word in lowercase
function showWords(wordList) {
  const random = Math.floor(Math.random() * wordList.length);
  rWord.innerHTML = wordList[random].toLowerCase();
}

// Countdown timer
function countdown() {
  if (time > 0) {
    if (isPlaying) {
      time--;
    }
  } else if (time === 0) {
    isPlaying = false;
  }

  timeDisplay.innerHTML = time + "s";
}

// Check game status
function checkStatus() {
  if (!isPlaying && time === 0) {
    document.getElementById('visible').hidden = true;
    document.getElementById('two').hidden = false;
    fscore.innerHTML = "Your final score is " + score;
  }
}

