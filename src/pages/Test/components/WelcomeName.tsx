import { ChangeEvent, useState } from 'react';

const WelcomeName = () => {
    const [name, setName] = useState<string>("");

    const nameChanged = (event: ChangeEvent<HTMLInputElement>) => {
        setName(`반갑습니다 ${event.currentTarget.value}님`);
    };

    return (
        <section>
            <label>{name}</label>
            <br />
            <input type="text" onChange={nameChanged} />
        </section>
    );
};

export default WelcomeName;