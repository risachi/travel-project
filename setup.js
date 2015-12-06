// Returns a list of all activities
function allActivities() {
  return listOfActivities;
}

// Returns all the activity names in alphabetical order
function allActivityNames() {
  return listOfActivities.map(function (activity) {
    return activity.name;
  }).sort();
}

// Return all activities that have the given tag
// @param tag: a string with the tag name, e.g. "kidFriendly" or "adult"
function activitiesForTag(tag) {
  return tags[tag].sort();
}

// Returns all the tags ("kidFriendly" and "adult" so far) in alphabetical order
function allTags() {
  return Object.keys(tags).sort();
}


//
// Data
//
function activity(name, location, hours, isIndoor, intensity, cost) {
  this.name = name;
  this.location = location;
  this.hours = hours;
  this.isIndoor = isIndoor;

  //intensity is "low" (sitting), "medium" (walking), "high" (very active)
  this.intensity = intensity;

  this.cost = cost;
}

var listOfActivities = [
  new activity("Oregon Zoo", "4001 Southwest Canyon Road, Portland, OR 97221", "9am-4pm", false, "medium", "$11.50"),
  new activity("Voodoo Donuts", "22 SW 3rd Ave, Portland, OR 97204", "24hrs", true, "low", "$5"),
  new activity("Portland Children's Museum", "4015 SW Canyon Rd, Portland, OR 97221", "9am-5pm", true, "medium", "$10.75"),
  new activity("Portland Art Museum", "1219 SW Park Ave, Portland, OR 97205", "10am-5pm", true, "medium", "$19.99"),
  new activity("Evergreen Aviation Museum", "500 NE Captain Michael King Smith Way, McMinnville, OR 97128", "9am-5pm", true, "medium", "$25"),
  new activity("Tillamook Cheese Factory", "4175 Highway 101 North, Tillamook, OR 97141", "8am-6pm", true, "medium", "free"),
  new activity("Newport Aquarium", "1 Aquarium Way, Newport, KY 41071", "10am-6pm", true, "medium", "$19.95"),
  new activity("Pioneer Place", "700 SW 5th Ave, Portland, OR 97204", "10am-6pm", true, "medium", "varies"),
  new activity("Crystal Ballroom", "1332 W Burnside St, Portland, OR 97209", "varies", true, "low", "varies"),
  new activity("Mississippi Studios", "3939 N Mississippi Ave, Portland, OR 97227", "11am-2am", true, "low", "$15"),
  new activity("MODA Center", "1 N Center Ct St, Portland, OR 97227", "varies", true, "low", "varies"),
  new activity("Multnomah Falls", "45.57595°N 122.11536°W", "sunrise to sunset", false, "medium-high", "free"),
  new activity("Cannon Beach", "45°53′21″N 123°57′39″W", "sunrise to sunset", false, "medium-high", "free"),
  new activity("Washington Park", "4001 SW Canyon Rd, Portland, OR 97221", "5am-10pm", false, "medium-high", "free"),
  new activity("International Rose Test Garden", "400 SW Kingston Ave, Portland, OR 97205", "7:30am-9pm", false, "medium", "free"),
  new activity("Bonneville Dam", "45°38′39″N 121°56′26″W", "sunrise to sunset", false, "medium", "free"),
  new activity("Oaks Amusement Park", "7805 SE Oaks Park Way, Portland, OR 97202", "10:30am-10:30pm", false, "medium", "$20"),
  new activity("Saturday Market", "2 SW Naito Pkwy, Portland, OR 97204", "10am-5pm", false, "medium", "free"),
  new activity("The Grotto", "8840 NE Skidmore St, Portland, OR 97220", "9am-6pm", false, "medium", "$5"),
  new activity("Mt. Hood", "45°22′25″N 121°41′45″WCoordinates: 45°22′25″N 121°41′45″W", "sunrise to sunset", false, "medium-high", "free"),
  new activity("Portland Kayak Company Tours", "6600 SW Macadam Ave, Portland, OR 97239", "10am-6pm", false, "high", "$45"),
  new activity("BrewCycle", "1425 NW Flanders St, Portland, OR 97209", "8am-7pm", false, "high", "$25")
];

var tags = {
  kidFriendly: ["Oregon Zoo", "Portland Children's Museum",
                "Evergreen Aviation Museum", "Tillamook Cheese Factory",
                "Newport Aquarium", "Cannon Beach",
                "Oaks Amusement Park", "The Grotto", "Saturday Market",
                "Mt. Hood", "Bonneville Dam", "Washington Park",
                "International Rose Test Garden"],
  adult: ["BrewCycle"]
};
