class Solution {
    public int largestRectangleArea(int[] heights) {
        int maxArea = 0;
        Deque<int[]> stack = new ArrayDeque<>();

        for (int i = 0; i < heights.length; i++) {
            int h = heights[i];
            int start = i;

            while (!stack.isEmpty() && stack.peek()[1] > h) {
                int[] pair = stack.pop();
                int index = pair[0];
                int height = pair[1];

                maxArea = Math.max(maxArea, height * (i - index));
                start = index;    
            }
            stack.push(new int[] {start, h});
        }

        while (!stack.isEmpty()) {
            int[] pair = stack.pop();
            int index = pair[0];
            int height = pair[1];

            maxArea = Math.max(maxArea, height * (heights.length - index));
        }

        return maxArea;
    }
}
