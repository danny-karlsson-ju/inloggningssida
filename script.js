const namn = "test"
const lösenord = "1234"

let namnInput = document.getElementById("namn")
let lösenordInput = document.getElementById("lösenord")
let loginButton = document.getElementById("loginButton")

loginButton.addEventListener("click", function() {
    if (namnInput.value === namn && lösenordInput.value === lösenord) {
        window.location.href = "welcome.html";
    }
    
    console.log(namnInput.value);
    console.log(lösenordInput.value);
});
