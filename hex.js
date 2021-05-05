const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const generateColor = () => {
  return Math.floor(Math.random() * hex.length);
};

const buttonColor = document.getElementById("btn");
const spanColor = document.querySelector(".color");

buttonColor.addEventListener("click", () => {
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor += hex[generateColor()];
  }
  document.body.style.background = hexColor;
  spanColor.textContent = hexColor;
});
