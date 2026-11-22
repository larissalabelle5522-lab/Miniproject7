
document.addEventListener("DOMContentLoaded", function () {

    const artworks = [
        {
            title: "Picnic Table",
            image: "./images/picnic.jpeg",
            description: "Created with oil pastels.",
            price: "$60.00",
            link: "cards/picnicTable.html",
            category: "mixed-media"
        },
        {
            title: "Abstract Sun Conure",
            image: "./images/petPortrait.jpeg",
            description: "A colorful colored-pencil pet portrait.",
            price: "Contact for pricing",
            link: "cards/sunConure.html",
            category: "mixed-media"
        },
        {
            title: "Custom Sketchbook Covers",
            image: "./images/sketchBook.jpeg",
            description: "Custom journals made from your ideas.",
            price: "$30-$50",
            link: "cards/sketchBookCover.html",
            category: "bookcovers"
        },
        {
            title: "Floral Paintings",
            image: "./images/painting.png",
            description: "Paintings inspired by flowers.",
            price: "$50-$60",
            link: "cards/floralPainting.html",
            category: "paintings"
        },
        {
            title: "Watercolor Paintings",
            image: "./images/IMG_6078.jpeg",
            description: "Watercolor artwork from pets to still lifes.",
            price: "$40-$50",
            link: "cards/waterColorPaintings.html",
            category: "paintings"
        },
        {
            title: "Abstract Art",
            image: "./images/IMG_7207.jpeg",
            description: "Shapes, colors, and patterns create a unique design.",
            price: "$20-$40",
            link: "cards/abstractArt.html",
            category: "mixed-media"
        }
    ];

    // Find HTML elements
    const artworkSection = document.getElementById("artwork");
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

            // Create card
            const card = document.createElement("div");
            card.classList.add("artwork-card");

            // Add category
            card.setAttribute("data-category", artwork.category);

            // Create clickable link
            const link = document.createElement("a");
            link.href = artwork.link;
            link.classList.add("artwork-card-link");

            // Create title
            const title = document.createElement("h2");
            title.textContent = artwork.title;

            // Create image
            const image = document.createElement("img");
            image.src = artwork.image;
            image.alt = artwork.title;

            // Create description
            const description = document.createElement("p");
            description.textContent = artwork.description;

            // Create price
            const price = document.createElement("p");
            price.classList.add("price");
            price.textContent = "Price: " + artwork.price;

            // Add everything to card
            card.appendChild(title);
            card.appendChild(image);
            card.appendChild(description);
            card.appendChild(price);

            // Make entire card clickable
            link.appendChild(card);

            // Add to webpage
            artworkSection.appendChild(link);

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

            const cardLink = card.closest(".artwork-card-link");

            if (matchesSearch && matchesCategory) {
                cardLink.style.display = "";
                visibleCount++;
            } else {
                cardLink.style.display = "none";
            }

        });

        searchMessage.textContent = visibleCount + " artwork(s) found.";
    }

    // Submit search
    submitBtn.addEventListener("click", function (event) {
        event.preventDefault();
        searchArtwork();
    });

    // Search while typing
    searchInput.addEventListener("input", searchArtwork);

    // Clear search
    clearBtn.addEventListener("click", function () {

        searchInput.value = "";
        selectedCategory = "All";

        filterButtons.forEach(function (button) {
            button.classList.remove("active");
        });

        const allButton = document.querySelector(
            '#filters button[data-category="All"]'
        );

        if (allButton) {
            allButton.classList.add("active");
        }

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

    // Display cards
    showArtworkCards();

    // Show all artwork initially
    searchArtwork();

});
