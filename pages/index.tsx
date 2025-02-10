import React, { useState, useEffect } from 'react';
import Head from 'next/head';

interface Book {
  title: string;
  author: string;
  description: string;
}

const Home: React.FC = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch('/api/books');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setBooks(data.books);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  if (loading) {
    return (
      <>
        <Head>
          <title>Psychical Research Book Club - Home</title>
        </Head>
        <h1>Book Club for Psychical Development</h1>
        <div>Loading...</div>
      </>
    );
  }

  if (error) {
    return (
      <>
        <Head>
          <title>Psychical Research Book Club - Home</title>
        </Head>
        <h1>Book Club for Psychical Development</h1>
        <div>Error: {error}</div>
      </>
    );
  }

  return (
    <>
      <Head>
        <title>Psychical Research Book Club - Home</title>
      </Head>
      <div>
        <h1>Book Club for Psychical Development</h1>
        <h2>Current Books</h2>
        <ul>
          {books.map((book, index) => (
            <li key={index}>
              <strong>{book.title}</strong> by {book.author}
              <br />
              {book.description}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Home;
