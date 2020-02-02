import React from "react";
import { Card } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";

const CardComponent = props => {
  return (
    <Card
      onClick={() => props.sel(props)}
      style={{
        width: "13rem",
        float: "left",
        margin: 10,
        left: 40,
        cursor: "pointer"
      }}
    >
      <Card.Img variant="top" src={props.url} />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
      </Card.Body>
    </Card>
  );
};

export default CardComponent;
