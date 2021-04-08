class Node{
    constructor(data, next=null){
        this.data = data;
        this.next = next;
    }
}  

class LinkedList {
    constructor(){
        this.head = null;
        this.size = 0;
    }

    insertFirst(data){
        this.head = new Node(data,this.head);
        this.size++;
    }

    insertLast(data){
        let current = this.head;
        let node = new Node(data, null);
        if(current == null){
            this.head = node;
        }else{
            while(current.next){
                current = current.next
            }
            current.next = node;
        }
        this.size++;
    }

    insertAt(data,index){
        let i = 0;
        let current = this.head;
        let prev = null;
        let node = new Node(data,null);
        if(index < 0 || index > this.size){
            return;
        }
        if(this.head == null){
            this.head = node;
            return;
        }

        while(i < index){
            prev = current;
            current = current.next;
            i++;
        }
        if(prev == null){
            this.head = node;
            node.next = current;
            return;
        }
        prev.next = node;
        node.next = current;
    }
    
    getAt(index){
        if(this.head == null || index < 0 || index >= this.size){
            return;
        }else{
            let i = 0;
            let current = this.head;
            while(this.size > i){
                if(index == i){
                    console.log("value",current.data);
                    return current;
                }
                current = current.next
                i++;
            }
        }
    }

    removeAt(index){
        if(this.head == null || index < 0 || index >= this.size){
            return;
        }else{
            if(index == 0){
                this.head = this.head.next;
                this.size--;
                return;
            }
            let i = 0;
            let prev = null;
            let current = this.head;
            while(index > i){
                prev = current;
                i++;
                current = current.next;
            }
            this.size--;
            prev.next = current.next;
        }
    }

    printReverse(current = this.head){
        if(current == null){
            return;
        }

        this.printReverse(current.next);
        console.log(current.data);
    }

    printListData(){
        let current = this.head;
        while(current){
            console.log(current.data);
            current = current.next
        }
    }

}

const ll = new LinkedList()

ll.insertFirst(100);
ll.insertFirst(200);
ll.insertFirst(300);
ll.insertLast(400);
ll.insertAt(500,0);
ll.getAt(3);
ll.printListData();

console.log("----");

ll.removeAt(1);
ll.printListData();
console.log("----reverse---")
ll.printReverse();
