import React, { useEffect, useState } from "react";
import { getPublishers } from "../api";

export default function Publishers() {
  const [rows, setRows] = useState([]);
  const [err, setErr] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const { data } = await getPublishers();
        setRows(Array.isArray(data) ? data : []);
      } catch (e) {
        console.error(e);
        setErr("Nem sikerült betölteni a kiadókat.");
      }
    })();
  }, []);

  return (
    <section>
      <h1>Publishers</h1>
      {err && <p style={{ color: "crimson" }}>{err}</p>}
      {!err && rows.length === 0 && <p>Nincs megjeleníthető kiadó.</p>}
      {rows.length > 0 && (
        <table border="1" cellPadding="8" style={{ borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              {/* ha a backend ad több mezőt, itt bővítheted */}
            </tr>
          </thead>
          <tbody>
            {rows.map(p => (
              <tr key={p.id}>
                <td>{p.id}</td>
                <td>{p.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </section>
  );
}
