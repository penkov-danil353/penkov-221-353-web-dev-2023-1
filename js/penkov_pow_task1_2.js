function pow(x, n) {
    let res = x;
    for (let i = 1; i < n; i++) {
        res *= x;
    }
    return res;
}

console.log(pow(2, 5));
console.log(pow(3, 6));
console.log(pow(10, 3));