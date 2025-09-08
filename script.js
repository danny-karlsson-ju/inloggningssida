const namn = "test"
const lösenord = "1234"

let namnInput = document.getElementById("namn")
let lösenordInput = document.getElementById("lösenord")
let loginButton = document.getElementById("loginButton")

let failLogin = document.createElement("p")

loginButton.addEventListener("click", function() {
    if (namnInput.value === namn && lösenordInput.value === lösenord) {
        window.location.href = "welcome.html";
    } else {
        failLogin.innerHTML = "Your username or password may be incorrect."
        document.getElementById("failMessageDiv").appendChild(failLogin);
    }
    
    console.log(namnInput.value);
    console.log(lösenordInput.value);
});
