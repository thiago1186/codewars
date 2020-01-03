function integrate(coefficient, exponent) {
  coefficient /= ++exponent;
  return `${parseInt(coefficient)}x^${exponent}`;
}
