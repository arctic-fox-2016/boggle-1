class BoggleBoard {
  constructor(height, width) {
    this._board = [];
    this._height = height;
    this._width = width;
  }

  shake() {
    // Repeat for every board height
    for (var h = 0; h < this._height; h++) {
      this._board.push([]);

      // Repeat for every board width
      for (var w = 0; w < this._width; w++) {

        // Push random letter using function
        this._board[h].push(this.random_letter());
      }
    }

    // Return board
    return this._board;
  }

  get_board() {
    return this._board;
  }

  random_letter() {
    // Return capital letter between A to Z
    return String.fromCharCode(65 + Math.floor(Math.random() * 26));
  }
}

var boggle = new BoggleBoard(4, 4);
console.log(boggle.shake());
