export const convertMonthsToYears = (months: number) => {
    if(months <= 12) return `${months} months`;

    const years = Math.round(months / 12 * 10) / 10;
    return `${years} years`;
}