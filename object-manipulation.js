const books = [
  { title: "Physics", author: "Shahajahan Tapan", year: 1949 },
  { title: "Chemistry", author: "Hazari Nag", year: 1960 },
  { title: "Biology", author: "Gazi Azmal", year: 1925 },
];

const getBookTitles = (booksArr) => {
  const titles = [];
  for (let i = 0; i < booksArr.length; i++) {
    titles.push(books[i].title);
  }
  return titles;
};

console.log(getBookTitles(books));
