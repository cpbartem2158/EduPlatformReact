import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ReviewsSection from './ReviewsSection';

const items = [
    {
        id: 'r1',
        authorName: 'Студент',
        rating: 4,
        text: 'Хороший курс',
        date: '2026-01-01',
        avatar: 'https://example.com/x.svg',
    },
];

describe('ReviewsSection', () => {
    test('рендерит список отзывов и кнопку «Полезно»', async () => {
        const user = userEvent.setup();
        const onReviewHelpful = jest.fn();
        render(
            <ReviewsSection
                title="Отзывы"
                reviews={items}
                onReviewHelpful={onReviewHelpful}
            />,
        );
        expect(screen.getByRole('heading', { name: 'Отзывы' })).toBeInTheDocument();
        expect(screen.getByText('Хороший курс')).toBeInTheDocument();
        expect(document.querySelector('.review__rating')).toHaveAttribute(
            'aria-label',
            'Оценка 4 из 5',
        );
        await user.click(screen.getByRole('button', { name: 'Полезно' }));
        expect(onReviewHelpful).toHaveBeenCalledWith(items[0]);
    });
});
