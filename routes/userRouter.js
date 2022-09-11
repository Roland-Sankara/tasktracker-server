const router = require("express").Router();

// controllers
const {
  getAllUsers,
  registerUser,
  loginUser,
} = require("../controllers/userController");

router.get("/", getAllUsers);
router.post("/signup", registerUser);
router.post("/login", loginUser);

module.exports = router;
