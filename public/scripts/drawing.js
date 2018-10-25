function draw() {
    ctx.beginPath();
    ctx.moveTo(prevX, prevY);
    ctx.lineTo(currX, currY);
    ctx.strokeStyle = x;
    ctx.lineWidth = y;
    ctx.stroke();
    ctx.closePath();
}

function findxy(res, e) {
    if (res == 'down') {
        prevX = currX;
        prevY = currY;
        currX = e.clientX - canvas.offsetLeft || e['targetTouches'][0].clientX - canvas.offsetLeft;
        currY = e.clientY - canvas.offsetTop || e['targetTouches'][0].clientY - canvas.offsetTop;

        lineStart(currX, currY);

        flag = true;
        dot_flag = true;
        if (dot_flag) {
            ctx.beginPath();
            ctx.fillStyle = x;
            ctx.fillRect(currX, currY, 4, 4);
            ctx.closePath();
            dot_flag = false;
        }
    }
    if (res == 'up' || (res == "out" && drawing)) {
        lineEnd(currX, currY);
        flag = false;
    }
    if (res == 'move') {
        if (flag) {
            prevX = currX;
            prevY = currY;
            currX = e.clientX - canvas.offsetLeft || e['targetTouches'][0].clientX - canvas.offsetLeft;
            currY = e.clientY - canvas.offsetTop || e['targetTouches'][0].clientY - canvas.offsetTop;
            draw();
        }
    }
}