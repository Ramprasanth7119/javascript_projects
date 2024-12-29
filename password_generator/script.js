const passField = document.getElementById("password");


const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerCase = "abcdefghijklmnopqrstuvwxyz"
const numbers = "0123456789";
const specialChars = "!@#$%^&*()<>?/";

const lenght = 12;
const allChar = upperCase + lowerCase + numbers + specialChars;

function createPassword(){

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

function copy(){
    passField.select();
    document.execCommand("copy");
    alert("copied");

}