// array of product objects with their details
const products = [
  { name: "Laptop", category: "electronics", price: 1000, inventory: 10 },
  { name: "Jeans", category: "apparel", price: 50, inventory: 20 },
  { name: "Bananas", category: "groceries", price: 1, inventory: 100 },
  { name: "Detergent", category: "household", price: 5, inventory: 30 },
  { name: "Book", category: "books", price: 15, inventory: 25 }
];

// apply category-based discounts
for (let product of products) {
  switch (product.category) {
    case "electronics":
      product.price *= 0.8; // 20% off
      break;
    case "apparel":
      product.price *= 0.85; // 15% off
      break;
    case "groceries":
    case "household":
      product.price *= 0.9; // 10% off
      break;
    default:
      // no discount for other categories
      break;
  }
}

// set customer type and discount
let customerType = "student";
let additionalDiscount = 0;

if (customerType === "student") {
  additionalDiscount = 0.05;
} else if (customerType === "senior") {
  additionalDiscount = 0.07;
}

// loop to simulate 3 customer checkouts
for (let i = 1; i <= 3; i++) {
  let cartTotal = 0;

  for (let product of products) {
    let quantity = 1;

    // check if item is in stock
    if (product.inventory >= quantity) {
      cartTotal += product.price * quantity;
      product.inventory -= quantity;
    }
  }

  // apply customer-specific discount
  cartTotal -= cartTotal * additionalDiscount;

  console.log(`Customer #${i} Total: $${cartTotal.toFixed(2)}`);
}

// log all properties of the first product after discount
console.log("First product details:");
const sampleProduct = products[0];
for (let key in sampleProduct) {
  console.log(`${key}: ${sampleProduct[key]}`);
}

// show updated product list with inventory and prices
console.log("Inventory and pricing after checkouts:");
for (const [index, product] of products.entries()) {
  console.log(`Product #${index + 1}:`);
  for (const [key, value] of Object.entries(product)) {
    console.log(`  ${key}: ${value}`);
  }
}
