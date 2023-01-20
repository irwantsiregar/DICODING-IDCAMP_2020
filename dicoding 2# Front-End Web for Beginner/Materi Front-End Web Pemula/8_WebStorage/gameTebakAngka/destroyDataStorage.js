destroyDataButton.addEventListener("click", function(){
    sessionStorage.removeItem(sessionAnswerKey);
    sessionStorage.removeItem(sessionUserAttempsKey);
    sessionStorage.removeItem(sessionUserIsPlayingKey);
    localStorage.removeItem(localTotalVictoryKey);
    localStorage.removeItem(localMaximumAttempsKey);
    // alert("Mohon me-refresh halaman ini kembali");
    location.reload();
});