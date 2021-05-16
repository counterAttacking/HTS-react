import { ChangeEvent, useState } from 'react';

const ConditionalText = () => {
    const [text, setText] = useState<string>("");

    const textChanged = (event: ChangeEvent<HTMLInputElement>) => {
        setText(event.currentTarget.value);
    };

    return (
        <section>
            <input type="text" onChange={textChanged} />
            {text.length > 5 && <label>{text}</label>}
        </section>
    );
};

export default ConditionalText;