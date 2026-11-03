function togglePlayerList(){
    var playerList = document.getElementById("playerlist");
    if (playerList.style.display === "none"){
        playerList.style.display = "block";
    }
    else{
        playerList.style.display = "none";
    }
}
function swapButtons(){
    var yesButton = document.getElementById("yes_button")
    var noButton = document.getElementById("no_button")

    yesButton.innerHTML = "No"
    noButton.innerHTML = "Yes"
}
function unSwapButtons(){
    var yesButton = document.getElementById("yes_button")
    var noButton = document.getElementById("no_button")

    yesButton.innerHTML = "Yes"
    noButton.innerHTML = "No"
}