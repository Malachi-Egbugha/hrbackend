const express = require("express");
const router = express.Router();
const {validateBody, schemas} = require('../helpers/routehelpers');
const {signup, signin, test} = require('../controllers/auth');
const {protect, authorize} = require('../middleware/auth');
//const {userSignupValidator} = require('../validator');
router.post("/signup",protect,authorize('hr'), signup);
router.post("/signin",validateBody(schemas.authSchema),signin);
router.get("/test", test);


module.exports = router;

