import { Form, Select } from 'antd';

type SelectMovementProps = {
    movementCount: number;
    movements: any;
};

const SelectMovement = ({ movementCount, movements }: SelectMovementProps) => {
    const renderMovementOptions = () => {
        return movements.map((item: any) => {
            return { value: item.id, label: item.snippet.title }
        });
    };

    return (
        <>
            <Form.Item>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    {Array.from(Array(movementCount).keys()).map((item: number) => (
                        <>
                            {item + 1}.
                            <Select style={{ width: 400 }} options={renderMovementOptions()} />
                        </>
                    ))}
                </div>
            </Form.Item>
        </>
    );
};

export default SelectMovement;