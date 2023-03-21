import { useState } from 'react';
import { Typography, Button, Form, Tabs, Divider } from 'antd';
import type { TabsProps } from 'antd';

import Detail from './details/Detail';
import SelectMovement from './select-movement/SelectMovement';

const { Title } = Typography;

const CreateWorkout = ({ movements }: any) => {
    const [movementCount, setMovementCount] = useState<number>(0);
    const [form] = Form.useForm();

    const onFinish = (values: any) => {
        console.log('Success:', values);
    };

    const onChange = (key: string) => {
        setMovementCount(0);
        form.resetFields();
    };

    const items: TabsProps['items'] = [
        {
            key: '1',
            label: `EMOM`,
            children: (
                <>
                    <div style={{ display: 'flex', gap: 66 }}>
                        <Detail workoutDetail={[
                            { label: 'Total Time - Minute', name: 'time' },
                            { label: 'Movement Count', name: 'movementCount', onChange: setMovementCount, value: movementCount },
                            { label: 'Second for Each Time', name: 'secondForEachTime' }
                        ]} />
                        <Divider type='vertical' style={{ height: 'auto' }} />

                        <SelectMovement movementCount={movementCount} movements={movements} />
                    </div>

                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                            Create Workout
                        </Button>
                    </Form.Item>
                </>
            ),
        },
        {
            key: '2',
            label: `EMRAP`,
            children: (
                <>
                    <div style={{ display: 'flex', gap: 66 }}>
                        <Detail workoutDetail={[
                            { label: 'Total Time - Minute', name: 'time' },
                            { label: 'Movement Count', name: 'movementCount', onChange: setMovementCount, value: movementCount }
                        ]} />
                        <Divider type='vertical' style={{ height: 'auto' }} />

                        <SelectMovement movementCount={movementCount} movements={movements} />
                    </div>

                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                            Create Workout
                        </Button>
                    </Form.Item>
                </>
            ),
        },
        {
            key: '3',
            label: `FOR TIME`,
            children: (
                <>
                    <div style={{ display: 'flex', gap: 66 }}>
                        <Detail workoutDetail={[
                            { label: 'Total Time - Minute', name: 'time' },
                            { label: 'Movement Count', name: 'movementCount', onChange: setMovementCount, value: movementCount }
                        ]} />
                        <Divider type='vertical' style={{ height: 'auto' }} />

                        <SelectMovement movementCount={movementCount} movements={movements} />
                    </div>

                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                            Create Workout
                        </Button>
                    </Form.Item></>
            ),
        },
    ];

    return (
        <>
            <Title level={2}>Create Workout</Title>
            < Form form={form} name="createWorkout"
                labelCol={{ span: 16 }}
                onFinish={onFinish} autoComplete="off">
                <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
            </Form>
        </>
    )
}

export default CreateWorkout;