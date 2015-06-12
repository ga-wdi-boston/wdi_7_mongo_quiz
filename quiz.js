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

use houses

db.houses.insert({
  name: 'As High as Honor',
  motto: 'female'
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

db.houses.update({
 name: 'Stark' }, { $push: { member: 'Ned Stark'}});

db.houses.update({
 name: 'Stark' }, { $push: { member: 'Arya Stark'}});

db.houses.update({
 name: 'Stark' }, { $push: { member: 'Sansa Stark'}});

db.houses.update({
 name: 'Targaryen' }, { $push: { member: 'Viserys Targaryen'}});

db.houses.update({
 name: 'Targaryen' }, { $push: { member: 'Daenerys Targaryen'}});

db.houses.update({
 name: 'Arryn' }, { $push: { member: 'Jon Arryn'}});

// your code ends here

// Question 3
//
// House Arryn is not honorable!  Delete their motto.

// your code begins here

db.houses.update({
    name: "Arryn"
}, { $unset: { motto }});

// your code ends here

// Question 4
//
// You are George R. R. Martin!  Delete, without mercy,
// House Stark.

// your code begins here

db.houses.remove({ name: "Stark"});

// your code ends here
