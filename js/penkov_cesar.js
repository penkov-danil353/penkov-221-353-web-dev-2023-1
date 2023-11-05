function cesar(str, shift, action) {
    const alphabet = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя';
    
    if (action === 'decode') {
        shift = -shift;
    }
    
    let result = "";
    for (let char of str) {
        let index = alphabet.indexOf(char);
        if (index !== -1) {
            let new_index = (index + shift) % alphabet.length;
            // при делении отрицательных чисел получается отрицательный остаток
            if (new_index < 0) new_index += alphabet.length;
            result += alphabet[new_index];
        } else {
            result += char;
        }
    }
    
    return result;
}

const message = "эзтыхз фзъзъз";
for (let i = 0; i <= 32; i++) {
    let res = cesar(message, i, 'decode');
    console.log(`${i} — ${res}`);
}
// правильный ответ при смещении 8, "хакуна матата"