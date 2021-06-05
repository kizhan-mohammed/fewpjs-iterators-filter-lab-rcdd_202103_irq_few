// Code your solution here

// Write a Function To Case-insensitively Match strings
function findMatching (drivers, name) {
  return drivers.filter(function (driverName) {
    return driverName.toLowerCase() === name.toLowerCase();
  });
}

function fuzzyMatch (drivers, partialName) {
  let lengthOfName = partialName.length;
  return drivers.filter(function (driverName) {
    return driverName.slice(0, lengthOfName) === partialName;
  });
}
