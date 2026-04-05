import { render, screen } from '@testing-library/react';
import ProgressBar from './ProgressBar';

describe('ProgressBar', () => {
    test('показывает подпись и процент, группа имеет aria-label', () => {
        render(<ProgressBar value={40} max={100} label="Прогресс курса" />);
        expect(screen.getByRole('group', { name: 'Прогресс курса' })).toBeInTheDocument();
        expect(screen.getByText('Прогресс курса')).toBeInTheDocument();
        expect(screen.getByText('40%')).toBeInTheDocument();
    });

    test('клампит значение в диапазон 0–100%', () => {
        const { rerender } = render(<ProgressBar value={150} max={100} showLabel={false} />);
        expect(screen.queryByText('150%')).not.toBeInTheDocument();
        expect(screen.getByRole('group')).toBeInTheDocument();
        rerender(<ProgressBar value={-10} max={100} showLabel={false} />);
        const track = document.querySelector('.progress-bar__fill');
        expect(track).toHaveStyle({ width: '0%' });
    });

    test('при max <= 0 использует 100 как знаменатель', () => {
        render(<ProgressBar value={50} max={0} label="Тест" />);
        expect(screen.getByText('50%')).toBeInTheDocument();
    });

    test('скрывает заголовок при showLabel=false', () => {
        render(<ProgressBar value={30} max={100} showLabel={false} label="Скрыто" />);
        expect(screen.queryByText('Скрыто')).not.toBeInTheDocument();
    });
});
