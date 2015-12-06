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
  new activity("Oregon Zoo", "Washington Park", "9am-5pm", false, "medium", "$15"),
  new activity("Voodoo Donuts"),
  new activity("Children's Museum"),
  new activity("Art Museum"),
  new activity("Evergreen Aviation Museum"),
  new activity("Tillamook Creamery"),
  new activity("Newport Aquarium"),
  new activity("Pioneer Place"),
  new activity("Crystal Ballroom"),
  new activity("Mississippi Studio"),
  new activity("MODA Center"),
  new activity("Multnomah Falls"),
  new activity("Cannon Beach"),
  new activity("Washington Park"),
  new activity("Rose Garden"),
  new activity("Bonneville Dam"),
  new activity("Newport Aquarium"),
  new activity("Oaks Amusement Park"),
  new activity("Saturday Market"),
  new activity("The Grotto"),
  new activity("Mt. Hood"),
  new activity("Portland Kayak Tours"),
  new activity("BrewCycle"),
];

var tags = {
  kidFriendly: ["Oregon Zoo", "Children's Museum", "Art Museum",
                "Evergreen Aviation Museum", "Tillamook Creamery",
                "Newport Aquarium", "Pioneer Place",
                "Multnomah Falls", "Cannon Beach", "Rose Garden",
                "Oaks Amusement Park", "The Grotto", "Saturday Market",
                "Mt. Hood", "Bonneville Dam", "Washington Park",
                "International Rose Garden"],
  adult: ["BrewCycle"]
};
