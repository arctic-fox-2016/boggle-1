function randomString(){
  return String.fromCharCode(65 + Math.floor(Math.random() * 26));
}
function solve(){
  let board = []
  let temp  = []
  let table = `<table>`
  let rows = document.getElementById("rows").value
  let columns = document.getElementById("columns").value
  for(i = 1 ; i<=rows ; i++){
    table = table += `<tr>`
    for(j=1 ; j<=columns ; j++){
       temp.push(randomString())
       table += `<td> ${temp[j-1]} </td>`
    }
    table += `</tr>`
    board.push(temp)
    temp = []
  }
  table += `</table>`
  document.getElementById("div").innerHTML = table
  return board
}
