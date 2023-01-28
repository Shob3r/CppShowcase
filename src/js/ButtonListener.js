let clickCount = 0;
let button = document.querySelector("#buttonClicker");
let clickCounter = document.querySelector("#clickCounter");

let Text = "Total Clicks: ";

button.addEventListener("click", function() {
  clickCount++;
  console.log("button Clicked!")
  clickCounter.innerHTML = Text + clickCount;
})