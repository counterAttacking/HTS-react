type TextType = {
    context: string;
    type: string;
};

const Text = (textType: TextType) => {
    const { context, type } = textType;
    return (
        <>
            {type === "header" && <h1>{context}</h1>}
            {type === "bold" && <strong>{context}</strong>}
        </>
    );
};

export default Text;