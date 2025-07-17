//Find all anagrmas in a string
function findAnagrams(s, p) {
    let result=[]
    // TODO: Implement the algorithm to find all anagram starting indices.
    for(let i=0;i<s.length;i++){
        let slWin=s.substring(i,i+p.length);
if(slWin.split('').sort().join('')===p.split('').sort().join('')){
result.push(i);
} 
    }
    if(result.length===0)return -1
    return result;
}

console.log(findAnagrams("cbaebabacd","abc"));
console.log(findAnagrams("abcdefg","hij"));
console.log(findAnagrams("abab","ab"));
console.log(findAnagrams("aaaaa","aa"));
console.log(findAnagrams("xyz","xyz"));