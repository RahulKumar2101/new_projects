function isTouching(a, b) {
  const aRect = a.getBoundingClientRect();
  const bRect = b.getBoundingClientRect();

  return !(
    aRect.top + aRect.height < bRect.top ||
    aRect.top > bRect.top + bRect.height ||
    aRect.left + aRect.width < bRect.left ||
    aRect.left > bRect.left + bRect.width
  );
}

const avatar = document.querySelector("#player");
const coin= document.querySelector("#coin");

window.addEventListener('keyup', function(e){
 if(e.key==="ArrowDown"||e.key==='Down'){ 
   movingVertical(avatar,50);
    // console.log(e.key);
    }
    else if(e.key==='ArrowUp'||e.key==='Up'){
       movingVertical(avatar,-50)
        // console.log(e.key);
    }
    else if(e.key==='ArrowRight'||e.key==='Right'){
       movingHorizontal(avatar,50)
        avatar.style.transform='scale(1,1)'
        // console.log(e.key);
    }
    else if(e.key==='ArrowLeft'||e.key==='left'){
        movingHorizontal(avatar,-50)
        avatar.style.transform='scale(-1,1)'
        // console.log(e.key);
    } 
    if(isTouching(avatar,coin)){
        movingCoin()
    }
    
});

const movingVertical=(element,amount)=>{
    const currTop = extractPos(element.style.top);
        element.style.top = `${currTop + amount}px`;
}
const movingHorizontal=(element,amount)=>{
    const currleft = extractPos(element.style.left);
        element.style.left = `${currleft + amount}px`;
}
const extractPos = (pos) => {
  if (!pos) return 100;
   return parseInt(pos.slice(0, -2));
};

const movingCoin=()=>{
    const x= Math.floor(Math.random()*window.innerWidth)
    const y= Math.floor(Math.random()*window.innerHeight)
    coin.style.top=`${y}px`
    coin.style.left=`${x}px`
}

movingCoin();