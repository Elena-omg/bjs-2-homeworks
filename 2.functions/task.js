// 1. Ипотечный калькулятор
function calculateTotalMortgage(percent, contribution, amount, countMonths) {
    function toNumber(value) {
        if (typeof value === 'number') return value;
        if (typeof value === 'string') {
            const num = parseFloat(value);
            return isNaN(num) ? NaN : num;
        }
        return NaN;
    }
    const p = toNumber(percent);
    const c = toNumber(contribution);
    const a = toNumber(amount);
    const n = toNumber(countMonths);
    if (isNaN(p) || isNaN(c) || isNaN(a) || isNaN(n)) return false;
    const S = a - c;
    if (S <= 0) return 0;
    const P = p / 100 / 12;
    let monthlyPayment;
    if (P === 0) monthlyPayment = S / n;
    else monthlyPayment = S * (P + (P / (Math.pow(1 + P, n) - 1)));
    const total = monthlyPayment * n;
    return Math.round(total * 100) / 100;
}

// 2. Функции для работы с массивами (по схеме препода)
function getArrayParams(...arr) {
    if (arr.length === 0) return { min: 0, max: 0, avg: 0 };
    let min = arr[0];
    let max = arr[0];
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) min = arr[i];
        if (arr[i] > max) max = arr[i];
        sum += arr[i];
    }
    const avg = parseFloat((sum / arr.length).toFixed(2));
    return { min, max, avg };
}

function summElementsWorker(...arr) {
    if (arr.length === 0) return 0;
    return arr.reduce((sum, current) => sum + current, 0);
}

function differenceMaxMinWorker(...arr) {
    if (arr.length === 0) return 0;
    return Math.max(...arr) - Math.min(...arr);
}

function differenceEvenOddWorker(...arr) {
    if (arr.length === 0) return 0;
    let sumEven = 0, sumOdd = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) sumEven += arr[i];
        else sumOdd += arr[i];
    }
    return sumEven - sumOdd;
}

function averageEvenElementsWorker(...arr) {
    if (arr.length === 0) return 0;
    let sumEven = 0, countEven = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            sumEven += arr[i];
            countEven++;
        }
    }
    if (countEven === 0) return 0;
    return sumEven / countEven;
}

function makeWork(arrOfArr, func) {
    if (arrOfArr.length === 0) return 0;
    let maxResult = -Infinity;
    for (let i = 0; i < arrOfArr.length; i++) {
        const result = func(...arrOfArr[i]);
        if (result > maxResult) maxResult = result;
    }
    return maxResult;
}