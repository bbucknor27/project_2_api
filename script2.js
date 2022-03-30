const button = document.querySelector('button')
const foodInput = document.querySelector('input')
const imageDiv = document.querySelector('div')

button.addEventListener('click', async () => {
    let response = await axios.get("https://foodish-api.herokuapp.com/")
    console.log(response.data)

    let foodPic = response.data[0].url      //this stores the data. response is an object,
    imageDiv.innerHTML = `<img src=${foodPic}>`     //this will run for response which is dog pic when we search pug
})
