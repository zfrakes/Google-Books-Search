import React from 'react';
import { Form, Button, Card, Row, Col } from 'react-bootstrap';
import API from "../../utils/API";
function Saved() {
  // function deleteBook(id) {
  //   API.deleteBook(id)
  //     .then(res => loadBooks())
  //     .catch(err => console.log(err));
  // }
  return (
    <main role="main">

      <section className="jumbotron text-left">
        <div className="container">
          <h3>Saved Books</h3>
        </div>
      </section>

      <div className="album py-5 bg-light">
        <div className="container text-left">
          <div className="row">
            <div className="col-md-12 my-2">
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
                          <Button variant="danger">Delete</Button>
                        </div>                    
                      </Col>
                  </Row>
                 </Card.Header>
                  <Card.Body>
                      <div className="media">
                      <img style={{ width: 300 }} src="https://www.freecodecamp.org/news/content/images/2020/02/Ekran-Resmi-2019-11-18-18.08.13.png" class="mr-3" alt="..." />
                      <div className="media-body">
                        <h5 className="mt-0">Media heading</h5>
                        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                      </div>
                    </div>
                  </Card.Body>
              </Card>
            </div>




            <div className="col-md-12 my-2">
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
                        <Button variant="danger">Delete</Button>
                      </div>                    
                    </Col>
                </Row>
               </Card.Header>
                <Card.Body>
                    <div className="media">
                    <img style={{ width: 300 }} src="https://www.freecodecamp.org/news/content/images/2020/02/Ekran-Resmi-2019-11-18-18.08.13.png" class="mr-3" alt="..." />
                    <div ClassName="media-body">
                      <h5 ClassName="mt-0">Media heading</h5>
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

export default Saved;
