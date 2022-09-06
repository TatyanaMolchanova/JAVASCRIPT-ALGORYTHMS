const Queue = function() {
  // implement your Queue constructor here
  this.queue = {};
  this.headIndex = 0;
  this.tailIndex = 0;
};

Queue.prototype.enqueue = function(item) {
  // add item to the queue
  this.queue[this.tailIndex] = item;
  this.tailIndex++;
  return item;
};

Queue.prototype.dequeue = function() {
    // remove item from the front of the queue and return its value
    if (Object.keys(this.queue).length === 0) return undefined;
    const queue = this.queue[this.headIndex];
    delete this.queue[this.headIndex];
    this.headIndex++;
    console.log("dequeue queue", queue)
    
    return queue;
};

Queue.prototype.size = function() {
  // return number of items in queue so far
  return Object.keys(this.queue).length;
};

const q = new Queue();

console.log("q.size()", q.size());
console.log("q.enqueue('I\'m number one!')", q.enqueue('I\'m number one!'));
console.log("q.enqueue('I\'m number two!')", q.enqueue('I\'m number two!'));
console.log("q.enqueue('I\'m number three!')", q.enqueue('I\'m number three!'));
q.dequeue();
console.log("", q.size());

