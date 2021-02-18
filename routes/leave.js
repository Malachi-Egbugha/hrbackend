const express = require("express");
const router = express.Router();
//const {validateBody, schemas} = require('../helpers/routehelpers');
const {signup, readall} = require('../controllers/leave');
const {protect} = require('../middleware/auth');
//const {userSignupValidator} = require('../validator');
router.post("/signup",protect, signup);
router.get("/allleaves", readall);



module.exports = router;

