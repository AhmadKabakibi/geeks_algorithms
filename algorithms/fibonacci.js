const fibonacci = (num) => {
    let a = 1,
        b = 0,
        temp;

    while (num >= 0) {
        temp = a;
        a = a + b;
        b = temp;
        num--;
    }

    return b;
}



const fibonacciRec = (num) => {
    if (num <= 1) return 1;

    return fibonacci(num - 1) + fibonacci(num - 2);
}


const fibonacciDP = (num) => {
    let memo = [];

    if (memo[num]) return memo[num];
    if (num <= 1) return 1;

    return memo[num] = fibonacci(num - 1) + fibonacci(num - 2);
}