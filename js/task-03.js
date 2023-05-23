// Write a function called findBestEmployee(employees) that takes an object of employees and returns the name of the most productive employee (who has completed the highest number of tasks).
// The employees and the number of completed tasks are stored as properties in the object in the format "name":"task count".

const findBestEmployee = function(employees) {
  
	const entries = Object.entries(employees);
	let bestEmployee = 0;    // variable to store the best employee's highest task count
	let nameEmployee;        // variable to store the key (employee name)
  
	for (let key in employees) {
	  if (bestEmployee < employees[key]) {
		bestEmployee = employees[key];
		nameEmployee = key;
	  }
	}
  
	return nameEmployee;
  };
  
  console.log(
	findBestEmployee({
	  ann: 29,
	  david: 35,
	  helen: 1,
	  lorence: 99,
	}),
  ); // Output: lorence
  
  console.log(
	findBestEmployee({
	  poly: 12,
	  mango: 17,
	  ajax: 4,
	}),
  ); // Output: mango
  
  console.log(
	findBestEmployee({
	  lux: 147,
	  david: 21,
	  kiwi: 19,
	  chelsy: 38,
	}),
  ); // Output: lux
  