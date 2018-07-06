/* 
Given an absolute path for a file (Unix-style), simplify it.

For example,
path = "/home/", => "/home"
path = "/a/./b/../../c/", => "/c"

Corner Cases:

Did you consider the case where path = "/../"?
In this case, you should return "/".
Another corner case is the path might contain multiple slashes '/' together, such as "/home//foo/".
In this case, you should ignore redundant slashes and return "/home/foo".
*/

const simplifyPath = function(path) {
    if(!path.length)
        return "/";
    
    let string = path.split('/')
    let result = [];
    let cases;

    for (let i = 0; i < string.length; i++) {
        cases = string[i];
        if (cases === "" || cases === ".") {
            //jumps over one iteration in the loop.
            continue;
        }
        if (cases === ".." && result.length !== 0) {
         result.pop();   
        }
        else if (cases !== "..") {
            result.push(cases);   
        }
    }
    
    return '/' + result.join('/')
};


module.exports.simplifyPath = simplifyPath;