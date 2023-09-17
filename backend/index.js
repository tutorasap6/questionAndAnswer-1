const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const authRoutes = require("./routes/auth");
const postRoutes = require("./routes/post");
const multer = require("multer");
const path = require("path");
const Post = require("./models/postModel");
const User = require('./models/userModel');
const fs = require("fs");
const jwt = require('jsonwebtoken')

const fileRenamer = (filename) => {
  const queHoraEs = Date.now();
  const regex = /[\s_-]/gi;
  const fileTemp = filename.replace(regex, ".");
  let arrTemp = [fileTemp.split(".")];
  return `${arrTemp[0]
    .slice(0, arrTemp[0].length - 1)
    .join("_")}${queHoraEs}.${arrTemp[0].pop()}`;
};

const storage = multer.diskStorage({
  destination: path.join(__dirname, "./postFile"),
  filename: (req, file, cb) => {
    console.log(file);
    cb(null, fileRenamer(file.originalname));
  },
});

const upload1 = multer({ storage });
const app = express();
require("dotenv").config();

app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB Connetion Successfull");
  })
  .catch((err) => {
    console.log(err.message);
  });

app.use("/api/auth", authRoutes);
app.use("/api/posts", postRoutes);
app.post("/api/file/:id", upload1.single("file"), async (req, res) => {
  try {
    const { id } = req.params;
    const post = await Post.findById(id);
    post.file = req.file.filename;
    console.log(req.file.filename);
    await post.save();
    return res.json(post);
  } catch (e) {
    throw e;
  }
});

app.use("/", express.static(path.join(__dirname, "./postFile")));

app.get('/check', async(req, res) => {
  try{
    const token = req.headers['x-auth-token'];
    if(!token) throw new Error('Unauthorized');
    const payload = jwt.verify(token, 'HJS');
    const user = await User.findById(payload.id);
    user.downloadable = true;
    await user.save();
    return res.json('success')
  }catch(e){
    return res.status(400).send(e.message)
  }
})

app.get("/file/:id", async (req, res) => {
  try {
    const token = req.headers['x-auth-token'];
    if(!token) throw new Error('Unauthorized');
    const payload = jwt.verify(token, 'HJS');
    const user = await User.findById(payload.id);
    if(!user.downloadable) throw new Error('You are not allowed to download');
    user.downloadable = false;
    await user.save();
    const id = req.params.id;
    let filePath = path.join(__dirname, `./uploads/${id}`);
    return res.sendFile(filePath);
  } catch (e) {
    return res.status(400).send(e.message)
  }
});

app.listen(process.env.PORT, () =>
  console.log(`Server started on ${process.env.PORT}`)
);
