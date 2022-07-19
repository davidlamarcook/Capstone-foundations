const entreeContainer = document.querySelector('#entree')
const appetizerContainer = document.querySelector('#appetizers')
const beverageContainer = document.querySelector('#beverages')

function getFood() {
    entreeContainer.value = ''

    axios.get('http://localhost:5678/entrees')
    .then(res => {
        res.data.forEach(elem => {
            let entreecard = `<div class="item-card">
                <img src="${elem.photo_url}"/>
                <h2>${elem.food_name}</h2>
                <h3>$${elem.price}</h3>
                <h3>${elem.description}.</h3>
                </div>`

                entreeContainer.innerHTML += entreecard
        })
    })
}

function getAppetizers() {
    appetizerContainer.value = ''

    axios.get('http://localhost:5678/appetizers')
    .then(res => {
        res.data.forEach(elem => {
            let appetizercard = `<div class="item-card">
                <img src="${elem.photo_url}"/>
                <h2>${elem.food_name}</h2>
                <h3>$${elem.price}</h3>
                <h3>${elem.description}.</h3>
                </div>`

                appetizerContainer.innerHTML += appetizercard
        })
    })
}

function getdrinks() {
    beverageContainer.value = ''

    axios.get('http://localhost:5678/drinks')
    .then(res => {
        res.data.forEach(elem => {
            let beveragecard = `<div class="item-card">
                <img src="${elem.photo_url}"/>
                <h2>${elem.food_name}</h2>
                <h3>$${elem.price}</h3>
                <h3>${elem.description}.</h3>
                </div>`

                beverageContainer.innerHTML += beveragecard
        })
    })
}

getFood()
getAppetizers()
getdrinks()