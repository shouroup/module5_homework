function countEvenOddZeroElements(arr) {
    let evenCount = 0;
    let oddCount = 0;
    let zeroCount = 0;

    for (const element of arr) {
        if (typeof element === 'number' && !isNaN(element)) {
            if (element === 0) {
                zeroCount++;
            } else if (element % 2 === 0) {
                evenCount++;
            } else {
                oddCount++;
            }
        }
    }

    console.log(`Количество чётных элементов: ${evenCount}`);
    console.log(`Количество нечётных элементов: ${oddCount}`);
    console.log(`Количество нулевых элементов: ${zeroCount}`);
}

const myArray = [2, 0, 'apple', 3, true, 8, null, 0, 5];

countEvenOddZeroElements(myArray);