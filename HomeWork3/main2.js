const initialData = [
  {
    username: "Maria",
    age: 25,
  },
  {
    username: "Alex",
    age: 21,
  },
  {
    username: "Oleg",
    age: 14,
  },
  {
    username: "Dmitriy",
    age: 35,
  },
  {
    username: "Oksana",
    age: 72,
  },
];

const sortObject = (arr) => {
  if (!Array.isArray(arr)) return;
  return initialData
    .filter((item) => item.age >= 21)
    .sort((prew, next) => {
    
      if (prew.username < next.username) return -1;
      if (prew.username > next.username) return 1;

      return 0;
    });
};

console.log(sortObject(initialData));
