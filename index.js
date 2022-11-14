
var randomNumber1=Math.floor(Math.random()*6) + 1;
var randomDiceImg1="images/" + "dice"+randomNumber1+".png";
var randomNumber2=Math.floor(Math.random()*6) + 1;
var randomDiceImg2="images/" + "dice"+randomNumber2+".png";

document.querySelectorAll("img")[0].setAttribute("src",randomDiceImg1);
document.querySelectorAll("img")[1].setAttribute("src",randomDiceImg2);
if(randomNumber1>randomNumber2){
  document.querySelector("h1").innerHTML="🧨Yayy! Player 1 Won!";
}
else if(randomNumber1<randomNumber2){
  document.querySelector("h1").innerHTML="🧨Yayy! Player 2 Won!";
}
else{
  document.querySelector("h1").innerHTML="Its a draw";
}
