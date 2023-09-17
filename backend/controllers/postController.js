const Post = require("../models/postModel");
const User = require("../models/userModel");
const validator = require("validator");
const jwt = require("jsonwebtoken");

module.exports.addPost = async (req, res, next) => {
  try {
    console.log(req.body);
    const errors = "";
    const {
      token,
      questionTitle,
      courseCode,
      universityName,
      category,
      courseName,
      insertPrice,
      insertTagsHere,
      description,
    } = req.body;
    if (validator.isEmpty(questionTitle)) {
      return res.json({
        errors: "title is required.",
        status: false,
      });
    }
    if (validator.isEmpty(courseCode)) {
      return res.json({
        errors: "coursecode is required.",
        status: false,
      });
    }
    if (validator.isEmpty(universityName)) {
      return res.json({
        errors: "university is required.",
        status: false,
      });
    }
    if (validator.isEmpty(category)) {
      return res.json({
        errors: "category is required.",
        status: false,
      });
    }
    if (validator.isEmpty(courseName)) {
      return res.json({
        errors: "coursename is required.",
        status: false,
      });
    }
    if (validator.isEmpty(insertPrice)) {
      return res.json({
        errors: "price is required.",
        status: false,
      });
    }
    if (validator.isEmpty(insertTagsHere)) {
      return res.json({
        errors: "Tags is required.",
        status: false,
      });
    }
    if (validator.isEmpty(description)) {
      return res.json({
        errors: "description is required.",
        status: false,
      });
    }
    if (!token) {
      return res.status(400).send({ error: "Invalid User" });
    }
    const payload = jwt.verify(token, "HJS");
    const user = await User.findById(payload.id);
    if (!user) {
      throw new Error("Invalid User");
    }

    console.log(errors, req.body);
    const post = await Post.create({
      user: user._id,
      questionTitle,
      courseCode,
      universityName,
      category,
      courseName,
      insertPrice,
      insertTagsHere,
      description,
    });
    return res.json({ status: true, post });
  } catch (ex) {
    next(ex);
  }
};

module.exports.file_upload = async (req, res) => {
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
};

module.exports.getPosts = async (req, res, next) => {
  try {
    const posts = await Post.find({});
    return res.json(posts);
  } catch (ex) {
    next(ex);
  }
};

module.exports.getPost = async (req, res) => {
  try {
    const { id } = req.params;
    const post = await Post.findById(id);
    return res.json(post);
  } catch (e) {
    throw e;
  }
};

module.exports.post_update = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(req.body);
    const post = await Post.findByIdAndUpdate(id, req.body);
    return res.json(post);
  } catch (e) {
    throw e;
  }
};

module.exports.answer_upload = async (req, res) => {
  try {
    const { id } = req.params;
    const post = await Post.findById(id);
    post.answer = req.file.filename;
    console.log(req.file.filename);
    await post.save();
    return res.json(post);
  } catch (e) {
    throw e;
  }
};

module.exports.fetch_answered_posts = async (req, res) => {
  try {
    const posts = await Post.find();
    const newPosts = posts.filter((post) => !!post.answer === true);
    return res.json(newPosts);
  } catch (e) {
    throw e;
  }
};

module.exports.post_delete = (req, res) => {
  Post.findById(req.params.id, function (err, post) {
    if (!post) {
      res.status(404).send("post not found");
    } else {
      Post.findByIdAndRemove(req.params.id)
        .then(function () {
          res.status(200).json("post deleted");
        })
        .catch(function (err) {
          res.status(400).send("post delete failed.");
        });
    }
  });
};
