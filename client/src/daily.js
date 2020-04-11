// Write code to create a function that accepts an array of unique numbers
// IF any two numbers in the array can be multiplied into 20, return true
// else return false


const arr = [ 3, 4  , 7, 9, 6.666666666666667];



const multiplyInto20 = array => {
    const numMap = {};
    for(let i = 0; i < array.length; i++) {
        const currentNum = arr[i];
        const neededNumber = 20 / currentNum;
        console.log(numMap);
        if(numMap[neededNumber]) {
            return true;
        } else {
            numMap[neededNumber] = true;
        }
    }
    return false;
}




console.log(multiplyInto20(arr)) // true    because 4 * 5 === 20