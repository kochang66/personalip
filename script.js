
const blogData = [
  {
    img: "img/desktop/blog/photo1.png",
    publishDate: "2024/10/21",
    isNewest: true,
    isHotIsue: false,
    tag: ["前端開發 x 職涯成長"],
    title: "自學前端不用怕：從零開始的三大關鍵",
    intro: "嗨，我是 Alyse，一名前端工程師兼職涯諮詢師。這篇文章我想分享給對前端開發感興趣，卻不知道如何開始的朋友...",
  },
  {
    img: "img/desktop/blog/photo2.png",
    publishDate: "2024/10/11",
    isNewest: false,
    isHotIsue: false,
    tag: ["#React", "#入門基礎"],
    title: "React 入門不再迷惘：三步驟帶你上手核心概念",
    intro: "React 到底該怎麼入門？我整理出三個循序漸進的關鍵步驟，幫助你上手核心觀念...",
  },
  {
    img: "img/desktop/blog/photo3.png",
    publishDate: "2024/09/07",
    isNewest: false,
    isHotIsue: false,
    tag: ["#作品集", "#求職攻略"],
    title: "前端作品集打造指南：讓你的專案成為履歷亮點",
    intro: "作品集是前端求職的關鍵，這篇文章總結了打造亮眼作品集的實戰經驗與建議。",
  }
];

const cardArea = document.getElementById("card-area");

if (cardArea) {
  blogData.forEach((item) => {
    const card = document.createElement("li");
    card.classList.add("single-card");

    card.innerHTML = `
      <div>
        <img class="mb-[1rem] w-full h-[200px]" src="${item.img}" alt="">
        <time class="block mb-[0.25rem]">${item.publishDate}</time>
        <div class="flex gap-[0.5rem]" data-tags></div>
        <h3 class="font-[700] text-[1.75rem] mb-[0.5rem]">${item.title}</h3>
        <p class="text-[#4B4B4B] mb-[1rem] card-text">${item.intro}</p>
      </div>
      <div>
        <a href="./blogDetail.html" class="inline-block border border-[black] rounded-[40px] px-[1rem] py-[0.5rem]">閱讀全文</a>
      </div>
    `;

    const tags = card.querySelector("[data-tags]");
    item.tag.forEach((tag) => {
      tags.innerHTML += `<span class="text-[#0027D5] text-[1.5rem]">${tag}</span>`;
    });
    if (item.isNewest) {
      tags.innerHTML += `<span class="font-[700] bg-[#0027D5] py-[0.375rem] px-[0.75rem] text-[white] rounded-[40px]">最新文章</span>`;
    }
    if (item.isHotIsue) {
      tags.innerHTML += `<span class="font-[700] bg-[#0027D5] py-[0.375rem] px-[0.75rem] text-[white] rounded-[40px]">人氣文章</span>`;
    }

    cardArea.appendChild(card);
  });

  const singleCards = document.querySelectorAll(".single-card");
  const prevBtn = document.querySelector("[data-prev-btn]");
  const nextBtn = document.querySelector("[data-next-btn]");

  let currentStartIndex = 0;
  let displayNumber = 1;

  function updateCardView() {
    const width = window.innerWidth;
    if (width >= 1365) {
      displayNumber = 3;
    } else if (width >= 930) {
      displayNumber = 2;
    } else {
      displayNumber = 1;
    }

    singleCards.forEach((card, index) => {
      card.style.display = (index >= currentStartIndex && index < currentStartIndex + displayNumber) ? "block" : "none";
    });

    prevBtn.disabled = currentStartIndex === 0;
    nextBtn.disabled = currentStartIndex + displayNumber >= singleCards.length;
  }

  prevBtn.addEventListener("click", () => {
    if (currentStartIndex > 0) {
      currentStartIndex--;
      updateCardView();
    }
  });

  nextBtn.addEventListener("click", () => {
    if (currentStartIndex + displayNumber < singleCards.length) {
      currentStartIndex++;
      updateCardView();
    }
  });

  window.addEventListener("resize", updateCardView);
  updateCardView();
}
