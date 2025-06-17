//https://www.hackerrank.com/contests/leetcode-summer-bootcamp-from-zero-to-faang-hero-week-2/challenges/search-insert-position-30


function searchInsertPosition(nums, target) {
    // Write your code here
    let l=0;
    let r=nums.length-1;
    let mid=Math.ceil((l + r) / 2);
    while(l<=r){
        if(target<nums[mid]){
            r=mid-1;
        }
         if(target>nums[mid]){
            l=mid+1;
        }
        if(target===nums[mid]) return mid;
        mid=Math.ceil((l + r) / 2);
    }
    return l;
}

console.log(searchInsertPosition([1,3,5,6],5));
console.log(searchInsertPosition([1,3,5,6],2));
console.log(searchInsertPosition([1,3,5,6],7));
console.log(searchInsertPosition([10,20,30,40,50],5));
console.log(searchInsertPosition([5, 15, 25, 35, 45],5));