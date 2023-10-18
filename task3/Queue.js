
var arr = [];
currentsize = arr.length;
var max = 5;
function addElement(item) {
    if (currentsize < max) {
        {
            arr[currentsize] = item;
        }
        currentsize++;
    }
    else {
        alert("que is full")
    }
}
function display() {
    console.log("Arrry is : ", arr);
}
function peek() {
    if (arr.length > 0) {
        console.log("Peek Element :", arr[currentsize - 1])
    }
    else {
        console.log("Array is Empty")
    }
}
function DeleteElement() {
    if (arr.length > 0) {
        for (i = 0; i < arr.length; i++) {
            arr[i] = arr[i + 1];
        }
        currentsize--;
        arr.length = currentsize;
    }
    else {
        alert("que is Empty :")
    }
}
addElement(10);
addElement(20);
addElement(30);
addElement(40);
addElement(50);
display();
peek();
DeleteElement();
DeleteElement();
display();