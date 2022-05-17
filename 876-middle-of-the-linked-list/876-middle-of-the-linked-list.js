/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    // find the length of linked lsit
    // determine if length is even or odd
    // [node.next, node.next]
    let midNode;
    let nodeArray = [head];
    let count = 1;
    let node = head.next;
    while(node) {
        nodeArray.push(node);
        count++;
        node = node.next;
    }
    
    midNode = count % 2 ? nodeArray[Math.floor(count / 2)] : nodeArray[count / 2];
    return midNode;
    
};