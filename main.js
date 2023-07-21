// console.log("Hello, script is working in different file!");

// // input
// var filename = prompt("Give me the file name")          // prompt is used to get data / input from user

// // processing
// var status = "Successfully downloaded the file " + filename;

// // output 
// alert(status)  // alert is used to give user data / output     

var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");

console.log(txtInput);

function clickHandler(){   // callbacks  
    console.log("clicked!");
    console.log("input", txtInput.value);
};
btnTranslate.addEventListener("click", clickHandler)  // callback this function