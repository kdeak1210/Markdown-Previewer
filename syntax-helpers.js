/* Given a string of Markdown, returns HTML with inline markdown applied */
function parseInlineSyntax(text) {

  text = handleDoubleAsterisks(text);

  return text;
}

/* Replace double asterisks with opening and closing strong tags */
function handleDoubleAsterisks(text) {
  let closed = true;
  let re = /\*\*/g;
  let myArray;

  while((myArray = re.exec(text)) !== null) {
    if(closed === true) {
      text = text.replace("**", "<strong>");
      closed = !closed;
    } else {
      text = text.replace("**", "</strong>");
      closed = !closed;
    }
  }
  return text;
}

// Returns HTML for a segment of markdown headings
function handleHeadings(text, length) {
  return text.charAt(1) !== '#' ? `<h1>${text.substring(1, length)}</h1>` :
         text.charAt(2) !== '#' ? `<h2>${text.substring(2, length)}</h2>` :
         text.charAt(3) !== '#' ? `<h3>${text.substring(3, length)}</h3>` :
         text.charAt(4) !== '#' ? `<h4>${text.substring(4, length)}</h4>` :
         text.charAt(5) !== '#' ? `<h5>${text.substring(5, length)}</h5>` :
                                  `<h6>${text.substring(6, length)}</h6>`;
}
