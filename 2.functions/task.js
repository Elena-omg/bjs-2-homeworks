function getArrayParams(...arr) {
  let min = Infinity;
  let max = -Infinity;
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    if (num < min) min = num;
    if (num > max) max = num;
    sum += num;
  }
  const avg = +(sum / arr.length).toFixed(2);
  return { min, max, avg };
}

function summElementsWorker(...arr) {
  if (arr.length === 0) return 0;
  return arr.reduce((acc, val) => acc + val, 0);
}

function differenceMaxMinWorker(...arr) {
  if (arr.length === 0) return 0;
  return Math.max(...arr) - Math.min(...arr);
}

function differenceEvenOddWorker(...arr) {
  if (arr.length === 0) return 0;
  let sumEven = 0;
  let sumOdd = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) sumEven += arr[i];
    else sumOdd += arr[i];
  }
  return sumEven - sumOdd;
}

function averageEvenElementsWorker(...arr) {
  if (arr.length === 0) return 0;
  let sumEven = 0;
  let countEven = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEven += arr[i];
      countEven++;
    }
  }
  return countEven === 0 ? 0 : sumEven / countEven;
}

function makeWork(arrOfArr, func) {
  if (!arrOfArr || arrOfArr.length === 0) return 0;
  let maxWorkerResult = -Infinity;
  for (let i = 0; i < arrOfArr.length; i++) {
    const result = func(...arrOfArr[i]);
    if (result > maxWorkerResult) maxWorkerResult = result;
  }
  return maxWorkerResult;
}