let board = [];
let turn = "white";

for (let i = 0; i < 8; i++) {
 board[i] = [];
 for (let j = 0; j < 8; j++) {
    let square = document.createElement("div");
    square.className = "square";
    if ((i + j) % 2 == 0) square.style.backgroundColor = "white";
    else square.style.backgroundColor = "gray";

    let piece = document.createElement("img");
    piece.className = "piece";
    if (i == 1) {
      piece.src = "pawn_black.png";
      square.appendChild(piece);
    }
    if (i == 6) {
      piece.src = "pawn_white.png";
      square.appendChild(piece);
    }

    document.getElementById("board").appendChild(square);
 }
}