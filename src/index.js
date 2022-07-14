// Your code here
const baseUrl = ('http://localhost:3000/films')

const title = document.getElementById('title')
const runTime = document.getElementById('runtime')
const showTime = document.getElementById('showtime')
const filmInfo = document.getElementById('film-info')
const ticketNum = document.getElementById('ticket-num')
ticketNum.textContent = 3
const poster = document.getElementById('poster')
const films  = document.getElementById('films')
const li = document.getElementById('first-title')
li.textContent = ''
const btn = document.getElementById('buy-ticket')


const request = async () => {
    let req = await fetch(baseUrl + '/1')
    let res = await req.json()
    //console.log('RES', res)
    title.textContent = res.title
    runTime.textContent = res.runtime + ' minutes'
    filmInfo.textContent = res.description
    showTime.textContent = res.showtime
    poster.src = res.poster
   
}
request()
const fetchFilms = async () => {
    let req = await fetch(baseUrl)
    let res = await req.json()
    console.log('RES', res)
    res.forEach((data) => {
        const li = document.createElement('li')
        li.textContent = data.title
        films.append(li)
    })
}
fetchFilms()
let num = 3 
btn.addEventListener('click', () => {
    if (num > 0) {
    ticketNum.textContent = `${--num}`
    }

})