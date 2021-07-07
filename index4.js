const amount = (arr) => {
  if (!Array.isArray(arr)) return;
  return arr.reduce((total, curentEl) => {
    return total + curentEl;
  }, 0);
};
console.log(amount([1, 2, 3, 4, 5]));
console.log(amount([3, 4]));

const amount2 = (arr) => {
  if (!Array.isArray(arr)) return;
  let sum = 0;
  arr.forEach((elem) => {
    return (sum += elem);
  });
  return sum;
};
console.log(amount2([1, 2, 3, 4, 5]));
console.log(amount2([3, 4]));
