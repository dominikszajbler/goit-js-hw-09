const body = document.querySelector("body");
const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');

const getRandomHexColor = () => {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
  };
  let randomHex;
startBtn.addEventListener("click", (e) => {
    e.preventDefault();
    startBtn.disabled = true;
    stopBtn.disabled = false;
    randomHex = setInterval(()=>{
        body.style.backgroundColor = `${getRandomHexColor()}`
    }, 1000);
})
stopBtn.addEventListener("click",  () => {
    startBtn.disabled = false;
    stopBtn.disabled = true;
    if(randomHex){
        clearInterval(randomHex);
    }
});

