// Blog 資料
const blogData = [
  {
    img: "images/blog/photo1.png",
    publishDate: "2024/10/21",
    isNewest: true,
    isHotIssue: false,
    tag: ["前端開發 x 職涯成長"],
    title: "自學前端不用怕：從零開始的三大關鍵",
    intro: "嗨，我是 Alyse，一名前端工程師兼職涯諮詢師。我整理了三大關鍵，幫助你快速累積實戰經驗。"
  },
  {
    img: "images/blog/photo2.png",
    publishDate: "2024/10/11",
    isNewest: false,
    isHotIssue: false,
    tag: ["#React", "#入門基礎"],
    title: "React 入門不再迷惘：三步驟帶你上手核心概念",
    intro: "你是否對 React 感到好奇，卻苦惱於該如何正式啟動學習之路？我整理出三個步驟幫助你。"
  }
];

// 動態產出卡片
const cardArea = document.getElementById("card-area");
if (cardArea) {
  blogData.forEach((item) => {
    const card = document.createElement("li");
    card.classList.add("single-card");

    const tagsHTML = item.tag.map(
      (tag) => `<span class="tag">${tag}</span>`
    ).join("");

    const newTag = item.isNewest
      ? `<span class="tag-label">最新文章</span>`
      : "";

    const hotTag = item.isHotIssue
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
        <a href="blogDetail.html" class="read-more">閱讀全文</a>
      </div>
    `;
    cardArea.appendChild(card);
  });
}

// 輪播功能
document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".single-card");
  const prevBtn = document.querySelector("[data-prev-btn]");
  const nextBtn = document.querySelector("[data-next-btn]");
  let currentStartIndex = 0;
  let displayNumber = 0;

  function displayCards() {
    const width = window.innerWidth;
    displayNumber = width >= 1365 ? 3 : width >= 930 ? 2 : 1;
    const end = currentStartIndex + displayNumber;

    cards.forEach((card, i) => {
      card.style.display = (i >= currentStartIndex && i < end) ? "block" : "none";
    });

    if (prevBtn) prevBtn.disabled = currentStartIndex === 0;
    if (nextBtn) nextBtn.disabled = end >= cards.length;
  }

  if (prevBtn && nextBtn) {
    prevBtn.addEventListener("click", () => {
      if (currentStartIndex > 0) {
        currentStartIndex--;
        displayCards();
      }
    });

    nextBtn.addEventListener("click", () => {
      if (currentStartIndex + displayNumber < cards.length) {
        currentStartIndex++;
        displayCards();
      }
    });
  }

  window.addEventListener("resize", displayCards);
  displayCards();
});

// 搜尋欄功能
const input = document.getElementById("input-keyword");
if (input) {
  input.addEventListener("input", function () {
    const keyword = input.value.trim().toLowerCase();
    const cards = document.querySelectorAll(".single-card");

    cards.forEach(card => {
      const title = card.querySelector("h3").innerText.toLowerCase();
      const intro = card.querySelector("p").innerText.toLowerCase();
      card.style.display = (title.includes(keyword) || intro.includes(keyword)) ? "block" : "none";
    });
  });
}