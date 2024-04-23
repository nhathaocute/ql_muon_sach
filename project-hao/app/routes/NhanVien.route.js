const router = require("express").Router();
const { nhanVienControllers } = require("../controllers/NhanVien.controller");

router.post("/create", nhanVienControllers.create);
router.post("/login", nhanVienControllers.login);
router.get("/info", nhanVienControllers.getInfo);

module.exports = router;
