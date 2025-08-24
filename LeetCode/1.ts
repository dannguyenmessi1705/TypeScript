function gcdOfOddEvenSums(n: number): number {
  return gcd(sumOfDigits(n, true), sumOfDigits(n, false));
}

function sumOfDigits(n: number, isOdd: boolean): number {
  if (isOdd) return n * n;
  return n * (n + 1);
}

function gcd(a: number, b: number): number {
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

console.log(gcdOfOddEvenSums(4)); // Output: 2
