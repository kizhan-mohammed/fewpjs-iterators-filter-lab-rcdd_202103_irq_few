// Code your solution here

function findMatching(drivers, name){
  let newArray = [];
  newArray = drivers.filter(driver=> driver.toLowerCase() == name.toLowerCase());
  return newArray;
}

function fuzzyMatch (drivers, name){
  let newArray = [];
  newArray = drivers.filter(driver=>text.includes(driver[0]));
  return newArray;
}

function matchName (drivers, name){
  let newArray = [];
  newArray = drivers.filter(driver=>driver.name==text);
  return newArray;
}
