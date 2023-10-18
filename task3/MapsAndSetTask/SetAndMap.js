let uniqueNumbers = new Set([10, 20, 30, 40, 50, 50]);
console.log("-------   set   --------")
console.log(uniqueNumbers);
uniqueNumbers.add(60);
uniqueNumbers.forEach(item => {
    if (item == 30) {
        console.log("30 is abalable : ");
    }
});
uniqueNumbers.delete(20);
console.log("20 Removed :", uniqueNumbers);
uniqueNumbers.forEach((item) => {
    console.log(item);
})

console.log("-------  weakset Operation ------")
let weakNumbers = new WeakSet();
const n1 = { k1: 5 };
const n2 = { k2: 15 };
const n3 = { k3: 25 };
weakNumbers.add(n1);
weakNumbers.add(n2);
weakNumbers.add(n3);
weakNumbers.add({ k4: 35 })
console.log(weakNumbers.has(n2));
console.log(weakNumbers.delete(n1));

console.log("-------   map   -------")
let studentScores = new Map([
    ["Alice", 85],
    ["Bob", 92],
    ["Carol", 78],
])
studentScores.set("David", 88);
console.log(studentScores);
console.log("Bob Score : ", studentScores.get("Bob"));
studentScores.delete("Carol");
console.log(studentScores);
studentScores.forEach((value, name) => {
    console.log(name, value);
})

console.log("------   weekMap   -------")
var weakStudentScores = new WeakMap();
var s1 = { "Eve": 95 }
var s2 = { "Frank": 89 }
var s3 = { "Grace": 93 }
weakStudentScores.set(s1);
weakStudentScores.set(s2);
weakStudentScores.set(s3);
var s4 = { "Hank": 91 }

console.log(weakStudentScores.has(s1))
weakStudentScores.delete(s2);