const db = require("../models");
const Restaurant = db.restaurants;

exports.create = (req, res) => {
    if(!req.body.long_coordinates){
        res.status(500).send({
            message: "Some error occurred while creating the restaurant."
          })
    }
    const restaurant = new Restaurant({
      location:{"coordinates":[req.body.long_coordinates,req.body.lat_coordinates],"type":"Point"},
      name: req.body.name,
      price: Math.floor(Math.random() * (100 - 2 + 1)) + 2,
      reviews: [ Math.floor(Math.random() * (5 - 0 + 1)) + 0, Math.floor(Math.random() * (5 - 0 + 1)) + 0, Math.floor(Math.random() * (5 - 0 + 1)) + 0, Math.floor(Math.random() * (5 - 0 + 1)) + 0, Math.floor(Math.random() * (5 - 0 + 1)) + 0]
    });
  
   
    restaurant
      .save(restaurant)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Tutorial."
        });
      });
  };



exports.findOne = (req, res) => {
    const id = req.params.id;
  
    Restaurant.findById(id)
      .then(data => {
        if (!data)
          res.status(404).send({ message: "Not found restaurant with id " + id });
        else res.send(data);
      })
      .catch(err => {
        res
          .status(500)
          .send({ message: "Error retrieving restaurant with id=" + id });
      });
  };

exports.update = (req, res) => {
    if (!req.body) {
      return res.status(400).send({
        message: "Data to update can not be empty!"
      });
    }
  
    const id = req.params.id;
  
    Restaurant.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot update restaurant with id=${id}. Maybe restaurant was not found!`
          });
        } else res.send({ message: "restaurant was updated successfully." });
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating restaurant with id=" + id
        });
      });
  };


exports.delete = (req, res) => {
    const id = req.params.id;
  
    Restaurant.findByIdAndRemove(id)
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot delete restaurant with id=${id}. Maybe Tutorial was not found!`
          });
        } else {
          res.send({
            message: "restaurant was deleted successfully!"
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete restaurant with id=" + id
        });
      });
  };