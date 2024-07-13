var a=10;
console.log(a)

let b='anshuman'
console.log(b)

const abc=1
console.log(abc)



var z=10
var x=10.5
var c='anshu'
var v=true
console.log(v)

let r=45
console.log(r)
r=85
console.log(r)



var person = {
    firstName: "John",
    lastName: "Doe",
    age: 25,
    address: {
        street: "123 Main St",
        city: "Anytown",
        zipCode: 12345
    }
};

console.log(person.address.street)

person.email = "john.doe@example.com";
console.log(person.email); // john.doe@example.com




// Creating an array
var fruits = ["Apple", "Banana", "Cherry"];

// Accessing array elements
console.log(fruits[0]); // Apple

// Adding elements to the array
fruits.push("Orange");
console.log(fruits); // ["Apple", "Banana", "Cherry", "Orange"]

// Removing the last element
fruits.pop();
console.log(fruits); // ["Apple", "Banana", "Cherry"]

// Iterating over an array
for (var i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
