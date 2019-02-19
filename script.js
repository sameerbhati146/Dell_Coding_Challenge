var data = [{
    "productType": "Desserts",
    "productName": "Blueberries in Mug",
    "img": "blueberries.jpg",
    "hearts": 0,
    "sale":false
},
{
    "productType": "furniture",
    "productName": "Leather Chair",
    "img": "leather-chair.jpg",
    "hearts": 0,
    "sale":true
},
{
    "productType": "Electronics",
    "productName": "Camera",
    "img": "camera.jpg",
    "hearts": 0,
    "sale":false
},
{
    "productType": "furniture",
    "productName": "Orange Chair",
    "img": "orange-chair.jpg",
    "hearts": 0,
    "sale":false
},
{
    "productType": "Plants",
    "productName": "Potted Plant",
    "img": "potted-plant.jpg",
    "hearts": 0,
    "sale":false
},
{
    "productType": "furniture",
    "productName": "Wood Stoll",
    "img": "wood-stool.jpg",
    "hearts": 0,
    "sale":true
}
]

window.onload = function () {
    bindData();
}


// rather than adding click on each heart icon, 
// it is optimal to add event on document and delegate it accordingly

document.addEventListener('click', function (event) {

    // If the clicked element doesn't have the right selector, bail
    if (!event.target.matches('.hearts')) return;

    // Don't follow the link
    event.preventDefault();

    // call the desired function for click event
    onHeartClick(event);

}, false);


function bindData() {
    let productsHtml = '';
    data.forEach((item, ind) => {
        const heartClass = item.hearts ? 'heart-numbers' : '';
        const saleBadge= item.sale ? 'sale-badge' : 'hide-badge';
        productsHtml += `<div class='product'>
        <div class="img-container"><img src='./assets/images/${item.img}' /></div>
        <div  class="data-container">
        <div>
        <span>${item.productType.toUpperCase()}</span>
        <p>${item.productName}</p>
        </div>
        <div>
        <span class="${saleBadge}">SALE</span>
        <img item-index="${ind}" class='hearts'  src="./assets/icons/heart-icon.png" />
        <span class="${heartClass}">${item.hearts ? item.hearts : ''}</span>
       
        </div>
        </div>
        </div>`
    })
    document.getElementById('productsContainer').innerHTML = productsHtml;
}





function onHeartClick(evt) {
    const currentItem = evt.target;
    const itemIndex = currentItem.getAttribute("item-index")
    data[itemIndex].hearts++;
    bindData();
}
