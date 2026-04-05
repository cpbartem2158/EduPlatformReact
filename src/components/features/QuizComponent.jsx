import Button from '../ui/Button';
import { validateQuiz } from '../../utils/validateQuiz';

const QuizComponent = ({
    title = 'Мини-тест',
    questions = [],
    answers = {},
    submitted = false,
    onAnswerChange,
    onFinished,
}) => {
    const result = submitted ? validateQuiz(questions, answers) : null;

    if (!questions.length) {
        return (
            <p className="quiz-component__empty" role="status">
                Нет вопросов для отображения.
            </p>
        );
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onFinished?.(validateQuiz(questions, answers));
    };

    return (
        <section
            className="quiz-component app_section"
            aria-labelledby="quiz-component-heading"
        >
            <h2 id="quiz-component-heading">{title}</h2>
            <form className="quiz-component__form" onSubmit={handleSubmit}>
                {questions.map((q) => (
                    <fieldset key={q.id} className="quiz-component__question">
                        <legend id={`q-${q.id}-legend`}>{q.prompt}</legend>
                        <div role="radiogroup" aria-labelledby={`q-${q.id}-legend`}>
                            {q.options.map((opt) => (
                                <label key={opt.id} className="quiz-component__option">
                                    <input
                                        type="radio"
                                        name={q.id}
                                        value={opt.id}
                                        checked={answers[q.id] === opt.id}
                                        onChange={() =>
                                            onAnswerChange?.(q.id, opt.id)
                                        }
                                        disabled={submitted}
                                    />
                                    {opt.label}
                                </label>
                            ))}
                        </div>
                    </fieldset>
                ))}
                {!submitted && (
                    <Button type="submit" variant="primary">
                        Проверить ответы
                    </Button>
                )}
            </form>
            {result && (
                <div
                    role="status"
                    aria-live="polite"
                    aria-atomic="true"
                    className="quiz-component__result"
                >
                    Правильно: {result.correctCount} из {result.total}. Оценка{' '}
                    {result.scorePercent} процентов.
                    {!result.isComplete ? ' Не на все вопросы дан ответ.' : ''}
                </div>
            )}
        </section>
    );
};

export default QuizComponent;
