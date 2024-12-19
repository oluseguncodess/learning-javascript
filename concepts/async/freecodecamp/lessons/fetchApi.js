// FETCH API --> this allows us to make https request to servers. e.g GET, POST, PUT, DELETE request. Makes it easy to get information from a website. It requires only 2 parameters, the url you're making a request to and the code you want to write

// NOTE --> By default, the fetch API is a GET request 

const getAllProducts = async () => {

    try {
    // fetch all the products
    const response = await fetch('https://dummyjson.com/products/')

    // convert from json
    const json = await response.json()

    // log out the data gotten
    console.log(json)
    }

    catch(error) {
        // log out any error
        console.error(error)
    }
}

getAllProducts()