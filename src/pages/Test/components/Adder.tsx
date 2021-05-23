import { ChangeEvent, useState } from 'react';

const Adder = () => {
    const [num1, setNum1] = useState<number>(0);
    const [num2, setNum2] = useState<number>(0);

    const updateNum1 = (event: ChangeEvent<HTMLInputElement>) => {
        const first = Number.parseInt(event.currentTarget.value, 10);
        setNum1(first);
    };

    const updateNum2 = (event: ChangeEvent<HTMLInputElement>) => {
        const second = Number.parseInt(event.currentTarget.value, 10);
        setNum2(second);
    };

    const totNum = num1 + num2;

    return (
        <section>
            <section>
                <input type="text" onChange={updateNum1} />
                +
                <input type="text" onChange={updateNum2} />
                =
                <label>{totNum}</label>
            </section>
        </section>
    );
};

export default Adder;