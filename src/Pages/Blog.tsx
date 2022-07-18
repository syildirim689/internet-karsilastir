import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'

function Blog() {
  return (
    <Container className='my-3'>
      <h1>Blog</h1>
      <Row className='g-3'>
        <Col md={3}>
          <Card>
            <Card.Img className='p-3' variant="top" src="/uploads/Türk_Telekom_logo.svg" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
              <a className='btn btn-primary' href='/blog'>Go somewhere</a>
            </Card.Body>
            <Card.Footer className="text-muted">2 days ago</Card.Footer>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default Blog
