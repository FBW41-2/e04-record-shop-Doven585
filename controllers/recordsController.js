const { restart } = require("nodemon");
const Record = require("../models/Record");
exports.getRecords = (req, res, next) => {
  Record.find((err, records) => {
    if (err) return console.error(err);
    res.json(records);
  })
};
exports.getRecord = (req, res, next) => {
  const { id } = req.params;
  const record = db.get("records").find({ id });
  res.status(200).send(record);
};
exports.deleteRecord = (req, res, next) => {
  const { id } = req.params;
  const record = db
    .get("records")
    .remove({ id })
    .write();
  res.status(200).send(record);
};
exports.updateRecord = (req, res, next) => {
  const { id } = req.params;
  const dt = req.body;
  const record = db
    .get("records")
    .find({ id })
    .assign(dt)
    .write();
  res.status(200).send(record);
};
exports.addRecord = (req, res, next) => {
  const record = req.body;
  Record.create(record, (err, result) => {
    if (err) return console.error(err);
    res.json(result);
  })
};