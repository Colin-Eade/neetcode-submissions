class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        // we want to end up with an array of arrays that is nums.length + 1 long
        // the index of the array corresponds to the amount of times a value appears, like a set of buckets
        // e.g. nums = [1,2,2,3,3,3,4], k = 2 -> [[], [1, 4], [2], [3], [], [], [], []]
        // it only needs to be this length because the maximum amount of repeating values can only be EQUAL to the nums array length
        // the + 1 is just to account for the fact that the first index is 0 
        const frequencyBuckets = []
        for (let i = 0; i < nums.length + 1; i++) {
            frequencyBuckets.push([])
        }

        // We will also use a counts map where the values in the nums array are the keys and the counts of each key are the value fields
        const counts = new Map()

        for (const n of nums) {
            if (!counts.has(n)) {
                counts.set(n, 0)
            }
            counts.set(n, counts.get(n) + 1)
        }

        // Now that we have that map, we can properly populate the frequencyBuckets by iterating through it
        for (const [key, val] of counts) {
            // val is the index as the count corresponds to index in frequencyBuckets
            frequencyBuckets[val].push(key);
        }

        // We can now return the result by iterating backwards through the buckets and pushing the k amount of values into the result array
        // We go backwards because we are looking for top k values, meaning we are looking for the largest values. The highest values will be at the end of the buckets array.
        const result = []

        for (let i = frequencyBuckets.length - 1; i >= 0; i--) {
            for (const val of frequencyBuckets[i]) {
                result.push(val)
                if (result.length === k) {
                    return result
                }
            }
        }
    }
}
