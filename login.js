// Create the login function herf
function Login() {
    player_name = document.getElementById("player_name") ;
    localStorage.setItem("player_name", player_name);
        window.location = "gamepage.html";
}