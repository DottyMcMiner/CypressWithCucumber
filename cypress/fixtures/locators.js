// Import Day.js
const dayjs = require('dayjs');

//locators (could also go in a separate folder)
export const URL = 'https://www.cp.pt/passageiros/en/buy-tickets'
export const departureLoc = 'input[name="textBoxPartida"]'
export const destinationLoc = 'input[name="textBoxChegada"]'
export const departureDate = '#datepicker-first'
export const returnDate = '#datepicker-second'
export const submit = 'input[class="btn btn-primary btn-green pull-right"]'
export const ticketPage = '#travelTerms'
export const cancel = '#exitButton'

//function to find future date

export function dateConverter (delay){
    const unformDate = dayjs().add(parseInt(delay), 'day');
    const formatedDate = unformDate.format('DD MMMM, YYYY');
    console.log(formatedDate);
    return formatedDate
}
