const createNav = () => {
    let nav = document.querySelector('.navbar');

    nav.innerHTML = `
    <div class="nav">
            <img src="img/dark-logo.png" class="brand-logo" alt="">
            <div class="nav-items">
                <div class="search">
                    <input type="text" class="search-box" placeholder="Search...">
                    <button class="search-btn">
                        Search
                    </button>
                </div>
                <a href="#"><img src="img/user.png" alt=""></a>
                <a href="#"><img src="img/cart.png" alt=""></a>
            </div>
        </div>
<ul class="links-container">
<div class="filter-options">
<button class="filter-btn" onclick="filterProducts('all')">All</button>
<button class="filter-btn" onclick="filterProducts('men')">Men</button>
<button class="filter-btn" onclick="filterProducts('women')">Women</button>
<button class="filter-btn" onclick="filterProducts('accessories')">Accessories</button>
</div>
</ul>
    
    `;
}

createNav();