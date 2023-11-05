function compare(a, b) {
    /*
     -1 — первый аргумент должен идти перед вторым
      0 — значения равны, действие не требуется
      1 — первый аргумент должен идти после второго
    */
    if (typeof a === "number" && typeof b === "number") {
        if (a < b) {
            return -1;
        } else if (a > b) {
            return 1;
        } else {
            return 0;
        }
    } else {
        a = a.toString();
        b = b.toString();

        // цикл по символам строк, сравниваем UTF-16-значения
        for (let i = 0; i < Math.min(a.length, b.length); i++) {
            if (a.charCodeAt(i) < b.charCodeAt(i)) {
                return -1;
            } else if (a.charCodeAt(i) > b.charCodeAt(i)) {
                return 1;
            }
        }

        // случай, когда одна строка является подстрокой другой
        // более короткая строка должна стоять первее
        if (a.length < b.length) {
            return -1;
        } else if (a.length > b.length) {
            return 1;
        } else {
            return 0;
        }
    }
}


function getSortedArray(array, key) {
    // метод пузырька
    let n = array.length;
    let swapped;

    do {
        swapped = false;
        for (let i = 0; i < n - 1; i++) {
            let cmp = compare(array[i][key], array[i + 1][key]);
            if (cmp == 1) {
                // меняем элементы местами
                let temp = array[i];
                array[i] = array[i + 1];
                array[i + 1] = temp;
                swapped = true;
            }
            // в случае -1 элементы уже стоят по возрастанию
        }
    } while (swapped);

    return array;
}


// Пример работы функции.
let array = [{name: 'Макар', age: 20}, {name: 'Роберт', age: 32}, {name: 'Екатерина', age: 50}, {name: 'Оксана', age: 24}, {name: 'Святослав', age: 43}];
array = getSortedArray(array, 'age');
console.log(array); // [{name: 'Макар', age: 20}, {name: 'Оксана', age: 24}, {name: 'Роберт', age: 32}, {name: 'Святослав', age: 43}, {name: 'Екатерина', age: 50}];
array = getSortedArray(array, 'name');
console.log(array); // [{name: 'Екатерина', age: 50}, {name: 'Макар', age: 20}, {name: 'Оксана', age: 24}, {name: 'Роберт', age: 32}, {name: 'Святослав', age: 43}];