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