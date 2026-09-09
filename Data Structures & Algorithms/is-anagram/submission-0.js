class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) {
            return false
        }
        const map = new Map()

        for (let i = 0; i < s.length; i++) {

            if (!map.has(s[i])) {
                map.set(s[i], 0)
            }
            if (!map.has(t[i])) {
                map.set(t[i], 0)
            }
            map.set(s[i], map.get(s[i]) + 1)
            map.set(t[i], map.get(t[i]) - 1)
        }
        for (const [key, value] of map) {
            if (value !== 0) {
                return false
            }
        }

        return true;
    }
}
