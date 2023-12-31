//Function with no parameters
var startMyDay = function () {
    return "Time to walk!";
};
console.log(startMyDay());



//Function with 1 paramater
var favoriteCookie = function (cookie) {
   return `My favorite cookie is ${cookie}.`;
};
//console.log(favoriteCookie());
console.log(favoriteCookie("peanut butter")); // My favorite cookie is peanut butter.



//Function with 2 parameters
var introduce = function (name, occupation) {
    return `Hi there! My name is ${name} and I am a ${occupation}. Wanna code?`;
};
console.log(introduce("Leslie", "front end web developer")) // My name is Leslie and I am a front end web developer. 


//Function to Capture Input
var hydrationFeedback = function () {
    var numGlasses = Number(
        prompt("How many glasses of water did you have today? ")
    );
    if (numGlasses >= 8) {
        console.log("Amazing! You must feel good!");
    } else if (numGlasses < 8) {
        console.log("Not bad, not bad. Let's try for a bit more tomorrow!");
    }
};

hydrationFeedback();
