import React from 'react'
import { Typography, Button, Form, Tabs, Divider, DatePicker, Input, Select, Space, InputNumber } from 'antd';
import CreateWorkout from '../../components/app/create-workout/CreateWorkout'
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';

const { Title } = Typography;
const { TextArea } = Input;

export default function WorkoutCreator() {
    const [form] = Form.useForm();

    const onFinish = (values: any) => {
        console.log('Success:', values);
    };

    return (
        <div>
            <Title level={2}>Create Workout</Title>
            < Form form={form} name="createWorkout"
                labelCol={{ span: 16 }}
                onFinish={onFinish} autoComplete="off" layout='vertical'>
                <Form.Item name="date-picker">
                    <DatePicker style={{ width: 250 }} />
                </Form.Item>
                <Form.Item name="date-picker" label="Daily Note">
                    <TextArea style={{ width: 350 }} />
                </Form.Item>
                <Form.Item label="Difficulty">
                    <Select style={{ width: 250 }} >
                        <Select.Option value="advanced">Advanced</Select.Option>
                        <Select.Option value="intermediate">Intermediate</Select.Option>
                        <Select.Option value="beginner">Beginner</Select.Option>
                    </Select>
                </Form.Item>
                <Divider />
                <Form.List name="workouts">
                    {(fields, { add, remove }) => (
                        <>
                            {fields.map(({ key, name, ...restField }) => (
                                <>
                                    <Form.Item
                                        {...restField}
                                        name={[name, 'workoutName']}
                                        label="Workout Name"
                                        rules={[{ required: true, message: 'Missing first name' }]}
                                    >
                                        <Input style={{ width: 250 }} />
                                    </Form.Item>
                                    <Form.Item
                                        {...restField}
                                        name={[name, 'workoutParts']}
                                        label="Workout Parts"
                                        rules={[{ required: true, message: 'Missing first name' }]}
                                    >
                                        <InputNumber style={{ width: 250 }} />
                                    </Form.Item>
                                    <Space key={key} style={{ marginBottom: 8 }} >
                                        <Form.Item
                                            {...restField}
                                            name={[name, 'first']}
                                            rules={[{ required: true, message: 'Missing first name' }]}
                                        >
                                            <CreateWorkout />
                                        </Form.Item>
                                        <MinusCircleOutlined onClick={() => remove(name)} />
                                    </Space>
                                </>
                            ))}
                            <Form.Item>
                                <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                                    Add Workout
                                </Button>
                            </Form.Item>
                        </>
                    )}
                </Form.List>
            </Form>

        </div>
    );
};
