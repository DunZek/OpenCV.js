/*
	In this tutorial, you will learn:
		- Use OpenCV.js in a Node.js application.
		- Load images with "jimp" in order to use them with OpenCV.js
		- Using "jsdom" and "node-canvas" to support "cv.imread()" and "cv.imshow()"
		- The basics of Emscripten APIs, like "Modules" and "File System" on which OpenCV.js is based
		- Learn Node.js basics. Although this tutorial assumes the user knows JavaScript, experience with Node.js is not required
*/

// Define a global variable "Module" with a method "OnRuntimeInitialized"
Module = {
	OnRuntimeInitialized() {
		// this is our application
		console.log(cv.getBuildInformation())
		console.log("world")
	}
}
console.log("hello")
// Load 'opencv.js' assigning the value to the global variable 'cv'
cv = require("./opencv.js")
