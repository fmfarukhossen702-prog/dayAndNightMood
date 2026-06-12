let img = document.getElementById("img");
let leftBtn = document.getElementById("leftBtn")

let rightBtn = document.getElementById("rightBtn")
rightBtn.addEventListener("click",  function () {
    img.src = "image/night.png";
    leftBtn.classList.remove("see")
    rightBtn.classList.add("see-h")

})
 
leftBtn.addEventListener("click", function (){
    img.src = "image/day.png"
    rightBtn.classList.remove("see-h")
    leftBtn.classList.add("see")
})
const toggler = () => {  
    // img.style.color = "red"

  if (img.src.includes("image/day.png")){ 
    img.src = "image/night.png"
   
  }
  else{
    img.src = "image/day.png"
  }

}
let togg = document.getElementById("togg")
togg.addEventListener("click", function(){
  let colorr = document.getElementById("colorr").classList
    colorr.toggle("toggleColor");

// console.log(colorr);

// .style.color = "#53a8f7")
})




// let image = document.getElementById("image")
// let night = document.getElementById("night")
// let day = document.getElementById("day")

// const pic = night.addEventListener("click", () => {
//     image.src = "image/night.png";
// })
// const pik = day.addEventListener('click', () => {
//     image.src = "image/day.png";
// })

 


