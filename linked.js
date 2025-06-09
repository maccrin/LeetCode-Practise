//https://www.hackerrank.com/contests/leetcode-summer-bootcamp-from-zero-to-faang-hero-week-1/challenges/reverse-linked-list-20

class ListNode{
    constructor(data){
        this.val=data;
        this.next=null;
    }
}
function reverseList(input) {
    // put your function here
    // const lines = input.trim().split('\n');
    //const n = parseInt(lines[0]);
   // const values = lines[1].split(' ').map(Number);
  if(input.length===1) return input;
  let head=null;
  let tail=null;
  for(let val of input){
   const node= new ListNode(val);
   if(!head){
head=node;
tail=node;
   }
    tail.next=node;
   tail=node;
  }
    const result = [];

function reversed(head){
     let prev=null;
     let current=head;
    while(current){
const next=current.next;
current.next=prev;
prev=current;
current=next;
    }
return prev
}
     let curr = reversed(head);
    while (curr) {
        result.push(curr.val);
        curr = curr.next;
    }
    console.log(result.join(' '));
    return result
}
console.log(reverseList( [1,2,3,4,5]));
console.log(reverseList( [99,100]));
console.log(reverseList( [42]));