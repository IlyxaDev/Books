import { useState } from "react";

type Book = {
  id: number;
  title: string;
};

// const book: Book = {
//   id: 1,
//   title: ''
// }

// 1) Удаление объектов (написать 2 реализации - remove, filter)
// 2) Реализовать создание новой книги через input

function App() {
  const [books, setBooks] = useState([
    {
      id: 0,
      title: "Ahhh",
    },
    {
      id: 1,
      title: "Ahhh2",
    },
  ]);

  return (
    <div>
      <ul>
        {books.map((book) => {
          return (
            <div>
              {book.id}, {book.title}
              <button>Delete</button>
            </div>
          );
        })}
      </ul>
      <input type="text" />
      <button>Create</button>
      <button
        onClick={() => {
          const id = getMaxId(books) + 1;
          const book: Book = {
            id: id,
            title: `Title ${id}`,
          };
          setBooks([...books, book]);
        }}
      >
        жми
      </button>
    </div>
  );
}

function getMaxId(books: Book[]) {
  let maxId = 0;
  for (let index = 0; index < books.length; index++) {
    if (books[index].id > maxId) {
      maxId = books[index].id;
    }
  }
  return maxId;
}

// max = 6
// if (current > max)
// max = current

export default App;
