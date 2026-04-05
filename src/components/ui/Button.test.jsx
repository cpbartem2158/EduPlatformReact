import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Button from './Button';

describe('Button', () => {
    test('disabled блокирует клик', async () => {
        const user = userEvent.setup();
        const onClick = jest.fn();
        render(
            <Button disabled onClick={onClick}>
                Действие
            </Button>,
        );
        await user.click(screen.getByRole('button', { name: 'Действие' }));
        expect(onClick).not.toHaveBeenCalled();
    });
});