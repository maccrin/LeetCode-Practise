//Remove Duplicates from Sorted Array 32

function removeDuplicates(nums) {
  let result=[];
  let length=nums.length;
    if(nums.length===1) return nums.length+"\n"+nums.toString()

    for(let i=0;i<length;i=nums.lastIndexOf(nums[i])+1){
result.push(nums[i]);
    }
    return result.length+"\n"+result.join(' ');
}