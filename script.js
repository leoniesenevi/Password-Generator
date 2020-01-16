


        var specials= "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
        var numeric ="1234567890";
        var lowercase ="abcdefghijklmnopqrstuvwxyz";
        var uppercase ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        var charOptions ="";

    
        var lower =confirm(" Do you need Lowercase letters?");
        var upper =confirm(" Do you need Uppercase letters?");
        var symbols =confirm(" Do you need specials Characters?");
        var number =confirm(" Do you need Numbers?");
        var length = prompt("length of your password?");
        var convLength = parseInt(length);
    
        if (lower){
            charOptions+=lowercase
        }
        if(upper){
            charOptions+=uppercase
        }
        if(symbols){
            charOptions+=specials
        }
        if(number){
            charOptions+=numeric
        }
    
      

console.log(password(convLength,charOptions));

function password (length,charOptions){
    var pwd='';

    for(var i=0;i<length;i++){
        pwd+= charOptions.charAt(Math.floor(Math.random()*charOptions.length))
        
    }
    return pwd;
    
}

var textBox = document.getElementById("textbox");
var pwdBtn = document.getElementById("pwdbtn");


 pwdBtn.addEventListener("click",function(){
     event.preventDefault();
 
  
textBox.value = (password(convLength,charOptions));


 });


