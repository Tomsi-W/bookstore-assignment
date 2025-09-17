import React from "react";
import { BrowserRouter, Routes, Route, NavLink, Navigate } from "react-router-dom";
import Publishers from "./pages/Publishers.jsx";
import Books from "./pages/Books.jsx";
import CreateBook from "./pages/CreateBook.jsx";

const Nav = () => (
  <nav style={{ display: "flex", gap: 12, padding: 12, borderBottom: "1px solid #ddd" }}>
    <NavLink to="/publishers">Publishers</NavLink>
    <NavLink to="/books">Books</NavLink>
    <NavLink to="/create">Create book</NavLink>
  </nav>
);

export default function App() {
  return (
    <BrowserRouter>
      <Nav />
      <main style={{ padding: 16 }}>
        <Routes>
          <Route path="/" element={<Navigate to="/publishers" replace />} />
          <Route path="/publishers" element={<Publishers />} />
          <Route path="/books" element={<Books />} />
          <Route path="/create" element={<CreateBook />} />
          <Route path="*" element={<h1>Page not found</h1>} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}
