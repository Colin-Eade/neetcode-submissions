class Solution {
    public boolean isValidSudoku(char[][] board) {
        Map<Integer, Set<Character>> rowMap = new HashMap<>();
        Map<Integer, Set<Character>> columnMap = new HashMap<>();
        Map<Integer, Set<Character>> squareMap = new HashMap<>();

        for (int row = 0; row < 9; row++) {
            for (int col = 0; col < 9; col++) {
                char value = board[row][col];

                if (value == '.') {
                    continue;
                }
                
                int square = (row / 3) * 3 + (col / 3);

                rowMap.computeIfAbsent(row, k -> new HashSet<>());
                columnMap.computeIfAbsent(col, k -> new HashSet<>());
                squareMap.computeIfAbsent(square, k -> new HashSet<>());

                if (rowMap.get(row).contains(value) || columnMap.get(col).contains(value) || squareMap.get(square).contains(value)) {
                    return false;
                }

                rowMap.get(row).add(value);
                columnMap.get(col).add(value);
                squareMap.get(square).add(value);
            }
        }
        return true;
    }
}
