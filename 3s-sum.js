function threeSum(nums) {
    let result=[];
    nums.sort((a,b)=>a-b);
    if(nums.length>2 && nums.every(x=>x===0)) return [[0, 0, 0]];
console.log(nums)
for(let i=0;i<nums.length;i++){
    let j=i+1;
    let k=nums.length-1;
    if( i>0 && nums[i]===nums[i-1])continue;
while(j<k){
    if(nums[i]+nums[j]+nums[k]===0) {
        result.push([nums[i],nums[j],nums[k]]);
        j++;
        k--;
        if(nums[k]===nums[k+1]) k--;
if(nums[j]===nums[j-1])j++;
    }
else if(nums[i]+nums[j]+nums[k]>0)k--
else{
    j++;
}
}
}
return result;
}
console.log(threeSum([-1,0,1,2,-1,-4]));
console.log(threeSum([1,2,3,4,5]));
console.log(threeSum([0,0,0,0,0]));
console.log(threeSum([-2,0,0,2,2,-2,-2,0]));