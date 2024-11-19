class LinkedList {
 constructor(data) {
     this.size = 1
     this.head = {
         value: data,
         next: null
     }
     this.tail = this.head
 }
 addNode(nodeData) {
     this.size++
     const newNode = {
         value: nodeData,
         next: null
     }
     this.tail.next = newNode
     this.tail = newNode
 }
 insertingNode(nodeData, index) {
     if (index > this.size) {
         return console.log('Index out of range')
     }
     this.size++
     const newNode = {
         value: nodeData,
         next: null
     }
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
         console.log(currentNode.value)
         currentNode = currentNode.next
     }
 }
}

let linkList = new LinkedList(100)
linkList.addNode(200)
linkList.addNode(300)
linkList.addNode(400)
linkList.traverse();
console.log('---------after traversing the node data----------')
linkList.insertingNode(5, 3)
linkList.traverse();

console.log(linkList)