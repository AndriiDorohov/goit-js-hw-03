// Write a function called calculateTotalPrice(allProducts, productName) that takes an array of objects and a product name (value of the 'name' property).
// It returns the total price of the product (price * quantity).

const products = [
	{ name: 'Radar', price: 1300, quantity: 4 },
	{ name: 'Scanner', price: 2700, quantity: 3 },
	{ name: 'Droid', price: 400, quantity: 7 },
	{ name: 'Capture', price: 1200, quantity: 2 },
  ];
  
  const calculateTotalPrice = function(allProducts, productName) {
	for (let i = 0; i < allProducts.length; i++) {
	  let tempObject = allProducts[i];
	  if (tempObject.name === productName) {
		let totalCost = tempObject.price * tempObject.quantity;
		return totalCost;
	  }
	}
  };
  
  /*
   * Function calls to test the implementation.
   */
  console.log(calculateTotalPrice(products, 'Radar')); // Output: 5200
  
  console.log(calculateTotalPrice(products, 'Droid')); // Output: 2800
  