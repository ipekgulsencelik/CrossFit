import React, { useState } from 'react';
import { LaptopOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, MenuProps, Breadcrumb, Layout, Menu, theme, InputNumber, TimePicker, Select, Divider } from 'antd';

const { Header, Content, Sider } = Layout;

const menu = [{
  icon: LaptopOutlined,
  name: "Create Training"
}, {
  icon: UserOutlined,
  name: "User Panel"
}];

const items2: MenuProps['items'] = menu.map(
  (item, index) => {
    const key = String(index + 1);

    return {
      key: `sub${key}`,
      icon: React.createElement(item.icon),
      label: item.name,
    };
  },
);

function App() {
  const [movementCount, setMovementCount] = useState<number>(0);

  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
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
          />
        </Sider>
        <Layout style={{ padding: '24px' }}>
          {/* <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb> */}

          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
              background: 'white'
            }}
          >
            <Form
              name="basic"
              labelCol={{ span: 16 }}
              style={{
                maxWidth: 600,
              }}
              onFinish={onFinish}
              autoComplete="off"
            >
              <div style={{ display: 'flex', gap: 66 }}>
                <div>
                  <Form.Item
                    label="Total Time - Minute"
                    name="time"
                  >
                    <InputNumber min={0} />
                  </Form.Item>

                  <Form.Item
                    label="Movement Count"
                    name="movementCount"
                  >
                    <InputNumber onChange={(e) => setMovementCount(e as number)} min={0} />
                  </Form.Item>

                  <Form.Item
                    label="Second for Each Time"
                    name="secondForEachTime"
                  >
                    <InputNumber min={0} />
                  </Form.Item>
                </div>

                <Divider type='vertical' style={{ height: 'auto' }} />

                <Form.Item>
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    {Array.from(Array(movementCount).keys()).map((item: number) => (
                      <>
                        {item + 1}.
                        <Select style={{ width: 400 }} />
                      </>
                    ))}
                  </div>
                </Form.Item>
              </div>

              <Form.Item>
                <Button type="primary" htmlType="submit">
                  Create Workout
                </Button>
              </Form.Item>
            </Form>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  )
}

export default App
