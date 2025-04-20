let workTime = 25 * 60;
let shortBreakTime = 5 * 60;
let longBreakTime = 15 * 60;
let timer;
let currentTime = workTime;
let isRunning = false;
let currentMode = "Work"; // 'Work', 'Short Break', 'Long Break'

const timerDisplay = document.getElementById("timer");
const sessionTypeDisplay = document.getElementById("session-type");

function updateDisplay() {
    const minutes = Math.floor(currentTime / 60);
    const seconds = currentTime % 60;
    timerDisplay.textContent = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
    sessionTypeDisplay.textContent = `Session: ${currentMode}`;
}

function startTimer() {
    if (!isRunning) {
        isRunning = true;
        timer = setInterval(() => {
            if (currentTime > 0) {
                currentTime--;
                updateDisplay();
            } else {
                clearInterval(timer);
                isRunning = false;
                alert("Time's up!");
            }
        }, 1000);
    }
}

function pauseTimer() {
    clearInterval(timer);
    isRunning = false;
}

function resetTimer() {
    pauseTimer();
    if (currentMode === "Work") currentTime = workTime;
    else if (currentMode === "Short Break") currentTime = shortBreakTime;
    else if (currentMode === "Long Break") currentTime = longBreakTime;
    updateDisplay();
}

function setShortBreak() {
    pauseTimer();
    currentTime = shortBreakTime;
    currentMode = "Short Break";
    updateDisplay();
}

function setLongBreak() {
    pauseTimer();
    currentTime = longBreakTime;
    currentMode = "Long Break";
    updateDisplay();
}

// Init on load
updateDisplay();
