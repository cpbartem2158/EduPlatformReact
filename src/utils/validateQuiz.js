export function validateQuiz(questions, answers) {
    if (!Array.isArray(questions) || questions.length === 0) {
        return {
            correctCount: 0,
            total: 0,
            byQuestion: {},
            isComplete: true,
            scorePercent: 0,
        };
    }

    const safeAnswers = answers && typeof answers === 'object' ? answers : {};
    const byQuestion = {};
    let correctCount = 0;

    for (const q of questions) {
        const selected = safeAnswers[q.id];
        const ok =
            selected != null &&
            String(selected).length > 0 &&
            selected === q.correctOptionId;
        byQuestion[q.id] = ok;
        if (ok) correctCount += 1;
    }

    const total = questions.length;
    const answeredCount = questions.filter((q) => {
        const v = safeAnswers[q.id];
        return v != null && String(v).length > 0;
    }).length;
    const isComplete = answeredCount === total;
    const scorePercent = Math.round((correctCount / total) * 100);

    return {
        correctCount,
        total,
        byQuestion,
        isComplete,
        scorePercent,
    };
}
