
var textbox = document.getElementById("textbox");
var pwdBtn = document.getElementById("pwdbtn");
var copyBtn = document.getElementById("copybtn");
var specials = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
var numeric = "1234567890";
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var charOptions = "";
var convLength = 0;

function start() {
  var lower = confirm("Do you need Lowercase letters?");
  var upper = confirm("Do you need Uppercase letters?");
  var symbols = confirm("Do you need specials Characters?");
  var number = confirm("Do you need Numbers?");
  var length = prompt("length of your password?");
  convLength = parseInt(length);
  if(lower){
    charOptions += lowercase;
  }
  if(upper){
    charOptions += uppercase;
  }
  if(symbols){
    charOptions += specials;
  }
  if(number){
    charOptions += numeric;
  }
}

window.addEventListener("load",function() {
    start();
});

function generatePassword() {
  
  var pwd = '';
  for(var i = 0; i < convLength; i++){
    pwd += charOptions.charAt(Math.floor(Math.random() * charOptions.length));
  }
  return pwd;
}

pwdBtn.addEventListener("click", function() {
  event.preventDefault();
  textbox.value = generatePassword();
});

copyBtn.addEventListener("click",function(){
    textbox.select();

    document.execCommand("copy");
});