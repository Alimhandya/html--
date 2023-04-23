function _createModalTable(options){

    const modalT = document.createElement('div')
    modalT.classList.add('tmodal')
    modalT.insertAdjacentHTML('afterbegin',`
    <div class="tmodal-overlay">
    <div class="tmodal-window">
        <div class="tmodal-header">
            <span class="tmodal-close" onClick="modalT.close()"><img src = "img/Layer_1.png" alt="закрыть"></span>
        </div>
        <div class="tmodal-body">
           <p>Таблица</p>
        </div>
    </div>
</div>
    `)
    document.body.appendChild(modalT)
    return modalT
   }
      
$.modalT = function(options){
   
    const $modalT = _createModalTable(options)
    
    return{
        open(){           
          $modalT.classList.add('open')
        },
        close(){
         $modalT.classList.remove('open')       
        },
    }
}