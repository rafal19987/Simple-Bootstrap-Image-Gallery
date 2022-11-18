//const colors = ['red', 'green', 'blue', 'orange', 'yellow', 'pink', 'black', 'red', 'green', 'blue', 'orange', 'yellow', 'pink', 'black']
const imageBox = document.querySelector('.imageBox')
let images = []
for( let i = 1; i <= 96; i++ ) {
  images.push(`${i}.jpg`)
}

//console.log(images)

// const images = ['1.jpg', '2.jpg', '3.jpg', '1.jpg', '2.jpg', '3.jpg', '1.jpg', '2.jpg', '3.jpg', '1.jpg', '2.jpg', '3.jpg']
images.forEach( (img) => {
  let image = document.createElement('div')
  let item = document.createElement('img')
  image.appendChild(item)
  image.classList.add('image')
  item.setAttribute('src', img)
  imageBox.appendChild(image)
})


const target = (event) => {
  console.log(event.target.value)
} 

const allImages = document.querySelectorAll('.image')
console.log(allImages)


allImages.forEach( (el) => {
  el.addEventListener('click', ()=> {console.log(event.target.src)})
})
