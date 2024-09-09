/**
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */function add(a, b) {
    return a + b;}
function subtract(a, b) {
    return a - b;}
function multiply(a, b) {
    return a * b;}
function divide(a, b) {
    if (b === 0) {
        return "Cannot divide by zero!";}
    return a / b;}
/**
 * @param {number} num
 * @returns {boolean}
 */
function isEven(num) {
    return num % 2 === 0;}
/**
 * @param {string} name
 * @returns {string}
 */
function sayHello(name) {
    return "Hello, " + name;
}
function isOdd(num) {
    return num % 2 !== 0;}
function factorial(n) {
    if (n === 0) {
        return 1;
    } return n * factorial(n - 1);
}
function reverseString(str) {
    return str.split("").reverse().join("");
}
function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
function findMax(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }return max;
}
function findMin(arr) {
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }return min;
}
function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }return sum;
}
function averageArray(arr) {
    return sumArray(arr) / arr.length;
}
function removeDuplicates(arr) {
    return [...new Set(arr)];
}
function findElement(arr, element) {
    return arr.includes(element);
}
function countOccurrences(arr, element) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === element) {
            count++;
        }
    } return count;
}
function sortArray(arr) {
    return arr.sort((a, b) => a - b);
}
function mergeArrays(arr1, arr2) {
    return arr1.concat(arr2);
}
function filterEvenNumbers(arr) {
    return arr.filter(isEven);
}
function filterOddNumbers(arr) {
    return arr.filter(isOdd);
}
function squareArray(arr) {
    return arr.map(num => num * num);
}
function cubeArray(arr) {
    return arr.map(num => num * num * num);
}
function convertToUpperCase(str) {
    return str.toUpperCase();
}
function convertToLowerCase(str) {
    return str.toLowerCase();
}
function checkPalindrome(str) {
    const reversed = reverseString(str);
    return str === reversed;
}
function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function fibonacci(n) {
    if (n <= 1) {
        return n;
    }return fibonacci(n - 1) + fibonacci(n - 2);
}
function swap(a, b) {
    let temp = a;
    a = b;
    b = temp;
    return [a, b];
}
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }} return true;
}
function countPrimes(arr) {
    return arr.filter(isPrime).length;
}
function flattenArray(arr) {
    return arr.reduce((flat, next) => flat.concat(next), []);
}
function findLongestWord(str) {
    let words = str.split(" ");
    let longest = "";
    for (let i = 0; i < words.length; i++) {
        if (words[i].length > longest.length) {
            longest = words[i];
        }
    }
    return longest;}
function countVowels(str) {
    const vowels = "aeiouAEIOU";
    let count = 0;
    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    } return count;}
function countConsonants(str) {
    const consonants = "bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ";
    let count = 0;
    for (let char of str) {
        if (consonants.includes(char)) {
            count++;
        }
    } return count;}
function isPalindromeNumber(num) {
    const str = num.toString();
    return checkPalindrome(str);}
function removeVowels(str) {
    return str.replace(/[aeiouAEIOU]/g, "");
}
function replaceSpaces(str, char) {
    return str.split(" ").join(char);
}
function generateRandomString(length) {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    for (let i = 0; i < length; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }return result;
}
function getUniqueCharacters(str) {
    return [...new Set(str)].join("");
}
function findFactors(num) {
    let factors = [];
    for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
            factors.push(i);
        }
    } return factors;
}
function findLCM(a, b) {
    let max = Math.max(a, b);
    while (true) {
        if (max % a === 0 && max % b === 0) {
            return max;
        } max++;
    }
}
function findGCD(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    } return a;
}
console.log(add(10, 5));
        console.log(subtract(10, 5));
        console.log(multiply(10, 5));
        console.log(divide(10, 2));
        console.log(isEven(4));
        console.log(isOdd(7));
        console.log(factorial(5));
        console.log(reverseString("JavaScript"));
        console.log(capitalizeFirstLetter("hello"));
        console.log(findMax([1, 2, 3, 4, 5]));
        console.log(findMin([1, 2, 3, 4, 5]));
        console.log(sumArray([1, 2, 3, 4, 5]));
        console.log(averageArray([1, 2, 3, 4, 5]));
        console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));
        console.log(findElement([1, 2, 3], 2));
        console.log(countOccurrences([1, 2, 3, 1, 2, 1], 1));
        console.log(sortArray([5, 3, 8, 1, 2]));
        console.log(mergeArrays([1, 2, 3], [4, 5, 6]));
        console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6]));
        console.log(filterOddNumbers([1, 2, 3, 4, 5, 6]));
        console.log(squareArray([1, 2, 3]));
        console.log(cubeArray([1, 2, 3]));