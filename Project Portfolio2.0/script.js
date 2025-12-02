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
