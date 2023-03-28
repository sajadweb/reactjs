/**
 * Sum
 * @param  {...number} a 
 * @returns number
 */
export function Sum(...a) {
  return a.reduce((old, value) => old + parseFloat(value), 0);
}
