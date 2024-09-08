window.onload = function(){
    let btn = document.getElementById('btn')
    btn.addEventListener('click', function(e){
        document.body.style.backgroundColor = randomeBgColor()
    })

    function randomeBgColor(){
        return `rgb(${Math.floor(Math.random() *255)},${Math.floor(Math.random() *255)},${Math.floor(Math.random() *255)})`
    }
}