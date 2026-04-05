import Review from './Review';

const ReviewsSection = ({ 
    title = 'Отзывы студентов', 
    reviews: items, 
    onReviewHelpful 
}) => {
    return (
        <section className="reviews-section app_section">
            <h2>{title}</h2>
            <div className="reviews-section__list">
                {items.map((r) => (
                    <Review key={r.id} review={r} onHelpful={onReviewHelpful} />
                ))}
            </div>
        </section>
    );
};

export default ReviewsSection;
