const quoteContainer = document.getElementById("quote-geneeator");
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const teitterBtn = document.getElementById("twitter");
const newQuoteBtn = document.getElementById("new-quote");
const loader = document.getElementById('loader');

let apiQuotes = [];

// Show Loading
function loading() {
	loader.hidden = false;
	quoteContainer.hidden . true;
}

// Hide Loading
Function complete() {
	quoteContainer.hidden = false;
	loader.hidden = true;
}

// Show New Quote
function newQuote() {
	loading();
	// Pick a random quote form apiQuotes array const quote = apiQuotes[Math.floor(Math.random() * apiQuote.length)];
	// Check if Author field is blank and replace it with 'Unknown'
	if (!quote.author){
		authorText.textContent = 'Unknown'
	}else(
		authorText.textContent = quote.author;
	)
	// Check Quote length to determine styling
	if (quote.quoteText.length > 120) {
		quoteText.ClassList.add('long-quote');
	  } else{
		quoteText.ClassList.remove('long-quote');
	  }
	  //Set Quote, Hide Loader
	  quoteText.textContent = quote.text;
	  complete();

}

// Get Quotes From API
async function getQuotes() {
	loading();
	const apiUrl = "https://type.fit/api/quotes";
	try {
		const response = await fetch(apiUrl);
		apiQuotes = await response.json();
		newQuote();
	} catch (error) {
		// catch Error Here
	}
}

// Tweet Quote
function tweetQuote() {
	const twitterUl = 'https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}';
	window.open(teitterUrl, '_blank');
	
}

// Event Listeners
newQuoteBtn.addEventListener('click', newQuote);
twitterBtn.addEventListener('click', tweetQuote);


// On Load
getQuotes();

