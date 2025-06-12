class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

function findMiddle(head) {
    // put your function here
 if(head&& head.next===null)return head;
   let slow=head;
let fast=head;
while(fast){
    slow=slow.next;
    fast=fast.next.next;
if( fast && fast.next===null)return slow
}
return slow
}

function main(input) {
    const lines = input.trim().split('\n');
    const n = parseInt(lines[0]);
    const values = lines[1].split(' ').map(Number);

    let head = null, tail = null;
    for (let val of values) {
        const node = new ListNode(val);
        if (!head) head = node;
        else tail.next = node;
        tail = node;
    }

    const mid = findMiddle(head);
    console.log(mid.val);
}

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input = '';
process.stdin.on('data', chunk => input += chunk);
process.stdin.on('end', () => {
  main(input);
});