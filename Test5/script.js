const array = [1,2,3,4,5,6,7,8,9];
const arrayEvenNumbers = [];
const oddEvenNumbers = [];

function evenNumbers() {
    for (let i = 1; i < array.length; i++) {
        if (array[i]%2 ===0) {
           arrayEvenNumbers.push(array[i])
        }else {
            oddEvenNumbers.push(array[i])
        }
    }
}

evenNumbers()
console.log(arrayEvenNumbers);
console.log(oddEvenNumbers);