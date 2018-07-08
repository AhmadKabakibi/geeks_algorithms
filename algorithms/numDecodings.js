/* 
A message containing letters from A-Z is being encoded to numbers using the following mapping:

'A' -> 1
'B' -> 2
...
'Z' -> 26

Given a non-empty string containing only digits, determine the total number of ways to decode it.

Example 1:

Input: "12"
Output: 2
Explanation: It could be decoded as "AB" (1 2) or "L" (12).
Example 2:

Input: "226"
Output: 3
Explanation: It could be decoded as "BZ" (2 26), "VF" (22 6), or "BBF" (2 2 6).

Time Complexity of the above solution is O(n) and it requires O(n) auxiliary space.

Suppose the decoding function is h. For a single digit X, it can only be decoded into h[X]. And for a two-digit XY:
1. If XY<=26, then it can be decoded into h[X], h[Y], h[XY]
2. Otherwise, it can only be decoded into h[X], h[Y]
Since it is only required to calculate the most decoding method and does not require the result of each decoding, it is more appropriate and efficient to use DP.

Define dp[i+1] as the number of methods that can decode string s[0:i] of length i+1:
1. dp[0] = 1，dp[1] = 0
2. v = s[i-1]*10+s[i]：
v<=26： dp[i+1] = dp[i] + dp[i-1]
v>26：dp[i+1] = dp[i]

Corner case: case with 0
Y = 0: Obviously can't be decoded into h[Y]. At this time, you can only see if h[XY] is valid:dp[i+1] = dp[i-1]
X = 0: obviously cannot be decoded into h[XY], at this time dp[i+1] = dp[i]

Sort out the corner case:
The conditions under which XY can be decoded are: 9<XY<=26
The condition that Y can be decoded separately is: Y != '0'
*/

const numDecodings = (string) => {
    var dp = [],
        x,
        y,
        cur;

    dp[0] = 1;
    dp[1] = 1;

    if (string.length === 0 || string.charAt(0) < '1' || string.charAt(0) > '9') {
        return 0;
    }

    for (let i = 1; i < string.length; i++) {
        x = string.charAt(i - 1) - '0';
        y = string.charAt(i) - '0';
        cur = x * 10 + y;
        dp[i + 1] = 0;

        if (cur > 9 && cur <= 26) {
            dp[i + 1] += dp[i - 1];
        }

        if (y !== 0) {
            dp[i + 1] += dp[i];
        }

        if (dp[i + 1] === 0) {
            return 0;
        }
    }

    return dp[string.length];
}

module.exports.numDecodings = numDecodings;