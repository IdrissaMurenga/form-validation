// REFERENCES
const form = document.querySelector("form")
const userName = document.querySelector("#userName");
const passWord = document.querySelector("#passWord");
const textRef = document.querySelector("#text");
const textRef2 = document.querySelector("#text2");

// FUNCTION
validation = () =>{
    userNameValue = userName.value
    passWordValue = passWord.value

    userNameValue === "" ? textRef.textContent = "add your name" : textRef.textContent ="";
    passWordValue === "" ? textRef2.textContent = "enter you password" : textRef2.textContent="";
}
form.addEventListener("submit",(e) =>{
    e.preventDefault();
    validation();
})
