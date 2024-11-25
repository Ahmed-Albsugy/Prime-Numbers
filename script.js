function isPrime(num) {
  if (num <= 1) return false;
  if (num === 2) return true;
  if (num % 2 === 0) return false;
  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    if (num % i === 0) return false;
  }
  return true;
}

function primeNumbers(n, m) {
  let primes = [];
  for (let i = n; i <= m; i++) {
    if (isPrime(i)) {
      primes.push(i);
    }
  }
  return primes;
}

function findPrimes() {
  const n = parseInt(document.getElementById("start").value);
  const m = parseInt(document.getElementById("end").value);
  const resultDiv = document.getElementById("result");
  if (isNaN(n) || isNaN(m)) {
    resultDiv.innerHTML = `<span style="color: red;">Please enter valid numbers for both fields.</span>`;
    return;
  }
  if (n > m) {
    resultDiv.innerHTML = `<span style="color: red;">Start number must be less than the end number.</span>`;
    return;
  }
  const primess = primeNumbers(n, m);
  if (primess.length > 0) {
    resultDiv.innerHTML = `Prime numbers from ${n} to ${m}: <strong>${primess.join(
      ", "
    )}</strong>`;
  } else {
    resultDiv.innerHTML = `There are no prime numbers between ${n} and ${m}.`;
  }
}
