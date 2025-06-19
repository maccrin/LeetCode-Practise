function maxLength(ribbons, k) {
    // TODO: Implement binary search solution
    let l=0;
    let r=0;
    for(let i=0;i<ribbons.length;i++){
        if(ribbons[i]>r)r=ribbons[i]
    }
function canCut(mid,k,ribbons){
       let sum=0;
for(let i=0;i<ribbons.length;i++){
    sum+=Math.floor(ribbons[i]/mid);
}
return sum>=k;
}
let best=0;
    while(l<=r){
let mid=Math.floor(l+(r-l)/2);
if(canCut(mid,k,ribbons)){
    best=mid
l=mid+1;
}
else{
    r=mid-1
}
    }
    return best;
}


console.log(maxLength([9, 7, 5, 3],3));
console.log(maxLength([1, 1, 1],5));
console.log(maxLength([5, 5, 5, 5, 5],5));
console.log(maxLength([100, 200, 300, 400],2));
console.log(maxLength([9, 7, 5, 3, 2],10));
console.log(maxLength([100, 150, 130, 170, 200, 180],20));