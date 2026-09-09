class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const opMap = new Map([
            ['+', (a, b) => a + b],
            ['-', (a, b) => a - b],
            ['*', (a, b) => a * b],
            ['/', (a, b) => Math.trunc(a / b)]
        ])
        const stack = []

        for (const t of tokens) {
            if (!opMap.has(t)) {
                stack.push(parseInt(t))
            } else {
                const b = stack.pop()
                const a = stack.pop()

                stack.push(opMap.get(t)(a, b))
            }
        }
        return stack[0]
    }
}
