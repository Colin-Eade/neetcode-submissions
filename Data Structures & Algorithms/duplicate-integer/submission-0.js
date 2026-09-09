class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const duplicates = new Set();

        for (const num of nums) {
            if (duplicates.has(num)) {
                return true;
            }
            duplicates.add(num);
        }
        return false;
    }
}