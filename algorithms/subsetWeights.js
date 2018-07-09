/* 
find a subset from a set of integers such that their sum is within a certain range.

For example, if I have a group of people, whose weights are as follows.

let people:{
   jane:126,
   julia:112,
   charles:98,
   john:182,
   bob:213,
   edgar: 237,
   jay: 223,
   dan: 191,
   alex: 210,
   david: 196
}

*/

const subset = (people, min, max) => {
    let subsets = [];
    subsets[0] = '';

    for (let person in people) {
        for (let s = min - 1; s >= 0; --s) {
            if (s in subsets) {
                let sum = s + people[person];

                if (!(sum in subsets)) {
                    subsets[sum] = subsets[s] + ' ' + person;

                    if (sum >= min && sum <= max) {
                        return subsets[sum];
                    }
                }
            }
        }
    }

    return 'Not found';
}