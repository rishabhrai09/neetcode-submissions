class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    validPalindrome(s) {
        let l = 0
        let r = s.length-1;


        while(l<r){
        if(s[l] === s[r]){
            l++
            r--
        }else{
            return this.isPalindrome(s,l+1,r) || this.isPalindrome( s,l,r-1)
        }

        }
        return true
    }


     isPalindrome(s, left, right) {
    while (left < right) {
        if (s[left] !== s[right]) return false;
        left++;
        right--;
    }
    return true;
}
}
