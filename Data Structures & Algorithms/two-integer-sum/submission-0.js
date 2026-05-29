class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const preMap = new Map();

        for(let i = 0; i <nums.length;i++){
            const diff = target-nums[i];
            if(preMap.has(diff)){
                return [preMap.get(diff),i]
            }
             preMap.set(nums[i],i)
        }
        return []
    }
}
