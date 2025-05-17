document.addEventListener("DOMContentLoaded", function () {
  const blogData = [
    {
      img: "./img/desktop/blog/photo1.png",
      publishDate: "2024/10/21",
      isNewest: true,
      isHotIsue: false,
      tag: ["前端開發 x 職涯成長"],
      title: "自學前端不用怕：從零開始的三大關鍵",
      intro:
        "嗨，我是 Alyse，一名前端工程師兼職涯諮詢師。我整理了三大關鍵，幫助你在短期內建立紮實基礎，並快速累積實戰經驗。",
    },
    {
      img: "./img/desktop/blog/photo2.png",
      publishDate: "2024/10/11",
      isNewest: false,
      isHotIsue: false,
      tag: ["#React", "#入門基礎"],
      title: "React 入門不再迷惘：三步驟帶你上手核心概念",
      intro:
        "React 到底該怎麼入門？這篇文章整理三個循序漸進的關鍵步驟，幫你掌握核心概念。",
    },
    // 可新增更多資料...
  ];

  const cardArea = document.getElementById("card-area");

  blogData.forEach((item) => {
    const card = document.createElement("li");
    card.className = "single-card";

    const tagSpans = item.tag
      .map((tag) => `<span class="tag">${tag}</span>`) // class tag 請在 css 補上樣式
      .join("");

    const newestTag = item.isNewest
      ? '<span class="badge">最新文章</span>'
      : "";
    const hotTag = item.isHotIsue
      ? '<span class="badge">人氣文章</span>'
      : "";

    card.innerHTML = `
      <div>
        <img class="card-image" src="${item.img}" alt="${item.title}" />
        <time class="publish-date">${item.publishDate}</time>
        <div class="tag-group">${tagSpans}${newestTag}${hotTag}</div>
        <h3 class="card-title">${item.title}</h3>
        <p class="card-intro">${item.intro}</p>
      </div>
      <div>
        <a href="./blogDetail.html" class="read-more">閱讀全文</a>
      </div>
    `;

    cardArea.appendChild(card);
  });

  const singleCards = document.querySelectorAll(".single-card");
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
    const endIndex = currentIndex + displayCount;

    singleCards.forEach((card, i) => {
      if (i >= currentIndex && i < endIndex) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });

    prevBtn.disabled = currentIndex === 0;
    nextBtn.disabled = endIndex >= singleCards.length;
  }

  prevBtn.addEventListener("click", () => {
    if (currentIndex > 0) {
      currentIndex--;
      renderCarousel();
    }
  });

  nextBtn.addEventListener("click", () => {
    if (currentIndex + displayCount < singleCards.length) {
      currentIndex++;
      renderCarousel();
    }
  });

  window.addEventListener("resize", () => {
    updateDisplayCount();
    renderCarousel();
  });

  updateDisplayCount();
  renderCarousel();
});
