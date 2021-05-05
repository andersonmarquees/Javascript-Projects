// const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const generateColor = () => {
  return "#" + Math.random().toString(16).substr(-6);
};

const buttonColor = document.getElementById("btn");
const spanColor = document.querySelector(".color");

buttonColor.addEventListener("click", () => {
  // document.body.style.background = generateColor();
  document.body.style.backgroundImage = `
    radial-gradient(circle, ${generateColor()}, ${generateColor()})`;
  spanColor.textContent = `${generateColor()} - ${generateColor()}`;
});

//  background-image: linear-gradient(to right top, #2c0537, #3d135d, #472688, #433db8, #1256eb);
