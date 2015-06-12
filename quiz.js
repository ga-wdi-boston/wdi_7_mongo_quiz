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

db.westeros.insert({houses:{name:"Arryn",
motto:"As High as Honor"},
{name:"Stark",
motto:"Winter is Coming"},
{name:"Targaryen",
motto:"Fire and Blood"}
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

db.westeros.update('houses.name':"Stark"
},
{
  $set: {
    people: "Ned Stark"
  }
});

db.westeros.update({'houses.name':"Stark"
},
{
  $push: {
    people: {"Arya Stark"}
  }
});

db.westeros.update({'houses.name':"Stark"
},
{
  $push: {
    people: {"Sansa Stark"}
  }
});

db.westeros.update({'houses.name':"Targaryen"
},
{
  $set: {
    people: {"Daenerys Targaryen"}
  }
});


db.westeros.update({'houses.name':"Stark"
},
{
  $push: {
    people: "Viserys Targaryen"
  }
});

db.westeros.update({'houses.name':"Arryn"
},
{
  $set: {
    people: "Jon Arryn"
  }
});

// your code ends here

// Question 3
//
// House Arryn is not honorable!  Delete their motto.

// your code begins here
db.westeros.update({'houses.name':"Arryn"
},
{
  $unset: {
    motto: true
  }
});




// your code ends here

// Question 4
//
// You are George R. R. Martin!  Delete, without mercy,
// House Stark.

// your code begins here

db.westeros.remove({ 'houses.name': "Stark"});



// your code ends here
