console.log("Hello JavaScript!");

//single line comment
/**
 * Multiline comment
 * 
 * Interact with DOM 
 * 
 * - Interpreter (HTML program) *.html -> Interpretaion -> DOM
 * 
 * - compiler (C program) *.c -> compilation -> *.exe
 * 
 *  *.c -> Expanded souce code (*.i) -> *.s -> *.o -> *.exe
 * 
 * 
 * Here:
 * JS always works with DOM element/node
 * 
 */

/**
 * JS variables declaration:
 * - var        redeclare/redefine
 * - let        no_redeclare/redefine
 * - const      no_redeclare/no_redefine
 */

var a = 10;
let b = 20;
const PI = 3.14;
    //redefine
    a = 9;
    b = 3;
    // PI = 20;

    //redeclare
var a = 6;
// let b = 2; error
// const PI = 20;

/**
 * JS version:
 * ES1, ES2, ES3, ES4, ES5, ES6, 2019, 2020, 2021
 * 
 * Old name of JavaScript is EcmaScript, ES1
 */

// var e = 10;
// var f = 10;
// console.log(e + f);

console.log(a);
console.log(b);
console.log(PI);

var jsInfoClass = document.getElementsByClassName("js-info");
var jsInfoID = document.getElementById("js-info");
var jsInfoP = document.getElementsByTagName("p");

//using css selectors
var jsInfoQueryClass = document.querySelector(".js-info");
var jsInfoQueryID = document.querySelector("#js-info");

//or
var jsInfoQueryClassAll = document.querySelectorAll(".js-info");


console.log(jsInfoClass);
console.log(jsInfoID);
console.log(jsInfoP);
console.log(jsInfoQueryClass);
console.log(jsInfoQueryID);
console.log(jsInfoQueryClassAll);

/**
 * Real demo
 * 
 * Events of JS:
 * - Mouse event (onclick, onmouseover, onmouseout etc)
 * - Keyboard event (onkeyup, onkeydown etc...)
 * - Window events (onload etc...)
 * - Form event (onfocus, onchange etc...)
 * 
 */

let jsBtn = document.querySelector(".js-btn");
let jsInfo = document.querySelector(".js-info p");
if(jsBtn) {
    jsBtn.addEventListener("click", function() {
        console.log(jsInfo);
        // jsInfo.innerText = "hello";
        // jsInfo.innerHTML = "<strong>hello</strong>";
    });
}

/**
 * jQuery (JS library)
 * 
 * requires: main library file
 * 
 * jQuery always uses CSS selectors
 */

let jsButton = jQuery(".js-btn");
let jsInformation = jQuery(".js-info p");
jsButton.on("click", function() {
    console.log(jsInformation);
    jsInformation.html("Hello Data");
});

let jsHideP = jQuery(".js-hide");
let jsShowP = jQuery(".js-show");
let jsToggleP = jQuery(".js-toggle");

jsHideP.click(function() {
    jsInformation.slideUp(300);
});

jsShowP.click(function() {
    jsInformation.slideDown(300);
});

jsToggleP.click(function() {
    jsInformation.slideToggle(300);
});


/**
 * Window load
 * Document ready
 */
$(document).ready(function() {
    var billboard = $(".billboard");
    if(billboard.length > 0) {
        billboard.slick({
            slideToShow: 1,
            slideToScroll: 1,
            arrows: true,
            dots: true,
            autoplay: true
        });
    }

    jQuery(".slimmenu").slimmenu({
        collapserTitle: ''
    });
    /**
     * jQuery script for accordion     * 
     * .accordion dt { }     * 
     * function add() {}
     * 
     * 1. Selector or declaration
     * 2. event listen
     * 3. property apply
     */
    var accordionDT = $(".accordion dt");    
    accordionDT.on("click", function() {
        $(this).siblings("dt").next("dd").slideUp(300);
        $(this).next("dd").slideToggle(300);
    });

});
