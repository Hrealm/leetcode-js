/*
 * @lc app=leetcode.cn id=88 lang=javascript
 *
 * [88] 合并两个有序数组
 *
 * https://leetcode-cn.com/problems/merge-sorted-array/description/
 *
 * algorithms
 * Easy (45.58%)
 * Likes:    332
 * Dislikes: 0
 * Total Accepted:    78.6K
 * Total Submissions: 172.5K
 * Testcase Example:  '[1,2,3,0,0,0]\n3\n[2,5,6]\n3'
 *
 * 给定两个有序整数数组 nums1 和 nums2，将 nums2 合并到 nums1 中，使得 num1 成为一个有序数组。
 * 
 * 说明:
 * 
 * 
 * 初始化 nums1 和 nums2 的元素数量分别为 m 和 n。
 * 你可以假设 nums1 有足够的空间（空间大小大于或等于 m + n）来保存 nums2 中的元素。
 * 
 * 
 * 示例:
 * 
 * 输入:
 * nums1 = [1,2,3,0,0,0], m = 3
 * nums2 = [2,5,6],       n = 3
 * 
 * 输出: [1,2,2,3,5,6]
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    // 插入法
    // let j = 0;
    // let len = m+n;
    // for(let i=0; i<len; i++){
    //     if(i < m){
    //         if(nums2[j] > nums1[i] && nums2[j] <= nums1[i+1]){
    //             nums1.splice(i+1,0,nums2[j]);
    //             nums1.pop();
    //             j++;
    //             m++;
    //         }else if(nums2[j] < nums1[i]){
    //             nums1.splice(i,0,nums2[j]);
    //             nums1.pop();
    //             j++;
    //             m++;
    //         }
    //     }else{
    //         nums1.splice(i,1,nums2[j]);
    //         j++;
    //     }
    // }
    // return nums1;

    // 比较替换法
    let pos = m + n - 1;
    while(n>0){
        if(m>0 && nums1[m-1] > nums2[n-1]){
            nums1[pos--] = nums1[m-1];
            m--;
        }else{
            nums1[pos--] = nums2[n-1];
            n--;
        }
    }
    
};


// @lc code=end

