
document.addEventListener("DOMContentLoaded", function () {
    
const artworks = [
    {
        title: "Picnic Table",
        image: "./images/picnic.jpeg",
        description: "Created with oil pastels.",
        price: "$60.00"
    },
    {
        title: "Abstract Sun Conure",
        image: "./images/petPortrait.jpeg",
        description: "A colorful colored-pencil pet portrait.",
        price: "Contact for pricing"
    },
    {
        title: "Custom Sketchbook Covers",
        image: "./images/sketchBook.jpeg",
        description: "Custom journals made from your ideas.",
        price: "$30-$50"
    },
    {
        title: "Floral Paintings",
        image: "./images/painting.png",
        description: "Paintings inspired by flowers.",
        price: "$50-$60"
    },
    {
        title: "Watercolor Paintings",
        image: "./images/IMG_6078.jpeg",
        description: "Watercolor artwork from pets to still lifes.",
        price: "$40-$50"
    },
    {
        title: "Abstract Art",
        image: "./images/IMG_7207.jpeg",
        description: "Shapes, colors, and patterns create a unique design.",
        price: "$20-$40"
    }
];

// Find the empty HTML container
const artworkSection = document.getElementById("artwork");

// Loop through the array
artworks.forEach(function(artwork) {

    // Create a card
    const card = document.createElement("div");
    card.classList.add("artwork-card");

    // Create the title
    const title = document.createElement("h2");
    title.textContent = artwork.title;

    // Create the image
    const image = document.createElement("img");
    image.src = artwork.image;
    image.alt = artwork.title;

    // Create the description
    const description = document.createElement("p");
    description.textContent = artwork.description;

    // Create the price
    const price = document.createElement("p");
    price.textContent = "Price: " + artwork.price;

    // Put everything inside the card
    card.appendChild(title);
    card.appendChild(image);
    card.appendChild(description);
    card.appendChild(price);

    // Display the card on the webpage
    artworkSection.appendChild(card);

})

    const searchInput = document.getElementById("artSearch");
    const submitBtn = document.getElementById("searchBtn");
    const clearBtn = document.getElementById("clearSearch");
    const searchMessage = document.getElementById("searchMessage");
    const filterButtons = document.querySelectorAll("#filters button");

    let selectedCategory = "All";

    // Create artwork cards
    function showArtworkCards() {

        artworkSection.innerHTML = "";

        artworks.forEach(function (artwork) {

            const card = document.createElement("div");
            card.classList.add("artwork-card");

            card.setAttribute("data-category", artwork.category);

            card.innerHTML = `
                <h2>${artwork.title}</h2>
                <figure>
                    <img src="${artwork.image}" alt="${artwork.title}">
                    <figcaption>${artwork.description}</figcaption>
                    <p class="price">Price: ${artwork.price}</p>
                </figure>
            `;

            artworkSection.appendChild(card);
        });
    }

    // Search and filter artwork
    function searchArtwork() {

        const searchText = searchInput.value.toLowerCase().trim();

        const cards = document.querySelectorAll("#artwork .artwork-card");

        let visibleCount = 0;

        cards.forEach(function (card) {

            const cardText = card.textContent.toLowerCase();
            const category = card.getAttribute("data-category");

            const matchesSearch = cardText.includes(searchText);

            const matchesCategory =
                selectedCategory === "All" ||
                category === selectedCategory;

            if (matchesSearch && matchesCategory) {
                card.style.display = "";
                visibleCount++;
            } else {
                card.style.display = "none";
            }
        });

        searchMessage.textContent =
            visibleCount + " artwork(s) found.";
    }

    // Submit button
    submitBtn.addEventListener("click", searchArtwork);

    // Search while typing
    searchInput.addEventListener("input", searchArtwork);

    // Clear button
    clearBtn.addEventListener("click", function () {

        searchInput.value = "";
        selectedCategory = "All";

        filterButtons.forEach(function (button) {
            button.classList.remove("active");
        });

        filterButtons[0].classList.add("active");

        searchArtwork();
    });

    // Category buttons
    filterButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            selectedCategory = button.getAttribute("data-category");

            filterButtons.forEach(function (btn) {
                btn.classList.remove("active");
            });

            button.classList.add("active");

            searchArtwork();
        });
    });

    // Display cards when the page loads
    showArtworkCards();

    // Show all artwork initially
    searchArtwork();

});

