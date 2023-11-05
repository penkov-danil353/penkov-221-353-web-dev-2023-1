function minDigit(n) {
    let res = 10;
    let temp;
    while (n != 0) {
        temp = n % 10;
        n = (n - temp) / 10;
        if (temp < res) {
            res = temp;
        }
    }
    return res;
}

console.log(minDigit(123));
console.log(minDigit(958));
console.log(minDigit(54329));