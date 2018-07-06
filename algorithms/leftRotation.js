//Array Left Rotation

const leftRotation = (array, steps) => {
    if(steps > array.length || array.length === 0) return;
    
    let j, k, temp;
      for(let i = 0; i < gcd(steps, array.length); i++) { 
        /* move i-th values of blocks */
        temp = array[i];
        j = i;
        while(true) {
          k = j + steps;
          if (k >= array.length)
            k = k - array.length;
          if (k == i) break;
          array[j] = array[k];
          j = k;
        }
        array[j] = temp;
      }
    return array;
}
 
/*
  Fuction to get gcd of two numbers
  greatest common divisor
*/
const gcd = (num1, num2) => {
   if(num2==0)
     return num1;
   else
     return gcd(num2, num1 % num2);
}


module.exports.leftRotation = leftRotation;