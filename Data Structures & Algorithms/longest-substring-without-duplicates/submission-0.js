class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let charSet= new Set();
        let l = 0 ;
        let res= 0;

        for ( let i = 0 ;i <s.length;i++){
            while(charSet.has(s[i])){
                charSet.delete(s[l])
                l+=1;

            }

            charSet.add(s[i]);
            res=  Math.max(res,i-l+1)
            
        }
        return res
    }
}
