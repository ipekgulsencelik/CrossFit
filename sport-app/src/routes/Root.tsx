import React from 'react';
import { LaptopOutlined, UserOutlined } from '@ant-design/icons';
import { MenuProps, Layout, Menu } from 'antd';
import { Outlet, useNavigate } from 'react-router-dom';

const { Header, Content, Sider } = Layout;

const menu = [{
  icon: LaptopOutlined,
  name: "Create Workout",
  key: 'createWorkout'
}, {
  icon: UserOutlined,
  name: "User Manager",
  key: 'userManager'
}];

const items2: MenuProps['items'] = menu.map(
  (item) => {
    return {
      key: item.key,
      icon: React.createElement(item.icon),
      label: item.name,
    };
  },
);

function Root() {
  const navigate = useNavigate();

  const onClick: MenuProps['onClick'] = ({ key }) => {
    navigate(`/${key}`)
  };

  return (
    <Layout style={{ height: '100vh' }}>
      <Header className="header">
        <div className="logo" />
      </Header>
      <Layout>
        <Sider width={200}>
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%', borderRight: 0 }}
            items={items2}
            onClick={onClick}
          />
        </Sider>
        <Layout style={{ padding: '24px' }}>
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
              background: 'white'
            }}
          >
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  )
}

export default Root
