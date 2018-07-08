/* 
Merge k sorted linked lists and return it as one sorted list. Analyze and describe its complexity.

Example:

Input:
[
  1->4->5,
  1->3->4,
  2->6
]
Output: 1->1->2->3->4->4->5->6
*/


/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
const mergeKLists = (lists) => {
    let results = [];

    lists.forEach(function (item) {
        while (item) {
            results.push(new ListNode(item.val));
            item = item.next;
        }
    });

    results.sort(function (a, b) {
        return a.val - b.val;
    });

    if (!results.length) {
        return null;
    }
    
    for (let i = 0; i < results.length - 1; i++) {
        results[i].next = results[i + 1];
    }

    return results[0];
};