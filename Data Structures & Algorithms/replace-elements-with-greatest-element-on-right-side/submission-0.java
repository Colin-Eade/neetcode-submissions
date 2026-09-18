class Solution {
    public int[] replaceElements(int[] arr) {
        int[] result = new int[arr.length];
        int greatestElement = arr[arr.length - 1];
        result[arr.length - 1] = -1;

        if (arr.length == 1) {
            return result;
        } 

        for (int i = arr.length - 2; i >= 0; i--) {
            result[i] = greatestElement;
            if (arr[i] > greatestElement) {
                greatestElement = arr[i];
            }
        }
        return result;
    }
}