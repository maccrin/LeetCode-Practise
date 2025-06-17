
//https://www.hackerrank.com/contests/leetcode-summer-bootcamp-from-zero-to-faang-hero-week-2/challenges/find-peak-element-13-1
function findPeakElement(nums) {
    // Write your code here
     let l=0;
    let r=nums.length-1;
if(nums.length===1)return nums[0]
   while (l < r) {
        let mid = Math.floor((l + r) / 2);
        // Compare with the next element to decide direction
        if (nums[mid] < nums[mid + 1]) {
            l = mid + 1;
        } else {
            r = mid;
        }
    }

    return l;
    
}

console.log(findPeakElement([1, 3, 20, 4, 100]));
console.log(findPeakElement([42]));
console.log(findPeakElement([1, 20, 30, 4, 5, 6]));
console.log(findPeakElement([1, 2, 3, 4, 5, 3]));
console.log(findPeakElement([9, 7, 5, 3, 2, 1]));
console.log(findPeakElement([10, 9, 8, 7]));