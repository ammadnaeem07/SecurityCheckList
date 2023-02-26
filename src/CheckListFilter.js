import { Col, Container, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
const CheckListFilter = () => {
  return (
    <>
      <Container className="p-4">
        <Row>
          <Col xs={11} style={{}}>
            <Card>
              <Card.Body>
                <div>
                  Cloud Providers:
                  <ButtonGroup aria-label="" style={{ marginLeft: '10px' }}>
                    <Button variant="success">AWS</Button>
                    <Button variant="success">GCP</Button>
                    <Button variant="success">Azure</Button>
                  </ButtonGroup>
                </div>
                <div style={{ marginTop: '20px' }}>
                  Services:
                  <ButtonGroup aria-label="" style={{ marginLeft: '10px' }}>
                    <Button variant="info">AWS EC2</Button>
                    <Button variant="info">AWS S3</Button>
                    <Button variant="info">GCP VM</Button>
                    <Button variant="info">GCP Firebase</Button>
                  </ButtonGroup>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default CheckListFilter;
