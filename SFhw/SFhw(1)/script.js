const userInput = prompt("Введите значение:");
const numberValue = +userInput;

if (!isNaN(numberValue) && typeof numberValue === 'number') {
    if (Number.isInteger(numberValue)) {
        if (numberValue % 2 === 0) {
            console.log("Чётное число");
        } else {
            console.log("Нечётное число");
        }
    } else {
        console.log("Введено дробное число");
    }
} else {
    console.log("Упс, кажется, вы ошиблись");
}