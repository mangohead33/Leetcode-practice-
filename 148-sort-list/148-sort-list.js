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
var sortList = function(head) {
    // first we must traverse through the list
    // know what order the values are in, then sort
    if (!head || !head.next) {
        // If head is null
        return head;
    }
    let order = [];
    let pointer = head;
    while(pointer.next) {
        // lets create coupled pair, [val, node]
        let temp = [pointer.val, pointer]
        order.push(temp)
        pointer = pointer.next;
        if (!pointer.next) {
            // we reached the tail
            let temp = [pointer.val, pointer];
            order.push(temp);
        }
    }
    // now we know the order, lets sort!
    order.sort((a,b) => {
        return a[0] - b[0];
    })
    let headSorted = order[0][1];
    let sortPointer = headSorted;
    for (let  i = 1; i < order.length; i++) {
        let node = order[i][1];
        sortPointer.next = node;
        sortPointer = node;
    }
    sortPointer.next = null;
    return headSorted;
};