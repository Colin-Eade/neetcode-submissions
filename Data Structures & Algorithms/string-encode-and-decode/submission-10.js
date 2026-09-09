class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let result = ''
        for (const s of strs) {
            result += s.length + '#' + s
        }
        return result
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const result = []
        let i = 0

        while (i < str.length) {
            let j = i
            while (str[j] !== '#') {
                j++
            }
            let length = parseInt(str.substring(i, j))
            result.push(str.substring(j + 1, j + 1 + length))
            i = j + 1 + length
        }
        return result
    }
}
