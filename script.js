// Menu items array
const menuItems = [
    { name: 'HALLOUMI KINGS', price: 9.99, image: 'imgs/item1.png' },
    { name: 'BEEF FLAME GRILLED', price: 10.49, image: 'imgs/item2.png' },
    { name: 'PLANT-BASED KINGS', price: 11.99, image: 'imgs/item3.png' },
    { name: 'TENDER & CRISPY CHICKEN', price: 13.49, image: 'imgs/item4.png' },
    { name: 'KING DEALS', price: 22.49, image: 'imgs/item5.png' },
    { name: 'KIDS MEALS', price: 12.49, image: 'imgs/item6.png' }
];

// Global variables
let orders = [];
let totalAmount = 0;

// Display featured items on page load
window.onload = function() {
    displayFeaturedItems();
};

// Function to display menu items
function displayFeaturedItems() {
    const itemsContainer = document.getElementById('items-container');
    itemsContainer.innerHTML = '';
    menuItems.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.className = 'menu-item';
        itemElement.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <p class="item-name">${item.name}</p>
            <p class="item-price">$${item.price.toFixed(2)}</p>
            <button class="btn btn-success btn-sm" onclick="addItemToOrder('${item.name}', ${item.price})">Add to Order</button>
        `;
        itemsContainer.appendChild(itemElement);
    });
}

// Function to add item to order
function addItemToOrder(name, price) {
    orders.push({ name: name, price: price });
    totalAmount += price;
    displayOrder();
}

// Function to display order summary
function displayOrder() {
    const orderContainer = document.getElementById('order-container');
    orderContainer.innerHTML = '';
    orders.forEach(order => {
        const orderElement = document.createElement('div');
        orderElement.className = 'item';
        orderElement.innerHTML = `${order.name} - $${order.price.toFixed(2)}`;
        orderContainer.appendChild(orderElement);
    });
    document.getElementById('total-amount').innerHTML = `Total: $${totalAmount.toFixed(2)}`;
}

// Function to handle checkout
function checkout() {
    if (orders.length === 0) {
        alert('Your order is empty. Please add items to your order.');
        return;
    }
    document.getElementById('checkout-total').innerText = `Your total amount is $${totalAmount.toFixed(2)}.`;
    $('#checkoutModal').modal('show');
}

// Function to start a new transaction
function newTransaction() {
    orders = [];
    totalAmount = 0;
    displayOrder();
    $('#checkoutModal').modal('hide');
}
