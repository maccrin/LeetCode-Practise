'use strict';

function search(nums, target) {
    // Write your code here
   let l=0;
    let r=nums.length-1;
    let mid=Math.floor((l + r) / 2);
    while(l<=r){
          if(target===nums[mid]) return mid;
        if(nums[mid]<=nums[r]){
            if(target>=nums[mid] && target<=nums[r]){
            l=mid+1;
        }
      else{
        r=mid-1;
      }
        } 
        else{
 if(target<=nums[mid] && target>=nums[l]){
            r=mid-1;
        }
        else{
l=mid+1;
        }
        }
        mid=Math.ceil((l + r) / 2);
    }
    return -1;
}

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input = '';
process.stdin.on('data', chunk => input += chunk);
process.stdin.on('end', () => {
    const lines = input.trim().split('\n');
    const nums = lines[0].split(' ').map(Number);
    const target = parseInt(lines[1]);
    console.log(search(nums, target));
});