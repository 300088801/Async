//Promises
// const log = (message)=> {
//      const promise =  new Promise((resolve)=>{
//         setTimeout(() => {
//             console.log(message)
//             resolve()
//         }, 1000) 
//      })
//      return promise
// }

/*log('hi')
    .then (()=> log('there'))
    .then (()=> log('how'))
    .then (()=> log('are'))
    .then (()=> log('you?'))*/


//IIFE - immediately invoked function expression
const https = require('https')

const getDataFromURL = async (url) => {
    return new Promise((resolve, reject) => {
            https.get(url, response => {
        let body = ''
        response.on('data', data => body += data.toString())
        response.on('end', ()=> resolve(JSON.parse(body)))
        response.on('error', reject)
        })
    })

}

(async () => {
    /*await log('hi')
    await log('hi')
    await log('hi')
    await log('hi')*/
    
    const url = 'https://swapi.dev/api/people/10'
    const swData = await getDataFromURL(url)
    console.log(swData)
})()