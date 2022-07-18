const entreeContainer = document.querySelector('#entree')

function getFood() {
    axios.get('http://localhost:5678/entrees').then(res => {
        console.log(res.data)
        //make entree cards.
    })
}

getFood()