//1. Create an Inventory Array of Product Objects
const inventory = [
    { name: 'Scotch', price: 6, quantity: 11 },
    { name: 'Ale', price: 4, quantity: 5 },
    { name: 'Bourbon', price: 6, quantity: 8 },
    { name: 'Martini', price: 3, quantity: 3 },
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
        
        return orders;

    } else if (!item){
        return `${orderedItems} is not available`;

    } else{
        return `Insufficient Stock of ${orderedItems}`;
    }
}

placeOrder('David', 'Margarita', 2);
placeOrder('Martha', 'Martini', 1);
console.log(orders);

//4. Create a Function to calculate total for an order
function calculateOrderTotal(orders){
    let item = inventory.find(({ price }) => price);
    let orderTotal = orders.purchased * item.price;
    return orderTotal;
}

console.log(calculateOrderTotal(orders[0]));