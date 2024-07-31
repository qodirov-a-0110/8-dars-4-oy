// 1 - masala

// function findLongestWord(words) {
//     if (words.length === 0) {
//         return null;
//     }
//     let longestWord = words[0];
//     for (let i = 1; i < words.length; i++) {
//         if (words[i].length > longestWord.length) {
//             longestWord = words[i];
//         }
//     }
//     return longestWord;
// }
// const wordsArray = ["apple", "banana", "cherry", "pineapple", "strawberry"];
// console.log(findLongestWord(wordsArray));

// 2 - masala

// function stringToElement(str) {
//     return str.join('');
// }
// let arr = ["salom",' ', `hello`, '!',];
// const result = stringToElement(arr);
// console.log(result);

// 3 - masala

// function string(str) {
//     return str.map(str => str.toUpperCase());
// }
// let arr = ['salom'];
// let res = string(arr);
// console.log(res);

// 4 - masala

// let arr = [1,2,3,4];
// function kopaytmaHisobla(arg) {
//     let p = 1;
//     for (let i of arg) {
//         p = p * i;
//     }
//     return p;
// }
// console.log(kopaytmaHisobla(arr));

// 6 - masala

// function reverseArray(array) {
//     return array.slice().reverse();
// }
// const originalArray = [1, 2, 3, 4, 5];
// const reversedArray = reverseArray(originalArray);
// console.log(reversedArray);

// 7 - masala

// function indeksQaytar(arg) {
//     for (let i = 0; i < arr.length; i++) {
//         newArr.push(i)
//     }
//     return newArr;
// }
// let arr = [1,2,3,4];
// let newArr = [];
// console.log(indeksQaytar(arr));

// 8 - masala

// function findIndexOfNumber(array, number) {
//   return array.indexOf(number);
// }
// const numbersArray = [10, 20, 30, 40, 50];
// const numberToFind = 30;
// const index = findIndexOfNumber(numbersArray, numberToFind);
// console.log(index);

// 9 - masala

// let arr = [1,2,3,4];
// let res = arr.map(function(value, index, a) {
//     return value + 1;
// })
// console.log(res);

// 11 - masala

// function repeatArray(array,times) {
//     let result = [];
//     for (let i = 0; i < times; i++) {
//         result = result.concat(array);;
//     }
//     return result;
// }
// let arr = [1,2,3,4];
// let repeatTimes = 3;
// let newArray = repeatArray(arr, repeatTimes);
// console.log(newArray);

// 12 - masala

// function convert(array) {
//   let newArr = [];
//   let res = arr.forEach(function (value) {
//     newArr.push(String(value));
//   });
//   return newArr;
// }
// let arr = [1, 2, 3, 4];
// let res = convert(arr);
// console.log(res);

// 13 - masala

// function juftIndeksQaytar(arg) {
//     for (const iterator of arg) {
//         if (iterator % 2 == 0) {
//             newArr.push(iterator);
//         }
//     }
//     return newArr;
// }
// let arr = [1,2,3,4,5,6,7,8,9];
// let newArr = [];
// let res = juftIndeksQaytar(arr);
// console.log(res);

// 14 - masala

// function toqSonHisobla(arg) {
//     let counter = 0;
//     for (const iterator of arg) {
//         if (iterator % 2 == 1) {
//             counter++;
//             newArr.push(iterator)
//         }
//     }
//     return counter;
// }
// let newArr = [];
// let arr = [1,2,3,4,5,6,7,8,9];
// console.log(toqSonHisobla(arr));

// 16 - masala

// function repeatElements(arr) {
//   if (arr.length === 0) {
//     return [];
//   }
//   let result = [];
//   arr.forEach((element) => {
//     result.push(element, element);
//   });
//   return result;
// }
// let numbers = [1, 2, 3, 4];
// let repeated = repeatElements(numbers);
// console.log(repeated);

// 17 - masala

// function shuffleArray(arr) {
//   let shuffled = arr.slice();
//   for (let i = shuffled.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1));
//     [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
//   }
//   return shuffled;
// }
// let numbers = [1, 2, 3, 4, 5];
// let shuffledNumbers = shuffleArray(numbers);
// console.log(shuffledNumbers);

// 18 - masala

// function arrToString(str) {
//     for (const iterator of str) {
//         newArr.push(iterator)
//     }
//     return newArr.join('')
// }
// let arr = [1,2,3,4,true];
// let newArr = [];
// console.log(arrToString(arr));

// 20 - masala

// function removeNonStrings(arr) {
//   return arr.filter((element) => typeof element === "string");
// }
// const originalArray = [1, "hello", 3, "world", true, "JavaScript", null];
// const filteredArray = removeNonStrings(originalArray);
// console.log(filteredArray);