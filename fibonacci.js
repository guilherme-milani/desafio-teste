function fibonacci(num) {

  let a = 0, b = 1;
  let c;

  if (num === 0) return "O número 0 pertence à sequência de Fibonacci.";
  if (num === 1) return "O número 1 pertence à sequência de Fibonacci.";

  while (b < num) {
    c = a + b;
    a = b;
    b = c;
  }

  if (b === num) {
    return `O número ${num} pertence à sequência de Fibonacci.`;
  } else {
    return `O número ${num} não pertence à sequência de Fibonacci.`;
  }
}


console.log(fibonacci(13)); /
console.log(fibonacci(27)); 
