
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  // input is linked list, consider a bunch of objects
  // l1.val and l1.next are both properties
  let overflow = 0;
  let pointer1 = l1;
  let pointer2 = l2;
  let head = {
    val: 0,
    next: null,
  };
  let pointerHead = head;
  //Initializing the value of the head of the linked list
  let sum = l1.val + l2.val;
  if (sum > 9) {
    overflow = 1;
    head.val = sum - 10;
  } else {
    head.val = sum;
  }
  while (pointer1 || pointer2 || overflow) {
    pointer1 = pointer1 ? pointer1.next : null;
    pointer2 = pointer2 ? pointer2.next : null;
    let tempNode = {};
    let pointer1Value = pointer1 ? pointer1.val : 0;
    let pointer2Value = pointer2 ? pointer2.val : 0;
    sum = pointer1Value + pointer2Value + overflow;
    if (sum > 9) {
      overflow = 1;
      tempNode.val = sum - 10;
      tempNode.next = null;
        pointerHead.next = tempNode;
    pointerHead = pointerHead.next;
    } else if (sum || pointer1 || pointer2) {
      overflow = 0;
      tempNode.val = sum;
      tempNode.next = null;
        pointerHead.next = tempNode;
    pointerHead = pointerHead.next;
    }
  }
  return head;
};