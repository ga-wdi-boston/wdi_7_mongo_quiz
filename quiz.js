// Quiz: An Introduction to MongoDB

// do not change anything between here and question 1
// this empties out the people collection

var db = new Mongo().getDB('westeros');
db.dropDatabase();

// Question 1
//
// Create a collection called houses, and insert the following houses,
// with name and motto fields:
//
// House Arryn, motto "As High as Honor"
// House Stark, motto "Winter is Coming"
// House Targaryen, motto "Fire and Blood"

// your code begins here

db.houses.insert({
  name: 'Arryn',
  motto: 'As High as Honor'
});
db.houses.insert({
  name: 'Stark',
  motto: 'Winter is Coming'
});
db.houses.insert({
  name: 'Targaryen',
  motto: 'Fire and Blood'
});



// your code ends here

// Question 2
//
// Using update and $push, add the following people to the
// respective houses
//
// Ned Stark
// Arya Stark
// Sansa Stark
// Viserys Targaryen
// Daenerys Targaryen
// Jon Arryn

// your code begins here

//still only creating the last person in each list
//I though useing multi: true would fix that but it hasn't

db.houses.update({
  name: /stark/i
},{
  $push: {people: {
    name: 'Ned',
    name: 'Arya',
    name: 'Sansa'
  }}
},{multi: true});

db.houses.update({
  name: /targaryen/i
},{
  $push: {people: {
    name: 'Viserys',
    name: 'Daenerys'
  }}
},{multi: true});

db.houses.update({
  name: /Arryn/i
},{
  $push: {people: {
    name: 'Jon'
  }}
});



// your code ends here

// Question 3
//
// House Arryn is not honorable!  Delete their motto.

// your code begins here

db.houses.update({
  name: 'Arryn'
},{
  $unset:{motto: true}
});



// your code ends here

// Question 4
//
// You are George R. R. Martin!  Delete, without mercy,
// House Stark.

// your code begins here


db.houses.remove({
  name: 'Stark'
});


// your code ends here
