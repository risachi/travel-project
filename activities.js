var restultsDiv = document.getElementById("results");
var allActivities = App.allActivities();
var savedChoices;
restultsDiv.innerHTML = " ";


/** Adding Event Listeners to each radio button **/
var checkboxes = document.getElementsByTagName("input");

for(var index = 0; index < checkboxes.length; index++) {
  checkboxes[index].addEventListener("change", updateResults);
}

function updateResults(){
  /***Clear out the results area***/
  restultsDiv.innerHTML = " ";

  /***Object to store the values chosen***/
  var choices = {};

  var isIndoor = (document.getElementById("options").isIndoor.value == "true");
  var intensity = document.getElementById("options").intensity.value;
  var cost = document.getElementById("options").cost.value;
  var kidFriendly = (document.getElementById("options").kidFriendly.value == "true");


  if(document.getElementById("options").isIndoor.value !== ""){
    choices.isIndoor = isIndoor;
  }

  if(intensity !== ""){
    choices.intensity = intensity;
  }

  if(cost !== ""){
    choices.cost = cost;
  }

  if(document.getElementById("options").kidFriendly.value !== ""){
    choices.kidFriendly = kidFriendly;
  }

  /***Console logging out the current choices***/
  var keys = Object.keys(choices);
  for(var index=0; index<keys.length; index++){
    //console.log(keys[index] + ": " + choices[keys[index]]);
  }

  for(var index=0; index<allActivities.length; index++){
    var showActivity = true;
    for(var counter=0; counter<keys.length; counter++){
     var property = keys[counter];
     showActivity = showActivity && (allActivities[index][property] == choices[property]);
    }
    if(showActivity){
      //console.log("match "+allActivities[index].name);
      restultsDiv.innerHTML += "<p>"+allActivities[index].name+"</p>";
    }
  }
  resultsCheck();
  savedChoices = choices;
  localStorage.setItem("savedChoices", JSON.stringify(savedChoices));
}

/***When no results are found for that search - throw an error message***/
function resultsCheck(){
  if(restultsDiv.innerHTML == " "){
    restultsDiv.innerHTML += "<p>No results found!</p>";
    restultsDiv.innerHTML += "<p>Please select another combination.</p>";
  }
  else {
    restultsDiv.innerHTML += "<h3>More info <a href='resources.html'>here</a>.</h3>";
  }
}

/***Persistence stuff***/

window.addEventListener("load", getChoices);

function getChoices(event){
    var localChoices = JSON.parse(localStorage.getItem("savedChoices"));
    if (localChoices == null) {
      return null;
    }
    else {
      savedChoices = localChoices;
      //console.log(savedChoices);
      loadChoices(savedChoices);
    }
}

function loadChoices(savedChoices){
  /***Clear out the results area***/
  restultsDiv.innerHTML = " ";

  /***Object to store the values chosen***/
  var choices = savedChoices;

  if(choices.isIndoor == false || choices.isIndoor == true ){
    if(choices.isIndoor == false){
      document.getElementById("outdoor").checked = true;
    }
    else {
      document.getElementById("indoor").checked = true;
    }
  }

  if(choices.intensity){
    if(choices.intensity == "low"){
      document.getElementById("lowIntensity").checked = true;
    }
    else if(choices.intensity == "medium"){
      document.getElementById("mediumIntensity").checked = true;
    }
    else {
      document.getElementById("highIntensity").checked = true;
    }
  }

  if(choices.cost){
    if(choices.cost == "lowCost"){
      document.getElementById("lowCost").checked = true;
    }
    else if(choices.cost == "medCost"){
      document.getElementById("medCost").checked = true;
    }
    else {
      document.getElementById("highCost").checked = true;
    }
  }

  if(choices.kidFriendly == false || choices.kidFriendly == true){
    if(choices.kidFriendly == false){
      document.getElementById("noKids").checked = true;
    }
    else {
      document.getElementById("kids").checked = true;
    }
  }

  /***Console logging out the current choices***/
  var keys = Object.keys(choices);
  for(var index=0; index<keys.length; index++){
    //console.log(keys[index] + ": " + choices[keys[index]]);
  }

  for(var index=0; index<allActivities.length; index++){
    var showActivity = true;
    for(var counter=0; counter<keys.length; counter++){
     var property = keys[counter];
     showActivity = showActivity && (allActivities[index][property] == choices[property]);
    }
    if(showActivity){
      //console.log("match "+allActivities[index].name);
      restultsDiv.innerHTML += "<p>"+allActivities[index].name+"</p>";
    }
  }
  resultsCheck();
  savedChoices = choices;
  localStorage.setItem("savedChoices", JSON.stringify(savedChoices));
}

/***Clear Button***/
document.getElementById("clearButton").addEventListener("click", clearResults);
function clearResults(){
  localStorage.removeItem("savedChoices");
  location.reload();
}


