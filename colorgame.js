var numOfSquare = 6;
var colors = generateRandomColor(numOfSquare);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");


easyBtn.addEventListener("click", function(){
    easyBtn.classList.add("selected");
    hardBtn.classList.remove("selected");
    numOfSquare = 3;
    colors = generateRandomColor(numOfSquare);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i = 0; i<squares.length; i++){
        if(colors[i]){
            squares[i].style.backgroundColor = colors[i];
        }
        else{
            squares[i].style.display = "none";
        }
    }
});

hardBtn.addEventListener("click", function(){
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");   
    numOfSquare = 6; 
    colors = generateRandomColor(numOfSquare);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i = 0; i<squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
        squares[i].style.display = "block";
    }
});

resetButton.addEventListener("click", function(){
    //gen color
    colors = generateRandomColor(numOfSquare);
    //pick a new random color from array
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    //change colors of squares
    for(var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
    }
    h1.style.backgroundColor = "steelblue";
    messageDisplay.textContent = "";
    this.textContent = "New Colors";
});

colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++){
    // add initial colors to each squares
    squares[i].style.backgroundColor = colors[i];
    
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