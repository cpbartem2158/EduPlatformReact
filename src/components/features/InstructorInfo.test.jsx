import { render, screen } from '@testing-library/react';
import InstructorInfo from './InstructorInfo';

describe('InstructorInfo', () => {
    test('ничего не рендерит без instructor', () => {
        const { container } = render(<InstructorInfo instructor={null} />);
        expect(container.firstChild).toBeNull();
    });

    test('в полном режиме показывает компанию', () => {
        render(
            <InstructorInfo
                instructor={{
                    id: '1',
                    name: 'Анна',
                    role: 'Лектор',
                    avatar: 'https://example.com/a.svg',
                    company: 'Школа',
                }}
                compact={false}
            />,
        );
        expect(screen.getByText('Анна')).toBeInTheDocument();
        expect(screen.getByText('Школа')).toBeInTheDocument();
    });
});
