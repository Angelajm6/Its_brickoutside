function GetInfo(){
    const newname = document.getElementById("city-input");
    const cityName = document.getElementById("city-name");
    cityName.innerHTML = "--" + newname.value + "--"

//link for the weather API
fetch("https://api.openweathermap.org/data/2.5/forecast?q='+newName.value+'&appid=6ab94a05776e0c97a5014f2b05bcf440") 
.then(response => response.jsoon())
//get min temperature
.then(date =>{
for(i=0; i<5; i++) {
    document.getElementById("day" + (i+1) + "Min").innerHTML = "Min:" + number(data.list[i].main.temp_min -274.66).toFixed(1)+"&#176"
}
//get max temperature
for(i=0; i<5; i++) {
    document.getElementById("day" + (i+1) + "Max").innerHTML = "Max:" + number(data.list[i].main.temp_max -274.84).toFixed(1)+"&#176"
}
//get icons for every image
for(i=0;i<5; i++){
    document.getElementById("img" +(i+1)).src = "http://openweathermap.org/img/wn/") + data.list[i].weather[0].icon + ".png";
}
})


//In case there's an error, display an error message
.catch(err => alert("something went wrong!"))
}

//Display the different Days
const d = new Date();
const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

function CheckDay(day){
    if(day +d.getDay() > 6){
        return day + d.getDay() -7;
    }
    else {
        return day + d.getDay();
    }
}

for (i=0; i<5;i++){
    document.getElementById("day" + (i+1)).innerHTML = weekday[CheckDay(i)];
}



