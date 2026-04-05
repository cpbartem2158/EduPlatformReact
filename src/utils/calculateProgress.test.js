import { calculateProgress } from './calculateProgress';

describe('calculateProgress', () => {
    test('возвращает 0 при нуле или отрицательном числе уроков', () => {
        expect(calculateProgress(3, 0)).toBe(0);
        expect(calculateProgress(3, -1)).toBe(0);
        expect(calculateProgress(1, null)).toBe(0);
        expect(calculateProgress(1, undefined)).toBe(0);
    });

    test('считает долю завершённых уроков в процентах с округлением', () => {
        expect(calculateProgress(1, 4)).toBe(25);
        expect(calculateProgress(2, 4)).toBe(50);
        expect(calculateProgress(3, 4)).toBe(75);
        expect(calculateProgress(4, 4)).toBe(100);
    });

    test('ограничивает сверху при completedCount > totalLessons', () => {
        expect(calculateProgress(10, 4)).toBe(100);
    });

    test('не допускает отрицательный completedCount', () => {
        expect(calculateProgress(-5, 10)).toBe(0);
    });

    test('обрабатывает нечисловой completedCount как 0', () => {
        expect(calculateProgress(NaN, 5)).toBe(0);
    });
});
