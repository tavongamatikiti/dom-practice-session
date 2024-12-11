const timerDisplay = document.getElementById("timer-display");
const plusBtn = document.getElementById("plus-btn");
const minusBtn = document.getElementById("minus-btn");
const resetBtn = document.getElementById("reset-btn");
const startStopBtn = document.getElementById("start-stop-btn");

let timerValue = 0;
let countdownInterval = null;


function updateTimerDisplay() {
  timerDisplay.textContent = `${timerValue}s`;
}

// Enable or disable controls
function toggleControls(disable) {
  plusBtn.disabled = disable;
  minusBtn.disabled = disable;
  resetBtn.disabled = disable;
}

// Start the countdown
function startTimer() {
  countdownInterval = setInterval(() => {
    if (timerValue > 0) {
      timerValue--;
      updateTimerDisplay();
    } else {
      stopTimer();
    }
  }, 1000);
}

// Stop the countdown
function stopTimer() {
  clearInterval(countdownInterval);
  countdownInterval = null;
  startStopBtn.textContent = "Start";
  startStopBtn.classList.remove("stop");
  startStopBtn.classList.add("start");
  toggleControls(false); // Enable controls
}

// Event listeners
plusBtn.addEventListener("click", () => {
  timerValue++;
  updateTimerDisplay();
});

minusBtn.addEventListener("click", () => {
  if (timerValue > 0) {
    timerValue--;
    updateTimerDisplay();
  }
});

resetBtn.addEventListener("click", () => {
  timerValue = 0;
  updateTimerDisplay();
});

startStopBtn.addEventListener("click", () => {
  if (countdownInterval) {
    // Stop the timer
    stopTimer();
  } else {
    // Start the timer
    toggleControls(true); // Disable controls
    startStopBtn.textContent = "Stop";
    startStopBtn.classList.remove("start");
    startStopBtn.classList.add("stop");
    startTimer();
  }
});

// Initial setup
updateTimerDisplay();


