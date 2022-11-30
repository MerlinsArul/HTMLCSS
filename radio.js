function Show() {
    var south = document.getElementById("opt1");
    var north = document.getElementById("opt2");
    var sand = document.getElementById("opt3");
    if (south.checked == true) {
        console.log("You have ordered South Indian food");
    }
    else if(north.checked == true)
    {
        console.log("You have ordered North Indian");
    }
        else if(sand.checked ==true)
    {
        console.log("You have ordered Sandwidth");
    }
    else{
        console.log("You have not ordered")
    }

}

