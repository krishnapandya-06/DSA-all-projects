class Node {
 constructor(data) {
     this.data = data;
     this.next = null;
 }
}

class LinkedList {
 constructor(data) {
     this.size = 1
     this.head = new Node(data);
     this.tail = this.head
 }
 addNode(nodeData) {
     this.size++
     const newNode = new Node(nodeData);
     this.tail.next = newNode
     this.tail = newNode
 }
 insertingNode(nodeData, index) {
     if (index > this.size) {
         return console.log('Index out of range')
     }
     this.size++
     const newNode = new Node(nodeData);
     let currentNode = this.head
     let currentIndex = 0
     while (currentIndex < index - 1) {
         currentNode = currentNode.next
         currentIndex++
     }
     newNode.next = currentNode.next
     currentNode.next = newNode
 }
 traverse() {
     let currentNode = this.head
     while (currentNode) {
         console.log(currentNode.data)
         currentNode = currentNode.next
     }
 }
}

let linkList = new LinkedList(10)
linkList.addNode(20)
linkList.addNode(30)
linkList.addNode(40)
linkList.traverse();
console.log("----after traverssing the node data----");
linkList.insertingNode(5, 3)
linkList.traverse();

console.log(linkList)