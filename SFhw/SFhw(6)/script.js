function areAllElementsEqual(arr) {
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] !== arr[0]) {
            return false;
        }
    }
    return true;
}

const myArray = [5, 5, 5, 5, 5];
const result = areAllElementsEqual(myArray);
console.log(result);