 function sumRange(input) {
        // Implement your logic here
        const nums=input[0];
        const result=[];
        for(let i=1;i<input.length;i++){
const [left,right]=input[i];
let sum=0;
for(let j=left;j<=right;j++){
    sum+=nums[j]
}
  result.push(sum)   
}
             return result; // placeholder
    }

    console.log(sumRange([[-2, 0, 3, -5, 2, -1], [0, 2], [2, 5], [0, 5]]));
    console.log(sumRange([[1, 2, 3, 4],[1,2],[0,3]]));
    console.log(sumRange([[-1000],[0,0]]));
    