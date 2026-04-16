"use strict";

function solveEquation(a, b, c) {
  let d = b ** 2 - 4 * a * c;
  let roots = [];
  if (d < 0) {
    return roots;
  } 
  else if (d === 0) {
    let root = -b / (2 * a);
    roots.push(root);
  } 
  else {
    let root1 = (-b + Math.sqrt(d)) / (2 * a);
    let root2 = (-b - Math.sqrt(d)) / (2 * a);
    roots.push(root1, root2);
  }
  return roots;
}
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