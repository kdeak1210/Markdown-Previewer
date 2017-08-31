// Get the text entry and output elements
const inputTA = document.querySelector('#textEntry');
const outputDiv = document.querySelector('#output');

// On timer reaches interval, text processing function fires on textarea content
const finishedTypingInterval = 1000;
let typingTimer;

// keyup event listener begins the timer
inputTA.addEventListener('keyup', function() {
  clearTimeout(typingTimer);
  typingTimer = setTimeout(() => process(inputTA.value), finishedTypingInterval);
}, false);

// keydown event listener resets the timer
inputTA.addEventListener('keydown', function() {
  clearTimeout(typingTimer);
}, false);

function process(text) {
  // Split content of textarea into string array delimited by newline characters
  let textChunks = text.split('\n');
  let myHTML = '';
  console.log(textChunks);

  textChunks.forEach(function(chunk) {
    let firstChar = chunk.charAt(0);
    let length = chunk.length;
    console.log(length);

    switch(firstChar) {
      case '#':
        myHTML += handleHeadings(chunk, length);
        break;
    }
  });
  outputDiv.innerHTML = myHTML;
}
