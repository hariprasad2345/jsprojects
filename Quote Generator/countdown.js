const countdownDisplay = document.getElementById('countdownDisplay');
const startCountdownButton = document.getElementById('startCountdown');
const dateTimeInput = document.getElementById('dateTime');

let countdownInterval;

function calculateCountdown(targetDate) {
  const now = new Date().getTime();
  const timeDifference = targetDate - now;

  if (timeDifference <= 0) {
    clearInterval(countdownInterval);
    countdownDisplay.innerHTML = "The countdown is over!";
    return;
  }
  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
  countdownDisplay.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

function startCountdown() {
   const selectedDateTime = dateTimeInput.value;
  
  if (!selectedDateTime) {
    alert("Please select a date and time.");
    return;
  }

  const targetDate = new Date(selectedDateTime).getTime();
  clearInterval(countdownInterval);
  countdownInterval = setInterval(() => {
    calculateCountdown(targetDate);
  }, 1000);
}
startCountdownButton.addEventListener('click', startCountdown);
