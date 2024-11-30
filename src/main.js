document.querySelectorAll(".faq").forEach((faq) => {
  let answer = faq.querySelector(".faq__answer");
  let button = faq.querySelector("button");
  faq.addEventListener("click", function () {
    answer.classList.toggle("show");
    button.classList.toggle("show");
  });
});
