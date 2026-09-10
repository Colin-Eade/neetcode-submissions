class Solution {
    public int[] twoSum(int[] nums, int target) {
        Map<Integer, Integer> valToIndexMap = new HashMap<>();

        for (int i = 0; i < nums.length; i++) {
            int val = nums[i];
            int diff = target - val;

            if (valToIndexMap.containsKey(diff)) {
                return new int[] {valToIndexMap.get(diff), i};
            }
            valToIndexMap.put(val, i);
        }
        return new int[] {};
    }
}
