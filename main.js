// Get the text entry and output elements
const inputTA = document.querySelector('#textEntry');
const outputDiv = document.querySelector('#output');

// Once typingTimer reaches the interval, the text processing function fires
const finishedTypingInterval = 1000;
let typingTimer;

// keyup event listener begins the timer
inputTA.addEventListener('keyup', function() {
  clearTimeout(typingTimer);
  typingTimer = setTimeout(process, finishedTypingInterval);
}, false);

// keydown event listener resets the timer
inputTA.addEventListener('keydown', function() {
  clearTimeout(typingTimer);
}, false);

function process() {
  outputDiv.innerHTML = inputTA.value;
}
