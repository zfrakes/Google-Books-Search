import React from 'react';
import { Form, Button, Card, Row, Col } from 'react-bootstrap';
function Search() {
  return (
    <main role="main">

      <section class="jumbotron text-left">
        <div class="container">
          <h3>Book Search</h3>
          <Form>
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
            <div class="col-md-12 my-2">
              <Card>
                  <Card.Header>
                    <Row>
                      <Col>
                        <Card.Title>Special title treatment</Card.Title>
                        <Card.Text>
                          With supporting text below as a natural lead-in to additional content.
                        </Card.Text>
                      </Col>
                      <Col>
                        <div className="text-right">
                          <Button variant="primary" className="mx-2">View</Button>
                          <Button variant="primary">Save</Button>
                        </div>                    
                      </Col>
                  </Row>
                 </Card.Header>
                  <Card.Body>
                      <div class="media">
                      <img style={{ width: 300 }} src="https://www.freecodecamp.org/news/content/images/2020/02/Ekran-Resmi-2019-11-18-18.08.13.png" class="mr-3" alt="..." />
                      <div class="media-body">
                        <h5 class="mt-0">Media heading</h5>
                        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                      </div>
                    </div>
                  </Card.Body>
              </Card>
            </div>




            <div class="col-md-12 my-2">
            <Card>
                <Card.Header>
                  <Row>
                    <Col>
                      <Card.Title>Special title treatment</Card.Title>
                      <Card.Text>
                        With supporting text below as a natural lead-in to additional content.
                      </Card.Text>
                    </Col>
                    <Col>
                      <div className="text-right">
                        <Button variant="primary" className="mx-2">View</Button>
                        <Button variant="primary">Save</Button>
                      </div>                    
                    </Col>
                </Row>
               </Card.Header>
                <Card.Body>
                    <div class="media">
                    <img style={{ width: 300 }} src="https://www.freecodecamp.org/news/content/images/2020/02/Ekran-Resmi-2019-11-18-18.08.13.png" class="mr-3" alt="..." />
                    <div class="media-body">
                      <h5 class="mt-0">Media heading</h5>
                      Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                    </div>
                  </div>
                </Card.Body>
            </Card>
          </div>



          </div>
        </div>
      </div>

    </main>
      
  );
}

export default Search;
