const button = document.querySelector('button')
const patternInput = document.querySelector('input')
const imageDiv = document.querySelector('div')

const emoImg = document.querySelector('.emoImg')

button.addEventListener('click', async () => {
    let response = await axios.get("https://emojihub.herokuapp.com/api/random")
    console.log(response.data)

    let emoji = response.data.htmlCode[0]    
    emoImg.innerText = emoji

})



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