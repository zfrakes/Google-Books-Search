import React, { useState } from 'react';
import { Form, Button, Card, Row, Col } from 'react-bootstrap';
import BookResult from '../../Components/BookResult';
function handleSubmit(e) {
  e.perventDefault()
  console.log("sumbitted")
}
function Search() {
  const handleSubmit = (event) => {
    // next line stops the page from refreshing
    event.preventDefault();

    // Gets the form
    const form = event.target;

    // Gets the search value from the form
    const searchTerm = form.formSearch.value;

    // Reach out to the google books API to get information regarding out search
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchTerm}`)
      .then((res) => res.json())
      .then((data) => {
        setBooks(data.items);
        console.log(data.items);
      });
  };

  const [books, setBooks] = useState([]);

  return (
    <main role="main">

      <section class="jumbotron text-left">
        <div class="container">
          <h3>Book Search</h3>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formSearch">
              <Form.Label>Book</Form.Label>
              <Form.Control type="text" placeholder="Enter Book to search" />
              <Form.Text className="text-muted">
                Enter the name of the book that you want to search.
              </Form.Text>
            </Form.Group>
            <Button variant="primary" type="submit">Search</Button>
          </Form>
        </div>
      </section>

      <div class="album py-5 bg-light">
        <div class="container text-left">
          <h3>Results</h3>
          <div class="row">
            {books && books.map((book) => (
              <BookResult book={book} key={book.id} />
            ))}
          </div>
        </div>
      </div>

    </main >
      
  );
}

export default Search;
