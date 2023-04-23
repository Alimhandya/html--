function changestyle(){
    var element =document.getElementById("home");
    element.innerHTML="Измененный текст домашнего задания";
}
function returnbackstyle(){
    var element2 =document.getElementById("home");
element2.innerHTML="Текстовый блок для домашнего задания";
}
function changestyle2(){
    var element3 =document.getElementById("heading_demo");
    element3.innerHTML="А вот и изменненный заголовок";
}
function returnbackstyle2(){
    var element4 =document.getElementById("heading_demo");
element4.innerHTML="heading_demo";
}
function changestyle3(){
    var element5 =document.getElementById("mydiv");
    element5.style.borderRadius="10px";
}
function changestyle4(){
    var element6 =document.getElementById("mydiv");
    element6.style.borderRadius="30px";
}
function changestyle5(){
    var element7 =document.getElementById("mydiv");
    element7.style.border="10px dashed";
}
function returnbackstyle6(){
    var element8 =document.getElementById("mydiv");
    element8.style.border="1px ";
}
function change_result(){
    let element9=document.getElementById("demo")
    element9.innerHTML="после наших курсов = 87 баллов";
}
function show_result(){
    let element=document.getElementById("sum" )
   let logic_result=43;
   let math_result=44;
  const sum_result=logic_result+math_result;
    element.innerHTML= sum_result;
    let year=0;
   year = prompt('В каком году вы родились?',year)
alert(`вам осталось  ${ 100-(2023-year)}лет до 100` )
}
function show_result1(){
    let element11=document.getElementById("logic");
    let logic_result=43;
    element11.innerHTML=logic_result;
}
function show_result2(){
    let element12=document.getElementById("math");
    let math_result=44;
    element12.innerHTML=math_result;
}
function show_result4(){
    
    var n=document.getElementById('number').value;
    var r=document.getElementById('result');
    if(n<2)  r.innerHTML='ваш число четное';
if(n>2) r.innerHTML='ваше число нечетное';
}
function result(){
    alert(234+89-(183+37)+3)
}
function result1(){
    alert(13*7/4+(33/3*5))
}
function result2(){
    alert(359 % 6)
}
function result3(){
    alert(5**23)
}
function result4(){
    alert(323.5>323)
}