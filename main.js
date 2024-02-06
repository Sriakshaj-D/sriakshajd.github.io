var USERname = localStorage.getItem(username, username);
var points = 0;
function windpower(){
    document.getElementById("desc").innerHTML= "Wind turbines: these use air to turn kinetic energy into electricity. They use winds and are reliable in windy areas.";
    console.log("sent");
}
function waterpower(){
    document.getElementById("desc").innerHTML= "Hydroelectricity:Hydroelectric energy, also called hydroelectric power or hydroelectricity, is a form of energy that harnesses the power of water in motion— such as water flowing over a waterfall-to generate electricity.";
}
function sunpower(){
    document.getElementById("desc").innerHTML= "Solar panel:A solar panel is a device that converts sunlight into electricity by using photovoltaic (PV) cells. PV cells are made of materials that produce excited electrons when exposed to light.";
}
function nukepower(){
    document.getElementById("desc").innerHTML= "Nuclear fusion: The sun uses nuclear fusion to produce massive amounts of energy by blasting oxygen and hydrogen atoms together. Humanity is trying to replicate these processes with particle acceleration in nuclear powerplants.";
}
function teleportecotips(){
    window.location = "index2.html"
}
function teleportrenewableenergy(){
    window.location = "index3.html"
}
function teleportecochallenges(){
    window.location = "index4.html"
    console.log(USERname);
}
function donate(){
    points = points + 1;
    
    document.getElementById("first").innerHTML = "Akshaj"
}
function setusername(){
    username = document.getElementById("usernameinput").value;
    localStorage.setItem(username, username);
    console.log("username set", username);
    window.location = "index.html";
}