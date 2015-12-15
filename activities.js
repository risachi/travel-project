var restultsDiv = document.getElementById("results");
var allActivities = App.allActivities();

restultsDiv.innerHTML = " ";

/** Adding Event Listeners to each checkbox **/
var checkboxes = document.getElementsByTagName("input");

for(var index = 0; index < checkboxes.length; index++) {
  checkboxes[index].addEventListener("change", function(){updateResults(this.id);});
}

function updateResults(checkedBox){
  var changedBox = document.getElementById(checkedBox);
  /**alert(checkedBox + " is " + changedBox.checked);**/

  /**Indoor and Outdoor options**/
  var outdoor = document.getElementById("outdoor");
  var indoor = document.getElementById("indoor");

  if(outdoor.checked){
    restultsDiv.innerHTML = " ";
    for(var index=0; index<allActivities.length; index++){
      if(allActivities[index].isIndoor == false){
        restultsDiv.innerHTML += "<p>"+allActivities[index].name+"</p>";
      }
    }
  }
  else {
    restultsDiv.innerHTML = " ";
    for(var index=0; index<allActivities.length; index++){
      if(allActivities[index].isIndoor == true){
        restultsDiv.innerHTML += "<p>"+allActivities[index].name+"</p>";
      }
    }
  }

}
