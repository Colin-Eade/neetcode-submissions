class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const counts = new Map()
        const frequency = [];
        for (let i = 0; i <= nums.length; i++) {
          frequency.push([]);
        }

        for (let i = 0; i < nums.length; i++) {
            if (!counts.has(nums[i])) {
                counts.set(nums[i], 0)
            }
            counts.set(nums[i], counts.get(nums[i]) + 1)
        }
        for (const [num, count] of counts) {
            frequency[count].push(num)
        }
        const result = []
        for (let i = frequency.length - 1; i >= 0; i--) {
            for (const val of frequency[i]) {
                result.push(val)
                if (result.length === k) {
                    return result
                }
            }
        }
    }
}
