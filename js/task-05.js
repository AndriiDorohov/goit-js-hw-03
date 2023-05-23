// Write a function called getAllPropValues(arr, prop) that takes an array of objects and a property name. It returns an array of values of the specified property prop from each object in the array.

const products = [
	{ name: 'Radar', price: 1300, quantity: 4 },
	{ name: 'Scanner', price: 2700, quantity: 3 },
	{ name: 'Droid', price: 400, quantity: 7 },
	{ name: 'Capture', price: 1200, quantity: 2 },
  ];
  
  const getAllPropValues = function(arr, prop) {
	let propArray = [];
	for (let i = 0; i < arr.length; i++) {
	  let obj = arr[i];
	  if (typeof obj[prop] !== "undefined") {
		propArray.push(obj[prop]);
	  }
	}
	return propArray;
  };
  
  console.log(getAllPropValues(products, 'name')); // ['Radar', 'Scanner', 'Droid', 'Capture']
  
  console.log(getAllPropValues(products, 'quantity')); // [4, 3, 7, 2]
  
  console.log(getAllPropValues(products, 'category')); // []
  