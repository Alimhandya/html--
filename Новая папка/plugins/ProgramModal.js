function _createModalProgram(options){

    const modalP = document.createElement('div')
    modalP.classList.add('pmodal')
    modalP.insertAdjacentHTML('afterbegin',`
    <div class="pmodal-overlay">
    <div class="pmodal-window">
        <div class="pmodal-header">
        <span class="pmodal-close" onClick="modalP.close()"><img src = "img/Layer_1.png" alt="закрыть"></span>
        </div>
       
        <div class="pmodal-body">
            Реферальная программа — это<br>
            довольно популярный способ<br>
            заработка в интернете, при котором<br>
            партнер компании получает<br>
            определенное вознаграждение (это<br>
            могут быть скидки, процент от<br>
            продаж и т. д.) за помощь в<br>
            реализации товаров и услуг, а также<br>
            за привлечение новых клиентов<br>
        </div>
    </div>
</div>
    `)
    document.body.appendChild(modalP)
    return modalP
   }
      
$.modalP = function(options){
   
    const $modalP = _createModalProgram(options)
    
    return{
        open(){           
          $modalP.classList.add('open')
        },
        close(){
         $modalP.classList.remove('open')       
        },
    }
}