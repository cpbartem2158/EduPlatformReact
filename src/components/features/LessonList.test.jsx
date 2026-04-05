import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import LessonList from './LessonList';

const lessons = [
    { id: 'l1', title: 'Урок 1', durationMin: 10, order: 1 },
    { id: 'l2', title: 'Урок 2', durationMin: 20, order: 2 },
];

describe('LessonList', () => {
    test('показывает уроки и отмечает завершённые', () => {
        render(
            <LessonList
                courseTitle="Курс А"
                lessons={lessons}
                completedLessonIds={['l1']}
            />,
        );
        expect(screen.getByRole('heading', { name: 'Курс А' })).toBeInTheDocument();
        expect(screen.getByText('Урок 1')).toBeInTheDocument();
        expect(screen.getByText('Урок 2')).toBeInTheDocument();
    });

    test('выбор урока вызывает onSelectLesson', async () => {
        const user = userEvent.setup();
        const onSelectLesson = jest.fn();
        render(
            <LessonList lessons={lessons} onSelectLesson={onSelectLesson} />,
        );
        await user.click(screen.getByRole('button', { name: /Урок 2/i }));
        expect(onSelectLesson).toHaveBeenCalledWith(lessons[1]);
    });
});
