//  Is the user drawing a line?
var drawing = false;

var numberOfDrawings = 0;
var drawingFinished = false;

var drawingValid = true;

var startX = 0;
var startY = 0;
var endX = 0;
var endY = 0;

var lineStart = function (X, Y) {
    drawing = true;
    startX = X;
    startY = Y;
    // console.log('start drawing from ', X, Y);
}

var lineEnd = function (X, Y) {
    drawing = false;
    endX = X;
    endY = Y;
    numberOfDrawings++;

    //  Find which line should have just been drawn
    var currentLine = oneCharacter.lines.filter((line) => {
        return (line['pos'] === (numberOfDrawings - 1));
    })[0];

    //  Check if the direction is good
    checkDirection(currentLine);

    if (numberOfDrawings === oneCharacter.numberOfLines) {
        console.log('drawing stops there');
        drawingFinished = true;
        drawingEnd();
    }
}

var checkDirection = function(line) {
    if (line) {
        switch (line['direction']) {
            case 'left to right':
                (endX > startX) ? console.log('valid line') : (drawingValid = false);
                break;
            case 'top to bottom':
                (endY > startY) ? console.log('valid line') : (drawingValid = false);
                break;
        }
    }
}

var drawingEnd = function() {
    saveImage().then((result) => {
        console.log(result);
        if (result['symbols'][0]['text'] !== oneCharacter['name']) {
            drawingValid = false;
        }
        if (!drawingValid) {
            drawingEventualyNotValid();
        } else {
            drawingEventualyNotValid();
        }
    });
}

var drawingEventualyNotValid = function() {
    console.log('Drawing Invalid');
}

var drawingEventualyValid = function() {
    console.log('Drawing Valid');
}