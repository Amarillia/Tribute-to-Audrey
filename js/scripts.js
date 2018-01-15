var quotes = ["\"Don't cry because it's over, smile because it happened.\"<br>-   Dr. Seuss",
"\"I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.\"<br> -  Marilyn Monroe",
"\"Be yourself; everyone else is already taken.\"<br>- Oscar Wilde",
"\"You are never too old to set another goal or to dream a new dream.\"<br>- C.S Lewis",
"\"If you can dream it, you can do it.\"<br>- Walt Disney",
"\"Never give up, for that is just the place and time that the tide will turn.\"<br>- Harriet Beecher Stowe",
"\"Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.\"<br>-  Albert Einstein",
"\"Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.\"<br>- Bernard M. Baruch",
"\"A room without books is like a body without a soul.\"<br>- Marcus Tullius Cicero",
"\"No one can make you feel inferior without your consent.\"<br>- Eleanor Roosevelt"];

function newQuote(){
var randNum = Math.floor(Math.random() * quotes.length);
document.getElementById("quoteDisplay").innerHTML = quotes[randNum];
}

$("#tweet").on("click", function(){
	window.open("https://twitter.com/intent/tweet?text=" + randNum);
});