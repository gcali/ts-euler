export function gcd(a: number, b: number): number {
  let t = 0;
  if (a < b) {
      t = b;
      b = a;
      a = t;
  }
//   a < b && (t = b, b = a, a = t); // swap them if a < b
  t = a % b;
  return t ? gcd(b, t) : b;
}

export function lcm(a: number, b: number) {
  return a / gcd(a, b) * b;
}