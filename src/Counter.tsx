import { useState, MouseEvent } from 'react';

type CounterType = {
    defaultCnt: number;
};

const Counter = (props: CounterType) => {
    const { defaultCnt } = props;
    const [cnt, setCnt] = useState<number>(defaultCnt);

    const increaseCnt = (event: MouseEvent<HTMLButtonElement>) => {
        setCnt(cnt + 1);
    };
    const decreaseCnt = (event: MouseEvent<HTMLButtonElement>) => {
        setCnt(cnt - 1);
    };

    return (
        <section>
            <section>{cnt}</section>
            <section>
                <button onClick={increaseCnt}>+</button>
                <button onClick={decreaseCnt}>-</button>
            </section>
        </section>
    );
};

export default Counter;