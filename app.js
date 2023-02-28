const openBtn = document.querySelector('#open')
const closeBtn = document.querySelector('#close')
const container = document.querySelector('.container')
const left = document.querySelector('#left')
const right = document.querySelector('#right')
const imgs1 =['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg']
let activeImgIndex = 0 
const card = document.querySelector('.card')
const imgs = document.querySelectorAll('.gallery-item')

// imgs.addEventListener('mousedown', () => {

// })


openBtn.addEventListener('click', () => {
    container.style.opacity = 1;
})

closeBtn.addEventListener('click', () =>{
    container.style.opacity = 0;
})

left.addEventListener('click', () =>{
    slide('left')
})

right.addEventListener('click', () =>{
    slide('right')
})



function slide(direction)
{
    if(direction === 'left')
    {
        if(activeImgIndex === 0)
        activeImgIndex = imgs1.length - 1
        else
        activeImgIndex--
    }
    else if(direction === 'right')
    {
        if(activeImgIndex === imgs1.length - 1)
        activeImgIndex = 0
        else
        activeImgIndex++
    }

    for(const img of imgs)
    {
        img.classList.remove('active')
    }

    imgs[activeImgIndex].classList.add('active')
    card.style.backgroundImage = `url(./images/${imgs1[activeImgIndex]})`
    



}

function selectImg()
{

}