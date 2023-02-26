import ProgressBar from 'react-bootstrap/ProgressBar';
import { Col, Container, Row } from 'react-bootstrap';

const CheckListProgress = (props) => {
  const now = props.pVal;
  return (
    <>
      <Container className="p-4">
        <Row>
          <Col xs={11} style={{}}>
            <ProgressBar now={now} label={`${now}%`} />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default CheckListProgress;
