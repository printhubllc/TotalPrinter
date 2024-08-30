import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Printer, Download, Wifi, ChevronRight } from "lucide-react";

const brands = [
  {
    name: "HP",
    logo: "https://1000logos.net/wp-content/uploads/2017/02/HP-Logo-2012.png",
    services: [
      { name: "Fix Printer Issues", icon: Printer },
      { name: "Download Drivers", icon: Download },
      { name: "Wireless Setup", icon: Wifi },
    ],
  },
  {
    name: "Canon",
    logo: "https://1000logos.net/wp-content/uploads/2016/10/Canon-Logo.png",
    services: [
      { name: "Fix Printer Issues", icon: Printer },
      { name: "Download Drivers", icon: Download },
      { name: "Wireless Setup", icon: Wifi },
    ],
  },
  {
    name: "Epson",
    logo: "https://1000logos.net/wp-content/uploads/2018/02/Epson-Logo.png",
    services: [
      { name: "Fix Printer Issues", icon: Printer },
      { name: "Download Drivers", icon: Download },
      { name: "Wireless Setup", icon: Wifi },
    ],
  },
  {
    name: "Brother",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Brother_logo.svg/1024px-Brother_logo.svg.png",
    services: [
      { name: "Fix Printer Issues", icon: Printer },
      { name: "Download Drivers", icon: Download },
      { name: "Wireless Setup", icon: Wifi },
    ],
  },
];

const SupportHome = () => {
  const generateAntiBot = (brandName) => {
    const timestamp = Date.now();
    const randomString = Math.random().toString(36).substring(7);
    return `${brandName}-${timestamp}-${randomString}`;
  };

  const handleCardClick = (brand) => {
    const antiBotParam = generateAntiBot(brand.name);
    window.location.href = `/setup-guide/${brand.name.toLowerCase()}`;
  };

  return (
    <section className="support-section py-5">
      <Container>
        <Row className="text-center mb-5">
          <Col>
            <h1 className="display-4 fw-bold text-primary">Printer Support</h1>
            <p className="lead text-secondary">
              Choose your printer brand from the following options to fix issues
              or download drivers:
              <br />
              <strong>{brands.map((brand) => brand.name).join(", ")}</strong>
            </p>
          </Col>
        </Row>
        <Row>
          {brands.map((brand, index) => (
            <Col lg={3} md={6} sm={12} key={index} className="mb-4">
              <Card
                className="h-100 text-center shadow hover-card text-decoration-none"
                onClick={() => handleCardClick(brand)}
              >
                <Card.Img
                  variant="top"
                  src={brand.logo}
                  alt={`${brand.name} logo`}
                  className="brand-logo"
                />
                <Card.Body className="d-flex flex-column">
                  <Card.Title className="fw-bold text-primary mb-3">
                    {brand.name}
                  </Card.Title>
                  <ul className="list-unstyled mb-4 flex-grow-1">
                    {brand.services.map((service, i) => (
                      <li
                        key={i}
                        className="text-secondary mb-2 d-flex align-items-center justify-content-center"
                      >
                        <service.icon size={18} className="mr-2" />
                        <span>{service.name}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    variant="primary"
                    className="mt-auto d-flex align-items-center justify-content-center w-100"
                  >
                    <span className="mr-2">Get Support</span>
                    <ChevronRight size={18} />
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap");

        body {
          font-family: "Roboto", sans-serif;
          background-color: #f0f7ff;
        }
        .support-section {
          background: linear-gradient(135deg, #f0f7ff 0%, #e6f2ff 100%);
          min-height: 100vh;
        }
        .hover-card {
          transition: transform 0.3s, box-shadow 0.3s;
          border: none;
          border-radius: 15px;
          overflow: hidden;
          background-color: #ffffff;
          cursor: pointer;
        }
        .hover-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
        }
        .brand-logo {
          padding: 20px;
          max-height: 150px;
          object-fit: contain;
          background-color: #f8f9fa;
        }
        .text-primary {
          color: #2c3e50 !important;
        }
        .text-secondary {
          color: #34495e !important;
        }
        h1.display-4 {
          font-weight: 700;
          letter-spacing: -0.5px;
        }
        .lead {
          font-weight: 300;
          font-size: 1.25rem;
        }
        .card-title {
          font-size: 1.5rem;
          font-weight: 700;
        }
        .btn-primary {
          background-color: #3498db;
          border-color: #3498db;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        .btn-primary:hover {
          background-color: #2980b9;
          border-color: #2980b9;
        }
        @media (max-width: 576px) {
          .brand-logo {
            max-height: 100px;
          }
          .hover-card {
            margin-bottom: 1rem;
          }
        }
      `}</style>
    </section>
  );
};

export default SupportHome;
