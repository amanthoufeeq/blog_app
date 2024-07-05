const express = require("express");

const router = express.Router();

const{registerUser}=require("../controller/authController");

router.post('/register',registerUser);
// router.post('/login',loginUser);

module.exports = router;