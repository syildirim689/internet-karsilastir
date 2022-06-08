import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

function MainFooter() {
  return (
    <footer className='mainFooter p-3'>
      <Container>
        <Row>
          <Col md={4}>
            <h2 className='fs-5'>İletişim Bilgileri</h2>
            <div className='d-flex flex-column'>
              <span><i className='bi bi-geo-alt'></i> <strong>Adres:</strong> Cumhuriyet Mahallesi Mithatpaşa Caddesi 28/B Çankaya/ANKARA</span>
              <span><i className="bi bi-telephone"></i> <strong>Telefon:</strong> <a href='/'>0312 435 40 40</a></span>
              <span><i className="bi bi-envelope-open"></i> <strong>E-Posta:</strong> <a href='/'>bilgi@internetkarsilastir.com</a></span>
            </div>
          </Col>
          <Col md={4}>
            <h2 className='fs-5'>Hızlı Erişim</h2>
            <div className='d-flex flex-column'>
              <span><a href="/">1</a></span>
              <span><a href="/">1</a></span>
              <span><a href="/">1</a></span>
            </div>
          </Col>
          <Col md={4}>
            <h2 className='fs-5'>Hızlı Erişim</h2>
            <div className='d-flex flex-column'>
              <span><a href="/">1</a></span>
              <span><a href="/">1</a></span>
              <span><a href="/">1</a></span>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default MainFooter
