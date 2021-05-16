import { useState } from 'react';
import Pad from './Pad';

const Calculator = () => {
    const [result, setResult] = useState<string>("");
    const [formula, setFormula] = useState<string>("");
    const updateFormula = (keyName: string) => {
        if (keyName === "=") {
            // eslint-disable-next-line no-eval
            setResult(eval(formula))
            setFormula("");
        } else {
            setFormula(formula.concat(keyName));
        }
    };

    return (
        <section>
            <section>
                <Pad keyName="7" callback={updateFormula} />
                <Pad keyName="8" callback={updateFormula} />
                <Pad keyName="9" callback={updateFormula} />
                <Pad keyName="+" callback={updateFormula} />
            </section>
            <section>
                <Pad keyName="4" callback={updateFormula} />
                <Pad keyName="5" callback={updateFormula} />
                <Pad keyName="6" callback={updateFormula} />
                <Pad keyName="-" callback={updateFormula} />
            </section>
            <section>
                <Pad keyName="1" callback={updateFormula} />
                <Pad keyName="2" callback={updateFormula} />
                <Pad keyName="3" callback={updateFormula} />
                <Pad keyName="*" callback={updateFormula} />
            </section>
            <section>
                <Pad keyName="0" callback={updateFormula} />
                <Pad keyName="." callback={updateFormula} />
                <Pad keyName="=" callback={updateFormula} />
                <Pad keyName="/" callback={updateFormula} />
            </section>
            <article>{formula}={result}</article>
        </section>
    );
};

export default Calculator;