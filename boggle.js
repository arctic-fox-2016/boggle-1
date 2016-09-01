function myFunction() {
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var i ;
  var j ;
  var huruf = [];

  for (var i = 0; i < 16; i++) {
    huruf.push(possible.charAt(Math.floor(Math.random()*possible.length)));
    console.log(huruf[i])
  }

  for (var j = 0; j < huruf.length; j++) {
    document.getElementsByClassName("boogle1")[j].innerHTML= huruf[j];
  }
// document.getElementById("1").innerHTML = "A";
// document.getElementById("2").innerHTML = "B";
// document.getElementById("3").innerHTML = "C";
// document.getElementById("4").innerHTML = "D";
// document.getElementById("5").innerHTML = "E";
// document.getElementById("6").innerHTML = "F";
// document.getElementById("7").innerHTML = "G";
// document.getElementById("8").innerHTML = "H";
// document.getElementById("9").innerHTML = "I";
// document.getElementById("10").innerHTML = "J";
// document.getElementById("11").innerHTML = "K";
// document.getElementById("12").innerHTML = "L";
// document.getElementById("13").innerHTML = "M";
// document.getElementById("14").innerHTML = "N";
// document.getElementById("15").innerHTML = "O";
// document.getElementById("16").innerHTML = "P";

}
