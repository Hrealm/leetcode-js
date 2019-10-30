/*
 * @lc app=leetcode.cn id=104 lang=javascript
 *
 * [104] 二叉树的最大深度
 *
 * https://leetcode-cn.com/problems/maximum-depth-of-binary-tree/description/
 *
 * algorithms
 * Easy (71.22%)
 * Likes:    369
 * Dislikes: 0
 * Total Accepted:    88.6K
 * Total Submissions: 124.5K
 * Testcase Example:  '[3,9,20,null,null,15,7]'
 *
 * 给定一个二叉树，找出其最大深度。
 * 
 * 二叉树的深度为根节点到最远叶子节点的最长路径上的节点数。
 * 
 * 说明: 叶子节点是指没有子节点的节点。
 * 
 * 示例：
 * 给定二叉树 [3,9,20,null,null,15,7]，
 * 
 * ⁠   3
 * ⁠  / \
 * ⁠ 9  20
 * ⁠   /  \
 * ⁠  15   7
 * 
 * 返回它的最大深度 3 。
 * 
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    if(!root) return 0;
    // let depth = 1;
    // return isNullNode(root,depth);
    return Math.max(maxDepth(root.left),maxDepth(root.right)) +1;

};

// var isNullNode = function(r,d){
//     if(r){
//         if(r.left || r.right){
//             d++;
//             return Math.max(isNullNode(root.left, d),isNullNode(root.right, d));
//         }else{
//             return d;
//         }
        
//     }else{
//         return d;
//     }
// }

// @lc code=end

