$(document).ready(function () {
    function game() {
        var turnCount = 0;
        var grid = [null, null, null, null, null, null, null, null, null];
        $('#board tr td').click(function () {
            if ((turnCount % 2 === 0)) {
                $(this).append("X");
                $(this).css('background-color', 'gray');
                $('div #playerturn').html("Player 2 (O) - Please choose a box");
                turnCount++;
                var grid = $('#board tr td').map(function () {
                    return $(this).text();
                }).get();
                checkForWin();
                console.log(grid);
                return grid;
            } else {
                $(this).append("O");
                $(this).css('background-color', 'gray');
                $('div #playerturn').html("Player 1 (X) - Please choose a box");
                turnCount++;
                var grid = $('#board tr td').map(function () {
                    return $(this).text();
                }).get();
                checkForWin();
                console.log(grid);
                return grid;
            }
            function checkForWin() {
                if (
                    //grid row winners
                    (grid[0] === 'X' && grid[1] === "X" && grid[2] === "X")
                    || (grid[3] === 'X' && grid[4] === "X" && grid[5] === "X")
                    || (grid[6] === 'X' && grid[7] === "X" && grid[8] === "X")
                    //grid column winners 
                    || (grid[0] === 'X' && grid[3] === "X" && grid[6] === "X")
                    || (grid[1] === 'X' && grid[4] === "X" && grid[7] === "X")
                    || (grid[2] === 'X' && grid[5] === "X" && grid[8] === "X")
                    //grid diag winners
                    || (grid[0] === 'X' && grid[4] === "X" && grid[8] === "X")
                    || (grid[2] === 'X' && grid[4] === "X" && grid[6] === "X")) {
                    alert("X has won!! Game Over");
                } else if (
                    //grid row winners
                    (grid[0] === 'X' && grid[1] === "X" && grid[2] === "X")
                    || (grid[3] === 'O' && grid[4] === "O" && grid[5] === "O")
                    || (grid[6] === 'O' && grid[7] === "O" && grid[8] === "O")
                    //grid column winners
                    || (grid[0] === 'O' && grid[3] === "O" && grid[6] === "O")
                    || (grid[1] === 'O' && grid[4] === "O" && grid[7] === "O")
                    || (grid[2] === 'O' && grid[5] === "O" && grid[8] === "O")
                    //grid diag winners
                    || (grid[0] === 'O' && grid[4] === "O" && grid[8] === "O")
                    || (grid[1] === 'O' && grid[4] === "O" && grid[6] === "O")) {
                    alert("O has won!! Game Over");
                } else if (5 <= turnCount < 10) {
                    return;
                } else {
                    alert("It is a tie. Play again.")
                }
            }
        });
        $('button').click(function () {
            $('#board tr td').html("");  
            $('#board tr td').css("background-color", "black");  

        });
    }
    game();
});


