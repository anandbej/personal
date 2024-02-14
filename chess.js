class Piece {
  constructor(type, color) {
    this.type = type;
    this.color = color;
  }
}

class ChessGame {
  constructor() {
    this.board = this.createBoard();
    this.currentPlayer = 'white';
  }

  createBoard() {
    const board = Array.from({ length:  8 }, () => new Array(8));

    // Pawns
    for (let i =  0; i <  8; i++) {
      board[1][i] = new Piece('pawn', 'white');
      board[6][i] = new Piece('pawn', 'black');
    }

    // Rooks
    board[0][0] = new Piece('rook', 'white');
    board[0][7] = new Piece('rook', 'white');
    board[7][0] = new Piece('rook', 'black');
    board[7][7] = new Piece('rook', 'black');

    // Knights
    board[0][1] = new Piece('knight', 'white');
    board[0][6] = new Piece('knight', 'white');
    board[7][1] = new Piece('knight', 'black');
    board[7][6] = new Piece('knight', 'black');

    // Bishops
    board[0][2] = new Piece('bishop', 'white');
    board[0][5] = new Piece('bishop', 'white');
    board[7][2] = new Piece('bishop', 'black');
    board[7][5] = new Piece('bishop', 'black');

    // Queens
    board[0][3] = new Piece('queen', 'white');
    board[7][3] = new Piece('queen', 'black');

    // Kings
    board[0][4] = new Piece('king', 'white');
    board[7][4] = new Piece('king', 'black');

    return board;
  }

  printBoard() {
    console.log('Current Board State:');
    this.board.forEach(row => console.log(row.map(cell => cell ? cell.type + (cell.color === 'white' ? 'W' : 'B') : '.').join(' ')));
  }

  movePiece(startX, startY, endX, endY) {
    const piece = this.board[startX][startY];
    if (!piece) {
      console.error('No piece at the specified position.');
      return;
    }

    if (this.isValidMove(piece, startX, startY, endX, endY)) {
      this.board[startX][startY] = null;
      this.board[endX][endY] = piece;
      this.printBoard();
      this.switchPlayer();
    } else {
      console.error('Invalid move');
    }
  }

  isValidMove(piece, startX, startY, endX, endY) {
    // Basic validation checks (no actual chess rules implemented)
    if (startX <  0 || startX >  7 || startY <  0 || startY >  7 ||
        endX <  0 || endX >  7 || endY <  0 || endY >  7) {
      return false;
    }
    if (this.board[startX][startY] === null || this.board[endX][endY] !== null) {
      return false;
    }

    // Placeholder for piece-specific movement validation
    // This should be expanded with the logic for each type of piece
    return true;
  }

  switchPlayer() {
    this.currentPlayer = this.currentPlayer === 'white' ? 'black' : 'white';
  }
}

const game = new ChessGame();
game.printBoard();

// Example usage
game.movePiece(1,  0,  2,  0); // Move white pawn from e2 to e3
game.movePiece(6,  0,  5,  0); // Move black pawn from e7 to e6
