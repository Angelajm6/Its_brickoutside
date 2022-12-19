function GetInfo(){
    const newname = document.getElementById("city-input");
    const cityName = document.getElementById("city-name");
    cityName.innerHTML = "--" + newname.value + "--"
}

