function pluralizeRecords(n) {
    let res;
    let forms = ['запись', 'записи', 'записей'];
    let n_last2 = n % 100;
    let n_last1 = n % 10;

    if (n_last2 > 10 && n_last2 < 15) res = forms[2]; // 11-14 записей
    else if (n_last1 == 1) res = forms[0]; // 1 запись, 101 запись
    else if (n_last1 > 1 && n_last1 < 5) res = forms[1]; // 2-4 записи
    else res = forms[2]; // 0 записей, 5 записей, 10-19 записей

    return `В результате выполнения запроса было найдено ${n} ${res}`;
}

console.log(pluralizeRecords(0));
console.log(pluralizeRecords(2));
console.log(pluralizeRecords(12));
console.log(pluralizeRecords(101));
console.log(pluralizeRecords(146));