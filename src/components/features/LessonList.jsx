/**
 * Список уроков курса — completedLessonIds задаётся статически из моков.
 */
const LessonList = ({
    courseTitle,
    lessons,
    completedLessonIds = [],
    onSelectLesson,
    className = '',
}) => {
    const completed = new Set(completedLessonIds);

    return (
        <div className={`lesson-list ${className}`.trim()}>
            {courseTitle && <h3 className="lesson-list__course-title">{courseTitle}</h3>}
            <ol className="lesson-list__items">
                {lessons.map((lesson) => {
                    const done = completed.has(lesson.id);
                    return (
                        <li key={lesson.id} className="lesson-list__item">
                            <button
                                type="button"
                                className={`lesson-list__row ${done ? 'lesson-list__row--done' : ''}`}
                                onClick={() => onSelectLesson?.(lesson)}
                            >
                                <span className="lesson-list__order">{lesson.order}</span>
                                <span className="lesson-list__title">{lesson.title}</span>
                                <span className="lesson-list__duration">{lesson.durationMin} мин</span>
                                <span className="lesson-list__status" aria-hidden="true">
                                    {done ? '✓' : '○'}
                                </span>
                            </button>
                        </li>
                    );
                })}
            </ol>
        </div>
    );
};

export default LessonList;
