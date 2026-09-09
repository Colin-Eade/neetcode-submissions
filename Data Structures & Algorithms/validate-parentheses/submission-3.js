class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const pairs = new Map([
            ['(', ')'], ['[', ']'], ['{', '}']
        ])
        const stack = []
        
        for (let i = 0; i < s.length; i++) {
            if (pairs.has(s[i])) {
                stack.push(s[i])
            } else {
                const key = stack.pop()
                if (s[i] !== pairs.get(key)) {
                    return false
                }
            }
        }
        return stack.length === 0
    }
}
