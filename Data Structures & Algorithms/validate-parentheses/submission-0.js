class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let symbolsChar= {
            ')' :'(',
            '}': '{',
            ']' : '[',
        }
        let stack=[]

        for(let c of s){
            if(symbolsChar[c]){
                if(stack.length > 0 && 
                stack[stack.length-1]===symbolsChar[c]){
                    stack.pop()
                }else{
                    return false
                }
            }else{
            stack.push(c)
            }
        }
        return stack.length===0
    }
}
