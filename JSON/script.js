guessNum =parseInt(Math.random)*5;
guessAttempts=0;

function guessButton() {
    let guessInput=document.querySelector("#guessInput").Value;
guessAttempt++;
if(guessInput >guessNum){
    alert("too high");
}else if(guessInput <guessNum){
    alert("too high");
}
else if(guessInput ==guessNum){
 alert ('you won');
}
 }