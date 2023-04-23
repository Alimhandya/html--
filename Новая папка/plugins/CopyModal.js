function _createModalCopy(options){

    const modalC = document.createElement('div')
    modalC.classList.add('smodal')
    modalC.insertAdjacentHTML('afterbegin',`
    <div class="smodal-overlay">
    <div class="smodal-window">
            <div class="smodal-header">
                <p>Скопируйте и отправьте ссылку</p>
                <span class="smodal-close" onClick="modalC.close()"><img src = "img/Layer_1.png" alt="закрыть"></span>
            </div>
            <div class="smodal-body">
                <p> https://partners-Yandex.ru/ldecart </p>
            </div>

            <div class="collapse" id="collapseExample" style>
                <div class="card card-body">
                  <p>Настройка меток для трекинга трафика</p>
                  <p class="p2"> Добавьте utm-метки (латиница,без пробелов и спецсимволов) в персональную ссылку, 
                    чтобы отслеживать источники переходов и эффективность рекламы</p>
                    <input class="urlCopy" type="text">
                </div>
              </div>

            <div class="smodal-foter">
                <p> Скопировать ссылку</p>
                <p> Сгенерировать QR</p>
                    <div class="sv-element"> 
                        <button  class="bat-her" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                           <div>  <p>Настроить метки<p> </p></div>
                          </button>                          
                    </div>

                    
            </div>
    </div>
</div>
    `)
    document.body.appendChild(modalC)
    return modalC
   }
      
$.modalC=function(options){
   
    const $modalC = _createModalCopy(options)
    
    return{
        open(){           
          $modalC.classList.add('open')
        },
        close(){
         $modalC.classList.remove('open')       
        },
    }
}