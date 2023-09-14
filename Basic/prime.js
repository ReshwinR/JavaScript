const checkPrime = (num) => {
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return num > 1;
};

const result = checkPrime(2);
console.log(result);
console.log(result ? "PrimeNumber" : "not PrimeNumber");
