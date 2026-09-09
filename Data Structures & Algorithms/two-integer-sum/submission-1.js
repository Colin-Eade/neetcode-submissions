class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        // We need a map because we need something that can hold the value and the index of an iterm from the array
        const indexMap = new Map()
        const solution = []

        // iterate through the array items
        // use the typical iterator format because we will need the index and values
        for (let i = 0; i < nums.length; i++) {
            // check if our indexMap has the value as key which equals to the target MINUS the current value we are iterating on
            // If it does that means the 2 values will add up to the target and we can put their indices in the solution array
            if (indexMap.has(target - nums[i])) {
                solution.push(indexMap.get(target - nums[i]), i)
                return solution
            }
            // if the above isn't true we add the value in the array as a key and index as the value of the key in the indexMap
            indexMap.set(nums[i], i)
        }
        // a valid answer exists so no need for condition handling here
    }
}
