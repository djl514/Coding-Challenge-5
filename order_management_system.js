//1. Create an Inventory Array of Product Objects
const inventory = [
    { name: 'Scotch', price: 6, quantity: 11 },
    { name: 'Ale', price: 4, quantity: 5 },
    { name: 'Bourbon', price: 6, quantity: 8 },
    { name: 'Martini', price: 4, quantity: 3 },
    { name: 'Margarita', price: 2, quantity: 6 }  
];

//2. Create an Orders Array of Order Objects
let orders = [];

//3. Create a function to place an order
function placeOrder(customerName, orderedItems, purchaseAmount){
    let item = inventory.find(({ name }) => name === orderedItems);

    if (item && item.quantity >= purchaseAmount){
        let newOrder = { 
            name: customerName, 
            inventoryItem: orderedItems, 
            purchased: purchaseAmount, 
            status: 'Pending' };    
        orders.push(newOrder);
        item.quantity -= purchaseAmount;
        
        return newOrder;

    } else if (!item){
        return `${orderedItems} is not available`;

    } else{
        return `Insufficient Stock of ${orderedItems}`;
    }
}

placeOrder('David', 'Margarita', 4);
placeOrder('Martha', 'Martini', 1);
placeOrder('James', 'Whiskey', 2);
placeOrder('Ian', 'Bourbon', 100);
console.log(orders);

//4. Create a Function to calculate total for an order
function calculateOrderTotal(orders){
    let invPrice = orders.find((prod) => prod.name)
    const totalValue = inventory.reduce((sum, product) => 
        sum + (invPrice.purchased*product.price), 0);
    return totalValue;

}

console.log(calculateOrderTotal(orders[1]));

//5. Create a Function to mark an order as completed
function completeOrder(customerName){
    let customer = orders.find(({ name }) => name == customerName);
    if (customer.status = 'Pending'){
        customer.status = 'Completed';
        return customer;
    } else {
        return `Error: ${customerName} not in system`;
    }

}

console.log(completeOrder('David'));
console.log(orders);

//6. Create a Function to Check Pending Orders