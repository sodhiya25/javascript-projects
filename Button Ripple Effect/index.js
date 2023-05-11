const btnEl = document.getElementsByClassName("btn")[0];
btnEl.addEventListener("mouseover",(event)=>{
    const x = (event.pageX - btnEl.offsetLeft);
    const y = (event.pageY - btnEl.offsetTop);
    btnEl.style.setProperty("--xPos",x + "px");
    btnEl.style.setProperty("--yPos", y+"px");
});