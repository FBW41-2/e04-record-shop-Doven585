const express = require('express');
const router = express.Router();
//const apiRouter = require('./api')
// const lowdb = require("lowdb")
// const FileSync = require('lowdb/adapters/FileSync')
 
// const adapter = new FileSync('db.json')
// const db = low(adapter)
const { getRecords, createRecords } = require("../controllers/api")
/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('api', { title: 'Express' });
// });
router
.route("/records")
.get(getRecords)
.post(createRecords);

// router.get("/records", getRecords)
// router.post("/records", createRecords)
 module.exports = router;
//module.exports = lowdb;
