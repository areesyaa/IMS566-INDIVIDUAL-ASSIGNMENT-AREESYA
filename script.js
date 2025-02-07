document.addEventListener("DOMContentLoaded", function () {
    const profiles = [
        { name: "NURUL SYAZATUL AIN BT ZAWAWI", details: "Information System", img: "image1.jpg", link: "profileain.html" },
        { name: "NUR ALIA BT YAHAYA", details: "Information System", img: "image2.jpg", link: "profilealia.html" },
        { name: "NUR AREESYA BT MOHD LANI", details: "Information System", img: "image4.jpg", link: "profileareesya.html" },
        { name: "ALLYA MARISSA BT ROSMADI", details: "Information System", img: "image3.jpg", link: "profileallya.html" },
        { name: "NUR AFINA BT MAZLAN", details: "Information System", img: "image5.jpg", link: "profileafina.html" },
        { name: "AIRA MEDINA BT IBRAHIM", details: "Information System", img: "image6.jpg", link: "profileaira.html" }
    ];

    const container = document.getElementById("profiles-container");

    profiles.forEach(profile => {
        const card = document.createElement("div");
        card.classList.add("col-md-4");
        card.innerHTML = `
            <div class="card mb-3">
                <img src="${profile.img}" class="card-img-top" alt="Profile Image">
                <div class="card-body">
                    <h5 class="card-title">${profile.name}</h5>
                    <p class="card-text">${profile.details}</p>
                    <a href="${profile.link}" class="btn btn-primary">View Profile</a>
                </div>
            </div>
        `;
        container.appendChild(card);
    });
});
