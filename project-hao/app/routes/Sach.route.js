const router = require("express").Router();
const { sachControllers } = require("../controllers/Sach.controller");

router.post("/create", sachControllers.create);
router.put("/update", sachControllers.edit);
router.get("/info", sachControllers.getOne);
router.get("/all", sachControllers.getAll);
router.get("/count", sachControllers.getCount);
router.get("/random", sachControllers.getAlltruid);

module.exports = router;
