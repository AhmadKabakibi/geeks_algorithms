/*
* Given a linked list, return the node where the cycle begins. If there is no cycle, return null.
Try solving it using constant additional space.
Example :
Input :
                  ______
                 |     |
                 \/    |
        1 -> 2 -> 3 -> 4
Return the node corresponding to node 3.
*/

/**
 * Definition for singly-linked list.
 * class ListNode {
     *     let val;
     *     let ListNode next;
     *     ListNode(let x) { val = x; next = null; }
     * }
 */

const listCycle = function (head) {
    let hashSet = new Map();

    while (head != null){
        if(hashSet.contains(head)) {
            return head;
        } else {
            hashSet.add(head);
        }
        head = head.next;
    }
    return null;
}

module.exports.listCycle = listCycle;
