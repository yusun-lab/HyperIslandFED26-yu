// 1. Function to reverse a string without using reverse()
function reverseString(str) {
  let reversedStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }
  return reversedStr;
}
console.log(reverseString("hello")); // Output: "olleh"
console.log(reverseString("world")); // Output: "dlrow"
console.log(reverseString("12345")); // Output: "54321"

//----------------------------------------------------------------
// 2. Function to reverse a number
function reverseNumber(num) {
  const reversedString = String(num).split("").reverse().join("");
  return Number(reversedString);
}
console.log(reverseNumber(12345)); // Output: 54321
console.log(reverseNumber(98765)); // Output: 56789
console.log(reverseNumber(101010)); // Output: 10101

//----------------------------------------------------------------
// 3. Destructure the object to get name and age
const { name, info: {age} } = {
  name: "John",
  info: {
    age: 30,
    city: "New York",
    job: "Developer",
  },
};
console.log(name); // Output: "John"
console.log(age); // Output: 30

//----------------------------------------------------------------
// 4. Destructure the array to get first, second, and rest elements
const [first, second, ...rest] = ["apple", "banana", "cherry", "dates", "elderberry", "fig"];
console.log(first); // Output: "apple"
console.log(second); // Output: "banana"
console.log(rest); // Output: ["cherry", "dates", "elderberry", "fig"]

//----------------------------------------------------------------
// 5. Function to check if a string is a palindrome
function isPalindrome(str) {
  const normalizedString = str.replace(/\s+/g, "").toLowerCase();
  const reversedString = normalizedString.split("").reverse().join("");
  return normalizedString === reversedString;
} 
console.log(isPalindrome("madam")); // Output: true
console.log(isPalindrome("hello")); // Output: false
console.log(isPalindrome("12321")); // Output: true
console.log(isPalindrome("race car")); // Output: true
console.log(isPalindrome("coding")); // Output: false
