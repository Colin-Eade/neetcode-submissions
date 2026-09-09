class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let res = ''
        for (const c of s) {
            if (/^[a-zA-Z0-9]$/.test(c)) {
                res = res.concat(c).toLowerCase()
            }
        }
        console.log(res)

        let i = 0
        let j = res.length - 1

        while (i < j) {
            if (res[i] !== res[j]) {
                return false
            }
            i++
            j--
        }
        return true
    }
}
