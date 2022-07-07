const linkedList = require('./linkedList');
const newList = new linkedList()
var head;
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }

}

class LinkedList {

    // insert(req, res) {
    //     let node = req.body.node;
    //     let node1 = req.body.node1;
    //     let new_node = new Node(node1)
    //     new_node.next = head;
    //     head = new_node;
    //     let a = []
    //     let tnode = head;
    //     while (tnode != null) {
    //         tnode = tnode.next;
    //         a.push(tnode)
    //     }
    //     res.json({
    //         statusCode: 200,
    //         data: a
    //     })
    // }
    insertAfter(req, res) {
        let data1 = req.body.prev_node
        let prev_node = new Node(data1)
        if (prev_node == null) {
            document.write(
            "The given previous node cannot be null"
            );
            return;
        }
 
        /*
         * 2 & 3: Allocate the Node & Put in the data
         */
        let new_data = req.body.data1
         var new_node = new Node(new_data);
 
        /* 4. Make next of new Node as next of prev_node */
        new_node.next = prev_node.next;
 
        /* 5. make next of prev_node as new_node */
        prev_node.next = new_node;
        console.log(new_node,prev_node, 'new_node')
        res.json({
            successCode: 200,
        })

    }

    insertBegining(req, res) {
        let data = req.body.data;
        let new_node = new Node(data);
        new_node.next = head;
        head = new_node

        let a1 = [];
        let tnode = head;
        while (tnode != null) {
            tnode = tnode.next;
            a1.push(tnode);
        }
        let b1 = []
        if(a1.length>0){
            for (let item of a1){
                console.log(item)
                //b1.push(item.data)
            }
        }
        console.log(a1)
        res.json({
            successCode: 200,
            data: a1,
            data1:b1
        })


    }
}
module.exports = LinkedList;