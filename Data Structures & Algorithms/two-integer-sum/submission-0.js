class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const map = new Map()
        const solution = []

        for (let i = 0; i < nums.length; i++) {
            if (map.has(target - nums[i])) {
                solution.push(map.get(target - nums[i]), i)
                return solution
            }
            map.set(nums[i], i)
        }
    }
}
