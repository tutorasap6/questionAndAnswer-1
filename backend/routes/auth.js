const {
  login,
  register,
  getAllUsers,
  acceptUser,
  getUser,
} = require("../controllers/userController");

const router = require("express").Router();

router.post("/login", login);
router.post("/register", register);
router.get("/allusers", getAllUsers);
router.get("/changeState/:id", acceptUser);
router.get("/", getUser);

module.exports = router;
