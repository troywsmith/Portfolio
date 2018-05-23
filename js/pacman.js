
$(document).ready(function () {
    window.onload= alert("Welcome to Pac-Man! Use your arrow keys to navigate Pac-Man to the food and gain points! Watch out for the red pests though. They will eat you!");

    //difficulty settings
    let enemySpeed = 150;

    ///making the game board
    let cells = 500;
    let cell;
    let columns = cells / 25;   //this needs to be updated based on # of cells
    let h;
    let blocks = [241, 260, 43, 44, 45, 46, 47, 48, 49, 50, 52, 53, 54, 55, 56, 57, 58, 66, 86, 75, 90, 91, 95, 83, 84, 88, 93, 103, 104, 97, 98, 117, 118, 110, 111, 126, 127, 128, 133, 134, 135, 143, 144, 164, 166, 186, 206, 163, 150, 151, 157, 158, 175, 195, 215, 177, 178, 165, 185, 205, 168, 169, 170, 171, 172, 173, 176, 196, 216, 202, 203, 208, 209, 210, 211, 212, 213, 222, 223, 218, 219, 238, 239, 245, 246, 247, 249, 250, 251, 252, 254, 255, 256, 262, 263, 282, 283, 285, 286, 306, 326, 288, 289, 290, 291, 292, 293, 295, 315, 335, 337, 338, 357, 358, 305, 323, 324, 325, 296, 316, 336, 343, 344, 278, 279, 298, 299, 328, 329, 330, 331, 332, 333, 350, 351, 366, 367, 368, 373, 374, 375, 390, 391, 383, 384, 403, 404, 406, 408, 409, 410, 411, 412, 413, 426, 415, 435, 443, 444, 445, 446, 447, 448, 449, 451, 452, 453, 454, 455, 456, 457, 458, 397, 398, 417, 418];
    let enemyStart = [249, 250, 251, 252];
    let food = (range(1, 500));
    let winningSCORE = 240;   //make this a count of how many pieces of food on board

    //making an array 1-500
    function range(start, count) {
        return Array.apply(0, Array(count)).map(function (element, index) {
            return index + start;
        });
    }

    //make game cells
    for (let i = 1; i <= cells; i++) {
        cell = $('<div>').addClass('cell').attr('data-cell', i);
        //adding food locations here (all 500 locations for now)
        food.forEach(function (n) {
            if (i === n) {
                cell.addClass('food');
                cell.html("🍪");
            }
        })
        //adding left border here as well as mid left open block//also removing food html
        if ((i % 20 == 1) && (i !== 241)) {
            cell.addClass('boundary');
            cell.html(' ');
        }
        //adding right border here as well as mid right open block
        if ((i % 20 == 0) && (i !== 260)) {
            cell.addClass('boundary');
            cell.html(' ');
        }
        //adding top border here
        if (i < (columns + 1)) {
            cell.addClass('boundary');
            cell.html(' ');
        }
        //adding bottom border here (needs to change according to #of cells)
        if (i >= 481) {
            cell.addClass('boundary');
            cell.html(' ');
        }
        //adding pacman location here
        if (i === 430) {
            cell.addClass('pacman');
            cell.html(' ');
        }
        //adding game blocks here
        blocks.forEach(function (n) {
            if (i === n) {
                cell.addClass('boundary');
                cell.html(' ');
            }
        })
        //adding enemy locations here
        // enemyStart.forEach(function (n) {
        //     if (i === n) {
        //         cell.addClass('enemy');
        //     }
        // })
        $('#game').append(cell);
    }
    h = $('.cell:last-of-type').width();
    // $('.cell').css({ height: h, lineHeight: h + 'px' });

    //pac navigation
    let pacmanLoca = $("[data-cell|='430']");
    let SCORE = 0;
    $(document).keydown(function (e) {

        //how i chose to make moveements
        let left = pacmanLoca.prev();
        let up = pacmanLoca.prev().prev().prev().prev().prev().prev().prev().prev().prev().prev().prev().prev().prev().prev().prev().prev().prev().prev().prev().prev();
        let right = pacmanLoca.next();
        let bottom = pacmanLoca.next().next().next().next().next().next().next().next().next().next().next().next().next().next().next().next().next().next().next().next();

        //checks if there is no food left aka if player has won
        function checkForWin() {
            if (SCORE >= winningSCORE) {
                if (confirm("CONGRATULATIONS! YOU WIN! Play again?")) {
                    location.reload();
                }
            }
        }

        //this is how pacman moves based on keystrokes
        switch (e.which) {
            case 37:    //left arrow key
                if (left === $("[data-cell|='240']")) {

                    pacmanLoca.removeClass('pacman');
                    pacmanLoca = pacmanLoca.bottom.prev();
                    pacmanLoca.addClass('pacman');

                } else if (left.hasClass("boundary")) {
                    return;
                } else if (left.hasClass("food")) {
                    left.removeClass("food");
                    left.html('');
                    left.addClass("pacman");
                    pacmanLoca.removeClass("pacman");
                    SCORE += 1;
                    $('.SCORE').html(`SCORE: ${SCORE}`);
                    pacmanLoca = left;
                    checkForWin();
                    return;
                } else {
                    left.addClass("pacman");
                    pacmanLoca.removeClass("pacman");
                    pacmanLoca = left;
                    return;
                }
            case 38:    //up arrow key
                if (up.hasClass("boundary")) {
                    return;
                } else if (up.hasClass("food")) {
                    up.addClass("pacman");
                    up.removeClass("food");
                    up.html('');
                    pacmanLoca.removeClass("pacman");
                    SCORE += 1;
                    $('.SCORE').html(`SCORE: ${SCORE}`);
                    pacmanLoca = up;
                    checkForWin();
                    return;
                } else {
                    up.addClass("pacman");
                    pacmanLoca.removeClass("pacman");
                    pacmanLoca = up;
                    return;
                }
            case 39:    //right arrow key
                if (right.hasClass("boundary")) {
                    return;
                } else if (right.hasClass("food")) {
                    right.addClass("pacman");
                    right.removeClass("food");
                    right.html('');
                    pacmanLoca.removeClass("pacman");
                    SCORE += 1;
                    $('.SCORE').html(`SCORE: ${SCORE}`);
                    pacmanLoca = right;
                    checkForWin();
                    return;
                } else {
                    right.addClass("pacman");
                    pacmanLoca.removeClass("pacman");
                    pacmanLoca = right;
                    return;
                }
            case 40:    //bottom arrow key
                if (bottom.hasClass("boundary")) {
                    return;
                } else if (bottom.hasClass("food")) {
                    bottom.addClass("pacman");
                    bottom.removeClass("food");
                    bottom.html('');
                    pacmanLoca.removeClass("pacman");
                    SCORE += 1;
                    $('.SCORE').html(`SCORE: ${SCORE}`);
                    pacmanLoca = bottom;
                    checkForWin();
                    return;
                } else {
                    bottom.addClass("pacman");
                    pacmanLoca.removeClass("pacman");
                    pacmanLoca = bottom;
                    return;
                }
        }
    })

    //enemy navigation
    let enemyStartingLocations = [$("[data-cell|='249']"), $("[data-cell|='250']"), $("[data-cell|='1=251']"), $("[data-cell|='252']"), $("[data-cell|='253']")];

    function deployEnemy() {
        enemyStartingLocations.forEach(function (n) {
            enemyLoca = n;
            moveEnemy();
        });
    }
    // moveEnemy();

    setInterval(deployEnemy(), 100);

    //this function picks the enemys direction and rate at which it does that
    function moveEnemy() {

        //this will set rate at which enemey picks direction (AKA SPEED/DIFFICULTY)
        setInterval(pickEnemyDirection, enemySpeed);
        //picking enemy l
        let enemyLoca = enemyStartingLocations[Math.floor(Math.random() * enemyStartingLocations.length)];

        function pickEnemyDirection() {

            //how i chose to create movements
            let left = enemyLoca.prev();
            let up = enemyLoca.prev().prev().prev().prev().prev().prev().prev().prev().prev().prev().prev().prev().prev().prev().prev().prev().prev().prev().prev().prev();
            let right = enemyLoca.next();
            let bottom = enemyLoca.next().next().next().next().next().next().next().next().next().next().next().next().next().next().next().next().next().next().next().next();

            //checks if the cell that the enemy is in also has the class pacman
            function checkForCollission() {
                if (enemyLoca.hasClass('pacman')) {
                    alert(`The enemy has eaten PacMan. You Lose! You SCORED a ${SCORE}`);
                    location.reload();
                } else {
                    return;
                }
            }

            //picks a random direction (up, right, bottom, left)
            let randNo = Math.floor(((Math.random() * 4) + 1));
            switch (randNo) {
                case 1:
                    if (up.hasClass("boundary")) {
                        return;
                    } else {
                        up.addClass("enemy");
                        enemyLoca.removeClass("enemy");
                        enemyLoca = up;
                        checkForCollission();
                        return;
                    }
                case 2:
                    if (right.hasClass("boundary")) {
                        return;
                    } else {
                        right.addClass("enemy");
                        enemyLoca.removeClass("enemy");
                        enemyLoca = right;
                        checkForCollission();
                        return;
                    }
                case 3:
                    if (left.hasClass("boundary")) {
                        return;
                    } else {
                        left.addClass("enemy");
                        enemyLoca.removeClass("enemy");
                        enemyLoca = left;
                        checkForCollission();
                        return;
                    }
                case 4:
                    if (bottom.hasClass("boundary")) {
                        return;
                    } else {
                        bottom.addClass("enemy");
                        enemyLoca.removeClass("enemy");
                        enemyLoca = bottom;
                        checkForCollission();
                        return;
                    }
            }
        };


    };

    moveEnemy();

});
