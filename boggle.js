  let wordRandom = (value) =>{
  var text = "";
  var possible = value;

  for( var i=0; i < possible.length; i++ )
      text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}


let boogle_board = (value,baris,kolom) =>{
  var random = wordRandom(value)
  var word_random = random.split("")

  //write your code here
  var chunk = baris;
  var boogleboard = [];
  var length = baris*kolom

  for (var i=0;i< length;i+=chunk)
    {
      boogleboard.push(word_random.slice(i,i+chunk))
    }
  console.log(boogleboard);
}

//word_random("ABASASCJASDJASDJASDJASJD");

boogle_board("ABCDEFGHIJKLMNOPQRSTUVWXYZSDDSS",4,4)
