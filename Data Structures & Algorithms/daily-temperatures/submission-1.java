class Solution {
    public int[] dailyTemperatures(int[] temperatures) {
        Deque<Integer> stack = new ArrayDeque<>();
        int[] result = new int[temperatures.length];

        for (int i = 0; i < temperatures.length; i++) {
            int temperature = temperatures[i];

            while (!stack.isEmpty() && temperature > temperatures[stack.peek()]) {
                int previousDayIndex = stack.pop();
                result[previousDayIndex] = i - previousDayIndex;
            }
            stack.push(i);
        }
        return result;
    }
}
