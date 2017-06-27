export default (digit) => {
  let temp = digit;
  const sumNum = num => String(num).split('').reduce((acc, cur) => acc + parseInt(cur), 0);

  while (String(temp).length > 1) temp = sumNum(temp);

  return temp;
  // another solution
  // return (n - 1) % 9 + 1;
};
