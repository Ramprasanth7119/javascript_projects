const passField = document.getElementById("password");
const passLength = document.getElementById("length");
const error = document.getElementById("err");


const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const specialChars = "!@#$%^&*()<>?/";

const allChar = upperCase + lowerCase + numbers + specialChars;

function createPassword(){

        let lenght = passLength.value;

        if(lenght < 6 || lenght > 18){
            passField.value = "";
            
            error.style.display = "block";
            
        } else{
            error.style.display = "none";
            let password = "";

        password += upperCase[Math.floor(Math.random() * upperCase.length)];
        password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
        password += numbers[Math.floor(Math.random() * numbers.length)];
        password += specialChars[Math.floor(Math.random() * specialChars.length)];

        while(lenght > password.length){
            password += allChar[Math.floor(Math.random() * allChar.length)]
        }

        passField.value = password;
        }   
}
        document.addEventListener("keydown",(event)=>{
            if(event.key == "Enter"){
                createPassword()
            }
        })

function copy(){
    passField.select();
    document.execCommand("copy");
    alert("copied");

}