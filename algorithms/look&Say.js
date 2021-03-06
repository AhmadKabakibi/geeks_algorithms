/* 
Implement a function that outputs the Look and Say sequence:
The first term is "1"
Second term is "11", generated by reading first term as "One 1" 
(There is one 1 in previous term)
Third term is "21", generated by reading second term as "Two 1"
Fourth term is "1211", generated by reading third term as "One 2 One 1" 
and so on
1 
11
21
1211
111221
312211
13112221
1113213211
31131211131221
13211311123113112211

we're going to solve this by splitting your logic into different modules.
So primarily you have 2 tasks -

For a give sequence of numbers(say [1,1,2]), you need to find the frequency distribution - something like - [1,2,2,1] which is the main logic.
Keep generating new distribution lists until a given number(say n).
So split them into 2 different functions and test them independently.
*/

/*
 This takes an input [1,1,2] and return is freq - [1,2,2,1]
 */
const findNumFreq = function (arr) {
    let freq_list = [];
    let val = arr[0];
    let freq = 1;
    for (i = 1; i < arr.length; i++) {
        let curr_val = arr[i];
        if (curr_val === val) {
            freq += 1;
        } else {
            //Add the values to the freq_list
            freq_list.push([val, freq]);
            val = curr_val;
            freq = 1;
        }
    }
    freq_list.push([val, freq]);

    return freq_list;
}


const lookNSay = function (n) {
    //Starting number
    let seed = 1;
    let antsArr = [
        [seed]
    ];

    for (let i = 0; i < n; i++) {
        let content = antsArr[i];
        let freq_list = findNumFreq(content);
        //freq_list give an array of [[ele, freq],[ele,freq]...]
        //Flatten so that it's of the form - [ele,freq,ele,freq]
        let freqListFlat = flattenList(freq_list);
        antsArr.push(freqListFlat);
    }
    return antsArr;
}

/**
This is used for flattening a list.
Eg - [[1],[1,1],[1,2]] => [1,1,1,1,2]
basically removes only first level nesting
**/
const flattenList = function (li) {

    let flat_li = [];
    li.forEach(
        function (val) {
            for (ind in val) {
                flat_li.push(val[ind]);
            }
        }
    );
    return flat_li;
}

module.exports.lookNSay = lookNSay;