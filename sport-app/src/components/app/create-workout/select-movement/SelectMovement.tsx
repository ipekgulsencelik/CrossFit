import { Form, Select } from 'antd';

type SelectMovementProps = {
    movementCount: number;
    movements: any;
};

const SelectMovement = ({ movementCount, movements }: SelectMovementProps) => {
    return (
        <>
            <Form.Item>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    {Array.from(Array(movementCount).keys()).map((item: number) => (
                        <>
                            {item + 1}.
                            <Select style={{ width: 400 }} >
                                {movements?.map((item: any) => (
                                    <Select.Option value={item.snippet.title}>{item.snippet.title}</Select.Option>
                                ))}
                            </Select>
                        </>
                    ))}
                </div>
            </Form.Item>
        </>
    );
};

export default SelectMovement;