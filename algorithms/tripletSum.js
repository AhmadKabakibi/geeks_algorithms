/* 
    Question: Determine if any 3 integers in an array sum to 0.

    Note: The following solutions assumes that repetitions 
    (i.e. choosing the same array element more than once) are *allowed*, 
    so the array [-5,1,10] contains a zero sum (-5-5+10) and so does [0] (0+0+0).

    [4, 2, -1, 1, -5, 6, -4] = True  

    1. Sort all element of array
    2. Run loop from i=0 to n-2.
        Initialize two index variables l=i+1 and r=n-1
    4. while (l < r) 
        Check sum of arr[i], arr[l], arr[r] is
        zero or not if sum is zero then print the
        triplet and do l++ and r--.
    5. If sum is less than zero then l++
    6. If sum is greater than zero then r--
    7. If not exist in array then print not found.
*/

const tripletSumZero = (array) => {
    let found = false;
    array = array.sort();

    for (let i = 0; i < array.length - 1; i++) {
        //initialize left and right
        let left = i + 1;
        let right = array.length - 1;
        let x = array[i];
        while (left < right) {
            if (x + array[left] + array[right] === 0) {
                //console.log("[", x, array[l], array[r], "]");
                left++;
                right--;
                found = true;
            } else if (x + array[left] + array[right] < 0) {
                //if sum is less than zero than decrement in the left side 
                left++;
            } else {
                //if sum is greater than zero than decrement in the right side 
                right--;
            }
        }
        return found;
    }
}

/* 

1) Sort the input array.
2) Fix the first element as A[i] where i is from 0 to array size – 2. 
After fixing the first element of triplet, find the other two elements using method 1 of this post.

*/
const tripletSumValue = (array, sum) => {
    let left;
    let right;
    array = array.sort();

    for (let i = 0; i < array.length - 2; i++) {
        // To find the other two elements, start two index
        // variables from two corners of the array and move
        // them toward each other

        // index of the first element in the remaining elements
        left = i + 1;
        //index of the last element
        right = array.length - 1;
        while (left < right) {
            if (array[i] + array[left] + array[right] === sum) {
                return true;
            } else if (array[i] + array[left] + array[right] < sum) {
                //if sum is less than zero than decrement in the left side 
                left++;
            } else {
                //if sum is greater than zero than decrement in the right side 
                right--;
            }
        }
        //if we reach here, then no triplet was found
        return false;
    }
}

module.exports.tripletSumZero = tripletSumZero;
module.exports.tripletSumValue = tripletSumValue;