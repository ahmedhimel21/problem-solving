const persons = [
  { name: "Tuli", age: 25, gender: "female" },
  { name: "Sabbir", age: 30, gender: "male" },
  { name: "Johny", age: 22, gender: "male" },
  { name: "Afrin", age: 27, gender: "female" },
];

const getMaleNames = (personsArr) => {
  const personName = personsArr
    .filter((person) => person.gender === "male")
    .map((person) => person.name);
  return personName;
};

console.log(getMaleNames(persons));
