var userProfile = {
    name: "vaibhav",
    age: 23,
    hobbies: ["Sports", "Love", "Knowledge"],
};
console.log("userProfile : ", userProfile);
var updateProfile = function (p) {
    p.name = "Naman"
    p.age = p.age + 1;
    var lastPoestion = p.hobbies.length;
    p.hobbies[lastPoestion] = "study";
    console.log("Update Profile : ", p)
}

updateProfile(userProfile);
//Shado copy 
var schedocopy = { ...userProfile };

schedocopy.name = "suraj";
schedocopy.age = 30;
var len = schedocopy.hobbies.length;
schedocopy.hobbies[len] = "Swiming";

console.log("schedocopy : ", schedocopy);

//Deep copy 
var copiedProfile = JSON.parse(JSON.stringify(userProfile));
copiedProfile.name = "Tarun"
copiedProfile.age = 25;
var poestion = copiedProfile.hobbies.length;
copiedProfile.hobbies[poestion] = "Singing";
console.log(" HardCopy : ", copiedProfile);
//shelo copy and deep copy