import React from 'react';
import { Layout, ConfigProvider } from 'antd';
import Catalogue from '../../components/catalogue';
const { Content, Sider, Header } = Layout;
const LayoutPage: React.FC = props => {
  console.log(props.children);

  return (
    <Layout>
      <Header>sada</Header>
      <Layout>
        <Sider>
          <Catalogue />
        </Sider>
        <ConfigProvider>
          <Content style={{ padding: '24px' }}>
            <div
              style={{ background: '#fff', height: '100%', padding: '10px' }}
            >
              {props.children}
            </div>
          </Content>
        </ConfigProvider>
      </Layout>
    </Layout>
  );
};

export default LayoutPage;
