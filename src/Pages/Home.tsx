import React from 'react'
import { Container, Accordion, Row, Col, Button, Form } from 'react-bootstrap'

function Home() {
  return (
    <Container className='my-3'>
      <h1 className='text-center mb-3'>Neden İnternet Karşılaştırı Kullanmalıyım?</h1>
      <Row className='mb-3'>
        <Col md={4}>
          <div className='shadow p-3 rounded-3 homeInfoCard'>
            <div className='homeInfoIcon text-center'>
              <i className="bi bi-check2-circle"></i>
            </div>
            <h2 className='homeInfoHeader my-2 text-center'>En İyisini Seçin</h2>
            <p className='homeInfoText'>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          </div>
        </Col>
        <Col md={4}>
          <div className='shadow p-3 rounded-3 homeInfoCard'>
            <div className='homeInfoIcon text-center'>
              <i className="bi bi-check2-circle"></i>
            </div>
            <h2 className='homeInfoHeader  my-2 text-center'>En İyisini Seçin</h2>
            <p className='homeInfoText'>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          </div>
        </Col>
        <Col md={4}>
          <div className='shadow p-3 rounded-3 homeInfoCard'>
            <div className='homeInfoIcon text-center'>
              <i className="bi bi-check2-circle"></i>
            </div>
            <h2 className='homeInfoHeader  my-2 text-center'>En İyisini Seçin</h2>
            <p className='homeInfoText'>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          </div>
        </Col>
      </Row>
      <Row>
        <Col lg="4">
          <Form>
            <div className='shadow rounded-3 p-3'>
              <div className='border rounded-3 p-2 d-flex justify-content-between mb-3'>
                <span className='fw-bold'>Filtrele</span>
                <span className='text-muted'>0 sonuç bulundu</span>
              </div>
              <div className='mb-3'>
                <Accordion flush>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header><strong>Sağlayıcı</strong></Accordion.Header>
                    <Accordion.Body>
                      {['checkbox'].map((type) => (
                        <div key={`inline-${type}`} className="mb-3">
                          <Form.Check
                            label="1"
                            name="group1"
                            id={`block-${type}-1`}
                          />
                          <Form.Check
                            label="2"
                            name="group1"
                            id={`block-${type}-2`}
                          />
                        </div>
                      ))}
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header><strong>Bağlantı Türü</strong></Accordion.Header>
                    <Accordion.Body>
                      {['checkbox'].map((type) => (
                        <div key={`inline-${type}`} className="mb-3">
                          <Form.Check
                            label="1"
                            name="group1"
                            id={`block-${type}-1`}
                          />
                          <Form.Check
                            label="2"
                            name="group1"
                            id={`block-${type}-2`}
                          />
                        </div>
                      ))}
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="2">
                    <Accordion.Header><strong>Bağlantı Hızı</strong></Accordion.Header>
                    <Accordion.Body>
                      {['checkbox'].map((type) => (
                        <div key={`inline-${type}`} className="mb-3">
                          <Form.Check
                            label="1"
                            name="group1"
                            id={`block-${type}-1`}
                          />
                          <Form.Check
                            label="2"
                            name="group1"
                            id={`block-${type}-2`}
                          />
                        </div>
                      ))}
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="3">
                    <Accordion.Header><strong>Sınırlama</strong></Accordion.Header>
                    <Accordion.Body>
                      {['checkbox'].map((type) => (
                        <div key={`inline-${type}`} className="mb-3">
                          <Form.Check
                            label="1"
                            name="group1"
                            id={`block-${type}-1`}
                          />
                          <Form.Check
                            label="2"
                            name="group1"
                            id={`block-${type}-2`}
                          />
                        </div>
                      ))}
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
              <div className='d-grid'>
                <Button variant="primary" type="submit">Filtrele</Button>
              </div>
            </div>
          </Form>
        </Col>
        <Col lg="8">
          <div className='shadow rounded-3 p-3 mb-3'>
            <Form.Select id='orderSelect'>
              <option selected disabled>Sırala</option>
              <option value="1">Ucuzdan-Pahalıya</option>
              <option value="2">Pahalıdan-Ucuza</option>
              <option value="3">En Düşük Hıza Göre</option>
              <option value="4">En Yüksek Hıza Göre</option>
            </Form.Select>
          </div>
          <div className='shadow rounded-3 p-3'>
            <div className='border p-3'>
              <Row>
                <Col className='d-flex justify-content-center align-items-center' md={4}>
                  <img className='p-1' src='/uploads/Türk_Telekom_logo.svg' alt='iss-logo' />
                </Col>
                <Col md={8}>
                  <div className='campaingInfo'>
                    <h2 className='fw-bold fs-4'>100 Mbps Sınırsız İnternet</h2>
                    <div className='campaignSpecs d-flex gap-2 flex-wrap my-3'>
                      <span className='border p-1'><i className="bi bi-speedometer2"></i> 100 Mbps</span>
                      <span className='border p-1'><i className="bi bi-upload"></i> 10 Mbps</span>
                      <span className='border p-1'><i className="bi bi-pie-chart-fill"></i> Sınırsız</span>
                      <span className='border p-1'><i className="bi bi-clock-history"></i> 24 Ay Taahhüt</span>
                      <span className='border p-1'><i className="bi bi-cash-stack"></i> 160 &#x20BA;</span>
                    </div>
                  </div>
                  <div className='campaignButtonGroup d-flex gap-2 flex-wrap float-end mb-auto'>
                    <a href='/' className='btn btn-primary'>İncele</a>
                    <a href='/' className='btn btn-success'>Türk Telekom Beni Arasın</a>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default Home
