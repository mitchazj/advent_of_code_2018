function day_1(input) {
  return input.split(' ').map(x => parseInt(x.replace('+', ''))).reduce((a, b) => a + b);
}
