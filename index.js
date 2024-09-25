function scuberGreetingForFeet(distance){
  // Write your code here!
  if (distance <= 400) {
    return "This one is on me!";
  } else if (distance > 400 && distance <= 2000) {
    return "That will be twenty bucks.";
  } else if (distance > 2000 && distance <= 2500) {

    return "I will gladly take your thirty bucks.";
  } else {
    return "No can do.";
  }
}
  

function ternaryCheckCity(destination){
  // Write your code here!
  return destination === "NYC" ? "Ok, sounds good." : "No go.";
  return destination === "New York" ? "Welcome to the Big Apple!" : 
  destination === "Los Angeles" ? "Welcome to the City of Angels!" :
  destination === "Chicago" ? "Welcome to the Windy City!" : 
 "Destination not recogninized"
}


function switchOnCharmFromTip(tip) {
  // Write your code here!
  switch (tip) {
    case "generous":
      return "Thank you so much.";
    case "not as generous":  
      return "Thank you.";
    default:
      return "Bye.";  
  }
}


