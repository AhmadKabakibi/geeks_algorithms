/* 
Complete the makeAnagram function in the editor below. It must return an integer representing the minimum total characters that must be deleted to make the strings anagrams.

makeAnagram has the following parameter(s):

a: a string
b: a string
Input Format

The first line contains a single string, . 
The second line contains a single string, .

Constraints
The strings  and  consist of lowercase English alphabetic letters ascii[a-z].
Output Format
Print a single integer denoting the number of characters you must delete to make the two strings anagrams of each other.

*/

/* 
First, I use the String.prototype.split() method to split the string into an array of characters.
I then determine the outer (or larger array) and inner (shorter) arrays.
I will keep track of my position within the outer array using outerIndex,
decrementing it after each iteration. While iterating from the end of the outer array 
I look for the same character in the inner array. If the character exists then I remove the character
from both the outer and inner arrays.
The while-loop continues until either array is empty (has a length of 0) or the outerIndex is 0
*/
const makeAnagrams = (word1, word2) => { 
  word1 = word1.split("");
  word2 = word2.split("");

  if (word1.length > word2.length) {
    var outer = word1;
    var inner = word2;
  } else {
    var outer = word2;
    var inner = word1;
  }

  var outerIndex = outer.length-1;
  while (inner.length > 0 && outer.length > 0 && outerIndex >= 0) {
    let innerIndex = inner.indexOf(outer[outerIndex]);
    if (innerIndex !== -1) {
      outer.splice(outerIndex, 1);
      inner.splice(innerIndex, 1);
    }
    --outerIndex;
  }

  return outer.length + inner.length;
}


  function getDeleteCountUsingDestructive() {
    let word1 = getSortedArrayofChars(a);
    let word2 = getSortedArrayofChars(b);
  
    var letters = [];
    while (word1.length > 0 || word2.length > 0) {
      //check if word1 array is empty
      if (word1.length === 0) {
        letters.push(word2.shift());
        continue;
      }
  
      //check if word2 array is empty
      if (word2[0] === undefined) {
        letters.push(word1.shift());
        continue;
      }
  
      //shift first element based on ascii comparison
      if (word1[0] < word2[0]) {
        letters.push(word1.shift());
      } else if (word1[0] > word2[0]) {
        letters.push(word2.shift());
      } else {
        word1.shift();
        word2.shift();
      }
    }
  
    return letters.length;
  }
  
  function getSortedArrayofChars(str) {
    //get the array of characters using array.split()
    let arrayOfChars = str.split("");
  
    //sort the array alphabetically
    let alphabetically = (a, b) => {
      a = a.toLowerCase();
      b = b.toLowerCase();
      if (a < b) {
        return -1;
      } else if (a > b) {
        return 1;
      }
      return 0;
    }
    return arrayOfChars.sort(alphabetically);
  }

module.exports.makeAnagrams = makeAnagrams;