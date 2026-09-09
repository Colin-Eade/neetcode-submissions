class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        if (strs.length === 0) {
            return "\u0000";
        }
        return strs.join('<eos>')
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        if (str === "\u0000") {
            return []
        }
        return str.split('<eos>')
    }
}