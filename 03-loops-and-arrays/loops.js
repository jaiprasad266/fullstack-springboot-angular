for (var i = 0; i < 5; i++) {
    console.log(i);
}
console.log("working with integer array");
var reviews = [5, 4, 3, 4.5, 3, 5];
var total = 0;
for (var i = 0; i < reviews.length; i++) {
    console.log(reviews[i]);
    total = total + reviews[i];
}
var average = total / reviews.length;
console.log(" average = " + average);
console.log("working with string arrays");
var names = ["apple", "orange"];
names.push("lemon");
for (var _i = 0, names_1 = names; _i < names_1.length; _i++) {
    var name_1 = names_1[_i];
    if (name_1 == "apple") {
        console.log("its an apple");
    }
    else {
        console.log("it's not an apple");
    }
}
