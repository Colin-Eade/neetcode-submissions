class Solution {
    public int carFleet(int target, int[] position, int[] speed) {
        int[][] positionSpeedPair = new int[position.length][2];

        for (int i = 0; i < position.length; i++) {
            positionSpeedPair[i][0] = position[i];
            positionSpeedPair[i][1] = speed[i];
        }

        Arrays.sort(positionSpeedPair, (a, b) -> Integer.compare(b[0], a[0]));
        Stack<Double> fleets = new Stack<>();

        for (int[] pair : positionSpeedPair) {
            int p = pair[0];
            int s = pair[1];

            fleets.push((double) (target - p) / s);
            if (fleets.size() >= 2 && fleets.peek() <= fleets.get(fleets.size() - 2)) {
                fleets.pop();
            }
        }
        return fleets.size();
    }
}
