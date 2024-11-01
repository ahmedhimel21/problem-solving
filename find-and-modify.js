const persons = [
  { name: "Tanvir", age: 25 },
  { name: "Sabbir", age: 30 },
  { name: "Johny", age: 22 },
  { name: "Afrin", age: 27 },
];

const updatePersonAge = (personsArr, name, newAge) => {
  return personsArr.map((person) =>
    person.name === name ? { ...person, age: newAge } : person
  );
};

console.log(updatePersonAge(persons, "Tanvir", 29));
