class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const set = new Set(nums)
        let longestCount = 0;

        for (const num of nums) {
            if (!set.has(num - 1)) {
                let count = 1;
                while (set.has(num + count)) {
                    count++
                }
                if (count > longestCount) {
                    longestCount = count
                }
            }
        }
        return longestCount
    }
}
