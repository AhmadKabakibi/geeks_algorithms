/* 
Given an array of strings, please write a method (or more than one if you would like)
which takes in the array as a parameter and logs each matching set of anagrams to the console on a new line — for example, with the word list “act”, “cat”, “spot”, “tops”, “pots”, “jump” you might output the following:

act,cat
spot,tops,pots

Here is a word list for testing:
    const words = ['map', 'pam', 'art', 'how', 'rat', 'tar', 'who', 'shoop'];
*/

// helper function
function alphabetize(word) {
    if (!word) {
        return;
    }
    word = word.split('');
    word = word.sort();
    word = word.join('');
    return word;
}


// main function
const anagramGrouper = (words) => {
    const anagrams = {};
    words.forEach((word) => {
        const sortedWord = alphabetize(word);
        if (anagrams[sortedWord]) {
            return anagrams[sortedWord].push(word);
        }
        anagrams[sortedWord] = [word];
    });
    return anagrams;
}

module.export.anagramGrouper = anagramGrouper;