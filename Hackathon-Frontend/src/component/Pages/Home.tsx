import { SafetyCertificateOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Card, Col, Layout, Row, Space, Typography } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import Navhome from './Navhome';

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
           localStorage.setItem( "NID", event.data.value);
  navigate ("/self-information");
          }
        });
      };
  return (
    <>
      <Navhome>
    <Layout>

      <Content style={{ padding: '50px' }}>
        <div className="site-layout-content">
          <Row gutter={16}>
            <Col span={12}>
              <Card title="Welcome to dotConnect" bordered={false}>
                <Paragraph>
                  Your Centralized Medical Information Repository
                </Paragraph>
                <Space direction="vertical">
                  <Button type="primary" onClick={openLoginPage}>
                    Patient Login <UserOutlined />
                  </Button>
                  <Link to={"/agency-login"}>
                  <Button type="primary">
                  Agency Login <SafetyCertificateOutlined />
                  </Button>
                  </Link>
                </Space>
              </Card>
            </Col>
            <Col span={12}>
              <Card title="Why Choose dotConnect?" bordered={false}>
                <Paragraph>
                  <Text strong>Security:</Text> Your data is our priority.
                </Paragraph>
                <Paragraph>
                  <Text strong>Accessibility:</Text> Access your records anytime, anywhere.
                </Paragraph>
                <Paragraph>
                  <Text strong>Efficiency:</Text> Streamlined processes for faster access.
                </Paragraph>
              </Card>
            </Col>
          </Row>
        </div>
      </Content>
    </Layout>
      </Navhome>
    </>
  );
};

export default HomePage;