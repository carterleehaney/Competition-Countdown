// Function to calculate the days remaining
function daysUntil(targetDate) {
    const now = new Date();
    const target = new Date(targetDate);
    const timeDiff = target - now; // Difference in milliseconds
    const daysLeft = Math.ceil(timeDiff / (1000 * 3600 * 24)); // Convert ms to days
    return daysLeft;
}

// Update the countdowns
function timeUntil(targetDate) {
    const now = new Date();
    const target = new Date(targetDate);
    const timeDiff = target - now; // Difference in milliseconds

    const daysLeft = Math.floor(timeDiff / (1000 * 3600 * 24));
    const hoursLeft = Math.floor((timeDiff % (1000 * 3600 * 24)) / (1000 * 3600)).toString().padStart(2, '0');
    const minutesLeft = Math.floor((timeDiff % (1000 * 3600)) / (1000 * 60)).toString().padStart(2, '0');
    const secondsLeft = Math.floor((timeDiff % (1000 * 60)) / 1000).toString().padStart(2, '0');

    return `${daysLeft}:${hoursLeft}:${minutesLeft}:${secondsLeft}`;
}

function updateCountdowns() {
    document.getElementById("days2").innerText = timeUntil('2025-02-28'); // Changed date
    document.getElementById("days3").innerText = timeUntil('2025-03-21');
    document.getElementById("days4").innerText = timeUntil('2025-04-26');
    document.getElementById("days5").innerText = timeUntil('2025-10-02');
    document.getElementById("days6").innerText = timeUntil('2025-11-14');
}

// Initial call to update countdowns
updateCountdowns();

// Update countdowns every second
setInterval(updateCountdowns, 1000);
