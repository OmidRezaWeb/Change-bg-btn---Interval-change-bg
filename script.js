// window.onload = function(){
//     let btn = document.getElementById('btn')
//     btn.addEventListener('click', function(e){
//         document.body.style.backgroundColor = randomeBgColor()
//     })

//     function randomeBgColor(){
//         return `rgb(${Math.floor(Math.random() *255)},${Math.floor(Math.random() *255)},${Math.floor(Math.random() *255)})`
//     }
// }

setInterval(flashBgColor, 500)
function flashBgColor() {
    document.body.style.background = `hsl(${Math.floor(Math.random() * 360)} ,100% ,50%)`
}
