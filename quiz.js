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
  name: 'House Arryn',
  motto: 'As high as honor'
  })


  db.houses.insert({
  house: 'Stark',
  motto: 'Winter is coming'
  })


  db.houses.insert({
  house: 'Targaryen',
  motto: 'Fire and Blood'
  })



// your code ends here

// Question 2
//
// Using update and $push, add the following people to the
// respective houses

// Ned Stark
// Arya Stark
// Sansa Stark
// Viserys Targaryen
// Daenerys Targaryen
// Jon Arryn

// your code begins here

db.houses.update(
   { house: stark },
   { $push: { respective houses: 'Ned Stark', 'Arya Stark','Sansa Stark' }}

db.houses.update(
   { house: Targaryen },
   { $push: { respective houses: 'Viserys Targaryen', 'Daenerys Targaryen'}}

db.houses.update(
   { house: Arryn },
   { $push: { respective houses: 'Jon Arryn'}}

// your code ends here

// Question 3
//
// House Arryn is not honorable!  Delete their motto.

// your code begins here

db.motto.remove( { motto : "As high as honor" }, House Arryn )


// your code ends here

// Question 4
//
// You are George R. R. Martin!  Delete, without mercy,
// House Stark.

// your code begins here


db.houses.remove( { houses : "House Stark" })

// your code ends here
