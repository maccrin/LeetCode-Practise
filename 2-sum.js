function twoSum(nums, target) {
  let hash={};
  let result=[];
    for(let i=0;i<nums.length;i++){
     const complement=target-nums[i];
     if(hash.hasOwnProperty(complement)){
result.push([hash[complement],i]);
     }
     hash[nums[i]]=i;
    }
    return result; // placeholder
}
console.log(twoSum([-10, -3, 4, 9, 11, 1],1));
console.log(twoSum([3, 2, 4, 3],6));
console.log(twoSum([1, 3, 5, 6, 8],14));