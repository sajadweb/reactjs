/**
 * Multiplication
 * @param  {...Number} p 
 * @returns Number
 */
export function multip(...a){
    return a.reduce((old, value) => old * parseFloat(value), 1);
}