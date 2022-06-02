function myFunc(){
    alert("You Clicked me");
 }
 var inputval = document.querySelector('#inputcity')
var btn = document.querySelector('#search');
var city = document.querySelector('#cityoutput')
var descrip = document.querySelector('#description')
var temp = document.querySelector('#temp')
var wind = document.querySelector('#wind')
apik = "cd8c5b68ee7287f24dfd9a279a59629f"
function convertion(val){
return (val - 273).toFixed(2)
}
btn.addEventListener('click',function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputval.value+'&appid='+apik)
.then(res => res.json())
.then(data => {
    var nameval = data['name']
    var descrip = data['weather']['0']['description']
    var tempature = data['main']['temp']
    var wndspd = data['wind']['speed']

    cityoutput.innerHTML=`Weather of <span>${nameval}<span>`
    temp.innerHTML = `Temperature: <span>${ convertion(tempature)} C</span>`
    description.innerHTML = `Sky Conditions: <span>${descrip}<span>`
    wind.innerHTML = `Wind Speed: <span>${wndspd} km/h<span>`
})
.catch(err => alert('You entered Wrong city name'))
})