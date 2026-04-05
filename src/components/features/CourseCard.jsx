import Card from '../ui/Card';
import Button from '../ui/Button';
import ProgressBar from '../ui/ProgressBar';
import InstructorInfo from './InstructorInfo';

const CourseCard = ({
    course,
    lessonsTotal,
    onContinue,
    onOpenDetails,
    onSaveForLater,
}) => {
    const ratingLabel = `${course.rating.toFixed(1)} из 5`;

    return (
        <Card
            title={course.title}
            description={course.description}
            image={course.image}
            classname="course-card"
        >
            <div className="course-card__tags">
                <span className="course-card__category">{course.categoryLabel}</span>
                <span className="course-card__rating" title={ratingLabel}>
                    <span className="course-card__rating-star" aria-hidden="true">
                        ★
                    </span>
                    <span className="course-card__rating-value">{course.rating.toFixed(1)}</span>
                    <span className="course-card__rating-count">({course.reviewsCount})</span>
                </span>
            </div>

            <ProgressBar
                value={course.progressPercent}
                max={100}
                label="Ваш прогресс по курсу"
            />

            <p className="course-card__lessons-meta">
                Уроков в курсе: <strong>{lessonsTotal}</strong>
            </p>

            <InstructorInfo instructor={course.instructor} compact />

            <div className="course-card__actions">
                <Button variant="primary" onClick={() => onContinue?.(course)}>
                    Продолжить обучение
                </Button>
                <Button variant="secondary" onClick={() => onOpenDetails?.(course)}>
                    О программе
                </Button>
                <Button variant="secondary" onClick={() => onSaveForLater?.(course)}>
                    В избранное
                </Button>
            </div>
        </Card>
    );
};

export default CourseCard;
