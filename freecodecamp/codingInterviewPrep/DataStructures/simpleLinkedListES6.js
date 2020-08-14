function LinkedList() {
  var length = 0;
  var head = null;

  var Node = function (element) {
    this.element = element;
    this.next = null;
  };

  this.head = function () {
    return head;
  };

  this.size = function () {
    return length;
  };

  this.add = function (element) {
    // Only change code below this line
    const node = new Node(element);
    if (head) {
      let current = head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = node;
    } else {
      head = node;
    }
    length++;
    // Only change code above this line
  };

  this.remove = function(element){
    if (head.element === element) {
      head = head.next;
      return length--;
    }
    let previous = head;
    while (previous) {
      let current = previous.next;
      if (current) { // makes sure we are not at end where current.next would be null
        if (current.element === element) {
          previous.next = current.next;
          return length--;
        }
      }
      previous = current;
    }
  };

  // check if empty
  this.isEmpty = () => {
    if(length === 0) return true
    else return false
  }

  // check index of a given element
  this.indexOf = element => {
    if (head === null) return -1
    let current = head;
    let index = 0;
    while (current.element !== element && current.next !== null) {
      current = current.next;
      index++
    }
    if (current.element !== element && current.next === null) {
      return -1
    }
    return index;
  }

  // check the element at a given index
  this.elementAt = function(index) {
    if (head === null) return undefined;
    let current = head;
    let currentIndex = 0;
    while (currentIndex !== index && current.next !== null) {
      current = current.next;
      currentIndex++
    }
    if (currentIndex !== index && current.next === null) {
      return undefined;
    }
    return current.element;
  }

}
