// script.js

const blogData = [
  {
    img: "img/desktop/blog/photo1.png",
    publishDate: "2024/10/21",
    tag: ["#前端", "#職涯"],
    title: "自學前端不用怕：從零開始的三大關鍵",
    intro: "自學的過程既自由又具挑戰性，本文整理三大關鍵，幫助建立基礎並累積實戰經驗。"
  },
  {
    img: "img/desktop/blog/photo2.png",
    publishDate: "2024/10/11",
    tag: ["#React", "#入門"],
    title: "React 入門不再迷惘：三步驟帶你上手核心概念",
    intro: "本文整理 React 入門三步驟，幫助你掌握核心概念並應用於實務專案。"
  },
  {
    img: "img/desktop/blog/photo3.png",
    publishDate: "2024/09/07",
    tag: ["#作品集", "#履歷"],
    title: "前端作品集打造指南：讓你的專案成為履歷亮點",
    intro: "透過作品集展現技術與設計思維，提升履歷亮點與面試機會。"
  }
];

const cardArea = document.getElementById("card-area");

function renderCarousel() {
  cardArea.innerHTML = "";
  blogData.forEach(item => {
    const card = document.createElement("li");
    card.className = "card";
    const tagsHTML = item.tag.map(t => `<span class="tag">${t}</span>`).join(" ");

    card.innerHTML = `
      <img src="${item.img}" alt="">
      <time>${item.publishDate}</time>
      <div>${tagsHTML}</div>
      <h3>${item.title}</h3>
      <p>${item.intro}</p>
      <a href="blogDetail.html" class="read-more">閱讀全文</a>
    `;
    cardArea.appendChild(card);
  });
  updateCardsPerView();
}

let currentStartIndex = 0;
let displayNumber = 1;

function updateCardsPerView() {
  const width = window.innerWidth;
  if (width >= 1200) displayNumber = 3;
  else if (width >= 768) displayNumber = 2;
  else displayNumber = 1;
  showCards();
}

function showCards() {
  const cards = document.querySelectorAll("#card-area li");
  cards.forEach((card, idx) => {
    card.style.display = (idx >= currentStartIndex && idx < currentStartIndex + displayNumber) ? "block" : "none";
  });
  document.querySelector("[data-prev-btn]").disabled = currentStartIndex === 0;
  document.querySelector("[data-next-btn]").disabled = currentStartIndex + displayNumber >= cards.length;
}

document.querySelector("[data-prev-btn]").addEventListener("click", () => {
  if (currentStartIndex > 0) {
    currentStartIndex--;
    showCards();
  }
});

document.querySelector("[data-next-btn]").addEventListener("click", () => {
  if (currentStartIndex + displayNumber < blogData.length) {
    currentStartIndex++;
    showCards();
  }
});

window.addEventListener("resize", updateCardsPerView);
document.addEventListener("DOMContentLoaded", renderCarousel);
