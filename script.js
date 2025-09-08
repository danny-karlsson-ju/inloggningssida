const namn = "test"
const lösenord = "1234"

let welcome_container = document.getElementById("welcome_container")
let login_container = document.getElementById("login_container") // make this class later want to learn class also query

let namnInput = document.getElementById("namn")
let lösenordInput = document.getElementById("lösenord")
let loginButton = document.getElementById("loginButton")

let failLogin = document.createElement("p")
let loginDivElements = document.getElementById("login_container")

let welcomeMessage = document.createElement("h1")
let signOutButton = document.createElement("button")


loginButton.addEventListener("click", function() {
    if (namnInput.value === namn && lösenordInput.value === lösenord) {
        welcome_container.style.display = "block"
        login_container.style.display = "none"

        signOutButton.innerHTML = "Sign out"
        document.getElementById("welcome_container").appendChild(signOutButton)
        // seperate this outside this function
        signOutButton.addEventListener("click", function() {
            console.log("works");
            welcome_container.style.display = "none"
            login_container.style.display = "block"
        })
        //loginDivElements.remove();
        loginDivElements.style.display = "none" // this should hide instead of remove
        welcomeMessage.innerHTML = "Welcome home, master!"
        document.getElementById("welcome_container").appendChild(welcomeMessage)
        console.log("test");
    } else {
        failLogin.innerHTML = "Please check your password and username and try again."
        document.getElementById("failMessageDiv").appendChild(failLogin);
    }
    
    console.log(namnInput.value);
    console.log(lösenordInput.value);
});
