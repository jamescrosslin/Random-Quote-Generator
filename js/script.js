/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance:
// Check the "Project Resources" section of the project instructions
// Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/***
 * `quotes` array
 ***/

// {
//   quote: ,
//   source: ,
//   citation: ,
//   year: ,
// },

//This is an array containing quote objects

const quotes = [
  {
    quote:
      "I would be ashamed to admit that I had risen from the ranks. When I rise it will be with the ranks, and not from the ranks.",
    source: "Eugene V. Debs",
    citation: "Canton, Ohio Anti-War Speech",
    year: 1918,
  },
  {
    quote:
      "Let us realize the arc of the moral universe is long but it bends toward justice.",
    source: "Martin Luther King, Jr.",
    citation: "Where do we go from Here: Chaos or Community?",
    year: 1967,
  },
  {
    quote: "I acknowledge no master in human form.",
    source: "John Brown",
    year: 1859,
  },
  {
    quote:
      "I would unite with anybody to do right; and with nobody to do wrong.",
    source: "Frederick Douglass",
    citation: "Lecture, The Anti-Slavery Movement",
    year: 1855,
  },
  {
    quote: "People say nothing is impossible, but I do nothing every day.",
    source: "A.A. Milne",
  },
  {
    quote: `We are never quits with those who oblige us," was Dantes' reply; "for when we do not owe them money, we owe them <em>gratitude</em>.`,
    source: "Alexandre Dumas",
    citation: "The Count of Monte Cristo",
    year: 1845,
  },
];

/***
 * `getRandomQuote` function
 ***/
function getRandomQuote() {
  const randomNum = Math.floor(Math.random() * quotes.length);
  return quotes[randomNum];
}

/***
 * `printQuote` function
 ***/

function printQuote() {
  const randomQuote = getRandomQuote();
  const htmlString = `
  <p class="quote">${randomQuote.quote}</p>
  <p class="source">${randomQuote.source}</p>
  `;
}

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
 ***/

document
  .getElementById("load-quote")
  .addEventListener("click", printQuote, false);
