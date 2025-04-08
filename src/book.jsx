import React from 'react';

const Book = ({title, author, price}) => {
  return (
    <div>
        <h1>{title}</h1>
        <h2>{author}</h2>
        <h3>Rs. {price}</h3>
    </div>
  );
};

export default Book;
