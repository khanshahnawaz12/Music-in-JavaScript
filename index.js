
for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {

    document.querySelectorAll("button")[i].addEventListener("click",
        function () {
            // var audio = new Audio('sounds/kick-bass.mp3');
            // audio.play();
            var buttonInnerHTML = this.innerHTML;

        }
    );
}

function makeSound(key) {
    switch (buttonInnerHTML) {
        case "Sa":
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;

        case "Re":
            var tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
            break;

        case "Ga":
            var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;

        case "Ma":
            var tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;

        case "Pa":
            var snare = new Audio('sounds/snare.mp3');
            snare.play();
            break;

        case "Da":
            var crash = new Audio('sounds/crash.mp3');
            crash.play();
            break;

        case "Ni":
            var kick = new Audio('sounds/kick-bass.mp3');
            kick.play();
            break;

        default: console.log(buttonInnerHTML);
            break;
    }
}