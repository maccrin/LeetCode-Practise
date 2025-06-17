//https://www.hackerrank.com/contests/leetcode-summer-bootcamp-from-zero-to-faang-hero-week-2/challenges/find-first-and-last-position-of-element-in-sorted-array-11
function searchRange(nums, target) {
    // Write your code here
    let l=0;
    let r=nums.length-1;
    let mid=Math.floor((l + r) / 2);
let res=[-1,-1];
    while(l<=r){
       if(target>=nums[mid]){
l=mid;
res=[l,r]
       }

       if(target<=nums[mid]){
r=mid-1;
res=[l,r];
       } 
       mid=Math.ceil(l+r)/2;
}

 return res;
}
console.log(searchRange([5,7,7,8,8,10],8));
console.log(searchRange([5, 7,7,8,8,10],6));
console.log(searchRange([1],1));
console.log(searchRange([1,2,3,4,5,6],4));
console.log(searchRange([1,2,4,4,4,4,4,7,8,9],4));
console.log(searchRange([3,3,3,4,5,6],3));
