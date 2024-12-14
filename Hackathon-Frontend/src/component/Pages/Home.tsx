import { SafetyCertificateOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Card, Col, Layout, Row, Space, Typography } from "antd";
import { Link, useNavigate } from "react-router-dom";
import Navhome from "./Navhome";

const { Content } = Layout;
const { Paragraph, Text } = Typography;

const HomePage = () => {
  const navigate = useNavigate();
  const openLoginPage = () => {
    window.open(
      "/nid-login.html",
      "National Identification Login Page",
      "width=600,height=800"
    );

    // Listen for a message from the popup window
    window.addEventListener("message", (event) => {
      if (event.origin !== window.location.origin) {
        // Make sure the message comes from the same origin
        return;
      }
      if (event.data.value) {
        localStorage.setItem("NID", event.data.value);
        navigate("/selfinfo");
      }
    });
  };
  return (
    <>
      <Navhome>
        <Layout>
          <Content style={{ padding: "50px" }}>
            <div className="site-layout-content">
              <Row gutter={16}>
                <Col span={12}>
                  <Card title="Welcome to DOT.Connect" bordered={false}>
                    <Paragraph
                      style={{
                        fontSize: "18px",
                        lineHeight: "1.8",
                        color: "#333",
                        marginBottom: "20px",
                      }}
                    >
                      Your Centralized Medical Information Repository
                    </Paragraph>
                    <Space direction="vertical">
                      <Button type="primary" onClick={openLoginPage} style={{marginTop:"10px"}}>
                        Patient Login <UserOutlined /> 
                      </Button>
                      <Link to={"/login"}>
                        <Button type="primary" style={{marginTop:"10px", marginBottom:"12px"}}>
                          Agency Login <SafetyCertificateOutlined />
                        </Button>
                      </Link>
                    </Space>
                  </Card>
                </Col>
                <Col span={12}>
                  <Card title="Why Choose dotConnect?" bordered={false}>
                    <Paragraph style={{
                        fontSize: "16px",
                        lineHeight: "1.8",
                        color: "#333",
                        marginBottom: "20px",
                      }}>
                      <Text
                        style={{
                          fontSize: "18px",
                          lineHeight: "1.8",
                          color: "#333",
                          marginBottom: "20px",
                        }}
                        strong
                      >
                        Security:
                      </Text>{" "}
                      Your data is our priority.
                    </Paragraph>
                    <Paragraph style={{
                        fontSize: "16px",
                        lineHeight: "1.8",
                        color: "#333",
                        marginBottom: "20px",
                      }}>
                      <Text
                        style={{
                          fontSize: "18px",
                          lineHeight: "1.8",
                          color: "#333",
                          marginBottom: "20px",
                        }}
                        strong
                      >
                        Accessibility:
                      </Text>{" "}
                      Access your records anytime, anywhere.
                    </Paragraph>
                    <Paragraph style={{
                        fontSize: "16px",
                        lineHeight: "1.8",
                        color: "#333",
                        marginBottom: "20px",
                      }}>
                      <Text
                        style={{
                          fontSize: "18px",
                          lineHeight: "1.8",
                          color: "#333",
                          marginBottom: "20px",
                        }}
                        strong
                      >
                        Efficiency:
                      </Text>{" "}
                      Streamlined processes for faster access.
                    </Paragraph>
                  </Card>
                </Col>
              </Row>
            </div>
            <div>
              <div
                style={{
                  backgroundColor: "#f9f9f9",
                  padding: "40px",
                  margin: "50px auto",
                  width: "75%",
                  borderRadius: "12px",
                  boxShadow: "0 6px 12px rgba(0, 0, 0, 0.1)",
                  fontFamily: "'Roboto', sans-serif",
                }}
              >
                <h2
                  style={{
                    fontWeight: "700",
                    fontSize: "40px",
                    textAlign: "center",
                    color: "#000000",
                    marginBottom: "20px",
                  }}
                >
                  About Us
                </h2>
                <p
                  style={{
                    fontSize: "18px",
                    lineHeight: "1.8",
                    color: "#333",
                    marginBottom: "20px",
                  }}
                >
                  At <strong>Centralized Hospital Repository</strong>, we are
                  committed to improving healthcare services through technology.
                  Our platform is designed to provide government hospitals with
                  a unified, secure, and efficient way to store and access
                  patient records.
                </p>
                <p
                  style={{
                    fontSize: "18px",
                    lineHeight: "1.8",
                    color: "#333",
                    marginBottom: "20px",
                  }}
                >
                  By centralizing medical data, we ensure that healthcare
                  providers can deliver accurate, timely, and effective
                  treatment. Our solution also streamlines hospital management
                  processes, including <strong>doctor appointments</strong> and{" "}
                  <strong>time scheduling</strong>, improving the overall
                  patient experience.
                </p>
                <div style={{ marginTop: "30px" }}>
                  <h3
                    style={{
                      fontSize: "24px",
                      color: "#007bff",
                      marginBottom: "15px",
                    }}
                  >
                    Why Choose Us?
                  </h3>
                  <ul
                    style={{
                      listStyleType: "none",
                      padding: 0,
                    }}
                  >
                    <li
                      style={{
                        fontSize: "16px",
                        lineHeight: "1.8",
                        marginBottom: "10px",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      {/* 🏥 */}
                      <strong>Centralized Data:</strong>&nbsp; One repository
                      for all patient records across government hospitals.
                    </li>
                    <li
                      style={{
                        fontSize: "16px",
                        lineHeight: "1.8",
                        marginBottom: "10px",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      🔒&nbsp; <strong>Secure and Confidential:</strong>&nbsp;
                      Patient data is encrypted and accessible only to
                      authorized personnel.
                    </li>
                    <li
                      style={{
                        fontSize: "16px",
                        lineHeight: "1.8",
                        marginBottom: "10px",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      📅&nbsp; <strong>Streamlined Appointments:</strong>&nbsp;
                      Simplified scheduling for patients and doctors.
                    </li>
                    <li
                      style={{
                        fontSize: "16px",
                        lineHeight: "1.8",
                        marginBottom: "10px",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      🌐&nbsp; <strong>Inter-Hospital Connectivity:</strong>
                      &nbsp; Share patient records across hospitals using unique
                      identifiers like email or phone numbers.
                    </li>
                    <li
                      style={{
                        fontSize: "16px",
                        lineHeight: "1.8",
                        marginBottom: "10px",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      💡&nbsp; <strong>Efficiency and Accessibility:</strong>
                      &nbsp; Reduce wait times and ensure seamless healthcare
                      services.
                    </li>
                  </ul>
                </div>
                <p
                  style={{
                    fontSize: "18px",
                    lineHeight: "1.8",
                    color: "#333",
                    marginBottom: "20px",
                  }}
                >
                  Our mission is to empower healthcare providers with the tools
                  they need to focus on what matters most: saving lives and
                  improving patient outcomes. Together, we aim to create a
                  healthier, more connected future for everyone.
                </p>
              </div>
            </div>
          </Content>
        </Layout>
      </Navhome>
    </>
  );
};

export default HomePage;
