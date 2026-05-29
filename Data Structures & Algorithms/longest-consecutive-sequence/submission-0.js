class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let numset = new Set(nums)
        let lognest= 0 ;

        for(let num of nums){

            if(!numset.has(num-1)){
                let length= 1
         while( numset.has(num+length)){
            length++
         }
         if(length > lognest){
            lognest = length
         }


            }
        }
        return lognest
    }
}
