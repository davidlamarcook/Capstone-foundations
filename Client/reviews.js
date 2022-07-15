const form = document.querySelector('form')
const itemSelect = document.querySelector('#item-select')
const starInput = document.querySelector('input[name=ratings]:checked')
const ratingDate = document.querySelector('#date')
const ratingLocation = document.querySelector('#location')
const ratingComment = document.querySelector('#comments')
const addBtn = document.querySelector('#addBtn')

function getFood() {
    axios.get('http://localhost:5678/food')
    .then(res => {
        res.data.forEach(food => {
            const option = document.createElement('option')
            option.setAttribute('value', food.food_item_id)
            option.textContent = food.food_name
            itemSelect.appendChild(option)
        })
    })
}


function postFood(e) {
    e.preventDefault()
    console.log(ratingDate.value)
    let body = {
        food_item_id: itemSelect.value,
        stars: +starInput.value,
        rating_date: ratingDate.value,
        rating_location: ratingLocation.value,
        rating_comment: ratingComment.value
    }
    axios.post('http://localhost:5678/food', body)
    .then()
}

getFood()

addBtn.addEventListener('click', postFood)