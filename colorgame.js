var colors = [
    "rgb(255, 0, 0)", 
    "rgb(255, 255, 0)", 
    "rgb(0, 255, 0)", 
    "rgb(0, 255, 255)", 
    "rgb(0, 0, 255)", 
    "rgb(255, 0, 255)", 
];

var squares = document.querySelectorAll(".square");
var pickedColor = colors[4];
var colorDisplay = document.getElementById("colorDisplay");

colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++){
    // add initial colors to each squares
    squares[i].style.backgroundColor = colors[i];
    
    // add click listener
    squares[i].addEventListener("click", function(){
        var cur_click_color = this.style.backgroundColor;
        if(cur_click_color === pickedColor){
            
        }
    });
}

