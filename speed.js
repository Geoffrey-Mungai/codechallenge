
function calculatepoints(speed) {
    const limit = 70;
    const points = 2;

    if (speed <=limit) {
        speeding ="OK";
    } else {

        const excesSpeed = speed - limit ;

        speeding = Math.Floor (excessSpeed / 5) * points;

    }if(speeding > 2){
        alert("LICENSE SUSPENDED ! ")
    }
    
    
return speeding;


}

let speed = prompt("Please enter the current speed ot the vehicle: ");
calculatepoints(speed);
alert('The driver spending points is ${speeding} points');