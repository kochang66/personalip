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
  {
    img: "./img/desktop/blog/photo3.png",
    publishDate: "2024/09/07",
    isNewest: false,
    isHotIsue: false,
    tag: ["#作品集", "#求職攻略"],
    title: "前端作品集打造指南：讓你的專案成為履歷亮點",
    intro:
      "對正在求職的前端工程師而言，作品集往往是第一個「說話」的利器。當面試官瀏覽你的網頁作品時，能夠快速了解你的程式邏輯、設計感以及解決問題的思路。我在協助多位同學優化履歷與作品集的過程中，總結出一些關鍵要素，分享給正在打造、升級作品集的你。",
  },
  // 更多文章可依需求補上
];

// 動態產出卡片
const cardArea = document.getElementById("card-area");

blogData.forEach((item) => {
  const card = document.createElement("li");
  card.classList.add("single-card");

  const tagsHTML = item.tag.map(
    (tag) => `<span class="tag">${tag}</span>`
  ).join("");

  const newTag = item.isNewest
    ? `<span class="tag-label">最新文章</span>`
    : "";

  const hotTag = item.isHotIsue
    ? `<span class="tag-label">人氣文章</span>`
    : "";

  card.innerHTML = `
    <div>
      <img src="${item.img}" alt="">
      <time>${item.publishDate}</time>
      <div class="tags">${tagsHTML}${newTag}${hotTag}</div>
      <h3>${item.title}</h3>
      <p class="card-text">${item.intro}</p>
    </div>
    <div>
      <a href="./blogDetail.html" class="read-more">閱讀全文</a>
    </div>
  `;

  cardArea.appendChild(card);
});

// 輪播控制
document.addEventListener("DOMContentLoaded", function () {
  const singleCards = document.querySelectorAll(".single-card");
  const prevBtn = document.querySelector("[data-prev-btn]");
  const nextBtn = document.querySelector("[data-next-btn]");

  let currentStartIndex = 0;
  let displayNumber = 0;

  function displayCards() {
    const screenWidth = window.innerWidth;

    if (screenWidth >= 1365) {
      displayNumber = 3;
    } else if (screenWidth >= 930) {
      displayNumber = 2;
    } else {
      displayNumber = 1;
    }

    const endIndex = currentStartIndex + displayNumber;

    singleCards.forEach((card, index) => {
      if (index >= currentStartIndex && index < endIndex) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });

    prevBtn.disabled = currentStartIndex === 0;
    nextBtn.disabled = endIndex >= singleCards.length;
  }

  prevBtn.addEventListener("click", function () {
    if (currentStartIndex > 0) {
      currentStartIndex--;
      displayCards();
    }
  });

  nextBtn.addEventListener("click", function () {
    if (currentStartIndex + displayNumber < singleCards.length) {
      currentStartIndex++;
      displayCards();
    }
  });

  window.addEventListener("resize", displayCards);
  displayCards();
});
