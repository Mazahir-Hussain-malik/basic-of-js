var textBox = document.getElementById("textbox");
textBox.addEventListener("input",abc);
function abc(){
    text = this.value;
var len = text.length;
 var char = document.getElementById("char").innerHTML = len;
 text = text.trim();
 let word = text.split(" ");
 let cleanList = word.filter(function(elem){
     return elem != "";
 });
 document.getElementById("word").innerHTML = cleanList.length;
}
