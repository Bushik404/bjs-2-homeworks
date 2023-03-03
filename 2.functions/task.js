function getArrayParams(...arr) {
  let min = Infinity;
  let max = -Infinity;
  let avg = 0;

  for(let i = 0; i < arr.length; i++){
    if(min > arr[i]){
      min = arr[i];
    }
    if(max < arr[i]){
      max = arr[i];
    }
    avg += arr[i];
  }
  avg = avg/arr.length;


  return { min: min, max: max, avg: Number(avg.toFixed(2)) };
}

function summElementsWorker(...arr) {
  let sum = 0;
  
  for(let i = 0; i < arr.length; i++){
    sum +=arr[i];
  }
  return sum;
}

function differenceMaxMinWorker(...arr) {
  let min = Infinity;
  let max = -Infinity;

  for(let i = 0; i <= arr.length; i++){
    if(arr.length === 0){
      return 0;
    } else {
    if(min > arr[i]){
      min = arr[i];
    }
    if(max < arr[i]){
      max = arr[i];
    }
  }
}
  return max-min;
}

function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0;
  let sumOddElement = 0;

  for(let i = 0; i < arr.length; i++){
    if(arr[i] % 2 === 0){
      sumEvenElement += arr[i];
    }else {
      sumOddElement += arr[i];
    }
  }
  return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
  let sumEvenElement = 0;
  let countEvenElement = 0;

  if(arr.length === 0){
    return 0;
  }
  for(let i = 0; i < arr.length; i++){
    if(arr[i] % 2 === 0){
      sumEvenElement += arr[i];
      countEvenElement++;
    }
  }
  return sumEvenElement / countEvenElement;
}

function makeWork (arrOfArr, func) {
  let maxWorkerResult = -Infinity;

  for(let i = 0; i < arrOfArr.length; i++){
    if(maxWorkerResult < func(...arrOfArr[i])){
      maxWorkerResult = func(...arrOfArr[i]);
    }
  }
  return maxWorkerResult;
}
