class Solution {
    public int[] topKFrequent(int[] nums, int k) {
        Map<Integer, Integer> numCountMap = new HashMap<>(); // num : count

        int bucketsLength = nums.length + 1;
        List<List<Integer>> buckets = new ArrayList<>(bucketsLength);
        for (int i = 0; i < bucketsLength; i++) {
            buckets.add(new ArrayList<>());
        }

        for (int num : nums) {
            if (!numCountMap.containsKey(num)) {
                numCountMap.put(num, 0);
            }
            numCountMap.put(num, numCountMap.get(num) + 1);
        }
        
        numCountMap.forEach((num, count) -> {
            buckets.get(count).add(num);
        });
        
        int[] result = new int[k];
        int index = 0;

        for (int i = buckets.size() - 1; i >= 0; i--) {
            List<Integer> bucket = buckets.get(i);
            for (int num : bucket) {
                result[index++] = num;
                if (index == k) {
                    return result;
                }
            }
        }
        return new int[] {};
    }
}
