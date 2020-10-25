module.exports = app => {
    const restaurants = require("../controllers/masterClass.controller.js");
  
    var router = require("express").Router();
  
    
    router.post("/", restaurants.create);
  
   
    router.get("/:id", restaurants.findOne);
  
    
    router.put("/:id", restaurants.update);
  
    
    router.delete("/:id", restaurants.delete);
  
    app.use('/restaurants', router);
  };