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
  name: 'Arryn',
  motto: 'as high as honor'
});

db.houses.insert({
  name: 'stark',
  motto: 'winter is coming'
});

db.houses.insert({
  name: 'Targaryen',
  motto: 'fire and blood'
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
  name: 'stark'
}, {
  $push: { people: {
    peopleName: 'ned', 'arya', 'sansa'}
  }
});

db.houses.update({
  name: 'Targaryen'
}, {
  $push: { peopleName: 'Viserys', 'Daenerys'}
  }
});

db.houses.update({
  name: 'Arryn'
},{
  $push: {peopleName: 'Jon'}
  }
});



// your code ends here

// Question 3
//
// House Arryn is not honorable!  Delete their motto.

// your code begins here
db.houses.update({
  name: 'Arryn'
}, { $unset: {motto:}
});




// your code ends here

// Question 4
//
// You are George R. R. Martin!  Delete, without mercy,
// House Stark.

// your code begins here
db.houses.remove({ name: 'stark'});




// your code ends here
