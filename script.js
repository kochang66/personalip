let blogData = [
  {
    img: "./img/desktop/blog/photo1.png",
    publishDate: "2024/10/21",
    isNewest: true,
    isHotIsue: false,
    tag: ["前端開發 x 職涯成長"],
    title: "自學前端不用怕：從零開始的三大關鍵",
    intro:
      "嗨，我是 Alyse，一名前端工程師兼職涯諮詢師。一直以來，我都很喜歡在部落格分享學習與工作心得，也常有讀者問：\"我想轉職/自學前端，該從哪裡開始？\" 其實自學的過程既自由又具挑戰性。我整理了三大關鍵，幫助你在短期內建立紮實基礎，並快速累積實戰經驗。希望能替你的前端之路帶來一些啟發與動力！",
  },
  {
    img: "./img/desktop/blog/photo2.png",
    publishDate: "2024/10/11",
    isNewest: false,
    isHotIsue: false,
    tag: ["#React", "#入門基礎"],
    title: "React 入門不再迷惘：三步驟帶你上手核心概念",
    intro:
      "你是否對 React 感到好奇，卻苦惱於該如何正式啟動學習之路？身為前端工程師兼職涯諮詢師，我常遇到同學問我：\"React 到底該怎麼入門？\"為了幫大家減少摸索的時間，我整理出三個循序漸進的關鍵步驟，帶你更輕鬆地掌握 React 核心概念，真正把理論應用在實際專案中。",
  },
  // 其餘文章略...
];

const cardArea = document.getElementById("card-area");

blogData.forEach((item) => {
  const card = document.createElement("li");
  card.classList.add("max-w-[416px]", "single-card", "justify-between");

  const tagsHTML = item.tag.map(
    (tag) => `<span class="text-[#0027D5] text-[1.5rem]">${tag}</span>`
  ).join("");

  const newTag = item.isNewest
    ? '<span class="font-[700] bg-[#0027D5] py-[0.375rem] px-[0.75rem] text-[white] rounded-[40px]">最新文章</span>'
    : "";

  const hotTag = item.isHotIsue
    ? '<span class="font-[700] bg-[#0027D5] py-[0.375rem] px-[0.75rem] text-[white] rounded-[40px]">人氣文章</span>'
    : "";

  card.innerHTML = `
    <div>
      <img class="mb-[1rem] w-full h-[200px]" src="${item.img}" alt="" />
      <time class="block mb-[0.25rem]">${item.publishDate}</time>
      <div class="flex gap-[0.5rem]">${tagsHTML}${newTag}${hotTag}</div>
      <h3 class="font-[700] text-[1.75rem] mb-[0.5rem]">${item.title}</h3>
      <p class="text-[#4B4B4B] mb-[1rem] card-text">${item.intro}</p>
    </div>
    <div>
      <a href="./blogDetail.html" class="inline-block border border-[black] rounded-[40px] px-[1rem] py-[0.5rem]">閱讀全文</a>
    </div>
  `;

  cardArea.appendChild(card);
});

document.addEventListener("DOMContentLoaded", function () {
  const singleCard = document.querySelectorAll(".single-card");
  const prevBtn = document.querySelector("[data-prev-btn]");
  const nextBtn = document.querySelector("[data-next-btn]");

  let currentStartIndex = 0;
  let displayNumber = 0;

  function displayCard() {
    const screenWidth = window.innerWidth;

    if (screenWidth >= 1365) {
      displayNumber = 3;
    } else if (screenWidth >= 930) {
      displayNumber = 2;
    } else {
      displayNumber = 1;
    }

    const endIndex = currentStartIndex + displayNumber;

    singleCard.forEach((card, index) => {
      if (index >= currentStartIndex && index < endIndex) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });

    prevBtn.disabled = currentStartIndex === 0;
    nextBtn.disabled = endIndex >= singleCard.length;
  }

  prevBtn.addEventListener("click", function () {
    if (currentStartIndex > 0) {
      currentStartIndex--;
      displayCard();
    }
  });

  nextBtn.addEventListener("click", function () {
    if (currentStartIndex + displayNumber < singleCard.length) {
      currentStartIndex++;
      displayCard();
    }
  });

  window.addEventListener("resize", displayCard);
  displayCard();
});