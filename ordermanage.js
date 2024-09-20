//1. Create an Inventory Array of Product Objects
const inventory = [
    { name: 'Scotch', price: 6, quantity: 11 },
    { name: 'Ale', price: 4, quantity: 5 },
    { name: 'Bourbon', price: 6, quantity: 8 },
    { name: 'Martini', price: 4, quantity: 3 },
    { name: 'Margarita', price: 2, quantity: 6 }  
];

//2. Create an Orders Array of Order Objects
let orders = [

];

//3. Create a function to place an order
function placeOrder(customerName, orderedItems){
//orderedItems is an array
    const product = inventory.find((product) => product.name == orderedItems.name);
    if (!product){
        return `Error: ${orderedItems.name} is not in the Inventory `;
    }
    if (product.quantity > inventory.quantity){
        return `Error: There is not enough stock of ${product.name}`
    }
    product.quantity -= inventory.quantity;
    orders.push({
        custName: customerName,
        itemsOrdered: orderedItems,
        status: `Pending`
    });
    
}
console.log(placeOrder('David', [{name: 'Scotch', quantity: 3}]));

//4. Create a Function to calculate total for an order
function calculateOrderTotal(orders){
 
}


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

//console.log(completeOrder('David'));
//console.log(orders);

//6. Create a Function to Check Pending Orders
function checkPendingOrders(customerStatus){

}

//console.log(checkPendingOrders(orders));