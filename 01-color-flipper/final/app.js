const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {                 //when user click on check me it navigate to addEventListener for click function. here click is a event follow by function in which what will happen after click function mention
  
  const randomNumber = getRandomNumber();
  // console.log(randomNumber);

  document.body.style.backgroundColor = colors[randomNumber];    //it navigate to css file in which body style background element is change into color. and bcoz of this bacground change 
  
  color.textContent = colors[randomNumber];            // textContent is use for display the color name form colors array 
});

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);     //random function gives value between 0-1. Here we take random value * array length. floor is use for larger numbers 
}
