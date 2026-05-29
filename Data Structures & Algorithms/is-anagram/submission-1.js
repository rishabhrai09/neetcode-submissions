class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length!== t.length){
            return false;
        }

        let ss={}
        let tt={}

        for(let val = 0 ; val < s.length;val++){
            ss[s[val]] = (ss[s[val]]||0) +1;
            tt[t[val]] = (tt[t[val]]||0) + 1;
            }
            for(let v in ss){
                if(ss[v] !== tt[v]){
                    return false;
                }
            
        }
        
        return true
    }
    
}
