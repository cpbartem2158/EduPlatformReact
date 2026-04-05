import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CourseCard from './CourseCard';

const course = {
    id: 'c1',
    title: 'Введение в тесты',
    description: 'Краткое описание курса для проверки отображения.',
    image: 'https://example.com/course.jpg',
    categoryLabel: 'Веб',
    rating: 4.25,
    reviewsCount: 10,
    progressPercent: 33,
    instructor: {
        id: 'i1',
        name: 'Иван Тестов',
        role: 'Преподаватель',
        avatar: 'https://example.com/avatar.svg',
        company: 'Университет',
    },
};

describe('CourseCard', () => {
    test('отображает название, описание, категорию, рейтинг и число уроков', () => {
        render(
            <CourseCard
                course={course}
                lessonsTotal={12}
            />,
        );
        expect(screen.getByRole('heading', { name: course.title })).toBeInTheDocument();
        expect(screen.getByText(course.description)).toBeInTheDocument();
        expect(screen.getByText('Веб')).toBeInTheDocument();
        expect(screen.getByText('4.3')).toBeInTheDocument();
        expect(screen.getByText('(10)')).toBeInTheDocument();
        expect(screen.getByText(/Уроков в курсе:/)).toBeInTheDocument();
        expect(screen.getByText('12')).toBeInTheDocument();
    });

    test('прогресс передаётся в ProgressBar с доступной подписью', () => {
        render(<CourseCard course={course} lessonsTotal={5} />);
        expect(
            screen.getByRole('group', { name: 'Ваш прогресс по курсу' }),
        ).toBeInTheDocument();
        expect(screen.getByText('33%')).toBeInTheDocument();
    });

    test('изображение курса имеет alt из названия', () => {
        render(<CourseCard course={course} lessonsTotal={1} />);
        expect(screen.getByRole('img', { name: course.title })).toHaveAttribute(
            'src',
            course.image,
        );
    });

    test('вызывает колбэки при нажатии на кнопки', async () => {
        const user = userEvent.setup();
        const onContinue = jest.fn();
        const onOpenDetails = jest.fn();
        const onSaveForLater = jest.fn();
        render(
            <CourseCard
                course={course}
                lessonsTotal={3}
                onContinue={onContinue}
                onOpenDetails={onOpenDetails}
                onSaveForLater={onSaveForLater}
            />,
        );
        await user.click(screen.getByRole('button', { name: 'Продолжить обучение' }));
        await user.click(screen.getByRole('button', { name: 'О программе' }));
        await user.click(screen.getByRole('button', { name: 'В избранное' }));
        expect(onContinue).toHaveBeenCalledWith(course);
        expect(onOpenDetails).toHaveBeenCalledWith(course);
        expect(onSaveForLater).toHaveBeenCalledWith(course);
    });

    test('в компактном режиме InstructorInfo показывает имя преподавателя', () => {
        render(<CourseCard course={course} lessonsTotal={1} />);
        expect(screen.getByText('Иван Тестов')).toBeInTheDocument();
        expect(screen.getByText('Преподаватель')).toBeInTheDocument();
    });
});
