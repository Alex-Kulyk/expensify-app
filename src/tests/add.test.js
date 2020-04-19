const generateGreating = (name) => {
  return `Hello ${name[0].toUpperCase() + name.slice(1)}!`;
};
test('Return a name with exclemation mark', () => {
  let result = generateGreating('alex');
  expect(result).toBe('Hello Alex!');
});
