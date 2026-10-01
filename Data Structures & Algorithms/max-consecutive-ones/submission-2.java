class Solution {
    public int findMaxConsecutiveOnes(int[] nums) {
        int max = 0;
        int currentCount = 0;

        for (int n : nums) {
            if (n == 1) {
                currentCount++;
                if (currentCount > max) {
                    max = currentCount;
                }
            } else {
                currentCount = 0;
            }
        }
        return max;
    }
}