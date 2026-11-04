
/* =========================================
   WDD 131 - W02 TEMPLE ALBUM
   Author: Unity Santana Sunday
   ========================================= */

// 1. Select the HTML elements
const currentYear = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");
const menuButton = document.querySelector("#menu-button");
const navigation = document.querySelector("#navigation");

// 2. Display the current year
currentYear.textContent = new Date().getFullYear();

// 3. Display the last modification date
lastModified.textContent = `Last Modification: ${document.lastModified}`;

// 4. Add functionality to the hamburger menu
menuButton.addEventListener("click", () => {
    const isOpen = navigation.classList.toggle("open");

    menuButton.textContent = isOpen ? "✕" : "☰";

    menuButton.setAttribute("aria-expanded", isOpen);

    menuButton.setAttribute(
        "aria-label",
        isOpen ? "Close navigation menu" : "Open navigation menu"
    );
});
