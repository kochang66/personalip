document.addEventListener("DOMContentLoaded", function () {
  const cardArea = document.getElementById("card-area");
  if (!cardArea) return;

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
      card.style.display = (index >= currentStartIndex && index < endIndex) ? "block" : "none";
    });

    prevBtn.disabled = currentStartIndex === 0;
    nextBtn.disabled = endIndex >= singleCards.length;
  }

  prevBtn?.addEventListener("click", () => {
    if (currentStartIndex > 0) {
      currentStartIndex--;
      displayCards();
    }
  });

  nextBtn?.addEventListener("click", () => {
    if (currentStartIndex + displayNumber < singleCards.length) {
      currentStartIndex++;
      displayCards();
    }
  });

  window.addEventListener("resize", displayCards);
  displayCards();
});
