
//add event listener to run function
document.querySelector('button').addEventListener('click', calcHoroscope)

function calcHoroscope() {
    //create variables for each input
    let month = document.querySelector('#month').value.toLowerCase()
    let day = Number(document.querySelector('#day').value)
    let year = Number(document.querySelector('#year').value)
    //use switch cases for each condition
    switch (month) {
        // Aquarius: January 20 – February 18
        case 'january':
            day > 0 && day < 20 ? document.querySelector('h2').innerText = 'You are an Capricorn' : document.querySelector('h2').innerText = 'You are an Aquarius'
            break;

        // Pisces: February 19 – March 20
        case 'february':
            day > 0 && day < 19 ? document.querySelector('h2').innerText = 'You are an Aquarius' : document.querySelector('h2').innerText = 'You are a Pisces'
            break;

        //Aries: March 21 – April 19
        case 'march':
            day > 0 && day < 21 ? document.querySelector('h2').innerText = 'You are a Pisces' : document.querySelector('h2').innerText = 'You are an Aries'
            break;

        // Taurus: April 20 – May 20
        case 'april':
            day > 0 && day < 20 ? document.querySelector('h2').innerText = 'You are a Aries' : document.querySelector('h2').innerText = 'You are a Taurus'
            break;

        // Gemini: May 21 – June 21
        case 'may':
            day > 0 && day < 21 ? document.querySelector('h2').innerText = 'You are a Taurus' : document.querySelector('h2').innerText = 'You are a Gemini'
            break;

        // Cancer: June 22 – July 22
        case 'june':
            day > 0 && day < 22 ? document.querySelector('h2').innerText = 'You are a Gemini' : document.querySelector('h2').innerText = 'You are a Cancer'
            break;
        // Leo: July 23 – August 22
        case 'july':
            day > 0 && day < 23 ? document.querySelector('h2').innerText = 'You are a Cancer' : document.querySelector('h2').innerText = 'You are a Leo'
            break;

        // Virgo: August 23 – September 22
        case 'august':
            day > 0 && day < 23 ? document.querySelector('h2').innerText = 'You are a Leo' : document.querySelector('h2').innerText = 'You are a Virgo'
            break;

        // Libra: September 23 – October 23
        case 'september':
            day > 0 && day < 23 ? document.querySelector('h2').innerText = 'You are a Virgo' : document.querySelector('h2').innerText = 'You are a Libra'
            break;

        // Scorpio: October 24 – November 21
        case 'october':
            day > 0 && day < 24 ? document.querySelector('h2').innerText = 'You are a Libra' : document.querySelector('h2').innerText = 'You are a Scorpio'
            break;
        // Sagittarius: November 22 – December 21
        case 'november':
            day > 0 && day < 22 ? document.querySelector('h2').innerText = 'You are a Scorpio' : document.querySelector('h2').innerText = 'You are a Sagittarius'
            break;

        // Capricorn: December 22 – January 19
        case 'december':
            day > 0 && day < 22 ? document.querySelector('h2').innerText = 'You are a Sagittarius' : document.querySelector('h2').innerText = 'You are a Capricorn'
            break;
        default:
            console.log('not working')
    }
}