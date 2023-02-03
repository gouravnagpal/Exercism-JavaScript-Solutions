export const flatten = (a) => {
    let result = new Array();
    if(a.length < 1) return result;
  
    function decodeArray(arr){
        for(let i = 0; i < arr.length; i++){
            if(arr[i] !== null && typeof arr[i] === 'object'){
                decodeArray(arr[i]);
            }
            else{
                if(arr[i] !== null) result.push(arr[i]);
            }
        }
    }
  
    decodeArray(a);
  
    return result;
  };