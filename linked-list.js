/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
      let newNode = new Node(val);

      if(this.head === null) this.head = newNode;

      if(this.tail !== null) this.tail.next = newNode;

      this.tail = newNode; 

      this.length++; 
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
      let newNode = new Node(val);

      if(this.head === null){
        this.head = newNode
      } else {
        newNode.next = this.head;
        this.head = newNode;
      };

      if(this.tail === null) this.tail = newNode;

      this.length++;
  }

  /** pop(): return & remove last item. */

  pop() {
    return this.removeAt(this.length-1)
  }

  /** shift(): return & remove first item. */

  shift() {
    return this.removeAt(0)
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    if(idx >= this.length || idx <0){
      throw new Error('invalid index!');
    }


    let current = this.head;
    let count = 0;

    while(current && count!== idx){
      count++;
      current = current.next;
    }
    
    return current.val;


  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    if(idx >= this.length || idx <0){
      throw new Error('invalid index!');
    }

    let current = this.head;
    let count = 0;

    while(current && count !== idx){
      count++;
      current = current.next;
    }

    current.val = val;
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    if(idx > this.length || idx <0){
      throw new Error('invalid index!');
    }

    if(idx === 0) return this.unshift(val);
    if(idx === this.length) return this.push(val);


    let current = this.head;
    let count = 0;

    while(current && count !== idx - 1){
      count++;
      current = current.next;
    }

    let newNode = new Node(val);
    newNode.next = current.next;
    current.next = newNode;

    this.length++;
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    if(idx >= this.length || idx <0){
      throw new Error('invalid index!');
    }
    
    if(idx === 0){
      let val = this.head.val;
      this.head = this.head.next;
      this.length--;
      if(this.length < 2) this.tail = this.head;
      return val;
    }


    let current = this.head;
    let count = 0;

    while(current && count !== idx - 1){
      count++;
      current = current.next;
    }

    if(idx === this.length -1){
      let val = current.next.val;
      current.next = null;
      this.tail = current;
      this.length--;
      return val;
    }

    let val = current.next.val;
    current.next = current.next.next;
    this.length--;
    return val;

  }

  /** average(): return an average of all values in the list */

  average() {

    let total = 0;
    let current = this.head;

    if(!current) return 0;

    while(current){
      total += current.val;
      current = current.next;
    }

    return total/this.length;
  }
}

module.exports = LinkedList;
