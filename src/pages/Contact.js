import React from "react";
import { Card, Col, Row, Typography } from "antd";
import "../App.css";
import { InstagramOutlined } from "@ant-design/icons";

const { Title, Text } = Typography;

const App = () => (
  <>
    <Title level={2}>Contact Us</Title>
    <div className="site-card-wrapper">
      <Row gutter={16}>
        <Col span={8}>
          <Card title="Instagram" bordered={false}>
            <InstagramOutlined /> <Text>@Secretingredients</Text>
          </Card>
        </Col>
        <Col span={8}>
          <Card title="Email" bordered={false}>
            <Text>Secretingredients@gmail.com</Text>
          </Card>
        </Col>
        <Col span={8}>
          <Card title="Linkedin" bordered={false}>
            <Text>linkein.com/Secretingredients</Text>
          </Card>
        </Col>
      </Row>
    </div>
  </>
);

export default App;
