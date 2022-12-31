export const steps = (n) => {
    let steps = 0;
    if (n <= 0) throw Error('Only positive numbers are allowed')
    if(n === 1) return steps;
    while(n !== 1){
        if(n % 2 === 0){
            n = n / 2;
        }
        else{
          n = 3 * n + 1;
        }
        steps++;
    }
    return steps;
};