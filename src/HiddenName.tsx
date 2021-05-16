import { ChangeEvent, useState } from 'react';

const HiddenName = () => {
    const [name, setName] = useState<string>("");

    const hideName = (event: ChangeEvent<HTMLInputElement>) => {
        let str = event.currentTarget.value;
        if (str.length >= 3) {
            const firstChar = str.substring(0, 1);
            const lastChar = str.substring(str.length - 1, str.length);
            const middleStr = "*".repeat(str.length - 2);

            str = firstChar + middleStr + lastChar;
        }
        setName(str);
    };

    return (
        <section>
            <input type="text" onChange={hideName} />
            <label>{name}</label>
        </section>
    );
};

export default HiddenName;