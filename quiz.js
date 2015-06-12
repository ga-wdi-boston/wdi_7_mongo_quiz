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

db.createCollection("houses");

db.houses.insert({
  name: 'House Arryn',
  motto: 'As High as Honor',
});


db.houses.insert({
  name: 'House Stark',
  motto: 'Winter is Coming',
});

db.houses.insert({
  name: 'House Targaryen',
  motto: 'Fire and Blood',
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
  name: 'House Stark'
}, {
  $push: {
    members: {
      name: 'Ned Stark'
    }
  }
});
db.houses.update({
  name: 'House Stark'
}, {
  $push: {
    members: {
      name: 'Arya Stark'
    }
  }
});
db.houses.update({
  name: 'House Stark'
}, {
  $push: {
    members: {
      name: 'Sansa Stark'
    }
  }
});
db.houses.update({
  name: 'House Targaryen'
}, {
  $push: {
    members: {
      name: 'Viserys Targaryen'
    }
  }
});
db.houses.update({
  name: 'House Targaryen'
}, {
  $push: {
    members: {
      name: 'Daenerys Targaryen'
    }
  }
});
db.houses.update({
  name: 'House Arryn'
}, {
  $push: {
    members: {
      name: 'Jon Arryn'
    }
  }
});





// your code ends here

// Question 3
//
// House Arryn is not honorable!  Delete their motto.

// your code begins here





// your code ends here

// Question 4
//
// You are George R. R. Martin!  Delete, without mercy,
// House Stark.

// your code begins here





// your code ends here
