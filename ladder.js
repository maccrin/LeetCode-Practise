//https://www.hackerrank.com/challenges/climbing-the-leaderboard/problem?isFullScreen=true
function climbingLeaderboard(ranked, player) {
    ranked= [...new Set(ranked)]
    console.log(ranked)
    // Write your code here
    const map={[ranked[0]]:1}   
    let result=[];
for(let i=1;i<ranked.length;i++){
 ranked[i]===ranked[i-1]?map[ranked[i]]=map[ranked[i-1]]:map[ranked[i]]=map[ranked[i-1]]+1
}

console.log(map)
}
console.log ( climbingLeaderboard([100,90,90,80],[70,80,105]));
console.log ( climbingLeaderboard([100,90,90,80,75,60],[50,65,77,90,102]));