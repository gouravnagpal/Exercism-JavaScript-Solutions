export const square = (num) => {
    if(num <= 0 || num > 64) throw new Error("square must be between 1 and 64");
    return BigInt(2 ** (num - 1));
};
  
export const total = () => {
    return 2n ** 64n - 1n;
};