import React from 'react'
import { Typography, Button, Form, Tabs, Divider, DatePicker, Input, Select } from 'antd';
import CreateWorkout from '../../components/app/create-workout/CreateWorkout'

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
            </Form>
            {/* <CreateWorkout /> */}
        </div>
    );
};
