export function calculateProgress(completedCount, totalLessons) {
    if (totalLessons == null || totalLessons <= 0) {
        return 0;
    }
    const done = Math.max(0, Number(completedCount) || 0);
    const capped = Math.min(done, totalLessons);
    return Math.round((capped / totalLessons) * 100);
}
