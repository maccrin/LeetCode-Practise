
function threeSum(nums) {
    let result=[];
    nums.sort((a,b)=>a-b);
   if(nums.every(x=>x>0)|| nums.every(x=>x<0)) return -1
    if(nums.length>2 && nums.every(x=>x===0)) return [0,0,0]
console.log(nums)
for(let i=0,j=i+1,k=nums.length-1;i<nums.length;i++){
    if( i>0 && nums[i]===nums[i-1])continue;
if(nums[i]+nums[j]+nums[k]===0) result.push([nums[i],nums[j],nums[k]]);
if(nums[i]+nums[j]+nums[k]>0) k--;
if(nums[i]+nums[j]+nums[k]<0)j++;

}
return result;
}

console.log(threeSum([-1,0,1,2,-1,-4]));
console.log(threeSum([1,2,3,4,5]));
console.log(threeSum([0,0,0,0]));