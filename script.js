let blogData = [
  {
    img: "./img/desktop/blog/photo1.png",
    publishDate: "2024/10/21",
    isNewest: true,
    isHotIsue: false,
    tag: ["前端開發 x 職涯成長"],
    title: "自學前端不用怕：從零開始的三大關鍵",
    intro:
      "嗨，我是 Alyse，一名前端工程師兼職涯諮詢師。一直以來，我都很喜歡在部落格分享學習與工作心得，也常有讀者問：「我想轉職/自學前端，該從哪裡開始？」其實自學的過程既自由又具挑戰性。我整理了三大關鍵，幫助你在短期內建立紮實基礎，並快速累積實戰經驗。希望能替你的前端之路帶來一些啟發與動力！",
  },
  {
    img: "./img/desktop/blog/photo2.png",
    publishDate: "2024/10/11",
    isNewest: false,
    isHotIsue: false,
    tag: ["#React", "#入門基礎"],
    title: "React 入門不再迷惘：三步驟帶你上手核心概念",
    intro:
      "你是否對 React 感到好奇，卻苦惱於該如何正式啟動學習之路？身為前端工程師兼職涯諮詢師，我常遇到同學問我：「React 到底該怎麼入門？」為了幫大家減少摸索的時間，我整理出三個循序漸進的關鍵步驟，帶你更輕鬆地掌握 React 核心概念，真正把理論應用在實際專案中。",
  },
];

const cardArea = document.getElementById("card-area");

blogData.forEach((item) => {
  const card = document.createElement("li");
  card.classList.add("single-card");

  const tagHTML = item.tag
    .map((tag) => `<span class="tag">${tag}</span>`)
    .join("");

  const newTag = item.isNewest
    ? '<span class="badge">最新文章</span>'
    : "";

  const hotTag = item.isHotIsue
    ? '<span class="badge">人氣文章</span>'
    : "";

  card.innerHTML = `
    <div class="card-body">
      <img class="thumbnail" src="${item.img}" alt="" />
      <time class="publish-date">${item.publishDate}</time>
      <div class="tags">${tagHTML}${newTag}${hotTag}</div>
      <h3 class="card-title">${item.title}</h3>
      <p class="card-text">${item.intro}</p>
      <a href="./blogDetail.html" class="read-more">閱讀全文</a>
    </div>
  `;

  cardArea.appendChild(card);
});

document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".single-card");
  const prevBtn = document.querySelector("[data-prev-btn]");
  const nextBtn = document.querySelector("[data-next-btn]");

  let currentIndex = 0;
  let displayCount = 1;

  function updateDisplayCount() {
    const width = window.innerWidth;
    if (width >= 1365) {
      displayCount = 3;
    } else if (width >= 930) {
      displayCount = 2;
    } else {
      displayCount = 1;
    }
  }

  function renderCarousel() {
    updateDisplayCount();
    const endIndex = currentIndex + displayCount;

    cards.forEach((card, i) => {
      card.style.display = i >= currentIndex && i < endIndex ? "block" : "none";
    });

    prevBtn.disabled = currentIndex === 0;
    nextBtn.disabled = endIndex >= cards.length;
  }

  prevBtn.addEventListener("click", () => {
    if (currentIndex > 0) {
      currentIndex--;
      renderCarousel();
    }
  });

  nextBtn.addEventListener("click", () => {
    if (currentIndex + displayCount < cards.length) {
      currentIndex++;
      renderCarousel();
    }
  });

  window.addEventListener("resize", renderCarousel);
  renderCarousel();
});