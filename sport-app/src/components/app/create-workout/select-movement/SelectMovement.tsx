import { Form, Select } from 'antd';

type SelectMovementProps = { movementCount: number; }

const SelectMovement = ({ movementCount }: SelectMovementProps) => {
    return (
        <>
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
        </>
    );
};

export default SelectMovement;