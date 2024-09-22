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
    for (item of orderedItems){
        const product = inventory.find((product) => product.name == item.name);
        if (!product){
            return `Error: ${item.name} is not in the inventory`;
        }
        if (product.quantity < item.quantity){
            return `Error: Low stocks of ${item.name}`;
        }
    }
    const product = inventory.find((product) => product.name == item.name);
    product.quantity -= item.quantity;
        orders.push({
            custName: customerName,
            itemsPurchased: orderedItems,
            status: 'Pending'
    });
}

placeOrder('David', [{name: 'Scotch', quantity: 3}]);
placeOrder('Kailey', [{name: 'Margarita', quantity: 2}]);
console.log(orders);


//4. create a function to calculate total for an order
function calculateOrderTotal(order){
    let total =  order.itemsPurchased.reduce((sum, item) => {
        const product = inventory.find(product=>product.name==item.name);
        return sum + (product.price * item.quantity)},0);
    return `Your total is $${total}`;
}

console.log(calculateOrderTotal(orders[0]));

//5. Create a Function to mark an order as completed
function completeOrder(customerName){
    let order = orders.find(cust => cust.custName === customerName);
    if(order){
        order.status = 'Completed';
        return `Order Completed for ${customerName}`;
    } else{
        return `Customer not found`;
    }
}

console.log(completeOrder('Kailey'));
console.log(orders);

//6. Create a function to check pending orders
function checkPendingOrders(orders){
    orders.forEach(order => {
        let orderDetails = order.itemsPurchased;
        let orderStatus = order.status;
        if (orderStatus == 'Pending'){
            console.log(order);
        }
    });
}

checkPendingOrders(orders);