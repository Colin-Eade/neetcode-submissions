class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const pairs = new Map([
            ['[', ']'], 
            ['{', '}'], 
            ['(', ')']
        ]);
        const stack = []

        for (const c of s) {
            if (pairs.has(c)) {
                stack.push(c)
            } else {
                const key = stack.pop()
                if (c !== pairs.get(key)) {
                    return false
                }
            }
        }
        return stack.length === 0
    }
}
