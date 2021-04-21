const express = require('express');
const router = express.Router();
const apiRouter = require('./api')
const lowdb = require("lowdb")
const FileSync = require('lowdb/adapters/FileSync')
 
const adapter = new FileSync('db.json')
const db = lowdb(adapter)

exports.createRecords = (req, res)=> {
    db.get("records").push(req.body)
    res.json(db.get("records").value())
}
exports.getRecords = (req, res)=> {
    res.json(db.get("records").value())
}