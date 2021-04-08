class Node{
    constructor(data, prev=null, next=null){
        this.data = data;
        this.prev = null;
        this.next = null;
        this.size = 0;
    }
}

class DoublyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    insertFirst(data){
        let node = new Node(data,null,null);
        if(this.head == null){
            this.head = node;
            this.tail = node;
            this.size++;
            return;
        }
        let current = this.head;
        node.next = current;
        this.head = node;
        current.prev = node;
        this.size++;
    }

    insertLast(data){
        let current = this.head;
        let node = new Node(data,null,null);
        if(this.head == null){
            this.insertFirst(data);
            return;
        }
        while(current.next){
            current = current.next;
        }
        current.next = node;
        this.tail = node;
        node.prev = current;
        this.size++;

    }

    insertAt(data,index){
        if(this.head == null || index < 0 || index >= this.size){
            return;
        }
        let current = this.head;
        let i = 0;
        let node = new Node(data, null, null);
        while(i < index){
            current = current.next;
            i++;
        }
        current.prev.next = node;
        node.prev = current.prev;
        node.next = current;
        current.prev = node;
        this.size++;
    }

    getAt(index){
        if(this.head == null || index < 0 || index >= this.size){
            return;
        }

        let i = 0;
        let current = this.head;
        while(index > i){
            current = current.next;
            i++;
        }
        console.log(current.data);
    }

    removeAt(index){
        if(this.head == null || index < 0 || index >= this.size){
            return;
        }

        if(index == 0){
            let node = this.head;
            this.head = node.next;
            node.next.prev = null;
            return;
        }

        let i = 0; 
        let current = this.head;

        while(index > i){
            current = current.next;
        }

        current.prev.next = current.next;
        current.next.prev = current.prev;
    }

    printListData(){
        let current = this.head;
        while(current){
            console.log("start",current.data);
            current = current.next;
        }
    }

    printListReverseData(){
        if(this.head == null){
            return;
        }
        let current = this.tail;

        while(current){
            console.log(current.data);
            current = current.prev;
        }
    }

    getHead(){
        console.log(this.head.data);
    }
    getTail(){
        console.log(this.tail.data);
    }

    getSize(){
        console.log(this.size);
    }
}

let dll = new DoublyLinkedList();

dll.insertFirst(100);
dll.insertFirst(200);
dll.insertFirst(300);
dll.insertFirst(400);
dll.insertLast(500);
dll.insertAt(600,4)
dll.printListData();
dll.removeAt(0);
console.log("removed");
dll.printListData();
dll.getHead();
dll.getTail();
dll.getSize();
dll.getAt(3);
console.log("reversed");
dll.printListReverseData();