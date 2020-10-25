# Create db:
use masterclass_project

# Create user:
db.createUser(
{	user: "joe",
	pwd: "doe",

	roles:[{ role: "dbOwner", db: "masterclass_project" }]});

# Import restaurants:
mongoimport.exe --db masterclass_project --collection restaurants --file C:\Users\felix\Documents\MasterClass_Big_Data\restaurants.json

# Insert random price
db.restaurants.updateMany(
  { price: { $exists: false } },
  [{ $set:
    { price:
      { $function: {
          body: function() { return Math.floor(Math.random() * (100 - 2 + 1)) + 2; },
          args: [],
          lang: "js"
      }}
    }
  }]
);

# Insert random rating
db.restaurants.updateMany(
  { reviews: { $exists: false } },
  [{ $set:
    { reviews:
      [{$function: {
          body: function() { return Math.floor(Math.random() * (5 - 0 + 1)) + 0; },
          args: [],
          lang: "js"
      }},
      {$function: {
          body: function() { return Math.floor(Math.random() * (5 - 0 + 1)) + 0; },
          args: [],
          lang: "js"
      }},
      {$function: {
          body: function() { return Math.floor(Math.random() * (5 - 0 + 1)) + 0; },
          args: [],
          lang: "js"
      }},
      {$function: {
          body: function() { return Math.floor(Math.random() * (5 - 0 + 1)) + 0; },
          args: [],
          lang: "js"
      }},
      {$function: {
          body: function() { return Math.floor(Math.random() * (5 - 0 + 1)) + 0; },
          args: [],
          lang: "js"
      }},
     ]
    }
  }]
);