let data = [
    {
        title: "Card 1",
        img: "https://tse1.mm.bing.net/th/id/OIP.n3wtSjSWoRnIkyoHR2GTJQHaE8?pid=Api&P=0&h=180",
        description: "Car 1",
        price: "200k"
    },
    {
        title: "Card 2",
        img: "https://tse1.mm.bing.net/th/id/OIP.ziQeRcDwdcV_rFZOpfTCWAHaDt?pid=Api&P=0&h=180",
        description: "Car 2",
        price: "150k"
    },
    {
        title: "Card 3",
        img: "https://tse4.mm.bing.net/th/id/OIP.9hPwl3SwLBgHlido_Ou6NgHaFJ?pid=Api&P=0&h=180",
        description: "Car 3",
        price: "100k"
    },
    {
        title: "Card 4",
        img: "https://tse2.mm.bing.net/th/id/OIP.Ga-u1mq06IE1lCC_68jZHQHaEK?pid=Api&P=0&h=180",
        description: "Car 4",
        price: "250k"
    },
    {
        title: "Card 5",
        img: "https://tse1.mm.bing.net/th/id/OIP.VulLdSY4bC16KTsrmcNKBAHaEA?pid=Api&P=0&h=180",
        description: "Car 5",
        price: "300k"
    }
];

let container = document.getElementById("container");

function createCard(title, img, description, price) {
    let card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
        <img src="${img}" alt="${title}">
        <h2>${title}</h2>
        <p>Description: ${description}</p>
        <p>Price: $${price}</p>
        <button class="buyBtn">Buy Now</button>
    `;
    container.appendChild(card);
}

let addCardBtn = document.getElementById("addCardBtn");
let addCss = document.getElementById("addCssBtn");

addCardBtn.addEventListener("click", function () {
    addCss.disabled = false;
    addCardBtn.disabled = true;
    addCardBtn.innerText = "Cards Added";
    data.forEach(car => {
        createCard(car.title, car.img, car.description, car.price);
    });
});

addCss.addEventListener("click", function () {
    addCss.disabled = true;
    addCss.innerText = "CSS Already Applied by external css";
});
