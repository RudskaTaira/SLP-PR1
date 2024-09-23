/**
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function add(a, b) {
    return a + b;
}

/**
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function subtract(a, b) {
    return a - b;
}

/**
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function multiply(a, b) {
    return a * b;
}

/**
 * @param {number} a
 * @param {number} b
 * @returns {number|string}
 */
function divide(a, b) {
    if (b === 0) {
        return "Cannot divide by zero!";
    }
    return a / b;
}

/**
 * @param {number} num
 * @returns {boolean}
 */
function isEven(num) {
    return num % 2 === 0;
}

/**
 * @param {string} name
 * @returns {string}
 */
function sayHello(name) {
    return "Hello, " + name;
}

/**
 * @param {number} num
 * @returns {boolean}
 */
function isOdd(num) {
    return num % 2 !== 0;
}

/**
 * @param {number} n
 * @returns {number}
 */
function factorial(n) {
    if (n === 0) {
        return 1;
    }
    return n * factorial(n - 1);
}

/**
 * @param {string} str
 * @returns {string}
 */
function reverseString(str) {
    return str.split("").reverse().join("");
}

/**
 * @param {string} str
 * @returns {string}
 */
function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * @param {number[]} arr
 * @returns {number}
 */
function findMax(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

/**
 * @param {number[]} arr
 * @returns {number}
 */
function findMin(arr) {
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}

/**
 * @param {number[]} arr
 * @returns {number}
 */
function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

/**
 * @param {number[]} arr
 * @returns {number}
 */
function averageArray(arr) {
    return sumArray(arr) / arr.length;
}

/**
 * @param {number[]} arr
 * @returns {number[]}
 */
function removeDuplicates(arr) {
    return [...new Set(arr)];
}

/**
 * @param {number[]} arr
 * @param {number} element
 * @returns {boolean}
 */
function findElement(arr, element) {
    return arr.includes(element);
}

/**
 * @param {number[]} arr
 * @param {number} element
 * @returns {number}
 */
function countOccurrences(arr, element) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === element) {
            count++;
        }
    }
    return count;
}

/**
 * @param {number[]} arr
 * @returns {number[]}
 */
function sortArray(arr) {
    return arr.sort((a, b) => a - b);
}

/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @returns {number[]}
 */
function mergeArrays(arr1, arr2) {
    return arr1.concat(arr2);
}

/**
 * @param {number[]} arr
 * @returns {number[]}
 */
function filterEvenNumbers(arr) {
    return arr.filter(isEven);
}

/**
 * @param {number[]} arr
 * @returns {number[]}
 */
function filterOddNumbers(arr) {
    return arr.filter(isOdd);
}

/**
 * @param {number[]} arr
 * @returns {number[]}
 */
function squareArray(arr) {
    return arr.map(num => num * num);
}

/**
 * @param {number[]} arr
 * @returns {number[]}
 */
function cubeArray(arr) {
    return arr.map(num => num * num * num);
}

/**
 * @param {string} str
 * @returns {string}
 */
function convertToUpperCase(str) {
    return str.toUpperCase();
}

/**
 * @param {string} str
 * @returns {string}
 */
function convertToLowerCase(str) {
    return str.toLowerCase();
}

/**
 * @param {string} str
 * @returns {boolean}
 */
function checkPalindrome(str) {
    const reversed = reverseString(str);
    return str === reversed;
}

/**
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */
function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * @param {number} n
 * @returns {number}
 */
function fibonacci(n) {
    if (n <= 1) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

/**
 * @param {number} a
 * @param {number} b
 * @returns {number[]}
 */
function swap(a, b) {
    let temp = a;
    a = b;
    b = temp;
    return [a, b];
}

/**
 * @param {number} num
 * @returns {boolean}
 */
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

/**
 * @param {number[]} arr
 * @returns {number}
 */
function countPrimes(arr) {
    return arr.filter(isPrime).length;
}

/**
 * @param {any[]} arr
 * @returns {any[]}
 */
function flattenArray(arr) {
    return arr.reduce((flat, next) => flat.concat(next), []);
}

/**
 * @param {string} str
 * @returns {string}
 */
function findLongestWord(str) {
    let words = str.split(" ");
    let longest = "";
    for (let i = 0; i < words.length; i++) {
        if (words[i].length > longest.length) {
            longest = words[i];
        }
    }
    return longest;
}

/**
 * @param {string} str
 * @returns {number}
 */
function countVowels(str) {
    const vowels = "aeiouAEIOU";
    let count = 0;
    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}

/**
 * @param {string} str
 * @returns {number}
 */
function countConsonants(str) {
    const consonants = "bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ";
    let count = 0;
    for (let char of str) {
        if (consonants.includes(char)) {
            count++;
        }
    }
    return count;
}

/**
 * @param {number} num
 * @returns {boolean}
 */
function isPalindromeNumber(num) {
    const str = num.toString();
    return checkPalindrome(str);
}

/**
 * @param {string} str
 * @returns {string}
 */
function removeVowels(str) {
    return str.replace(/[aeiouAEIOU]/g, "");
}

/**
 * @param {string} str
 * @param {string} char
 * @returns {string}
 */
function replaceSpaces(str, char) {
    return str.split(" ").join(char);
}

/**
 * @param {number} length
 * @returns {string}
 */
function generateRandomString(length) {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    for (let i = 0; i < length; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
}

/**
 * @param {string} str
 * @returns {string}
 */
function getUniqueCharacters(str) {
    return [...new Set(str)].join("");
}

/**
 * @param {number} num
 * @returns {number[]}
 */
function findFactors(num) {
    let factors = [];
    for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
            factors.push(i);
        }
    }
    return factors;
}

/**
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function findLCM(a, b) {
    let max = Math.max(a, b);
    while (true) {
        if (max % a === 0 && max % b === 0) {
            return max;
        }
        max++;
    }
}

/**
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function findGCD(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

// Testing the functions
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