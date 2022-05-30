
const hour =document.querySelector('#horloge > p')
const hourAbbr =document.querySelector('#horloge > p > span')
const quote =document.querySelector('#p_height_page')
const authorQuote = document.querySelector('#span_height_page')
const city =document.querySelector('#position p')
console.log(hourAbbr);


function timeSet() {
fetch("http://worldtimeapi.org/api/ip").then((response) =>
  response.json().then((data) => {
    let unix_timestamp = (data.unixtime)
    // Create a new JavaScript Date object based on the timestamp
    // multiplied by 1000 so that the argument is in milliseconds, not seconds.
    var date = new Date(unix_timestamp * 1000);
    // Hours part from the timestamp
    var hours = date.getHours();
    // Minutes part from the timestamp
    var minutes = "0" + date.getMinutes();
    // Seconds part from the timestamp
     var seconds = "0" + date.getSeconds();
    
    // Will display time in 10:30:23 format
    


    let formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
     //let formattedTime = hours + ':' + minutes.substr(-2) ;
    

    
    let abbr = data.abbreviation
    const time = document.createTextNode(`${formattedTime}`);
    const abbreviation = document.createTextNode(`${abbr}`);
    


    hour.replaceChildren(time)
    hourAbbr.replaceChildren(abbreviation)

    



  }))}
  
 
  
 setInterval(()=>{
    timeSet()
  }, 1000);


  fetch("https://geolocation-db.com/json/").then((response) =>
    response.json().then((dataLocalisation) => {
      // let timeZone = data.timezone
      console.log(dataLocalisation);
      const timeZoneText = document.createTextNode(`${dataLocalisation.city},${dataLocalisation.country_code}`);
      city.replaceChildren(timeZoneText)

    }))



  fetch("https://api.quotable.io/random").then((response) =>
  response.json().then((dataQuote) => {
    let quoteAuthor = dataQuote.author;
  let quoteRandom = dataQuote.content;
  const quoteRandomText = document.createTextNode(`${quoteRandom}`);
  const quoteAuthorText = document.createTextNode(`${quoteAuthor}`);

  quote.appendChild(quoteRandomText)



  authorQuote.appendChild(quoteAuthorText)


  }))



     

        

