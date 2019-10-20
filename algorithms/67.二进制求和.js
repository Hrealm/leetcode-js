/*
 * @lc app=leetcode.cn id=67 lang=javascript
 *
 * [67] 二进制求和
 *
 * https://leetcode-cn.com/problems/add-binary/description/
 *
 * algorithms
 * Easy (51.02%)
 * Likes:    251
 * Dislikes: 0
 * Total Accepted:    44.1K
 * Total Submissions: 86.4K
 * Testcase Example:  '"11"\n"1"'
 *
 * 给定两个二进制字符串，返回他们的和（用二进制表示）。
 * 
 * 输入为非空字符串且只包含数字 1 和 0。
 * 
 * 示例 1:
 * 
 * 输入: a = "11", b = "1"
 * 输出: "100"
 * 
 * 示例 2:
 * 
 * 输入: a = "1010", b = "1011"
 * 输出: "10101"
 * 
 */

// @lc code=start
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let Alen = a.length;
    let Blen = b.length;
    let count = 0;
    let result = [];
    for(let i=1; i<=Math.max(Alen,Blen); i++){
        let sum = (parseInt(a[Alen-i]) || 0) + (parseInt(b[Blen-i]) || 0) + count
        if(sum > 1){
            sum > 2 ? result.unshift(1) : result.unshift(0);
            count = 1;
        }else{
            sum == 0 ? result.unshift(0) : result.unshift(1);
            count = 0;
        }
    }
    if(count) result.unshift(count);
    return result.join("");
    
};


// @lc code=end

