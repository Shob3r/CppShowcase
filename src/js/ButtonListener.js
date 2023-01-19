let clickCount = 0;
const button = document.querySelector("#buttonClicker");
const clickCounter = document.querySelector("#clickCounter");

button.addEventListener("click", function() {
  clickCount++;
  console.log("button Clicked!")
  clickCount.innerText = clickCounter
})