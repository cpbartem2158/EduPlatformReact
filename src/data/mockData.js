export const COURSE_CATEGORIES = [
    { id: 'all', label: 'Все направления' },
    { id: 'web', label: 'Веб-разработка' },
    { id: 'data', label: 'Анализ данных' },
    { id: 'design', label: 'Дизайн' },
];

const instructors = {
    ivanov: {
        id: 'ivanov',
        name: 'Алексей Иванов',
        role: 'Senior Frontend-разработчик',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Alexey',
        company: 'TechEdu',
    },
    petrova: {
        id: 'petrova',
        name: 'Мария Петрова',
        role: 'Data Scientist',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Maria',
        company: 'DataSchool',
    },
    sidorov: {
        id: 'sidorov',
        name: 'Дмитрий Сидоров',
        role: 'UX/UI Lead',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Dmitry',
        company: 'DesignLab',
    },
};

export const lessonsByCourseId = {
    reactBasics: [
        { id: 'l1', title: 'Введение в React и JSX', durationMin: 25, order: 1 },
        { id: 'l2', title: 'Компоненты и props', durationMin: 40, order: 2 },
        { id: 'l3', title: 'Стилизация и структура проекта', durationMin: 35, order: 3 },
        { id: 'l4', title: 'Списки и ключи', durationMin: 30, order: 4 },
    ],
    pythonData: [
        { id: 'p1', title: 'Python для анализа данных', durationMin: 45, order: 1 },
        { id: 'p2', title: 'NumPy и Pandas', durationMin: 50, order: 2 },
        { id: 'p3', title: 'Визуализация', durationMin: 40, order: 3 },
    ],
    uiDesign: [
        { id: 'u1', title: 'Принципы UX', durationMin: 35, order: 1 },
        { id: 'u2', title: 'Figma: компоненты', durationMin: 55, order: 2 },
        { id: 'u3', title: 'Прототипирование', durationMin: 45, order: 3 },
        { id: 'u4', title: 'Доступность интерфейсов', durationMin: 30, order: 4 },
    ],
    nodeApi: [
        { id: 'n1', title: 'HTTP и Express', durationMin: 40, order: 1 },
        { id: 'n2', title: 'REST API', durationMin: 45, order: 2 },
    ],
};

export const courses = [
    {
        id: 'reactBasics',
        title: 'React: основы и композиция',
        description:
            'Разберём JSX, переиспользуемые компоненты и подготовку к работе с состоянием в следующих модулях.',
        image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80',
        category: 'web',
        categoryLabel: 'Веб-разработка',
        rating: 4.8,
        reviewsCount: 124,
        progressPercent: 35,
        completedLessonIds: ['l1', 'l2'],
        instructor: instructors.ivanov,
    },
    {
        id: 'pythonData',
        title: 'Анализ данных на Python',
        description:
            'От основ синтаксиса до pandas и визуализации — практика на реальных наборах данных.',
        image: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=800&q=80',
        category: 'data',
        categoryLabel: 'Анализ данных',
        rating: 4.9,
        reviewsCount: 89,
        progressPercent: 0,
        completedLessonIds: [],
        instructor: instructors.petrova,
    },
    {
        id: 'uiDesign',
        title: 'UX/UI: от идеи до макета',
        description:
            'Исследования пользователей, дизайн-системы и передача макетов в разработку.',
        image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80',
        category: 'design',
        categoryLabel: 'Дизайн',
        rating: 4.7,
        reviewsCount: 56,
        progressPercent: 66,
        completedLessonIds: ['u1', 'u2', 'u3'],
        instructor: instructors.sidorov,
    },
    {
        id: 'nodeApi',
        title: 'Backend на Node.js',
        description:
            'Создание серверов, маршрутизация и основы безопасности API.',
        image: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=800&q=80',
        category: 'web',
        categoryLabel: 'Веб-разработка',
        rating: 4.6,
        reviewsCount: 41,
        progressPercent: 100,
        completedLessonIds: ['n1', 'n2'],
        instructor: instructors.ivanov,
    },
];

export function filterCoursesByCategory(courseList, categoryId) {
    if (!categoryId || categoryId === 'all') {
        return courseList;
    }
    return courseList.filter((c) => c.category === categoryId);
}

export const reviews = [
    {
        id: 'r1',
        courseId: 'reactBasics',
        authorName: 'Аникейчик Артем',
        rating: 5,
        text: 'Отличная подача материала, много практики. Жду модуль про состояние!',
        date: '2026-03-12',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Arte',
    },
    {
        id: 'r2',
        courseId: 'pythonData',
        authorName: 'Бельмач Ярослав',
        rating: 4,
        text: 'Сильный курс по pandas, чуть не хватило задач на время.',
        date: '2026-02-28',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Yaroslav',
    },
    {
        id: 'r3',
        courseId: 'uiDesign',
        authorName: 'Анна Соловьева',
        rating: 5,
        text: 'Очень структурированно, наконец разобралась с компонентами в Figma.',
        date: '2026-03-01',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Anna',
    },
];

export const featuredCourseId = 'reactBasics';

export function getLessonsForCourse(courseId) {
    return lessonsByCourseId[courseId] ?? [];
}

export const questions = [
    {
        id: 'q1',
        prompt: 'Какой язык программирования используется в React?',
        options: [
            { id: 'q1-a', label: 'JavaScript' },
            { id: 'q1-b', label: 'Python' },
            { id: 'q1-c', label: 'Java' },
            { id: 'q1-d', label: 'C#' },
        ],
        correctOptionId: 'q1-a',
    },
    {
        id: 'q2',
        prompt: 'Что такое JSX?',
        options: [
            { id: 'q2-a', label: 'Язык программирования' },
            { id: 'q2-b', label: 'Синтаксис расширения JavaScript' },
            { id: 'q2-c', label: 'Библиотека CSS' },
            { id: 'q2-d', label: 'Серверный фреймворк' },
        ],
        correctOptionId: 'q2-b',
    },
    {
        id: 'q3',
        prompt: 'Какая функция используется для рендера React?',
        options: [
            { id: 'q3-a', label: 'render()' },
            { id: 'q3-b', label: 'except()' },
            { id: 'q3-c', label: 'createRoot()' },
            { id: 'q3-d', label: 'display()' },
        ],
        correctOptionId: 'q3-c',
    },
    {
        id: 'q4',
        prompt: 'Что делает useState?',
        options: [
            { id: 'q4-a', label: 'Управляет побочными эффектами' },
            { id: 'q4-b', label: 'Добавляет состояние в функциональные компоненты' },
            { id: 'q4-c', label: 'Обрабатывает события' },
            { id: 'q4-d', label: 'Создает стили' },
        ],
        correctOptionId: 'q4-b',
    },
    {
        id: 'q5',
        prompt: 'Что такое props?',
        options: [
            { id: 'q5-a', label: 'Внутреннее состояние компонента' },
            { id: 'q5-b', label: 'Данные, передаваемые от родителя к дочернему' },
            { id: 'q5-c', label: 'CSS классы' },
            { id: 'q5-d', label: 'Функции жизненного цикла' },
        ],
        correctOptionId: 'q5-b',
    },
    {
        id: 'q6',
        prompt: 'Что проверяет StrictMode?',
        options: [
            { id: 'q6-a', label: 'Скорость рендера' },
            { id: 'q6-b', label: 'Потенциальные проблемы в коде' },
            { id: 'q6-c', label: 'Размер бандла' },
            { id: 'q6-d', label: 'Совместимость с IE' },
        ],
        correctOptionId: 'q6-b',
    },
];
