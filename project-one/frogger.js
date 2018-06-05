let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
let c = 30;
let s = 10;
// let score = 0;
let lives = 3;

let dock = new Image(); dock.src = "https://photoshopcafe.com/new1/wp-content/uploads/2012/05/wood3.jpg";

let frogger = new Image(); frogger.src = "http://media-s3-us-east-1.ceros.com/ceros-marketing/images/2016/10/13/7664db4e9f030487b87047f748394aad/frogger.png";

let froggerWidth = c;
let froggerHeight = c;
let froggerX = 10 * c;
let froggerY = 18 * c;
let froggerDX = 0;
let froggerDY = 0;
// let froggerSX = 300;
// let froggerSY = 500;

let car = new Image(); car.src = "https://openclipart.org/image/2400px/svg_to_png/211161/red-car.png";
let car1X = 10 * c;
let car1Y = 10 * c;
let car1DX = 3*s;
let car2X = 16 * c;
let car2Y = 11 * c;
let car2DX = 2 * s;
let car3X = 6 * c;
let car3Y = 12 * c;
let car3DX = 0.5 * s;
let car4X = 18 * c;
let car4Y = 13 * c;
let car4DX = 3 * s;
let car5X = 13 * c;
let car5Y = 14 * c;
let car5DX = s;
let car6X = 2 * c;
let car6Y = 15 * c;
let car6DX = 2 * s;
let car7X = 5 * c;
let car7Y = 16 * c;
let car7DX = 4*s;
let car8X = 18 * c;
let car8Y = 17 * c;
let car8DX = 0.5 * s;

let shark = new Image(); shark.src = "https://forums.terraria.org/index.php?attachments/26335/";
let shark1X = 10 * c;
let shark1Y = 2 * c;
let shark1DX = s;
let shark2X = 16 * c;
let shark2Y = 4 * c;
let shark2DX = 2 * s;
let shark3X = 6 * c;
let shark3Y = 6 * c;
let shark3DX = 0.5 * s;
let shark4X = 16 * c;
let shark4Y = 8 * c;
let shark4DX = 3 * s;

let log = new Image(); log.src = "https://photoshopcafe.com/new1/wp-content/uploads/2012/05/wood3.jpg";
let logRowCount = 5;
let logColumnCount = 1;
let logWidth = 19 * c;
let logHeight = c;
let logPadding = 1 * c;
let logOffsetTop = 1 * c;
let logOffsetLeft = 1 * c;
let logSX = 0;
let logDX = 0.5;

var logs = [];
for (var co = 0; co < logColumnCount; co++) {
    logs[co] = [];
    for (var r = 0; r < logRowCount; r++) {
        logs[co][r] = { x: 0, y: 0 };
    }
}

upPressed = false;
rightPressed = false;
downPressed = false;
leftPressed = false;

//lets user control frogger
document.addEventListener('keydown', handleKeyDown, false);
// document.addEventListener("keyup", handleKeyUp, false);

//how the user navigates frogger
function handleKeyDown(e) {
    if (e.keyCode == 38) {
        upPressed = true;
    } else if (e.keyCode == 39) {
        rightPressed = true;
    } else if (e.keyCode == 40) {
        downPressed = true;
    } else if (e.keyCode == 37) {
        leftPressed = true;
    }
}
// function handleKeyUp(e) {
//     if (e.keyCode == 38) {
//         upPressed = false;
//     } else if (e.keyCode == 39) {
//         rightPressed = false;
//     } else if (e.keyCode == 40) {
//         downPressed = false;
//     } else if (e.keyCode == 37) {
//         leftPressed = false;
//     }
// }

//draws scoreboard
function drawScore() {
    ctx.font = "18px Arial";
    ctx.fillStyle = "white";
    ctx.fillText("Score: " + score, 10, 22);
}

//draws life count board
function drawLives() {
    ctx.font = "18px Arial";
    ctx.fillStyle = "white";
    ctx.fillText("Lives: " + lives, 1*c, (0.7)*c);
}

//draws water half of screen
function drawWater() {
    ctx.beginPath();
    ctx.rect(0, 0, canvas.width, canvas.height / 2);
    ctx.fillStyle = "blue";
    ctx.fill();
    ctx.closePath();
}

function drawLilyPad() {
    ctx.beginPath();
    ctx.drawImage(log, )
}

function drawStartingPlatform() {
    ctx.beginPath();
    ctx.rect(0, 18 * c, canvas.width, 2 * c);
    ctx.fillStyle = "purple";
    ctx.fill();
    ctx.closePath();
}

