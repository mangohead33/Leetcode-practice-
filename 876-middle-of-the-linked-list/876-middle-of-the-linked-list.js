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
    let nodeArray = [head];
    let count = 1;
    let node = head.next;
    while(node) {
        nodeArray.push(node);
        count++;
        node = node.next;
    }
    return count % 2 ? nodeArray[Math.floor(count / 2)] : nodeArray[count / 2];
    
};