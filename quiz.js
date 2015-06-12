// Quiz: An Introduction to MongoDB

// HI MAX/ INSTRUCTOR! I have checked this over and think it is right, but I cannot seem to find the houses in the mongo database. Please let me know in the grading if you figure out my error!


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
  name: "House Arryn",
  motto: "As High as Honor"
});

db.houses.insert({
  name: "House Stark",
  motto: "Winter is Coming"
});

db.houses.insert({
  name: "House Targaryen",
  motto: "Fire and Blood"
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
  name: 'House Arryn'
  }, {
    $push: {person: 'Jon Arryn'
    }
});

db.houses.update({
  name: 'House Stark'
  }, {
    $push: {person: 'Ned Stark',
            person: 'Arya Stark',
            person: 'Sansa Stark'
    }
});

db.houses.update({
  name: 'House Targaryen'
  }, {
    $push: {person: 'Daenerys Targaryen',
            person: 'Viserys Targaryen'
    }
});

//your code ends here

// Question 3
//
// House Arryn is not honorable!  Delete their motto.

// your code begins here

db.houses.update({
    name: "House Arryn"
  }, {
    $unset: { motto: 1
  }
});

//your code ends here

// Question 4
//
// You are George R. R. Martin!  Delete, without mercy,
// House Stark.

// your code begins here

db.houses.remove({ name: 'House Stark'});

// your code ends here
