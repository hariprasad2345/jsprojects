const quoteDiv = document.getElementById('quote');
const quoteBtn = document.getElementById('quoteBtn');
async function fetchQuote() {
  try {
    const response = await fetch('https://api.quotable.io/random');
     if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    quoteDiv.innerHTML = `"${data.content}" — ${data.author}`;
  } catch (error) {
    quoteDiv.innerHTML = 'Sorry, something went wrong. Please try again later.';
    console.error('There was a problem fetching the quote:', error);
  }
}
quoteBtn.addEventListener('click', fetchQuote);