function drawStreetLinesDashed() {
    ctx.beginPath();
    ctx.moveTo(0, 17 * c);
    ctx.lineTo(canvas.height, 17 * c);
    ctx.moveTo(0, 15 * c);
    ctx.lineTo(canvas.height, 15 * c);
    ctx.moveTo(0, 13 * c);
    ctx.lineTo(canvas.height, 13 * c);
    ctx.moveTo(0, 11 * c);
    ctx.lineTo(canvas.height, 11 * c);
    ctx.strokeStyle = "white";
    ctx.setLineDash([5]);
    ctx.strokeWidth = 4;
    ctx.stroke();
    ctx.closePath();
}

function drawStreetLinesSolid() {
    ctx.beginPath();
    ctx.moveTo(0, 16 * c);
    ctx.lineTo(canvas.height, 16 * c);
    ctx.moveTo(0, 14 * c);
    ctx.lineTo(canvas.height, 14 * c);
    ctx.moveTo(0, 12 * c);
    ctx.lineTo(canvas.height, 12 * c);
    ctx.moveTo(0, 10 * c);
    ctx.lineTo(canvas.height, 10 * c);
    ctx.strokeStyle = "white";
    ctx.setLineDash([0]);
    ctx.strokeWidth = 4;
    ctx.stroke();
    ctx.closePath();
}

function drawDockPlatform() {
    ctx.beginPath();
    // ctx.drawImage(dock, 0, 2*c, canvas.width, c);
    // ctx.drawImage(dock, 0, 4*c, canvas.width, c);
    // ctx.drawImage(dock, 0, 6*c, canvas.width, c);
    // ctx.drawImage(dock, 0, 8*c, canvas.width, c);
    ctx.rect(0, 2 * c, canvas.width, c);
    ctx.rect(0, 4 * c, canvas.width, c);
    ctx.rect(0, 6 * c, canvas.width, c);
    ctx.rect(0, 8 * c, canvas.width, c);
    ctx.fillStyle = "blue";
    ctx.fill();
    ctx.closePath();
}

function drawFinishPlatform() {
    ctx.beginPath();
    ctx.rect(0, 0, canvas.width, c);
    ctx.fillStyle = "green";
    ctx.fill();
    ctx.closePath();
}

function drawlogs() {
    for (let co = 0; co < logColumnCount; co++) {
        for (let r = 0; r < logRowCount; r++) {
            let logX = (co * (logWidth + logPadding)) + logOffsetLeft + logSX;
            let logY = (r * (logHeight + logPadding)) + logOffsetTop;
            // let logDX = c;
            logs[co][r].x = 0;
            logs[co][r].y = 0;
            ctx.beginPath();
            ctx.drawImage(log, logX, logY, logWidth, logHeight);
            ctx.closePath();
            if (logX + logDX >= canvas.width - logWidth || logX + logDX <= 0) {
                logDX = -logDX;
            }
        }
    }
}

//draws frogger
function drawFrogger() {
    ctx.beginPath();
    ctx.drawImage(frogger, froggerX, froggerY, froggerWidth, froggerHeight);
    ctx.fill();
    ctx.closePath();
}

//draws cars
function drawCar() {
    ctx.beginPath();
    ctx.drawImage(car, car1X, car1Y, 2 * c, c);
    ctx.drawImage(car, car2X, car2Y, c, c);
    ctx.drawImage(car, car3X, car3Y, 2 * c, c);
    ctx.drawImage(car, car4X, car4Y, c, c);
    ctx.drawImage(car, car5X, car5Y, c, c);
    ctx.drawImage(car, car6X, car6Y, 2 * c, c);
    ctx.drawImage(car, car7X, car7Y, c, c);
    ctx.drawImage(car, car8X, car8Y, 2 * c, c);
    ctx.closePath();
}

//draws sharks
function drawshark() {
    ctx.beginPath();
    ctx.drawImage(shark, shark1X, shark1Y, 2 * c, c);
    ctx.drawImage(shark, shark2X, shark2Y, 2 * c, c);
    ctx.drawImage(shark, shark3X, shark3Y, 2 * c, c);
    ctx.drawImage(shark, shark4X, shark4Y, 2 * c, c);
    ctx.closePath();
}

