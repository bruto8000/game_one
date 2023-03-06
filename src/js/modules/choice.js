export function choice() {
  const blockChoice = document.querySelector(".voices");
  const clickChoice = document.querySelector(".voice");
  const imgGame = Array.from(document.querySelectorAll(".voices_img"));
  const elementSelection = document.querySelector(".img_game");

  clickChoice.addEventListener("click", function () {
    blockChoice.style.display = "block";
  });

  function clickBlock() {
    imgGame.forEach((element) => {
      element.addEventListener("click", (e) => {
        imgGame.forEach((el) => {
          el.classList.remove("._active");
          blockChoice.style.display = "none";
        });
        element.classList.toggle("._active");
        const cloneImg = element.cloneNode(true);
        elementSelection.appendChild(cloneImg);
        // Вот тут у меня не получаетяс сделать переход от одного элемента к другому
        const elementSelectionArr = [cloneImg];
        if (elementSelectionArr.length == elementSelection) {
          cloneImg.removeChild(cloneImg);
        }
      });
    });
  }

  clickBlock();
}
