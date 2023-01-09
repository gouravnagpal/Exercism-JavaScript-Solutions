export const transform = (old) => {
    let NewObject = {};
    Object.keys(old).forEach((value) => {
        old[value].map(key => {
            NewObject[key.toLowerCase()] = Number(value);
        });
    });
    return NewObject;
};