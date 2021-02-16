
const express= require("express")
const router= express.Router();
const {readall} = require('../controllers/user');

router.get("/allusers", readall);

module.exports = router;



