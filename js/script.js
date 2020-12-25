/*
 *This is an array containing quote objects
 */
const quotes = [
  {
    quote:
      "I would be ashamed to admit that I had risen from the ranks. When I rise it will be with the ranks, and not from the ranks.",
    source: "Eugene V. Debs",
    profession: "American politician",
    citation: "Canton, Ohio Anti-War Speech",
    year: 1918,
  },
  {
    quote:
      "Let us realize the arc of the moral universe is long but it bends toward justice.",
    source: "Martin Luther King, Jr.",
    profession: "Minister",
    citation: "Where do we go from Here: Chaos or Community?",
    year: 1967,
  },
  {
    quote: "I acknowledge no master in human form.",
    source: "John Brown",
    profession: "Revolutionary",
    year: 1859,
  },
  {
    quote:
      "I would unite with anybody to do right; and with nobody to do wrong.",
    source: "Frederick Douglass",
    profession: "Scholar and activist",
    citation: "Lecture, The Anti-Slavery Movement",
    year: 1855,
  },
  {
    quote: "People say nothing is impossible, but I do nothing every day.",
    source: "A.A. Milne",
    profession: "Author",
  },
  {
    quote: `We are never quits with those who oblige us," was Dantes' reply; "for when we do not owe them money, we owe them <em>gratitude</em>.`,
    source: "Alexandre Dumas",
    profession: "Author",
    citation: "The Count of Monte Cristo",
    year: 1845,
  },
];

/*
 * This function creates a random number within a range
 * with the minimum and maximum values as parameters
 */

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

/***
 * This function retrieves a random number and uses
 * that number as an index for the quotes array
 ***/
function getRandomQuote() {
  const randomIndex = getRandomNumber(0, quotes.length);
  return quotes[randomIndex];
}

/***
 * The printQuote function retrieves a random
 * quote and adds that quote to the DOM
 ***/
function printQuote() {
  const randomQuote = getRandomQuote();
  let quoteString = `
  <p class="quote">${randomQuote.quote}</p>
  <p class="source">`;

  if (randomQuote.profession) quoteString += `<span class='profession'>${randomQuote.profession}</span>`;

  quoteString += randomQuote.source;

  if (randomQuote.citation)quoteString += `<span class="citation">${randomQuote.citation}</span>`;
  if (randomQuote.year) quoteString += `<span class="year">${randomQuote.year}`;

  quoteString += `</p>`;

  document.querySelector("body").style.backgroundColor = `rgb(
    ${getRandomNumber(0, 255)},${getRandomNumber(0, 255)},${getRandomNumber(0, 255)}
    )`;

  return (document.getElementById("quote-box").innerHTML = quoteString);
}

/***
 * This event listener listens for a button click
 * and calls the printQuote function
 ***/
document
  .getElementById("load-quote")
  .addEventListener("click", printQuote, false);
