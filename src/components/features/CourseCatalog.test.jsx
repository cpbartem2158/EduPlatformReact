import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CourseCatalog from './CourseCatalog';

const categories = [
    { id: 'all', label: 'Все' },
    { id: 'web', label: 'Веб' },
];

const baseCourse = {
    description: 'Описание',
    image: 'https://example.com/r.jpg',
    rating: 5,
    reviewsCount: 1,
    progressPercent: 0,
    instructor: {
        id: 'i',
        name: 'Препод',
        role: 'Роль',
        avatar: 'https://example.com/a.svg',
    },
};

const courses = [
    {
        ...baseCourse,
        id: 'reactBasics',
        title: 'React',
        category: 'web',
        categoryLabel: 'Веб',
    },
    {
        ...baseCourse,
        id: 'pythonData',
        title: 'Python',
        category: 'data',
        categoryLabel: 'Данные',
    },
];

jest.mock('../../data/mockData', () => {
    const actual = jest.requireActual('../../data/mockData');
    return {
        ...actual,
        getLessonsForCourse: jest.fn(() => [{ id: 'l1' }, { id: 'l2' }]),
    };
});

describe('CourseCatalog', () => {
    test('рендерит заголовок, фильтры и карточки курсов', () => {
        render(
            <CourseCatalog
                title="Каталог"
                courses={courses}
                activeCategoryId="all"
                categories={categories}
            />,
        );
        expect(screen.getByRole('heading', { name: 'Каталог' })).toBeInTheDocument();
        expect(screen.getByRole('toolbar', { name: /направлению/i })).toBeInTheDocument();
        expect(screen.getByRole('heading', { name: 'React' })).toBeInTheDocument();
    });

    test('при выборе чипа вызывается onFilterChange', async () => {
        const user = userEvent.setup();
        const onFilterChange = jest.fn();
        render(
            <CourseCatalog
                courses={courses}
                activeCategoryId="all"
                categories={categories}
                onFilterChange={onFilterChange}
            />,
        );
        await user.click(screen.getByRole('button', { name: 'Веб' }));
        expect(onFilterChange).toHaveBeenCalledWith('web');
    });

    test('при activeCategoryId не all показывает только курсы этой категории', () => {
        render(
            <CourseCatalog
                courses={courses}
                activeCategoryId="data"
                categories={categories}
            />,
        );
        expect(screen.getByRole('heading', { name: 'Python' })).toBeInTheDocument();
        expect(screen.queryByRole('heading', { name: 'React' })).not.toBeInTheDocument();
    });

    test('при пустом результате фильтра показывает сообщение', () => {
        render(
            <CourseCatalog
                courses={courses}
                activeCategoryId="design"
                categories={categories}
            />,
        );
        expect(screen.getByText(/направлении пока нет/i)).toBeInTheDocument();
    });
});
