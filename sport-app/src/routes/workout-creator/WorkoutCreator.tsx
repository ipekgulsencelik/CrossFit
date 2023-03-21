import React, { useEffect, useState } from 'react'
import { Typography, Button, Form, Divider, DatePicker, Input, Select, Space } from 'antd';
import CreateWorkout from '../../components/app/create-workout/CreateWorkout'
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import axios from 'axios';

const { Title } = Typography;
const { TextArea } = Input;

export default function WorkoutCreator() {
    const [form] = Form.useForm();
    const [movemets, setMovements] = useState(null);

    useEffect(() => {
        getMovements();
    }, []);

    const getMovements = async () => {
        const response = await axios.get('https://www.googleapis.com/youtube/v3/playlistItems', {
            params: {
                part: 'snippet',
                playlistId: 'PLdWvFCOAvyr3EWQhtfcEMd3DVM5sJdPL4',
                maxResults: 50,
                key: 'AIzaSyCBgvOTdaE0HfTpQxucGc4oJKisAEg5pk8',
            },
        });
        if (response) {
            setMovements(response.data.items);
        }
    };

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
                                        <Input />
                                    </Form.Item>
                                    <Space key={key} style={{ marginBottom: 8 }} >
                                        <Form.Item
                                            {...restField}
                                            name={[name, 'first']}
                                            rules={[{ required: true, message: 'Missing first name' }]}
                                        >
                                            <CreateWorkout movements={movemets} />
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
