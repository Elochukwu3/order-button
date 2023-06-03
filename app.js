const btn = document.querySelector(".btn1");
const btnClose = document.querySelector(".btn2");
const section = document.querySelector("section");
const box = document.querySelector(".box");
const car = document.querySelector(".car-cont");
// let  progressDiv = document.querySelector(".line-nner");

btn.addEventListener("click", () => {
  section.style.display = "flex";
  btn.textContent = "";
  btn.classList.add("line");
  const progressDiv = document.createElement("div");
  progressDiv.classList.add("line-inner");
  btn.appendChild(progressDiv);


  setTimeout(() => {
    box.classList.add("in");
    car.style.animationName = "move";
  }, 50);

  let progressValue = 0;
  let interval = setInterval(moving, 100);

  setTimeout(() => {
    clearInterval(interval); 
    section.style.display = "none";
    btnClose.style.display = "flex";
    btn.style.display = "none";
  }, 6500);

  function moving() {
    if (progressValue >= 100) {
      clearInterval(interval);
    } else {
      progressValue += 10;
      progressDiv.style.width = `${progressValue}%`;
    }
  }
});
