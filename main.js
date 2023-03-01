const menuEmail = document.querySelector('.navbar-email');
const menuHamIcon = document.querySelector('.menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const productDetailCloseIcon = document.querySelector('.product-detail-close');
const desktopMenu = document.querySelector('.desktop-menu');
const MobileMenu = document.querySelector('.mobile-menu');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const cardsContainer = document.querySelector('.cards-container');
const productDetailContainer = document.querySelector('#productDetail');

const darken = document.querySelector('.darken');

menuEmail.addEventListener('click', toggleDesktopMenu);

menuHamIcon.addEventListener('click', toggleMobileMenu);

//carrito
menuCarritoIcon.addEventListener('click', toggleCarritoAside);

productDetailCloseIcon.addEventListener('click', closeProductDetailAside);


function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive');
    productDetailContainer.classList.add('inactive');
    shoppingCartContainer.classList.add('inactive');
     
   // darken.classList.remove('inactive');
}

function toggleMobileMenu() {
    desktopMenu.classList.add('inactive');
    MobileMenu.classList.toggle('inactive');
    // const isAsideClosed = aside.classList.contains('inactive');
    // if (!isAsideClosed) {
    //     aside.classList.add('inactive');
    // }
// MobileMenu.classList.toggle('inactive');
    shoppingCartContainer.classList.add('inactive');
    productDetailContainer.classList.add('inactive');
    
}

function toggleCarritoAside() {
   //  const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    // if (!isMobileMenuClosed) {
    //     mobileMenu.classList.add('inactive');
    // }
    // aside.classList.toggle('inactive');
    desktopMenu.classList.add('inactive');
    MobileMenu.classList.add('inactive');
    shoppingCartContainer.classList.toggle('inactive');
    productDetailContainer.classList.add('inactive');
}

function openProductDetailAside() {
    productDetailContainer.classList.remove('inactive');
    desktopMenu.classList.add('inactive');
     darken.classList.remove('inactive');
   
}

function closeProductDetailAside() {
    productDetailContainer.classList.add('inactive');
    shoppingCartContainer.classList.add('inactive');
    darken.classList.add('inactive');
}

const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Pantalla',
    price: 220,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Computadora',
    price: 820,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Pantalla',
    price: 220,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Computadora',
    price: 820,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});


/* <div class="product-card">
                <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                    alt="">
                <div class="product-info">
                    <div>
                        <p>$120,00</p>
                        <p>Bike</p>
                    </div>
                    <figure>
                        <img src="./icons/bt_add_to_cart.svg" alt="">
                    </figure>
                </div>
            </div> */
const renderProduct = arr => {
    for (product of arr) {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

// product= {name, price, image} -> product.image
    const producImg = document.createElement('img');
        producImg.setAttribute('src', product.image);
        producImg.addEventListener('click',openProductDetailAside);

    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');

    const productInfoDiv = document.createElement('div');

    const productPrice = document.createElement('p');
    productPrice.innerText = '$' + product.price;
    const productName = document.createElement('p');
    productName.innerText = product.name;

    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);

    const productInfoFigure = document.createElement('figure');
    const productImgCart = document.createElement('img');
    productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');

    productInfoFigure.appendChild(productImgCart);


    productInfo.append(productInfoDiv,productInfoFigure)

    productCard.append(producImg,productInfo) 

    cardsContainer.appendChild(productCard);
    
    }
}

renderProduct(productList);
