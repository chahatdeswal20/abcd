// Function to update the time and date
function updateTime() {
    const now = new Date();

    const dateElement = document.getElementById("date");
    dateElement.textContent = now.toDateString();

    const dayElement = document.getElementById("day");
    dayElement.textContent = now.toLocaleDateString(undefined, { weekday: 'long' });

    const hoursElement = document.getElementById("hours");
    const minutesElement = document.getElementById("minutes");
    const secondsElement = document.getElementById("seconds");

    const sessionElement = document.getElementById("session");
    const session = now.getHours() >= 12 ? "PM" : "AM";
    sessionElement.textContent = session;

    let hours = now.getHours();
    const is24HourFormat = localStorage.getItem("is24HourFormat") === "true";

    if (!is24HourFormat && hours > 12) {
        hours -= 12;
    }
    
    hoursElement.textContent = hours.toString().padStart(2, "0");
    minutesElement.textContent = now.getMinutes().toString().padStart(2, "0");
    secondsElement.textContent = now.getSeconds().toString().padStart(2, "0");
}

// Toggle between 12-hour and 24-hour formats
function toggleFormat() {
    const is24HourFormat = localStorage.getItem("is24HourFormat") === "true";
    localStorage.setItem("is24HourFormat", !is24HourFormat);

    updateTime();
}

// Update time every second
setInterval(updateTime, 1000);

// Attach event listener to the toggle button
const toggleButton = document.getElementById("toggle-btn");
toggleButton.addEventListener("click", toggleFormat);

// Initial setup
if (localStorage.getItem("is24HourFormat") === null) {
    localStorage.setItem("is24HourFormat", "false");
}

updateTime();
