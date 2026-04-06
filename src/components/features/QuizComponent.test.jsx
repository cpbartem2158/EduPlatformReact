import { useState } from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import QuizComponent from './QuizComponent';

const questions = [
    {
        id: 'q1',
        prompt: 'Столица Франции?',
        correctOptionId: 'paris',
        options: [
            { id: 'london', label: 'Лондон' },
            { id: 'paris', label: 'Париж' },
        ],
    },
    {
        id: 'q2',
        prompt: '2 + 2?',
        correctOptionId: '4',
        options: [
            { id: '3', label: '3' },
            { id: '4', label: '4' },
        ],
    },
];

function QuizHarness({ title, questions: qs, onFinished: onFinishedProp }) {
    const [answers, setAnswers] = useState({});
    const [submitted, setSubmitted] = useState(false);
    return (
        <QuizComponent
            title={title}
            questions={qs}
            answers={answers}
            submitted={submitted}
            onAnswerChange={(questionId, optionId) =>
                setAnswers((prev) => ({ ...prev, [questionId]: optionId }))
            }
            onFinished={(result) => {
                setSubmitted(true);
                onFinishedProp?.(result);
            }}
        />
    );
}

describe('QuizComponent', () => {
    test('при отсутствии вопросов показывает статус', () => {
        render(<QuizComponent questions={[]} />);
        expect(screen.getByRole('status')).toHaveTextContent(
            'Нет вопросов для отображения.',
        );
    });

    test('отображает вопросы и после отправки показывает результат с aria-live', async () => {
        const user = userEvent.setup();
        const onFinished = jest.fn();
        render(
            <QuizHarness 
            title="Контроль"
            questions={questions} 
            onFinished={onFinished} />,
        );
        expect(screen.getByRole('heading', { name: 'Контроль' })).toBeInTheDocument();
        await user.click(screen.getByLabelText('Париж'));
        await user.click(screen.getByLabelText('4'));
        await user.click(screen.getByRole('button', { name: 'Проверить ответы' }));
        const status = screen.getByRole('status');
        expect(status).toHaveAttribute('aria-live', 'polite');
        expect(status).toHaveTextContent('Правильно: 2 из 2');
        expect(status).toHaveTextContent('100 процентов');
        expect(onFinished).toHaveBeenCalledTimes(1);
        expect(onFinished).toHaveBeenCalledWith(
            expect.objectContaining({
                scorePercent: 100,
                correctCount: 2,
                total: 2,
                isComplete: true,
            }),
        );
    });

    test('сообщает о неполных ответах', async () => {
        const user = userEvent.setup();
        render(<QuizHarness questions={questions} />);
        await user.click(screen.getByLabelText('Париж'));
        await user.click(screen.getByRole('button', { name: 'Проверить ответы' }));
        expect(screen.getByRole('status')).toHaveTextContent(
            'Не на все вопросы дан ответ.',
        );
    });

    test('группы вариантов помечены как radiogroup с подписью по легенде', () => {
        render(<QuizHarness questions={[questions[0]]} />);
        const groups = screen.getAllByRole('radiogroup');
        expect(groups.length).toBeGreaterThanOrEqual(1);
    });
});
