const router = require("express").Router();
const {
  nhaXuatBanControllers,
} = require("../controllers/NhaXuatBan.controller");
router.post("/create", nhaXuatBanControllers.create);
router.put("/update", nhaXuatBanControllers.edit);
router.get("/info", nhaXuatBanControllers.getOne);
router.get("/all", nhaXuatBanControllers.getAll);

module.exports = router;
