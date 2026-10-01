class Solution {
    public int findMaxConsecutiveOnes(int[] nums) {
        int max = 0;
        int currentCount = 0;

        for (int n : nums) {
            currentCount++;
            
            if (n == 0) {
                currentCount = 0;
            }
            if (currentCount > max) {
                max = currentCount;
            }
        }
        return max;
    }
}