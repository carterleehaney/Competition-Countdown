// Function to calculate the days remaining
function daysUntil(targetDate) {
    const now = new Date();
    const target = new Date(targetDate);
    const timeDiff = target - now; // Difference in milliseconds
    const daysLeft = Math.ceil(timeDiff / (1000 * 3600 * 24)); // Convert ms to days
    return daysLeft;
}

// Update the countdowns
document.getElementById("days1").innerText = daysUntil('2025-02-09');
document.getElementById("days2").innerText = daysUntil('2025-02-29');
document.getElementById("days3").innerText = daysUntil('2025-03-22');
document.getElementById("days4").innerText = daysUntil('2025-04-26');
document.getElementById("days5").innerText = daysUntil('2025-10-3');
