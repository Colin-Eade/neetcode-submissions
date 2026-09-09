class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        // create a Set because sets cannot contain duplicates
        const uniqueVals = new Set()

        // iterate through the array of nums
        // if the value is in the set then return true as that means it is a duplicates
        // if the value is not in the set add it 
        for (const num of nums) {
            if (uniqueVals.has(num)) {
                return true
            }
            uniqueVals.add(num)
        }
        // if we went through the whole array and got here we case is false
        return false
    }
}
