import React from "react";
import { Button, Card, Row, Col } from "react-bootstrap";
import API from "../../utils/API";
function BookResult(props) {
  const title = props.book.volumeInfo.title;
  const authors = props.book.volumeInfo.authors;
  const description = props.book.volumeInfo.description;
  const imageLinks = props.book.volumeInfo.imageLinks;
  
  function handleSaveBook(){
      API.saveBook({
        title: title,
        authors: authors,
        description: description,
        image:imageLinks[0]
      })
        .then(res =>console.log(res))
        .catch(err => console.log(err));

  }; 
  return (

    <div class="col-md-12 my-2">
      <Card>
        <Card.Header>
          <Row>
            <Col>
              <Card.Title>{title}</Card.Title>
              <Card.Text>{authors ? authors[0] : null}</Card.Text>
            </Col>
            <Col>
              <div className="text-right">
                <Button variant="primary" className="mx-2">
                  View
                </Button>
                <Button onClick={() => handleSaveBook()} variant="primary">Save</Button>
              </div>
            </Col>
          </Row>
        </Card.Header>
        <Card.Body>
          <div class="media">
            <img
              style={{ width: 300 }}
              src={imageLinks ? imageLinks.thumbnail : null}
              class="mr-3"
              alt="..."
            />
            <div class="media-body">
              <h5 class="mt-0">Description</h5>
              {description}
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}
export default BookResult;



