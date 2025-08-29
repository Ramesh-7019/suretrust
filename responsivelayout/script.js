let container = document.getElementById("container");
let addCardBtn = document.getElementById("addCardBtn");
let clearStorageBtn = document.getElementById("clearStorageBtn");


let sampleCards = [
  { title: "Car 1", img: "https://tse1.mm.bing.net/th/id/OIP.n3wtSjSWoRnIkyoHR2GTJQHaE8?pid=Api&P=0&h=180", desc: "Nice Car", price: "200k" },
  { title: "Car 2", img: "https://tse1.mm.bing.net/th/id/OIP.ziQeRcDwdcV_rFZOpfTCWAHaDt?pid=Api&P=0&h=180", desc: "Fast Car", price: "150k" },
  { title: "Car 3", img: "https://tse4.mm.bing.net/th/id/OIP.9hPwl3SwLBgHlido_Ou6NgHaFJ?pid=Api&P=0&h=180", desc: "Cool Car", price: "100k" },
  { title: "Car 4", img: "https://tse2.mm.bing.net/th/id/OIP.Ga-u1mq06IE1lCC_68jZHQHaEK?pid=Api&P=0&h=180", desc: "Luxury Car", price: "250k" }
];


function createCard(cardData) {
  let card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
    <img src="${cardData.img}" alt="${cardData.title}">
    <h2>${cardData.title}</h2>
    <p>Description: ${cardData.desc}</p>
    <p>Price: $${cardData.price}</p>
    <button class="buyBtn">Buy Now</button>
  `;
  container.appendChild(card);
}


function loadCards() {
  container.innerHTML = ""; // clear old
  let storedCards = JSON.parse(localStorage.getItem("cards")) || [];
  storedCards.forEach(card => createCard(card));

  
  if (storedCards.length >= 8) {
    addCardBtn.disabled = true;
    addCardBtn.innerText = "Limit Reached (8 cards)";
  } else {
    addCardBtn.disabled = false;
    addCardBtn.innerText = "Add Card";
  }
}


addCardBtn.addEventListener("click", () => {
  let storedCards = JSON.parse(localStorage.getItem("cards")) || [];

  if (storedCards.length >= 8) {
    alert("You can only add up to 8 cards!");
    return;
  }

  let randomCard = sampleCards[Math.floor(Math.random() * sampleCards.length)];
  storedCards.push(randomCard);

  
  localStorage.setItem("cards", JSON.stringify(storedCards));

  
  loadCards();
});


clearStorageBtn.addEventListener("click", () => {
  localStorage.removeItem("cards");
  container.innerHTML = "";
  addCardBtn.disabled = false;
  addCardBtn.innerText = "Add Card";
});


window.onload = loadCards;
