class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {boolean}
     */
    containsNearbyDuplicate(nums, k) {
        let seen = new Map();

        for (let i =0 ; i <nums.length;i++){
            if(seen.has(nums[i]) && i - seen.get(nums[i]) <= k){
                return true
            }else{
                seen.set(nums[i],i)
            }
        }
        return false
    }
}
