const button = document.querySelector('button')
const breedInput = document.querySelector('input')
const imageDiv = document.querySelector('div')

button.addEventListener('click', async () => {
    let response = await axios.get("https://www.fishwatch.gov/api/species")
    // let response = await axios.get("https://api.thecatapi.com/v1/images/search")
    console.log(response.data)

    let catPic = response.data[0].url      //this stores the data. response is an object,
    imageDiv.innerHTML = `<img src=${catPic}>`     //this will run for response which is dog pic when we search pug
})



//Emoji API option was a fail.:()
///===========================================================================
///===========================================================================
///===========================================================================
///===========================================================================
///===========================================================================
///===========================================================================
///===========================================================================
///===========================================================================
// const button = document.querySelector('button')
// const emojiInput = document.querySelector('input')
// const imageDiv = document.querySelector('div')

// const emoImg = document.querySelector('.emoImg')

// button.addEventListener('click', async () => {
//     let response = await axios.get("https://emojihub.herokuapp.com/api/random")

//     console.log(response.data)

//     let emoji = response.data.htmlCode[0]    
//     emoImg.innerText = emoji

// })
//////////// missing something in the code above to generate emojis
///===========================================================================
///===========================================================================
///===========================================================================
///===========================================================================

  //  const getPosts = async () => {
  //   const response = await axios.get('https://emojihub.herokuapp.com/api/random')


// const button = document.querySelector('button')
// const emojiInput = document.querySelector('input')
// const imageDiv = document.querySelector('div')

// const emoImg = document.querySelector('.emoImg')

// button.addEventListener('click', async () => {
//     let response = await axios.get("https://emojihub.herokuapp.com/api/random")
//     console.log(response.data);
//     function filter

//         name: "hugging face",
//         category: "smileys and people",
//         group: "face positive",
//         htmlCode: [
//           "&#129303;"
//         ],
//         unicode: [
//           "U+1F917"
//         ]
      
//     }

///===========================================================================
///===========================================================================
///===========================================================================
///===========================================================================
///////////// TO DO: emoji api page had the code below to add figure out how to make it work. maybe create a json file.
// import request = require('request');

// const URL = "https://emojihub.herokuapp.com/api/random";
// request({

//     name: "hugging face",
//     category: "smileys and people",
//     group: "face positive",
//     htmlCode: [
//       "&#129303;"
//     ],
//     unicode: [
//       "U+1F917"
//     ]
//     console.log(data);
//   }



///===========================================================================
///===========================================================================
///===========================================================================
///===========================================================================
// const button = document.querySelector('button')
// const emoInput = document.querySelector('input')
// const imageDiv = document.querySelector('div')

// const emoImg = document.querySelector('.emoImg')

// button.addEventListener('click', async () => {
//     let response = await axios.get("https://emojihub.herokuapp.com/api/random")

//     const emoImg = {
//     name: "hugging face",
//     category: "smileys and people",
//     group: "face positive",
//     htmlCode: [
//       "&#129303;"
//     ],
//     unicode: [
//       "U+1F917"
//     ]
// }

// // console.log(response.data)
//     console.log(data);

// })




///===========================================================================
///===========================================================================
///===========================================================================
///===========================================================================///===========================================================================
///===========================================================================
///===========================================================================
///===========================================================================///===========================================================================
///===========================================================================
///===========================================================================
///===========================================================================///===========================================================================
///===========================================================================
///===========================================================================
///===========================================================================///===========================================================================
///===========================================================================
///===========================================================================
///===========================================================================
// const myFunction = async () => {
//     console.log('first')
//     await axios.get('https://dog.ceo/api/breeds/list/all').then((response) => {
//         console.log('second')
//         console.log(response)
//       })
//     console.log('third')
//   }
//   myFunction()


  ////the code above tellline 3 to wait
  /////=========================================================
  /////=========================================================


//   const getPosts = async () => {
//     const response = await axios.get('https://dog.ceo/api/breeds/list/all')
//     console.log(response)
//   }
//   getPosts()

  ////the code above gets info on all dog breeds
  /////=========================================================
  /////=========================================================


/////////////////////////////////
/////////////////////////////////


//   // code below works with new content in index.html body. searching for pugs
//   const button = document.querySelector('button')
//   const breedInput = document.querySelector('input')
//   const imageDiv = document.querySelector('div')

//   button.addEventListener('click', async () => {
//       let breed = breedInput.value
//       let response = await axios.get(     //response is convention. await - this wait till it gets a response befpre moving on
//         `https://dog.ceo/api/breed/${breed}/images/random`)      //${} - this is a temple literal
//         // console.log(response)    //this will run for await axois

//         let dogPic = response.data.message      //this stores the data. response is an object,
//         imageDiv.innerHTML = `<img src=${dogPic} />`     //this will run for response which is dog pic when we search pug
//   })   //this is a function that listens to what happens




/////////////////////////////////
/////////////////////////////////
/////////////////////////////////
/////////////////////////////////


////  class assignment

// const button = document.querySelector('button')
// const breedInput = document.querySelector('input')
// const imageDiv = document.querySelector('div')

// button.addEventListener('click', async () => {
//     let response = await axios.get("https://api.thecatapi.com/v1/images/search")
//     console.log(response.data)

//     let catPic = response.data[0].url      //this stores the data. response is an object,
//     imageDiv.innerHTML = `<img src=${catPic}>`     //this will run for response which is dog pic when we search pug
// })
