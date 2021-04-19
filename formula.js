function sum(a, b) {
  return a + b;
}

function helloWorld() {
  return "hello world";
}

function increament(count) {
  let sequence = [];
  for (i = 1; i <= count; i++) {
    sequence.push(i);
  }

  return sequence;
}

module.exports = {
  sum,
  helloWorld,
  increament,
};
