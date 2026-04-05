import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Header from './Header';

describe('Header', () => {
    test('отображает заголовок и поле поиска', () => {
        const onSearch = jest.fn();
        render(
            <Header
                title="EduPlatform"
                onSearch={onSearch}
                searchPlaceholder="Найти курс"
            />,
        );
        expect(screen.getByRole('heading', { name: 'EduPlatform' })).toBeInTheDocument();
        expect(screen.getByPlaceholderText('Найти курс')).toBeInTheDocument();
    });

    test('onSearch вызывается при вводе', async () => {
        const user = userEvent.setup();
        const onSearch = jest.fn();
        render(<Header title="EduPlatform" onSearch={onSearch} />);
        await user.type(screen.getByRole('textbox'), 'react');
        expect(onSearch).toHaveBeenCalledWith('react');
    });
});
