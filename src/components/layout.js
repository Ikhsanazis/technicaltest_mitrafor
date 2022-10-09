import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import { Outlet } from "react-router";
const { Header, Content, Footer, Sider } = Layout;

const App = () => (
  <Layout>
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      onBreakpoint={(broken) => {
        console.log(broken);
      }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type);
      }}
    >
      <div className="logo" style={{height:"50px"}} />
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["4"]}
        // items={[
        //   UserOutlined,
        //   VideoCameraOutlined,
        //   UploadOutlined,
        //   UserOutlined,
        // ].map((icon, index) => ({
        //   key: String(index + 1),
        //   icon: React.createElement(icon),
        //   label: `nav ${index + 1}`,
        // }))}
      >
        <Menu.Item>
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/about">About</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/contact">Contact</Link>
        </Menu.Item>
      </Menu>
    </Sider>
    <Layout>
      <Header
        className="site-layout-sub-header-background"
        style={{ padding: 0 }}
      />
      <Content style={{ margin: "24px 16px 0", padding: 24, minHeight: 860 }}>
        <Outlet />
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Ant Design ©2018 Created by Ant UED
      </Footer>
    </Layout>
  </Layout>
);

export default App;
