let interval = null;
const startColor = () => {
  const colors = ["orange", "red", "green", "blue", "yellow"];
  let temp = Math.floor(Math.random() * colors.length);
  document.body.style.backgroundColor = colors[temp];
  document.getElementById("text").innerHTML = colors[temp];
};

document.getElementById("start").addEventListener("click", () => {
  interval = setInterval(startColor, 2000);
});
document.getElementById("stop").addEventListener("click", () => {
  clearInterval(interval);
  interval = null;
});
