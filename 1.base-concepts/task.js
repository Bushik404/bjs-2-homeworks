"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let discriminant = b**2 - 4 * a * c;

  if(discriminant < 0){
  } else if(discriminant === 0){
    arr.push(-b / (2 * a));
  }else {
    arr.push((-b + Math.sqrt(discriminant)) / (2 * a));
    arr.push((-b - Math.sqrt(discriminant)) / (2 * a));
  }
  
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {

  if( isNaN(percent) || isNaN(contribution) || isNaN(amount) || isNaN(countMonths)){
    return false;
  }
  percent = percent / 100;
  let p = percent / 12;
  let bodyCredit = amount - contribution;
  let payment = bodyCredit * (p + (p / (((1 + p)**countMonths) - 1)))
  let totalCount = payment * countMonths ;
  return Number(totalCount.toFixed(2));
}

