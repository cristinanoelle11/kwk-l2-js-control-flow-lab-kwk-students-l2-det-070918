// Write your code in this file!
function scuberGreetingForFeet(feet){
if (feet <= 400){
  return "This one is on me!";
}
else if(1999 < feet&&feet < 2500){
  return "I will gladly take your thirty bucks.";
}
else {
  return "No can do.";
}
}

function ternaryCheckCity(city){
  return city ==='NYC' ?"Ok, sounds good." : "No go.";
}
function switchOnCharmTip(tip){
  switch (tip) {
  case 'Oranges':
    console.log('Oranges are $0.59 a pound.');
    break;
  case 'Mangoes':
  case 'Papayas':
    console.log('Mangoes and papayas are $2.79 a pound.');
    // expected output: "Mangoes and papayas are $2.79 a pound."
    break;
  default:
    console.log('Sorry, we are out of ' + expr + '.');
}

}