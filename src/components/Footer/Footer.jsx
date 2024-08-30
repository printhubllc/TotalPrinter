import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Printer } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-5">
      <Container>
        <Row className="gy-4">
          <Col lg={3} md={6}>
            <div className="d-flex align-items-center mb-3">
              <Printer size={32} className="me-2" />
              <h2 className="h4 mb-0">Digi Print</h2>
            </div>
            <p className="mb-3 text-muted">
              Your one-stop shop for all printer brands. Quality printing
              solutions for home and office.
            </p>
            <div>
              <a href="#" className="text-white me-3">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-white me-3">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-white me-3">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-white">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </Col>
          <Col lg={3} md={6}>
            <h5 className="text-uppercase mb-3 fw-bold">Company</h5>
            <ul className="list-unstyled mb-0">
              <li className="mb-2">
                <a href="#" className="text-white text-decoration-none">
                  About Us
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-white text-decoration-none">
                  Contact Us
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-white text-decoration-none">
                  Careers
                </a>
              </li>
            </ul>
          </Col>
          <Col lg={3} md={6}>
            <h5 className="text-uppercase mb-3 fw-bold">Privacy & Terms</h5>
            <ul className="list-unstyled mb-0">
              <li className="mb-2">
                <a href="#" className="text-white text-decoration-none">
                  Privacy Policy
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-white text-decoration-none">
                  Cookies Policy
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-white text-decoration-none">
                  GDPR Compliance
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-white text-decoration-none">
                  Terms & Conditions
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-white text-decoration-none">
                  Disclaimer
                </a>
              </li>
            </ul>
          </Col>
          <Col lg={3} md={6}>
            <h5 className="text-uppercase mb-3 fw-bold">Policies</h5>
            <ul className="list-unstyled mb-0">
              <li className="mb-2">
                <a href="#" className="text-white text-decoration-none">
                  Shipping Policy
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-white text-decoration-none">
                  Refund Policy
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-white text-decoration-none">
                  Warranty Information
                </a>
              </li>
            </ul>
          </Col>
        </Row>
        <hr className="my-4 bg-secondary" />
        <Row>
          <Col className="text-center">
            <p className="small mb-0 text-muted">
              &copy; 2024 Digi Print LLC. All Rights Reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
