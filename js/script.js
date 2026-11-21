function showArtworkCard() {
    let projects = [
        {
            title:"Picnic Table",
            image:"./images/picnic.jpeg",
            price:"$60.00"
        },
        {
            title:"Abstract Sun Conure",
            image:"./images/petPortrait.jpeg",
            price:"Contact for pricing"
        },
        {
            title:"Custom Stetchbook Covers",
            image:"./images/sketchBook.jpeg",
            price:"$30.00-$50.00"
        },
        {
            title:"Floral Paintings",
            image:"./images/painting.png",
            price:"$40.00-$50.00"
        },
        {
            title:"Watercolor Paintings",
            image:"./images/IMG_6078.jpeg",
            price:"$40.00-$50.00"
        },
        {
            title:"Abstract Art",
            images:"./images/IMG_7207.jpeg",
            price:"$20.00-$40.00"
        }
    ]
};

const artworkSection = document.getElementById("artwork");

artworkSection.onbeforematch(function(artwork) {

    const card = document.createElement("div");
    card.classList.add("artwork-card");

    card.innerHTML = `
        <h2>${artwork.title}<h2>
        
        <figure>
            <img src="${artwork.image}" alt="${artwork.title}">
            <figcaption>${artwork.description}</figcaption>
            <p class="price">Price: ${artwork.price}</p>
        </figure>
        `;

        artworkSection.appendChild(card);

});

