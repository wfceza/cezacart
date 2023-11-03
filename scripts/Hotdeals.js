
let hotDealsHTML = '';

hotDeals.forEach((Hotproduct) => {
    hotDealsHTML += `
    
    <div class="product-container">
        <div class="product-image-container">
        <img class="product-image"
            src="${Hotproduct.image}">
        </div>

        <div class="product-rating-container">
        <img class="product-rating-stars"
            src="${Hotproduct.rating.stars}">
        <div class="product-rating-count link-primary">
            ${Hotproduct.rating.count}
        </div>
        </div>

        <div class="percentOff">
            <div class="product-name limit-text-to-2-lines">
            ${Hotproduct.name}
            </div>

            <div class=percentOf>50% off</div>
        </div>
        


        <div class="product-price">
        &#x20A6;${Hotproduct.priceCents} 
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

        <p class="limitedSupply">Limited Offer!!!</p>
        </div>

        <div class="product-spacer"></div>

        <div class="added-to-cart">
        <img src="./icons/checkmark.png">
        Added
        </div>

        <button class="add-to-cart-button button-primary js-add-to-cart"
        data-product-id="${Hotproduct.id}">
        Add to Cart
        </button>
    </div>
    `;
});

document.querySelector('.js-products-grid').innerHTML = hotDealsHTML;

document.querySelectorAll('.js-add-to-cart')
    .forEach((button) => {
        button.addEventListener('click', () => {
            const productId = button.dataset.productId;

            let matchingItem;

            cart.forEach((item) => {
                if (productId === item.productId) {
                    matchingItem = item;
                }
            });

                if (matchingItem) {
                    matchingItem.quantity += 1;
                } else {
                    cart.push({
                        productId: productId,
                        quantity: 1
                    });
                }

                let cartQuantity = 0;

                cart.forEach((item) => {
                    cartQuantity += item.quantity;
                });

                document.querySelector('.js-cart-quantity')
                    .innerHTML = cartQuantity;
        });
    });
