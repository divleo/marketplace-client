import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';

import './App.css';
import logo from './logo.svg';

const { Header, Content, Footer } = Layout;
const year = new Date().getFullYear();

const App = () => (
  <div className="container">
    <Layout className="layout">
      <Header>
        <div className="logo">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
          <Menu.Item key="1">nav 1</Menu.Item>
          <Menu.Item key="2">nav 2</Menu.Item>
          <Menu.Item key="3">nav 3</Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <div className="site-layout-content">Content</div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        Ant Design ©{year} Created by Ant UED
      </Footer>
    </Layout>
  </div>
);

export default App;
