const productContainers = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')]; 

productContainers.forEach((item, i) => {
   let containerDimenstions = item.getBoundingClientRect();
   let containerWidth =  containerDimenstions.width;
   
   nxtBtn[i].addEventListener('click', () =>{
    item.scrollLeft += containerWidth;
   })

   preBtn[i].addEventListener('click', () => {
    item.scrollLeft -= containerWidth;
   })

})

function filterProducts(category) {
    const products = document.querySelectorAll('.product');

    products.forEach(product => {
        if (category === 'all' || product.classList.contains(category)) {
            product.classList.remove('hide');
        } else {
            product.classList.add('hide');
        }
    });
}
// Update the "Showing X out of Y" text
function updateCardCount() {
    const visibleProducts = document.querySelectorAll('.product:not(.hide)');
    const cardCountElement = document.getElementById('card-count');
    const cardTotalElement = document.getElementById('card-total');
    
    cardCountElement.textContent = visibleProducts.length;
    cardTotalElement.textContent = document.querySelectorAll('.product').length;
}

// Function to handle "Load more" button
function loadMoreProducts() {
    const productsContainer = document.querySelector('.products');
    const hiddenProducts = Array.from(productsContainer.getElementsByClassName('hide'));
    
    hiddenProducts.slice(0, 4).forEach(product => {
        product.classList.remove('hide');
    });
    
    updateCardCount(); // Update card count after revealing more products
    
    if (hiddenProducts.length <= 4) {
        document.getElementById('load-more').style.display = 'none';
    }
}

// Attach event listeners
document.getElementById('load-more').addEventListener('click', loadMoreProducts);
document.getElementById('sortingOptions').addEventListener('change', function() {
    sortProducts(this.value);
    updateCardCount(); // Update card count after sorting
});

// Initially, hide all products except the first four
document.addEventListener('DOMContentLoaded', () => {
    const products = document.querySelectorAll('.product');
    for (let i = 4; i < products.length; i++) {
        products[i].classList.add('hide');
    }
    
    updateCardCount(); // Update card count on page load
});