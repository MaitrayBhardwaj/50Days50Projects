const boxes = document.querySelectorAll('.box')

const checkVisibility = () => {
    const bottom = window.innerHeight / 5 * 4
    boxes.forEach((box) => {
        const { top } = box.getBoundingClientRect()

        if(top < bottom){
            box.classList.add('center')
        }
        else{
            box.classList.remove('center')
        }
    })
}

window.addEventListener('scroll', checkVisibility)

checkVisibility()