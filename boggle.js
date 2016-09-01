var boggle = $("#boggle");

var txt_x = $("#txt-x");
var txt_y = $("#txt-y");
var btn_process = $("#btn-process");
var boggle_table = $("#boggle-table");
var alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var def_x = def_y = 4;
var table_array = [];

function init_table(){
  boggle_table.empty();
  for(var idx = 0; idx < def_x; idx++){
    table_array[idx] = [];
    boggle_table.append("<tr>");
    for(var idy = 0; idy < def_y; idy++){
      table_array[idx][idy] = alphabet[Math.floor(Math.random() * alphabet.length)];
      boggle_table.find("tr:last-child").append("<td>" + table_array[idx][idy] + "</td>");


    }
    boggle_table.append("</tr>");
  }
}

function init_process(){
  btn_process.unbind().on("click", function(event){
    event.preventDefault();
    var value_x = txt_x.val().trim();
    var value_y = txt_y.val().trim();

    def_x = value_x;
    def_y = value_y;
    init_table();
  });
}

$(function(){
  init_table(); // function shake
  init_process();
});
