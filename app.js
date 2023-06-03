const btn = document.querySelector("button");
const section = document.querySelector("section");
const box = document.querySelector(".box");
const car = document.querySelector(".car-cont");
// let  progressDiv = document.querySelector(".line-nner");

btn.addEventListener("click", ()=>{
    section.style.display = "flex";
    btn.textContent= ""
    btn.classList.add("line");
    const progressDiv = document.createElement("div");
    progressDiv.classList.add("line-inner")
    btn.appendChild(progressDiv)

    setTimeout(() => {   
        box.classList.add("in")
        car.style.animationName = 'move';
        progress()
    }, 50);
   
    
    function progress() {
        let progressValue = 0;
        let interval = setInterval(moving, 15)

        function moving() {
            if (progressValue>= 100) {
                clearInterval(interval)
            } else {
                progressValue += 1;
                progressDiv.style.width = `${progressValue}%`;
            }
        }
    }
    
})