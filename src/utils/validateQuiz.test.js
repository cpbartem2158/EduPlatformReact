import { validateQuiz } from './validateQuiz';

const sampleQuestions = [
    {
        id: 'q1',
        correctOptionId: 'a',
    },
    {
        id: 'q2',
        correctOptionId: 'b',
    },
];

describe('validateQuiz', () => {
    test('для пустого списка вопросов возвращает нулевой результат', () => {
        expect(validateQuiz([], {})).toEqual({
            correctCount: 0,
            total: 0,
            byQuestion: {},
            isComplete: true,
            scorePercent: 0,
        });
        expect(validateQuiz(null, {})).toEqual({
            correctCount: 0,
            total: 0,
            byQuestion: {},
            isComplete: true,
            scorePercent: 0,
        });
    });

    test('помечает верные и неверные ответы', () => {
        const r = validateQuiz(sampleQuestions, { q1: 'a', q2: 'x' });
        expect(r.correctCount).toBe(1);
        expect(r.total).toBe(2);
        expect(r.byQuestion).toEqual({ q1: true, q2: false });
        expect(r.scorePercent).toBe(50);
    });

    test('isComplete false если не на все вопросы ответили', () => {
        const r = validateQuiz(sampleQuestions, { q1: 'a' });
        expect(r.isComplete).toBe(false);
    });

    test('isComplete true если все вопросы имеют непустой ответ', () => {
        const r = validateQuiz(sampleQuestions, { q1: 'a', q2: 'b' });
        expect(r.isComplete).toBe(true);
        expect(r.correctCount).toBe(2);
        expect(r.scorePercent).toBe(100);
    });

    test('пустая строка ответа считается как отсутствие ответа', () => {
        const r = validateQuiz(sampleQuestions, { q1: '', q2: 'b' });
        expect(r.isComplete).toBe(false);
        expect(r.byQuestion.q1).toBe(false);
    });

    test('безопасно обрабатывает отсутствующий объект answers', () => {
        const r = validateQuiz(sampleQuestions, undefined);
        expect(r.correctCount).toBe(0);
        expect(r.isComplete).toBe(false);
    });
});
