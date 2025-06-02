function strStr(haystack, needle) {
  if(haystack===needle|| !needle || needle.length>haystack.length)return 0
    for(let i=0;i<haystack.length;i++){
        if(haystack.substring(i,i+needle.length)===needle){
        return i
        }
    }
    return -1
}
console.log(strStr('leetcode','code'));
console.log(strStr('leetcode','tcod'));
// reverse string#
function reverseString(s) {
    // Write your code here
    if(!s)return ""; 
let result='';
    for(let i=s.length-1;i>=0;i--) {
      result+=s[i];
    }
return result;
}
console.log(reverseString("hello"));
//Two Sum (UnSorted Array)
function twoSum(nums, target) {
  let hash={}
    for(let i=0;i<nums.length;i++){
      for(let j=i+1;j<nums.length;j++){
        if(nums[i]+nums[j]===target) return [i,j]
      }
    }
    return [-1, -1]; // placeholder
}
console.log(twoSum([-10, -3, 4, 9, 11, 1],1));
console.log(twoSum([3, 2, 4, 3],6));
console.log(twoSum([1, 3, 5, 6, 8],14));

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

console.log(removeDuplicates([0, 0 ,1, 1, 1, 2, 2, 3 ,3, 4,]));
console.log(removeDuplicates([7, 7 ,7, 7, 7, 7]));
console.log(removeDuplicates([1,2,3,4,5]));
console.log(removeDuplicates([7]));