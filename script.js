const namn = "test"
const lösenord = "1234"

let namnInput = document.getElementById("namn")
let lösenordInput = document.getElementById("lösenord")
let loginButton = document.getElementById("loginButton")

let failLogin = document.createElement("p")
let loginDivElements = document.getElementById("content")

let welcomeMessage = document.createElement("h1")

loginButton.addEventListener("click", function() {
    if (namnInput.value === namn && lösenordInput.value === lösenord) {
        //loginDivElements.remove();
        loginDivElements.style.display = "none" // this should hide instead of remove
        welcomeMessage.innerHTML = "Welcome home, master!"
        document.body.appendChild(welcomeMessage)
        console.log("test");
        
    } else {
        failLogin.innerHTML = "Please check your password and username and try again."
        document.getElementById("failMessageDiv").appendChild(failLogin);
    }
    
    console.log(namnInput.value);
    console.log(lösenordInput.value);
});
