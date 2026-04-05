import Button from '../ui/Button';

const Review = ({ 
    review, 
    onHelpful
}) => {
    const stars = Array.from({ length: 5 }, (_, i) => i < review.rating);

    return (
        <article className="review">
            <div className="review__header">
                <img
                    className="review__avatar"
                    src={review.avatar}
                    alt=""
                    width={44}
                    height={44}
                />
                <div className="review__meta">
                    <p className="review__author">{review.authorName}</p>
                    <time className="review__date" dateTime={review.date}>
                        {review.date}
                    </time>
                </div>
                <div className="review__rating" aria-label={`Оценка ${review.rating} из 5`}>
                    {stars.map((filled, i) => (
                        <span
                            key={i}
                            className={`review__star ${filled ? 'review__star--on' : ''}`}
                        >
                            ★
                        </span>
                    ))}
                </div>
            </div>
            <p className="review__text">{review.text}</p>
            {onHelpful && (
                <div className="review__actions">
                    <Button variant="secondary" onClick={() => onHelpful(review)}>
                        Полезно
                    </Button>
                </div>
            )}
        </article>
    );
};

export default Review;
