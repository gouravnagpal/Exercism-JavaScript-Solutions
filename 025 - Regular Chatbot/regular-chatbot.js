export function isValidCommand(command) {
    const check = /chatbot/gmi;
    return command.search(check) === 0;
}

export function removeEmoji(message) {
    const remove = /emoji\d+/gmi;
    return message.replace(remove, '');
}

export function checkPhoneNumber(number) {
    const pattern = /\(\+\d{2}\)\s\d{3}-\d{3}-\d{3}/gmi;
    return pattern.test(number) ? 'Thanks! You can now download me to your phone.' : `Oops, it seems like I can't reach out to ${number}`;
}

export function getURL(userInput) {
    const URL = /[a-z]+\.[a-z]+/gmi;
    return userInput.match(URL);
}

export function niceToMeetYou(fullName) {
    fullName = fullName.split(/,\s/gmi).reverse().join(' ');
    return `Nice to meet you, ${fullName}`;
}