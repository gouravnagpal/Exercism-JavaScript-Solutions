export const primeFactors = (number) => {
    let result = new Array();
    if(number === 1) return result;
    let devide = 2;
    while(number > 1){
        if(number % devide === 0){
            number = number / devide;
            result.push(devide);
        } else{
            devide = devide + 1;
        }
    }
  
    return result
};