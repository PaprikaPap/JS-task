function pow(num, degree) {
    
    if (degree === 0) {
        return 1;
    } else if (degree === 1) {
        return num;
    } else if (degree < 0) {
        return 1 / pow(num, -degree);
    } else {
        return num * pow(num, degree - 1);
    }
}

let num = parseFloat(prompt("Введіть число:"));
let degree = parseInt(prompt("Введіть ступінь:"));

let result = pow(num, degree);

alert("Результат: " + result);