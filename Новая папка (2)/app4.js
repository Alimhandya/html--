const board= document.querySelector('#board')
const colors=['blueviolet', 'pink','blue','rgb(43, 128, 226)','orange']
const SQUARES_NUMBER = 400
for(let i = 0; i<SQUARES_NUMBER;i++){
    const square= document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', setColor)
    square.addEventListener('mouseleave',  removeColor)
    board.append(square)
}
function setColor(event){
    const element=event.target
    const color =getRandomColor()
    element.style.backgroundColor= color
    element.style.boxShadow =`0 0 2 px ${color},0 0 10px ${color}`
}
function removeColor(event){
    const element=event.target
    element.style.backgroundColor= 'rgb(31, 28, 28)'
    element.style.boxShadow =`0 0 2 px black`
}
function getRandomColor(){
    
    return colors[Math.floor(Math.random()* colors.length)]
}