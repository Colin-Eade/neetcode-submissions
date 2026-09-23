class MinStack {

    private Deque<Integer> stack;
    private Deque<Integer> mins;

    public MinStack() {
        this.stack = new ArrayDeque<>();
        this.mins = new ArrayDeque<>();
    }
    
    public void push(int val) {
        stack.push(val);
        if (mins.isEmpty() || val <= mins.peek()) {
            mins.push(val);
        }
    }
    
    public void pop() {
        if (stack.isEmpty()) {
            return;
        }

        int val = stack.pop();
        if (mins.peek() == val) {
            mins.pop();
        }
    }
    
    public int top() {
        return stack.peek();
    }
    
    public int getMin() {
        return mins.peek();
    }
}
