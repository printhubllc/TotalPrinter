import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Truck, CreditCard, ShieldCheck, Headphones } from "lucide-react";

const serviceData = [
  {
    icon: <Truck size={40} />,
    title: "Free Shipping",
    subtitle: "On orders over $500",
    bg: "#E3F2FD",
  },
  {
    icon: <CreditCard size={40} />,
    title: "Secure Payment",
    subtitle: "Multiple payment options",
    bg: "#E8F5E9",
  },
  {
    icon: <ShieldCheck size={40} />,
    title: "Warranty Guarantee",
    subtitle: "1-year warranty on all printers",
    bg: "#FFF3E0",
  },
  {
    icon: <Headphones size={40} />,
    title: "24/7 Support",
    subtitle: "Expert assistance anytime",
    bg: "#F3E5F5",
  },
];

const Wrapper = () => {
  return (
    <section className="py-5 bg-light">
      <Container>
        <Row className="g-4">
          {serviceData.map((service, index) => (
            <Col md={3} sm={6} key={index}>
              <div
                className="d-flex flex-column align-items-center text-center p-4 rounded-3 h-100"
                style={{ backgroundColor: service.bg }}
              >
                <div className="mb-3">{service.icon}</div>
                <h4 className="fs-5 mb-2">{service.title}</h4>
                <p className="mb-0 text-muted">{service.subtitle}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Wrapper;
