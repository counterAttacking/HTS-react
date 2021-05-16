const Adult = ({ age }: { age: number }) => {
    return (
        <section>
            { age < 20 ? <label>미성년자</label> : <label>성인</label>}
        </section>
    );
};

export default Adult;