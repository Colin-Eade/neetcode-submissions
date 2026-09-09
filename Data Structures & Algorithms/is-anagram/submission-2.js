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

        const compareMap = new Map()
        for (let i = 0; i < s.length; i++) {
            if (!compareMap.has(s[i])) {
                compareMap.set(s[i], 0)
            }
            compareMap.set(s[i], compareMap.get(s[i]) + 1)

            if (!compareMap.has(t[i])) {
                compareMap.set(t[i], 0)
            }
            compareMap.set(t[i], compareMap.get(t[i]) - 1)
        }
        
        for (const val of compareMap.values()) {
            if (val !== 0) {
                return false
            }
        }

        return true
    }
}
