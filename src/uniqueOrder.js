export default (iterable) => {
  let res = [];

  if (typeof(iterable) === 'string') iterable = iterable.split('');

  iterable.forEach((item) => (res[res.length - 1] !== item) && res.push(item));

  return res;
}
