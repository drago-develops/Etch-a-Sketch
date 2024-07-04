function noOfSquares(){
    var element =  document.getElementsByClassName("sqr");
    if (typeof(element) != 'undefined' && element != null)
    {   
        document.querySelectorAll(".sqr").forEach(el=>el.remove());
        console.log("deleted")
    };
    var val = document.getElementById("gridSlider").value;
    document.getElementById("output").innerHTML = `${val}x${val}`;
    for (i=1; i<=val; i++){
        console.log(i);
        const newCont = document.createElement("div");
        newCont.setAttribute("id", `cont${i}`);
        document.getElementById("cointainer").appendChild(newCont);
        for (j=1; j<=val; j++){
            const newDiv = document.createElement("div");
            newDiv.setAttribute("class", "sqr")
            document.getElementById(`cont${i}`).appendChild(newDiv);
        }
    };
    
}
