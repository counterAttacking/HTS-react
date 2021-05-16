type PhotoType = {
    address: string;
    description: string;
};

const Photo = (photo: PhotoType) => {
    const { address, description } = photo;
    return (
        <section>
            <img src={address} />
            <article>{description}</article>
        </section>
    );
};

export default Photo;