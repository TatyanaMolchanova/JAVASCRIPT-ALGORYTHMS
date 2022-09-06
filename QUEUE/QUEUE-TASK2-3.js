const Queue = function() {
  this.head;
  this.tail;
  this.sizeOfLinkedList = 0;
};

Queue.prototype.enqueue = function(value) {
  const link = {value, next: undefined};
  this.tail = this.head ? this.tail.next = link : this.head = link;
  this.sizeOfLinkedList++;
};

Queue.prototype.dequeue = function() {
    if (this.head) {
        const value = this.head.value;
        this.head = this.head.next;
        this.sizeOfLinkedList--;
        return value;
    }
};

Queue.prototype.size = function() {
  return this.sizeOfLinkedList;
};

const q = new Queue();

console.log("q", q)


console.log("1 q.size()", q.size());
console.log("q.enqueue('I\'m number one!')", q.enqueue('I\'m number one!'));
console.log("2 q", q)
console.log("q.enqueue('I\'m number two!')", q.enqueue('I\'m number two!'));
console.log("q.enqueue('I\'m number three!')", q.enqueue('I\'m number three!'));
;
console.log("q.dequeue()", q.dequeue())

console.log("3 q", q)
console.log("q.size()", q.size());






























// const Queue = function() {
//   this.head;
//   this.tail = null;
//   this.sizeOfLinkedList = 0;
// };

// // let headOfLinkedList;

// Queue.prototype.enqueue = function(value) {
//   const link = {value, next: undefined};
//   this.tail = this.head ? this.tail.next = link : this.head = link;
//   this.sizeOfLinkedList++;
// };

// Queue.prototype.dequeue = function() {
//     if (this.head) {
//         const value = this.head.value;
//         this.head = this.head.next;
//         this.sizeOfLinkedList--;
//         return value;
//     }
// };

// Queue.prototype.size = function() {
//   return this.sizeOfLinkedList;
//   // console.log("size !!! this.head", this.head);
//   // console.log("size !!! this.tail", this.tail);
//   // console.log("size !!! this", this);
  
//   // let temp = this.first;
//   // let count = 0;
//   // while (temp !== null || temp !== undefined) {
//   //   count++;
//   //   if (temp && temp.next) {
//   //       temp = temp.next;
//   //   }
//   // }
//   // return count;
// };

// const q = new Queue();

// console.log("q", q)


// // console.log("q.size()", q.size());
// console.log("q.enqueue('I\'m number one!')", q.enqueue('I\'m number one!'));
// console.log("2 q", q)
// console.log("q.enqueue('I\'m number two!')", q.enqueue('I\'m number two!'));
// console.log("q.enqueue('I\'m number three!')", q.enqueue('I\'m number three!'));
// ;
// console.log("q.dequeue()", q.dequeue())

// console.log("3 q", q)
// console.log("q.size()", q.size());
