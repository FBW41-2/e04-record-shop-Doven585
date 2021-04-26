const mongodb = require("mongodb");
// get all records
exports.getOrders = (req, res, next) => {
  // access db from global object   // select all records
  req.app.locals.db
    .collection("orders")
    .find()
    .toArray((err, docs) => {
      res.json(docs);
    });
};

exports.getOrder = (req, res, next) => {
  const { id } = req.params;
  const order = db.get("orders").find({ id });
  res.status(200).send(order);
};

exports.deleteOrder = (req, res, next) => {
  const { id } = req.params;
  const order = db.get("orders").remove({ id }).write();
};

// exports.updateOrder = (req, res, next) => {
//     const { id } = req.params;
//     const order = req.body;
//     const order = db.get('orders').find({ id }).assign(dt).write();

// }

exports.addOrder = (req, res, next) => {
    const order = req.body;
    //access db from globel object 
    req.app.locals.db.collection('orders').insertOne(order,(err,entry)=>{
    res.json(entry)
    }
    );
};

exports.updateOrder = (req, res, next) => {
  const { id } = req.params;
  const order = req.body;
  req.app.locals.db.collection("orders").updateOne(
    { _id: new mongodb.ObjectID(id) },
    {
      $set: order,
    },
    (err, entry) => {
      res.json(entry);
    }
  );
};
