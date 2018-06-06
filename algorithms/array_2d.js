const performOps =  function(A) {
    let m= A.length;
    let n=A[0].length;
    let B=[]
    for(i = 0; i < m;i++){
        B.push(new Array(n));
        for(j=0;j< n;j++){
            B[i][n-1-j] = A[i][j]
        }
    }
    return B;
}


module.exports.performOps = performOps;
