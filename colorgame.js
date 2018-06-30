var numOfSquare = 6;
var colors = [];
var pickedColor;

var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButton = document.querySelectorAll(".mode");

init();

function init(){
    setModeButtons();
    setSquare();
    reset();
}

function setModeButtons(){
    // set mode button
    for(var i = 0; i < modeButton.length; i++){
        modeButton[i].addEventListener("click", function(){
            modeButton[0].classList.remove("selected");
            modeButton[1].classList.remove("selected");
            this.classList.add("selected");
    
            this.textContent === "Easy" ? numOfSquare = 3 : numOfSquare = 6;
    
            reset();
    
        });
    }
}

function setSquare(){
    // set square
    for(var i = 0; i < squares.length; i++){        
        // add click listener
        squares[i].addEventListener("click", function(){
            var cur_click_color = this.style.backgroundColor;
            if(cur_click_color === pickedColor){
                messageDisplay.textContent = "Correct!";
                resetButton.textContent = "Play again?";
                changeColors(pickedColor);
                h1.style.backgroundColor = pickedColor;
            }
            else{
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "try again :(";
            }
        });
    }
}

function reset(){
    //gen color
    colors = generateRandomColor(numOfSquare);
    //pick a new random color from array
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    //change colors of squares
    for(var i = 0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        }
        else{
            squares[i].style.display = "none";
        }
        
    }
    h1.style.backgroundColor = "steelblue";
    messageDisplay.textContent = "";
    resetButton.textContent = "New Colors";
}

resetButton.addEventListener("click", reset);


function changeColors(color){
    for(var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = color;
    }
}

function pickColor(){
    var random =  Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColor(num){
    var arr = [];

    for(var i = 0; i < num; i++){
        arr.push(randomColor());
    }

    return arr;
}

function randomColor(){
    var red = Math.floor(Math.random()*256);
    var green = Math.floor(Math.random()*256);
    var blue = Math.floor(Math.random()*256);
    return "rgb(" + red + ", " + green + ", " + blue + ")";
}