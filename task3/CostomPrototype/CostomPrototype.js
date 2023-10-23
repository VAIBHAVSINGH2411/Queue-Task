Array.prototype.myCustomFilter = function (c) {
    const filtered = [];

    for (let i = 0; i < this.length; i++) {
        if (c(this[i])) {
            filtered.push(this[i]);
        }
    }
    return filtered;
};
const data = [10, 20, 30, 40, 50];
const filteredData = data.myCustomFilter(ele => ele > 2);
console.log(filteredData);


// Task--------------------------------2

function myForEach(array, callback) {
    for (let i = 0; i < array.length; i++) {
        callback(array[i]);
    }
}

function callback(element) {
    console.log(element)
}

const array = [2, 4, 6, 8, 10];
myForEach(array, callback);