
// shamelessly copied from:
// http://stackoverflow.com/questions/6108819/javascript-timestamp-to-relative-time-eg-2-seconds-ago-one-week-ago-etc-best
export function timeDifference(current, previous) {
    const msPerMinute = 60 * 1000;
    const msPerHour = msPerMinute * 60;
    const msPerDay = msPerHour * 24;
    const msPerMonth = msPerDay * 30;
    const msPerYear = msPerDay * 365;

    const elapsed = current - previous;

    if (elapsed < msPerMinute) {
        return Math.round(elapsed / 1000) + ' sec ago';
    } else if (elapsed < msPerHour) {
        return Math.round(elapsed / msPerMinute) + ' min ago';
    } else if (elapsed < msPerDay) {
        return Math.round(elapsed / msPerHour) + ' h ago';
    } else if (elapsed < msPerMonth) {
        return Math.round(elapsed / msPerDay) + ' days ago';
    } else if (elapsed < msPerYear) {
        return Math.round(elapsed / msPerMonth) + ' mo ago';
    } else {
        return Math.round(elapsed / msPerYear) + ' years ago';
    }
}
