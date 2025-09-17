import { useEffect, useState } from "react";
import axios from "axios";

export default function Books() {
  const [books, setBooks] = useState([]);
  const [error, setError] = useState("");

  // adatok betöltése
  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get("/api/books");
        setBooks(data);
      } catch (e) {
        console.error(e);
        setError("Nem sikerült betölteni a könyveket.");
      }
    })();
  }, []);

  // könyv törlése
  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/books/${id}`);
      setBooks(books.filter(b => b.id !== id));
    } catch (e) {
      console.error(e);
      setError("Nem sikerült törölni a könyvet.");
    }
  };

  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <section>
      <h1>Könyvek</h1>

      {books.length === 0 && <p>Nincs könyv az adatbázisban.</p>}

      {books.length > 0 && (
        <table border="1" cellPadding="8" style={{ borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th>Id</th>
              <th>Cím</th>
              <th>Kiadó</th>
              <th>Ár</th>
              <th>Művelet</th>
            </tr>
          </thead>
          <tbody>
            {books.map(b => (
              <tr key={b.id}>
                <td>{b.id}</td>
                <td>{b.title}</td>
                <td>{b.publisher?.name}</td>
                <td>{b.price}</td>
                <td>
                  <button onClick={() => handleDelete(b.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </section>
  );
}
