playButton.addEventListener("click", function(){
    sessionStorage.setItem(sessionAnswerKey, getAnswer());
    sessionStorage.setItem(sessionUserIsPlayingKey, true);
    beforeGameDisplay.setAttribute("hidden", true);
    duringGameDisplay.removeAttribute("hidden");
});
 
answerButton1.addEventListener("click", function(){
    sessionUserAnswerField.innerText += "1";
    console.log(sessionUserAnswerField);
    if (sessionUserAnswerField.innerText.length == 3){
        checkAnswer(sessionUserAnswerField.innerText);
    }
});
 
answerButton2.addEventListener("click", function(){
    sessionUserAnswerField.innerText += "2";
    if (sessionUserAnswerField.innerText.length == 3){
        checkAnswer(sessionUserAnswerField.innerText);
    }
});
 
answerButton3.addEventListener("click", function(){
    sessionUserAnswerField.innerText += "3";
    if (sessionUserAnswerField.innerText.length == 3){
        checkAnswer(sessionUserAnswerField.innerText);
    }
});
 
function checkAnswer(userGuess){
    const answer = sessionStorage.getItem(sessionAnswerKey);
    if (userGuess==answer){
        duringGameDisplay.setAttribute("hidden", true);
        afterGameDisplay.removeAttribute("hidden");
        sessionTrueAnswerField.innerText = answer;
        updateScore();
    }else{
        const previousAttempAmount = parseInt(sessionStorage.getItem(sessionUserAttempsKey));
        sessionStorage.setItem(sessionUserAttempsKey, previousAttempAmount+1);
        sessionUserAttempsField.innerText = sessionStorage.getItem(sessionUserAttempsKey);
        sessionUserAnswerField.innerText = "";
        sessionUserWrongAnswerField.innerText = userGuess;
    }
}
 
function updateScore(){
    const sessionAttempsValue = parseInt(sessionStorage.getItem(sessionUserAttempsKey));
    const localAttempsValue = parseInt(localStorage.getItem(localMaximumAttempsKey));
    if (sessionAttempsValue > localAttempsValue){
            localStorage.setItem(localMaximumAttempsKey, sessionAttempsValue);
            localMaximumAttempField.innerText = sessionAttempsValue;
        }
    const previousTotalVictoryAmount = parseInt(localStorage.getItem(localTotalVictoryKey));
    localStorage.setItem(localTotalVictoryKey, previousTotalVictoryAmount+1);
    localTotalVictoryField.innerText = localStorage.getItem(localTotalVictoryKey);
}
 
window.addEventListener("beforeunload", function(){
    sessionUserAnswerField.innerText = "";
    sessionUserWrongAnswerField.innerText = "";
    sessionStorage.setItem(sessionUserAttempsKey, 0);
    sessionUserAttempsField.innerText = sessionStorage.getItem(sessionUserAttempsKey);
});