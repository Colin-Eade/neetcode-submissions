class Solution {
    public int[] replaceElements(int[] arr) {
        int[] result = new int[arr.length];
        int greatestElement = -1;

        for (int i = arr.length - 1; i >= 0; i--) {
            int nextGreatest = Math.max(greatestElement, arr[i]);
            result[i] = greatestElement;
            greatestElement = nextGreatest;
        }
        return result;
    }
}