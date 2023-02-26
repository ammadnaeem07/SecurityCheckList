import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Accordion from 'react-bootstrap/Accordion';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import UserForm from './UserForm';
const CheckListItem = (props) => {
  const [userModal, setUserModal] = useState(false);
  return (
    <Container>
      <br />
      {props.ListItems.map((item, i) =>
        item?.description ? (
          <Row className="p-1" key={i}>
            <Col xs={1} style={{ maxWidth: '20px', marginTop: '9px' }}>
              <Form.Check aria-label="option 1" />
            </Col>
            <Col xs={11}>
              <Accordion defaultActiveKey={0}>
                <Accordion.Item>
                  <Accordion.Header style={{ padding: '0px' }}>
                    <Row>
                      <Col style={{ minWidth: '600px' }}>
                        <span>{item?.description}</span>
                      </Col>
                      <Col md={1} style={{ float: 'left' }}>
                        <h6>
                          <Badge pill bg="light" text="dark">
                            {item?.category}
                          </Badge>
                        </h6>
                      </Col>
                      <Col md={1} style={{ paddingLeft: '20px' }}>
                        <h6>
                          <Badge pill bg="light" text="dark">
                            {item?.service}
                          </Badge>
                        </h6>
                      </Col>
                      <Col md={1} style={{ paddingLeft: '30px' }}>
                        <h6>
                          <Badge
                            bg={item?.risk === 'High' ? 'danger' : 'warning'}
                          >
                            {item?.risk}
                          </Badge>
                        </h6>
                      </Col>
                    </Row>
                  </Accordion.Header>
                  <Accordion.Body>{item?.pageDetail}</Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>
          </Row>
        ) : (
          <></>
        )
      )}
      {/* {props.isAuth} */}
      {props.ListItems.length > 0 ? (
        !props.isAuth ? (
          <Row>
            <Col xs={12}>
              <div className="text-center p-3">
                <Button
                  className="btn btn-primary btn-sx"
                  variant="secondary"
                  size="sm"
                  onClick={() => setUserModal(true)}
                >
                  Unlock Checklist
                </Button>
                <UserForm show={userModal} close={() => setUserModal(false)} />
              </div>
            </Col>
          </Row>
        ) : (
          <></>
        )
      ) : (
        <></>
      )}
    </Container>
  );
};

export default CheckListItem;
