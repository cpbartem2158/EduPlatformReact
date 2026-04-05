import './App.css'
import Header from './components/layout/Header'
import CourseCatalog from './components/features/CourseCatalog'
import LessonList from './components/features/LessonList'
import ReviewsSection from './components/features/ReviewsSection'
import QuizComponent from './components/features/QuizComponent'
import {
    COURSE_CATEGORIES,
    courses,
    featuredCourseId,
    filterCoursesByCategory,
    getLessonsForCourse,
    reviews,
    questions,
} from './data/mockData'

function App() {
    const handleSearch = (searchTerm) => {
        console.log('[EduPlatform] Поиск курсов:', searchTerm)
    }

    const handleFilterChange = (categoryId) => {
        console.log('[EduPlatform] Выбран фильтр категории:', categoryId)
    }

    const handleContinueCourse = (course) => {
        console.log('[EduPlatform] Продолжить курс:', course.id, course.title)
    }

    const handleOpenCourseDetails = (course) => {
        console.log('[EduPlatform] Открыть описание курса:', course.id)
    }

    const handleSaveCourse = (course) => {
        console.log('[EduPlatform] В избранное:', course.id)
    }

    const handleSelectLesson = (lesson) => {
        console.log('[EduPlatform] Выбран урок:', lesson.id, lesson.title)
    }

    const handleReviewHelpful = (review) => {
        console.log('[EduPlatform] Отзыв отмечен как полезный:', review.id)
    }

    const handleQuizFinished = (result) => {
        console.log('[EduPlatform] Мини-тест завершен:', result)
    }

    const webCourses = filterCoursesByCategory(courses, 'web')
    const featuredCourse = courses.find((c) => c.id === featuredCourseId)
    const featuredLessons = getLessonsForCourse(featuredCourseId)

    return (
        <div className="app">
            <Header
                title="EduPlatform"
                onSearch={handleSearch}
                searchPlaceholder="Поиск курсов, направлений..."
            />

            <main className="app_main">
                <div className="app_container">
                    <CourseCatalog
                        title="Каталог курсов"
                        courses={courses}
                        activeCategoryId="all"
                        categories={COURSE_CATEGORIES}
                        onFilterChange={handleFilterChange}
                        onContinue={handleContinueCourse}
                        onOpenDetails={handleOpenCourseDetails}
                        onSaveForLater={handleSaveCourse}
                    />

                    <CourseCatalog
                        title="Веб-разработка: подборка (статическая фильтрация)"
                        courses={webCourses}
                        activeCategoryId="web"
                        categories={COURSE_CATEGORIES}
                        onFilterChange={handleFilterChange}
                        onContinue={handleContinueCourse}
                        onOpenDetails={handleOpenCourseDetails}
                        onSaveForLater={handleSaveCourse}
                    />

                    {featuredCourse && (
                        <section className="app_section lesson-section">
                            <h2>Уроки выбранного курса</h2>
                            <p className="lesson-section__lead">
                                Ниже — список уроков для курса «{featuredCourse.title}». Прогресс
                                задан статически в мок-данных; позже сюда подключат состояние.
                            </p>
                            <LessonList
                                courseTitle={featuredCourse.title}
                                lessons={featuredLessons}
                                completedLessonIds={featuredCourse.completedLessonIds}
                                onSelectLesson={handleSelectLesson}
                            />
                        </section>
                    )}

                    <ReviewsSection reviews={reviews} onReviewHelpful={handleReviewHelpful} />
                    <QuizComponent questions={questions} onFinished={handleQuizFinished} />
                </div>
            </main>
        </div>
    )
}

export default App
