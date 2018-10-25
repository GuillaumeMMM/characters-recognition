var canvas, ctx, flag = false,
        prevX = 0,
        currX = 0,
        prevY = 0,
        currY = 0,
        dot_flag = false;

    var x = "black",
        y = 4;
    
    function init() {
        //  On page init, define canvas & mouse & touch events
        canvas = document.getElementById('myCanvas');
        ctx = canvas.getContext("2d");
        w = canvas.width;
        h = canvas.height;
    
        canvas.addEventListener("mousemove", function (e) {
            if (!drawingFinished) {
                findxy('move', e);
            }
        }, false);

        canvas.addEventListener("touchmove", function (e) {
            if (!drawingFinished) {
                findxy('move', e);
            }
        }, false);

        canvas.addEventListener("mousedown", function (e) {
            if (!drawingFinished) {
                findxy('down', e);
            }
        }, false);

        canvas.addEventListener("touchstart", function (e) {
            if (!drawingFinished) {
                findxy('down', e);
            }
        }, false);

        canvas.addEventListener("mouseup", function (e) {
            if (!drawingFinished) {
                findxy('up', e);
            }
        }, false);

        canvas.addEventListener("touchend", function (e) {
            if (!drawingFinished) {
                findxy('up', e);
            }
        }, false);

        canvas.addEventListener("mouseout", function (e) {
            if (!drawingFinished) {
                findxy('out', e);
            }
        }, false);

        canvas.addEventListener("touchcancel", function (e) {
            if (!drawingFinished) {
                findxy('out', e);
            }
        }, false);
    }
