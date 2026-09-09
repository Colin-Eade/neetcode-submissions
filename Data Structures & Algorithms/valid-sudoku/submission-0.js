class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const rows = Array.from({ length: 9 }, () => new Set())
        const cols = Array.from({ length: 9 }, () => new Set())
        const squares = Array.from({ length: 9 }, () => new Set())

        for (let row = 0; row < rows.length; row++) {
            for (let col = 0; col < cols.length; col++) {
                const val = board[row][col]

                if (val === '.') {
                    continue
                }

                const squareIndex = Math.floor(row / 3) * 3 + Math.floor(col / 3);

                const rowSet = rows[row]
                const colSet = cols[col]
                const squareSet = squares[squareIndex]

                if (rowSet.has(val) || colSet.has(val) || squareSet.has(val)) {
                    return false
                }

                rowSet.add(val)
                colSet.add(val)
                squareSet.add(val)
            }
        }
        return true
    }
}
