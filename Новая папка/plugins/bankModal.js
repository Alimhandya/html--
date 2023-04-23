function _createModalBank(options){

    const modalB = document.createElement('div')
    modalB.classList.add('rmodal')
    modalB.insertAdjacentHTML('afterbegin',`
    <div class="rmodal-owerlay">
    <div class="rmodal-window">
      <div class="header-rmodal">
       <p> Добавить реквезиты </p>
       <span class="bmodal-close" onClick="modalB.close()"><img src = "img/Layer_1.png" alt="закрыть"></span>
      </div>
      <div class="body-rmodal">
        <input class="rekv" type="text">
        <input class="numbercard">
        <button class="bat-save" onClick="modal.open(),modalB.close()">Сохранить </button>
      </div>
    </div>
  </div>
    `)
    document.body.appendChild(modalB)
    return modalB
   }
      
$.modalB = function(options){
   
    const $modalB = _createModalBank(options)
    
    return{
        open(){           
          $modalB.classList.add('open')
        },
        close(){
         $modalB.classList.remove('open')       
        },
    }
}