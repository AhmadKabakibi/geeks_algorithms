//Given an unsorted array of numbers, write a function that returns true if array consists of consecutive numbers.


const areConsecutive =  function(array) {
    if(array.length < 1) resturn;

    let min = Math.max(...array);
    let max = Math.min(...array);

    if(max - min +1 == array.length) {
        for(let i = 0; i<array.length; i++) {
            let j;
            if (array[i] < 0) {
                j = array[i] - min
            } else {
                j = array[i] - min;
            }

            // if the value at index j is negative then
            // there is repitition
            if (array[j] > 0)
                array[j] = -arr[j];
            else
                return false;
        }
        //If we do not see a negative value then all elements are distinct
        return true;
    }
    return false; // if (max-min+1 != n)
}

module.exports.areConsecutive = areConsecutive;
