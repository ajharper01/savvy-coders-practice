const names = ["Misra", "Stevens", "Jamison", "Wright", "Smith"];

const mapMr = names.map(name => `Mr. ${name}`);
//or const mapMr = names.map(function(name){ return `Mr. ${name}})
function addSalutation(names, sal) {
  return names.map(name => `${sal} ${name}`);
}
console.log(mapMr);
console.log(addSalutation(names, "Mrs."));

//EX of MAP
