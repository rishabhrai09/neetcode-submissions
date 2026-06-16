class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    subarraySum(nums, k) {
        let count= 0;
        let freq= new Map()
        let prefix=0;
        freq.set(0,1)

        for(let num of nums){
            prefix += num
            count += freq.get(prefix-k) ?? 0
            freq.set(prefix,(freq.get(prefix) ?? 0)+1)
        }
        return count
    }
}
