// REFERENCES
const nameRef = document.querySelector("#name");
const userNameRef = document.querySelector("#userName");
const emailRef = document.querySelector("#email");
const emailText = document.querySelector("#emailText");
const passRef = document.querySelector("#pass");
const passWord = document.querySelector("#password");
const numRef = document.querySelector("#num");
const number = document.querySelector("#number");
const form = document.querySelector("#form")

// FUNCTION

validation = () =>{
    nameValue = nameRef.value
    emailValue = emailRef.value
    passValue = passRef.value
    numValue = numRef.value

    nameValue === "" ? userNameRef.textContent = "Please add user name" : userNameRef.textContent = "";
    emailValue === "" ? emailText.textContent = "put your email" : emailText.textContent = "";
    passValue === "" ? passWord.textContent = "add your password" : passWord.textContent = "";
    numValue === "" ? number.textContent = "enter your number" : number.textContent = ""; 
}
// EVENTS
form.addEventListener("submit",(e)=>{
    e.preventDefault()
    validation()
}) 
