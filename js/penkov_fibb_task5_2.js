let cache = {};

function fibb(n) {
    if (n in cache) {
        return cache[n];
    }

    if (n == 0) {
        cache[n] = 0;
    } else if (n == 1 || n == 2) {
        cache[n] = 1;
    } else {
        cache[n] = fibb(n - 1) + fibb(n - 2);
    }
	
    return cache[n];
}

console.log(fibb(10));
console.log(fibb(15));
console.log(fibb(100));