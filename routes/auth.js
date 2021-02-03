const express = require("express");
const router = express.Router();
//const {validateBody, schemas, loginschemas} = require('../helpers/routehelpers');
const {signup, test} = require('../controllers/auth');
//const {userSignupValidator} = require('../validator');
router.post("/signup", signup);
router.get("/test", test);

//router.post("/signin",signin);
//router.get("/signout",signout);

module.exports = router;