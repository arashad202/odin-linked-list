class Node {
  constructor(value = null) {
    this.value = value;
    this.nextNode = null;
  }
}

export class LinkedList {
  constructor() {
    this.headNode = null;
  }

  append(value) {
    const newNode = new Node(value);
    if (!this.headNode) {
      this.headNode = newNode;
      return;
    }
    let current = this.headNode;
    while (current.nextNode) {
      current = current.nextNode;
    }
    current.nextNode = newNode;
  }

  prepend(value) {
    const newNode = new Node(value);
    newNode.nextNode = this.headNode;
    this.headNode = newNode;
  }

  size() {
    let count = 0;
    let current = this.headNode;
    while (current) {
      count++;
      current = current.nextNode;
    }
    return count;
  }

  head() {
    return this.headNode;
  }

  tail() {
    if (!this.headNode) return null;
    let current = this.headNode;
    while (current.nextNode) {
      current = current.nextNode;
    }
    return current;
  }

  at(index) {
    if (index < 0) return null;
    let current = this.headNode;
    let count = 0;
    while (current) {
      if (count === index) return current;
      count++;
      current = current.nextNode;
    }
    return null;
  }

  pop() {
    if (!this.headNode) return null;
    if (!this.headNode.nextNode) {
      const popped = this.headNode;
      this.headNode = null;
      return popped;
    }

    let current = this.headNode;
    while (current.nextNode.nextNode) {
      current = current.nextNode;
    }
    const popped = current.nextNode;
    current.nextNode = null;

    return popped;
  }

  contains(value) {
    let current = this.headNode;
    while (current) {
      if (current.value == value) return true;
      current = current.nextNode;
    }
    return false;
  }

  find(value) {
    let current = this.headNode;
    let index = 0;
    while (current) {
      if (current.value == value) return index;
      current = current.nextNode;
      index++;
    }
    return null;
  }

  toString() {
    let current = this.headNode;
    let output = "";
    while (current) {
      output += `( ${current.value} ) -> `;
      current = current.nextNode;
    }
    return output + "null";
  }

  insertAt(value, index) {
    if (index < 0) return;
    if (index == 0) {
      this.prepend(value);
      return;
    }

    const prev = this.at(index - 1);
    if (!prev) return;
    const newNode = new Node(value, prev.nextNode);
    prev.nextNode = newNode;
  }

  removeAt(index) {
    if (index < 0 || !this.headNode) return;
    if (index == 0) {
      this.headNode = this.headNode.nextNode;
      return;
    }

    const prev = this.at(index - 1);
    if (!prev || !prev.nextNode) return;
    prev.nextNode = prev.nextNode.nextNode;
  }
}

// FACTORY VERSION

// const Node = (value = null, nextNode = null) => ({
//   value,
//   nextNode,
// });

// import { Node } from './nodeFactory.mjs';

// const LinkedList = () => {
//   let headNode = null;

//   const append = (value) => {
//     const newNode = Node(value);
//     if (!headNode) {
//       headNode = newNode;
//       return;
//     }
//     let current = headNode;
//     while (current.nextNode) {
//       current = current.nextNode;
//     }
//     current.nextNode = newNode;
//   };

//   const prepend = (value) => {
//     headNode = Node(value, headNode);
//   };

//   const size = () => {
//     let count = 0;
//     let current = headNode;
//     while (current) {
//       count++;
//       current = current.nextNode;
//     }
//     return count;
//   };

//   const head = () => headNode;

//   const tail = () => {
//     if (!headNode) return null;
//     let current = headNode;
//     while (current.nextNode) {
//       current = current.nextNode;
//     }
//     return current;
//   };

//   const at = (index) => {
//     if (index < 0) return null;
//     let current = headNode;
//     let i = 0;
//     while (current) {
//       if (i === index) return current;
//       current = current.nextNode;
//       i++;
//     }
//     return null;
//   };

//   const pop = () => {
//     if (!headNode) return null;
//     if (!headNode.nextNode) {
//       const temp = headNode;
//       headNode = null;
//       return temp;
//     }
//     let current = headNode;
//     while (current.nextNode && current.nextNode.nextNode) {
//       current = current.nextNode;
//     }
//     const popped = current.nextNode;
//     current.nextNode = null;
//     return popped;
//   };

//   const contains = (value) => {
//     let current = headNode;
//     while (current) {
//       if (current.value === value) return true;
//       current = current.nextNode;
//     }
//     return false;
//   };

//   const find = (value) => {
//     let current = headNode;
//     let index = 0;
//     while (current) {
//       if (current.value === value) return index;
//       current = current.nextNode;
//       index++;
//     }
//     return null;
//   };

//   const toString = () => {
//     let current = headNode;
//     let output = '';
//     while (current) {
//       output += `( ${current.value} ) -> `;
//       current = current.nextNode;
//     }
//     return output + 'null';
//   };

//   const insertAt = (value, index) => {
//     if (index < 0) return;
//     if (index === 0) {
//       prepend(value);
//       return;
//     }
//     const prev = at(index - 1);
//     if (!prev) return;
//     const newNode = Node(value, prev.nextNode);
//     prev.nextNode = newNode;
//   };

//   const removeAt = (index) => {
//     if (index < 0 || !headNode) return;
//     if (index === 0) {
//       headNode = headNode.nextNode;
//       return;
//     }
//     const prev = at(index - 1);
//     if (!prev || !prev.nextNode) return;
//     prev.nextNode = prev.nextNode.nextNode;
//   };

//   return {
//     append,
//     prepend,
//     size,
//     head,
//     tail,
//     at,
//     pop,
//     contains,
//     find,
//     toString,
//     insertAt,
//     removeAt,
//   };
// };
