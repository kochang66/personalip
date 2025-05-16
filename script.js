
const blogData = [
  {
    img: "img/desktop/blog/photo1.png",
    publishDate: "2024/10/21",
    isNewest: true,
    isHotIsue: false,
    tag: ["前端開發 x 職涯成長"],
    title: "自學前端不用怕：從零開始的三大關鍵",
    intro: "嗨，我是 Alyse，一名前端工程師兼職涯諮詢師。我整理了三大關鍵，幫助你在短期內建立紮實基礎。",
  },
  {
    img: "img/desktop/blog/photo2.png",
    publishDate: "2024/10/11",
    isNewest: false,
    isHotIsue: false,
    tag: ["#React", "#入門基礎"],
    title: "React 入門不再迷惘：三步驟帶你上手核心概念",
    intro: "你是否對 React 感到好奇？我整理出三個循序漸進的步驟，幫助你掌握核心概念。",
  },
  {
    img: "img/desktop/blog/photo3.png",
    publishDate: "2024/09/07",
    isNewest: false,
    isHotIsue: false,
    tag: ["#作品集", "#求職攻略"],
    title: "前端作品集打造指南：讓你的專案成為履歷亮點",
    intro: "面試官透過作品集看見你的能力，這篇整理出作品集應該具備的重點。",
  },
];

const cardArea = document.getElementById("card-area");

blogData.forEach((item) => {
  const card = document.createElement("li");
  card.className = "card";

  let tagsHTML = item.tag
    .map((t) => `<span class="tag">${t}</span>`)
    .join("");
  if (item.isNewest)
    tagsHTML += `<span class="tag" style="background:#0027d5; color:white; padding:0 0.5rem; border-radius:20px;">最新文章</span>`;
  if (item.isHotIsue)
    tagsHTML += `<span class="tag" style="background:#0027d5; color:white; padding:0 0.5rem; border-radius:20px;">人氣文章</span>`;

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

// carousel
const cards = document.querySelectorAll(".card");
const prevBtn = document.querySelector("[data-prev-btn]");
const nextBtn = document.querySelector("[data-next-btn]");
let currentStart = 0;
let cardsPerView = 1;

function updateCardsPerView() {
  const w = window.innerWidth;
  if (w >= 1024) cardsPerView = 3;
  else if (w >= 768) cardsPerView = 2;
  else cardsPerView = 1;
}

function renderCarousel() {
  cards.forEach((card, i) => {
    card.classList.remove("active");
    if (i >= currentStart && i < currentStart + cardsPerView) {
      card.classList.add("active");
    }
  });

  prevBtn.disabled = currentStart === 0;
  nextBtn.disabled = currentStart + cardsPerView >= cards.length;
}

prevBtn.addEventListener("click", () => {
  if (currentStart > 0) {
    currentStart--;
    renderCarousel();
  }
});

nextBtn.addEventListener("click", () => {
  if (currentStart + cardsPerView < cards.length) {
    currentStart++;
    renderCarousel();
  }
});

window.addEventListener("resize", () => {
  updateCardsPerView();
  renderCarousel();
});

// Init
updateCardsPerView();
renderCarousel();
