import React from "react";
import { Card, Col, Row, Typography } from "antd";
import "../App.css";
const { Title, Text } = Typography;

const App = () => (
  <>
    <Title level={2}>About Us</Title>
    <Text>secretingredients is a platform where user can find the recipe and sharing their recipe </Text>
    <div className="site-card-wrapper " style={{marginTop:"20PX"}}>
      <Row gutter={16}>
        <Col span={8}>
          <Card title="Find" bordered={false}>
            User can search the recipe that they want 
          </Card>
        </Col>
        <Col span={8}>
          <Card title="Make Recipe" bordered={false}>
            User can share and post their recipe 
          </Card>
        </Col>
        <Col span={8}>
          <Card title="Like and Save" bordered={false}>
            User can give likes and save recipe
          </Card>
        </Col>
      </Row>
    </div>
  </>
);

export default App;
