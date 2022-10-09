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
      <div className="logo" style={{ height: "50px" }} />
      <Menu theme="dark" mode="inline" defaultSelectedKeys="home">
        <Menu.Item>
          <Link to="/" key={"home"}>
            Home
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/about" key={"about"}>
            About
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/contact" key={"contact"}>
            Contact
          </Link>
        </Menu.Item>
      </Menu>
    </Sider>
    <Layout>
      <Header
        className="site-layout-sub-header-background"
        style={{ padding: 10}}
      />
      <Content
        style={{ margin: "24px 16px 0", padding: 24, minHeight: "100vh" }}
      >
        <Outlet />
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Ant Design ©2018 Created by Ant UED
      </Footer>
    </Layout>
  </Layout>
);

export default App;
