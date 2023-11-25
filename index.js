// Variables to track game state
let board = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';
let gameActive = true;

// Function to handle player clicks
function handleClick(index) {
    // Check if the cell is empty and the game is still active
    if (board[index] === '' && gameActive) {
        // Update the board and display
        board[index] = currentPlayer;
        updateBoard();

        // Check for a winner or a tie
        if (checkWinner()) {
            alert(`Player ${currentPlayer} wins!`);
            gameActive = false;
        } else if (checkTie()) {
            alert("It's a tie!");
            gameActive = false;
        } else {
            // Switch to the other player
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
    }
}

// Function to update the visual representation of the board
function updateBoard() {
    const cells = document.querySelectorAll('.cell');
    cells.forEach((cell, index) => {
        cell.textContent = board[index];
    });
}

// Function to check for a winner
function checkWinner() {
    const winningCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6]              // Diagonals
    ];

    for (const combo of winningCombinations) {
        const [a, b, c] = combo;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            return true; // We have a winner
        }
    }

    return false;
}

// Function to check for a tie
function checkTie() {
    return board.every(cell => cell !== '');
}
