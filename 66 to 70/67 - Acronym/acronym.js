export const parse = (acr) => {
    acr = acr.replace('-', ' ').replace('_', ' ').split(' ');
    let NewAcr = '';
    acr.forEach(value => {
        value = value.split('');
        if(value[0] !== undefined) NewAcr += value[0].toUpperCase();
    })
    return NewAcr;
};
