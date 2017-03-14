var numberToString = function(x){
  return "" + x + "";
};

var increase = function(x){
  x += 1;
  return x;
};

var decrease = function(x){
  x -= 1;
  return x;
};

var add = function(x, y){
  return x + y;
};

var subtract = function(x, y){
  return x - y;
};

var multiply = function(x, y){
  return x * y;
};

var divide = function(x, y){
  return x / y;
};

var square = function(x){
  return x * x;
};

var calculate = function(op, x, y){
  var result = null;

  switch(op){
    case "add":
      result = x + y;
      operator = " + ";
      break;
    case "subtract":
      result = x - y;
      operator = " - ";
      break;
    case "multiply":
      result = x * y;
      operator = " * ";
      break;
    case "divide":
      result = x / y;
      operator = " / ";
      break;
  }
  var answer = x + operator + y + " = " + result;
  console.log(answer);
  return result;
};
/**
 * Performs a mathematical operation on two numbers.
 * Also prints out the equation: (i.e.) "1 + 5 = 6" or "8 / 2 = 4".
 * @param {string} operation "add", "subtract", "multiply", or "divide"
 * @param {number} x
 * @param {number} y
 * @return {number} the result
 */

var isGreaterThan = function(x, y){
  if(x > y){
    return true;
  } else {
    return false;
  }
};

var isLessThan = function(x, y){
  if(x < y){
    return true;
  } else {
    return false;
  }
};

var areEqual = function(x, y){
  if(x === y){
    return true;
  } else {
    return false;
  }
};

var minimum = function(x, y){
  if(x < y){
    return x;
  } else {
    return y;
  }
};

var maximum = function(x, y){
  if(x > y){
    return x;
  } else {
    return y;
  }
};

var isEven = function(n){
  if(n % 2 === 0){
    return true;
  } else {
    return false;
  }
};

var isOdd = function(n){
  if(n % 2 !== 0){
    return true;
  } else {
    return false;
  }
};

var letterGrade = function(x, y){
  if(x / y >= 0.9 && x / y <= 1){
    return "A";
  } else if(x / y >= 0.8 && x / y <= 0.9){
    return "B";
  } else if(x / y >= 0.7 && x / y <= 0.8){
    return "C";
  } else if(x / y >= 0.6 && x / y <= 0.7){
    return "D";
  } else if(x / y >= 0 && x / y <= 0.6){
    return "F";
  }
};

var incrementReviews = function(r){
  if(r.reviews === undefined){
    r.reviews = 0;
  }
    r.reviews++;
    return r;
};

var combine = function(a, b){
  return  a + " " + b;
};
/**
 * Joins two strings with a space.
 * @param {string} word1
 * @param {string} word2
 * @return {string} joined the words joined with a space
 */

var createCircle = function(r){
  var circle = {};
  circle.circumference = (2 * Math.PI * r);
  circle.area = (Math.PI * r * r);
  return circle;
};