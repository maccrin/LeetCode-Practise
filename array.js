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
