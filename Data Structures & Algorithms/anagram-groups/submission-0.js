class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const result = new Map()

        for (const str of strs) {
            const count = new Array(26).fill(0)

            for (const char of str) {
                count[char.charCodeAt(0) - 'a'.charCodeAt(0)] ++;
            }
            const key = count.join(',');

            if (!result.has(key)) {
                result.set(key, [])
            }
            result.get(key).push(str)
        }
        return Array.from(result.values())
    }
}
