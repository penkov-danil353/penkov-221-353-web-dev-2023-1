function gcd(a, b) {
    while (a != 0 && b != 0) {
        if (a > b) {
            a = a % b;
        } else {
            b = b % a;
        }
    }
    return a + b;
}

console.log(gcd(100, 1000));
console.log(gcd(2628, 36));
console.log(gcd(494, 1235));