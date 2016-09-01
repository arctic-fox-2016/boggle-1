var board = []
var temp  = []
var dimension = 4;


function randomHuruf(){
  //65.100
  return String.fromCharCode(Math.floor((Math.random() * 26) + 65));

}


function shake(){
  var baris = document.getElementById("baris").value
  var kolom = document.getElementById("kolom").value
  board=[]
  var tabel = ""
  tabel = "<table>"
  for(var a = 1 ; a<=baris ; a++){
    tabel = tabel += "<tr>"
    for(var b=1 ; b<=kolom ; b++){
       temp.push(randomHuruf())
       tabel += "<td>"+temp[b-1]+"</td>"
    }
    tabel += "</tr>"
    board.push(temp)
    temp = []
  }
  tabel += "</table>"
  document.getElementById("tabelDiv").innerHTML = tabel
  return board
}
