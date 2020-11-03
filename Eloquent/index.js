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
