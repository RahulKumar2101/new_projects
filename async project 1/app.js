const randomColor = function () {
  const hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};
console.log(randomColor());

const stopBtn = document.querySelector("#stop");
console.log(stopBtn);

let interValid;
let startChangingColor = function () {
    // console.log("start")
   if(!interValid){
    interValid=setInterval((changingColor),1000)
   }
    function changingColor(){
        let body = document.querySelector("#body");
    body.style.backgroundColor = `${randomColor()}`;
    }
};
const startBtn = document.querySelector("#start");
startBtn.addEventListener('click',startChangingColor)

function stopfuunc(){
    // console.log("start");
   clearInterval(interValid);
   interValid=null
    
}
stopBtn.addEventListener('click',stopfuunc)


// console.log(startBtn);
// startBtn.addEventListener('click',function(){
//     console.log("start");
// })

// startBtn.addEventListener("click", startChangingColor);
// stopBtn.addEventListener("click",stopChangingColor);
// randomColor();
// const numb = [23, 34, 23, 43, 22, 21];
// const doubles = numb.map(function (ele) {
//     return ele * 2;
// });
