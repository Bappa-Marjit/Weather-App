
let btn= document.querySelector('button');
let input= document.querySelector('input');
let hum = document.querySelector('.hum');
let spd = document.querySelector('.spd');
let temp = document.querySelector('.temp');
let out_put = document.querySelector(".out_put");
let descrip = document.querySelector('#descrip');
let img = document.querySelector('.im');
let body = document.querySelector('body');


async function fetchWeather(city){
    console.log(input.value);
    try{
    const api_key = "205670edc87967b00543b88604a18cb8";
    const api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`
    let res = await axios.get(api);
    hum.innerHTML =`${res.data.main.humidity}%`;
    spd.innerHTML =`${res.data.wind.speed}km/h`;
    temp.innerHTML =`${Math.round(res.data.main.temp - 273.15)}℃`;
    descrip.innerHTML =`${res.data.weather[0].main}`;
    out_put.style.display = 'flex';
switch(res.data.weather[0].main){
    case 'Clouds':
        img.src = `images/6122561.png`;
        break;
        case 'Haze':
        img.src = `images/4151022.png`;
        break;
        case 'Mist':
            img.src = `images/weather-foggy-sunny-512.webp`;
            break;
            case 'Rain':
                img.src = `images/cloud-rain-icon-2.png`;
                break;
                case 'Clear':
                    img.src = `images/5dbfb7e9eeed40c97ae9cb13b46aad91.png`;
                    break;
}
    console.log(res.data);
    }catch(e) {
    console.log(e.message);
}

}

btn.addEventListener("click",()=>{
    fetchWeather(input.value);
    input.value = "";
})





document.addEventListener("keypress",(e)=>{
if(e.key == "Enter"){
    fetchWeather(input.value);
    input.value = "";
}

})