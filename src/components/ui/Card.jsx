const Card = ({
    title,
    description,
    image,
    children,
    classname = '',
}) => {
    return (
        <article className={`card ${classname}`}>
            {image && (
                <div className="card__image">
                    <img src={image} alt={title} />
                </div>
            )}

            <div className="card__content">
                <h3 className="card__title">{title}</h3>

                {description && (
                    <p className="card__description">{description}</p>
                )}

                {children && (
                    <div className="card__children">
                        {children}
                    </div>
                )}
            </div>
        </article>
    );
};

export default Card;
