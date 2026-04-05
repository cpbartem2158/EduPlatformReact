/**
 * Краткая карточка преподавателя — переиспользуется в CourseCard и др.
 */
const InstructorInfo = ({
    instructor,
    compact = false, 
    className = ''
 }) => {
    if (!instructor) return null;

    return (
        <div
            className={`instructor-info ${compact ? 'instructor-info--compact' : ''} ${className}`.trim()}
        >
            <div className="instructor-info__avatar-wrap">
                <img
                    src={instructor.avatar}
                    alt=""
                    className="instructor-info__avatar"
                    width={compact ? 40 : 48}
                    height={compact ? 40 : 48}
                />
            </div>
            <div className="instructor-info__text">
                <p className="instructor-info__name">{instructor.name}</p>
                <p className="instructor-info__role">{instructor.role}</p>
                {instructor.company && !compact && (
                    <p className="instructor-info__company">{instructor.company}</p>
                )}
            </div>
        </div>
    );
};

export default InstructorInfo;
