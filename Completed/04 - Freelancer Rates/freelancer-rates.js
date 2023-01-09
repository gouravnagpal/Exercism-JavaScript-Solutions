export const WorkingHors = 8;

export function dayRate(ratePerHour) {
    return ratePerHour * WorkingHors;
}

export function daysInBudget(budget, ratePerHour) {
    return Math.floor((budget/ratePerHour)/WorkingHors, 0);
}

export function priceWithMonthlyDiscount(ratePerHour, numDays, discount) {
    let months = Math.floor(numDays / 22);
    let rate =  dayRate(ratePerHour) * 22;
    discount = (1 - discount) * rate
    let ExtraDays = numDays % 22;
    let ExtraRate = ExtraDays * dayRate(ratePerHour)

    return Math.ceil(months * discount + ExtraRate)
}