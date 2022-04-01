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
var swapPairs = function(head) {
    // input a linked list
    // head
    // swap every even with odd 1 - 2 -> 2 - 1
    // Method have a variable that always point to head, you'll return that as the result
    // have a current node and next node like before, but swap them
    // make sure you change the .next as well
    if (!head || !head.next) {
        return head;
    }
    let result;
    let currentNode = head;
    let nextNode = head.next;
    let prevNode;
    let count = 0;
    while (nextNode) {
        // keep track of the node after nextNode.next, store it's value
        // nextNode.next = currentNode;
        // currentNode.next  = temp
        // first run resultHead = nextNode;
        // for conventions sake you would have to swap current and nextNodes placement
        // i suggest you have a count. start the count at 0 (even), whenever it's even do a swap
        // increment and you shouldn't do a swap yet
        if  (!(count % 2)) {
            // on even counts, you want to swap nodes;
            let temp = nextNode.next;
            if (!count) {
                // for first the first swap, keep track of the new head
                nextNode.next = currentNode;
                currentNode.next = temp;
                result = nextNode;
            } else {
                prevNode.next = nextNode
                nextNode.next = currentNode;
                currentNode.next = temp;
            }
            nextNode = temp;
        } else {
            prevNode = currentNode;
            currentNode = nextNode;
            nextNode = nextNode.next;
        }
        count++;
    }
    return result
};