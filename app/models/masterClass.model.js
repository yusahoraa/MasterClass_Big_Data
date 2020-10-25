module.exports = mongoose => {
    const restaurant = mongoose.model(
      "restaurant",
      mongoose.Schema(
        {
          location: Object,
          name: String,
          price: Number,
          reviews: Array
        })
    );
  
    return restaurant;
  };