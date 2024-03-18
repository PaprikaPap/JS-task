let arr = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];
let sumPositive = 0;
let countPositive = 0;
let minElement = arr[0];
let minElementIndex = 0;
let maxElement = arr[0];
let maxElementIndex = 0;
let countNegative = 0;
let countOddPositive = 0;
let countEvenPositive = 0;
let sumEvenPositive = 0;
let sumOddPositive = 0;
let productPositive = 1;
let maxElementValue = -Infinity;

arr.forEach((element, index) => {
    if (element > 0) {
        sumPositive += element;
        countPositive++;
        productPositive *= element;
        if (element % 2 === 0) {
            countEvenPositive++;
            sumEvenPositive += element;
        } else {
            countOddPositive++;
            sumOddPositive += element;
        }
    } else {
        countNegative++;
    }

    if (element < minElement) {
        minElement = element;
        minElementIndex = index;
    }

    if (element > maxElement) {
        maxElement = element;
        maxElementIndex = index;
    }

    if (element > maxElementValue) {
        maxElementValue = element;
    }

    if (element < maxElementValue) {
        arr[index] = 0;
    }
});

alert(`Сума позитивних елементів: ${sumPositive}`);
alert(`Кількість позитивних елементів: ${countPositive}`);
alert(`Мінімальний елемент: ${minElement}, порядковий номер: ${minElementIndex}`);
alert(`Максимальний елемент: ${maxElement}, порядковий номер: ${maxElementIndex}`);
alert(`Кількість негативних елементів: ${countNegative}`);
alert(`Кількість непарних позитивних елементів: ${countOddPositive}`);
alert(`Кількість парних позитивних елементів: ${countEvenPositive}`);
alert(`Сума парних позитивних елементів: ${sumEvenPositive}`);
alert(`Сума непарних позитивних елементів: ${sumOddPositive}`);
alert(`Добуток позитивних елементів: ${productPositive}`);
alert(`Найбільший серед елементів масиву: ${maxElementValue}, решта елементів обнулені: ${arr}`);
