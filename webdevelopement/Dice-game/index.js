var randomNumber1 = Math.floor(Math.random()*6)+1;
var randomNumber2 = Math.floor(Math.random()*6)+1;
var img_name = "images/dice"+ randomNumber1 + ".png";
console.log(img_name);
var img_name2 = "images/dice"+ randomNumber2 + ".png";
document.querySelector(".img1").setAttribute("src", img_name);  
document.querySelector(".img2").setAttribute("src", img_name2); 
if (randomNumber1> randomNumber2){
    document.querySelector(".Result").textContent = "Player 1 wins";
    document.querySelector(".Result").classList.add("win1");

}
else if (randomNumber1 == randomNumber2){
    document.querySelector(".Result").textContent = "Draw";
    document.querySelector(".Result").classList.add("dr");


}
else{
    document.querySelector(".Result").textContent = "Player 2 wins";
    document.querySelector(".Result").classList.add("win2");
}

