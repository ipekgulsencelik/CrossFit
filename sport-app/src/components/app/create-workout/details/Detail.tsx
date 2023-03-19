import { Form, InputNumber, Divider } from 'antd';

type DetailProps = {
    movementCount: number,
    setMovementCount: (e: number) => void;
};

const Detail = ({ movementCount, setMovementCount }: DetailProps) => {
    return (
        <>
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
                    <InputNumber value={movementCount} onChange={(e) => setMovementCount(e as number)} min={0} />
                </Form.Item>

                <Form.Item
                    label="Second for Each Time"
                    name="secondForEachTime"
                >
                    <InputNumber min={0} />
                </Form.Item>
            </div>

            <Divider type='vertical' style={{ height: 'auto' }} />
        </>
    );
};

export default Detail;