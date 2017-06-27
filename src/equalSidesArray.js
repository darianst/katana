const arSum = arr => arr.reduce((pre, cur) => pre + cur, 0);

export default (arr) => {
  let res = -1;

  arr.forEach((item, idx) => {
    if (arSum(arr.slice(0, idx)) === arSum(arr.slice(idx + 1))) res = idx
  });

  return res;
}
