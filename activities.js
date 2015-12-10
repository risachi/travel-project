var restultsDiv = document.getElementById("results");

restultsDiv.innerHTML = " ";

/*** I was thinking we could maybe store the items checked and unchecked
in an object for the persistence part of the assignment ***/

/** Adding Event Listeners to each checkbox **/
var checkboxes = document.getElementsByTagName("input");

for(var index = 0; index < checkboxes.length; index++) {
  checkboxes[index].addEventListener("change", function(){updateResults(this.id);});
}

function updateResults(checkedBox){
  var changedBox = document.getElementById(checkedBox);
  alert(checkedBox + " is " + changedBox.checked);

}
