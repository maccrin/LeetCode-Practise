//https://www.hackerrank.com/contests/leetcode-summer-bootcamp-from-zero-to-faang-hero-week-2/challenges/find-first-and-last-position-of-element-in-sorted-array-11
function searchRange(nums, target) {
    // Write your code here
    let l=0;
    let r=nums.length-1;
let res=[-1,-1];

//left boundary search
    while(l<=r){
        let mid=Math.floor(l+(r-l)/2);
     if(target===nums[mid]){
       res[1]=mid;
while(mid >0 && nums[mid]===nums[mid-1])mid--
res[0]=mid;
break;
     }
     else if( target< nums[mid]){
       r=mid-1;
     }
     else if( target > nums[mid]){
       l=mid+1;
     }    
}

//right boundary search
r=nums.length-1;
l=0;
  while(l<=r){
        let mid=Math.floor(l+(r-l)/2);
     if(target===nums[mid]){
while( mid< nums.length-1 && nums[mid]===nums[mid+1]) mid++;
res[1]=mid;
break;

     }
     else if( target>nums[mid]){
       l=mid+1;
     }
      else if( target < nums[mid]){
       r=mid-1;
     }    
}
return res;
}
console.log(searchRange([5,7,7,8,8,18],8));
console.log(searchRange([5, 7,7,8,8,10],6));
console.log(searchRange([1],1));
console.log(searchRange([1,2,3,4,5,6],4));
console.log(searchRange([1,2,4,4,4,4,4,7,8,9],4));
console.log(searchRange([3,3,3,4,5,6],3));
