var saveImage = function() {

    //  Get the current canvas
    var canvas = document.getElementById('myCanvas');
    var ctx = canvas.getContext("2d");

    newTesseract = Tesseract.create({
        workerPath: 'https://cdn.rawgit.com/naptha/tesseract.js/1.0.10/dist/worker.js',
        langPath: 'https://cdn.rawgit.com/naptha/tessdata/gh-pages/3.02/',
        corePath: 'https://cdn.rawgit.com/naptha/tesseract.js-core/0.1.0/index.js',
    });

    //  Set up the recognition with japanese
    return newTesseract.recognize(ctx, {lang:'jpn'}).progress(function (message) {
        // console.log(message);
    });
}