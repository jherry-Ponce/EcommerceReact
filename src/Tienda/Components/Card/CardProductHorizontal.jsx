import React from "react";
import Card from "react-bootstrap/Card";
import { Button, Row, Col } from "react-bootstrap";

const CardProductHorizontal=(props)=>  {
    return (
      <Card className="flex-row cardProd">
        <Card.Img
          className="img-list p-2 "
          variant="top"
          src={props.img}
          alt={props.img}
        />
        <Card.Body>
          <Card.Text>
            <Row>
              <Col lg={9} style={{ fontSize: "20px" }} className="fw-bold mt-3">
                <Row>
                {props.name.substring(0,30)}...
                </Row>
                <Row>
                  <Col lg={10} md={8} sm={7} className="my-2">
                    <div className="price-del">
                      <span className="fw-light"> S/.{props.price}.00</span> - 9%
                    </div>
                    <div className="text-danger fw-bold">
                      S/ {props.desc}.00 <span></span>
                    </div>
                  </Col>
                </Row>
              </Col>
              <Col lg={3} className="text-end">
                <div className="text-warning">
                  <i className="fa fa-star me-1" aria-hidden="true"></i>
                  <i className="fa fa-star me-1" aria-hidden="true"></i>
                  <i className="fa fa-star me-1" aria-hidden="true"></i>
                  <i className="fa fa-star-half-o me-1" aria-hidden="true"></i>
                  <i className="fa fa-star-o me-1" aria-hidden="true"></i>
                </div>
              </Col>
            </Row>
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }
export default CardProductHorizontal;
