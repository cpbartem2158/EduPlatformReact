import { render, screen } from '@testing-library/react';
import Review from './Review';

const review = {
    id: 'r1',
    authorName: 'Автор',
    rating: 3,
    text: 'Текст',
    date: '2026-02-01',
    avatar: 'https://example.com/a.svg',
};

describe('Review', () => {
    test('без onHelpful не показывает кнопку действия', () => {
        render(<Review review={review} />);
        expect(screen.queryByRole('button', { name: 'Полезно' })).not.toBeInTheDocument();
    });
});
