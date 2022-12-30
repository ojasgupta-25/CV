function key_click(letter){
    switch (letter){
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            document.querySelector(".w").classList.add("pressed")
            setTimeout(function(){
                document.querySelector(".w").classList.remove("pressed")
            }, 100);
            break;
        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            document.querySelector(".a").classList.add("pressed")
            setTimeout(function(){
                document.querySelector(".a").classList.remove("pressed")
            }, 100);
            break;
        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            document.querySelector(".s").classList.add("pressed")
            setTimeout(function(){
                document.querySelector(".s").classList.remove("pressed")
            }, 100);
            break;
        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            document.querySelector(".d").classList.add("pressed")
            setTimeout(function(){
                document.querySelector(".d").classList.remove("pressed")
            }, 100);
            break;
        case "j":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            document.querySelector(".j").classList.add("pressed")
            setTimeout(function(){
                document.querySelector(".j").classList.remove("pressed")
            }, 100);
            break;
        case "k":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            document.querySelector(".k").classList.add("pressed")
            setTimeout(function(){
                document.querySelector(".k").classList.remove("pressed")
            }, 100);
            break;
        case "l":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            document.querySelector(".l").classList.add("pressed")
            setTimeout(function(){
                document.querySelector(".l").classList.remove("pressed")
            }, 100);
            break;

        default: console.log(this.innerHTML)
    }


}



for (var i = 0; i<document.querySelectorAll(".drum").length; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function (){

        key_click(this.innerHTML)


        
    });
}

document.addEventListener("keydown", function (){

    key_click(event.key)



});

// function buttonAnimation(currentKey){
//     var activeButton = document.querySelector("w").classList.add("pressed")
// }


