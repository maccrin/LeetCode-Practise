function groupAnagrams(strs) {
    // Implement your logic here
if(strs.length===0)return []
if(strs.length===1)return strs
let hashMap={}
let result =[];
let index=0;
   for(let i=0;i<strs.length;i++){
let strSort=strs[i].split('').sort().join('');
if(hashMap[strSort]===undefined){
    hashMap[strSort]=index;
    result[index]=[strs[i]];
    index++;
}
else{
result[hashMap[strSort]].push(strs[i]);
}
   } 
  
   for (const group of result) {
            group.sort(); // For deterministic output per group
            console.log(group.join(' '));
        }       
   return result;
}

console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]));
console.log(groupAnagrams(["abc"]));
console.log(groupAnagrams(["abc","bca","cab"]));
