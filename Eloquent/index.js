// Chapter 2
// Program Structure
 
//1
for(let hashtag = "#"; hashtag.length <=7; hashtag+="#")
{
    console.log(hashtag);
}

//2
//version 1
for(let number = 1; number <=100; number++)
{
    switch(true)
    {
        case (number % 3 == 0):
            console.log("Fizz");
            break;
        case (number % 5 == 0):
            console.log("Buzz");
            break;
        default:
            console.log(number);
            break;
    }
}
//or
for(let number = 1; number <=100; number++)
{
  if(number % 3 == 0)
  {console.log("Fizz");}
  else if(number % 5 == 0)
  {console.log("Buzz");}
  else 
  {console.log(number);}
}
//version 2
for(let number = 1; number <=100; number++)
{
    switch(true)
    {
        case(number % 3 == 0 && number % 5 == 0):
            console.log("FizzBuzz");
            break;
        case (number % 3 == 0):
            console.log("Fizz");
            break;
        case (number % 5 == 0):
            console.log("Buzz");
            break;
        default:
            console.log(number);
            break;
    }
}
// or
for(let number = 1; number <=100; number++)
{
  if(number % 3 == 0 && number % 5 == 0)
  {console.log("FizzBuzz");}
  else if(number % 5 == 0)
  {console.log("Buzz");}
  else if(number % 3 == 0)
  {console.log("Fizz");}
  else 
  {console.log(number);}
}

//3
let chessboard = "";

 for(let x = 0; x <= 7; x++)
 { 
   for(let y = 0; y <= 7; y++)
 {
   if ((x + y) % 2 == 0)
 {
   chessboard += " ";
 }
  else
  {
    chessboard += "#";
  }
 }
   chessboard += "\n";
 }
console.log(chessboard);

//Chapter 3
//Functions

//1.Minimum
function min(firstNumber,secondNumber)
{
  return Math.min(firstNumber,secondNumber);
}

console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10

//2. Recursion
function isEven(number)
{
  if(number == 0)
  {
    return true;
  }
  else if (number == 1)
  {
    return false;
  }
  else 
  {
    return isEven(number - 2)
  }
}

console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → ??

//3.Bean counting
function countBs(word)
{
  let count = 0;
  for(let n = 0; n <= word.length - 1; n++)
  {
    if(word[n] == "B")
    {
      count++;
    }
  }
  return count;
}

console.log(countBs("BBC"));
// → 2

function countChar(word,char)
{
  let count = 0;
  for(let n = 0; n <= word.length - 1; n++)
  {
    if(word[n] == char)
    {
      count++;
    }
  }
  return count;
}
console.log(countChar("kakkerlak", "k"));
// → 4

//Chapter 4
//Data Structures: Objects and Arrays
//1.The sum of a range
function range(start,end)
{
  let sequence = [];
  for(let i = start; i <= end; i++)
  {
    sequence.push(i);
  }
  return sequence;
}

function sum(range)
{
  let total = 0;
  for(let number of range)
  {
    total += number;
  }
  return total;
}
function range(start,end,range)
{
  let sequence = [];
  for(let i = start; i <= end; i+= range)
  {
    sequence.push(i);
  }
  for(let i = start; i >= end; i+= range)
  {
    sequence.push(i);
  }
  return sequence;
}
console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55

//2.Reversing an array
function reverseArray(sequence)
{
  let reverseSequence = [];
  
  for(let i = sequence.length - 1; i >= 0; i--)
  {
    reverseSequence.push(sequence[i]);
  }
  return reverseSequence;
}
function reverseArrayInPlace(arrayValue)
{
  return reverseArray(arrayValue);
}
console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
let arrayValue = [1, 2, 3, 4, 5];
console.log(reverseArrayInPlace(arrayValue));
//console.log(arrayValue);
// → [5, 4, 3, 2, 1]

//3.A list
// Your code here.
function arrayToList(array)
{
  let list = null;
  
  for(i = array.length-1; i >= 0; i--)
  {
    list = {value:array[i], rest: list};
  }
  return list;
}

function listToArray(arrayToList)
{
  let array = [];
  
  for(let i =arrayToList; i; i = i.rest)
  {
    array.push(i.value);
  }
    return array;
}

function prepend(number,list)
{
  let newList = {number, rest: list};
  
  return newList;
}

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
//console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20

//4.Deep comparison
// Your code here.
function deepEqual(firstValue, secondValue)
{
  let firstValueProperties = Object.keys(firstValue);
  let secondValueProperties = Object.keys(secondValue);
  
  if(firstValue == "object" && firstValue != null && secondValue == "object" && secondValue != null)
  {
    return true;
  }
  else if(firstValue === secondValue)
      {
        return true;
      }
  if(firstValueProperties.length == secondValueProperties.length)
      {
        return true;
      }
      else 
      {
        return false;
      }
    
 }

let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true

//Chapter 5
//1.Flattening
let arrays = [[1, 2, 3], [4, 5], [6]];

function Flatten(arrays)
{
  return arrays.reduce(function(firstArray,secondArray) {return firstArray.concat(secondArray)},[]);
}

console.log(Flatten(arrays))
// → [1, 2, 3, 4, 5, 6]


//2.Your own loop
function loop(currentValue, test, update, logFunction)
{
  for (let value = currentValue; test(value); value = update(value))
  {
    logFunction(value);
  }
}

loop(3, n => n > 0, n => n - 1, console.log);
// → 3
// → 2
// → 1

//3.Everything
function every(array, test) {
  // Your code here.
  for(let number in array)
  {
    if(!test(number))
    {
      return false;
    }
    else
    {
      return true;
    }
  }
}
function every(array, test)
{
  return !array.some(number => !test(number));
}
console.log(every([1, 3, 5], n => n < 10));
// → true
console.log(every([2, 4, 16], n => n < 10));
// → false
console.log(every([], n => n < 10));
// → true