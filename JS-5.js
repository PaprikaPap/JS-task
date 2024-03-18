let array = [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];


let sum = 0;
let positiveCount = 0;
for (let i = 0; i < array.length; i++) {
    if (array[i] > 0) {
        sum += array[i];
        positiveCount++;
    }
}
alert(`Сума позитивних елементів: ${sum}, кількість позитивних елементів: ${positiveCount}`);


let min = array[0];
let minIndex = 0;
for (let i = 1; i < array.length; i++) {
    if (array[i] < min) {
        min = array[i];
        minIndex = i;
    }
}
alert(`Мінімальний елемент масиву: ${min}, його порядковий номер: ${minIndex}`);


let max = array[0];
let maxIndex = 0;
for (let i = 1; i < array.length; i++) {
    if (array[i] > max) {
        max = array[i];
        maxIndex = i;
    }
}
alert(`Максимальний елемент масиву: ${max}, його порядковий номер: ${maxIndex}`);


let negativeCount = 0;
for (let i = 0; i < array.length; i++) {
    if (array[i] < 0) {
        negativeCount++;
    }
}
alert(`Кількість негативних елементів: ${negativeCount}`);


let oddPositiveCount = 0;
for (let i = 0; i < array.length; i++) {
    if (array[i] > 0 && array[i] % 2 !== 0) {
        oddPositiveCount++;
    }
}
alert(`Кількість непарних позитивних елементів: ${oddPositiveCount}`);


let evenPositiveCount = 0;
for (let i = 0; i < array.length; i++) {
    if (array[i] > 0 && array[i] % 2 === 0) {
        evenPositiveCount++;
    }
}
alert(`Кількість парних позитивних елементів: ${evenPositiveCount}`);


let evenPositiveSum = 0;
for (let i = 0; i < array.length; i++) {
    if (array[i] > 0 && array[i] % 2 === 0) {
        evenPositiveSum += array[i];
    }
}
alert(`Сума парних позитивних елементів: ${evenPositiveSum}`);


let oddPositiveSum = 0;
for (let i = 0; i < array.length; i++) {
    if (array[i] > 0 && array[i] % 2 !== 0) {
        oddPositiveSum += array[i];
    }
}
alert(`Сума непарних позитивних елементів: ${oddPositiveSum}`);


let product = 1;
for (let i = 0; i < array.length; i++) {
    if (array[i] > 0) {
        product *= array[i];
    }
}
alert(`Добуток позитивних елементів: ${product}`);


let maxElement = Math.max(...array);
for (let i = 0; i < array.length; i++) {
    if (array[i] !== maxElement) {
        array[i] = 0;
    }
}
alert(`Найбільший серед елементів масиву: ${maxElement}, масив після обнулення: [${array}]`);