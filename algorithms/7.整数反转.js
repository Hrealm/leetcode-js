/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 *
 * https://leetcode-cn.com/problems/reverse-integer/description/
 *
 * algorithms
 * Easy (32.73%)
 * Likes:    1196
 * Dislikes: 0
 * Total Accepted:    156.5K
 * Total Submissions: 478.1K
 * Testcase Example:  '123'
 *
 * 给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。
 * 
 * 示例 1:
 * 
 * 输入: 123
 * 输出: 321
 * 
 * 
 * 示例 2:
 * 
 * 输入: -123
 * 输出: -321
 * 
 * 
 * 示例 3:
 * 
 * 输入: 120
 * 输出: 21
 * 
 * 
 * 注意:
 * 
 * 假设我们的环境只能存储得下 32 位的有符号整数，则其数值范围为 [−2^31,  2^31 − 1]。请根据这个假设，如果反转后整数溢出那么就返回
 * 0。
 * 
 */
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let flag = false;
    x < 0 ? flag = true : flag = false; 
    const str = x.toString();
    let arry = str.split('');
    let reArry = [];
    for(let i = arry.length - 1; i >= 0; i--){
        reArry.push(arry[i]);
    }
    let reX =  parseInt(reArry.join(''));
    let re = flag ? parseInt('-' + reX) : reX ;
    if((re > 2147483647) || (re < -2147483648)){
        return 0;
    } else{
        return re;
    }
    
};

