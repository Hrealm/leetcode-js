/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
 *
 * https://leetcode-cn.com/problems/merge-two-sorted-lists/description/
 *
 * algorithms
 * Easy (57.47%)
 * Likes:    649
 * Dislikes: 0
 * Total Accepted:    118.1K
 * Total Submissions: 205.5K
 * Testcase Example:  '[1,2,4]\n[1,3,4]'
 *
 * 将两个有序链表合并为一个新的有序链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。 
 * 
 * 示例：
 * 
 * 输入：1->2->4, 1->3->4
 * 输出：1->1->2->3->4->4
 * 
 * 
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    const list = new ListNode();
    let current = list;
    while(l1 && l2){
        let x = l1 !== null ? l1.val : 0;
        let y = l2 !== null ? l2.val : 0;
        if(x < y){
            current.next = new ListNode(x);
            current = current.next;
            if(l1 !== null) l1 = l1.next;
        }else{
            current.next = new ListNode(y);
            current = current.next;
            if(l2 !== null) l2 = l2.next;
        }
    }
    if(l1 == null){
        current.next = l2;
    }else{
        current.next = l1;
    }
    return list.next;
};

// @lc code=end

