//
// Data
//

function activity(name, location, hours, isIndoor, tags) {
  this.name = name;
  this.location = location;
  this.hours = hours;
  this.isIndoor = isIndoor;
  this.tags = tags;
}

var listOfActivities = [
  new activity("Oregon Zoo", "Washington Park", "9am-5pm", false, family),
];
