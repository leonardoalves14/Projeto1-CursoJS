
const colors = ['Red', 'Blue', 'Green', 'Yellow', 'Purple', 'Black']
const btn = document.getElementById('btn')
const colorName = document.querySelector('.color')

btn.addEventListener('click', function(){
    const randomColor = getRandomColor ()
    document.body.style.background = colors[randomColor]
    // console.log(randomColor)
    colorName.textContent = colors [randomColor]
})

function getRandomColor () {
    return Math.floor(Math.random() * colors.length)
}
