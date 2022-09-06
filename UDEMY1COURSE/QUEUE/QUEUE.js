function createQueue() {
    const queue = [];

    return {
        // add or enqueue
        enqueue(item) {
            queue.unshift(item);
        },
        // remove or dequeue
        dequeue() {
            return queue.pop();
        },
        // peek
        peek() {
            console.log("queue.length", queue.length)
            console.log("queue.length - 1", queue.length - 1)
            console.log("queue[queue.length - 1]", queue[queue.length - 1])
            console.log("queue", queue)
            return queue[queue.length - 1];
        },
        // length
        get length() {
            return queue.length;
        },
        // isEmpty
        isEmpty() {
            return queue.length === 0;
        }
    }
}

const q = createQueue();
console.log('q.isEmpty()', q.isEmpty())

q.enqueue('Im Angular Engineer');
q.enqueue('I earn 100 dollars per 1 hour');
q.enqueue('I earn 2 dollars per 1 minute');
q.enqueue('Im Angular Frontend Engineer since 2023 year');

console.log('q.peek()', q.peek())
console.log('q.length', q.length)

q.dequeue();
console.log('q.peek() 2', q.peek())