// Goals:
//      - Learn how to read an image and how to display it in a web

/* Read an image
    - OpenCV.js saves image as "cv.Mat" type.
    - HTML canvas is used to transfer "cv.Mat" to the web, or the otherway round.
    - "ImageData" interface can represent or set the underlying pixel data of an area of the canvas
*/
// Example - creating an ImageData object
let canvas = document.querySelector('#canvasInputId')  // obtain canvas element
let ctx = canvas.getContext('2d')  // obtain 2D context from canvas
let imgData = ctx.getImageData(0, 0, canvas.width, canvas.height)  // obtain ImageData interface from 2D context

// construct a cv.Mat
