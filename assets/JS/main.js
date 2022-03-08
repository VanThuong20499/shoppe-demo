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