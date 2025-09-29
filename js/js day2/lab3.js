// 1. Convert the string "258.90" to: (a) integer, (b) floating number. Store in two variables.


// var x = "258.90";
// floatNum = Number.parseFloat(x);
// integerNum = Number.parseInt(x);
// console.log(floatNum);
// console.log(integerNum);

// console.log("----------------------------");
//2. Format the number 7.45678 to exactly 2 decimal places (string) then convert it back to a number.


// var y = "7.45678";
// numY = y.slice(0,3);
// console.log(numY);
// Number(numY);
// console.log(numY);
// console.log("----------------------------");

//3. Check if the value 'abc' is NaN. Also show a case where isNaN returns false for a non-number.


// console.log(Number.isNaN('abc'));
// console.log(Number.isNaN(undefined));

// 4. Floating point: Show that (0.1 + 0.2) != 0.3. Produce a corrected decimal string with exactly 1 decimal place using toFixed.


// var sum = 0.1+0.3;
// console.log(sum.toFixed(1));

// console.log("----------------------------");
// 5. Write a function to safely parse a string that may contain trailing text (e.g. "120px") returning the integer part or null if it starts with non-digit.


// function ParsingInt(str) {
//   var num = parseInt(str);
//    if (!isNaN(num) && isFinite(num)) {
//     return num; 
//   }
// }

// // console.log("----------------------------");
// 6. Implement isFiniteNumber(value) that returns true only for finite numeric values (reject numeric strings, Infinity, NaN, null, etc.) WITHOUT using Number.isFinite. Provide 4 passing and 4 failing test examples (comments).


// function isFiniteNumber(value) {
//   return typeof value === "number" ;
// }

// // console.log("----------------------------");
// 7. Remove leading and trailing spaces from the string "   hello world  ".


// var str = "   hello world  ";
// var res = str.trim();
// console.log(res);

// console.log("----------------------------");
// 8. Get the substring "script" from "javascript" using two different methods (slice + substring).


// var str = "javascript";
// console.log(str.substring(4,10));
// console.log(z.slice(4,10));

// console.log("----------------------------");
// 9. Count how many times the letter 'a' appears in "Banana Mania" (case-insensitive).


// function letterCounter(str , char){
//     var count = 0;
//     for(var i=0 ; i<str.length;i++){
        
//         if(str[i] ==char){
//             count++;
//         }
//     }
//     return count;
// }
// console.log(letterCounter("Banana Mania" , "a"));

// // console.log("----------------------------");
//10. Write a function reverseString(s) without using array reverse (iterate backwards).


// function reverseArr(str){
//     var arr = [];
//     for(var i=0 ; i<str.length;i++){
//        arr[i]= str[str.length - 1 - i] ;
//     }
//     return arr;
// }
// console.log(reverseArr("hello world"));

// console.log("-------------------- --------");
// 11. Write a function capitalizeWords(sentence) that turns "hello there friend" into "Hello There Friend".


// function sentenceCaptalize(str){
//     return String(str).toUpperCase();
// }
// console.log(sentenceCaptalize("hello world"));

// console.log("----------------------------");
// 12. Extract the domain (without protocol and path) from a URL string like "https://example.com/path/to/page" (result: example.com) using indexOf + slice.


// function getDomain(url) {
// var start = url.indexOf("www.") ;
// var end = url.indexOf("/", start);
// return url.slice(start, end );}
// console.log(getDomain("http://www.example.com/path/to/resource"));

// console.log("----------------------------");
// 13. Implement a simple substring search function naiveIndexOf(haystack, needle) that returns first index or -1 (do not call built-in indexOf inside the loop).


// function naiveIndexOf(haystack, needle) {
//    if (needle === "") return 0;   
//    for (var i = 0; i <= haystack.length - needle.length; i++) {
//        var match = true;
//        for (var j = 0; j < needle.length; j++) {
//            if (haystack[i + j] !== needle[j]) {
//                match = false;
//                break;
//            }
//        }
//        if (match) return i;
//    }
//    return -1;
// }
// console.log(naiveIndexOf("hello world", "world"));

// console.log("----------------------------");
// 14. Buggy code: var s = 'hello'; if (s.toUpperCase = 'HELLO') { console.log('match'); }  // Fix and explain issue.


// var s = 'hello';
//  if (s.toUpperCase() === 'HELLO') { 
//     console.log('match'); }
// it should be s.toUpperCase() === 'HELLO' not s.toUpperCase = 'hello'

// console.log("----------------------------");
// 15. Create an array of the numbers 1..5, then push 6 and unshift 0.


// var numArr = [1, 2, 3, 4, 5];
// numArr.push(6);
// numArr.unshift(0);
// console.log(numArr); 

// console.log("----------------------------");
// 16. Remove the last element and store it. Remove the first element and store it.


