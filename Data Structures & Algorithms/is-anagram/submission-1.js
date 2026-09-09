class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        // first check if the string lengths are EQUAL because if they are not they can't be anagrams
        if (s.length !== t.length) {
            return false
        }
        // make a letter counts map where the keys are the letter of the strings and the values will be the counts of each letter
        // we will count upwards for one string and downwards for the other
        // if each value equals 0 at the end we know we have an anagram
        const letterCounts = new Map()

        for (let i = 0; i < s.length; i++) {
            // Add key for letter and initialize to 0 if it does not exist
            if (!letterCounts.has(s[i])) {
                letterCounts.set(s[i], 0)
            }
            if (!letterCounts.has(t[i])) {
                letterCounts.set(t[i], 0)
            }
            // count upwards for s
            letterCounts.set(s[i], letterCounts.get(s[i]) + 1)
            // count downwards for t
            letterCounts.set(t[i], letterCounts.get(t[i]) - 1)
        }
        // if they did have the same letters and same counts of letters all values will be 0 by the end
        for (const val of letterCounts.values()) {
            if (val !== 0) {
                return false
            }
        }
        return true
    }
}
