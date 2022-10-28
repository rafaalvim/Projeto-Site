var btnTransporte   = document.querySelector('#transporte')
var cardTransporte  = document.querySelector('#cardTransporte')
var btnBike         = document.querySelector('#bike')
var cardBike        = document.querySelector('#cardBike')
var btnEmpresarial  = document.querySelector('#edificioEmpresarial')
var cardEmpresarial = document.querySelector('#cardEmpresarial')
var btnShopping     = document.querySelector('#shopping')
var cardShopping    = document.querySelector('#cardShopping')
var tracejada1      = document.querySelector('.borda-tracejada1')
var tracejada2      = document.querySelector('.borda-tracejada2')
var tracejada3      = document.querySelector('.borda-tracejada3')
var tracejada4      = document.querySelector('.borda-tracejada4')
var displayBlock    = ('d-block')
var active          = ('active')

if($('#transporte').length){
    btnTransporte.addEventListener('click', function(){

        tracejada1.classList.add(active)
        tracejada2.classList.remove(active)
        tracejada3.classList.remove(active)
        tracejada4.classList.remove(active)
    
        cardTransporte.classList.add(displayBlock)
        cardBike.classList.remove(displayBlock)
        cardEmpresarial.classList.remove(displayBlock)
        cardShopping.classList.remove(displayBlock)
    })
}


if($('#bike').length){
    btnBike.addEventListener('click', function() {
        tracejada2.classList.add(active)
        tracejada1.classList.remove(active)
        tracejada3.classList.remove(active)
        tracejada4.classList.remove(active)
    
        cardBike.classList.add(displayBlock)
        cardTransporte.classList.remove(displayBlock)
        cardEmpresarial.classList.remove(displayBlock)
        cardShopping.classList.remove(displayBlock)
    })
}



if($('#edificioEmpresarial').length){
    btnEmpresarial.addEventListener('click', function(){
        tracejada3.classList.add(active)
        tracejada2.classList.remove(active)
        tracejada1.classList.remove(active)
        tracejada4.classList.remove(active)
    
        cardEmpresarial.classList.add(displayBlock)
        cardBike.classList.remove(displayBlock)
        cardTransporte.classList.remove(displayBlock)
        cardShopping.classList.remove(displayBlock)
    
    })
}

if($('#shopping').length){
    btnShopping.addEventListener('click', function(){
        tracejada4.classList.add(active)
        tracejada2.classList.remove(active)
        tracejada3.classList.remove(active)
        tracejada1.classList.remove(active)
    
        cardShopping.classList.add(displayBlock)
        cardBike.classList.remove(displayBlock)
        cardTransporte.classList.remove(displayBlock)
        cardEmpresarial.classList.remove(displayBlock)
    
    
    })
}




