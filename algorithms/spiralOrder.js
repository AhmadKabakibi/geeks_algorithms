const spiralOrder = function (A) {
    var result = [];
    var T = 0;
    var B = A.length - 1;
    var L = 0;
    var R = A[0].length - 1;
    var dir = 0;

    while (L <= R && T <= B) {
        if (dir == 0) {
            for (var k = L; k <= R; k++) {
                result.push(A[T][k] + "");
                //    console.log(A[T][k]);
            }
            T++;
        } else if (dir == 1) {
            for (var i = T; i <= B; i++) {
                result.push(A[i][R] + "");
                //     console.log(A[i][R]);    
            }
            R--;
        } else if (dir == 2) {
            for (var j = R; j >= L; j--) {
                result.push(A[B][j] + "");
                //     console.log(A[B][j]);
            }
            B--;
        } else if (dir == 3) {
            for (var l = B; l >= T; l--) {
                result.push(A[l][L] + "");
                //    console.log(A[l][L]);   
            }
            L++;
        }
        dir = (dir + 1) % 4;
    }
    return result;
}

module.export.faceCoin = spiralOrder;


/* c++
vector<int> Solution::spiralOrder(const vector<vector<int> > &matrix) {
    vector <int> v;
   int row = matrix.size();
   if (row<=0) return v;
   int col = matrix[0].size();
   if (col<=0) return v;
   int r, c;
   for (r=0, c=0; r<(row+1)/2 && c<(col+1)/2; r++, c++){
       //top
       for(int i=c; i<col-c; i++){
           v.push_back(matrix[r][i]);
       }
       //right
       for(int i=r+1; i<row-r; i++){
           v.push_back(matrix[i][col-c-1]);
       }
       //bottom
       for(int i=col-c-2; row-r-1>r && i>=c; i--){
           v.push_back(matrix[row-r-1][i]);
       }
       //left
       for(int i=row-r-2; col-c-1>c && i>r; i--){
           v.push_back(matrix[i][c]);
       }
       
   }
   return v;
}
 */