export const encode = (end) => {
    let result = '';
    let n = 1;
    for(let i = 0; i < end.length; i++){
        if(end[i] === end [i + 1]){
            n += 1;
        }
        else{
            result += `${n > 1 ? n : ''}${end[i]}`
            n = 1;
        }
    }
    return result;
};

export const decode = (dec) => {
    let result = '';
    for(let i = 0; i < dec.length; i++){
        if(dec[i].match(/[0-9]/g)){
            if(dec[i + 1].match(/[0-9]/g)){
                result += dec[i + 2].repeat(Number(`${dec[i]}${dec[i + 1]}`) - 1);
                i++
            }
            else{
                result += dec[i + 1].repeat(dec[i] - 1);
            }
        }
        else{
          result += dec[i];
        }
      }
    return result;
};
  