document.addEventListener("DOMContentLoaded", () => {

    /* ===========================
       THEME TOGGLE (DARK/LIGHT)
    ============================ */
    const btn = document.getElementById("theme-toggle");
    const moon = document.getElementById("moon-icon");
    const sun = document.getElementById("sun-icon");

    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
        document.body.classList.add("dark-mode");
        moon.style.display = "none";
        sun.style.display = "block";
    } else {
        document.body.classList.remove("dark-mode");
        moon.style.display = "block";
        sun.style.display = "none";
    }

    btn.addEventListener("click", () => {
        const isDark = document.body.classList.toggle("dark-mode");

        if (isDark) {
            moon.style.display = "none";
            sun.style.display = "block";
        } else {
            moon.style.display = "block";
            sun.style.display = "none";
        }

        localStorage.setItem("theme", isDark ? "dark" : "light");
    });



    /* ===========================
       COOKIE OVERLAY
    ============================ */
    const overlay = document.getElementById("cookie-overlay");
    const acceptBtn = document.getElementById("accept-cookies");
    const declineBtn = document.getElementById("decline-cookies");

    const saved = localStorage.getItem("cookieChoiceDate");
    const now = Date.now();

    // 30 dagen maar nu TEST MODE → 5 sec
    let expireTime = 5000;

    if (!saved || now - saved > expireTime) {
        overlay.style.display = "flex";
        document.body.style.overflow = "hidden"; // pagina bevriezen
    }

    function closePopup() {
        localStorage.setItem("cookieChoiceDate", Date.now());
        overlay.style.display = "none";
        document.body.style.overflow = "auto"; // ontvriezen
    }

    acceptBtn.addEventListener("click", closePopup);
    declineBtn.addEventListener("click", closePopup);
});
//===========================================
// GREETING BASED ON TIME OF DAY
//===============================
const now = new Date(); // haalt de huidige datum en tijd op
const hours = now.getHours(); // haalt het uur op (0-23)
let greeting = "";

if (hours >= 6 && hours < 12) {
    greeting = "Goede morgen!";
}
else if (hours >= 12 && hours < 18) {
    greeting = "Goede middag!";
}
else if (hours >= 18 && hours < 22) {
    greeting = "Goede avond!";
}
else {
    greeting = "Goede nacht!";
}

console.log(greeting);

// eerst het element pakken
const groetElement = document.getElementById("groet");

// daarna de tekst erin zetten
groetElement.textContent = greeting;

// fade out na 3 seconden
setTimeout(() => {
  groetElement.classList.add("fade-out");
}, 3000);

//===========================================
// HAMBURGER MENU 
//===============================
const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');

hamburger.addEventListener('click', () => {
  menu.classList.toggle('active');
});

//============================================
//COUNTDOWN SCRIPT
//===============================
const einddatum = new Date(2026, 0, 1);

setInterval(function() {
    const nu = new Date();
    const verschil = einddatum - nu;

    const dagen = Math.floor(verschil / (1000 * 60 * 60 * 24));
    const uren = Math.floor((verschil % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minuten = Math.floor((verschil % (1000 * 60 * 60)) / (1000 * 60));
    const seconden = Math.floor((verschil % (1000 * 60)) / 1000);

    document.getElementById("countdown").textContent = dagen + "d " + uren + "u " + minuten + "m " + seconden + "s";
}, 1000);
