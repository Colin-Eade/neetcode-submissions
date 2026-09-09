class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const valueIndexMap = new Map()
        const buckets = []
        for (let i = 0; i < nums.length + 1; i++) {
            buckets.push([])
        }

        for (const n of nums) {
            if (!valueIndexMap.has(n)) {
                valueIndexMap.set(n, 0)
            }
            valueIndexMap.set(n, valueIndexMap.get(n) + 1)
        }

        for (const [key, val] of valueIndexMap) {
            buckets[val].push(key)
        }

        const result = []
        for (let i = buckets.length - 1; i >= 0; i--) {
            for (const val of buckets[i]) {
                result.push(val)
                if (result.length === k) {
                    return result
                }
            }
        }
    }
}
