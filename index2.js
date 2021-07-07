const sumFunc = (arr) => {
  if (!Array.isArray(arr)) return;
  return arr.map((item, index, currentArray) => {
    if (index === currentArray.length - 1 || index === 0) return item * item;

    return item + 1;
  });
};
console.log(sumFunc([1, 2, 3, 4, 5, 6, 7]));
console.log(sumFunc([2, 3, 7, 5]));
console.log(sumFunc([33, 3, 7, 33]));
