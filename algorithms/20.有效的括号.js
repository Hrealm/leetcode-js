/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 *
 * https://leetcode-cn.com/problems/valid-parentheses/description/
 *
 * algorithms
 * Easy (39.55%)
 * Likes:    1037
 * Dislikes: 0
 * Total Accepted:    119.4K
 * Total Submissions: 302K
 * Testcase Example:  '"()"'
 *
 * 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。
 * 
 * 有效字符串需满足：
 * 
 * 
 * 左括号必须用相同类型的右括号闭合。
 * 左括号必须以正确的顺序闭合。
 * 
 * 
 * 注意空字符串可被认为是有效字符串。
 * 
 * 示例 1:
 * 
 * 输入: "()"
 * 输出: true
 * 
 * 
 * 示例 2:
 * 
 * 输入: "()[]{}"
 * 输出: true
 * 
 * 
 * 示例 3:
 * 
 * 输入: "(]"
 * 输出: false
 * 
 * 
 * 示例 4:
 * 
 * 输入: "([)]"
 * 输出: false
 * 
 * 
 * 示例 5:
 * 
 * 输入: "{[]}"
 * 输出: true
 * 
 */
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    // for(let i = 0; i < s.length;){
    //     let rightNum = s[i].charCodeAt() === 40 ? 1 : 2;
    //     if(s[i].charCodeAt() + rightNum === s[i+1].charCodeAt()){
    //         i++;
    //         if(i + 1 === s.length){ return true;};
    //         i++;
    //         if(i + 1 === s.length){ return true;};
    //     }else if(s[i].charCodeAt() + rightNum === s[s.length - (i+1)].charCodeAt()){
    //         i++;
    //     }else{
    //         return false;
    //     }
    // }

    class Stack{
        constructor(){
            var items = [];
            this.push = function(element){
                items.push(element);
            };
            this.pop = function(){
                items.pop();
            };
            this.peek = function(){
                return items[items.length - 1];
            }
            this.isEmpty = function(){
                return items.length == 0;
            }
        }
    }

    let stack = new Stack();
    for(let i = 0; i < s.length;){
        stack.push(s[i]);
        let rightNum = s[i].charCodeAt() == 40 ? 1 : 2;
        if(stack.peek().charCodeAt() + rightNum == s[i+1].charCodeAt()){
            stack.pop();
            i++;
            if(i + 1 == s.length){ return stack.isEmpty()};
        }
        i++;
        // if(i + 1 == s.length){ return stack.isEmpty()};
        // stack.push(s[i]);
        // i++;
    }
    return stack.isEmpty();

};

console.log(isValid("{[]}"));


