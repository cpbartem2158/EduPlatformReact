import { render, screen } from '@testing-library/react';
import Card from './Card';

describe('Card', () => {
    test('без изображения не рендерит блок картинки', () => {
        render(
            <Card title="Только текст" description="Описание">
                <p>Дочерний контент</p>
            </Card>,
        );
        expect(screen.queryByRole('img')).not.toBeInTheDocument();
        expect(screen.getByText('Дочерний контент')).toBeInTheDocument();
    });
});
