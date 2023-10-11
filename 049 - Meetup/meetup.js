const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
]

const firstDates = { first: 1, second: 8, third: 15, fourth: 22, teenth: 13 }

export const meetup = (year, month, descriptor, weekday) => {
    const dayIndex = weekdays.indexOf(weekday)
    const firstDateInRange = firstDates[descriptor] || new Date(year, (month), 0).getDate() - 6
    const firstDay = new Date(year, month - 1, firstDateInRange).getDay()
    const date = firstDateInRange + (dayIndex - firstDay + 7) % 7

    return new Date(year, month - 1, date)
}