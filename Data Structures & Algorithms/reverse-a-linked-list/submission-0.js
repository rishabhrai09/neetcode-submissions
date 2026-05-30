/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head) {

        let  current = head;
        let  next = null;
        let prev = null ;

        while(current !==null){
            next = current.next
            current.next = prev
            prev = current;
            current= next;

        }
        return prev
    }
}
