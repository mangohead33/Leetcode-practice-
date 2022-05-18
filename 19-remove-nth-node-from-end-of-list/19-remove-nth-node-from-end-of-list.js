/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    // find length of linked list
    // once we reach the end start couting backwards
    if (!head.next) {
        return null;
    }
    let instAcc = [head];
    let node = head.next;
    while(node) {
        instAcc.push(node);
        node = node.next;
    }
    let modifyNode = instAcc.length -1 - n;

    if (modifyNode >= 0) {
        let nodePrev = instAcc[modifyNode];
        nodePrev.next = nodePrev.next.next;
    } else {

        return head.next;
    }
    return head;
 
};