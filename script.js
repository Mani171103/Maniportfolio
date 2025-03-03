document.addEventListener("DOMContentLoaded", function () {
    alert("Welcome to My Portfolio!");
});
document.addEventListener("DOMContentLoaded", function () {
    setTimeout(() => {
        let welcomeText = document.querySelector(".welcome-text");
        welcomeText.classList.add("zoom-glow", "finished"); // Apply Zoom and Stop Cursor
    }, 3500); // After typing animation ends
});


