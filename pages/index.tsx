import React from 'react';
import Head from 'next/head';

function Home() {
  const books = [
    {
      title: "The Invisible Landscape",
      author: "Terence McKenna",
      description: "A deep dive into the nature of reality and consciousness."
    },
    {
      title: "The Roots of Coincidence",
      author: "Arthur Koestler",
      description: "Explores the concept of synchronicity and its implications."
    },
    {
      title: "Entangled Minds",
      author: "Dean Radin",
      description: "Examines the scientific evidence for psychic phenomena."
    }
  ];

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
}

export default Home;
