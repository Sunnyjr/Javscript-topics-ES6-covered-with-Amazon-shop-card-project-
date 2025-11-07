export let cart = JSON.parse(localStorage.getItem('cart'));
if (!cart) {  //if not cart in storage this will gives null.

    cart = [{

        productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
        quantity: 2,
    },
    {

        productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
        quantity: 1,
    },
    {

        productId: "83d4ca15-0f35-48f5-b7a3-1ea210004f2e",
        quantity: 2,
    },];
}


export function saveToStorage() {
    localStorage.setItem('cart', JSON.stringify(cart)); /// store data in localstorage.
}

export function removeFromCart(productId) {

    let newCart = [];

    cart.forEach((cartItem) => {
        if (cartItem.productId !== productId) {
            newCart.push(cartItem);
        }
    });
    cart = newCart;
}