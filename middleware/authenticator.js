const auth = require("../middleware/authenticator");
const checkAdmin = require("../middleware/checkAdminRole")

router
  .route("/")
  .get(auth, getRecords)
  .post(auth, checkAdmin, addRecord);

module.exports = router;