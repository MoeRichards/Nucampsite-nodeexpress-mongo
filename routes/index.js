const express = require("express");
const router = express.Router();
const usersRouter = require("./users");
const campsiteRouter = require("./campsiteRouter");
const partnerRouter = require("./partnerRouter");
const promotionRouter = require("./promotionRouter");

router.use("/users", usersRouter);
router.use("/campsites", campsiteRouter);
router.use("/promotions", promotionRouter);
router.use("/partners", partnerRouter);
/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

module.exports = router;
