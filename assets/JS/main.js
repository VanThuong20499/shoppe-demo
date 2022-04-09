var newPrices = document.querySelectorAll('.home-product-item__price-current')
var newPrice = ''
for(var i=0; i<newPrices.length; i++){
    newPrice =  Number(newPrices[i].innerText).toLocaleString('en')
    newPrices[i].innerText = `${newPrice}đ`
}

var oldPrices = document.querySelectorAll('.home-product-item__price-old')
var oldPrice = ''
for(var i=0; i<oldPrices.length; i++){
    oldPrice = Number(oldPrices[i].innerText).toLocaleString('en')
    oldPrices[i].innerText = `${oldPrice}đ`
}

function searchMoblie(){
    var moblieSearchBtn = document.querySelector('.header__search-mobile');
    var headerSearch = document.querySelector('.header__search');
    if(window.innerWidth <= 739){
        headerSearch.style.display = 'none'
    }else{
        headerSearch.style.display = 'flex';
    }
    moblieSearchBtn.addEventListener('click', function(){
        if(headerSearch.style.display === 'none'){
            headerSearch.style.display = 'flex';
        }else{
            headerSearch.style.display = 'none';
        }
    })
}

searchMoblie();