// get variables

let red = document.querySelector('.r-range');
let green = document.querySelector('.g-range');
let blue = document.querySelector('.b-range');
let result = document.querySelector('.result');
let redLabel = document.querySelector('.redValue');
let greenLabel = document.querySelector('.greenValue');
let blueLabel = document.querySelector('.blueValue');



// generator btn 

generatorBtn.addEventListener('click', function (event) {
    event.preventDefault();
    let generatorBtn = document.querySelector('.generatorBtn');

     // generate random color 0 - 255 
     let rand1 = Math.floor(Math.random() * 255);
     let rand2 = Math.floor(Math.random() * 255);
     let rand3 = Math.floor(Math.random() * 255);
    
     result.style.backgroundColor = "rgb(" + rand1 + "," + rand2 + "," + rand3 + ")";
     result.innerHTML = 'RGB = ' + rand1 + ',' + rand2 + ',' +rand3;

    // set generated color to range
    redLabel.innerHTML = 'Red : ' + rand1;
    greenLabel.innerHTML = 'Green : ' + rand2;
    blueLabel.innerHTML = 'Blue : ' + rand3;

    red.value = rand1;
    green.value = rand2;
    blue.value = rand3;
     
})




function colorMaker() {

    // get values from inputs
    let redValue = red.value;
    let greenValue = green.value;
    let blueValue = blue.value;

    // change the label number for each color 
    redLabel.innerHTML = 'Red : ' + redValue;
    greenLabel.innerHTML = 'Green : ' + greenValue;
    blueLabel.innerHTML = 'Blue : ' + blueValue;

    // rgb displayer 
    result.innerHTML = 'RGB = ' + redValue + ',' + greenValue + ',' +blueValue;

    // display created color inside the circle
    result.style.backgroundColor = "rgb(" + redValue + "," + greenValue + "," + blueValue + ")";

    
}



red.addEventListener('input', function() {

    colorMaker();
})

green.addEventListener('input', function() {

    colorMaker();
})

blue.addEventListener('input', function() {
    colorMaker();
})

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
