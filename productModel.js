const { default: mongoose } = require("mongoose");

const userschema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },

  img: {
    type: String,
    required: true,
  },
  price: {
    type: String,

    required: true,
  },
  des: {
    type: String,
    required: true,
  },
  cat: {
    type: String,
    required: true,
  },
  prodid: {
    type: String,
    required: true,
    unique: true,
  },
  time: {
    type: Date,
    default: Date.now(),
  },
});

const myproduct = mongoose.model("products", userschema);

module.exports = { myproduct };
