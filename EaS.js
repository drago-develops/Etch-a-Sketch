function noOfSquares(){
    var element =  document.getElementsByClassName("sqr");
    if (typeof(element) != 'undefined' && element != null)
    {   
        document.querySelectorAll(".toBeDeleted").forEach(el=>el.remove());
        console.log("deleted")
    };
    var val = document.getElementById("gridSlider").value;
    document.getElementById("output").innerHTML = `${val}x${val}`;
    for (i=1; i<=val; i++){
        console.log(i);
        const newCont = document.createElement("div");
        newCont.setAttribute("id", `cont${i}`);
        newCont.setAttribute("class","toBeDeleted")
        document.getElementById("cointainer").appendChild(newCont);
        for (j=1; j<=val; j++){
            const newDiv = document.createElement("div");
            newDiv.setAttribute("class", "sqr");
            newDiv.setAttribute("id","square");
            document.getElementById(`cont${i}`).appendChild(newDiv);
        }
    };
    
}
function changeDimentionsSqr(){
    let sqrDivs = document.getElementsByClassName("sqr");
    var value = document.getElementById("gridSlider").value;
    console.log(value)
    for(var i = 0; i<sqrDivs.length; i++){
        let pixel = 800/value;
        console.log(pixel)
        sqrDivs[i].style.height = `${pixel}px`;
        sqrDivs[i].style.width = `${pixel}px`;
    };
};

const buttons = document.querySelectorAll('.button');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    buttons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    });
});

// function pencilDrawing(){
//     document.getElementById("square").addEventListener('mouseover', pencilColouring());
//     function pencilColouring(){
//         document.getElementById("square").style.backgroundColor = "pink";
//     };

// };

// const pencilDrawing = document.getElementById("pencil")

// pencilDrawing.addEventListener('click', pencilHovering);
let isDrawing = false;

function pencilHovering(){
    let squares = document.getElementsByClassName('sqr');
    for(let i = 0; i < squares.length; i++){
        squares[i].addEventListener('mousedown', () => isDrawing = true);
        squares[i].addEventListener('mouseup', () => isDrawing = false);
        squares[i].addEventListener('mousemove', function() {
            if (isDrawing) {
                this.style.backgroundColor = 'black';
            }
        });
    }
}


function rainbowPencilHovering(){
    let squares = document.getElementsByClassName('sqr');
    for(let i = 0; i < squares.length; i++){
        squares[i].addEventListener('mousedown', () => isDrawing = true);
        squares[i].addEventListener('mouseup', () => isDrawing = false);
        squares[i].addEventListener('mousemove', function() {
            if (isDrawing) {
                let colorRed = Math.floor(Math.random() * 256);
                let colorGreen = Math.floor(Math.random() * 256);
                let colorBlue= Math.floor(Math.random() * 256);
                this.style.backgroundColor = `rgb(${colorRed},${colorGreen},${colorBlue})`;
            }
        });
    }
}

function clearSheet(){
    let square = document.querySelectorAll('.sqr');
    square.forEach(function(element){
        element.style.backgroundColor = 'lightgray';
    })
};

function rubberEraser(){
    let squares = document.getElementsByClassName('sqr');
    for(let i = 0; i < squares.length; i++){
        squares[i].addEventListener('mousedown', () => isDrawing = true);
        squares[i].addEventListener('mouseup', () => isDrawing = false);
        squares[i].addEventListener('mousemove', function() {
            if (isDrawing) {
                this.style.backgroundColor = 'lightgray';
            }
        });
    }
}