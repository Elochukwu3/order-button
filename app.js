const btn = document.querySelector(".btn1");
const btnClose = document.querySelector(".btn2-cont");
const section = document.querySelector("section");
const box = document.querySelector(".box");
const car = document.querySelector(".car-cont");

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
  let interval = setInterval(moving, 60);

  setTimeout(() => {
    clearInterval(interval); 
    section.style.display = "none";
    btnClose.style.display = "block";
    btn.style.display = "none";
  }, 4000);

  function moving() {
    if (progressValue >= 100) {
      clearInterval(interval);
    } else {
      progressValue += 2.5;
      progressDiv.style.width = `${progressValue}%`;
    }
  }
});
