//longest-substring-without-repeating-characters-67
function lengthOfLongestSubstring(s) {
    // TODO: Implement the logic here
    let hashMap={};
    let maxLen=0;
      let left=0;
    for(let right=0;right<s.length;right++){
if(s.charAt(right) in hashMap && hashMap[s.charAt(right)]>=left){
       left=1+hashMap[s.charAt(right)];
}
hashMap[s.charAt(right)]=right;
maxLen=Math.max(right-left+1,maxLen);
    }
    return maxLen;
}

console.log(lengthOfLongestSubstring("abcabcbb"));
console.log(lengthOfLongestSubstring("bbbbb"));
console.log(lengthOfLongestSubstring("pwwkew"));
