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
    let count = 1;
    let instantAccess = [head];
    if (head.next) {
        let nextNode = head.next;
        while (nextNode) {
            count++;
            instantAccess.push(nextNode);
            nextNode = nextNode.next;
        }
    }
    if (count === n) {
        return head.next;
    }
    if (count > n) {
        let nodePrior = instantAccess[count - 1 - n];
        nodePrior.next = nodePrior.next.next;
    }
    return head;
};