// Code your solution here

function findMatching(drivers, name){
  let array = [];
  array = drivers.filter(driver=> driver.toLowerCase() == name.toLowerCase());
  return array;
}

function fuzzyMatch (drivers, name){
  let newArray = [];
  newArray = drivers.filter(driver=> name.includes(driver[0]));
  return newArray;
}

function matchName (drivers, name){
  let newArray = [];
  newArray = drivers.filter(driver=> driver.name == name);
  return newArray;
}
