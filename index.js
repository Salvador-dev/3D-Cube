const cubo = document.querySelector('.cubo')

cubo.addEventListener("click", (e)=>{
    cubo.style.transform = `rotateX(${e.clientX}deg)  rotateY(${e.clientY}deg`


})