// var numArr = [1, 2, 3, 4, 5];
// numArr.push(6);
// numArr.unshift(0);
// var lastElement =numArr.pop();
// var firstElement = numArr.shift();
// console.log(numArr);
// console.log("Last Element: " + lastElement);
// console.log("First Element: " + firstElement);

// console.log("----------------------------");
//17. Use slice to copy the first 3 elements of [10,20,30,40,50] into a new array.


// var arr1 = [10,20,30,40,50];
// arr2= arr1.slice(0,3);
// console.log(arr1);
// console.log(arr2);  

// console.log("----------------------------");
// 18. Use splice on [1,2,3,4,5] to remove 3 and 4 and insert 'a','b'. Result should be [1,2,'a','b',5].


// var arr1 = [1,2,3,4,5];
// arr1.splice(2,2,'a','b');
// console.log(arr1);

// console.log("----------------------------");
// 19. Demonstrate the difference between slice and splice on the same starting array (show original after each).


// var arr1 = [1,2,3,4,5];
// var sliced = arr1.slice(1, 3);
// console.log(sliced); // [2,3]
// console.log(arr1); // [1,2,3,4,5] (unchanged)

// var spliced = arr1.splice(1, 2);
// console.log(spliced); // [2,3]
// console.log(arr1); // [1,4,5] (modified)

// console.log("----------------------------");
//20. Create a sparse array by assigning index 7 on a fresh [] then log length.


// var arr = [];
// arr[7] = 1;
// console.log(arr.length);

// console.log("----------------------------");
// 21. Write a function compact(array) that returns a new array without falsy values (manual loop, no filter).


// function nonFalsyArray(arr){
//     var result = [];
//     for (var i = 0; i < arr.length; i++) {
//         if (arr[i] !== null && arr[i] !== undefined && arr[i] !== false && arr[i] !== 0 && arr[i] !== "" && !Number.isNaN(arr[i])) {
//             result.push(arr[i]);
//         }
//     }
//     return result;
// }
// console.log(nonFalsyArray([1, 0, false, null, undefined, "hello", NaN, 42, "", true]));  

// console.log("----------------------------");
// 22. Implement a manual array clone deepClone1D(a) for a 1D array without using slice/concat .

// function deepClone1D(arr) {
//    var cloned = [];
//    for (var i = 0; i < arr.length; i++) {
//        cloned[i] = arr[i];
//    }
//    return cloned;
// }
// var original = [1,2,3,4,5];
// var cloned = deepClone1D(original);
// console.log(cloned); 
// cloned[0] = 10;
// console.log(original); 
// console.log(cloned); 

// // console.log("----------------------------");
// 23. Map [1,2,3] to their squares using map.

// var arr1 = [1,2,3];
// var squares = arr1.map(function(arr){
//     return arr*arr;
// });
// console.log(squares);

// // console.log("----------------------------");
// 24. Filter [5,10,15,20] to keep values >= 12.

// var arr1 = [10,11,12,13];
// var result = arr1.filter(function(arr){
//     return arr>=12;
// });
// console.log(result);

// console.log("----------------------------");
// 25. Reduce [2,4,6] to product.


// var arr1 = [2,4,6];
// var product = arr1.reduce(function(acc, curr) {
//    return acc * curr;
// });
// console.log(product);

// console.log("----------------------------");

// 26. Implement arraySum(a) using reduce; then implement arraySumLoop(a) using a for loop. Confirm outputs equal.

// function arraySum(a) {
//    return a.reduce(function(acc, curr) {
//        return acc + curr;
//    }, 0);
// }

// function arraySumLoop(a) {
//    var sum = 0;
//    for (var i = 0; i < a.length; i++) {
//        sum += a[i];
//    }
//    return sum;
// }

// var arr = [1,2,3,4,5];
// console.log(arraySum(arr)); 
// console.log(arraySumLoop(arr)); 
// console.log(arraySum(arr) === arraySumLoop(arr)); 

// console.log("----------------------------");
// 27. Given ['Ali','Sara','Kareem'] produce ['A','S','K'] (first letters) without using map (use for loop).


// var names = ['Ali','Sara','Kareem'];
// var slicedNames = [];
// for( var i=0; i<names.length;i++){
    
//     slicedNames[i]=names[i].slice(0,1);
// }
// console.log(slicedNames);

// console.log("----------------------------");
// 28. Implement unique(a) returning new array with duplicates removed (no ES6 Set). Complexity target: O(n^2) acceptable; comment how to improve.


// function unique(a) {
//    var result = [];
//    for (var i = 0; i < a.length; i++) {
//        var found = false;
//        for (var j = 0; j < result.length; j++) {
//            if (a[i] === result[j]) {
//                found = true;
//                break;
//            }
//        }
//        if (!found) {
//            result.push(a[i]);
//        }
//    }
//    return result;
// }

// var arr = [1,2,2,3,1,4,3];
// console.log(unique(arr)); // [1,2,3,4]

