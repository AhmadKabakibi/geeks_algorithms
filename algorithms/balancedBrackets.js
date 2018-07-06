// On each input string, process it using the balance checker
const balancedBrackets = (expression) => {
    if (expression.length <= 1) {
        return false
    }

    chars = expression.split('');
    let stack = [];

    for (let i = 0;  i < chars.length; i++) {

        let currentBracket = chars[i];

        //BRACKETS.hasOwnProperty(currentBracket)
        if(currentBracket in BRACKETS) {
            // opening bracket
            // push closing bracket on stack
            stack.push(BRACKETS[currentBracket]);
        } else {
            // closing bracket
            // check if it matches the last on the stack
            if(stack.pop() !== currentBracket) {
                return false;
            }
        }
    }

    return stack.length === 0;
};

const BRACKETS = {
    '(': ')',
    '[': ']',
    '{': '}'
}

//console.log(balancedBrackets(expression) ? 'YES' : 'NO');

module.exports.balancedBrackets = balancedBrackets;