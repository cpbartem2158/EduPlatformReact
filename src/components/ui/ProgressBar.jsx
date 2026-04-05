import { calculateProgress } from '../../utils/calculateProgress';

const ProgressBar = ({
    value,
    max = 100,
    label = 'Прогресс',
    showLabel = true,
    className = '',
}) => {
    const safeMax = max > 0 ? max : 100;
    const pct = calculateProgress(value, safeMax);

    return (
        <div className={`progress-bar ${className}`.trim()} role="group" aria-label={label}>
            {showLabel && (
                <div className="progress-bar__header">
                    <span className="progress-bar__label">{label}</span>
                    <span className="progress-bar__value">{pct}%</span>
                </div>
            )}
            <div className="progress-bar__track" aria-hidden="true">
                <div className="progress-bar__fill" style={{ width: `${pct}%` }} />
            </div>
        </div>
    );
};

export default ProgressBar;
