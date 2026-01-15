import { useState } from "react";
import { uuid } from "./uuid";

type Book = {
  id: string;
  title: string;
  createAt: Date;
};

// uuid = guid

function createBook(title: string) {
  return {
    id: uuid(),
    title: title,
    createAt: new Date(),
  };
}

function App() {
  const [books, setBooks] = useState<Book[]>([
    createBook("The test"),
    createBook("Home and orange"),
    createBook("Test and test"),
  ]);
  const [book, setBook] = useState<Book>({
    id: uuid(),
    title: "",
    createAt: new Date(),
  });

  const ids = books.map((book) => book.id);

  const onForm = (e: React.FormEvent) => {
    e.preventDefault();

    // Создаем новую книгу
    const newBook: Book = {
      ...book,
      id: uuid(),
      createAt: new Date(),
    };

    // Обновляем список книг
    setBooks((prevBooks) => [newBook, ...prevBooks]);

    // Сбрасываем форму 123
    setBook({
      id: uuid(),
      title: "",
      createAt: new Date(),
    });
  };

  const remove = (id: string) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  const [text, setText] = useState("");

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(text.toLowerCase())
  );

  /*
  1 стили
  2 добавить еще полей для книги (описание, рейтинг, кол-во страниц)
  3 редактирование книги
  */

  return (
    <div>
      <h1>Управление книгами</h1>
      <div>{ids.join(" , ")}</div>
      <input
        type="text"
        placeholder="Поиск..."
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
      <form onSubmit={onForm}>
        <input
          type="text"
          value={book.title}
          onChange={(e) => setBook({ ...book, title: e.target.value })}
          placeholder="Название книги"
          required
        />
        <button type="submit">Добавить книгу</button>
      </form>
      <div>
        <h2>Список книг (всего: {books.length})</h2>

        {filteredBooks.length === 0 ? (
          <p>Нет добавленных книг</p>
        ) : (
          <ul>
            {filteredBooks.map((book) => (
              <li key={book.id}>
                <div>
                  <h3>{book.title}</h3>
                  <p></p>
                  <p>
                    <strong>Дата создания:</strong>{" "}
                    {book.createAt.toLocaleDateString()}
                  </p>
                  <p>
                    <strong>ID:</strong> {book.id}
                  </p>
                  <div>
                    <button onClick={() => remove(book.id)}>Удалить</button>
                  </div>
                </div>
                <hr />
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default App;
