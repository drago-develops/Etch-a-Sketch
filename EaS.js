function noOfSquares(){
    var val = document.getElementById("gridSlider").value;
    document.getElementById("output").innerHTML = val;
    for (i=1; i<=val; i++){
        console.log(i);
        const newDiv = document.createElement("div");
        document.getElementById("cointainer").appendChild(newDiv);
    }
}
