function isPalindrome(word) {
  // Write your algorithm here
  //let wordArray=word.split("")
  //let splittedWord=wordArray.reverse()
  //let palindrome=splittedWord.join("")
  let palindrome=word.split("").reverse().join("")
  if(word===palindrome){
    return true
  }
  else{
    return false
  }
}

/* 
  Add your pseudocode here
  Our function takes one argument tha t is a string
  If the word is the same as the word in reverse, I should return true.

 
*/

/*
  Add written explanation of your solution here
   Declared a variable palindrome which stores the value for the palindrome word after:
  splitting that is changing the word from string to an array
  reversing which reverses the letters in the array
  joining which joins the reversed array to a word 
  The if statement compares the reversed array with initial word and if its a palindrome it return true otherwise 
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
