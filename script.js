// Create a new Chessboard
const board1 = Chessboard('board1', {
    draggable: true,
    dropOffBoard: 'trash',
    sparePieces: true
});

// Create a new Chess game
const game = new Chess();

// Handle piece movement
function handleMove(oldPos, newPos) {
    const move = game.move({
        from: oldPos,
        to: newPos,
        promotion: 'q' // promote to queen for simplicity
    });

    // Check for game over or other conditions
    if (game.game_over()) {
        alert('Game Over');
    }
}

// Handle events when a piece is picked up or dropped
board1.on('dragStart', (source, piece, position, orientation) => {
    // Implement any logic needed when a piece is picked up
});

board1.on('drop', (source, target) => {
    // Implement logic when a piece is dropped
    handleMove(source, target);
});

// Initial position setup
board1.position(game.fen());
