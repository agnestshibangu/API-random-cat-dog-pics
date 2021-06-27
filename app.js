const catResult = document.getElementById('cat_result');
const catBtn = document.getElementById('catButton');

const dogResult = document.getElementById('dog-result');
const dogBtn = document.getElementById('dogButton'); 

catBtn.addEventListener('click', getRandomCat)



function getRandomCat() {
    fetch('https://aws.random.cat/meow')
    .then(res => res.json())
    .then(data => {
        if (data.file.includes('.mp4')) {
            getRandomCat()
        } else {
            catResult.innerHTML = `<img class="images" src="${data.file}"/>`
        }
    
    })
}


dogBtn.addEventListener('click', getRandomDog)

function getRandomDog() {
    fetch('https://random.dog/woof.json')
    .then(res => res.json())
    .then(data => {
        if(data.url.includes('mp4')) {
            getRandomDog()
        } else {
            dogResult.innerHTML = `<img class="images" src="${data.url}"/>`
        }
    
    })
}