//when shark hits wall -> bounce back in opporiste direction
function carBorderCollisionDetection() {
    if (car1X + c >= canvas.width || car1X + car1DX <= 0 - c) {
        car1DX = -car1DX;
    }
    if (car2X + c >= canvas.width || car2X + car2DX <= 0 - c) {
        car2DX = -car2DX;
    }
    if (car3X + c >= canvas.width || car3X + car3DX <= 0 - c) {
        car3DX = -car3DX;
    }
    if (car4X + c >= canvas.width || car4X + car4DX <= 0 - c) {
        car4DX = -car4DX;
    }
    if (car5X + c >= canvas.width || car5X + car5DX <= 0 - c) {
        car5DX = -car5DX;
    }
    if (car6X + c >= canvas.width || car6X + car6DX <= 0 - c) {
        car6DX = -car6DX;
    }
    if (car7X + c >= canvas.width || car7X + car7DX <= 0 - c) {
        car7DX = -car7DX;
    }
    if (car8X + c >= canvas.width || car8X + car8DX <= 0 - c) {
        car8DX = -car8DX;
    }
}

function sharkBorderCollisionDetection() {
    if (shark1X + c >= canvas.width || shark1X + shark1DX <= 0 - c) {
        shark1DX = -shark1DX;
    }
    if (shark2X + c >= canvas.width || shark2X + shark2DX <= 0 - c) {
        shark2DX = -shark2DX;
    }
    if (shark3X + c >= canvas.width || shark3X + shark3DX <= 0 - c) {
        shark3DX = -shark3DX;
    }
    if (shark4X + c >= canvas.width || shark4X + shark4DX <= 0 - c) {
        shark4DX = -car4DX;
    }
}


//when car hits frogger
function collisionDetectorCarFrogger() {
    if (
        ((froggerX === car1X) && (froggerY === car1Y))
        || ((froggerX === car2X) && (froggerY === car2Y))
        || ((froggerX === car3X) && (froggerY === car3Y))
        || ((froggerX === car4X) && (froggerY === car4Y))
        || ((froggerX === car5X) && (froggerY === car5Y))
        || ((froggerX === car6X) && (froggerY === car6Y))
        || ((froggerX === car7X) && (froggerY === car7Y))
        || ((froggerX === car8X) && (froggerY === car8Y))
    ) {
        lives--;
        if (!lives) {
            alert("GAME OVER");
            document.location.reload();
        }
        else {
            froggerX = canvas.width/2;
            froggerY = 18 * c;
        }
    }
}

function collisionDetectorsharkFrogger() {
    if (
        ((froggerX === shark1X) && (froggerY === shark1Y))
        || ((froggerX === shark2X) && (froggerY === shark2Y))
        || ((froggerX === shark3X) && (froggerY === shark3Y))
        || ((froggerX === shark4X) && (froggerY === shark4Y))
    ) {
        lives--;
        if (!lives) {
            alert("GAME OVER");
            document.location.reload();
        }
        else {
            froggerX = canvas.width/2;
            froggerY = 18 * c;
        }
    }
}

function collisionDetectorLogWall() {
    if (logX + logDX >= canvas.width || logX + logDX <= 0 - logWidth) {
        logDX = -logDX;
    }
}

function collisionDetectorCheckWin() {
    if (froggerY === 0) {
        alert("CONGRATULATIONS! YOU WIN!");
        location.reload();
    }
}

//created everything on the board
function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawWater();
    drawStartingPlatform();
    drawFinishPlatform();
    drawDockPlatform();
    drawStreetLinesDashed();
    drawStreetLinesSolid();
    drawlogs();
    // drawScore();
    drawLives();
    drawFrogger();
    drawCar();
    drawshark();
    carBorderCollisionDetection();
    sharkBorderCollisionDetection();
    collisionDetectorCarFrogger();
    collisionDetectorsharkFrogger();
    collisionDetectorCheckWin();

    car1X += car1DX;
    car2X += car2DX;
    car3X += car3DX;
    car4X += car4DX;
    car5X += car5DX;
    car6X += car6DX;
    car7X += car7DX;
    car8X += car8DX;

    shark1X += shark1DX;
    shark2X += shark2DX;
    shark3X += shark3DX;
    shark4X += shark4DX;


    logSX += logDX;

    //move frogger 1 space
    if (rightPressed && froggerX < canvas.width - froggerWidth) {
        froggerX += c;
        rightPressed = false;
    }
    else if (leftPressed && froggerX > 0) {
        froggerX -= c;
        leftPressed = false;
    }
    else if (upPressed && froggerY > 0) {
        froggerY -= c;
        upPressed = false;
    }
    else if (downPressed && froggerY < canvas.width - c) {
        froggerY += c;
        downPressed = false;
    }

    //jump frogger 2 spaces


}

//rate at which board is recreated
setInterval(draw, 50);