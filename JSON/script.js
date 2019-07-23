
let gameNum = parseInt(Math.random() * 8);
let gameAttempt = 0;
let gamescore=0;

function gamebutton(){
     let gameInput = document.querySelector("#gameInput").value;
      gameAttempt++;
     if (gameInput > gameNum) {
         alert("too high");
     } else if (gameInput < gameNum) {
         alert("too low");
     }
     else if (gameInput == gameNum) {
        alert('you won');
     }

    }




