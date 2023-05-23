// Write a function called countProps(obj) that counts the number of properties in an object. The function should return a number - the count of properties.
const countProps = function(obj) {
    let arrayValues = Object.keys(obj);
    return(arrayValues.length);
};

console.log(countProps({})); // 0

console.log(countProps({ name: 'Mango', age: 2 })); // 2

console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 })); // 3