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
var copiedProfile = JSON.parse(JSON.stringify(userProfile));
copiedProfile.name = "Tarun"
copiedProfile.age = 25;
var poestion = copiedProfile.hobbies.length;
copiedProfile.hobbies[poestion] = "Singing";
console.log(" copiedProfile : ", copiedProfile);
//shelo copy and deep copy