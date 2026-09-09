class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const indexMap = new Map()
        const result = []

        for (let i = 0; i < nums.length; i++) {
            if (indexMap.has(target - nums[i])) {
                result.push(indexMap.get(target - nums[i]), i)
                return result
            }
            indexMap.set(nums[i], i)
        }
    }
}
