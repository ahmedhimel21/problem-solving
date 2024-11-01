const students = [
  { name: "Tanvir", grades: [90, 85, 88] },
  { name: "Sabbir", grades: [70, 80, 75] },
  { name: "Tanjir", grades: [95, 92, 90] },
];

const sortStudentsByAverageGrade = (arr) =>
  arr.sort((a, b) => {
    const avgA =
      a.grades.reduce((sum, grade) => sum + grade, 0) / a.grades.length;
    const avgB =
      b.grades.reduce((sum, grade) => sum + grade, 0) / b.grades.length;
    return avgB - avgA;
  });

console.log(sortStudentsByAverageGrade(students));
