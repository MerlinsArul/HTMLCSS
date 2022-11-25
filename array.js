let fruits =["apple","orange","guava","banana"]
fruits.push("pomegranate");
fruits.unshift("mango");
fruits.shift();
console.log(fruits);

// looping through array

let fruit =["apple","orange","guava","banana"];
fruit = fruit.sort();
for(let fruit of fruits){
    console.log(fruit);
}