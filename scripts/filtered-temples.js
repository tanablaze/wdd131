const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Accra Ghana",
    location: "Accra, Ghana",
    dedicated: "2004, January, 11",
    area: 17500,
    imageUrl: "images/accra.jpg"
  },
  {
    templeName: "Johannesburg South Africa",
    location: "Johannesburg, South Africa",
    dedicated: "1985, August, 24",
    area: 19184,
    imageUrl: "images/johannesburg.jpg"
  },
  {
    templeName: "Nairobi Kenya",
    location: "Nairobi, Kenya",
    dedicated: "2025, May, 18",
    area: 19800,
    imageUrl: "images/nairobi.jpg"
  }
];

const templeContainer = document.querySelector(".temple-grid");
const pageTitle = document.querySelector("#page-title");

function displayTemples(templesToDisplay) {
  templeContainer.innerHTML = "";

  templesToDisplay.forEach((temple) => {
    const card = document.createElement("section");

    const name = document.createElement("h3");
    const location = document.createElement("p");
    const dedicated = document.createElement("p");
    const area = document.createElement("p");
    const image = document.createElement("img");

    name.textContent = temple.templeName;

    location.innerHTML = `<strong>Location:</strong> ${temple.location}`;
    dedicated.innerHTML = `<strong>Dedicated:</strong> ${temple.dedicated}`;
    area.innerHTML = `<strong>Area:</strong> ${temple.area.toLocaleString()} sq ft`;

    image.src = temple.imageUrl;
    image.alt = temple.templeName;
    image.loading = "lazy";
    image.width = 400;
    image.height = 250;

    card.appendChild(name);
    card.appendChild(location);
    card.appendChild(dedicated);
    card.appendChild(area);
    card.appendChild(image);

    templeContainer.appendChild(card);
  });
}

/* Home */
document.querySelector("#home").addEventListener("click", (event) => {
  event.preventDefault();

  pageTitle.textContent = "Home";
  displayTemples(temples);
});

/* Old */
document.querySelector("#old").addEventListener("click", (event) => {
  event.preventDefault();

  const oldTemples = temples.filter(
    temple => new Date(temple.dedicated).getFullYear() < 1900
  );

  pageTitle.textContent = "Old Temples";
  displayTemples(oldTemples);
});

/* New */
document.querySelector("#new").addEventListener("click", (event) => {
  event.preventDefault();

  const newTemples = temples.filter(
    temple => new Date(temple.dedicated).getFullYear() > 2000
  );

  pageTitle.textContent = "New Temples";
  displayTemples(newTemples);
});

/* Large */
document.querySelector("#large").addEventListener("click", (event) => {
  event.preventDefault();

  const largeTemples = temples.filter(
    temple => temple.area > 90000
  );

  pageTitle.textContent = "Large Temples";
  displayTemples(largeTemples);
});

/* Small */
document.querySelector("#small").addEventListener("click", (event) => {
  event.preventDefault();

  const smallTemples = temples.filter(
    temple => temple.area < 10000
  );

  pageTitle.textContent = "Small Temples";
  displayTemples(smallTemples);
});

/* Footer */
document.querySelector("#currentyear").textContent =
  new Date().getFullYear();

document.querySelector("#lastModified").textContent =
  `Last Modified: ${document.lastModified}`;

/* Initial Page Load */
displayTemples(temples);