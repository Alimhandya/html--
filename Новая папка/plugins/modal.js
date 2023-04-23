function _createModal(options){

    const modal = document.createElement('div')
    modal.classList.add('vmodal')
    modal.insertAdjacentHTML('afterbegin',`
    <div class="modal-overlay">
    <div class="modal-window">
    <div class="modal-header">
    <span class="modal-title">Вывод средств</span>
    <span class="modal-close" onClick="modal.close()"><img src = "img/Layer_1.png" alt="закрыть"></span>
    </div>
    <div class="modal-body">
       <div class="visa"> 
          <p> VISA</p>
          <button> <img src="img/Ydal.png" alt = "удалить"></button>
       </div>
    </div>
    <div class="modal-footer">
    <button class="bat-one" onClick="modal.close()"> Подать заявку </button>
    <button class="bat-two" onClick="modalB.open(),modal.close()"> Добавить реквезиты </button>
    </div>
    </div>
    </div>
 `)
 document.body.appendChild(modal)
  return modal
}
   
$.modal = function(options){
    const $modal = _createModal(options)
    
    
    return{
        open(){
           
          $modal.classList.add('open')
        },
        close(){
         $modal.classList.remove('open')       
        },
    }
}