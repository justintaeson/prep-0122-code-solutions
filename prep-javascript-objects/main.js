var person = {
  firstName: 'Justin',
  hobby: 'basketball',
  lastName: 'Son'
};
console.log(person);

var fullName = "The person's name is:" + ' ' + person.firstName + ' ' + person.lastName + '.';
console.log(fullName);

person.job = 'client success';
console.log("The person's current job is:" + ' ' + person.job + '.');

person.previousJob = 'digital marketing';
console.log("The person's previous job is:" + ' ' + person.previousJob + '.');

console.log(person);
