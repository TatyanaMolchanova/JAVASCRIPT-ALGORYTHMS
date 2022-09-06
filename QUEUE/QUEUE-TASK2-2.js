const Queue = function() {
    this.queue = {};
    this.headIndex = 0;
    this.tailIndex = 0;
  };
  
  Queue.prototype.enqueue = function(item) {
    this.queue[this.tailIndex] = item;
    this.tailIndex++;
  };
  
  Queue.prototype.dequeue = function() {
        if (this.tailIndex - this.headIndex === 0) return undefined;
        const queue = this.queue[this.headIndex];
        delete this.queue[this.headIndex];
        this.headIndex++;
        console.log("dequeue queue", queue)
        
        return queue;
    };
  
  Queue.prototype.size = function() {
    return this.tailIndex - this.headIndex;
  };
  