// To improve to O(n): use object as hash map to track seen values

//console.log("----------------------------");
// 29. Flatten one level: flatten1([1,[2,3],[4],5]) => [1,2,3,4,5] without using concat inside a loop (manual pushing and detection of Array).


// function flatten1(arr) {
//    var result = [];
//    for (var i = 0; i < arr.length; i++) {
//        if (Array.isArray(arr[i])) {
//            for (var j = 0; j < arr[i].length; j++) {
//                result.push(arr[i][j]);
//            }
//        } else {
//            result.push(arr[i]);
//        }
//    }
//    return result;
// }
// console.log(flatten1([1,[2,3],[4],5]));

//console.log("----------------------------");
//31. Create object person with name and age; add a new property city after creation.


// var person ={
//     name :"mostafa",
//     age :22 
// }
// person.city = "cairo";
// console.log(person);

//console.log("----------------------------");
// 32. Access a property via bracket notation with a dynamic key variable.


// var person ={
//     name :"mostafa",
//     age :22 ,
//     city : "cairo"
// }
// var key = "name";
// console.log(person[key]);

//console.log("----------------------------");
// 33. Write function countKeys(obj) returning number of own enumerable properties (use for-in).


// function countKeys(obj){
//     var count = 0;
//     for (var key in obj){
//         if(obj.hasOwnProperty(key)){
//             count++;
//         }
//     }
//     return count;
// }
// var person = {
//         name: "mostafa",
//         age: 22,
//         city: "cairo"
//     };

// console.log(countKeys(person));

//console.log("----------------------------");
// 39. List (as comments) 5 different values that coerce to false in ES5.


// false null  undefined 0 NaN ""

//40. safeToBoolean(v): return true only if v is strictly true, 'true', 1, or '1'; else false.


// function safeToBoolean(v){
//     return v=== 1 ||v=== true || v === "true" || v === "1";
// };
// console.log(safeToBoolean(1)); 
// console.log(safeToBoolean(true));

//console.log("----------------------------");
//41. Create a Date for Jan 1, 2025 00:00 local.


// var date = new Date(2025, 0, 1, 0, 0, 0);
// console.log(date);

//console.log("----------------------------");
// 42. Get the current year from new Date().


// var currentYear = new Date().getFullYear();
// console.log(currentYear);

//console.log("----------------------------");
// 43. Write function daysBetween(d1, d2) returning whole day difference (ignore DST intricacies; ms/(1000*60*60*24)).


// function daysBetween(d1, d2) {
//    var timeDiff = Math.abs(d2.getTime() - d1.getTime());
//    var daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
//    return daysDiff;
// }

// var date1 = new Date(2025, 0, 1); 
// var date2 = new Date(2025, 0, 11); 
// console.log(daysBetween(date1, date2));

//console.log("----------------------------");
// 44. Generate a random integer 1..100.


// var randomInt = Math.floor(Math.random() * 100) +1;
// console.log(randomInt);

//console.log("----------------------------");
// 45. Round 4.567 to nearest integer, round down, and round up (three results).


// var num = 4.567;
// console.log(Math.round(num)); 
// console.log(Math.floor(num)); 
// console.log(Math.ceil(num));  

//console.log("----------------------------");
// 46. randomIntArray(n, min, max): return array of length n with random ints (loop + push).


// function randomIntArray(n, min, max) {
//    var arr = [];
//    for (var i = 0; i < n; i++) {
//        var randomInt = Math.floor(Math.random() * (max - min + 1)) + min;
//        arr.push(randomInt);
//    }
//    return arr;
// }

// console.log(randomIntArray(5, 1, 10));

//console.log("----------------------------");
// 56. parsePriceList(str): Given "Apple:2.50;Orange:1.75;Banana:3" return object {Apple:2.5, Orange:1.75, Banana:3} (strings to numbers).


// function parsePriceList(str) {
//    var result = {};
//    var items = str.split(';');
//    for (var i = 0; i < items.length; i++) {
//        var parts = items[i].split(':');
//        var name = parts[0];
//        var price = parseFloat(parts[1]);
//        result[name] = price;
//    }
//    return result;
// }

// console.log(parsePriceList("Apple:2.50;Orange:1.75;Banana:3"));

//console.log("----------------------------");
// 57. filterAndSortNumbers(mixedArray): keep only finite numbers then sort ascending (provide sample input and output). Use a numeric compare fn.


// function filterAndSortNumbers(mixedArray) {
//    var numbers = [];
//    for (var i = 0; i < mixedArray.length; i++) {
//        if (typeof mixedArray[i] === 'number' && isFinite(mixedArray[i])) {
//            numbers.push(mixedArray[i]);
//        }
//    }
//    return numbers.sort(function(a, b) {
//        return a - b;
//    });
// }

// var mixed = [3, 'hello', 1, null, 7, NaN, Infinity, 2, undefined, 5];