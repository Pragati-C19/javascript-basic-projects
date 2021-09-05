const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];   //hexadecimal numbers
const btn = document.getElementById("btn");               // here we can use querySelector also. getElementByID can only select an element by its ID whereas querySelector can select elements by ID, class, or any other type of selector.
const color = document.querySelector(".color");

//example we have to get color #f15025

btn.addEventListener("click", function () {
  let hexColor = "#";              //every color start with # but in our array just hexadecimal number store so here we declare hexColor = # and after that randomly adding hex values and create specific color     
  
  for (let i = 0; i < 6; i++) {
    hexColor += hex[getRandomNumber()];       // get random number's value and concat it with hexColor (#)
  }
  //console.log(hexColor);

  document.body.style.backgroundColor = hexColor;     // navigate and change var in css-> body tag -> bgcolor element   
  color.textContent = hexColor;                     // display color name generate by hexColor
  
});

function getRandomNumber() {            
  return Math.floor(Math.random() * hex.length);       // Logic is same as getRandomNumber function in app.js
}
