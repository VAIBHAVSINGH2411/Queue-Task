class Task {
    constructor(description) {
        this.description = description;
        this.next = null;
    }
}
class TodoList {
    constructor() {
        this.head = null;
        this.size = 0;
    }
    addTask(description) {
        var task = new Task(description);
        var current;
        if (this.head == null) this.head = task;
        else {
            current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = task;
        }
        this.size++;
    }
    getAllTasks() {
        var currNode = this.head;
        var str = "";
        while (currNode) {
            str += currNode.description + " ";
            currNode = currNode.next;
        }
        console.log(str);
    }
    removeTask(description) {
        var current = this.head;
        var prev = null;
        while (current != null) {
            if (current.description === description) {
                if (prev == null) {
                    this.head = current.next;
                } else {
                    prev.next = current.next;
                }
                this.size--;
                return current.description;
            }
            prev = current;
            current = current.next;
        }
        return -1;
    }
    getTaskCount() {
        return this.size;
    }

}
var task = new TodoList();
task.addTask("buy_Orange");
task.addTask("Byu_Mango");
task.getAllTasks();
task.addTask("Buy_Apple");
task.addTask("Buy_Banana ");
task.getAllTasks();
task.removeTask("Buy_Apple");
task.getAllTasks();
console.log(task.getTaskCount());