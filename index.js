const multiplication = (arr) => {
  if (!Array.isArray(arr)) return;
  return arr.map((item) => {
    return item * 3;
  });
};
console.log(multiplication([1, 2, 3, 4, 5, 6, 7]));
console.log(multiplication([4, 2, 5]));
