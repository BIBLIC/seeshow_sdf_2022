const drawCanvas = document.getElementById("draw-canvas");
const drawContext = drawCanvas.getContext("2d");
const drawGround = document.getElementById("draw-box");

const paintedCanvas = document.getElementById("painted-canvas");
const paintedContext = paintedCanvas.getContext("2d");
const paintGround = document.getElementById("painted-box");

const drawWidth = drawGround.clientWidth;
const drawHeight = drawGround.clientHeight;
drawCanvas.width = drawWidth;
drawCanvas.height = drawHeight;
drawContext.lineWidth = 2;
drawContext.strokeStyle = "#131313";

const paintedWidth = paintGround.clientWidth;
const paintedHeight = paintGround.clientHeight;
paintedCanvas.width = paintedWidth;
paintedCanvas.height = paintedHeight;
paintedContext.lineWidth = 2;
paintedContext.fillStyle = "rgba(200, 124, 124, 0.5)";

const coordinateCodeArea = document.querySelector(".coordinate-code");
const copyButton = document.querySelector(".copy-btn");

let isDown = false;
let data = [];
let rateData = [];
console.log(paintedWidth, paintedHeight);

drawCanvas.addEventListener("mousedown", function (event) {
    handleMouseDown(event);
    data.push({ startX: startX, startY: startY });
});

drawCanvas.addEventListener("mousemove", function (event) {
    handleMouseMove(event);
});

drawCanvas.addEventListener("mouseup", function (event) {
    handleMouseUp(event);
    data.push({ endX: endX, endY: endY });
    coordinateCodeArea.innerText = `startRateX: ${startRateX}, startRateY: ${startRateY}, endRateX: ${currentRateX}, endRateY: ${currentRateY}`;
    console.log(startRateX, startRateY, currentRateX, currentRateY);
    console.log(drawStartRateX, drawStartRateY, drawCurrentRateX, drawCurrentRateY);
});

drawCanvas.addEventListener("mouseout", function () {
    isDown = false;
});

paintedCanvas.addEventListener("click", function (event) {
    clickCanvas(event);
});

copyButton.addEventListener("click", function () {
    copy();
    console.log("copy!");
});

function handleMouseDown(event) {
    startX = event.offsetX;
    startY = event.offsetY;
    isDown = true;
}

function handleMouseMove(event) {
    if (!isDown) {
        return;
    }
    let nowX = event.offsetX;
    let nowY = event.offsetY;
    handleDraw(nowX, nowY);
    handlePaint(nowX, nowY);
}

function handleMouseUp(event) {
    endX = event.offsetX;
    endY = event.offsetY;
    isDown = false;
}

function rateCalcurate(currentX, currentY) {
    startRateX = startX / drawWidth;
    startRateY = startY / drawHeight;
    currentRateX = currentX / drawWidth;
    currentRateY = currentY / drawHeight;
    drawStartRateX = startRateX * paintedWidth;
    drawStartRateY = startRateY * paintedHeight;
    drawCurrentRateX = currentRateX * paintedWidth;
    drawCurrentRateY = currentRateY * paintedHeight;
}

function clickCanvas(event) {
    let clickX = event.offsetX;
    let clickY = event.offsetY;
    if (clickX >= startRateX && clickY >= startRateY && clickX <= currentRateX && clickY <= currentRateY) {
        console.log("correct area");
    } else if (clickX <= startRateX && clickY <= startRateY && clickX >= currentRateX && clickY >= currentRateY) {
        console.log("correct area!");
    } else {
        paintedCanvas.style.border = "2px solid #000000";
    }
}

function handleDraw(currentX, currentY) {
    drawContext.clearRect(0, 0, drawContext.canvas.width, drawContext.canvas.height);
    drawContext.strokeRect(startX, startY, currentX - startX, currentY - startY);
}

function handlePaint(currentX, currentY) {
    rateCalcurate(currentX, currentY);
    paintedContext.clearRect(0, 0, paintedContext.canvas.width, paintedContext.canvas.height);
    paintedContext.fillRect(
        drawStartRateX,
        drawStartRateY,
        drawCurrentRateX - drawStartRateX,
        drawCurrentRateY - drawStartRateY
    );
}

function copy() {
    coordinateCodeArea.select();
    document.execCommand("copy");
    coordinateCodeArea.setSelectionRange(0, 0);
}
