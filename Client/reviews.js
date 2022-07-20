const form = document.querySelector('form')
const itemSelect = document.querySelector('#item-select')
//let starInput = document.querySelector('input[name=ratings]:checked').value
const ratingDate = document.querySelector('#date')
const ratingLocation = document.querySelector('#location')
const ratingComment = document.querySelector('#comments')
const addBtn = document.querySelector('#addBtn')
const ratingContainer = document.querySelector('#review-container')

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
    let starInput = document.querySelector('input[name=ratings]:checked').value

    let body = {
        food_item_id: itemSelect.value,
        stars: +starInput,
        rating_date: ratingDate.value,
        rating_location: ratingLocation.value,
        rating_comment: ratingComment.value
    }
    //console.log(body.stars)
    axios.post('http://localhost:5678/food', body)
    .then(() => {
        ratingLocation.value = ''
        ratingComment.value = ''
        document.querySelector('#one').checked = true
        createReviewCard()
    })
}

function deleteReview(id) {
    axios.delete(`http://localhost:5678/reviews/${id}`)
    .then(() => createReviewCard())
}

function createReviewCard() {
    ratingContainer.value = ''

    axios.get('http://localhost:5678/reviews')
    .then(res => {
        ratingContainer.innerHTML = ''
        let results = res.data
        console.log(results)
        res.data.forEach(elem => {
         let reviewCard = `<div class="review-card">
             <h2>${elem.food_name}</h2>
             <h3>Rating: ${elem.stars}<h3>
             <h3>Date: ${elem.rating_date}<h3>
             <h3>Location: ${elem.rating_location}<h3>
             <h3>Comments: ${elem.rating_comment}<h3>
             <button onclick="deleteReview(${elem['rating_id']})">Delete</button>
             </div>`

            ratingContainer.innerHTML += reviewCard
       })
    })
}



getFood()
createReviewCard()

addBtn.addEventListener('click', postFood)