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

        for (const num of nums) {
            if (!counts.has(num)) {
                counts.set(num, 0)
            }
            counts.set(num, counts.get(num) + 1)
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
