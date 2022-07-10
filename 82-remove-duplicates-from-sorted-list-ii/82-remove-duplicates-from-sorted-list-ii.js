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
var deleteDuplicates = function(head) {
    // modify linked list and return it
    // remove all uplicate numbers
    // list is already sorted
    
    // scenario 1 , the head and following nodes are duplicates!
    // your algorithim will take a peek at the enxt nodes value and compare values with the current node, make the first node we encounter the enxt head node!
    // also keep a variable that verifies whether you're at the ehad already.
    if(!head) {
        return head;
    }
    let modifiedHead = head;
    let nextNode=head.next;
    let currentNode = head;
    let pointingToHeadNode = true;
    let prevNode = currentNode;
    
    while(nextNode) {
        
        let nextNodeVal = nextNode.val;
        if (currentNode.val !== nextNodeVal) {
            pointingToHeadNode = false;
            prevNode = currentNode;
            currentNode = nextNode;
            nextNode = nextNode.next;
            continue;
        }
        while (currentNode.val === nextNodeVal) {
            // cycle through linked list til we reach a non duplicate
            nextNode = nextNode.next;
            if  (!nextNode) {
                // if nextNode is null
                break;
            }
            nextNodeVal = nextNode.val;
        }
        if (pointingToHeadNode) {
            modifiedHead = nextNode;
            prevNode = modifiedHead;
        } else {
            prevNode.next = nextNode;
        }
        currentNode = nextNode;
        if (!nextNode) {
            break;
        }
        nextNode = nextNode.next;
        
    }
    return modifiedHead;
};