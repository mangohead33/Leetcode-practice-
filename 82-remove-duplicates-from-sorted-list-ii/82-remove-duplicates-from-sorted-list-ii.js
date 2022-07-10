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
            nextNode = nextNode.next;
            if  (!nextNode) {
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