// Write a function called countTotalSalary(employees) that takes an object of salaries. The function calculates the total salary of all employees and returns it.
// Each field of the object passed to the function has the format "name":"salary".
const countTotalSalary = function(employees) {
  let total = 0;
  for (const value in employees) {
    total += employees[value];
  }
 return(total);
};


console.log(countTotalSalary({})); // 0

console.log(
  countTotalSalary({
    mango: 100,
    poly: 150,
    alfred: 80,
  }),
); // 330

console.log(
  countTotalSalary({
    kiwi: 200,
    lux: 50,
    chelsy: 150,
  }),
); // 400