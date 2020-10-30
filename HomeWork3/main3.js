const usersR = [
  {
    id: 1,
    name: "Alex",
  },
  {
    id: 2,
    name: "Tomara",
  },
  {
    id: 3,
    name: "Max",
  },
];

const removeUsers = (arr, arrId) => {
  if (!Array.isArray(arr)) return;
  if (!Array.isArray(arrId)) return;

  return arr.filter((item) => {
    return !arrId.includes(item.id);
  });
};
console.log(removeUsers(usersR, [2, 3]));
console.log(removeUsers(usersR, [3]));
