import { useState } from 'react';
import { Typography, Button, Form, Tabs } from 'antd';
import type { TabsProps } from 'antd';

import Detail from './details/Detail';
import SelectMovement from './select-movement/SelectMovement';

const { Title } = Typography;

const CreateWorkout = () => {
    const [movementCount, setMovementCount] = useState<number>(0);

    const onFinish = (values: any) => {
        console.log('Success:', values);
    };

    const onChange = (key: string) => {
        console.log(key);
    };

    const items: TabsProps['items'] = [
        {
            key: '1',
            label: `EMOM`,
            children: (
                < Form
                    name="basic"
                    labelCol={{ span: 16 }}
                    style={{
                        maxWidth: 600,
                    }}
                    onFinish={onFinish}
                    autoComplete="off"
                >
                    <div style={{ display: 'flex', gap: 66 }}>
                        <Detail movementCount={movementCount} setMovementCount={setMovementCount} />

                        <SelectMovement movementCount={movementCount} />
                    </div>

                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                            Create Workout
                        </Button>
                    </Form.Item>
                </Form >
            ),
        },
        {
            key: '2',
            label: `EMRAP`,
            children: (
                < Form
                    name="basic"
                    labelCol={{ span: 16 }}
                    style={{
                        maxWidth: 600,
                    }}
                    onFinish={onFinish}
                    autoComplete="off"
                >
                    <div style={{ display: 'flex', gap: 66 }}>
                        <Detail movementCount={movementCount} setMovementCount={setMovementCount} />

                        <SelectMovement movementCount={movementCount} />
                    </div>

                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                            Create Workout
                        </Button>
                    </Form.Item>
                </Form >
            ),
        },
        {
            key: '3',
            label: `FOR TIME`,
            children: (
                < Form
                    name="basic"
                    labelCol={{ span: 16 }}
                    style={{
                        maxWidth: 600,
                    }}
                    onFinish={onFinish}
                    autoComplete="off"
                >
                    <div style={{ display: 'flex', gap: 66 }}>
                        <Detail movementCount={movementCount} setMovementCount={setMovementCount} />

                        <SelectMovement movementCount={movementCount} />
                    </div>

                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                            Create Workout
                        </Button>
                    </Form.Item>
                </Form >
            ),
        },
    ];


    return (
        <>
            <Title level={2}>Create Workout</Title>

            <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
        </>
    )
}

export default CreateWorkout;