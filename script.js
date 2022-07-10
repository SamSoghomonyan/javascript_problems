// * 1) Write a function named makeQuestion, that takes three arguments: two operands and an 
// operator, and returns a string with the question "What is [oprd1] [opr] [oprd2]?".

// function operand(oper1,oper2,sinvol){
//     switch(sinvol){
//         case '+':  return oper1 + oper2;
//         case '-':  return oper1 - oper2;
//         case '/':  return oper1 / oper2;
//         case '*':  return oper1 * oper2;
//         default: return 'invalid opertator';
//     }
// }
// console.log(operand(12,14,"+"))
// * 2) Make an object assign 3 different keys to it by 3 different ways that we have learned;

// var obj = {
//     key1: value1,
//     key2: value2
// };

// obj.key3 = "value3";

// obj["key3"] = "value3";

// var getProperty = function (propertyName) {
//     return obj[propertyName];
// };
// getProperty("key1");
// getProperty("key2");
// getProperty("key3");

// * 3) Find the odd one out in the provided array.
 // All array elements are equal, except one. Your function must return this odd one out. ->
// *    ["a", "a", "b", "a"] -> // 'b';

// function Array(arr) {
//     let arrIndesZeron = arr[0]
//     let newArray = []
//     for(let i = 0 ; i<arr.length ; i++){
//         if(arrIndesZeron!==arr[i]){
//             newArray.push(arr[i])
//         }
//     }
//     if(newArray.length==1){
//         return newArray[0]
//     }
//     return arrIndesZeron

// }
// console.log(Array(["b", "a", "a", "a"]))

// let arr = [0,0,0,0,1,0,0];
// let res = arr.filter(x => arr.indexOf(x) === arr.lastIndexOf(x));
// console.log(res)

// * 4) Deduce the smallest and the largest number from 
// the supplied numeric array. Return an array containing these numbers, smallest number first.
// *    [14, 28, 3, 8, 2] -> [2, 28];

// function Array(arr){
//     let max = arr[0]
//     let min = arr[0]
//     let newArray = []
//     for(let i = 0 ; i<arr.length ; i++){
//         if(min>arr[i]){
//             min=arr[i]
//         }
//         if(max<arr[i]){
//             max=arr[i]
//         }
//     }
//     // newArray.push(min,max)
//     newArray[0]=min
//     newArray[1]=max
//     return newArray
// }
// console.log(Array([2,4,8,1,28]))

// 5) Write a function to separate a single array in to two separate arrays.
// *    The supplied array will only contain numeric values. Your function should output two arrays:
// *     one containing odd numbers, the other containing even numbers.

// function Array(arr){
//     let oodArrayNumbers = []
//     let evenArrayNumbers = []
//     for(let i = 0 ; i<arr.length ; i++){
//         if(arr[i]%2!==0){
//             oodArrayNumbers.push(arr[i])
//         }
//         if(arr[i]%2==0){
//             evenArrayNumbers.push(arr[i])
//         }
//     }
//     console.log(oodArrayNumbers,evenArrayNumbers)
//     return [oodArrayNumbers,evenArrayNumbers]
// }
// console.log(Array([12,14,15,57,27,84,5]))

// * 6) In this JavaScript array exercise, the supplied array may contain duplicate values. Write a function
// *    to return only unique values — values that only occur exactly one time within the provided array.
// ]]))
// *    [1, 1, 2, 3, 3, 4, 4, 5] -> [2, 5];

// function array(arr){
// 	let newArray = []
// 	for(let i = 0  ;i<arr.length ; i++){
// 		if(arr.indexOf(arr[i])==arr.lastIndexOf(arr[i]) && !newArray.includes(arr[i])){
// 		newArray.push(arr[i])
// 	}
// 	}
// 	return newArray
// }
// console.log(array([1, 1, 2, 3, 3, 4, 4, 5]))

// * 7) Your function must accept 2 arrays, then return the common words from each.
// *    arr1 ["dog", "cat", "parrot"] arr2 ["lizard", "rat", "cat"] -> ["cat"]

// function Array(arr1, arr2) {
//     let newArray = []
//     for (let i = 0; i < arr1.length; i++) {
//         for (let j = 0; j < arr2.length; j++) {
//             if (arr1[i] == arr2[j]) {
//                 newArray.push(arr1[i])
//             }
//         }
//     }
//     return newArray
// }
// console.log(Array(["dog", "cat", "parrot"], ["lizard", "rat", "cat"]))

// * 8) Write a function to accept two arrays. Does 
// the first array contain all elements represented in 
// the second array?
// *    arr1 ["monday", "tuesday"], arr2 ["tuesday"] -> false;

// function Array(arr1,arr2) {
//     let newArray = []
//     let arrayIndex = 0
//     for(let i = 0 ; i<arr1.length ; i++){
//         if(arr1[i]==arr2[arrayIndex]){
//             newArray.push(arr1[i])
//         }
//         arrayIndex++
//     }
//     if(newArray.length == arr1.length){
//         return true
//     }
//     return false
// }
// console.log(Array([1,2,1,4,1],[1,2,1,4,1]))


// 9) The supplied array will 
// contain both numeric and non-numeric characters.
// *    Return a new array where 
// all numeric values are positioned at the beginning of the array,
// *    ["b", 6, "a", "q", 7, 2] -> [2, 6, 7, "a", "b", "q"]

// function array(arr){
// 	let newArray = []
// 	let strArray = []
// 	let numbrArray = []
// 	for(let i = 0 ; i<arr.length ; i++){
// 		if(isNaN(arr[i])){
// 			strArray.push(arr[i])
// 		}else{
// 			numbrArray.push(arr[i])
// 		}
// 	}
// 	newArray.push(numbrArray,strArray)
// 	let array = newArray.flat()
// 	return array
// }
// console.log(array(["b", 6, "a", "q", 7, 2]))

// * 10) From the first array, construct a new array based on the indexes supplied.
// *     ["mon", "tue", "wed", "thur", "fri"] -> [1, 3, 4];

// function foo(arr,number){
//     let newArray = []
//     let arrayIndex = 0
//     for(let i = 0 ; i<number.length ; i++){
//         newArray.push(arr[number[i]])
//     }
//     return newArray
// }
// console.log(foo(["mon", "tue", "wed", "thur", "fri"], [1, 3, 4]))

// 11) This one is a classic. Simply 
// reverse the string without using reverse(). 'abcd' -> 'dcba';


// function string(str){
// 	let newString = ""
// 	for(let i = str.length-1 ; i>=0; i--){
// 		newString+=str[i]
// 	}
// 	return newString
// }
// console.log(string("sam"))