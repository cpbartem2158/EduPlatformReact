import CourseCard from './CourseCard';
import { getLessonsForCourse } from '../../data/mockData';

/**
 * Композитный блок: панель «фильтра» (заглушки) + сетка CourseCard.
 * Активная категория задаётся родителем статически (без useState).
 */
const CourseCatalog = ({
    title = 'Каталог курсов',
    courses,
    activeCategoryId = 'all',
    categories,
    onFilterChange,
    onContinue,
    onOpenDetails,
    onSaveForLater,
}) => {
    return (
        <section className="course-catalog app_section">
            <div className="course-catalog__head">
                <h2>{title}</h2>
                {categories && categories.length > 0 && (
                    <div className="course-catalog__filters" role="toolbar" aria-label="Фильтр по направлению">
                        {categories.map((cat) => {
                            const isActive = cat.id === activeCategoryId;
                            return (
                                <button
                                    key={cat.id}
                                    type="button"
                                    className={`course-catalog__chip ${isActive ? 'course-catalog__chip--active' : ''}`}
                                    onClick={() => onFilterChange?.(cat.id)}
                                    aria-pressed={isActive}
                                >
                                    {cat.label}
                                </button>
                            );
                        })}
                    </div>
                )}
            </div>

            <div className="course-catalog__grid">
                {courses.map((course) => (
                    <CourseCard
                        key={course.id}
                        course={course}
                        lessonsTotal={getLessonsForCourse(course.id).length}
                        onContinue={onContinue}
                        onOpenDetails={onOpenDetails}
                        onSaveForLater={onSaveForLater}
                    />
                ))}
            </div>
        </section>
    );
};

export default CourseCatalog;
