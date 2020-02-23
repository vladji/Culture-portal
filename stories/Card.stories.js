import React from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'

import '../src/styles/bootstrap.min.css'

export default {
  title: 'Card',
}

export const directorsCard = () => {
  return (
    <Container>
      <Row>
        <Col lg={4}>
          <Card>
            <Card.Img variant="top" src="https://via.placeholder.com/150" />
            <Card.Body className="card-body">
              <Card.Title className="card-title">
                Card Title
              </Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
              <Button href="https://google.com" variant="primary" className="btn btn-primary">
                Go somewhere
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}