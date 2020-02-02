import React, { useState } from "react";
import { Modal, ProgressBar, Row, Col } from "react-bootstrap";

function Modals(props) {
  const [show, setShow] = useState(true);

  const handleClose = () => {
    setShow(false);
    props.handler();
  };
  const handleShow = () => setShow(true);

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{props.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col>
              <img src={props.url} height="200" />
            </Col>
            <Col>
              <p>Speed</p>
              <ProgressBar
                now={props.stats[0].base_stat}
                label={`${props.stats[0].base_stat}%`}
                animated
                now={props.stats[0].base_stat}
              />
              <p>Special Attack</p>
              <ProgressBar
                animated
                now={props.stats[1].base_stat}
                striped
                variant="danger"
                now={props.stats[1].base_stat}
                label={`${props.stats[1].base_stat}%`}
              />
              <p>Defence</p>
              <ProgressBar
                animated
                now={props.stats[2].base_stat}
                striped
                variant="info"
                now={props.stats[2].base_stat}
                label={`${props.stats[2].base_stat}%`}
              />
              <p>Attack</p>
              <ProgressBar
                animated
                now={props.stats[3].base_stat}
                striped
                variant="danger"
                now={props.stats[3].base_stat}
                label={`${props.stats[3].base_stat}%`}
              />
              <p>HP</p>
              <ProgressBar
                animated
                now={props.stats[4].base_stat}
                striped
                variant="success"
                now={props.stats[4].base_stat}
                label={`${props.stats[4].base_stat}%`}
              />
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Modals;
