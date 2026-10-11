function togglePlayerList(){
    var playerList = document.getElementById("playerlist");
    if (playerList.style.display === "none"){
        playerList.style.display = "block";
    }
    else{
        playerList.style.display = "none";
    }
}