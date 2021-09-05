const colors = ["green", "red", "yellow", "blue"];
const btn = document.querySelector(".btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {                 //when user click on check me it navigate to addEventListener for click function. here click is a event follow by function in which what will happen after click function mention
  
  const randomNumber = getRandomNumber();          // we want randomnumber between 0-3
  console.log(randomNumber);

  document.body.style.backgroundColor = colors[randomNumber];    //it navigate to css file in which body style background element is change into color. and bcoz of this bacground change 
  
  color.textContent = colors[randomNumber];            // textContent is use for display the color name from colors array 
});

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length) ;     //random function gives value between 0-1. Here we take random value * array length and the value of this is some float (decimal) value, so we floor is use for absolute number.
}
