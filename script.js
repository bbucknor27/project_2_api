const button = document.querySelector('button')
const patternInput = document.querySelector('input')
const imageDiv = document.querySelector('div')

button.addEventListener('click', async () => {
    let response = await axios.get("http://www.colourlovers.com/api/patterns")
    console.log(response.data)

    let colourPat = response.data[0].url      
    imageDiv.innerHTML = `<img src=${colourPat}>`     
})
