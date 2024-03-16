const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { myuser } = require("./models/userModel");

const { myproduct } = require("./models/productModel");
const cors = require("cors");
const user = require("./controllers/user");
const { default: mongoose } = require("mongoose");
const connectDb = require("./connection");
const multer = require("multer");
const app = express();
// const h = require("./upload");
const PORT = 9000;
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const corsOptions = {
  origin: "http://localhost:5173",
  methods: "GET, POST, DELETE, PATCH, PUT, HEAD",
  credentials: true,
};

app.use(cors(corsOptions));
const secretkey = "secret";
app.use(express.static("upload"));

connectDb("mongodb://localhost:27017/ecomint");
// console.log(connectDb);

//multer
let imgName;
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // console.log("hi");

    cb(null, "./upload");
  },

  filename: function (req, file, cb) {
    // console.log("hip");

    imgName = `${Date.now()}-${file.originalname}`;

    cb(null, imgName);
  },
});

const upload = multer({ storage });

app.post("/upload", upload.single("productImage"), (req, res) => {
  // console.log("hi");

  console.log(req.body);

  console.log(req.file);

  return res.send("uploaded");
});

// console.log(user.signuproute);
app.post("/signup", user.signuproute);

app.post("/login", user.loginroute);
app.get("/protected", user.protectedroute);

//product

app.post("/uploadProduct", async (req, res) => {
  // const body = req.body;

  await myproduct.create({
    title: req.body.title,

    img: imgName,
    price: req.body.price,
    des: req.body.des,
    cat: req.body.cat,
    prodid: req.body.prodid,
  });

  res.send("product added");
});

app.patch("/updateProduct", async (req, res) => {
  // const body = req.body;

  try {
    await myproduct.findOneAndUpdate(
      { prodid: req.body.prodid },
      {
        title: req.body.title,
        img: "ss",
        price: req.body.price,
        des: req.body.des,
        cat: req.body.cat,
      }
    );
    res.send("product updated");
  } catch (err) {
    console.log(err);
    res.send("product not updated");
  }
});

app.delete("/deleteProd", async (req, res) => {
  try {
    await myproduct.findOneAndDelete({ prodid: req.body.prodid });
    res.send("product ddeleted");
  } catch (err) {
    console.log(err);
    res.send("product not deleted");
  }
});

app.get("/getProduct", async (req, res) => {
  try {
    const data = await myproduct.find();
    console.log(typeof data);
    res.send(data);
  } catch (err) {
    console.log(err);
    res.send("products not found");
  }
});

app.get("/getOneProd", async (req, res) => {
  try {
    const data = await myproduct.findOne({ prodid: req.body.prodid });

    res.send(data);
  } catch (err) {
    console.log(err);
    res.send("products not found");
  }
});
app.listen(PORT, () => {
  console.log(`${PORT} is on `);
});
