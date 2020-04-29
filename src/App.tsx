import React, { useEffect, useState } from 'react';

import { Layout, Menu, Breadcrumb, Table } from 'antd';

import './App.css';

import Spinner from './components/spinner/spinner.component';

type Offer = {
  key: number;
  header: string;
  description: string;
  price: number;
};

const { Header, Content, Footer } = Layout;

const App = () => {
  const [offers, setOffers] = useState<Offer[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('http://localhost:5000/offers');
      const body: any[] = await res.json();

      const offers: Offer[] = body.map((item) => ({
        key: item.id,
        header: item.header,
        description: item.description,
        price: item.price,
      }));

      setOffers(offers);
    };

    fetchData().then(() => setIsLoading(false));
  }, []);

  const columns = [
    {
      title: 'Game',
      dataIndex: 'header',
      key: 'header',
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
    },
  ];

  return (
    <Layout className="layout">
      <Header>
        <div className="container">
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">nav 1</Menu.Item>
            <Menu.Item key="2">nav 2</Menu.Item>
            <Menu.Item key="3">nav 3</Menu.Item>
          </Menu>
        </div>
      </Header>

      <Content style={{ padding: '0 50px' }}>
        <div className="container">
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <div className="site-layout-content">
            {isLoading ? (
              <Spinner />
            ) : (
              <Table dataSource={offers} columns={columns} />
            )}
          </div>
        </div>
      </Content>

      <Footer className="footer">
        <div className="container">
          <span>© {new Date().getFullYear()} / Marketplace</span>
        </div>
      </Footer>
    </Layout>
  );
};

export default App;
