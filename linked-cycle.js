const readline = require('readline');

class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

function hasCycle(head) {
 let slow=head;
let fast=head;
while(fast && fast.next){
    slow=slow.next;
    fast=fast.next.next
    if(slow===fast) return true
}
return false
}
// HackerRank-style input/output
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let inputLines = [];
rl.on('line', line => {
     inputLines.push(line.trim());
     const n = parseInt(inputLines[0]);
    
    if (inputLines.length ===2 && n===0){
              const n = parseInt(inputLines[0]); // number of nodes
        if(n===0)
          console.log("False");
            rl.close();
            return; 
    }
    if (inputLines.length === 3) {
        const n = parseInt(inputLines[0]); // number of nodes
        const pos = parseInt(inputLines[1]); // index to which tail should point
        const values = inputLines[2].split(' ').map(Number); // node values

        let head = null, tail = null;
        const nodes = [];
        for (let i = 0; i < n; i++) {
            const node = new ListNode(values[i]);
            if (!head) head = node;
            else tail.next = node;
            tail = node;
            nodes.push(node);
        }
        if (pos !== -1) {
            tail.next = nodes[pos];
        }
        console.log(hasCycle(head) ? 'True' : 'False');
        rl.close();
    }
});