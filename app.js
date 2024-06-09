//Create a function that takes two numbers and gives their sum

function addition(x, y) {
    return x + y;
}

console.log(addition(3, 2))
console.log(addition(-3, -6))
console.log(addition(7, 3))

//Create a function that converts hours into seconds

function hoursIntoSeconds(hours) {
    return hours * 60 * 60;
}

console.log(hoursIntoSeconds(2))
console.log(hoursIntoSeconds(10))
console.log(hoursIntoSeconds(24))

//Create a function that calculates the perimeter of a rectangle

function calcPerimeter(l, w) {
    w = w * 2;
    l = l * 2;
    return l + w;
}

console.log(calcPerimeter(6, 7))
console.log(calcPerimeter(20, 10))
console.log(calcPerimeter(2, 9))

//Create a function that calculates the Area of a Triangle

function calcTriangleArea(b, h) {
    return 0.5 * b * h;
}


console.log(calcTriangleArea(3, 2))
console.log(calcTriangleArea(10, 10))
console.log(calcTriangleArea(20, 20))

// Create a function that extends a string

function appendFrontend(appendingString) {
    return appendingString + ' Frontend'
}


console.log(appendFrontend('Apple'))
console.log(appendFrontend('Banana'))
console.log(appendFrontend('Orange'))

//Create a function that returns true if the sum of both numbers is greater than 100. Otherwise, return false

function sumGreaterthan100(sum1, sum2) {
    return sum1 + sum2 >= 100;
}

console.log(sumGreaterthan100(20, 10))
console.log(sumGreaterthan100(50, 60))
console.log(sumGreaterthan100(100, -50))

//Create a function that accepts a number and returns true if it is less than or equal to zero, otherwise returns false

function lessThanOrEqualToZero(num) {
    return num <= 0;
}

console.log(lessThanOrEqualToZero(3))
console.log(lessThanOrEqualToZero(0))
console.log(lessThanOrEqualToZero(-2))

//Create a function that takes a given boolean, and returns the opposite boolean

function oppositeBoolean(bool) {
    return !bool;
}

console.log(oppositeBoolean(true))
console.log(oppositeBoolean(false))

//Create a function that takes any element, and returns true if it is not the number 0

function isNotZero(z) {
    return z !== 0
}

console.log(isNotZero(5));
console.log(isNotZero(0));
console.log(isNotZero(null));

// Create a function that takes two numbers and returns their remainder when divided by each other

function calcRemainder(n1, n2) {
    return n1 % n2;
}

console.log(calcRemainder(4, 2))
console.log(calcRemainder(7, 8))
console.log(calcRemainder(9, 8))

// Create a function that takes two given numbers, and returns true if the number is odd

function isOdd(C) {
    return C % 2 !== 0
}

console.log(isOdd(1))
console.log(isOdd(2))
console.log(isOdd(3))

// Create a function that takes a number argument and returns 1 if the number is event. If the number is odd return -1

function booleanInteger(number){
    // if (number % 2 !== 0) 
    //     {return -1}
    // return 1
    return number % 2 === 0 ? 1 : -1;

}

console.log(booleanInteger(1))
console.log(booleanInteger(2))
console.log(booleanInteger(5))

//Create a function that takes in two strings. If the first string is equal to 'LOGGED_IN' AND the second string is equal to 'SUBSCRIBED' return true, otherwise return false. 

function isLoggedInAndSubscribed(logStatus, subStatus){
    return logStatus === 'LOGGED_IN' && subStatus === 'SUBSCRIBED' ? true : false;
}

console.log(isLoggedInAndSubscribed('LOGGED_IN', 'SUBSCRIBED'))
console.log(isLoggedInAndSubscribed('LOGGED_IN', 'UNSUBSCRIBED'))
console.log(isLoggedInAndSubscribed('LOGGED_OUT', 'SUBSCRIBED'))