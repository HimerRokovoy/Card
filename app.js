const openBtn = document.querySelector('#open')
const closeBtn = document.querySelector('#close')
const container = document.querySelector('.container')
const left = document.querySelector('#left')
const right = document.querySelector('#right')
const blue = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg']
const red = ['8.jpg', '9.jpg', '10.jpg', '11.jpg', '12.jpg', '13.jpg', '14.jpg', '15.jpg']
let isRed = true
let isBlue = false
let activeImgIndex = 0 
const card = document.querySelector('.card')
const chooseColorRed = document.querySelector('.red')
const chooseColorBlue = document.querySelector('.blue')
let imgs = document.querySelectorAll('.gallery-item')
let gallery = document.querySelector('.gallery')
const galleryItem = document.createElement('div')
const activeImg = gallery.firstChild
let currentImgs = []


function fillGalery(color)
{

    dropGallery()
    offset = 0
    currentImgs = []
    let i = 0
    for(const img of color )
    {
        
        const galleryItem = document.createElement('div')
        galleryItem.classList.add('gallery-item')
        galleryItem.style.backgroundImage = `url(./images/${img})`
        if(!i)
        {
            galleryItem.classList.add('active')
            i++
            card.style.backgroundImage = galleryItem.style.backgroundImage 
        }
        gallery.append(galleryItem)
        currentImgs.push(galleryItem)
        

       
        
    }
     imgs = document.querySelectorAll('.gallery-item')
    
    for(const thisimg of imgs)
    {
        thisimg.addEventListener('click', () =>{
            for(const img of imgs)
            {
                img.classList.remove('active')
            }
            thisimg.classList.add('active')
            activeImgIndex = currentImgs.indexOf(thisimg)
            card.style.backgroundImage = thisimg.style.backgroundImage
        })
    }
    

}

function dropGallery()
{
    while(gallery.firstChild) 
    {
        gallery.firstChild.remove()
    }
    activeImgIndex = 0
}



chooseColorRed.addEventListener('mousedown', () =>{
    
    chooseColorBlue.classList.remove('activecolor')
    chooseColorRed.classList.add('activecolor')
    fillGalery(red)
    
})

chooseColorBlue.addEventListener('click', () =>{
    

    chooseColorRed.classList.remove('activecolor')
    chooseColorBlue.classList.add('activecolor')
    fillGalery(blue)
       
})

openBtn.addEventListener('click', () => {
    container.style.opacity = 1;
    openBtn.style.opacity = 0;
    chooseColorRed.classList.add('activecolor');
    fillGalery(red);

})

closeBtn.addEventListener('click', () =>{
    openBtn.style.opacity = 1;
    container.style.opacity = 0;
    chooseColorRed.classList.remove('activecolor')
    chooseColorBlue.classList.remove('activecolor')
})

left.addEventListener('click', () =>{
    slide('left')
})

right.addEventListener('click', () =>{
    slide('right')
})

let offset = 0

function slide(direction)
{
    if(direction === 'left')
    {
        if(activeImgIndex === 0)
        {
            activeImgIndex = imgs.length - 1
            offset = -(imgs.length-3) * 9
        }
        
        else if(offset === 0)
        {
            activeImgIndex--
            
        }
        else
        {
            activeImgIndex--
            offset += 9
        }
        
       
        
        console.log(offset)
    }
    else if(direction === 'right')
    {
        if(activeImgIndex === imgs.length - 1)
        {
            activeImgIndex = 0
            offset = 0
        }
        
        else if(offset === -(imgs.length-3)*9)
        {
            activeImgIndex++
            
        }
        else
        {
            activeImgIndex++
            offset -= 9
        }
       
        console.log(offset)
    }
        
    for(const img of imgs)
    {
        img.classList.remove('active')
        img.style.left = `${offset}em`
    }

    imgs[activeImgIndex].classList.add('active')
    card.style.backgroundImage = imgs[activeImgIndex].style.backgroundImage
}




