import React from 'react';
import Book from "./book.jsx";

const Bookstore = () => {
    const Books = [
        {
            title: "The Great Gatsby",
            author: "F. Scott Fitzgerald",
            price: 499
        },
        {
            title: "Let Us C",
            author: "Yashwant Katnekar",
            price: 299
        },
        {
            title: "The Alchemist",
            author: "Paulo Coelho",
            price: 399
        },
        {
            title: "The Great Gatsburg",
            author: "Scott Fitzgerald",
            price: 499
        },
    ];
  return (
    <div>
        <Book {...Books[0]} />
        <Book {...Books[1]} />
        <Book {...Books[2]} />
        <Book {...Books[3]} />
    </div>
  );
};

export default Bookstore;
