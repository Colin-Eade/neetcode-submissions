class Solution {
    public int longestConsecutive(int[] nums) {
        Set<Integer> numsSet = new HashSet<>();
        for (int n : nums) {
            numsSet.add(n);
        }
        int longestSequence = 0;

        for (int num : numsSet) {
            if (!numsSet.contains(num - 1)) {
                int currentSequenceLength = 0;

                while (numsSet.contains(num + currentSequenceLength)) {
                    currentSequenceLength++;
                }
                longestSequence = Math.max(longestSequence, currentSequenceLength);
            }
        }
        return longestSequence;
    }
}
