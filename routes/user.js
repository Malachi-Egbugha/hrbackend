
const express= require("express")
const router= express.Router();
const {readall, stats} = require('../controllers/user');

router.get("/allusers", readall);
router.get("/stats", stats);

module.exports = router;



