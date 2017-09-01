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
  // Parse for inline syntax, including *emphasis*, **strong** etc
  let parsedHTML = parseInlineSyntax(text);
  console.log(parsedHTML);

  // Split content of textarea into string array delimited by newline characters
  let chunkedHTML = parsedHTML.split('\n');

  parsedHTML = '';  // reset HTML container
  console.log(chunkedHTML);

  chunkedHTML.forEach(function(chunk) {
    let firstChar = chunk.charAt(0);
    let length = chunk.length;
    console.log(length);

    switch(firstChar) {
      case '#':
        parsedHTML += handleHeadings(chunk, length);
        break;
      default:
        parsedHTML += `<p>${chunk}</p>`;
        break;
    }
  });
  outputDiv.innerHTML = parsedHTML;
}
