const router = require("express").Router();
const { LoaiControllers } = require("../controllers/LoaiSach.controller");

router.post("/create", LoaiControllers.create);
router.put("/update", LoaiControllers.edit);
router.get("/info", LoaiControllers.getOne);
router.get("/all", LoaiControllers.getAll);

module.exports = router;
