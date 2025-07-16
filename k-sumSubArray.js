function subarraySum(nums, k) {
    // Implement your logic here
    //build prefix sum array
    let count=0;
    for(let i=0;i<nums.length;i++){
        let sum=0;
for(let j=i;j<nums.length;j++){
   sum+=nums[j];
    if(sum===k)count++
}
    }
    return count; // placeholder
}
console.log(subarraySum([1,0,1,0],1));
console.log(subarraySum([1,1,1],2));
console.log(subarraySum([1, 2, 3],3));
console.log(subarraySum([1, -1, 0],3));
console.log(subarraySum([1,1,1,1,1],5));
console.log(subarraySum([1, -1, -1, 1, -1],-2));