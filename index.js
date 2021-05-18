// Code your solution in this file!

// function multiply (num1,num2) {
//     return num1 * num2;
// }

// function add (num1,num2) {
//     return num1 + num2;
// }

// function subtract (num1,num2) {
//     return num1 - num2;
// }

// function doMath (someMath) {
//     return someMath(5,10);
// }

// doMath (multiply);
// doMath (add);
// doMath (subtract);

function distanceFromHqInBlocks(streetNnmber) {
    return Math.abs(streetNnmber - 42);
}

function distanceFromHqInFeet(streetNnmber) {
    return Math.abs(streetNnmber - 42)*264;
}

function distanceTravelledInFeet(startingBlock,endingBlock) {
    return Math.abs(endingBlock - startingBlock)*264;
}

function  calculatesFarePrice(start, destination) {
    let distance = Math.abs(destination - start)*264 ;
    if (distance<400) {
        return 0;
    }
    else if (distance >= 400 && distance <=2000) {
        return (distance - 400) * 0.02;
    }
    else if (distance > 2000 && distance <=2500) {
        return 25;
    }
    else {
        return 'cannot travel that far'
    }
}