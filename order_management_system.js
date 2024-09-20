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

console.log(calculateOrderTotal(orders[1]));

