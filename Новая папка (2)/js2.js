

function shownumbers(){
    let i=0;
    while(i <= 10){
        alert(i);
        i +=1;
    }
}
function shownumbers1(){
    let i=1;
    while(i <= 20){
        alert(i);
        i +=2;
    }
    
}
function shownumbers2(){
    let i=0;
    while(i <= 20){
        alert(i);
        i +=2;
    }
}
function shownumbers3(){
    let sum = 0;

    while (true) {
    
      let value = +prompt("Введите число", '');
    
      if (!value) break;
    
      sum += value;
    
    }
    alert( 'Сумма: ' + sum );
}
function changestyle(){
   var element=document.getElementById("mydiv");

element.style.marginLeft=`${90}%`;
element.style.transition='5000ms';
}
function changestyle1(){
    var element=document.getElementById("mydiv1");
 
 element.style.marginLeft=`${70}%`;
 element.style.transition='5000ms';
 
 
 }
 function changestyle2(){
    var element=document.getElementById("mydiv2");
 
 element.style.marginLeft=`${50}%`;
 element.style.transition='5000ms';
 
 
 }
 function changestyle3(){
    var element=document.getElementById("mydiv3");
 
 element.style.marginLeft=`${30}%`;
 element.style.transition='5000ms';
 
 
 }
 function changestyle4(){
    var element=document.getElementById("mydiv4");
 
 element.style.marginLeft=`${10}%`;
 element.style.transition='5000ms';
 }
 function all_even(){
    
 }
 co