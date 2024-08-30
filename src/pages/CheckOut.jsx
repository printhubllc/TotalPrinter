import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useSelector } from "react-redux";

const Checkout = () => {
  const { cartList } = useSelector((state) => state.cart);
  const [validated, setValidated] = useState(false);

  const totalPrice = cartList.reduce(
    (price, item) => price + item.qty * item.price,
    0
  );

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <Container className="my-5">
      <h2 className="mb-4">Checkout</h2>
      <Row>
        <Col md={8}>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <h4 className="mb-3">Shipping Information</h4>
            <Row className="mb-3">
              <Form.Group as={Col} md="6" controlId="validationCustom01">
                <Form.Label>First name</Form.Label>
                <Form.Control required type="text" placeholder="First name" />
                <Form.Control.Feedback type="invalid">
                  Please provide a first name.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="6" controlId="validationCustom02">
                <Form.Label>Last name</Form.Label>
                <Form.Control required type="text" placeholder="Last name" />
                <Form.Control.Feedback type="invalid">
                  Please provide a last name.
                </Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Form.Group className="mb-3" controlId="validationCustom03">
              <Form.Label>Address</Form.Label>
              <Form.Control type="text" placeholder="Address" required />
              <Form.Control.Feedback type="invalid">
                Please provide a valid address.
              </Form.Control.Feedback>
            </Form.Group>
            <Row className="mb-3">
              <Form.Group as={Col} md="6" controlId="validationCustom04">
                <Form.Label>City</Form.Label>
                <Form.Control type="text" placeholder="City" required />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid city.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="3" controlId="validationCustom05">
                <Form.Label>State</Form.Label>
                <Form.Control type="text" placeholder="State" required />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid state.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="3" controlId="validationCustom06">
                <Form.Label>Zip</Form.Label>
                <Form.Control type="text" placeholder="Zip" required />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid zip.
                </Form.Control.Feedback>
              </Form.Group>
            </Row>

            <h4 className="mb-3 mt-4">Payment Information</h4>
            <Form.Group className="mb-3" controlId="validationCustom07">
              <Form.Label>Card Number</Form.Label>
              <Form.Control type="text" placeholder="Card Number" required />
              <Form.Control.Feedback type="invalid">
                Please provide a valid card number.
              </Form.Control.Feedback>
            </Form.Group>
            <Row className="mb-3">
              <Form.Group as={Col} md="6" controlId="validationCustom08">
                <Form.Label>Expiration Date</Form.Label>
                <Form.Control type="text" placeholder="MM/YY" required />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid expiration date.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="6" controlId="validationCustom09">
                <Form.Label>CVV</Form.Label>
                <Form.Control type="text" placeholder="CVV" required />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid CVV.
                </Form.Control.Feedback>
              </Form.Group>
            </Row>

            <Button type="submit" className="mt-3">
              Place Order
            </Button>
          </Form>
        </Col>
        <Col md={4}>
          <div className="border p-3 mb-3">
            <h4 className="mb-3">Order Summary</h4>
            {cartList.map((item) => (
              <div
                key={item.id}
                className="d-flex justify-content-between mb-2"
              >
                <span>
                  {item.productName} x {item.qty}
                </span>
                <span>${(item.price * item.qty).toFixed(2)}</span>
              </div>
            ))}
            <hr />
            <div className="d-flex justify-content-between">
              <strong>Total:</strong>
              <strong>${totalPrice.toFixed(2)}</strong>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Checkout;
