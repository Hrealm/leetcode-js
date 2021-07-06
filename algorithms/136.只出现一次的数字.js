/*
 * @lc app=leetcode.cn id=136 lang=javascript
 *
 * [136] 只出现一次的数字
 *
 * https://leetcode-cn.com/problems/single-number/description/
 *
 * algorithms
 * Easy (71.64%)
 * Likes:    1912
 * Dislikes: 0
 * Total Accepted:    432.1K
 * Total Submissions: 603.2K
 * Testcase Example:  '[2,2,1]'
 *
 * 给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。
 * 
 * 说明：
 * 
 * 你的算法应该具有线性时间复杂度。 你可以不使用额外空间来实现吗？
 * 
 * 示例 1:
 * 
 * 输入: [2,2,1]
 * 输出: 1
 * 
 * 
 * 示例 2:
 * 
 * 输入: [4,1,2,1,2]
 * 输出: 4
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  // for (let i = 0; i < nums.length; i++) {
  //   for (let j = i+1; j < nums.length; j++) {
  //     if (nums[i] == nums[j]) {
  //       nums.splice(i,1)
  //       nums.splice(j-1,1)
  //       singleNumber(nums)
  //     }
  //   }
  // }
  // return nums[0]
  nums.sort((a,b) => a - b)
  console.log(nums);
  nums.forEach((element, index) => { 
    if (element == nums[index+1]) {
      nums.splice(index, 2, null)
    }
  })
  return nums.sort()[0]
};
// @lc code=end

