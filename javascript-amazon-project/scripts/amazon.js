import { cart } from '../data/cart.js';
import { products } from '../data/products.js';
//.tofixed = is used to put dot in beetween the number.to show dot values.
//combine all string togeatherproducts-grid

let productsHTML = '';

//products object is data comning from data file save in amazon.html file
products.forEach((product) => {
  console.log('produt', product);
  productsHTML += `
    <div class="product-container">
        <div class="product-image-container">
          <img class="product-image" src="${product.image}">
        </div>

        <div class="product-name limit-text-to-2-lines">
          ${product.name}
        </div>

        <div class="product-rating-container">
          <img class="product-rating-stars" src="${product.rating.stars * 10}">
          <div class="product-rating-count link-primary">
            ${product.rating.count}
          </div>
        </div>

        <div class="product-price">
            ${(product.priceCents / 100).toFixed(2)}  
        </div>

        <div class="product-quantity-container">
          <select>
            <option selected value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
        </div>

        <div class="product-spacer"></div>

        <div class="added-to-cart">
          <img src="images/icons/checkmark.png">
          Added
        </div>

        <button class="add-to-cart-button button-primary js-add-to-cart"  data-product-id= "${product.id}">
          Add to Cart
        </button>
      </div>
    `;
});
console.log('html style', productsHTML);

//include all html in it
document.querySelector('.js-product-grid').innerHTML = productsHTML;


//add to cart button functionality
function addToCart(productId) {
  let matchingItem;

  cart.forEach((item) => {
    if (productId === item.productId) {
      matchingItem = item;
    }
  });

  if (matchingItem) {
    matchingItem.quantity += 1;  //
  } else {
    cart.push({
      productId: productId,
      quantity: 1,
    });
  }
};

document.querySelectorAll('.js-add-to-cart').forEach((button) => {

  button.addEventListener('click', () => {
    console.log("click bttttn");
    const productId = button.dataset.productId;   //show whitvh data we select
    addToCart();

    let cartQuantity = 0;
    cart.forEach((item) => {
      cartQuantity += item.quantity;
    })

    document.querySelector('.js-cart-quantity').innerHTML = cartQuantity;

    console.log('cartqa', cartQuantity);
    console.log('cart', cart);

  });
})

// ---Modules---
// advantages-
// 1. avoid naming conflict.
// 2. better way to use it.
// 3. directly import to any file and use it.