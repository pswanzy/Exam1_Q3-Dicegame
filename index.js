//Dice game, 3 dice
var randNum1 = Math.floor(Math.random() * 6) + 1; //set rand number range (1-6)
var randImgSrc1 = "images/dice" + randNum1 + ".png"; //set src filename
document.querySelectorAll("img")[0].setAttribute("src", randImgSrc1);

var randNum2 = Math.floor(Math.random() * 6) + 1;
var randImgSrc2 = "images/dice" + randNum2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randImgSrc2);

var randNum3 = Math.floor(Math.random() * 6) + 1;
var randImgSrc3 = "images/dice" + randNum3 + ".png";
document.querySelectorAll("img")[2].setAttribute("src", randImgSrc3)

//Winner is set
if (randNum1 + randNum2 + randNum3 === 7) {
  document.querySelector("h1").innerHTML = "We have a Super Lucky 7!";
}
else if ((randNum1 === 6) || (randNum2 === 6) || (randNum3 ===6)) {
  document.querySelector("h1").innerHTML = "We have a lucky 6!";
}  else {
  document.querySelector("h1").innerHTML = "We have no winner!";
}