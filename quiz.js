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


// for terminal "use weseros"

db.westeros.insert({
    name : 'Arryn',
    motto : 'As High as Honor',
});

db.westeros.insert({
    name : 'Stark',
    motto : 'Winter is Coming',
});

db.westeros.insert({
    name : 'Targaryen',
    motto : 'Fire and Blood',
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
db.westeros.update({
    name: 'Stark'
}, {
    $push: { people: 'Ned Stark' }
});

db.westeros.update({
    name: 'Stark'
}, {
    $push: { people: 'Arya Stark' }
});

db.westeros.update({
    name: 'Stark'
}, {
    $push: { people: 'Sansa Stark' }
});

db.westeros.update({
    name: 'Targaryen'
}, {
    $push: { people: 'Viserys Targaryen' }
});

db.westeros.update({
    name: 'Targaryen'
}, {
    $push: { people: 'Daenerys Targaryen' }
});

db.westeros.update({
    name: 'Jon Arryn'
}, {
    $push: { people: 'Jon Arryn' }
});

// your code ends here




// Question 3
//
// House Arryn is not honorable!  Delete their motto.

// your code begins here

db.westeros.update({
    name: "Arryn"
}, {
  $unset: { motto: 1 }
});

// your code ends here



// Question 4
//
// You are George R. R. Martin!  Delete, without mercy,
// House Stark.

// your code begins here

db.westeros.remove({ name: "Stark"});



// your code ends here
