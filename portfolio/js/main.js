// Footer year
const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();

// Project filtering (All / Engineering / Finance / Art)
const buttons = document.querySelectorAll(".filter");
const cards = document.querySelectorAll(".card");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const category = button.dataset.filter;

    buttons.forEach((b) => b.classList.remove("active"));
    button.classList.add("active");

    cards.forEach((card) => {
      const show = category === "all" || card.dataset.category === category;
      card.classList.toggle("hidden", !show);
    });
  });
});
