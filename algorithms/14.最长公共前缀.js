/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 *
 * https://leetcode-cn.com/problems/longest-common-prefix/description/
 *
 * algorithms
 * Easy (34.62%)
 * Likes:    679
 * Dislikes: 0
 * Total Accepted:    115.5K
 * Total Submissions: 333.7K
 * Testcase Example:  '["flower","flow","flight"]'
 *
 * 编写一个函数来查找字符串数组中的最长公共前缀。
 * 
 * 如果不存在公共前缀，返回空字符串 ""。
 * 
 * 示例 1:
 * 
 * 输入: ["flower","flow","flight"]
 * 输出: "fl"
 * 
 * 
 * 示例 2:
 * 
 * 输入: ["dog","racecar","car"]
 * 输出: ""
 * 解释: 输入不存在公共前缀。
 * 
 * 
 * 说明:
 * 
 * 所有输入只包含小写字母 a-z 。
 * 
 */
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {

    if(strs.length == 0) {return ''}
    if(strs.length == 1){return strs[0]}
    let result = '';
    let arry = [];
    strs.forEach((item)=>{
        arry.push(item.length);
    })
    let min = Math.min(...arry);
    for(let i = 0;i < min; i++){
        for(let j = 0;j < strs.length;){
            if(strs[j][i] == strs[j+1][i]){
                j++;
                if(j+1 == strs.length){
                    result += strs[j][i];
                    break;
                }
            }else{
                return result;
            }
        }
    }
    return result;
};

