const namn = "test"
const lösenord = "1234"

let welcome_container = document.getElementById("welcome_container")
let login_container = document.getElementById("login_container") // make this class later want to learn class also query


function createAllElements() {
    // Username paragrapth and input
    let usernameParagraph = document.createElement("p")
    usernameParagraph.textContent = "USERNAME"
    let usernameInput = document.createElement("input")
    usernameInput.type = "text"
    usernameInput.id = "usernameInputID"

    // Password paragrapth and input
    let passwordParagraph = document.createElement("p")
    passwordParagraph.textContent = "PASSWORD"
    let passwordInput = document.createElement("input")
    passwordInput.type = "password"
    passwordInput.id = "passwordInputID"

    // Remember me checkbox and label
    let rememberMeLabel = document.createElement("label")
    rememberMeLabel.innerHTML = '<input type="checkbox" id="rememberMeCheckboxID"> Remember me'
    rememberMeLabel.style.display = "block"

    // Sign in button
    let signInButton = document.createElement("button")
    signInButton.textContent = "Sign in"
    signInButton.id = "signInButtonID"
    
    // Check account details paragrapth
    let checkAccountDetailsParagrapth = document.createElement("p")
    checkAccountDetailsParagrapth.textContent = "Please check your password and username and try again."
    checkAccountDetailsParagrapth.style.display = "none" // TODO NEED TO SHOW IF SIGNIN FAILS
    checkAccountDetailsParagrapth.id = "checkAccountDetailsParagrapthID"
    
    // Append all login elements to login div container
    login_container.append(usernameParagraph, usernameInput, passwordParagraph, passwordInput, rememberMeLabel, signInButton, checkAccountDetailsParagrapth,) // can append all
    
    // Welcome h1
    let welcomeHeader1 = document.createElement("h1")
    welcomeHeader1.textContent = "Welcome home, master!"
    welcomeHeader1.id = "welcomeHeader1ID"

    // Sign out button
    let signOutButton = document.createElement("button")
    signOutButton.textContent = "Sign Out"
    signOutButton.id = "signOutButtonID"
    
    // Append all welcome elements to welcome div container
    welcome_container.append(welcomeHeader1, signOutButton,)
} 
createAllElements() // Calls this function first to create all elements and id ref


let checkAccountDetailsParagrapthID = document.getElementById("checkAccountDetailsParagrapthID")
let signInButtonID = document.getElementById("signInButtonID")
signInButtonID.addEventListener("click", function() {
    // Check checkbox status 
    check_checkbox_checked()

    let usernameInputID = document.getElementById("usernameInputID")
    let passwordInputID = document.getElementById("passwordInputID")
    
    // Check if both username and password inputs match hardcoded values
    if (usernameInputID.value === namn && passwordInputID.value === lösenord) {
        show_and_hide()
        console.log("Correct login");

        let welcomeHeader1ID = document.getElementById("welcomeHeader1ID")
        // update welcome message to name but boring with test as name
        //welcomeHeader1ID.textContent = ("Welcome home, " + usernameInputID.value) 
    } else {
        checkAccountDetailsParagrapthID.style.display = "block"
        console.log("Fail login");
    }
    console.log("signInButton function");
})


let signOutButtonID = document.getElementById("signOutButtonID")
signOutButtonID.addEventListener("click", function() {
    // Clear local storage and call show and hide function
    localStorage.clear("RememberMe") // removeItem works to but instuctions said to clear 
    show_and_hide()
    console.log("signOutButton function");
})


let rememberMeCheckboxID = document.getElementById("rememberMeCheckboxID")
rememberMeCheckboxID.addEventListener("click", check_checkbox_checked) // Makes debug easier but dont need it
    

function check_checkbox_checked() {
    //  checks if checkbox is checked and sets the localstorage key: value
    if (rememberMeCheckboxID.checked) {
        localStorage.setItem("RememberMe", "true")
    } else {
        localStorage.setItem("RememberMe", "false")
    }
    console.log("rememberMeCheckbox function"); 
}


function show_and_hide() {
    // This works with 3 states
    // 1 sign in and remember me this hides sign in and shows welcome site
    // 2 sign in and dont remember me this hides sign in and shows welcome site
    // 3 sign out clears local storage so cant check so else 

    if (localStorage.getItem("RememberMe") === "true") {
        // 1 Stay logged in
        welcome_container.style.display = "block"
        login_container.style.display = "none"
    } else if (localStorage.getItem("RememberMe") === "false"){
        // 2 Temp logged in
        welcome_container.style.display = "block"
        login_container.style.display = "none"
    } else {
        // 3 Not loggeed in
        welcome_container.style.display = "none"
        login_container.style.display = "block"
        checkAccountDetailsParagrapthID.style.display = "none"
    }
    console.log("show_and_hide function"); 
}; 
show_and_hide() // calls at ready becuase if rememeber me true is hides sign in 
