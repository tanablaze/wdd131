
/* WDD 131 - Dynamic Web Fundamentals
   Author: Unity Santana Sunday */

// Get the current year
const currentYear = new Date().getFullYear();

// Display the current year in the footer
document.getElementById("currentyear").textContent = currentYear;

// Display the document's last modified date and time
document.getElementById("lastModified").textContent =
    `Last Modified: ${document.lastModified}`;
